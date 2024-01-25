import {
  BtnText,
  Input,
  SearchBtn,
  SearchForm,
  SearchbarStyled,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <SearchForm onSubmit={onSubmit}>
        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <SearchBtn type="submit">
          <BtnText>Search</BtnText>
        </SearchBtn>
      </SearchForm>
    </SearchbarStyled>
  );
};
