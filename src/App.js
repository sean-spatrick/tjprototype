import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { keyframes } from 'styled-components';


const PriceBox = styled.div`
position: relative;
top:-30px;
right:-200px;
padding-left: 25px;
padding-top: 5px;
width: 75px;
height: 30px;
background: #FFFEFE;
`
const TitleStyle = styled.h1`
position: relative ;
top:-30px;

font-size: 24px;
color: #00424A;
letter-spacing: -0.94px;

`
const BoxStyle = styled.div`
position: absolute;
top:300px;
right: ${props => props.set === "left"? "70%":"10%"};
width: 300px;
height: 290px;
min-height: 200px;
background: #FFFEFE;
@media (max-width: 700px) {
  right: 10%;
}
`
const CheckOutBtn = styled.div`
position: absolute;
width: 67%;
height:50px;
font-size: 24px;
color: #FFFEFE;
bottom: 0px;
padding-top: 5px;
padding-left: 100px;
letter-spacing: -0.94px;
background: #A0352A;
border: none;
`
const BackgroundImg = styled.div`
background-image: ${props => "url(" + props.src + ")" };
background-repeat: no-repeat;
background-color:#00424A;
background-size: cover;
height: 1000px;
@media (max-width: 700px) {
  position:relative;
  background-size: 150%;
  background-position: right top;
  background-color:#FFFFFF;
  z-axis:0;

}
`
const StyledColor = styled.li`
   width: 30px;
   height: 30px;
   background-color: ${props => props.hexval+""};
   border: 2px solid #6A6A6A;
`

const StyledColorS = styled.ul`
 position: relative;
 top:-40px;
 left: -20px;
 list-style-type: none;
 display: flex;
 justify-content: space-around;
 width: 40%;
`

const SizeBox = styled.div`
  padding-top: 10px;
  padding-left: 5px;
  width:30px;
  height:25px;
  border: ${props => props.clicked? "3px solid #6A6A6A":"2px solid #6A6A6A"};
  background-color: ${props => props.clicked? "#6A6A6A":"#FFF"};
  color: ${props => props.clicked ? "#FFFFFF":"#6A6A6A"};

`
const QBox = styled.div`
  padding-top: 10px;
  padding-left: 29px;
  width:30px;
  height:25px;
  border: 2px solid #6A6A6A;
  background-color: #FFF;
  color: #00424A;

`
const SizeContainer = styled.div`
 position: relative;
  top: -40px;
   width: 100%
   display: flex;
   justify-content: space-around;
`

const QContainer = styled.div`
 position: relative;
  top: -20px;
   width: 100%
   display: flex;
   justify-content: center;
`
const MasterContainer = styled.div`
  animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
  transition: visibility 1s linear;
`
const Head = styled.div`
 position: static;
 top:0;
 background-img : url('./TommyJohnNavbar.png');
 width: 100%;
 height:75px;
 background-repeat: no-repeat;
 background-color:#FFFFFF;
 background-size: cover;
 z-axis:1;
`
const Headb = styled.div`
 position: fixed;
 bottom:0;
 text-decoration:none;
 text-align: center;
 background-img : url('./TommyJohnNavbar.png');
 width: 100%;
 height:75px;
 background-repeat: no-repeat;
 background-color:#FFFFFF;
 background-size: cover;
 z-axis:1;


`
const Swap = styled.div`
width: 100px;
height:70px;
border: 2px solid #6A6A6A;
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`
const fadeIn = keyframes`
  from {
    transform: scale(.75);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`


function ColorList(props){
  const colors = props.colors.map((color) =>
 <StyledColor hexval={color} />
);
return(<StyledColorS>{colors}</StyledColorS>)
}

