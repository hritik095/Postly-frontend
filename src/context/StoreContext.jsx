import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();  // Initialize navigate

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/blog/all");
        setBlogData(res.data.blogs);
      } catch (error) {
        console.log("Error in all blogs API", error);
      }
    };
    allBlogs();
  }, []);

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    navigate("/");  // Redirect to home page after logout
  };

  const contextValue = { blogData, user, loginUser, logoutUser };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
