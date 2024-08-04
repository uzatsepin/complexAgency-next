"use client";
import {Toaster, toast} from "sonner";
import Image from "next/image";
import Link from "next/link";
import {Icon} from "@iconify/react";
import React, {useEffect, useState} from "react";
import {pb} from "@/pb";
import PortfolioCard from "@/components/Works/PortfolioCard/PortfolioCard";
import MultiSelect from "@/components/Others/MultiSelect";
import {IPortfolio} from "@/components/Works/Works";

const EditPage = ({params}: { params: { id: string } }) => {
    const [portfolioItem, setPortfolioItem] = useState<IPortfolio>();
    const [loading, setLoading] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState<{ value: string; label: string }[]>([]);
    const [image, setImage] = useState<string | undefined>("");
    const [title, setTitle] = useState<string | undefined>("");
    const [descr, setDescr] = useState<string | undefined>("");
    const [type, setType] = useState<string | undefined>("");
    const [hoverText, setHoverText] = useState<string | undefined>("");
    const [technologiesIcons, setTechnologiesIcons] = useState<string[]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const options = [
        {value: "devicon:figma", label: "Figma"},
        {value: "devicon:html5", label: "HTML 5"},
        {value: "logos:react", label: "React"},
        {value: "devicon:css3", label: "CSS3"},
        {value: "devicon:vuejs", label: "VueJS"},
        {value: "devicon:javascript", label: "JavaScript"},
        {value: "devicon:jquery", label: "JQuery"}
    ];

    const fetchOnePortfolioItem = async () => {
        try {
            const record = await pb.collection("portfolio").getOne<IPortfolio>(params.id);
            setPortfolioItem(record);
            setImage(record?.image);
            setTitle(record?.title);
            setDescr(record?.descr);
            setType(record?.type);
            setHoverText(record?.hoverText);
            setTechnologiesIcons(record.technologiesIcons || []);
            setSelectedOptions(mapTechnologiesToOptions(record.technologiesIcons || []));
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOnePortfolioItem();
    }, []);

    const mapTechnologiesToOptions = (technologies: string[]) => {
        return technologies
            .map((tech) => options.find((option) => option.value === tech))
            .filter((option): option is { value: string; label: string } => option !== undefined);
    };

    const handleMultiSelectChange = (selected: { value: string; label: string }[]) => {
        setSelectedOptions(selected);
        setTechnologiesIcons(selected.map((option) => option.value));
    };

    const saveChanges = async () => {
        const formData = new FormData();

        if (selectedFile) {
            formData.append('image', selectedFile);
        }

        formData.append('title', title || '');
        formData.append('descr', descr || '');
        formData.append('type', type || '');
        formData.append('hoverText', hoverText || '');

        if (Array.isArray(technologiesIcons)) {
            technologiesIcons.forEach((icon) => {
                formData.append('technologiesIcons', icon);
            });
        } else {
            formData.append('technologiesIcons', technologiesIcons);
        }

        try {
            await pb.collection("portfolio").update(params.id, formData);
            toast.success("Изменения сохранены");
            await fetchOnePortfolioItem();
        } catch (error) {
            console.error("Ошибка сохранения изменений:", error);
            toast.error("Ошибка при сохранении изменений");
        }
    };

    return (
        <div className="h-screen">
                <div className="flex justify-between pb-4 border-b border-b-[#2EECC5]">
                    <div>
                        <h1 className="text-3xl font-bold">Редагування {portfolioItem?.title}</h1>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2">
                    <div className="">
                        <div className="relative w-full">
                            <label
                                htmlFor="image"
                                className="flex mb-2 gap-2 items-center"
                                data-tooltip-id="image"
                                data-tooltip-content="Тільки посилання. Наприклад з https://uk.imgbb.com/"
                                data-tooltip-place="right-start">
                                <Icon icon="material-symbols:info"/>
                                Зображення
                            </label>
                            <input
                                id="image"
                                type="file"
                                className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="mt-2">
                            <div className="relative w-full">
                                <label
                                    htmlFor="title"
                                    className="block mb-2">
                                    Назва
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="Розробка сайту Catford..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="relative w-full">
                                <label
                                    htmlFor="descr"
                                    className="block mb-2">
                                    Опис
                                </label>
                                <input
                                    id="descr"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="Розробка сайту за готовим макетом..."
                                    value={descr}
                                    onChange={(e) => setDescr(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="relative w-full">
                                <label
                                    htmlFor="type"
                                    className="flex mb-2 gap-2 items-center"
                                    data-tooltip-id="type"
                                    data-tooltip-content="#design, #develop, любой тип через #"
                                    data-tooltip-place="right-start">
                                    <Icon icon="material-symbols:info"/>
                                    Тип роботи
                                </label>
                                <input
                                    id="type"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="#design"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="relative w-full">
                                <label
                                    htmlFor="hoverText"
                                    className="block mb-2">
                                    Текст при наведенні
                                </label>
                                <input
                                    id="hoverText"
                                    type="text"
                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                    placeholder="Розробка коштувала 12 000 грн."
                                    value={hoverText}
                                    onChange={(e) => setHoverText(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2">Обери технології</label>
                            <MultiSelect
                                options={options}
                                selectedOptions={technologiesIcons}
                                onChange={setTechnologiesIcons}
                                placeholder="Обери технології (можна декілька)"
                            />
                        </div>

                        <div
                            className="mt-6 flex gap-2 w-full text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white"
                            onClick={() => saveChanges()}>
                            <Icon icon="material-symbols:save"/>
                            Зберегти
                        </div>
                    </div>
                    <div className="mx-auto w-fit">
                        <PortfolioCard
                            image={portfolioItem?.image}
                            title={portfolioItem?.title}
                            descr={portfolioItem?.descr}
                            type={portfolioItem?.type}
                            technologiesIcons={technologiesIcons}
                            hoverText={portfolioItem?.hoverText}
                            id={portfolioItem?.id}
                            collectionId={portfolioItem?.collectionId}
                            created={portfolioItem?.created}
                            updated={portfolioItem?.updated}
                            collectionName={portfolioItem?.collectionName}
                        />
                    </div>
                </div>
            <Toaster position="top-right"/>
            </div>
    );
};

export default EditPage;
