import "./styleSheet4JadeCard.css";
import React, {useState} from "react";
function JadeCard(props){
    //javaScript for JadeCard

    const background2={
        textAlign:"center",
    }
    
    const styleH4 ={
        margin: "0",
        color:"rgba(0, 0, 0, 0.6)",
    }
 
    let savedState = "none";
    //
    const [view, setView] = useState('Black');
    const [cart, setCart] = useState('Add To Cart');
    const [view2, setView2] = useState(`none`);
    const [clickstate, setclickstate] = useState(1);
    const [clickstateiMG, setclickstateiMG] = useState(1);
    const [imageView, setImageView]= useState("10em");
    const [imagePic, setImagePic]= useState(props.picture3);
    const [numberOfOrders, setNumberOfOrders]= useState(0);
    const [initialSize, setInitialSize]= useState();
    const ItemType = props.type;
    const [orderArray, setorderArray]= useState([]);

        
        const handle1 = function(){ setView("Black");setView2("none"); setclickstate(1); setImagePic(props.picture3);}
        const handle2 = function(){ setView("White");setView2("none");setclickstate(1); setImagePic(props.picture1);}
        const handle3 = function(){ setView("Grey");setView2("none");setclickstate(1); setImagePic(props.picture2);}
        const handle4 = function(){ if(clickstate==1){setView2("block"); setclickstate(2)}
                                    else{
                                        setView2("none"); setclickstate(1)
                                    }
         }
        const handle5 = function(){ if(clickstate==2){setView2("none");setclickstate(1)}}
        //image state control
        const handleImg = function(){ if(clickstateiMG==1){
                setImageView("13em"); setclickstateiMG(2);
        }
        else{
            setImageView("10em"); setclickstateiMG(1);
        }
            
        }
        const handleSizeS = function(){
            setInitialSize(`S`);
        }
        const handleSizeM = function(){
            setInitialSize(`M`);
        }
        const handleSizeL = function(){
            setInitialSize(`L`);
        }

        const [Orderstring,setOrderstring] =useState("");
        
        const handleAdd2Cart = function(){
            
            if(initialSize== undefined){
                window.alert(`Please select a size`)
            }

            
            else{
                let format = `Type: ${ItemType} Item Name: ${props.name} Color: ${view} Size: ${initialSize} Price: ${props.description}`;
                setNumberOfOrders(numberOfOrders+1);
                orderArray.push(format);
                for(let i=0; i<orderArray.length; i++){
                    console.log(orderArray[i]);
                    setOrderstring("\n"+Orderstring+""+(i+1)+"-"+orderArray[i]+" "+"\n")     
                }
            }
        }

     const styleH6 ={
        padding:"6px",
        margin: "2px",
        textAlign:"left",
        color:"rgba(60, 8, 60, 0.76)",
        boxShadow:"0 0 5px rgba(0, 0, 0, 0.69)",
        display:"inline-block",
        borderRadius:"10px",

    }
       const styleH6_2 ={
        padding:"6px",
        margin: "2px",
        textAlign:"right",
        color:"rgba(209, 203, 209, 0.76)",
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
        color:"rgba(15, 15, 15, 0.57)",
        fontFamily:""
    }
    const formStyling ={
        color:"rgba(7, 7, 7, 0.6)",
    }
    const added_to_cart={
        textAlign:"right",
        fontSize:"1em",
        color:"rgba(19, 19, 19, 0.27)",
        margin:0,
    }
    
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
            <input onClick={handleSizeM} type="radio"   id="Medium" name="sizes"/>
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
           
        </div>
        </>
    );
    }
    
}

//export
export default JadeCard;