"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { pb } from "@/pb";
import Cookies from "js-cookie";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import MultiSelect from "@/components/Others/MultiSelect";
import { Toaster, toast } from "sonner";
import PortfolioCardAdmin from "@/components/Works/PortfolioCard/PortfolioCardAdmin";
import CustomModal from "@/components/Others/CustomModal";
import {IPortfolio} from "@/components/Works/Works";

const AdminPage = () => {
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
    const [portfolioItems, setPortfolioItems] = useState<IPortfolio[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const options = [
        { value: "devicon:figma", label: "Figma" },
        { value: "devicon:html5", label: "HTML 5" },
        { value: "logos:react", label: "React" },
        { value: "devicon:css3", label: "CSS3" },
        { value: "devicon:vuejs", label: "VueJS" },
        { value: "devicon:javascript", label: "JavaScript" },
        { value: "devicon:jquery", label: "JQuery" }
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log(file);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await pb.collection("portfolio").delete(id);
            toast.success("Робота успішно видалена");
            router.push("/admin");
            await fetchPortfolioItems();
        } catch (e) {
            console.log(e);
            toast.error("Помилка при видаленні роботи" + e);
        }
    };

    const fetchPortfolioItems = async () => {
        try {
            const records = await pb.collection("portfolio").getFullList<IPortfolio>({
                sort: "-created"
            });
            setPortfolioItems(records);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        } finally {
            setLoading(false);
        }
    };

    const sendPortfolioItem = async () => {
        const formData = new FormData();

        if (selectedFile) {
            formData.append('image', selectedFile);
        }

        formData.append('title', title);
        formData.append('descr', descr);
        formData.append('type', type);

        // Handle technologiesIcons differently
        selectedOptions.forEach((option, index) => {
            formData.append(`technologiesIcons`, option);
        });

        formData.append('hoverText', hoverText);

        try {
            setIsSendLoading(true);
            await pb.collection("portfolio").create(formData);
            toast.success("Нова робота успішно додана");
            await fetchPortfolioItems();
            router.push("/admin");
            setSelectedFile(null);
            setImage("");
            setTitle("");
            setDescr("");
            setType("");
            setTechnologiesIcons([]);
            setHoverText("");
            setSelectedOptions([]);
            setIsModalOpen(false);
        } catch (e) {
            console.log(e);
            toast.error("Помилка при додаванні роботи: " + (e as Error).message);
        } finally {
            setIsSendLoading(false);
        }
    };

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
                return;
            }
            setLoading(false);
        };

        checkAuth();
    }, [router]);

    useEffect(() => {
        fetchPortfolioItems();
    }, []);

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
                            На даний момент додано робіт: <span className="font-bold text-xl">{portfolioItems.length}</span>
                        </p>
                    </div>
                    <div>
                        <div
                            className="flex gap-2 w-full text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white"
                            onClick={() => setIsModalOpen(true)}>
                            <Icon icon="ph:plus-bold" />
                            Додати роботу
                        </div>
                        <CustomModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}>
                            <div className="text-2xl">Додати портфоліо</div>

                            <div className="mt-8">
                                <div className="relative w-full">
                                    <label
                                        htmlFor="fileInput"
                                        className="flex mb-2 gap-2 items-center"
                                        data-tooltip-id="image"
                                        data-tooltip-content="Тільки посилання. Наприклад з https://uk.imgbb.com/"
                                        data-tooltip-place="right-start">
                                        <Icon icon="material-symbols:info" />
                                        Зображення
                                    </label>
                                    <Tooltip id="image" />
                                    <input
                                        id="fileInput"
                                        type="file"
                                        className="outline-none w-full bg-zinc-800 py-4 px-6 border border-[#ffffff]/20 rounded-full cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border:[#2CEEC2] focus:shadow-shadowInput"
                                        placeholder="https://i.ibb.co/Hz3Z38H/sprintech.png"
                                        onChange={handleFileChange}
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
                                    <button
                                        className="flex gap-2 text-center items-center justify-center sm:text-lg rounded-[41px] border-[1.5px] border-[#2EECC5] px-8 py-2 bg-[#2EECC5]/10 hover:bg-[#2EECC5]/50 hover:border-[#2EECC5] cursor-pointer transition-all duration-300 text-white disabled:opacity-40"
                                        onClick={sendPortfolioItem}
                                        disabled={title.length === 0 && descr.length === 0}>
                                        <Icon icon="ph:plus-bold" />
                                        Додати роботу
                                    </button>
                                </div>
                            </div>
                        </CustomModal>
                    </div>
                </div>

                {portfolioItems.length > 0 ? (<div className="mt-10">
                    <h1 className="text-2xl font-bold">Додані роботи:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                        {portfolioItems.map((item) => {
                            return (
                                <div key={item.id}>
                                    <PortfolioCardAdmin
                                        {...item}
                                        delete={handleDelete}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>) : <div className="mt-10">
                        <h2 className="text-3xl text-center">Немає робіт для відображення</h2>
                    </div>}
            </div>
            <Toaster position="top-right" />
        </div>
    );
};

export default AdminPage;
