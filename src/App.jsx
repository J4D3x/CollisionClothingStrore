import Footer from "./Footer"
import JadeCard from "./JadeCard"
import JadeNavigationBar from "./JadeNavigationBar"


function App() {
    const style_for_div={
      textAlign:"center",
      
      backgroundColor:"rgba(32, 32, 32, 1)",
      backgroundImage:"url(images/v903-techi-35.jpg)",
      backgroundSize:"cover",
      backgroundPosition: "0px",
      backgroundRepeat:"no-repeat",
      margin:"0",
    }

    const style_for_div2={
      margin:"0",
    }

    return(
      <>
      <div id="cooked">
          <JadeNavigationBar id="one" logo="images/CollisionOn/logo3.png"/>
          <div style={style_for_div}>
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" backgroundColor="white" show="Yes" type="Top"/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" backgroundColor="white" show="Yes" type="Top"/>
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" backgroundColor="white" show="Yes" type="Top"/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" backgroundColor="white" show="Yes" type="Top"/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" backgroundColor="white" show="Yes" type="Top"/>

           </div>
          <Footer/>
      </div>
      </>
    );
  }

export default App
