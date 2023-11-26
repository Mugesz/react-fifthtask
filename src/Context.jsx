import { createContext, useState, useEffect } from "react";
import axios from "axios";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const handleTotal = () => {
      let price = 0;
      cart.forEach((item) => {
        price += Number(item.price * item.quantity);
      });
      setTotal(price);
    };
  
    handleTotal();
  }, [cart]);
  
  const handleChange = (item, quantity) => {
    const updatedCard = cart.map((existingItem) => {
      if (existingItem.id === item.id) {
        const updatedQty = existingItem.quantity + quantity;
        return { ...existingItem, quantity: updatedQty > 0 ? updatedQty : 1 };
      } else {
        return existingItem;
      }
    });
  
    setCart(updatedCard);
  };
  

  let handleAdditem = (item) => {
    setCart([...cart, item]);
  };

  let handleRemoveitem = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  useEffect(() => {
    let fetchData = async () => {
      try {
        setLoading(true);
        const productData = await axios.get(
          `https://fakestoreapi.com/products`
        );
        const updateProductdata = productData.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setProduct(updateProductdata);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <UserContext.Provider
      value={{
        product,
        handleAdditem,
        handleRemoveitem,
        cart,
        total,
        handleChange,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
