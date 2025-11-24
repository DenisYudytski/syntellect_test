import { observer } from "mobx-react-lite";
import { ITextInputWithButtonsViewModel } from "../../types/TextInputWithButtonsViewModel";
import { BaseInput } from "../../ui/BaseInput/BaseInput";
import { Button } from "../../ui/Button/Button";

export const TextInputWithButtons = observer(
  ({ viewModel }: { viewModel: ITextInputWithButtonsViewModel }) => {
    return (
      <div className='text-input-buttons-container'>
        {viewModel.leftButtonList.map((buttonConfig, index) => (
          <Button key={index} onClick={buttonConfig.onClick}>
            {buttonConfig.text}
          </Button>
        ))}

        <BaseInput
          value={viewModel.inputValue}
          onChange={(event) => viewModel.changeInputValue(event.target.value)}
        />

        {viewModel.rightButtonList.map((buttonConfig, index) => (
          <Button key={index} onClick={buttonConfig.onClick}>
            {buttonConfig.text}
          </Button>
        ))}
      </div>
    );
  }
);
