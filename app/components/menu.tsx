'use client'

import Link from 'next/link';
import React from 'react';
import {gsap} from 'gsap';

const I = ({children}: {children: React.ReactNode}) => <span className="font-[family-name:var(--font-ppuli)] font-extralight text-xl ">{children}</span>;


const Menu = () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
    }, [open])

    return (
        <>
            <div className={"w-full absolute top-0 z-[2] left-0 p-3 px-6 flex items-start"}>
                <div className={"w-1/2 flex items-center gap-x-8 justify-start"}>
                    <Link href='/' className={"text-[20px] link opacity-0"}><span className={" font-[family-name:var(--font-ppuli)] text-[#B2F5A5]"}>Cami_</span>BC</Link>
                    <Link href='https://g1anc.github.io' className="text-sm link opacity-0">Made by <I><span className="text-sm tracking-wider">Aven Inc.</span></I></Link>
                </div>
                <div className={"w-1/2 flex items-center gap-x-8 justify-end"}>
                <button className="border rounded-full border-[#B2F5A5] p-2 px-4 text-[#B2F5A5] hover:bg-[#B2F5A5] hover:text-black duration-200 transition-all" style={{boxShadow: "0px 0px 10px #B2F5A590"}}>Menu</button>
      
                </div>
            </div>
            <div className={`w-full h-full z-30 absolute top-0 left-0 ${open ? "flex" : "hidden"} flex-col items-center justify-center bg-[#B2F5A5]`}>
                <Link href="/about" className="link">About</Link>
                <Link href="/works" className="link">Works</Link>
                <Link href="/contact" className="link">Contact</Link>
            </div>
        </>
        
    )
}

export default Menu;