import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import axios from "axios";
import Image from "next/image";

const getBlogData = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/blogs/${id}`);
  const blog = res.data.blog;
  return blog;
};

async function page({ params }) {
  const blog = await getBlogData(params.id);

  return blog ? (
    <>
      <Navbar />
      <div className="text-center my-10 px-5 py-5">
        <h2 className="text-2xl bg-slate-900 text-white py-2 px-4 sm:text-5xl font-semibold mx-auto max-w-[720px]">
          {blog.title}
        </h2>

        <Image
          className="mx-auto mt-6 border-border-white rounded-full"
          src={blog.author_image}
          width={60}
          height={60}
          alt="author image"
        />
        <p className="text-xl text-purple-800 mt-1 py-2 mx-auto">
          {blog.author}
        </p>
      </div>
      <div className="mx-5 md:mx-auto max-w-[800px] mt-[-50px] mb-10">
        <Image src={blog.image} width={1280} height={720} alt="image" />
        <div
          className=" text-orange-400 blog-content"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>

        <div className="my-10">
          <p className="font-semibold my-4">
            share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="socials" />
            <Image src={assets.twitter_icon} width={50} alt="socials" />
            <Image src={assets.googleplus_icon} width={50} alt="socials" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1>Blog is not exist</h1>
  );
}

export default page;

{
  /* <p className="text-xl  text-orange-400 mt-4 mx-auto">
          {blog.description}
        </p> */
}

//   <div className="flex items-center justify-center mt-8 py-3 mx-96 text-2xl bg-black text-white">
//   <Link href={"/"}>Go Back</Link>
// </div>
