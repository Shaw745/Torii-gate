import { createContext } from "react";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useAppContext } from "../hooks/useAppContext";

export const TenantContext = createContext();

const Tenantprovider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const { token } = useAppContext();
  const [totalPage, setTotalPage] = useState(1);

  const fetchProperties = async () => {
    if (token) {
      try {
        const { data } = await axiosInstance.get(`/property?page=${page}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(data.properties);
        setPage(data.currentPage);
        setTotalPage(data.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }
  };
  useEffect(() => {
    fetchProperties();
  }, [token, page]);
  return (
    <TenantContext.Provider
      value={{
        isLoading,
        properties,
        setPage,
        totalPage,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default Tenantprovider;
