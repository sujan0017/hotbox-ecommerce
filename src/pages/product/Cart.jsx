import { useSelector } from "react-redux";
import Container from "../../components/Container";
import CartItem from "../../components/product/CartItem";
import { PrimaryButton } from "../../components/Button";
import {
  AUTH_ROUTE,
  CHECKOUT_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
} from "../../constant/route";

function Cart() {
  const { product } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.auth);

  if (product.length < 1)
    return (
      <Container>
        <div className="flex flex-col items-center mt-50">
          <p className="font-semibold">Hey, your bag feels so light!</p>
          <p className="">Let's add some items in your bag</p>
          <span className="mt-7">
            <PrimaryButton
              title={"Start shopping"}
              href={`/${PRODUCT_ROUTE}`}
            />
          </span>
        </div>
      </Container>
    );

  return (
    <Container>
      <div className="mt-10 flex flex-col gap-2">
        {product.map((productItem) => (
          <CartItem key={productItem._id} product={productItem} />
        ))}
      </div>
      <div>
        {user ? (
          <PrimaryButton
            title={"Checkout"}
            href={`/${PRODUCT_ROUTE}/${CHECKOUT_ROUTE}`}
          />
        ) : (
          <PrimaryButton
            title={"LogIn to Checkout"}
            href={`/${AUTH_ROUTE}/${LOGIN_ROUTE}`}
          />
        )}
      </div>
    </Container>
  );
}

export default Cart;
