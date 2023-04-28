import AuthModal from "../../Modal/Auth/AuthModal"
import { Button, Flex } from "@chakra-ui/react"
import AuthButton from "./AuthButton"
import { signOut, User } from "firebase/auth"
import {auth} from "../../../firebase/clientApp"
import Icons from "./Icons"

type RightContentProps = {
    user?: User | null
}

const RightContent:React.FC<RightContentProps>=({user})=>(
    <>
        <AuthModal />
        <Flex justify="center" align="center">
            
            {user  && <div>{user.displayName}</div> ?  (
                // <Button onClick={()=> signOut(auth)}>Logout</Button>
                <Icons/>
            ) : <AuthButton />}
            {/* <Menu/> */}
        </Flex>
    </>
)

export default RightContent