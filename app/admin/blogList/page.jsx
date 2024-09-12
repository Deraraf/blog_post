import BlogTableItem from "@/Components/AdminComponent/BlogTableItem";

export const dynamic = "force-dynamic";

const fetchAllData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    cache: "no-store",
  });
  const data = await res.data.blogs;
  return data;
};

const BlogListPage = async () => {
  const blogs = await fetchAllData();

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-900 text-left uppercase bg-gray-50">
            <tr>
              <th className="hidden sm:block px-6 py-3" scope="col">
                Author name
              </th>
              <th className="px-6 py-3" scope="col">
                Blog title
              </th>
              <th className="px-6 py-3" scope="col">
                Date
              </th>
              <th className="px-6 py-3" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map(({ title, author, _id, author_image, date }, index) => (
                <BlogTableItem
                  key={index}
                  mongoId={_id}
                  title={title}
                  author={author}
                  author_image={author_image}
                  date={date}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogListPage;
