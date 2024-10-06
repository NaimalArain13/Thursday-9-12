import Link from "next/link"
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiApachedruid,SiOpenapiinitiative } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import ServiceCard, { ServiceProp } from "../components/service"
import style from "../css module/service.module.css"

export default function Service(){
    const services: ServiceProp[] = [
        {
            icon: <AiOutlineAntDesign size={28} />,
            title: "Web Design",
            description: "Creating aesthetically pleasing, responsive, and user-friendly web designs tailored to your needs.",
            link: "/service/web-design"
        },
        {
            icon: <SiApachedruid size={28} />,
            title: "UI/UX Design",
            description: "Crafting intuitive user interfaces and experiences to ensure seamless navigation and usability.",
            link: "/service/ui-ux-design"
        },
        {
            icon: <MdProductionQuantityLimits size={28} />,
            title: "Product Design",
            description: "Designing innovative product solutions with user-centered design principles for maximum engagement.",
            link: "/service/product-design"
        },
        {
            icon: <SiOpenapiinitiative size={28} />,
            title: "API Integration",
            description: "Integrating efficient APIs to enhance the functionality and scalability of your applications.",
            link: "/service/api-integration"
        },
    ];
    return(
        <div className={style.servicePage}>
            <h1 className={style.serviceTitle}>Services</h1>
            <div className={style.serviceGrid}>
                {services.map((service,index)=>
            <Link key={index}  href={service.link
            }><ServiceCard {...service}/></Link>)}
            </div>
        </div>
    )
}