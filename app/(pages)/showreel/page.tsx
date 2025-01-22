'use client'

import React, {useEffect} from "react";
import {gsap} from "gsap";

export default function ShowReel() {
    const hoverTl = gsap.timeline({paused: true});

    useEffect(() => {

        hoverTl
            .to(".NW", { duration: 0.1, ease: "power2.out", top: "24px", left: "24px", width: "96px" }, 0)
            .to(".NE", { duration: 0.1, ease: "power2.out", top: "24px", right: "24px", width: "96px" }, 0)
            .to(".SW", { duration: 0.1, ease: "power2.out", bottom: "24px", left: "24px", width: "96px" }, 0)
            .to(".SE", { duration: 0.1, ease: "power2.out", bottom: "24px", right: "24px", width: "96px" }, 0)
    }, []);
    return (
        <div className={"flex items-center justify-center w-screen h-screen overflow-hidden p-20"}>
                <div className={"h-full p-6 border border-[#252525] relative flex items-center justify-center"}>
                        <div className="NW top-0 left-0 aspect-square w-16 border-t border-l border-white absolute"></div>
                        <div className="NE top-0 right-0 aspect-square w-16 border-t border-r border-white absolute"></div>
                        <div className="SW bottom-0 left-0 aspect-square w-16 border-b border-l border-white absolute"></div>
                        <div className="SE bottom-0 right-0 aspect-square w-16 border-b border-r border-white absolute"></div>
                    <div className={"w-full h-full"}>
                        <video controls className="max-w-full max-h-full" onMouseEnter={() => {
                            hoverTl.play()
                        }}
                        onMouseLeave={() => {
                            hoverTl.reverse()
                        }}>
                            <source src="/showreel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
        </div>
    )
}