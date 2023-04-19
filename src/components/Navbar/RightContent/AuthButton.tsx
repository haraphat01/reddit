import { Button, Flex } from "@chakra-ui/react"

const AuthButton:React.FC =()=>(
    <>
        <Button variant="outline" height="28px" display={{base: "none", sm: "flex"}} width={{base: "70px", md: "100px"}} mr={2} > Log in</Button >
        <Button  height="28px" display={{base: "none", sm: "flex"}} width={{base: "70px", md: "100px"}} mr={2}> Sign Up</Button >
    </>
)
export default AuthButton