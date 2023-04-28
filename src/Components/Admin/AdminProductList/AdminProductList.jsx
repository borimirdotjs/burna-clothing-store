import { useSelector } from "react-redux";
import styles from "./AdminProductList.module.css";
import { AiFillDelete } from "react-icons/ai";
import { db } from "../../../Firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Loader from "../../Loader";

const AdminProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const handleProductDelete = async (productId) => {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, "products", productId));
      setIsLoading(false);
      toast.success("Product permanently deleted from database");
    } catch (err) {
      toast.error("Something went wrong trying to delete this product");
    }
  };

  const renderProductList = (category) => {
    return (
      <div className={`pl-${category}`}>
        <h4>
          {category.charAt(0).toUpperCase() + category.slice(1)}'s Products
        </h4>
        <ul>
          {products.map(
            (product) =>
              product.category === category && (
                <li key={product.id}>
                  <img
                    className={styles.pl_img}
                    src={product.photoUrl}
                    alt={product.name}
                  />
                  {product.name}
                  <AiFillDelete
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this product permanently ?"
                        )
                      ) {
                        handleProductDelete(product.id);
                      }
                    }}
                    className={styles.delete_icon}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {renderProductList("featured")}
      {renderProductList("women")}
      {renderProductList("men")}
      {renderProductList("accessories")}
    </div>
  );
};

export default AdminProductList;
