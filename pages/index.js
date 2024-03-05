import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/src/Components/app/Home/";
// import Lottie from "lottie-react";
// import Animation from "../assets/animation";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <div className="w-full mx-auto">  <HomePage /> </div>
    </>
  );
}
