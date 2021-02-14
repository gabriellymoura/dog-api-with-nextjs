import React from  'react';
import Head from 'next/head';
import { Box, Heading, Flex, Image, Button, Center, useToast, LinkOverlay, 
    Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { useState, useEffect } from 'react';


const Home = () =>{
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {response.json().then( data => setData(data))})
            .catch(e=>console.log("erro: " +e.message))
    }, [])

    const setData = ({
        message,
        status
    }) => {
        setMessage(message);
        setStatus(status);
    };

    const getDog = () =>{
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {response.json().then( data => setData(data))})
            .catch(e=>console.log("erro: " +e.message))
    }

    const toast = useToast()

    return(
        <>
        <Head> <title>Doguinhos.com</title></Head>
        <Heading bg='red.600' fontSize='1.75em' pt={3}  color='whiteAlpha.800'>
            Doguinhos.com 
            <Box bgImage='url("../images/bg_dog1.jpg")'>
                <Button  left ='1020' colorScheme='whiteAlpha' size="xs" top = '-8' >
                    <LinkOverlay href = '/dog_specific'>Quero um doguinho específico!!!!</LinkOverlay>
                </Button>
            </Box>   
        </Heading>
        
        <Box mt = {5} >
            <Flex justify = "center">
                <Heading><title>Doguinhos.com</title></Heading>
                <Heading as ='h1' textAlign="center" size="2xl" mb={5}>Doguinhos.com</Heading>
            </Flex>
        </Box>
        <Heading textAlign='center' mb = {5} pt='10' >
            <Button colorScheme="red" size="lg"
                onClick={() =>
                    (getDog(),toast({
                        title: "Melhor doguinho encontrado!",
                        description: "Nós trouxemos o doguinho mais divertido para alegar seu dia",
                        status: "success",
                        duration: 4000,
                        isClosable: true,}))}
            >Me dê um doguinho</Button>
        </Heading>
        <Center>
            <Image src={message} alt="Buscando o melhor doguinho" />   
        </Center>
        
        

        </>
    );
}

export default Home;