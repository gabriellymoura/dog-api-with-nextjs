import React from  'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Box, Flex, LinkOverlay, Heading, Button, Select, Center, Image, useToast } from '@chakra-ui/react'



const DogRandom = () =>{
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [racaInput, setRacaInput] = useState(''); //user

    const setData = ({
        message,
        status
    }) => {
        setMessage(message);
        setStatus(status);
    };
     useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {response.json().then( data => setData(data))})
            .catch(e=>console.log("erro: " +e.message))
    }, [])

    const escolheRaca = e =>{
        setRacaInput(e.target.value);
      };
    
    
      const getRaca = () =>{
        fetch(`https://dog.ceo/api/breed/${racaInput}/images/random`)
          .then(response => {response.json().then(data => setData(data))})
          .catch(e=> console.log("errp: "+e.message))
      }

      const toast = useToast();

    return(
        <>
        <Head>Doguinho Random</Head>
        <Box mt = {5} >
            <Flex justify = "center">
                <Heading><title>Doguinhos.com</title></Heading>
                <Heading as ='h1' textAlign="center" size="2xl" mb={5} colorScheme='pink'>Doguinhos.com</Heading>
            </Flex>
            <Box bgImage='url("../images/bg_dog1.jpg")'>
                <Button  left ='1020' colorScheme='red' variant="outline" size="xs" top = '-16' >
                    <LinkOverlay href = '/'>Quero um doguinho aleatório!!!!</LinkOverlay>
                </Button>
            </Box>
        </Box>
        <Center>
            <Heading textAlign='center' mb = {5} pt='10' >
                <Select  placeholder="Escolhe um doguinho vai!!" onChange = {escolheRaca}>
                    <option value="affenpinscher">affenpinscher</option>
                    <option value="african">african</option>
                    <option value="airedale">airedale</option>
                    <option value="akita">akita</option>
                    <option value="appenzeller">appenzeller</option>
                    <option value="australian-shepherd">shepherd australian</option>
                    <option value="basenji">basenji</option>
                    <option value="beagle">beagle</option>
                    <option value="bluetick">bluetick</option>
                    <option value="borzoi">borzoi</option>
                    <option value="bouvier">bouvier</option>
                    <option value="boxer">boxer</option>
                    <option value="brabancon">brabancon</option>
                    <option value="briard">briard</option>
                    <option value="buhund-norwegian">norwegian buhund</option>
                    <option value="bulldog-boston">boston bulldog</option>
                    <option value="bulldog-english">english bulldog</option>
                    <option value="bulldog-french">french bulldog</option>
                    <option value="bullterrier-staffordshire">staffordshire bullterrier</option>
                    <option value="cairn">cairn</option>
                    <option value="cattledog-australian">australian cattledog</option>
                    <option value="chihuahua">chihuahua</option>
                    <option value="chow">chow</option>
                    <option value="clumber">clumber</option>
                    <option value="cockapoo">cockapoo</option>
                    <option value="collie-border">border collie</option>
                    <option value="coonhound">coonhound</option>
                    <option value="corgi-cardigan">cardigan corgi</option>
                    <option value="cotondetulear">cotondetulear</option>
                    <option value="dachshund">dachshund</option>
                    <option value="dalmatian">dalmatian</option>
                    <option value="dane-great">great dane</option>
                    <option value="deerhound-scottish">scottish deerhound</option>
                    <option value="dhole">dhole</option><option value="dingo">dingo</option>
                    <option value="doberman">doberman</option>
                    <option value="elkhound-norwegian">norwegian elkhound</option>
                    <option value="entlebucher">entlebucher</option>
                    <option value="eskimo">eskimo</option>
                    <option value="finnish-lapphund">lapphund finnish</option>
                    <option value="frise-bichon">bichon frise</option>
                    <option value="germanshepherd">germanshepherd</option>
                    <option value="greyhound-italian">italian greyhound</option>
                    <option value="groenendael">groenendael</option>
                    <option value="havanese">havanese</option>
                    <option value="hound-afghan">afghan hound</option>
                    <option value="hound-basset">basset hound</option>
                    <option value="hound-blood">blood hound</option>
                    <option value="hound-english">english hound</option>
                    <option value="hound-ibizan">ibizan hound</option>
                    <option value="hound-plott">plott hound</option>
                    <option value="hound-walker">walker hound</option>
                    <option value="husky">husky</option>
                    <option value="keeshond">keeshond</option>
                    <option value="kelpie">kelpie</option>
                    <option value="komondor">komondor</option>
                    <option value="kuvasz">kuvasz</option>
                    <option value="labrador">labrador</option>
                    <option value="leonberg">leonberg</option>
                    <option value="lhasa">lhasa</option>
                    <option value="malamute">malamute</option>
                    <option value="malinois">malinois</option>
                    <option value="maltese">maltese</option>
                    <option value="mastiff-bull">bull mastiff</option>
                    <option value="mastiff-english">english mastiff</option>
                    <option value="mastiff-tibetan">tibetan mastiff</option>
                    <option value="mexicanhairless">mexicanhairless</option>
                    <option value="mix">mix</option>
                    <option value="mountain-bernese">bernese mountain</option>
                    <option value="mountain-swiss">swiss mountain</option>
                    <option value="newfoundland">newfoundland</option>
                    <option value="otterhound">otterhound</option>
                    <option value="ovcharka-caucasian">caucasian ovcharka</option>
                    <option value="papillon">papillon</option>
                </Select>
                <Button colorScheme="red" size="sm"
                onClick={() =>
                    (getRaca(),toast({
                        title: "Melhor doguinho encontrado!",
                        description: "Nós trouxemos o doguinho mais divertido para alegar seu dia",
                        status: "success",
                        duration: 4000,
                        isClosable: true,}))}
                >É este!</Button>
            </Heading>
        </Center>    
        <Center>
            <Image src={message} alt="Buscando o melhor doguinho" />   
        </Center>
        </>
    );
}

export default DogRandom;