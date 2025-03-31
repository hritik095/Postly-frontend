import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image with Link */}
      <Link to={`/blog/${id}`} className="block">
        <img
          src={`http://localhost:4000/images/${image}`}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">{category}</p>
        <h1 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">
          {title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-4">
          <img
            src={`http://localhost:4000/images/${author_image}`}
            alt={author_name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            <p className="text-sm font-semibold text-gray-700">{author_name}</p>
            <p className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
