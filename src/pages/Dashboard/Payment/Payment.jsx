import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCarts from "../../../hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
  const [cart] = useCarts();
  const amount = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(amount.toFixed(2));
  // console.log(price);
  return (
    <div className="w-full h-full px-5">
      <SectionTitle
        subTitle="Please Process"
        headingTitle="Payment"
      ></SectionTitle>

      <div className="my-5">
        <h1>Taka oo taka ek bar dora deu</h1>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
