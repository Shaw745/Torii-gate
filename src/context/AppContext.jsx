import { createContext } from "react";
import { useState, useEffect } from "react";

export const appContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (accessToken, user) => {
    setToken(accessToken);
    setUser(user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  const updateUser = (updatedUser) => {
    setUser(updateUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }


  return (
    <appContext.Provider value={{ login, logout, user, token, Loading, updateUser }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
