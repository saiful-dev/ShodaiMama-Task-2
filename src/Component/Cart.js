
import React from "react";
//import './Project/static/css/styleContainer.css';
import AddProducts from "./AddProducts";
//import './MainNormalize.css'
export default  function Cart(props){




const getData=JSON.parse(localStorage.getItem('product'))

var total_Price=0;
var totalQuantity=0

if(getData){
getData.map((curitem)=>{
    total_Price +=curitem.price;
    totalQuantity ++;

})
}


    



return(


      
        <div className="addToCartPage">
            <div className="addToCartPageBody">
                <div className="addToCartOriginFresh">
                    <div className="regularAndOrderPlace">
                        <input type="checkbox" checked=""/>
                    <div>
                        <p className="fresh_text text__white">Fresh</p>
                        </div>
                    </div>
                    <div className="cartPageOriginHeaderRight">
                        <h4 className="text__white">Products ( {totalQuantity} )</h4>
                        <h4 className="text__white">Subtotal : ৳ {total_Price.toFixed()} </h4>
                    </div>
                </div>


                <div className="cart__page__placce__order__area">
                    <div className="cart__page__placce__order__left product-info-text p10">
                        <p> <span>Delivery Time &nbsp;: &nbsp; </span>Everyday Delivery 08:00 AM - 11:00 AM.</p>
                        <p> <span>Delivery Charge &nbsp;: &nbsp; </span>৳ 0</p><span>
                            <p><span>Items &nbsp;: &nbsp; </span>{totalQuantity}</p>
                            <p><span>Total &nbsp;: &nbsp; </span>৳ {total_Price.toFixed()}</p>
                        </span>
                        <div className="codState">Cash &amp; Digital Payment Accepted.</div>
                    </div>
                    <div className=" cart__page__placce__order__right">
                        <div className="products-cart">
                               
                        {/*   */}




        
        

                            
                            
                            {/* cart list from localStorage  */}
                            { 
                                getData? getData.map((curPruduct)=>(
                                    
                                        curPruduct?<AddProducts curPruduct={curPruduct}/>:null
                                    
                                )):null



                                }
                        
                            
                            
                            
                            
                           
                            
                            
                        </div>
                    </div>
                    </div>  
                <div className="addToCartPageHeader">
                    <div className="addToCartHeaderTopCol addToCartHeaderSingleOrigin">

                    <div className="cartPageHeaderProudctCount">
                        <img className="cartPageHeaderProudctCountImg"
                         src={require("../img/cart.png")} width="50px"/>
                        <span className="cartPagecountNumber">4
                        Items</span></div>
                    <div>

                            <p className="cartPageProductPrice"> Total : <span className="cartPageMonySymbol"> ৳ </span> {total_Price.toFixed()}</p>
                        </div>
                        <div className="placeOrderAndCloseBtn">
                            <div className="placeOrderAltogether"><button className="placeOrderAl__btn">Place
                                    Order</button><button className="placeOrderAltogether__btn">Place Order</button></div>
                            <div className=" cartPageHeaderClose">
                                <p className="px2 closeBtn"  onClick={()=>props.CartClose(false)}> ×</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    )
}