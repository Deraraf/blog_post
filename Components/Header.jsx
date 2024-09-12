import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const res = await axios.post("/api/emails", formData);
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error("error");
    }
  };

  return (
    <div className=" px-5 md:px-12 lg:px-28">
      <div className="text-center my-8 flex justify-center flex-col">
        <h1 className="text-3xl text-white sm:text-5xl font-medium">
          Latest Blogs
        </h1>
        <p className="mt-10 max-w-[720px] mx-auto text-xs sm:text-base">
          This Is Simple Blog Project
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between max-w-[500px] scale-50 sm:scale-90 mx-auto mt-5 border border-black shadow-[-7px_7px_0px_#000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            value={email}
            className="mx-auto pl-4 bg-slate-500 focus:outline-none items-center tex-xs font-bold outline-none"
          />
          <button className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
            Subscription
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
