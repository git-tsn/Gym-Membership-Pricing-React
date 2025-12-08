import React, { useState } from "react";
import { toast } from "react-toastify";

const DaisyPricing = ({ pricing }) => {
  const { title, price, features, popular, description } = pricing;
    const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    toast.success("Thank you for the Subscribe",
        {position: "top-right",
            autoClose: 3000
        }
    );

    setIsSubscribed(true);
  };

  return (
    <div className="card w-96 bg-base-100 
    shadow-sm border-6 rounded-2xl border-blue-300">
      <div className="card-body">
        {popular && 
        <span className="badge badge-xs badge-warning">Most Popular</span>}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">${price}/mo</span>
        </div>
        <div className="mt-2 text-lg text-emerald-300">
            <p>{description}</p>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button onClick={() => handleSubscribe()} disabled={isSubscribed}
           className="btn btn-primary btn-block">{
            isSubscribed ? "Subscribed ✔" : "Subscribe"
           }</button>
        </div>
      </div>
      
    </div>
  );
};

export default DaisyPricing;
