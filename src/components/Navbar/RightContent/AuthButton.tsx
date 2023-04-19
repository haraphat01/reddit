import { Button, Flex } from "@chakra-ui/react"
import { useSetRecoilState } from "recoil"
import { authModalState } from "../../../atoms/authModalAtom"
const AuthButton: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    return (
        <>
            <Button variant="outline" height="28px" display={{ base: "none", sm: "flex" }} width={{ base: "70px", md: "100px" }} mr={2} onClick={() => setAuthModalState({
                open: true,
                view: 'login'
            })}> Log in</Button >
            <Button height="28px" display={{ base: "none", sm: "flex" }} width={{ base: "70px", md: "100px" }} mr={2} onClick={() => setAuthModalState({
                open: true,
                view: 'signup'
            })}> Sign Up</Button >
        </>
    )
}
export default AuthButton