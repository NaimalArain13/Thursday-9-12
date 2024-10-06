import Image from "next/image";
import style from "../../css module/commonStyle.module.css";
export default function UIUXDesign() {
    return (
        <div className={style.contentContainer}>
            <h1 className={style.title}>UI/UX Design</h1>
           <div className={style.gridContainer}>
           <div className={style.textContainer}>
                <p>
                    Our UI/UX Design service is dedicated to creating visually compelling and user-friendly interfaces that deliver seamless user experiences. We focus on understanding user behaviors, needs, and pain points to design solutions that are intuitive and enjoyable.
                </p>
                <p className="mt-4">
                    By incorporating research, wireframing, and user testing into our process, we ensure every design decision is intentional and impactful. Our goal is to bridge the gap between user expectations and business goals, enhancing usability and engagement across all devices and platforms.
                </p>
            </div>
            <div className={style.imageWrapper}>
                <Image 
                    src={"https://i.pinimg.com/564x/3a/c1/50/3ac150f471048b3fe60180f90ae4f094.jpg"} 
                    alt="UI/UX Design Service" 
                    width={400} 
                    height={100} 
                    className="rounded-lg shadow-md"
                />
            </div>
           </div>
           
        </div>
    );
}
