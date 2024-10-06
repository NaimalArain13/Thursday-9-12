import Image from "next/image";
import style from "../css module/about.module.css";
export default function About(){
    return(
        <div className={style.container}>
            <h1 className={style.title}>About Me</h1>
            <div className={style.imageContainer}>
            <Image src={"/about1.jpg"} alt="About" width={200} height={200} className={style.image}/>

            </div>
            <p className={style.description}>As a passionate and dedicated front-end developer, I have gained hands-on experience through multiple front-end projects, where I have worked extensively with web technologies such as HTML, CSS, JavaScript, and React.js. My continuous drive to learn and excel in web development has allowed me to dive deeper into modern frameworks and libraries, including Next.js, Tailwind CSS, and TypeScript, making me well-versed in creating dynamic, responsive, and visually appealing web applications.</p>
        </div>
    )
}