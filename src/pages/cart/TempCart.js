import React from "react";
import axios  from "axios";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";


const product ={
    cart:[{
        name:"dasdsa",
        qty:4,
        price:10
    },
    {
        name:"hjnk",
        qty:4,
        price:10
    }]

    
}

const TempCart = () => {
    const handleOnPay = async (token) => {
        console.log(token)

        const data = {
            token, 
            product
        }
        
        const result = await axios.post("http://localhost:3000/temp-checkoput", data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
  };

  


  const total = 10 * 100; ///price shold be in cent
  return (
    <>
      <div>name: Robin tota litem =10</div>

      <div>
        <StripeCheckout
          token={handleOnPay}
          stripeKey={process.env.STRIPE_PUBLIC_KEY}
          name="Pay by Card"
          amount={total}
        >
          <Button variant="info">Pay Now</Button>
        </StripeCheckout>
      </div>
    </>
  );
};

export default TempCart;
