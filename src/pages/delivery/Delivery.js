import React from "react";
import DefaultLayout from '../../components/layout/DefaultLayout'
import "./delivery.css";
const Delivery = () => {
    return (
        <div class="delivery">
            <DefaultLayout>
                <h1 className="p-4">Our delivery System</h1>
            <div class="container">
    <ol class="step-list">
        <li class="step-list__item">
            <div class="step-list__item__inner">
                <div class="content">
                    <div class="body">
                        <h2>Place our Order</h2>
                        <p>After successfully browsing all the content from our website add those items to you cart </p>
                    </div>
                    <div class="icon">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/check-circle.svg" alt="Check" />
                    </div>                
                </div>
            </div>
        </li>
        <li class="step-list__item">
            <div class="step-list__item__inner">
                <div class="content">
                    <div class="body">
                        <h2>We will review your order</h2>
                        <p>After successful payment of the items we will review your order if it can be delivered or picked up</p>
                    </div>
                    <div class="icon">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/mail_outline_copy.svg" alt="Check" />
                    </div>                
                </div>
            </div>
        </li>
        <li class="step-list__item">
            <div class="step-list__item__inner">
                <div class="content">
                    <div class="body">
                        <h2>Check for bulk order</h2>
                        <p> If the items you have ordered is bulk we will start processing for the delivery</p>
                    </div>
                    <div class="icon">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/graph.svg" alt="Check" />
                    </div>                
                </div>
            </div>
        </li>
        <li class="step-list__item">
            <div class="step-list__item__inner">
                <div class="content">
                    <div class="body">
                        <h2>Delivery Date</h2>
                        <p> We will successfully contact you over the telephone and set for delivery date and time</p>
                    </div>
                    <div class="icon">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/calendar.svg" alt="Check" />
                    </div>                
                </div>
            </div>
        </li>
        <li class="step-list__item">
            <div class="step-list__item__inner">
                <div class="content">
                    <div class="body">
                        <h2>Deliver the product</h2>
                        <p>Finally the products will be successfully delivered to your location</p>
                    </div>
                    <div class="icon">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13060/heart.svg" alt="Check" />
                    </div>                
                </div>
            </div>
        </li>
    </ol>
</div>
            </DefaultLayout>
        </div>
    );
};
export default Delivery;