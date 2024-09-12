import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-600">
      <Link href={"/"} className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="image" />
      </Link>
      <div className="w-28 sm:w-80 py-12 h-screen relative border border-black">
        <div className="w-[50%] sm:w-[80%] h-[100vh] absolute right-0">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center border border-black gap-3 font-medium py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add_icon} alt="add icon" /> <p>Add blogs</p>
          </Link>
          <Link
            href={"/admin/blogList"}
            className=" mt-5 flex items-center border border-black gap-3 font-medium py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.blog_icon} alt="add icon" /> <p>Blog list</p>
          </Link>
          <Link
            href={"/admin/subscription"}
            className=" mt-5 flex items-center border border-black gap-3 font-medium py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.email_icon} alt="add icon" /> <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
