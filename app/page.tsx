'use client'

import React, { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";
// import Image from "next/image";
// import * as THREE from "three";
// import {gsap, TweenMax} from "gsap";

import Menu from "./components/menu";
import "./scroll.css";


const I = ({children}: {children: React.ReactNode}) => <span className="font-[family-name:var(--font-ppuli)] font-extralight text-xl ">{children}</span>;

export default function Home() {
    const imageRef = useRef(null);

    useEffect(() => {
        if (!imageRef.current) {
            console.error("Invalid imageRef");
            return;
        }
        console.log("imageRef", imageRef.current);
        new hoverEffect({
            parent: imageRef.current,
            intensity: 0.3,
            image1: "/me.jpg",
            image2: "/me.jpg",
            displacementImage: "/7.jpg",
        });
    }, []);

    return (
        <div className="h-screen w-screen overflow-hidden font-[family-name:var(--font-helvetica)]">
            <Menu />
            <div className="w-screen h-screen flex items-center justify-center gap-x-8 overflow-hidden">
                <div className="w-full h-full flex justify-end">
                    <div ref={imageRef} className="w-2/3 h-full object-cover bg-gray-100/10 "/>
                </div>

                <div className="flex flex-col items-start justify-center text-xl h-2/3 w-full">
                    <div>Welcome to my <I> Portfolio</I> !</div>
                    <div><br/></div>
                    <div>I’m a designer and photographer from <I>France </I>.</div>
                    <div>I’m focused on  <I>(re)shaping</I>  the way you’re seen.</div>
                    <div><br/></div>
                    <div>Granting <I>elegancy</I> and <I>creativity</I></div>
                    <div>into your branding and bringing it to <I>life</I>.</div> 
                </div>
                <div className="w-full absolute top-[-16px] flex items-end z-[-3] text-2xl justify-center left-0 h-[72%]">
                    <div className="w-full h-auto flex items-center justify-center">
                        <div className="w-1/2 flex items-end p-4 pl-8 justify-start ">
                            <I>@24</I>
                        </div>
                        <div className="w-1/2 flex items-end justify-end pr-8 p-4">
                            <I>{"\(01\)"}</I>
                        </div>
                    </div>
                </div>
            
                <div className="w-full absolute bottom-4 flex flex-col items-center justify-center left-0 h-[28%] border-t border-white/10">
                    <div className="relative h-full w-full overflow-hidden">
                        <ul className="unlist list-none select-none absolute h-full inline-flex items-center border-y border-white/10 ">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <li key={i} className="font-bold text-[250px] flex-shrink-0 pt-8 px-8 tracking-[-10px]">
                                    <span className="text-[#B2F5A5] text-[230px] mr-16 font-extralight  tracking-normal font-[family-name:var(--font-ppuli)]">
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
