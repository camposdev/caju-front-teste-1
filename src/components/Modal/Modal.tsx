import { createPortal } from 'react-dom';
import * as S from './style';
import * as React from 'react';
import IconButton from '../IconButton';
import { HiX } from "react-icons/hi";

type TProps = {
  open: boolean
  title: string
  body: string | React.ReactNode
  onClose: VoidFunction
  actions?: React.ReactNode
}

const Modal = ({ open, title, body, actions, onClose }: TProps) => {
  return (
    <>
      {open && createPortal(
        <S.Background>
          <S.Card aria-labelledby="modal-title" role="dialog">
            <S.Title id="modal-title">{title}</S.Title>

            <S.Content>
              {typeof body === 'string' ? <p>{body}</p> : body}
            </S.Content>

            {actions && (
              <S.Actions>
                {actions}
              </S.Actions>
            )}            

            <S.Close onClick={onClose}>
              <IconButton size="small" aria-label="Fechar modal">
                <HiX />
              </IconButton>
            </S.Close>
          </S.Card>
        </S.Background>,
        document.body
      )}
    </>
  );
};

export default Modal;