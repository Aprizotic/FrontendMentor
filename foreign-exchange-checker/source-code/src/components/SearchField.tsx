import {
  Button,
  Input,
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
  type ValidationResult,
} from "react-aria-components/SearchField";
import { Label, FieldError, Description } from "./Form";

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField {...props} className="search-field">
      {label && <Label>{label}</Label>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="20"
        fill="none"
        viewBox="0 0 14 20"
      >
        <path
          fill="#fff"
          d="M13.89 15.814c.137.137.137.355 0 .465l-.628.629c-.11.136-.328.136-.465 0l-3.309-3.309a.44.44 0 0 1-.082-.246v-.355a5.76 5.76 0 0 1-3.719 1.367A5.683 5.683 0 0 1 0 8.677C0 5.56 2.543 2.99 5.688 2.99c3.117 0 5.687 2.57 5.687 5.687a5.73 5.73 0 0 1-1.395 3.719h.356c.082 0 .164.055.246.11zm-8.202-2.762a4.37 4.37 0 0 0 4.375-4.375 4.39 4.39 0 0 0-4.376-4.375 4.37 4.37 0 0 0-4.374 4.375 4.353 4.353 0 0 0 4.375 4.375"
        />
      </svg>
      <Input
        placeholder={placeholder}
        className="react-aria-Input inset search-field__input"
      />
      {description && <Description>{description}</Description>}
    </AriaSearchField>
  );
}
