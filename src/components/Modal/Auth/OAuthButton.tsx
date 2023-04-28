import { Flex,Button, Image } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {auth} from '../../../firebase/clientApp'
import { Text } from "@chakra-ui/react";


const OAuthButtons:React.FC =()=> {
    const [signInWithGoole, user, loading, error] = useSignInWithGoogle(auth)
    return(
        <Flex direction="column" width="100%" mb={4}>
            <Button variant="oauth" mb={2} isLoading={loading}
            onClick={() => signInWithGoole()}
            >
                <Image src="/images/googlelogo.png" height="20px" mr="4"/> 
            Continue with google
            </Button>

            <Button variant="oauth">Some Other Provider</Button>
            {error && <Text>{error.message}</Text>}
        </Flex>
    )

}
export default OAuthButtons