import Image from "next/image";
import style from "../../css module/commonStyle.module.css";

export default function WebDesign() {
    return (
        <div className={style.contentContainer}>
            <h1 className={style.title}>Web Design</h1>
            <div className={style.gridContainer}>
           
            <div className={style.textContainer}>
                <p>
                    Our Web Design service is centered on delivering attractive, user-focused, and responsive websites that cater to both user needs and business goals. We understand the importance of a well-crafted website in making a positive first impression and ensuring smooth navigation.
                </p>
                <p className="mt-4">
                    From initial planning and wireframes to final deployment, we pay close attention to detail, focusing on color harmony, typography, layout, and accessibility. Our designs are tailored to elevate your brand identity and foster user engagement. Whether you&#39;re a startup or an established business, our team is equipped to design a website that resonates with your audience and supports your objectives.
                </p>
            </div>
            <div className={style.imageWrapper}>
                <Image 
                    src={"/web.png"} 
                    alt={"Web Design Service"} 
                    width={400} 
                    height={600} 
                    className="rounded-lg shadow-md"
                />
            </div>
            </div>
            
        </div>
    );
}
