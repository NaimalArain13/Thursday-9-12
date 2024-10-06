import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from "../css module/footer.module.css";

export default function Footer(){
    return(
        <div className={style.footerContainer}>
                <h1 className={style.title}>My Work</h1>
            <div className={style.linkContainer}>
                <Link href={"//naimal-arain-milestone-03-e-commerce-website.vercel.app/"} className="transition-transform hover:scale-95">Tech Book Store</Link>
                <Link href={"//blog-platform-by-na.vercel.app/"} className="transition-transform hover:scale-95">Blog Post</Link>
                <Link href={"//hackathon-interative-resume-builder.vercel.app/"} className="transition-transform hover:scale-95">Resume Generator</Link>
                <Link href={"//naimal-educational-learning-platform-assignment02-milestone02.vercel.app/"} className="transition-transform hover:scale-95">Static Education Platform UI</Link>
            </div>
            <p className={style.iconContainer}>
            <Link href={"//www.linkedin.com/in/naimal-arain-/"} className={` flex gap-x-2`}>< FaLinkedin  size={28}/></Link>
                <Link href={"//github.com/NaimalArain13/"} className={`flex gap-x-2`}> <FaGithub size={28}/></Link>
                <Link href={"mailto:naimalarain13@gmail.com"} className={`flex gap-x-2`}><MdEmail size={28}/></Link>
            </p>
            <p >Made by GIAIC student <Link href={"/"} className={style.author}>NAIMAL SALAHUDDIN</Link></p>
        </div>
    )
}