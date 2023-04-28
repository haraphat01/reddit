
import React, { useEffect } from "react"
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { authModalState } from "../../../atoms/authModalAtom";
import { useRecoilState } from "recoil";
import { Text } from "@chakra-ui/react";
import AuthInputs from "./Authinputs";
import OAuthButtons from "./OAuthButton";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp"

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user, loading, error] = useAuthState(auth);
    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false
        }))
    }

    useEffect(()=>{
        if(user) handleClose()
        console.log(user)
    },[user])

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
                            <OAuthButtons/>
                            <Text
                            color="grey.500"
                            fontWeight={700}
                            >OR</Text>
                            <AuthInputs />
                            
                        </Flex>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AuthModal