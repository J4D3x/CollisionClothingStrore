import "./NavigationCss.css";
import React, {useEffect, useState, useContext} from "react";
import JadeCart from "./JadeCart";
import { pageRefresh } from "./App";

//copilot-disable
function JadeNavigationBar(props){
     const {cartRefresh1,setCartRefresh1} = useContext(pageRefresh);
    const pageN = props.page;
    const [backgroundColor, setBackgroundColor]= useState("none");

        
    

    const logo = props.logo;
    const menuStyle={
       margin:0,
    }

    const [endAnimation, setEndAnimation]= useState("slideLeftRight");
    const [endAnimation2, setEndAnimation2]= useState("opacityAni2");
    const[menuView, setMenuView] = useState("none");
    
    const[menucounter, setMenucounter] = useState(1);
    const handleMenu= function(callback){
        if(menucounter==1){
        
        setMenuView("block")
        setMenucounter(2)
        setEndAnimation("slideLeftRight2")
        setEndAnimation2("opacityAni2")
        
    }
        else{
           
           setCartRefresh1(0)
           setEndAnimation2("opacityAni3")
           setEndAnimation("slideLeftRight")  
           setMenucounter(1)
           callback();
           
           
            
           
        }
    }
    const displaynone= function(){
        setTimeout( function(){setMenuView("none")},500);
        
    }
    const jadeMain={
        backgroundColor:backgroundColor,
    }

    const divStyle1={
    
    display: `${menuView}`,
    zIndex:"9999 !important",
    backgroundColor: "rgba(0, 0, 0, 1)",
    transition:"",
    top:"0",
    left: "0",
    width: "35%",
    height: "100vh",
    position:"absolute",
    border:"solid 1 white",
    animationName:`${endAnimation}`,
    animationDuration:`1s`,
    }

    const divStyle2={
    display: `${menuView}`,
    position:"fixed",
    backdropFilter:"blur(2px)",
    backgroundColor:"rgba(9, 9, 9, 1)",
    top:"0",
    right: "0",
    width: "65%",
    height: "100vh",
    animationName:`${endAnimation2}`,
    animationDuration:`0.6s`,
    overflow:"auto"
    }
    const logo2={
        width:"40%"
    }

    return(
        <>
        <nav id="navigationMain" style={jadeMain}>   
             <div id="dropdownMenu" onClick={()=> handleMenu(displaynone)}>
                <button><h6 style={menuStyle}>____</h6><h6 style={menuStyle}>____</h6><h6 style={menuStyle}>____</h6></button>  
                <div id="ish" style={divStyle1}>
                            <div id="ish2">
                            <h4 id="style_of_x" onClick={()=>handleMenu(displaynone)}>x</h4>
                            <a href="/"><li>HOME</li></a>
                            <a href="/Tops"><li>TOPS</li></a>
                            <a href="/Hats"><li>HATS</li></a>
                            <a href=""><li>JWELERY</li></a>
                            </div>
                            

                           
                </div> 
                  
             </div>
              <div style={divStyle2} >
                <JadeCart/>
                </div> 
              
        <p>
            <a href="/"><img src={logo}/></a>
        </p>
        </nav>
        
        </>
        
    );
}

export default JadeNavigationBar;