class Sizes extends Component{
  constructor(props){
    super(props);
    this.state = {
    b : [false,false,false,false,false]
  }

  }
  clicky = (x) => {  this.setState({ b : x}); console.log("printed");};
  render(){
  return(
    <SizeContainer>
    <SizeBox onClick={()=> this.clicky([true,false,false,false,false])} clicked={this.state.b[0]}>S</SizeBox>
    <SizeBox onClick={()=> this.clicky([false,true,false,false,false])} clicked={this.state.b[1]}>M</SizeBox>
    <SizeBox onClick={()=> this.clicky([false,false,true,false,false])} clicked={this.state.b[2]}>L</SizeBox>
    <SizeBox onClick={()=> this.clicky([false,false,false,true,false])} clicked={this.state.b[3]}>XL</SizeBox>
    <SizeBox onClick={()=> this.clicky([false,false,false,false,true])} clicked={this.state.b[4]}>XXL</SizeBox>
    </SizeContainer>
  );}
}

class Quantity extends Component{
  constructor(props){
    super(props);
    this.state = {
    b : 1,
  }

  }
  clicky = (x) => {  if(this.state.b + x >= 1)this.setState({ b : x + this.state.b});};
  render(){
  return(
    <QContainer>
    <SizeBox onClick={()=> this.clicky(-1)} clicked={this.state.b[2]}>-</SizeBox>
    <QBox>{this.state.b}</QBox>

    <SizeBox onClick={()=> this.clicky(1)} clicked={this.state.b[0]}>+</SizeBox>
    </QContainer>
  );}
}

class CheckoutBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnmsg:"add to cart",
      quantity:1,
    }
    this.handleclick = this.handleclick.bind(this);

  }
  handleclick(){
    this.setState({btnmsg:"added to cart!"});
    // *** addToCart(); *** //
  }

  render(){
    return(
      <div>
      <BoxStyle set={this.props.product.toolSetting}>
      <PriceBox>{this.props.product.productPrice}</PriceBox>
      <TitleStyle>{this.props.product.productName}</TitleStyle>
      <ColorList colors={this.props.product.productColors}/>
      <Sizes />
      <Quantity/>
      <CheckOutBtn onClick={()=>this.handleclick()}>{this.state.btnmsg}</CheckOutBtn>
      </BoxStyle>
      </div>
    );
  }
}

const product1 = {
  productName: "Second Skin Boxer Brief",
  productPrice: "$34.00",
  productColors: [
    "#2D234C",
    "#0E585D",
    "#71B8DA",
  ],
  productImg: require('./secondskin.jpg'),
  toolSetting:"left",
  linktomore:"https://tommyjohn.com/collections/underwear-mens-styles-brief#?Collections=Men%27s+Brief&Metastyle=Boxer+Brief&search_return=all",
}
const product2 = {
  productName: "Cool Cotton High V-Neck",
  productPrice: "$40.00",
  productColors: [
    "#FFF",

  ],
  productImg: require('./ushirt.jpg'),
  toolSetting:"right",
  linktomore:"https://tommyjohn.com/collections/mens-undershirts",
}
const product3 = {
  productName: "Go Anywhere® French Terry Quarter Zip",
  productPrice: "$115.00",
  productColors: [
    "#363634",
    "#827757",
    "CDCDCF",

  ],
  productImg: require('./qzip.jpg'),
  toolSetting:"right",
  linktomore:"https://tommyjohn.com/collections/mens-undershirts",
}

const products = [product1,product2,product3];

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      i:0,
      product:product1,
      animate:false,
    }
    this.swapproduct = this.swapproduct.bind(this);
  }
  swapproduct(){
    this.setState({animate:true});
    if(this.state.i===2){
      this.setState({product:products[0],i:0});
      this.setState({animate:false});
    }else{
      this.setState({product:products[this.state.i+1],i:this.state.i+1});
      this.setState({animate:false});
    }

  }
  render() {
    return (
      <div>
      <Head><Swap onClick={ ()=> this.swapproduct() } >Swap Product!</Swap></Head>
      <MasterContainer out={this.state.animate}>
      <BackgroundImg src={this.state.product.productImg}/>
      <CheckoutBox product={this.state.product}/>
      </MasterContainer>
      <Headb><a href={this.state.product.linktomore}>more</a></Headb>
      </div>
    );
  }
}

export default App;
