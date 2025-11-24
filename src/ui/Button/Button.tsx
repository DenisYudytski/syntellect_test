import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./index.css";

export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button className='button' {...props}>
      {props.children}
    </button>
  );
};
