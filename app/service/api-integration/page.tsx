import Image from "next/image";
import style from "../../css module/commonStyle.module.css";
export default function ApiIntegration() {
    return (
        <div className={style.contentContainer}>
            <h1 className={style.title}>API Integration</h1>
            <div className={style.gridContainer}>
            <div className={style.textContainer}>
                <p>
                    Our API Integration service is designed to streamline data exchange and improve functionality by seamlessly connecting multiple systems and applications. We ensure smooth and secure integration of third-party APIs tailored to your business needs.
                </p>
                <p className="mt-4">
                    Whether you need payment gateways, social media integrations, or data analytics tools, our team specializes in connecting applications efficiently to enhance your digital solutions. With our expertise, you can expect reliable, scalable, and easy-to-maintain integrations.
                </p>
            </div>
            <div className={style.imageWrapper}>
                <Image 
                    src={"https://i.pinimg.com/564x/c5/02/c7/c502c7df425377dd876852c1e3698ad4.jpg"} 
                    alt="API Integration Service" 
                    width={400} 
                    height={300} 
                    className="rounded-lg shadow-md"
                />
            </div>
            </div>
         
        </div>
    );
}
