import { CountryInfo } from "../api/apiService";

export interface IAutocompleteViewModel {
  inputValue: string;
  suggestionList: CountryInfo[];
  maximumSuggestionCount: number;
  isLoading: boolean;
  changeInputValue: (newValue: string) => void;
  loadSuggestions: (query: string) => Promise<void>;
}
