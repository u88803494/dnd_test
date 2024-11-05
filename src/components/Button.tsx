import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children } = props;
  return (
    <button className="py-2 border border-slate-950 rounded-md">
      {children}
    </button>
  )
}

export default Button;