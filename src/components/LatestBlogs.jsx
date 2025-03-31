import { useContext } from "react";
import BlogCard from "./BlogCard";
import { StoreContext } from "../context/StoreContext";

const LatestBlogs = () => {
  const { blogData } = useContext(StoreContext);

  return (
    <div className="py-8">
      
      {/* Center-Aligned Heading */}
      <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {blogData
          .slice(-6)
          .reverse()
          .map((blog, index) => (
            <BlogCard
              key={index}
              id={blog._id}
              title={blog.title}
              image={blog.image}
              category={blog.category}
              author_name={blog.author.name}
              author_image={blog.author.image}
              date={blog.createdAt}
            />
          ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
