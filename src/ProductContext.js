import React, { createContext, useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebase";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docRef = collection(db, "products");
      const docSnap = await getDocs(docRef);
      docSnap.forEach((doc) => setData((prev) => [...prev, doc.data()]));
    };
    requestData();
  }, []);

  return (
    <ProductContext.Provider value={{ data }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
