import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
    const submitHandler =()=>{}
    
      return (
        <div>
         <VStack>
            <FormControl id='email' isRequired="true">
                <FormLabel>Email</FormLabel>
                <Input 
                    placeholder='Email'
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </FormControl>
            <FormControl id='password' isRequired="true">
                <FormLabel>Password</FormLabel>
                <Input 
                    type='password'
                    placeholder='Password'
                    onChange={(e)=>{setPassword(e.target.value)}}
                />  
            </FormControl>      
            <Button 
            colorScheme='blue'
            width='100%'
            m="15px 0 0 0"
            borderRadius="lg"
            onClick={submitHandler}>
               Login
            </Button>
         </VStack>
        </div>
      )
}

export default Login
