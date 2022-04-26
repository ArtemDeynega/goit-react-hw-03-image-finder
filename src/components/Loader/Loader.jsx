import { RevolvingDot } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <RevolvingDot color="#00BFFF" height={200} width={200} />
    </Container>
  );
};
