'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {gsap} from 'gsap';
import "./menuStyle.css";

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const links = document.querySelectorAll(".link") as NodeListOf<Element>;

        links.forEach((link, index) => {
            link.addEventListener("mouseover", () => {
                console.log("hover");
                const bgElement = document.getElementById("bg") as HTMLImageElement;

                // Ensure the image is loaded
                if (!bgElement || !bgElement.complete) return;

                // Calculate the correct Y position for the hovered link
                const parts = links.length + 1;
                const yOffset = -(bgElement.naturalHeight / parts) * (index);

                // Animate the background image
                gsap.to(bgElement, {
                    duration: 0.5,
                    ease: "power2.Out",
                    y: yOffset + "px",
                });
            });
        });
    }, []);


    React.useEffect(() => {
        gsap.to(".head", {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1
        })
    }, [open])

    return (
        <>
            <div className={"w-screen z-10 absolute top-0 z-2 left-0 p-4 flex items-start"}>
                <div className={"w-1/2 flex items-center gap-x-4 justify-start"}>
                    <Link href='/' className={"text-[16px] head opacity-0"}>
                        CBC_ 
                    </Link>
                    <span className={"text-[#555555]"}>PORTFOLIO</span>
                </div>
                <div className={"w-1/2 flex items-start justify-end"}>
                    <button className={` hover:scale-110 head opacity-0 rounded-full duration-200 transition-all`}
                            onClick={() => setOpen(!open)}
                    >
                        {!open ? <Image alt='menu' width={24} height={24} src="menu.svg" /> : <Image alt='close' width={18} height={18} src="cross.svg" />}
                    </button>
                </div>
            </div>

            <div className={`w-full h-full z-[8] absolute top-0 left-0 ${open ? "flex" : "hidden"} bg-black`}>
                <div className={"absolute bottom-4 z-[10] left-0 w-full h-auto flex"}>
                    <div className={"pl-8 w-full text-start text-sm"}>+41 78 696 37 59</div>
                    <div className={"pr-8 w-full text-end text-sm"}>
                        <div className={""}>+41 78 696 37 59</div>
                        <div className={""}>camillebonnetcrevel@gmail.com</div>
                    </div>
                </div>
                {/*<div className={"absolute top-0 left-0 w-full h-full"}>*/}
                {/*    <img src={"/bg.png"} className=" z-[-1] opacity-100 blur-3xl w-full bg object-contain absolute top-0 left-0" id={"bg"} alt={"bg"}>*/}
                {/*    </img>*/}
                {/*</div>*/}
                <div className={"w-full h-screen z-40 uppercase flex flex-col items-center gap-y-8 justify-center font-[family-name:var(--murmure)]"}>
                    <Link href="/" className="link flex items-center justify-center text-center ">Home</Link>
                    <Link href="/works"
                          className="link flex items-center justify-center text-center ">Works</Link>
                    <Link href="/about"
                          className="link flex items-center justify-center text-center  ">About</Link>
                    <Link href="/contact"
                          className="link flex items-center justify-center text-center text-[#B2F5A5] capitalize" style={{textShadow: "0px 0px 10px #B2F5A5"}}>Contact</Link>
                </div>
            </div>
        </>

    )
}

export default Menu;