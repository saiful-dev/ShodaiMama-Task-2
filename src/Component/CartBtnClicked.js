import React, { useEffect, useState } from "react";

export default function CartBtnClicked(props){

    
    //const [productCount,setproductCount]=useState(1);
    var productCount=0;
    //console.log('props.quantity');
    //console.log(props.quantity);
    const [productState,setproductState]=useState(false);



    const currentItem=JSON.parse(localStorage.getItem('product'))

    const quantity=currentItem.find((curitem)=>(
        (curitem.id=== props.dataid) ?productCount=curitem.quantity:null
            
            
    ))

{/*  browser refresh */}
    const cartdatas=JSON.parse(localStorage.getItem('product'))
    cartdatas.map((select)=>{
        if(select.id===props.dataid){
                console.log("this item is selected")
                console.log(select)
        }
    })

    
   // setproductCount(quantity.quantity);
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
        
    var itemfind=[]
       
        //console.log(productCount)
       // console.log('productCount')

        if(productCount === 1) {
            props.itemAdded(false)


            var cartdatas=JSON.parse(localStorage.getItem('product'))
        
        
            itemfind=cartdatas.find(curItem=>  !(curItem.id === props.dataid))
            //      if (curItem.id ===props.dataid){
            //          curItem.quantity =0;
            //          //curItem.price=curItem.price * curItem.quantity;
            //          curItem.totalprice=0;
            //          return curItem
            //      }
     
            //  })
            
            //console.log("working Module")
            //console.log(cartdatas)
            //console.log(props.dataid);
            
             localStorage.setItem('product',JSON.stringify(itemfind?[itemfind]:null))
         //console.log(cartdatas);
            //console.log(itemfind);
        

        }
         


        if(productCount>1){
            productCount -=1;

        
            var cartdatas=JSON.parse(localStorage.getItem('product'))
        
        
            itemfind=cartdatas.find((curItem)=>{

           
                 if (curItem.id ===props.dataid){
                     curItem.quantity -=1;
                     curItem.price=curItem.price * curItem.quantity;
                     curItem.totalprice=curItem.price * curItem.quantity;
                     return curItem
                 }
     
                })
           
            //console.log(cartdatas);
            localStorage.setItem('product',JSON.stringify(cartdatas))
            //console.log(cartdatas);
            //console.log(itemfind);
        
        }

        
        
   
       
        
            
       
}
const QuantityPlus=()=>{
    //var itemfind=0
    productCount=productCount+1;

    const cartdatas=JSON.parse(localStorage.getItem('product'))
    

       cartdatas.find((curItem)=>{
            if (curItem.id ===props.dataid){
                curItem.quantity = productCount;
                curItem.totalprice=curItem.price * curItem.quantity;
                return curItem
            }

        })
    
    

    localStorage.setItem('product',JSON.stringify(cartdatas))
    //setTimeout(() => { console.log("World!"); }, 2000);
    console.log(cartdatas);
    
}
   

return(

<div className="addToBgBtnClick">
    <button className="cartQuantityBtnMinus 
            activeBtnShadow" 
            onClick={()=>{QuantityMinus();props.addBtn(true)}}
        id="quantityDecreamentBtn">
        <svg xmlns="http://www.w3.org/2000/svg" 
            width="7" 
            height="19" 
            viewBox="0 0 7 19">

            <text id="_-" 
                //data="-" 
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
                onClick={()=>{QuantityPlus();props.addBtn(true)}}
            id="quantityIncreamentBtn">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="10" 
            height="19" 
            viewBox="0 0 10 19">

        <text id="_" 
           // dataName="+" 
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