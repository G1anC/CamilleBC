'use client'

import React, { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
// import Image from "next/image";
// import * as THREE from "three";
import {gsap} from "gsap";

import Menu from "./components/menu";
import "./scroll.css";
import Header from "./components/header";

const I = ({children}: {children: React.ReactNode}) => <span className="font-[family-name:var(--font-ppuli)] font-extralight text-xl ">{children}</span>;

export default function Home() {
    const imageRef = useRef(null);

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
            .fromTo(".unlist", {x: "-200vw"}, {x: 0, opacity: 1, duration: 2, ease: "power2.inOut"})
            .fromTo(".me", {y: "-100%"}, {y: 0, duration: 1.5, ease: "power4.out"}, "-=1")
            .fromTo(".welcome", {y: "100%"}, {y: 0, duration: 0.5, ease: "power.in", stagger: 0.1})
    }, []);

    return (
        <div className="h-screen w-screen relative overflow-hidden font-[family-name:var(--font-helvetica)]">
            <div className="w-full h-full absolute top-0 left-0">
                <div className="w-full h-full" style={{
                    backgroundImage: "url(/bg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                    zIndex: -1,
                }}></div>
            </div>
            <Header />
            <Menu />
            <div className="w-screen h-screen flex items-center justify-center gap-x-8 overflow-hidden">
                <div className="w-full h-full flex justify-end">
                    <div className="w-2/3 h-full inset-0 relative overflow-hidden">
                        <div ref={imageRef} className="me w-full h-full object-cover" />
                    </div>
                </div>

                <div className="flex flex-col items-start justify-center text-xl h-2/3 w-full">
                    <div className="flex items-start flex-col justify-center gap-y-8">                    
                        <div className="relative inset-0 overflow-hidden"><div className="welcome">Welcome to my <I> Portfolio</I> !</div></div>
                        <div className="">
                            <div className="relative inset-0 overflow-hidden"><div className="welcome">I’m a designer and photograph from <I>France </I>.</div></div>
                            <div className="relative inset-0 overflow-hidden"><div className="welcome">I’m focused on  <I>(re)shaping</I>  the way you’re seen.</div></div>
                            <div className="relative inset-0 overflow-hidden"><div className="welcome"></div></div>
                            <div className="relative inset-0 overflow-hidden"><div className="welcome">Granting <I>elegancy</I> and <I>creativity</I></div></div>
                            <div className="relative inset-0 overflow-hidden"><div className="welcome">into your branding and bringing it to <I>life</I>.</div> </div>
                        </div>
                        <button className="border rounded-full border-[#B2F5A5] p-2 px-4 text-[#B2F5A5] hover:bg-[#B2F5A5] hover:text-black duration-200 transition-all" style={{boxShadow: "0px 0px 10px #B2F5A590"}}>Contact me</button>
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
            
                <div className="w-full absolute bottom-0 flex flex-col items-center  justify-center left-0 h-[28%] ">
                    <div className="relative h-full w-full overflow-hidden inset-0">
                        <ul className="unlist opacity-0 list-none select-none absolute h-full inline-flex items-center">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <li key={i} className="font-bold text-[250px] flex-shrink-0 pt-8 px-8 tracking-[-10px]">
                                    <span className="text-[#B2F5A5] text-[230px] mr-16 font-extralight tracking-normal font-[family-name:var(--font-ppuli)]" style={{textShadow: "0px 0px 10px #B2F5A5"}}>
                                        Camille
                                    </span>
                                    BONNET-CREVEL
                                </li>
                            ))}
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    );
}
