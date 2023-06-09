import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp"
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const [error, setError] = useState('')
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if(error) setError('')
        if (signUpForm.password !== signUpForm.confirmPassword) {
            setError("password do not match")
            return
        }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                bg="grey.50"
            />
            <Input
                required
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={onChange}
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                bg="grey.50"
            />
            <Input
                required
                name="confirmPassword"
                placeholder="confirm password"
                type="password"
                mb={2}
                onChange={onChange}
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
                bg="grey.50"
            />
            {error || userError && (<Text
                textAlign='center'
                color='red'
                fontSize="10pt"
            >{error || userError.message}</Text>)}
            <Button width="100%" height="36px" mt={2} mb={2} type="submit"
            isLoading={loading}
            >Sign up</Button>
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>Already have an account?</Text>
                <Text color="blue.500" fontWeight={700} cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "login",
                        }))
                    }>Login</Text>
            </Flex>
        </form>
    )

}
export default Signup