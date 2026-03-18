"use client"
import { Link } from "next-view-transitions";
import FolderButton from "../FolderButton/FolderButton";
import { useEffect, useState } from "react";
import { useStore } from "@/app/useStore";

export default function Footer() {
    const setOpenContact = useStore((state) => state.setOpenContact);
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Europe/Budapest",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }).format(now);
            setTime(timeString);
        };

        updateTime();
        // Update every second to ensure we switch the minute exactly when it happens
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-[50px] flex items-center lg:justify-between lg:items-end flex-col lg:flex-row gap-[40px] lg:gap-[0px]">

            <div className="flex lg:items-end flex-col lg:flex-row w-fit gap-[70px] lg:gap-[0px]">
                <div className="flex flex-col gap-[26px] items-center justify-center">
                    <Link href="/works">
                        <FolderButton />
                    </Link>
                    <p className="font-intranet text-md text-midgray leading-[100%]">WORKS</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 w-[350px] translate-y-[-10px]">
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="https://www.instagram.com/jpegloris_/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                            aria-label="Instagram"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7.2c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.92c-1.736 0-3.12-1.384-3.12-3.12S10.264 8.88 12 8.88s3.12 1.384 3.12 3.12-1.384 3.12-3.12 3.12z" fill="white" />
                                <path d="M17.4 6.6a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" fill="white" />
                                <path d="M21 7.2c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v9.6c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V7.2zm-2.4 9.6c0 .33-.27.6-.6.6h-12c-.33 0-.6-.27-.6-.6V7.2c0-.33.27-.6.6-.6h12c.33 0 .6.27.6.6v9.6z" fill="white" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sadrita-neogi-2a7540376/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                            aria-label="LinkedIn"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.98 3.5C4.98 4.6 4.12 5.45 3 5.45 1.88 5.45 1 4.6 1 3.5 1 2.4 1.86 1.55 3 1.55 4.14 1.55 4.98 2.4 4.98 3.5zM.5 22.5h5V8.9h-5V22.5zM8.5 8.9h4.79v1.84h.07c.67-1.27 2.31-2.6 4.75-2.6 5.08 0 6.02 3.35 6.02 7.7V22.5h-5V15.8c0-1.58-.03-3.6-2.19-3.6-2.19 0-2.53 1.7-2.53 3.46V22.5h-5V8.9z" fill="white" />
                            </svg>
                        </a>

                        <button
                            onClick={() => setOpenContact(true)}
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                            aria-label="Message"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm leading-[100%] translate-y-[2.5px] font-intranet text-midgray">WAITING FOR YOUR MESSAGE</p>
                </div>
            </div>

            <div className="flex flex-col gap-[2px] text-center w-fit lg:text-left">
                <p className="text-sm leading-[100%] translate-y-[2.5px] font-intranet text-midgray min-h-[14px]">{time} [HU]</p>
                <div className="flex gap-[5px] items-center">
                    <div className="w-[10px] h-[10px] p-[4px] rounded-full bg-gradient-to-b from-[#0FFF2F] to-[#84FF6F] shadow-[0_0_10px_0.2px_#0FFF2F]">
                        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#6CFF6C] to-[#23FF1F]" />
                    </div>
                    <p className="text-sm leading-[100%] translate-y-[2.5px] font-intranet text-midgray">WAITING FOR YOUR MESSAGE</p>
                </div>
            </div>
        </section>
    )
}