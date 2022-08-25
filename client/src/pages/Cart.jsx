import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../resposive';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';
require('dotenv').config();

const KEY = process.env.STRIPE_KEY;
console.log(KEY);

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${ props => props.type === "filled" && "none" };
    background-color: ${ props => props.type === "filled" ? "black" : "transparent" };
    color: ${ props => props.type === "filled" && "white" };
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${ mobile( {display: "none"} ) }
`;

const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
    ${ mobile( {flexDirection: "column"} ) }
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${ mobile( {flexDirection: "column"} ) }
    
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ props => props.color };
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${ mobile( {margin: "5px 15px"} ) }
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${ mobile( {marginBottom: "20px"} ) }
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`;

const SummaryTitle = styled.h1``;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${ props => props.type === "total" && "500" };
    font-size: ${ props => props.type === "total" && "24px" };
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    transition: all 1s ease;

    &:hover {
        transform: scale(1.1);
    }
`;



const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()
    console.log(KEY);

    const onToken = (token) => {
        setStripeToken(token);
    };


    useEffect(() => {
        const makeRequest = async () =>{
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                navigate("/success", {data:res.data});  

            }catch (err) {
                console.log(err);
            }
        };
         stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])
    
  return (
    <Container>
        <Announcement />
        <NavBar />

        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>

                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Shopping Bag(0)</TopText>
                </TopTexts>

                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Buttom> 
                <Info>
                    {cart.products.map(product=>(
                        <Product>
                        <ProductDetail>
                            <Image src={product.img} />
                            <Details>
                                <ProductName> <b>Product:</b> {product.title} </ProductName>
                                <ProductId> <b>ID:</b> {product._id} </ProductId>
                                <ProductColor color = {product.color} />
                                <ProductSize> <b>SIZE:</b> {product.size} </ProductSize>
                            </Details>

                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>{product.price * product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                    ))}
                    <Hr />
                    
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>₦ 4.90</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>₦ -8</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>

                    <StripeCheckout
                        name="Shopie"
                        image=""
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={"pk_test_51Ht7LZL9C1Q7gxI0HUeWl1wW82c5enRNKygtzUQ6W21qrktvY9faiI9aBnXxiS0HwSrMbLlN11Rb54O1Bej5e6Jf00vQGzxxcM"}
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>
            </Buttom>
        </Wrapper>
        
        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Cart