import "./NavigationCss.css";
import React, {useState} from "react";


function JadeNavigationBar(props){

    const logo = props.logo;
    const menuStyle={
       margin:0,
    }

    const [endAnimation, setEndAnimation]= useState("slideLeftRight");

    const[menuView, setMenuView] = useState("none");
    const[menucounter, setMenucounter] = useState(1);
    const handleMenu= function(){
        if(menucounter==1){
        setMenuView("block")
        setMenucounter(2)
        setEndAnimation("slideLeftRight2") 
    }
        else{
           setEndAnimation("slideLeftRight") 
           setMenuView("none") 
           setMenucounter(1)
           
        }
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
    animationDuration:`0.6s`
    }
    const divStyle2={
    display: `${menuView}`,
    position:"fixed",
    backgroundColor:"rgba(0, 0, 0, 0.71)",
    top:"0",
    right: "0",
    width: "65%",
    height: "100vh",
    animationName:`opacityAni2`,
    animationDuration:`0.6s`,
    
    }

    return(
        <nav id="navigationMain">   
             <div id="dropdownMenu" onClick={()=> handleMenu()}>
                <button><h6 style={menuStyle}>____</h6><h6 style={menuStyle}>____</h6><h6 style={menuStyle}>____</h6></button>  
                <div id="ish" style={divStyle1}>
                            <h4 id="style_of_x" onClick={()=>handleMenu()}>x</h4>
                            <a href=""><li>CART</li></a>
                            <a href=""><li>TOPS</li></a>
                            <a href=""><li>HATS</li></a>
                            <a href=""><li>JWELERY</li></a>
                           
                </div> 
                  
             </div>
              <div style={divStyle2} onClick={handleMenu}></div> 
        <p>
            <img src={logo}/>
        </p>
        </nav>
        
    );
}

export default JadeNavigationBar;