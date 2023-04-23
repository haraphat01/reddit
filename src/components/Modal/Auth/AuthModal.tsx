
import React from "react"
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { authModalState } from "../../../atoms/authModalAtom";
import { useRecoilState } from "recoil";
import { Text } from "@chakra-ui/react";
import AuthInputs from "./Authinputs";

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false
        }))
    }

    return (
        <div>
            <Modal blockScrollOnMount={false} isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {modalState.view === "login" && "Login"}
                        {modalState.view === "signup" && "Sign up"}
                        {/* {modalState.view === "resetpassword " && "Reset Passpword"} */}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        width="70%"
                        border="1px solid red">
                            {/* <OAuthbuttons/> */}
                            <AuthInputs/>
                        </Flex>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AuthModal