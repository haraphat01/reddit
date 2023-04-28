import AuthModal from "../../Modal/Auth/AuthModal"
import { Flex } from "@chakra-ui/react"
import AuthButton from "./AuthButton"

type RightContentProps = {
    user: any
}

const RightContent:React.FC<RightContentProps>=({user})=>(
    <>
        <AuthModal />
        <Flex justify="center" align="center">
            {user ? <div>{user.displayName}</div> : <AuthButton />}
        </Flex>
    </>
)

export default RightContent