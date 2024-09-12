"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    catagory: "Startup",
    author: "Derara",
    author_image: "/author_image.png",
  });

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("catagory", data.catagory);
    formData.append("author", data.author);
    formData.append("author_image", data.author_image);
    formData.append("image", image);

    try {
      const res = await axios.post("/api/blogs", formData);
      if (res.data.success) {
        toast.success(res.data.message);
        setImage(null);
        setData({
          title: "",
          description: "",
          catagory: "Startup",
          author: "Derara",
          author_image: "/author_image.png",
        });
      } else {
        toast.error("Error: " + (res.data.message || "Something went wrong"));
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4 cursor-pointer"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt="upload"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        hidden
        id="image"
        required
      />
      <p className="text-xl mt-4">Blog Title</p>
      <input
        className="w-full sm:w-[500px] mt-4 mx-2 py-2 pl-2 border"
        type="text"
        required
        placeholder="Type blog title"
        name="title"
        onChange={onchangeHandler}
        value={data.title}
      />
      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        className="w-full sm:w-[500px] mt-4 mx-2 py-2 pl-2 border"
        required
        placeholder="Write content here"
        rows={6}
        name="description"
        onChange={onchangeHandler}
        value={data.description}
      />
      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="catagory"
        className="w-40 mt-4 mx-4 py-3 border text-gray-500"
        onChange={onchangeHandler}
        value={data.catagory}
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button
        type="submit"
        className="mt-8 w-40 h-12 bg-black mx-4 mb-6 text-white"
      >
        ADD
      </button>
    </form>
  );
};

export default Page;
