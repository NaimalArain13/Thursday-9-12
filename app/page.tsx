import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen grid grid-cols md:grid-cols-2 gap-4 items-center pt-16 p-6">
      <div className="text-left space-y-4">
        <h1 className="font-bold text-cyan-800 hover:text-black text-5xl">Hello, I&#39;m</h1>
        <p className="text-3xl font-semibold">a Frontend Developer</p>
        <p className="text-lg">As a passionate and dedicated front-end developer, I have gained hands-on experience through multiple front-end projects.</p>
        <p>
        <Link className="px-7 py-2 border border-gray-800 hover:bg-cyan-700 hover:text-white font-bold rounded-md " href={"//milestone-02-personal-portfolio-web.vercel.app/"}>My Portfolio...</Link>
        </p>
      </div>
      <div className="flex justify-center">
        <Image src={"/about1.jpg"} alt="home" width={500} height={300} className="rounded-lg transition-transform hover:scale-105"/>
      </div>
    </div>
  );
}
