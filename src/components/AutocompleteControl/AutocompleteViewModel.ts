import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";
import { IAutocompleteViewModel } from "../../types/AutocompleteViewModel";

export function useAutocompleteViewModel(
  maxSuggestions: number
): IAutocompleteViewModel {
  const viewModel: IAutocompleteViewModel = {
    inputValue: "",
    suggestionList: [] as CountryInfo[],
    maximumSuggestionCount: maxSuggestions,
    isLoading: false,

    async loadSuggestions(query: string) {
      viewModel.isLoading = true;
      const response = await getCountryByName(query);

      const uniqueList: CountryInfo[] = [];
      const usedNames = new Set<string>();

      for (const suggestion of response) {
        if (!usedNames.has(suggestion.name)) {
          usedNames.add(suggestion.name);
          uniqueList.push(suggestion);
        }
      }

      viewModel.suggestionList = uniqueList.slice(
        0,
        viewModel.maximumSuggestionCount
      );
      viewModel.isLoading = false;
    },

    changeInputValue(newValue: string) {
      viewModel.inputValue = newValue;
    },
  };

  makeAutoObservable(viewModel);

  return viewModel;
}
