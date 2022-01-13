import React, { useEffect, useState } from "react";

export default function CartBtnClicked(props){

    
    const [productCount,setproductCount]=useState(1);

    const [productState,setproductState]=useState(false);
    //const [localcart, setlocalcart]=useState([])
    //var productCount=1



    // useEffect(()=>{
    //       setproductState(false)
    //      const cartupdates=async () =>{
    //       const cartdatas=JSON.parse(localStorage.getItem('product'))
    //       setlocalcart(cartdatas);
    //      console.log("working here");

    //      //setproductCount(productCount+1)
    //      const quntity=localcart.map((curval)=>{
    //         if(curval.id === props.dataid){
                
    //         }
    //     })
    //  };

        
    //     cartupdates();
    // },[setproductState]);
    

    
    

const QuantityMinus=()=>{
        
        setproductCount(productCount-1)
        
        if(productCount === 1) {
            props.itemAdded(false)
        }
       
        
            
        
   
        //console.log("Working here");
        //console.log(selectItem)
        //console.log(props.addProduct)
            
       
}
const QuantityPlus=()=>{
    setproductCount(productCount+1)
}
   

return(

<div className="addToBgBtnClick">
    <button className="cartQuantityBtnMinus 
            activeBtnShadow" 
            onClick={()=>QuantityMinus()}
        id="quantityDecreamentBtn">
        <svg xmlns="http://www.w3.org/2000/svg" 
            width="7" 
            height="19" 
            viewBox="0 0 7 19">

            <text id="_-" 
                dataName="-" 
                transform="translate(0 15)" 
                fill="#fff" fontSize="16" 
                fontFamily="Montserrat-Medium, Montserrat" 
                fontWeight="500">
                <tspan x="0" y="0">-</tspan>
            </text>
        </svg>
    </button>
    <p>
        <button style={{color: "white", fontWeight: "500"}}>
        <span id="quantityNumber"> {productCount} </span> In Cart</button>
    </p>
        <button className="cartQuantityBtnPlus 
                activeBtnShadow" 
                onClick={()=>{QuantityPlus()}}
            id="quantityIncreamentBtn">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="10" 
            height="19" 
            viewBox="0 0 10 19">

        <text id="_" 
            dataName="+" 
            transform="translate(0 15)" 
            fill="#fff" 
            fontSize="16" 
            fontFamily="Montserrat-Medium, Montserrat" 
            fontWeight="500">
            <tspan x="0" y="0">+</tspan>
            </text>
            </svg>
            </button>
        </div>


    )
}