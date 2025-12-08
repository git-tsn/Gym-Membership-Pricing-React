import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { title, price, description, features } = pricing;
  return (
    <div className="flex flex-col border rounded-2xl bg-amber-600 p-4">
      {/* Card Header */}
      <div>
        <h1 className="text-3xl">{title}</h1>
        <h4 className="text-xl">${price}/month</h4>
      </div>
      {/* Card Body */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
