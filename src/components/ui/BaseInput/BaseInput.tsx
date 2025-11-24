import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./index.css";

export const BaseInput = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => <input className='base-input' {...props} />;
