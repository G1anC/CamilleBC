'use client'

import React, { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";

import Menu from "./components/menu";
import "./scroll.css";

const Intro = ({setIntro}: {setIntro: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const camille= "CAMILLE".split("");
    const bonnet = "BONNET-CREVEL".split("");
    const titleContainer = useRef(null);

    const hoverTl = gsap.timeline({paused: true});
    const pageTl = gsap.timeline({paused: true});

    useEffect(() => {
        pageTl.to(".top",{ duration: 1, y: "-5%", stagger: 0.05, ease: "power4.inOut" }, 0)
        .to(".bottom", { duration: 1, y: "-5%", stagger: 0.05, ease: "power4.inOut", delay: 0.1 }, 0)

        .to(".box", { duration: 1, opacity: 1, delay: 1, ease: "power4.inOut", }, 0)

        pageTl.play();

        hoverTl
            .to(".NW", { duration: 0.1, ease: "power2.out", top: "11px", left: "11px", width: "32px" }, 0)
            .to(".NE", { duration: 0.1, ease: "power2.out", top: "11px", right: "11px", width: "32px" }, 0)
            .to(".SW", { duration: 0.1, ease: "power2.out", bottom: "11px", left: "11px", width: "32px" }, 0)
            .to(".SE", { duration: 0.1, ease: "power2.out", bottom: "11px", right: "11px", width: "32px" }, 0)

            .to(".wei", { height: "0px", duration: 0.1, ease: "power2.out" }, 0)
            .to(".hei", { width: "0px", duration: 0.1, ease: "power2.out" }, 0)

            .to(".me", { duration: 0.1, ease: "power2.out", opacity: 100, blur: 0, filter: "blur(0px)" }, 0)

    }, []);

    return (
        <>
            <div className=" flex items-center justify-center absolute h-screen w-screen top-0 left-0 z-10">
                <div className="box w-80 h-44 bg-[#0D0D0D] rounded-xl p-4 opacity-0">
                    <div className="relative border border-[#252525] h-full w-full p-4 flex items-center justify-center">

                            <div className="NW top-0 left-0 aspect-square w-6 border-t border-l border-white absolute"></div>
                            <div className="NE top-0 right-0 aspect-square w-6 border-t border-r border-white absolute"></div>
                            <div className="SW bottom-0 left-0 aspect-square w-6 border-b border-l border-white absolute"></div>
                            <div className="SE bottom-0 right-0 aspect-square w-6 border-b border-r border-white absolute"></div>

                            <img alt="camille" src="/camille.png" className="me h-full w-full object-cover top-4 left-4 absolute opacity-65 blur-sm" style={{
                                height: "calc(100% - 24px)",
                                width: "calc(100% - 24px)",
                            }}></img>
                            
                            <div className="h-8 wei w-[1px] bg-white z-20"></div>
                            <div className="w-full h-full absolute flex items-center justify-center"
                                onMouseEnter={() => { hoverTl.play(); }}
                                onMouseLeave={() => { hoverTl.reverse(); }}
                                onClick={() => {
                                    pageTl.timeScale(2).reverse()
                                        .eventCallback("onReverseComplete", () => {
                                        setIntro(false);
                                  }); }}
                            >
                                <div className="hei w-8 h-[1px] bg-white z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-screen  gap-x-8 overflow-hidden">
                    <div className="w-full flex flex-col items-center justify-center h-1/2 ">
                        <div className="relative h-full w-full overflow-hidden inset-0">
                            <ul ref={titleContainer} id="text-container" className="unlist list-none select-none absolute h-full inline-flex items-center">
                                {Array.from({length: 30}).map((_, i) => (
                                    <li key={i}
                                        className=" flex items-center justify-center h-full flex-shrink-0 px-16 tracking-[-10px] font-[family-name:var(--murmure)]" style={{
                                            fontSize: "calc(100vw/3.5)",
                                            lineHeight: "1",
                                    }}>
                                        {camille.map((letter, j) => (
                                            <span key={j} className={`${i < 5 && "top translate-y-[-100%]"}`}>{letter}</span>
                                        ))}
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center h-1/2">
                        <div className="relative h-full w-full overflow-hidden inset-0">
                            <ul ref={titleContainer} id="text-container" className="unlist list-none select-none absolute h-full inline-flex items-center">
                                {Array.from({length: 30}).map((_, i) => (
                                    <li key={i}
                                        className=" flex items-center justify-center h-full flex-shrink-0 px-16 tracking-[-10px] font-[family-name:var(--murmure)]" style={{
                                            fontSize: "calc(100vw/3.5)",
                                            lineHeight: "1",
                                    }}>
                                        {bonnet.map((letter, j) => (
                                            <span key={j} className={`${i < 5 && "bottom translate-y-[100%]"}`}>{letter}</span>
                                        ))}
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default function Home() {

    const [intro, setIntro] = useState(true);

    

    return (
        <div className="h-screen w-screen relative overflow-hidden bg-[#0D0D0D] font-[family-name:var(--font-helvetica)]">
            {intro && <Intro setIntro={setIntro} />}
            {!intro && 
                        <Menu />

            }
        </div>
                       
    );
}
