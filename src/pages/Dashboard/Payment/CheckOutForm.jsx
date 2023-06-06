import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxioxSecure";
import { useState } from "react";

const CheckOutForm = ({ cart, price }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [proccesing, setProccesing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
        console.log(res.data);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      //console.log("[error]", error);
    } else {
      //console.log("PaymentMethod", paymentMethod);
    }

    setProccesing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    console.log(paymentIntent);
    if (confirmError) {
      console.log(confirmError);
    }
    setProccesing(false);
    if (paymentIntent?.status === "succeeded") {
      //console.log(paymentIntent.id);
      setPaymentIntentId(paymentIntent.id);

      const paymentInfo = {
        transactionId: paymentIntent.id,
        user: user?.email,
        date: new Date(),
        price,
        itemName: cart.map((menu) => menu.name),
        cartId: cart.map((item) => item._id),
        menuId: cart.map((item) => item.cartId),
        quantity: cart.length,
        status: "pending",
      };
      axiosSecure.post("/payment", paymentInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          alert("Completed Done the Payment Thank You so much!");
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || proccesing}
        >
          Pay
        </button>
      </form>
      {paymentIntentId && (
        <p className="text-green-600">
          Successfully Done your id is : {paymentIntentId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
