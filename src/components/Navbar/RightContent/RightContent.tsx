import AuthModal from "../../Modal/Auth/AuthModal"
import { Flex } from "@chakra-ui/react"
import AuthButton from "./AuthButton"

type RightContentProps = {

}

const RightContent:React.FC=()=>{
    return (
        <>
        <AuthModal/>
        <Flex justify="center" align="center">
            <AuthButton/>
        </Flex>
        </>
    )
}

export default RightContent