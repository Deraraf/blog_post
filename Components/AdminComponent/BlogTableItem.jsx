import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import DeleteButton from "./DeleteButton";

const BlogTableItem = ({ author_image, title, author, date, mongoId }) => {
  return (
    <tr className="bg-white border-b">
      <th className="items-center gap-3 hidden sm:flex px-6 font-medium py-4 text-gray-900 whitespace-nowrap">
        <Image
          width={40}
          height={40}
          src={author_image ? author_image : assets.profile_icon}
          className="rounded-full"
        />
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4 cursor-pointer">
        <DeleteButton id={mongoId} />
      </td>
    </tr>
  );
};

export default BlogTableItem;
