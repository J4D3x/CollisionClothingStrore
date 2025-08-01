import React, { useState, useEffect } from "react";
import "./Homepage.css"
import { use } from "react";

function HomePage(props) {

  const textArray = [["SUMMER 25' SALE", "DONT BE LEFT OUT!", "WHATS POPPING THIS SUMMER?"], ["Get 50% off on selected products", "Follow us on social media, for the latest updates", "Tag Collision on all your RAD activities"], ["images/CollisionOn/whiteWomen1.jpg", "images/CollisionOn/logo2.png", "images/CollisionOn/skater.jpg"]];


  const [homeTextState, setHomeTextState] = useState(textArray[0][0]);
  const [homeTextState2, setHomeTextState2] = useState(textArray[1][0]);
  const [homeTextState3, setHomeTextState3] = useState(textArray[2][0]);
  const [translateAniCounter, setTranslateAniCounter] = useState(0);
  const [time, updateTime] = useState(new Date());

  function handleState() {

    if (translateAniCounter == (textArray.length - 1)) {
      setTranslateAniCounter(0);

    }
    else {

      setTranslateAniCounter(translateAniCounter => translateAniCounter + 1);
    }

    setHomeTextState([textArray[0][translateAniCounter]])
    setHomeTextState2([textArray[1][translateAniCounter]])
    setHomeTextState3([textArray[2][translateAniCounter]])
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateTime(new Date()
      ); handleState()
    }, 5000);
    return () => {
      clearInterval(intervalID);
    }
  }
    , [time]);


  const style_for_heading = {

    margin: "0",
    color: "White",
    backgroundColor: "rgba(2, 2, 2, 1)",

  }
  const style_for_h1 = {

    fontFamily: "Georgia",
    opacity: "100%",
    textShadow: "0 0 20px rgba(167, 8, 156, 1)",
    backgroundColor: "rgba(7, 7, 7, 1)",
    fontSize: "2em",
    margin: "0",
    padding: "1em"
  }
  const style_for_h6 = {
    fontSize: "0.5em",
    marginTop: "0",
    marginBottom: "0",
    color: "rgba(133, 0, 102, 1)"

  }
  const markSts = {

    backgroundColor: "rgba(9, 9, 9, 0)",
    color: "white",
  }
  const videoCss = {
    margin: "0",
    width: "90vw",
    opacity: "70%",

  }
  const Wecss = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: "50%",
    color: "black",
    backdropFilter: "blur(2px)",
    backgroundColor: "rgba(7, 7, 7, 1)",
    margin: "0",
    padding: "0.1em",
    textShadow: "0 0 5px rgba(248, 154, 255, 1)"
  }
  const Wecss2 = {

    textAlign: "left",
    width: "50%",
    margin: "0",
    backgroundColor: "rgba(7, 7, 7, 1)",
    padding: "0.5em",
    textShadow: "0 0 5px rgba(248, 154, 255, 1)"
  }
  const WecssMain = {
    display: "flex",
    margin: "0",
    backgroundColor: "transparent"
  }

  const womencss2 = {

    width: "53%"
  }
  const mize_h1 = {
    fontSize: "6vw"
  }

  return (
    <>
      <div style={style_for_heading}>
        <video style={videoCss} autoPlay muted loop src="images/CollisionOn/PageVideo.mp4" alt="HomePageVideo" />
        <div style={WecssMain}>
          <div style={Wecss}><p>
            <img id="womenCss" style={womencss2} src={homeTextState3} />
          </p></div>
          <div onClick={() => handleState} style={Wecss2}><h1 style={mize_h1}>{homeTextState}</h1><p>{homeTextState2}</p></div>
        </div>

        {/*First shop the trend */}
        <div id="InfoContainer">
          <div id="info">
            <h2>
              SHOP THE TREND
            </h2>
            <p>
              GET THE LATEST COLLISION STREETWEAR
            </p>
          </div>
          <div id="info2">
            <img src={props.picture1} />

            <div id="divButton">
              <a href="/Tops">

                <h1>SHOP TOPS</h1>
              </a>
            </div>

          </div>
        </div>
        {/*Second shop item */}

        <div id="InfoContainer">
          <div id="info2">
            <img src={props.picture2} />

            <div id="divButton">
              <a href="/Hats">

                <h1>VIEW HATS</h1>
              </a>
            </div>

          </div>

          <div id="info">
            <h2 id="h2_2">
              COLLISION HATS
            </h2>
            <p id="EXTRAP">
              GET YOUR CALM ON ,BROH
            </p>

          </div>

        </div>

        <div id="bloodyBack"><h1 style={style_for_h1}><mark style={markSts}>NEWLEY <br /><h6 style={style_for_h6}>ARRIVED</h6></mark></h1></div>

      </div>
    </>
  );

}
export default HomePage;


