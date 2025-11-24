import { makeAutoObservable } from "mobx";
import { ButtonConfig } from "../../types/Button";
import { ITextInputWithButtonsViewModel } from "../../types/TextInputWithButtonsViewModel";

export function useTextInputWithButtonsViewModel(): ITextInputWithButtonsViewModel {
  const viewModel: ITextInputWithButtonsViewModel = {
    inputValue: "",
    leftButtonList: [] as ButtonConfig[],
    rightButtonList: [] as ButtonConfig[],

    changeInputValue(newValue: string) {
      viewModel.inputValue = newValue;
    },
  };

  makeAutoObservable(viewModel);

  return viewModel;
}
