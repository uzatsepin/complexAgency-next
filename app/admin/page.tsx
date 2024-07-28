"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { pb } from "@/pb";
import Cookies from "js-cookie";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "@/components/Works/PortfolioCard/PortfolioCard";
import { Modal, ModalBody, ModalContent, ModalProvider, ModalTrigger, useModal } from "@/components/ui/animated-modal";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import MultiSelect from "@/components/Others/MultiSelect";
import { Toaster, toast } from "sonner";

const AdminPage = () => {
    const { setOpen } = useModal();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [type, setType] = useState("");
    const [technologiesIcons, setTechnologiesIcons] = useState<string[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [hoverText, setHoverText] = useState("");
    const [isSendLoading, setIsSendLoading] = useState(false);

    const options = [
        { value: "devicon:figma", label: "Figma" },
        { value: "devicon:html5", label: "HTML 5" },
        { value: "logos:react", label: "React" },
        { value: "devicon:css3", label: "CSS3" },
        { value: "devicon:vuejs", label: "VueJS" },
        { value: "devicon:javascript", label: "JavaScript" },
        { value: "devicon:jquery", label: "JQuery" }
    ];

    const sendPortfolioItem = async () => {
        const portfolioItem = {
            image,
            title,
            descr,
            type,
            technologiesIcons: selectedOptions,
            hoverText
        };
        try {
            setIsSendLoading(true);
            await pb.collection("portfolio").create(portfolioItem);
            toast.success("Работа успешно добавлена");
            router.push("/admin");
            setImage("");
            setTitle("");
            setDescr("");
            setType("");
            setTechnologiesIcons([]);
            setHoverText("");
            setSelectedOptions([]);
            setOpen(false);
        } catch (e) {
            console.log(e);
            toast.error("Ошибка при добавлении работы");
        } finally {
            setIsSendLoading(false);
        }
    };

    const portfolio = [
        {
            id: 1,
            image: "/projects/phoenix-auto.png",
            title: "Phoenix Auto",
            descr: "Дизайн сайту автопідбору Pheonix Auto",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 5 000 грн"
        },
        {
            id: 2,
            image: "/projects/sprintech.png",
            title: "SprtiTech",
            descr: "Дизайн і розробка сайту SprtiTech",
            type: "#Project",
            technologiesIcons: ["devicon:figma", "devicon:html5", "logos:react", "devicon:css3"],
            hoverText: "Розробка коштувала 7 000 грн"
        },
        {
            id: 3,
            image: "/projects/starlab.png",
            title: "StarLab",
            descr: "Дизайн і розробка сайту StarLab",
            type: "#Project",
            technologiesIcons: ["devicon:figma", "devicon:html5", "devicon:vuejs", "devicon:css3"],
            hoverText: "Розробка коштувала 12 000 грн"
        },
        {
            id: 4,
            image: "/projects/blog.png",
            title: "Personal Blog",
            descr: "Дизайн персонального блогу для ментора",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 4 000 грн"
        },
        {
            id: 5,
            image: "/projects/market-making.png",
            title: "Айдентика Market-Making",
            descr: "Айдентика/логотип Market-Making",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 3 000 грн"
        },
        {
            id: 6,
            image: "/projects/training.png",
            title: "Дизайн буклету спортзалу",
            descr: "Дизайн буклету для компанії, яка проводить тренування",
            type: "#Design",
            technologiesIcons: ["devicon:figma"],
            hoverText: "Розробка коштувала 2 000 грн"
        },
        {
            id: 7,
            image: "/projects/catford.png",
            title: "Розробка сайту Catford",
            descr: "Розробка сайту за готовим макетом",
            type: "#Develop",
            technologiesIcons: ["devicon:html5", "devicon:css3", "devicon:jquery"],
            hoverText: "Розробка коштувала 4 000 грн"
        },
        {
            id: 8,
            image: "/projects/bender-host.png",
            title: "Розробка сайту & адмін панелі",
            descr: "Розробка сайту та адмін панелі BerderHost",
            type: "#Develop",
            technologiesIcons: ["devicon:html5", "devicon:css3", "devicon:vuejs", "devicon:javascript"],
            hoverText: "Розробка коштувала 6 000 грн"
        }
    ];

    useEffect(() => {
        const checkAuth = async () => {
            const authCookie = Cookies.get("pb_auth");
            if (authCookie) {
                const parsedAuthData = JSON.parse(authCookie);
                pb.authStore.save(parsedAuthData.token, parsedAuthData.record);
            }
            const isAuthenticated = pb.authStore.isValid;
            if (!isAuthenticated) {
                router.push("/login");
            }
            setLoading(false);
        };

        checkAuth();
    }, [router]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Icon
                    icon="eos-icons:loading"
                    className="w-[120px] h-[120px] text-[#2eecc5]"
                />
            </div>
        );
    }

    return (
        <div className="h-screen flex">
            <div className="bg-zinc-800 w-[300px] py-6">
                <div className="flex items-center justify-center">
                    <Image
                        src="/logo.svg"
                        width={131}
                        height={65}
                        alt="logo"
                        className="cursor-pointer h-12 w-32 md:h-16 md:w-36"
                    />
                </div>
                <div className="mt-8">
                    <ul className="flex flex-col p-4 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 cursor-pointer transition-all duration-300">
                        <li>
                            <Link
                                href="#"
                                className="flex gap-2 items-center">
                                <Icon
                                    icon="bytesize:portfolio"
                                    className="text-white k h-6 w-6"
                                />
                                Портфолио
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-10 w-full">
                <div className="flex justify-between pb-4 border-b border-b-[#2EECC5]">
                    <div>
                        <h1 className="text-3xl font-bold">Портфолио</h1>
                        <p className="mt-2 text-lg text-white/80">
                            На данный момент добавлено <span>4</span> работы портфолио
                        </p>
                    </div>
                    <ModalProvider>
                        <div>
                            <Modal>
                                <ModalTrigger className="p-0">
                                    <div className="flex gap-2 w-full text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white">
                                        <Icon icon="ph:plus-bold" />
                                        Додати роботу
                                    </div>
                                </ModalTrigger>
                                <ModalBody className="bg-zinc-900 pb-12">
                                    <ModalContent>
                                        <div className="text-2xl">Додати портфоліо</div>

                                        <div className="mt-8">
                                            <div className="relative w-full">
                                                <label
                                                    htmlFor="name"
                                                    className="flex mb-2 gap-2 items-center"
                                                    data-tooltip-id="image"
                                                    data-tooltip-content="Тільки посилання. Наприклад з https://uk.imgbb.com/"
                                                    data-tooltip-place="right-start">
                                                    <Icon icon="material-symbols:info" />
                                                    Зображення
                                                </label>
                                                <Tooltip id="image" />
                                                <input
                                                    id="name"
                                                    type="text"
                                                    className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                                    placeholder="https://i.ibb.co/Hz3Z38H/sprintech.png"
                                                    value={image}
                                                    onChange={(e) => setImage(e.target.value)}
                                                />
                                            </div>

                                            <div className="mt-2">
                                                <div className="relative w-full">
                                                    <label
                                                        htmlFor="contact"
                                                        className="block mb-2">
                                                        Назва
                                                    </label>
                                                    <input
                                                        id="contact"
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
                                                        htmlFor="contact"
                                                        className="block mb-2">
                                                        Опис
                                                    </label>
                                                    <input
                                                        id="contact"
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
                                                        htmlFor="name"
                                                        className="flex mb-2 gap-2 items-center"
                                                        data-tooltip-id="image"
                                                        data-tooltip-content="#design, #develop, любой тип через #"
                                                        data-tooltip-place="right-start">
                                                        <Icon icon="material-symbols:info" />
                                                        Тип роботи
                                                    </label>
                                                    <Tooltip id="image" />
                                                    <input
                                                        id="name"
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
                                                        htmlFor="contact"
                                                        className="block mb-2">
                                                        Текст при наведенні
                                                    </label>
                                                    <input
                                                        id="contact"
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
                                                    selectedOptions={selectedOptions}
                                                    onChange={setSelectedOptions}
                                                    placeholder="Обери технології (можна декілька)"
                                                />
                                            </div>

                                            <div className="mt-8 flex justify-center">
                                                <div
                                                    className="flex gap-2 text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white"
                                                    onClick={sendPortfolioItem}>
                                                    <Icon icon="ph:plus-bold" />
                                                    Додати роботу
                                                </div>
                                            </div>
                                        </div>
                                    </ModalContent>
                                </ModalBody>
                            </Modal>
                        </div>
                    </ModalProvider>
                </div>

                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Добавленные работы</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                        {portfolio.map((item) => {
                            return (
                                <div key={item.id}>
                                    <PortfolioCard {...item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
};

export default AdminPage;
