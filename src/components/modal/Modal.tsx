import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutsideClick from './hooks/useOutsideClick';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  ${({ theme }) => theme.media.mobile} {
    min-width: 300px;
  }
  ${({ theme }) => theme.media.tablet} {
    min-width: 400px;
  }
  ${({ theme }) => theme.media.desktop} {
    min-width: 500px;
  }
  height: fit-content;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  ${({ theme }) => theme.media.mobile} {
    font-size: 2rem;
  }
  font-weight: 600;
  margin-bottom: 10px;
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  svg {
    transition: all 0.2s ease-in-out;
  }
  :hover {
    svg {
      fill: ${({ theme }) => theme.colors.accent};
    }
  }
  cursor: pointer;
`;

const Contents = styled.div`
  margin: 50px 40px;
  span {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.media.mobile} {
    margin-top: 15px;
  }
  margin-top: 30px;
  * {
    margin: 0 5px;
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    padding: 5px 15px;
  }
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 200;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  cursor: pointer;
`;

interface ModalProps {
  onClose: () => void;
  title: string;
  contents: string | JSX.Element;
  accept?: string;
  onAccept?: () => void;
  decline?: string;
  onDecline?: () => void;
}

Modal.defaultProps = {
  accept: '',
  onAccept: () => null,
  decline: '',
  onDecline: () => null,
};

function Modal({
  onClose,
  title,
  contents,
  accept,
  onAccept,
  decline,
  onDecline,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    if (!$body) return () => [];
    const { overflow } = $body.style;
    $body.style.overflow = 'hidden';
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  useOutsideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <CloseButton onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              width="36"
              viewBox="0 0 48 48"
            >
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          </CloseButton>
          <Contents>
            {title && <H1>{title}</H1>}
            {typeof contents === 'string' ? (
              <span>{contents}</span>
            ) : (
              <div>{contents}</div>
            )}
            <ButtonsContainer>
              {accept && <Button onClick={onAccept}>{accept}</Button>}
              {decline && <Button onClick={onDecline}>{decline}</Button>}
              <Button onClick={handleClose}>닫기</Button>
            </ButtonsContainer>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

export default Modal;
