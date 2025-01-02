'use client'

import React, { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
import {gsap} from "gsap";

import Menu from "./components/menu";
import "./scroll.css";

const I = ({children}: {children: React.ReactNode}) => <span className="font-[family-name:var(--font-ppuli)] font-extralight text-xl ">{children}</span>;

export default function Home() {
    const imageRef = useRef(null);
    const titleContainer = useRef(null);
    const letters = "CAMILLE".split("");
    useEffect(() => {
        const tl = gsap.timeline();
        if (!imageRef.current) return;
        new hoverEffect({
            parent: imageRef.current,
            intensity: 1,
            image1: "/me.jpg",
            image2: "/me.jpg",
            displacementImage: "/me.jpg",
        });

        tl
            .fromTo(".unlist", {x: "120vw"}, {x: 0, opacity: 1, duration: 2, ease: "power2.inOut"})
            .fromTo(".me", {y: "-100%"}, {y: 0, duration: 1.5, ease: "power4.out"}, "-=1")
            .fromTo(".welcome", {y: "100%"}, {y: 0, duration: 0.5, ease: "power.in", stagger: 0.1})
    }, []);

    return (
        <div className="h-screen w-screen relative overflow-hidden font-[family-name:var(--font-helvetica)]">

            <Menu />
            <div className="w-screen h-screen flex items-center justify-center gap-x-8 overflow-hidden">
                <div className="w-full absolute bottom-0 flex flex-col items-center justify-center left-0 h-full z-[50] ">
                    <div className="relative h-full w-full overflow-hidden inset-0">
                        <ul ref={titleContainer} id="text-container" className="unlist list-none select-none absolute h-full inline-flex items-center">
                            {Array.from({length: 50}).map((_, i) => (
                                <li key={i}
                                    className=" flex items-center justify-center flex-shrink-0 px-8 tracking-[-10px] font-[family-name:var(--font-dxsitrus)] " style={{
                                        height: "calc(100vw/3)",
                                        fontSize: "calc(100vw/3)",
                                        lineHeight: "1",
                                        transform: "translateY(50%)", // Adjust alignment to correct positioning
                                }}>
                                    {letters.map((letter, j) => (
                                        <span key={j} className="welcome">{letter}</span>
                                    ))}
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>

                <div className="w-full absolute  flex items-end z-[-3] text-2xl justify-center left-0 h-[50%]">
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="w-1/2 flex items-end p-4 pl-8 justify-start ">
                            <I>@24</I>
                        </div>
                        <div className="w-1/2 flex items-end justify-end pr-8 p-4">
                            <I>{"\(01\)"}</I>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full absolute top-0 left-0">
                    <div className="w-full h-full" style={{
                        backgroundImage: "url(/bg.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        filter: "blur(40px)",
                        zIndex: -1,
                        opacity: "50%",
                    }}></div>
                </div>
            </div>
        </div>
    );
}
