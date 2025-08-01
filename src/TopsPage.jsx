import JadeNavigationBar from "./JadeNavigationBar";
import React,{useState, useEffect} from "react";
import JadeCard from "./JadeCard";
import LiveFeed from "./liveFeed";
import "./topsPageCss.css";
import Footer from "./Footer";


function TopsPage(props){
  

        const [widthVW, setWidth] = useState(window.innerWidth)
        const [flexD, setFlexD] = useState('none')
        const [viewHeight, setViewHeight] = useState('45vh')
        const [anima, setAnima] = useState('animation3')

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
          if(widthVW>717){
            setViewHeight('90vh')
          }
          else if(widthVW<=717){
             setViewHeight('45vh')
          }
          else if(widthVW>=1200){
            
          }
        }
        window.addEventListener("resize", handleResize);
        useEffect(()=>{handleFlex()},[handleResize])
        
        const style_for_div={
          display:"flex",
          overflow:"auto",
          justifyContent:`${flexD}`,
          height:"32em",
          backgroundColor:"rgba(255, 255, 255, 1)",
          backgroundImage:"linear-gradient( rgba(255, 255, 255, 1),rgba(0, 0, 0, 1)), url(images/wolla.jpg)",
          backgroundSize:"cover",
          backgroundPosition: "0px",
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          margin:"0",
          padding:"2px",
          animationName:`${anima}`,
          animationDuration:"2s"
        }
        
        const style_for_Main={
            height:`${viewHeight}`
        }
        ///////////////////////////////////////////////////
        //////////////////////////////////////////////////
        /////////////////////////////////////////////////
        ////////////////////////////////////////////////
        ///////////////////////////////////////////////
        /// If filter/////////////////////////////////
            const arrayOfShirts = [
               <div> 
         <div style={style_for_div}>      
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" price={750.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/KhakhiDesign.png" identity={"one"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" price={899.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/FighterDesign.png" identity={"two"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" price={750.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/KhakhiDesign.png" identity={"three"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" price={899.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/FighterDesign.png" identity={"four"} limit={5}/>

    </div>
      </div>
        ]

    const arrayOfTANKTops=[
       <div> 
         <div style={style_for_div}>      
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" price={750.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/KhakhiDesign.png" identity={"one"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" price={899.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/FighterDesign.png" identity={"two"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/testing101.png" picture2="images/CollisionOn/Rewind101(Grey).png" picture3="images/CollisionOn/Rewind101(Black).png" name="KAKHI '44 T-SHIRT" description="R 750.00" price={750.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/KhakhiDesign.png" identity={"three"} limit={5}/>
          <JadeCard picture1="images/CollisionOn/Fighter(White).png" picture2="images/CollisionOn/Fighter(Grey).png" picture3="images/CollisionOn/Fighter(Black).png" name="FIGHTER T-SHIRT" description="R 899.00" price={899.00} backgroundColor="white" show="Yes" type="Top" design="images/CollisionOn/FighterDesign.png" identity={"four"} limit={5}/>

    </div>
      </div>
    ]
    
    ///////////////////////
    //CSS
    const filterAll={

    }
    const filterHOODIES={
      
    }
    const filterTANKTOPS={
      
    }
    const filterTSHIRT={
      
    }
    
    
    const arrayOfHoodies=[
      <div>
         <div style={style_for_div}>
        <h1>NO HOODIES TO SHOW</h1>
    </div>

      </div>
             
    ]

    

    let MAIN_ARRAY= [];
    let MAIN_ARRAY_PLaceHolder= [];

        const [filter, setFilter] = useState(0);
        
        function handleFilter_ALL(){
          MAIN_ARRAY_PLaceHolder= [];
          setFilter(sF=>sF-sF);
        }
        function handleFilter_TANK_TOP(){
          MAIN_ARRAY_PLaceHolder= [];
          setFilter(3);
        }
        function handleFilter_Hoodie(){
          MAIN_ARRAY_PLaceHolder= [];
          setFilter(2);
        }
        function handleFilter_T_SHIRT(){
          MAIN_ARRAY_PLaceHolder= [];
          setFilter(1);
        }
        
        
        
        if(filter==0){
          for(let i=0; i<arrayOfShirts.length+arrayOfHoodies.length+arrayOfTANKTops.length; i++){
            MAIN_ARRAY_PLaceHolder.push(arrayOfShirts[i])
            MAIN_ARRAY_PLaceHolder.push(arrayOfTANKTops[i])
            MAIN_ARRAY_PLaceHolder.push(arrayOfHoodies[i])
                                           }
        }
        ////////////////////////////////////
         if(filter==1){
          for(let i=0; i<arrayOfShirts.length; i++){
          MAIN_ARRAY_PLaceHolder.push(arrayOfShirts[i])
                                            }
        }
        ///////////////////////////////////
         if(filter==2){
          
          for(let i=0; i<arrayOfShirts.length; i++){
          MAIN_ARRAY_PLaceHolder.push(arrayOfHoodies[i])
                                            }
        
        }
        /////////////////////////////////
         if(filter==3){
          for(let i=0; i<arrayOfShirts.length; i++){
          MAIN_ARRAY_PLaceHolder.push(arrayOfTANKTops[i])
        }
        
        }
        useEffect(()=>{setAnima(`animation3`)}
          ,[MAIN_ARRAY_PLaceHolder]
        )
        ///////////////////////////////////////////////////
        //////////////////////////////////////////////////
        /////////////////////////////////////////////////
        ////////////////////////////////////////////////
        ///////////////////////////////////////////////
        /// If filter/////////////////////////////////
        
          return(
        <>
          <LiveFeed message="PREMIUM TOPS FOR FASHION FANATICS"/>
        <JadeNavigationBar id="one" logo="images/CollisionOn/logo3.png" page="Home"/>
        <div id="Main">
          <div style={style_for_Main} id="mainDisplay">
                <div id="WordingContainer">
                    <h1>TOPS</h1>
                    <p>At Collision we strive to deliver only exceptional clothing quallity at an affordable price. From T-shirts to Hoodies we offer only the best.<br/> Pick your favorite Apparel and wear it like a BOSS.</p>  
                </div>
        </div>

                
        </div>


      
        <div id="MainSelector">
          <h5>APPAREAL FILTER:</h5>
          <div id="selector">
          <h4 style={filterAll} onClick={handleFilter_ALL}>ALL</h4>
          <h4 style={filterTSHIRT} onClick={handleFilter_T_SHIRT}>T-SHIRTS</h4>
          <h4 style={filterHOODIES} onClick={handleFilter_Hoodie}>HOODIES</h4>
          <h4 style={filterTANKTOPS} onClick={handleFilter_TANK_TOP}>TANK TOPS</h4>
          </div>

         
      </div>
      

       
           
         {MAIN_ARRAY_PLaceHolder}
          
           
           <Footer/>
        
        </>
    );
        
    

}
export default TopsPage