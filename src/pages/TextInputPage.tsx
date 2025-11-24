import { AutocompleteControl } from "../components/AutocompleteControl/AutocompleteControl";
import { useAutocompleteViewModel } from "../components/AutocompleteControl/AutocompleteViewModel";
import { TextInputWithButtons } from "../components/TextControl/TextInputWithButtons";
import { useTextInputWithButtonsViewModel } from "../components/TextControl/TextInputWithButtonsViewModel";

export function TextInputPage() {
  const firstInputVM = useTextInputWithButtonsViewModel();
  firstInputVM.rightButtonList = [
    { text: "Clear input", onClick: () => firstInputVM.changeInputValue("") },
    {
      text: "Set Hello",
      onClick: () => firstInputVM.changeInputValue("Hello world!"),
    },
  ];

  const secondInputVM = useTextInputWithButtonsViewModel();
  secondInputVM.leftButtonList = [
    {
      text: "Check number",
      onClick: () => {
        if (!isNaN(Number(secondInputVM.inputValue)))
          alert(Number(secondInputVM.inputValue));
      },
    },
  ];
  secondInputVM.rightButtonList = [
    { text: "Alert text", onClick: () => alert(secondInputVM.inputValue) },
  ];

  const autocompleteThreeVM = useAutocompleteViewModel(3);
  const autocompleteTenVM = useAutocompleteViewModel(10);

  return (
    <div className='text-input-page-container'>
      1 пример инпут
      <TextInputWithButtons viewModel={firstInputVM} />
      2 пример инпут
      <TextInputWithButtons viewModel={secondInputVM} />
      Автокомплит 3 подсказки
      <AutocompleteControl viewModel={autocompleteThreeVM} />
      Автокомплит 10 подсказок
      <AutocompleteControl viewModel={autocompleteTenVM} />
    </div>
  );
}
