import styled from 'styled-components';
import Content from 'pages/communication/petition/components/editor/Editor';

const Container = styled.div`
  margin: 40px 0;
  ${({ theme }) => theme.media.mobile} {
    margin: 0;
  }
`;

function Editor() {
  return (
    <Container>
      <Content />
    </Container>
  );
}

export default Editor;
