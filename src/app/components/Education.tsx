import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`rounded-xl shadow p-4 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
