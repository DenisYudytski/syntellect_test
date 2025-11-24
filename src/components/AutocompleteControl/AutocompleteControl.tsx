import { useState } from "react";
import { observer } from "mobx-react-lite";
import { BaseInput } from "../../ui/BaseInput/BaseInput";
import { IAutocompleteViewModel } from "../../types/AutocompleteViewModel";

export const AutocompleteControl = observer(
  ({ viewModel }: { viewModel: IAutocompleteViewModel }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className='autocomplete-container'>
        <BaseInput
          value={viewModel.inputValue}
          onChange={(event) => {
            viewModel.changeInputValue(event.target.value);
            viewModel.loadSuggestions(event.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />

        {isFocused && viewModel.suggestionList.length > 0 && (
          <div className='autocomplete-suggestions'>
            {viewModel.suggestionList.map((suggestion, index) => (
              <div
                className='autocomplete-suggestion-item'
                key={index}
                onClick={() => viewModel.changeInputValue(suggestion.name)}
              >
                <span>{suggestion.name}</span>
                <span>({suggestion.fullName})</span>
                <img src={suggestion.flag} alt='' />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
