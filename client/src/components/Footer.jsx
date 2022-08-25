import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../resposive';


const Container = styled.div`
    display: flex;
    ${ mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${ mobile({ display: "none%" })}
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px ;
    ${ mobile({ backgroundColor: "#5a5a5a", color: "white" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shopie.</Logo>
            <Desc>
            Born in the Swiss Alps, On Running was created with bold ambitions to change the world of running. With professional athletes and an engineer the masterminds behind the biz, we were expecting big things and its running trainers and activewear didn’t disappoint. With the belief that performance is important, but comfort is always #1, the brand describes its trainers as ‘clouds’ (and they definitely live up to the claim). Shop our On Running at ASOS
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook />
                </SocialIcon>

                <SocialIcon color="E4405F" >
                    <Instagram />
                </SocialIcon>

                <SocialIcon color="55ACEE" >
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023" >
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight: "10px"}} /> 622 Dixiens Path, North Gate-Way 123</ContactItem>
            <ContactItem> <Phone style={{marginRight: "10px"}}/> +192 33 22 123</ContactItem>
            <ContactItem> <MailOutline style={{marginRight: "10px"}}/> contact@shopie.dev</ContactItem>

            
        </Right>

    </Container>
  )
}

export default Footer