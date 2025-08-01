import "./styleSheet4JadeCard.css";
import React, {useState, useContext, useEffect, useRef} from "react";
import { SharedContext } from "./NumOFOr";
import {pageRefresh} from "./App"

//copilot-disable
function JadeCard(props){
    //javaScript for JadeCard
    const {updateSharedCartArray,sharedCartArray} = useContext(SharedContext);
    const {cartRefresh1,setCartRefresh1} = useContext(pageRefresh);

    const background2={
        textAlign:"center",
    }
    console.log(`cART REFRESH :` +cartRefresh1)

    const styleH4 ={
        margin: "0",
        color:"rgba(0, 0, 0, 0.8)",
    }
 
    let savedState = "none";
    //
    const limit = props.limit;
    let dynamicUnitCounter=0;
    const [view, setView] = useState('Black');
    const [cart, setCart] = useState('Add To Cart');
    const [view2, setView2] = useState(`none`);
    const [view3, setView3] = useState(`none`);
    const [view4, setView4] = useState(`none`);
    const [descrip, setDescrip] = useState(`Please select a size`);
    const [clickstate, setclickstate] = useState(1);
    const [clickstateiMG, setclickstateiMG] = useState(1);
    const [imageView, setImageView]= useState("10em");
    const [imagePic, setImagePic]= useState(props.picture3);
    const [numberOfOrders, setNumberOfOrders]= useState(0);
    const [initialSize, setInitialSize]= useState();
    const ItemType = props.type;
    const [orderArray, setorderArray]= useState([]);
    
    function checker(){
        let dynamicUnitCounter=0;
        if(sharedCartArray[0]==undefined || sharedCartArray[0]==null){
            console.log("cart is null or undefined")
            setNumberOfOrders(0);
        }
    
        else{
            
            if(sharedCartArray.length==0){
                let length=0;
                  console.log(length)
            }
            else{
                let length=sharedCartArray.length-1
                console.log(length)
            
            for(let i=0; i<=length;i++){
                
            if(props.name == sharedCartArray[i].ItemName){
                dynamicUnitCounter=dynamicUnitCounter+1;
                console.log("dynamicUnit set : "+dynamicUnitCounter+" LENGHT: "+length)
            }
            setNumberOfOrders(dynamicUnitCounter);
            
        }
        }
    }
        
    }

    useEffect(()=>{
       if(cartRefresh1==0){
            checker()
            console.log("work done")
            setCartRefresh1(1)
       }
        
    }
            
        ,[sharedCartArray])

        //
        const [zoom, setZoom]=useState("none");
        const handle1 = function(){ setView("Black");setView2("none"); setclickstate(1); setImagePic(props.picture3);}
        const handle2 = function(){ setView("White");setView2("none");setclickstate(1); setImagePic(props.picture1);}
        const handle3 = function(){ setView("Grey");setView2("none");setclickstate(1); setImagePic(props.picture2);}
        const handle4 = function(){ if(clickstate==1){setView2("flex"); setclickstate(2)}
                                    else{
                                        setView2("none"); setclickstate(1)
                                    }
         }
        const handle5 = function(){ if(clickstate==2){setView2("none");setclickstate(1)};}
        //image state control
        
        const handleImg = function(){ if(clickstateiMG==1){
                setView3("inline-block");
                setZoom("flex");
                setImageView("10.3em"); setclickstateiMG(2);
        }
        else{
            setView3("none");
            setZoom("none");
            setImageView("10em"); setclickstateiMG(1);
        }
            
        }
        const handleSizeS = function(){
            setView4("none");
            setInitialSize(`S`);
        }
        const handleSizeM = function(){
            setInitialSize(`M`);
        }
        const handleSizeL = function(){
            setInitialSize(`L`);
        }

        //handling Cart
        const [Orderstring,setOrderstring] =useState("");

        //////////////////////////////////
        const handleAdd2Cart = function(){
            if(initialSize== undefined){
                setDescrip("Please select a size");
                setView4("block");
                
            }
            else if(numberOfOrders==5){
                setDescrip("Maximum limit of 5 due to availability");
                setView4("block");
                
                
            }
            else{
                let format = {Type: ItemType, ItemName: props.name, Color: view, Size:initialSize, Price:props.price, Image: imagePic, id: props.identity};
                orderArray.push(format);
                updateSharedCartArray(format);
                setCart('Added')

                //unnessesary need to find use of this string
                for(let i=0; i<orderArray.length; i++){
                    setOrderstring("\n"+Orderstring+""+(i+1)+"-"+orderArray[i]+" "+"\n")        
                }
            }
        }

        useEffect(()=>{
        setTimeout(() => {
            setCart('Add to Cart')}, 3000);},[cart])

            useEffect(()=>{
        setTimeout(() => {
            setView4('none')}, 4000);},[view4])

    //CSS styling
     const styleH6 ={
        padding:"6px",
        margin: "2px",
        textAlign:"left",
        color:"rgba(0, 0, 0, 0.87)",
        boxShadow:"0 0 5px rgba(0, 0, 0, 0.69)",
        display:"inline-block",
        borderRadius:"10px",

    }
       const styleH6_2 ={
        padding:"6px",
        margin: "2px",
        textAlign:"right",
        color:"rgba(255, 255, 255, 0.76)",
        boxShadow:"0 0 5px rgba(64, 64, 64, 0.48)",
        display:"inline-block",
        borderRadius:"10px",

    }

    const divStyle={
        textAlign:"right",
        
    }
   

    const imgCss= {
    textAlign:"center",
    width: `${imageView}`,
    height: "auto",
    border:"transparent 1px black",
    marginBottom:"-2em",
    }
        
    const dropDownStyles ={
    backdropFilter: "blur(3px)",
    display: `${view2}`,
    textAlign: "center",
    position:"absolute",
    margin:"0",
    border:"solid 1px gray",
    boxShadow:"0 0 10px black"
    }

    const descriptionBoxStyle= {
        margin:"5px",
        padding:"5px",
        border:"transparent 1px black",
        boxShadow:"0 0 7px rgba(35, 35, 35, 0.71)",
        borderRadius:"5px",
        color:"rgba(0, 0, 0, 0.88)",
        fontFamily:""
    }
    const formStyling ={
        color:"rgba(0, 0, 0, 0.64)",
    }
    const added_to_cart={
        textAlign:"right",
        fontSize:"1em",
        color:"rgba(0, 0, 0, 0.72)",
        margin:0,
    }
    const mac={
        
        zIndex:"2",
        textAlign:"center",
        display:`${zoom}`, // needs to be fixed
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:"0",
        left:"0",
        width:"100%",
        height:"100%",
        backdropFilter:"blur(2px)",
        backgroundColor:"rgba(0, 0, 0, 0.59)"
    }
    const mac2={
        zIndex:"3",
        display:`${view3}`, // needs to be fixed
        position:"absolute",
        top:"40%",
        left:"5%",
        width:"90%",
        height:"5%"
    }
    const mac3={
        zIndex:"3",
        display:`${view3}`, // needs to be fixed
        position:"absolute",
        top:"0%",
        right:"0",
        width:"20%",
        height:"5%"
    }
    const mac4={
        paddingTop:"0px",
        backdropFilter:"blur(2px)",
        color:"rgba(255, 0, 0, 0.76)",
        zIndex:"3",
        display:`${view4}`, // needs to be fixed
        position:"absolute",
        top:"8%",
        right:"5%",
        borderRadius:"10px",
        fontSize:"1em",
        
    }
   
    ;
    let quantity=0;

    if(props.show=="Yes"){
       
        //html Core
    return(
        
        <>
           
        <div id="backgroundwayy" onClick={()=> handle5()} >
           <div style={divStyle}><h6 style={styleH6_2} id="Cartbutton" onClick={()=> handleAdd2Cart()}>{cart}</h6>
           </div>
            <div style={background2} id="div1">
            <img className="imageStyle" src={imagePic}  alt="Item" style={imgCss} onClick={()=> handleImg()}/>
            <h2>{props.name}</h2>
            <h3 style={descriptionBoxStyle} >{props.description}</h3>
            <h4 style={styleH4}>Sizes: </h4>
            <form style={formStyling}>
            <input onClick={handleSizeS} type="radio"  id="Small" name="sizes"/>
            <label htmlFor="Small"><strong>S </strong>  </label>
            <input  onClick={handleSizeM} type="radio"   id="Medium" name="sizes"/>
            <label htmlFor="Medium"><strong>M </strong>   </label>
            <input onClick={handleSizeL} type="radio"  id="Large" name="sizes"/>
            <label htmlFor="Large"><strong>L </strong>  </label>
            </form>
            
            <div id="quickCssJadeCard">
                <span><h5 style={styleH6} id="Colorbutton" onClick={()=> handle4()}>{`Color: ${view}`}</h5></span>
                <div style={dropDownStyles} id="dropdown">
                    
                                    <h6><input  type="radio" id="black" name={props.name} defaultChecked onClick={()=> handle1()} required/><label htmlFor="black">Black</label></h6>
                                    <h6><input  type="radio" id="white" name={props.name}  onClick={()=> handle2()} required/><label htmlFor="white">White</label></h6>
                                    <h6><input  type="radio" id="grey" name={props.name}  onClick={()=> handle3()} required/><label htmlFor="grey">Grey</label></h6>
                                    <br/>
                                    </div>
                                    
                                    
            </div>
            
            <h6 style={added_to_cart}>Units in cart:{numberOfOrders}</h6>
            </div>

        <div style={mac} >
        <img className="imageStyle2" src={imagePic} onClick={handleImg}/>
        </div>

        <div id="EXIT" style={mac3} >
        <p onClick={()=> handleImg()}>X</p>
        </div>

        <div id="zoomnyana" style={mac2} >
        <a href=""><p>VIEW IN DETAIL</p></a>
        </div>
        <div style={mac4} >
       <h5>{descrip}</h5>
        </div>
        
            </div>
        </>
    );
    }
    
}

//export
export default JadeCard;