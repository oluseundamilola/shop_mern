import React, { useState } from 'react'
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../resposive';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        #2828287e,
        #0000007f   
        ),
     url("../../../assets/images/bg.jpg") center center/cover no-repeat;

     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    ${ mobile( {width: "75%"} ) }
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-height: 40%;
    padding: 10px;
    margin: 10px 0;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: black;
        cursor: not-allowed;
    }
    
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.h3`
    color: red;
`;



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector( (state) => state.user );

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password });
    }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder ="user name" onChange={ (e) => setUsername(e.target.value) } />
                <Input placeholder ="password" type="password" onChange={ (e) => setPassword(e.target.value) } />
                
                <Button onClick={handleClick} disabled={isFetching} >LOGIN</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>Forgot Password?</Link>
                <Link>Create Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login