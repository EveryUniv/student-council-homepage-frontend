import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PagingProps } from 'components/PageControl';
import { PostProps } from './PostProps';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1290px;
  width: 100%;

  ${({ theme }) => theme.media.desktop} {
    padding: 30px 50px 10px 20px;
  }
  ${({ theme }) => theme.media.tablet} {
    padding: 30px 50px 10px 20px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding: 0px 10px 20px 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoardsContainer = styled.div`
  width: 100%;
`;

const PageInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 42px;
`;

const BoardHead = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1.5px solid ${({ theme }) => theme.colors.gray200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

const Row = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 1fr 2fr 8fr 2fr;
  place-items: center;
  transition: all 0.2s ease-in-out;
  :not(:first-child) {
    :hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  }
  ${({ theme }) => theme.media.desktop} {
    padding: 0px 50px;
  }
  ${({ theme }) => theme.media.tablet} {
    padding: 0px 50px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding: 0px 10px;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  text-align: center;
  div:last-child {
    width: 60px;
  }
`;

const AgreeCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PointText = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 5px;
`;

const Button = styled.button`
  all: unset;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.base};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 75px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  float: right;
  margin-top: 12px;
`;

const PostTitle = styled.div`
  ${({ theme }) => theme.media.mobile} {
    max-width: 100px;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostStatus = styled.p`
  color: #204A80;
`

interface BoardProps {
  posts: PostProps[];
  pagingInfo: PagingProps;
  currentPage: number;
}

function Board({ posts, pagingInfo, currentPage }: BoardProps): JSX.Element {
  const [board, setBoard] = useState<PostProps[]>([]);

  useEffect(() => {
    setBoard(posts);
  }, [posts]);

  return (
    <Container>
      <Wrapper>
        <BoardsContainer>
          <PageInfo>
            Total <PointText>{pagingInfo.totalElements}건,</PointText>{' '}
            {currentPage}/
            {Math.ceil(pagingInfo.totalElements / pagingInfo.size)}
          </PageInfo>
          <BoardHead>
            <Row>
              <div>번호</div>
              <div>머릿말</div>
              <div>제목</div>
              <div>동의수</div>
            </Row>
          </BoardHead>

          {board.map((post, index) => (
            <Link key={post.id} to={`/board-petition/board?id=${post.id}`}>
              <Row>
                <div>{index + 1 + pagingInfo.page * pagingInfo.size}</div>
                <PostStatus>{post.status === 'ACTIVE' ? "[진행중]" : "[마감]"}</PostStatus>
                <PostTitle>{post.title}</PostTitle>
                <AgreeCountWrapper>
                  {post.agreeCount}
                </AgreeCountWrapper>
              </Row>
            </Link>
          ))}
          <Link to="/board-petition/editor">
            <Button type="button">작성</Button>
          </Link>
        </BoardsContainer>
      </Wrapper>
    </Container>
  );
}

export default Board;
