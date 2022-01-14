
import { object } from 'prop-types';
import React, { useState } from 'react'
import Details from './Details'
import CartBtnClicked from './CartBtnClicked';

export default function Productcart(props){

    const [detailsStale,setdetailsState]=useState(false);
    const [modal,setmodal]=useState(false);
    const [itemAdded,setitemAdded]=useState(true)

    const detailsStaleHandler=()=>{
        setdetailsState(true);
        setmodal(true);
    }
    
   
    const addProduct=[]
    //console.log(addProduct)
    const setDataLocal=()=>{
        
    
    var obj={};
     obj={
        id:props.curval.id,
        quantity:1,
        category: props.curval.category,
        image:props.curval.image,
        price: props.curval.price,
        totalprice: 0,
        title:props.curval.title,

    }
    
    //console.log(addProduct);
    const local=JSON.parse(localStorage.getItem('product'));
    if(local){
        addProduct.push(...local);
    }
    addProduct.push(obj);
    
   
    localStorage.setItem('product',JSON.stringify(addProduct))
    //console.log(JSON.parse(localStorage.getItem('product')))

    console.log(addProduct);
    }


    // const totalHandler=()=>{
    //     props.totalPrice(100+30);
    //     props.tatalQnty(100+30);
    // }

    
    

     var selectdata=null;
    
    

     const QuantityPlus=()=>{
        
        var productCount=0
        const cartdatas=JSON.parse(localStorage.getItem('product'))
        
        
           cartdatas.find((curItem)=>{
                if (curItem.id ===props.dataid){
                    curItem.quantity = productCount+1;
                    curItem.totalprice=curItem.price * curItem.quantity;
                    return curItem 
                }
    
            })

        localStorage.setItem('product',JSON.stringify(cartdatas))
      
        
    }
       



    return(

        

                     <div>
                            <div className="productListArea">
                                <div className="productCart ">
                                    <span style={{cursor: 'pointer'}}>
                                        <div className="productContent">
                                            <div className="productOrigin fresh">
                                                <a href="/">{props.curval.cat}</a>
                                            </div>
                                            <div className="productContentInner">
                                            <div className="productImageArea">
                                                <img className="prodcutImg" 
                                                alt="Pineapple Medium" 
                                                src={props.curval.image}  height="80%"/>
                                            </div>
                        
                                            <p className="productName">
                                                {props.curval.title}</p>
                        
                                            <p className="productSubtext">each</p>
                        
                                            <p className="productPriceArea">
                                                <span className="quantitySymbol">৳</span>
                                                <span className="prodcutPrice">{props.curval.price}</span>
                                            </p>

                                            {/*Ratting section*/}
                                            <p className='rattingSection'>
                                                <span>ratting:{' '+props.curval.rating.rate} </span> <br/>
                                                <span>count: {' '+props.curval.rating.count} </span>
                                            </p>
                                            </div>
                                        </div>
                                    </span>

                                   
                                    {/* Details module */}

                                    <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}>
                                        <button 
                                            className="productCardDetailsBtn"
                                            onClick={()=>  setdetailsState(true)}
                                            >Details</button>
                                    </div>
                                    <div>
                                        <span className="productDetailsArea">
                                        <div className="productDeliveryStatus">
                                                <img src={require("../img/fastDelivaryIcon.png")} 
                                                alt="bike picture"/>
                                                <p>Next Morning</p>
                                        </div>
                                        <div className="productDeliveryText">
                                            <img src="data:image/png;base64,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" alt=""/>
                                            <img src="data:image/png;base64,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" alt="" 
                                            style={{margin: "0px 5px"}} />
                                        </div>
                                        </span>
                                    </div>
                                    <div className="bottomAddToCartBtn"> 

                                      {/* selected cart identification */}
                                      {
                                          
                            
                                        (props.cartdata.some(arrval=>arrval===props.dataid) && itemAdded)? 
                                      
                                        <CartBtnClicked dataid={props.dataid}  //selectedItemID={arrval} 
                                                       curval={props.curval}
                                                       quantity={props. quantity}
                                                        addBtn={props.addBtn}
                                                        addProduct={addProduct}
                                                        itemAdded={setitemAdded}
                                                        />:
                                      
                                        (<button 
                                        className="addToBgBtnGeneral"
                                        onClick={()=>{setDataLocal();props.addBtn(!(props.adddata));setitemAdded(true);QuantityPlus()}}
                                        >Add To Cart
                                        </button>)
                                         
                                     }
                                    
                                  
                                   




                                    </div>
                                </div>
                            </div>


        {
            detailsStale && <Details product={props.curval} closeModal={setdetailsState}/>
        }

    </div>

        


                        
    )

}