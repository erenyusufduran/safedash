import styled from 'styled-components';
import { useMoveBack } from '../hooks/useMoveBack';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>Böyle bir sayfamız bulunmamaktadır.</h1>
        <button onClick={moveBack} size="large">
          &larr; Bir önceki sayfaya dön
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
