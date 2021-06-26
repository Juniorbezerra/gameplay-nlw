import React from "react";
import { ModalProps, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";
import { Bar, Container, Modal, Overlay, } from "./styles";

interface Props extends ModalProps{
  children : React.ReactNode
  closeModal: () =>void;
}

export function ModalView ({children, closeModal, ...rest}: Props){
  return (
    <Modal 
      transparent
      statusBarTranslucent
      animationType="slide"
      {...rest}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <Overlay>
            <Container>
              <Background>
                <Bar/>
                {children}
              </Background>
            </Container>
          </Overlay>
        </TouchableWithoutFeedback>
    </Modal>
  )
}