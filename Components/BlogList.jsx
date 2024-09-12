import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";

import axios from "axios";

const Bloglist = () => {
  const [menu, setMenu] = useState("All");
  const [data, setData] = useState([]);

  const fetDataPost = async () => {
    const res = await axios.get("/api/blogs");
    setData(res.data.blogs);
  };

  useEffect(() => {
    fetDataPost();
  }, []);
  const HandleClick = (option) => {
    setMenu(option);
  };

  return (
    <>
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => HandleClick("All")}
          className={
            menu === "All" ? `bg-black text-white py-1 px-4 rounded-sm` : ""
          }
        >
          All
        </button>
        <button
          onClick={() => HandleClick("Technology")}
          className={
            menu === "Technology"
              ? `bg-black text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => HandleClick("Startup")}
          className={
            menu === "Startup" ? `bg-black text-white py-1 px-4 rounded-sm` : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => HandleClick("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? `bg-black text-white py-1 px-4 rounded-sm`
              : ""
          }
        >
          Lifestayle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 mt-10">
        {data
          .filter((item) => (menu === "All" ? true : item.catagory === menu))
          .map(
            (
              {
                _id,
                title,
                description,
                image,
                date,
                catagory,
                author,
                author_image,
              },
              index
            ) => {
              return (
                <BlogItem
                  key={index}
                  id={_id}
                  title={title}
                  description={description}
                  image={image}
                  date={date}
                  catagory={catagory}
                  author={author}
                  author_img={author_image}
                />
              );
            }
          )}
      </div>
    </>
  );
};

export default Bloglist;
