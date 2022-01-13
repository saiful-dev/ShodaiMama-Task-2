import React from "react";

export default function CartBtnClicked(){


    return(

<div className="addToBgBtnClick">
    <button className="cartQuantityBtnMinus activeBtnShadow" 
        id="quantityDecreamentBtn">
        <svg xmlns="http://www.w3.org/2000/svg" 
            width="7" 
            height="19" 
            viewBox="0 0 7 19">

            <text id="_-" 
                data-name="-" 
                transform="translate(0 15)" 
                fill="#fff" font-size="16" 
                fontFamily="Montserrat-Medium, Montserrat" 
                fontFeight="500">
                <tspan x="0" y="0">-</tspan>
            </text>
        </svg>
    </button>
    <p>
        <button style={{color: "white", fontWeight: "500"}}>
        <span id="quantityNumber"> 2 </span> In Cart</button>
    </p>
        <button className="cartQuantityBtnPlus activeBtnShadow" 
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