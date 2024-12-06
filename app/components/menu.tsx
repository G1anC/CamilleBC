
const I = ({children}: {children: React.ReactNode}) => <span className="font-[family-name:var(--font-ppuli)] font-extralight text-xl ">{children}</span>;


const Menu = () => {
    return (
        <div className={"w-full absolute top-0 z-[2] left-0 p-2 px-6 flex items-center"}>
            <div className={"w-1/2 flex items-center gap-x-8 justify-start"}>
                <a href='/' className={"text-[20px]"}><span className={"font-[family-name:var(--font-ppuli)] text-[#B2F5A5]"}>Cam_</span>BC</a>
                <a href='https://g1anc.github.io' className="text-sm">Made by <I><span className="text-sm tracking-wider">Aven Inc.</span></I></a>
            </div>
            <div className={"w-1/2 flex items-center gap-x-8 justify-end"}>
            <a href='/' className=" hover:text-[#B2F5A5] hover:pt-1 duration-100 transition-all">Home</a>
            <a href='/about/' className=" hover:text-[#B2F5A5] hover:pt-1 duration-100 transition-all">About</a>
            <a href='/works/' className=" hover:text-[#B2F5A5] hover:pt-1 duration-100 transition-all">Works</a>
                <a href='/contact/' className={"text-[#B2F5A5] hover:bg-[#B2F5A5] hover:text-black duration-200 transition-all border rounded-full border-[#B2F5A5] px-4 py-2"} style={{
                    boxShadow: "0px 5px 5px #B2F5A511",
                }}>Contact me</a>
            </div>
        </div>
    )
}

export default Menu;