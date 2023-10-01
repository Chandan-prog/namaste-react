import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => dispatch(clearCart());

  if (cartItems.length === 0) {
    return (
      <div className="text-center m-4 p-4">
        <div className="font-bold text-2xl">Cart</div>
      </div>
    );
  }
  return (
    <div className="text-center m-4 p-4">
      <div className="font-bold text-2xl">Cart</div>
      <div className="m-auto w-9/12">
        <button className="p-2 m-2 rounded-lg bg-green-900 text-white" onClick={clearCartHandler}>Clear Cart</button>
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
