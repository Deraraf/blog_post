import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponent/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between max-h-[60px] w-full px-12 py-3 border-b border-black ">
            <h1 className="font-medium">Admin Panal</h1>
            <Image
              className="rounded-full"
              src={assets.profile_icon}
              width={40}
              alt="profile"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
