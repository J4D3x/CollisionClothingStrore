import JadeCard from "./JadeCard";
import React, { useState, useContext, useEffect } from "react";
import { SharedContext } from "./NumOFOr";
import "./CartCss.css"

//copilot-disable
function JadeCart(props){
    
    const {sharedCartArray,updateSharedCartArray, clearArray, removeItem}= useContext(SharedContext);


    const quiclCss={
        
    }
    const jadeCartStyling={
       
    }
    const [totalPriceM, setTotalPriceM] = useState(0);

    const jadeHandle= function(){
        if(sharedCartArray[0]==undefined){
            console.log("cartIsEmpty")
            setTotalPriceM(0);
        }
        else{
        let totalPrice=0;
        for(let i=0; i<sharedCartArray.length; i++){
            totalPrice = totalPrice+ sharedCartArray[i].Price;
            console.log(sharedCartArray[i]);
        }
        console.log(`total price: R${totalPrice}`)
       setTotalPriceM(totalPrice)
        }
    }

    useEffect(jadeHandle,[sharedCartArray])
    
    const jadeHandle2= function(){
            clearArray()
            console.log("Cart cleared")
            setTotalPriceM(0)
       
    }

    function removeItem2(id, color, size) {
        removeItem(id, color, size);
    }

    
   

    const style1={
        padding:"0",
        margin:"0",
        fontSize:"1em"
    }
    const style2={
        padding:"0",
        margin:"5px",
        width:"5em",
        
    }
    const style3={
        margin:"0",
        display:"block",
        color:"rgba(161, 161, 161, 0.97)",
    }
    let Listitems =(<h1>NO ITEMS ADDED</h1>);
    if(sharedCartArray[0]!=null){
          Listitems = sharedCartArray.map(item =>
                                            
            <div  className="div2" style={jadeCartStyling}>
                                            <div style={style1}>
                                            
                                            <img key={item.id} style={style2} src={item.Image}/>
                                            <h6 style={style1}> {item.ItemName}</h6>
                                            <h6 style={style1}>{item.Size} / {item.Color}</h6>
                                            <h6 style={style1}>R {item.Price}.00</h6>
                                            <button id="2tuff"style={style3} onClick={()=>removeItem2(item.id, item.Color, item.Size)}  >Remove</button>
                                            <hr/>
                                            </div> 
        </div> );
    }
    
   
 
    return(
        <>
        
        <div id="main">
        <img src={props.logo}/>
        <h1>CART</h1>
        <hr/>
        <br/>
            {Listitems}

            <div className="divOne" style={jadeCartStyling}>
        <h3>
            Total: R{totalPriceM}
        </h3>
        <h4 style={quiclCss} onClick={()=>jadeHandle2()}>
            CLEAR CART
        </h4>
        <br/>
        <h4 id="ewt" style={quiclCss}   >
            CHECK OUT
        </h4>
        </div>
            
        </div>
        
        </>
    );

}
export default JadeCart