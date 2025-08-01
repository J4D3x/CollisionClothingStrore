import LiveFeed from "./liveFeed"
import JadeNavigationBar from "./JadeNavigationBar"
import Footer from "./Footer"
import JadeCart from "./JadeCart";

function CartMain(){

    return(
        <>
        <LiveFeed message="COLLISION WEBSITE LAUNCH PARTY ANNOUNCEMENT COMING SOON"/>
          <JadeNavigationBar id="one" logo="images/CollisionOn/logo3.png"/>
          <JadeCart logo="images/CollisionOn/logo3.png"/>
        <Footer/>
        </>
    );
}
export default CartMain;