import Menu from "@/app/components/menu";

const About = () => {
    return (
        <div className={"w-full h-full flex flex-col items-center relative justify-center"}>
            <Menu />
            <h1 className={"text-4xl font-[family-name:var(--font-ppuli)]"}>About</h1>
        </div>
    )
}

export default About;