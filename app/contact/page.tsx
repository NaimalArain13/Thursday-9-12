import Link from "next/link";
import style from "../css module/contact.module.css"
import { FaLinkedin , FaGithub} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact(){
    return(
        <div className={style.container}>
            <h1 className={style.title}>Contact Me</h1>
            <div className={style.links}>
                <Link href={"//www.linkedin.com/in/naimal-arain-/"} className={`${style.link} flex gap-x-2`}>< FaLinkedin  size={28}/> LinkedIn</Link>
                <Link href={"//github.com/NaimalArain13/"} className={`${style.link} flex gap-x-2`}> <FaGithub size={28}/>Github </Link>
                <Link href={"mailto:naimalarain13@gmail.com"} className={`${style.link} flex gap-x-2`}><MdEmail size={28}/> Email</Link>
            </div>
        </div>
    )
}