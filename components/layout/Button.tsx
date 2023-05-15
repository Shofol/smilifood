import Link from "next/link";
import React, { ReactNode } from "react";

const Button = ({
  title,
  className,
  type,
  actionType,
  target = "/",
  icon,
}: {
  title: string;
  className?: string;
  type: string;
  actionType: string;
  target?: string;
  icon?: ReactNode;
}) => {
  const updatedClass =
    ` flex items-center px-5 py-3 rounded-md text-white transition-colors duration-300 
        ${
          type === "primary"
            ? "bg-br-primary hover:bg-br-secondary"
            : type === "secondary"
            ? "bg-br-mgreen hover:bg-br-primary"
            : "bg-br-dark hover:bg-br-primary hover:text-br-dark"
        } ` + className;

  const template =
    actionType === "link" ? (
      <Link href={target} className={updatedClass}>
        <span>{title}</span> <span className="ml-1">{icon ? icon : null}</span>
      </Link>
    ) : (
      <button className={updatedClass}>
        {title}
        {icon ? icon : null}
      </button>
    );

  return <>{template}</>;
};

export default Button;
