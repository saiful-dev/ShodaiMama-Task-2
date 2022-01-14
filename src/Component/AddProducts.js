
import React from "react";
export default function AddProducts(props){

    return(
        <div className=" addToCartCheckBoxAndProductAddToCart productAddToCartArea">

        <div className="singleProductAddToCart px2">
                                  
        <div className="singleProductAddToCartQty">
        <button className="singleProductAddToCartPlus ">+</button><span
                className="singleProductAddToCartQtyNumber">{props.quantity}</span>
        <button className="singleProductAddToCartMinus">-</button></div>
        <div className="singleProductAddToCartImg">
            <img className="singleProductAddToCartImgSize"
                src={props.curPruduct.image}/>
        </div>
        <div className="singleProductAddToCartName">
            <p className="singleProductAddToCartNameText">{props.curPruduct.title}</p>
            <div className="singleProductAddToCartPrice"><span
                    className="singleProductAddToCartPriceSymbole">৳ </span><span
                    className="singleProductAddToCartPriceText"> {props.curPruduct.price}</span><span
                    className="singleProductAddToCartPriceText"> / each</span></div>
        </div>
        <p className="singleProductAddToCartTotalPrice">
        <span className="singleProductAddToCartPriceSymbole">৳ </span>
            <span className="singleProductAddToCartTotalPriceText">{props.totalprice}</span> <br/></p>
        <div className="singleProductAddToCartClose"><span>×</span></div>
        </div>
        
        </div>
    )
}