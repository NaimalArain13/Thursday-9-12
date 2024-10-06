export interface ServiceProp {
    icon:unknown,
    title:string,
    description:string,
    link:string,
}
export default function ServiceCard(prop:ServiceProp){
    return(
        <div className="bg-cyan-700 flex flex-col md:flex-row gap-5 p-8 rounded-md">
        <div className="border bg-white rounded-md p-8 text-2xl sm:text-xl flex justify-center items-center">
          {prop.icon as string}
        </div>
      
        <div className="flex flex-col justify-center space-y-2  text-left">
          <h1 className="text-xl sm:text-2xl font-bold">{prop.title}</h1>
          <p className="text-lg ">{prop.description}</p>
        </div>
      </div>
    )
}