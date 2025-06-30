import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`rounded-xl shadow w-[300px] h-[300px] border-b sm:flex-grow-0 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
