import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
        
        {/* Contact Us Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-bold mb-2">Contact Us</h1>
          <div className="text-sm space-y-1">  
            <p>Email: <span className="font-medium">admin@postly.com</span></p>
            <p>Phone: <span className="font-medium">1800-120-200</span></p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-lg font-bold mb-2">Quick Links</h1>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">  
            <Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link>
            <Link to="/blogs" className="hover:text-orange-500 transition duration-300">Blogs</Link>
            <Link to="/about" className="hover:text-orange-500 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h1 className="text-lg font-bold mb-2">Categories</h1>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">  
            <Link className="hover:text-orange-500 transition duration-300">Weather</Link>
            <Link className="hover:text-orange-500 transition duration-300">Lifestyle</Link>
            <Link className="hover:text-orange-500 transition duration-300">Technology</Link>
            <Link className="hover:text-orange-500 transition duration-300">News</Link>
          </ul>
        </div>

      </div>

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="Postly Logo" className="h-8 w-8" />
          <p className="text-xl font-bold">Postly</p>
        </div>

        {/* Footer Links */}
        <ul className="flex gap-4 text-sm">
          <li className="hover:text-orange-500 transition duration-300">Privacy Policy</li>
          <li className="hover:text-orange-500 transition duration-300">Terms & Conditions</li>
          
          {/* LinkedIn Redirect */}
          <a 
            href="https://www.linkedin.com/in/hritik04/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-300"
          >
            © Hritik
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
