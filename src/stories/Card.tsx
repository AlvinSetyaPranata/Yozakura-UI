import React from "react";
import { ICardProps, ICardVariantsProps } from "src/types/Card";

const defaultVariant: React.FC<ICardVariantsProps> = ({
  title,
  desc,
  image,
}) => {
  return (
    <div className="rounded-md box-border bg-transparent max-w-[300px]">
      <div className="rounded-t-md">
        <img src={image} alt="product-image" />
      </div>

      {/* card content */}
      <div className="py-6 px-6 shadow-md space-y-4">
        <h3 className="font-semibold dark:text-white text-lg line-clamp-2">{title}</h3>
        <p className="mt-2 line-clamp-3 text-gray-500 dark:text-gray-400">
          {desc}
        </p>
        <div className="w-full flex justify-end">
          <button className="bg-night dark:bg-sakura dark:text-black px-6 py-2 text-white rounded-md text-sm mt-8">
            Take a look
          </button>
        </div>
      </div>
    </div>
  );
};

export const withPriceVariant: React.FC<ICardVariantsProps> = ({
  title,
  desc,
  image,
  buttonText
}) => {
  return (
    <div className="rounded-md box-border bg-transparent max-w-[300px]">
      <div className="rounded-t-md">
        <img src={image} alt="product-image" />
      </div>

      {/* card content */}
      <div className="py-6 px-6 shadow-md">
        <h3 className="font-semibold dark:text-white text-xl line-clamp-2">{title}</h3>
        <h4 className="mt-4 dark:text-white">$14.00</h4>
        <p className="mt-6 line-clamp-3 text-gray-500 dark:text-gray-400">
          {desc}
        </p>
        <div className="w-full flex justify-end">
          <button className="bg-night dark:bg-sakura dark:text-black px-6 py-2 text-white rounded-md text-sm mt-8">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<ICardProps> = ({ title, desc, image, buttonText, variant }) => {
  switch (variant) {
    case "withPrice":
      return withPriceVariant({ title, desc, image, buttonText });

    default:
      return defaultVariant({ title, desc, image, buttonText });
  }
};

export default Card;
