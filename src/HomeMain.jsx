import Footer from "./Footer"
import JadeCard from "./JadeCard"
import JadeNavigationBar from "./JadeNavigationBar"
import HomePage from "./HomePage"
import LiveFeed from "./liveFeed"
import JadeCart from "./JadeCart"
import React,{useState, useEffect} from "react"



function HomeMain(){
    const [widthVW, setWidth] = useState(window.innerWidth)
    const [flexD, setFlexD] = useState('none')

    function handleResize(){
      setWidth(window.innerWidth);
    }
    function handleFlex(){
      if(widthVW>= 1000){
        setFlexD('center')
      }
      else if(widthVW<1000){
        setFlexD('left')
      }
    }
    window.addEventListener("resize", handleResize);
    useEffect(()=>{handleFlex()},[handleResize])
    
    const style_for_div={
      display:"flex",
      overflow:"auto",
      justifyContent:`${flexD}`,
      height:"32em",
    
      backgroundColor:"rgba(32, 32, 32, 1)",
      backgroundImage:" linear-gradient( rgba(0, 0, 0, 0.993),rgba(134, 0, 127, 0.085)), url(images/v903-techi-35.jpg)",
      backgroundSize:"cover",
      backgroundPosition: "0px",
      backgroundRepeat:"no-repeat",
      backgroundAttachment:"fixed",
      margin:"0",
      padding:"5px",
    }


    return(
     
      <>
      <div id="cooked">
          <LiveFeed message="COLLISION WEBSITE LAUNCH PARTY ANNOUNCEMENT COMING SOON"/>
          <JadeNavigationBar id="one" logo="images/CollisionOn/logo3.png" page="Home"/>
         <HomePage picture1="images/CollisionOn/streetwear.jpg" picture2="images/CollisionOn/calm.png"/>
          <div style={style_for_div}>
         
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" price={750.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/KhakhiDesign.png" identity={"one"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" price={899.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/FighterDesign.png" identity={"two"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" price={750.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/KhakhiDesign.png" identity={"three"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" price={899.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/FighterDesign.png" identity={"four"} limit={5}/>
          
           </div>
          
      </div>
      <Footer/> 
      </>
    );
}
export default HomeMain