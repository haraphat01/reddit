
import React from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { authModalState } from "../../atoms/authModalAtom";
import { useRecoilState } from "recoil";
import { Text } from "@chakra-ui/react";

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
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            You can scroll the content behind the modal
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AuthModal