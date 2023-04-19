import { Flex } from "@chakra-ui/react"
import AuthButton from "./AuthButton"

type RightContentProps = {

}

const RightContent:React.FC<RightContentProps> =()=>{
    return (
        <>
        <Flex justify="center" align="center">
                <AuthButton/>
        </Flex>
        </>
    )
}

export default RightContent