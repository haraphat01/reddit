import AuthModal from "../../Modal/Auth/AuthModal"
import { Button, Flex } from "@chakra-ui/react"
import AuthButton from "./AuthButton"
import { signOut } from "firebase/auth"
import {auth} from "../../../firebase/clientApp"

type RightContentProps = {
    user: any
}

const RightContent:React.FC<RightContentProps>=({user})=>(
    <>
        <AuthModal />
        <Flex justify="center" align="center">
            
            {user  && <div>{user.displayName}</div> ?  (
                <Button onClick={()=> signOut(auth)}></Button>
            ) : <AuthButton />}
        </Flex>
    </>
)

export default RightContent