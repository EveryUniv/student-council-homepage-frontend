import { NavigationProps } from './NavigationProps';

// TODO: 각 페이지 만들어지면 경로 수정v
export const NavItems: NavigationProps[] = [
  {
    title: '총학소식',
    path: '/',
    id: 1,
    subPath: [
      {
        title: '총학소식',
        path: '/council-news',
        id: 1,
      },
      {
        title: '공약',
        path: '/pledge',
        id: 2,
      },
    ],
  },

  {
    title: '총학생회 정보',
    path: '/',
    id: 2,
    subPath: [
      {
        title: '인사말',
        path: '/greeting',
        id: 1,
      },
      {
        title: '조직도',
        path: '/organization',
        id: 2,
      },
      {
        title: '오시는길',
        path: '/location',
        id: 3,
      },
    ],
  },
  {
    title: '회의록',
    path: '/conference',
    id: 3,
  },
  {
    title: '대여물품',
    path: '/rental',
    id: 4,
  },
  {
    title: '소통',
    path: '/',
    id: 5,
    subPath: [
      {
        title: '청원게시판',
        path: '/board-petition/boards?page=1',
        id: 1,
      },
      {
        title: '문의 및 건의사항',
        path: '/board-suggestion/boards?page=1',
        id: 2,
      },
    ],
  },
  {
    title: 'VOC',
    path: '/voc',
    id: 6,
    subPath: [
      {
        title: 'Q&A',
        path: '/board-qna/boards?page=1',
        id: 1,
      },
      {
        title: 'My Voice',
        path: '/board-myvoice/boards?page=1',
        id: 2,
      },
    ],
  },
];
