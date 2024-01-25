import { Container, StyledBtn } from './Button.styled';

export const Button = ({ onClick, name }) => {
  return (
    <Container>
      <StyledBtn type="button" onClick={onClick}>
        {name}
      </StyledBtn>
    </Container>
  );
};
