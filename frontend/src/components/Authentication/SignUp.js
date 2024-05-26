import {Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {

const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [confirmpassword,setConfirmpassword]=useState();
const [pic,setPic]=useState();

const postDetails = (pic)=>{alert("uploaded")}
const submitHandler =()=>{}

  return (
    <div>
     <VStack>
        <FormControl id='first-name' isRequired="true">
            <FormLabel>Name</FormLabel>
            <Input 
                placeholder='Your Name?'
                onChange={(e)=>{setName(e.target.value)}}
            />
        </FormControl>
        <FormControl id='email' isRequired="true">
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Example : Satyam@abc.com'
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </FormControl>
        <FormControl id='password' isRequired="true">
            <FormLabel>Password</FormLabel>
            <Input 
                type='password'
                placeholder='Set Password'
                onChange={(e)=>{setPassword(e.target.value)}}
            />  
        </FormControl>
        <FormControl id='confirmpassword' isRequired="true">
            <FormLabel>Confirm Password</FormLabel>
            <Input 
                type='password'
                placeholder='Confirm Password'
                onChange={(e)=>{setConfirmpassword(e.target.value)}}
            />  
        </FormControl>
        <FormControl id='pic'>
            <FormLabel>Upload your picture</FormLabel>
            <Input 
                type='file'
                p={1.5}
                accept="image/*"
                onChange={(e)=>{postDetails(e.target.file[0])}}
            />
        </FormControl>
        <Button 
        colorScheme='blue'
        width='100%'
        m="15px 0 0 0"
        borderRadius="lg"
        onClick={submitHandler}>
            Submit
        </Button>
     </VStack>
    </div>
  )
}

export default SignUp
