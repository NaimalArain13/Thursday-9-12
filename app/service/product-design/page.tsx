import Image from "next/image";
import style from "../../css module/commonStyle.module.css";

export default function ProductDesign() {
    return (
        <div className={style.contentContainer}>
            <h1 className={style.title}>Product Design</h1>
            <div className={style.gridContainer}>
                <div className={style.textContainer}>
                <p>
                    Our Product Design service involves creating innovative and practical solutions from concept to final product. With a focus on user-centered design, we develop products that solve real-world problems while enhancing user satisfaction.
                </p>
                <p className="mt-4">
                    From ideation and prototyping to testing and iteration, we work closely with you to ensure that the final product meets both functional and aesthetic standards. Our team is dedicated to crafting designs that are not only visually appealing but also effective and efficient.
                </p>
            </div>
            <div className={style.imageWrapper}>
                <Image 
                    src={"https://i.pinimg.com/736x/81/24/e7/8124e7df2c749a27ffdcdcf23a96220b.jpg"} 
                    alt="Product Design Service" 
                    width={400} 
                    height={300} 
                    className="rounded-lg shadow-md"
                />
            </div>
            </div> 
        </div>
    );
}
