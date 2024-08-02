import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { pb } from "@/pb";
import dayjs from "dayjs";

export interface IFastRequest {
  id: string;
  title: string;
  contact: string;
  from: string;
  created: string;
  updated: string;
  column: string;
}

interface ColumnProps {
  title: string;
  headingColor: string;
  cards: IFastRequest[];
  column: string;
  setCards: React.Dispatch<React.SetStateAction<IFastRequest[]>>;
}

interface CardProps {
  title: string;
  id: string;
  column: string;
  contact: string;
  created: string;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: IFastRequest) => void;
}

const KanbanBoard: React.FC = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};

const Board: React.FC = () => {
  const [cards, setCards] = useState<IFastRequest[]>([]);

  const fetchRequest = async () => {
    try {
      const requests = await pb.collection("fastRequest").getFullList<IFastRequest>({
        sort: "-created",
      });
      setCards(requests);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="grid grid-cols-5 w-full gap-6 overflow-scroll p-12">
      <Column
        title="Нові"
        column="new"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="В роботі"
        column="inwork"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Відмовлено"
        column="canceled"
        headingColor="text-red-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Оброблені"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column: React.FC<ColumnProps> = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: IFastRequest) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element?.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === -1) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);

      pb.collection("fastRequest").update(cardId, { column });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    if (el.element) {
      el.element.style.opacity = "1";
    }
  };

  const getNearestIndicator = (e: React.DragEvent<HTMLDivElement>, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = (): HTMLElement[] => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-full shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} column={column} />
        {/* <AddCard column={column} setCards={setCards} /> */}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, id, column, handleDragStart, contact, created }) => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragStart(e, { title, id, column, contact, created, from: '', updated: '' });
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div layout layoutId={id} className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
        <div
          draggable="true"
          onDragStart={onDragStart}
        >
          <p className="text-sm text-neutral-100">
            <span className="mt-0.5 text-neutral-300">Імʼя:</span> {title}
          </p>
          <p className="text-sm text-neutral-100">
            <span className="mt-0.5 text-neutral-300">Контакт:</span> {contact}
          </p>
          <p className="text-sm text-neutral-500 flex justify-end mt-2">
            {dayjs(created).format("DD.MM.YYYY HH:mm")}
          </p>
        </div>
      </motion.div>
    </>
  );
};

const DropIndicator: React.FC<{ beforeId?: string | null; column: string }> = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-[#2EECC5] opacity-0"
    />
  );
};

const BurnBarrel: React.FC<{ setCards: React.Dispatch<React.SetStateAction<IFastRequest[]>> }> = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");
    setCards((prev) => prev.filter((c) => c.id !== cardId));
    setActive(false);
    pb.collection('fastRequest').delete(cardId);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <Icon icon="fa6-solid:fire" /> : <Icon icon="fa6-solid:trash" />}
    </div>
  );
};

const AddCard: React.FC<{ column: string; setCards: React.Dispatch<React.SetStateAction<IFastRequest[]>> }> = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim().length) return;

    const newCard: IFastRequest = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
      contact: '',
      from: '',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
    };

    setCards((prev) => [...prev, newCard]);
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-[#2EECC5] bg-[#2EECC5]/20 p-3 text-sm text-neutral-50 placeholder-[#2EECC5] focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              закрити
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-[#2EECC5]/20 px-3 py-1.5 text-xs text-neutral-100 transition-colors hover:bg-neutral-300"
            >
              <span>Додати</span>
              <Icon icon="fa6-solid:plus" />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <Icon icon="fa6-solid:plus" />
        </motion.button>
      )}
    </>
  );
};

export default KanbanBoard;