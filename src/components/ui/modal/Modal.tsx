import { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import FocusLock from "react-focus-lock";
import Close from "../../icons/Close";

import {
  Backdrop,
  CloseButton,
  CloseButtonText,
  Content,
  Header,
  HeaderText,
  StyledModal,
  Wrapper,
} from "./Modal.styles";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

const Modal = ({ isShown, hide, modalContent, headerText }: ModalProps) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if ((event.key === "Escape" || event.key === "Esc") && isShown) {
        hide();
      }
    },
    [hide, isShown]
  );

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown, onKeyDown]);

  const modal = (
    <>
      <Backdrop onClick={hide} />
      <FocusLock>
        <Wrapper aria-modal aria-labelledby={headerText} tabIndex={-1}>
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton onClick={hide}>
                <Close />
                <CloseButtonText>close</CloseButtonText>
              </CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
