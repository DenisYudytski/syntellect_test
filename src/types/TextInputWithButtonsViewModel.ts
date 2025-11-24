import { ButtonConfig } from "./Button";

export interface ITextInputWithButtonsViewModel {
  inputValue: string;
  leftButtonList: ButtonConfig[];
  rightButtonList: ButtonConfig[];
  changeInputValue: (newValue: string) => void;
}
