
import React, { useEffect, useState } from "react";


export default function Details(props){


return(

<div class="popupWrapper" >
    <div class="productDetailsModal">
        <div class="productDetailsModalBody">

            <div class="productDetailsClosePopupModal"
                  onClick={()=> props.closeModal(false)}
                    >×</div>
                <div class="productDetailModalBody"><div>
                    <div class="productDetailsContainer">
                        <div class="productDetailsWrapper p2 ">
                            <div class="productDetailsLeftModal">
                                <div class="productDetailsLeftInner">
                                    <div class="singleProductImage">
                                        <div class="detailsPageBadge fresh">{props.product.category}</div>
                                    <div class="singleProductImageInner">
                                        <img class="singleProductImageSize 
                                        fade" id="prodcutCarousel" 
                                        src={props.product.image} alt="Product Image"/>
                                    </div>
                                </div>
                                <div class="singleProductDetails">
                                    <div class="topDetails">
                                        <div class="productitle">
                                            <p class="productTitleText">{props.product.title}</p>
                                        </div>

                                    <div class="brandName">
                                            <p class="brandNameText">each</p>
                                    </div>
                                </div>
                                <div class="singleProductPrice">
                                    <p class="singleProdcutPriceText">৳ {props.product.price}</p>
                                </div>
                                <div class="productQunatityAea">
                                <div class="productQunatityAeaInner">
                                    <div class="addToBgBtnClick">
                                        <button class="cartQuantityBtnMinus" id="quantityDecreamentBtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            width="7" height="19" 
                                            viewBox="0 0 7 19">
                                            <text id="_-" data-name="-" transform="translate(0 15)" 
                                                fill="#fff" font-size="16" 
                                                font-family="Montserrat-Medium, Montserrat" 
                                                font-weight="500">
                                                <tspan x="0" y="0">-</tspan>
                                            </text>
                                        </svg>
                                        </button>
                                        
                                    <p>
                                        <button style={{color: "white; font-weight: 500"}}>
                                            <span id="quantityNumber"> 1 </span> In Cart</button>
                                    </p>
                                    
                                    <button class="cartQuantityBtnPlus" 
                                        id="quantityIncreamentBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="10" 
                                        height="19" 
                                        viewBox="0 0 10 19">

                                    <text id="_" data-name="+" transform="translate(0 15)" 
                                        fill="#fff" 
                                        font-size="16" 
                                        font-family="Montserrat-Medium, Montserrat" 
                                        font-weight="500">
                                    
                                        <tspan x="0" y="0">+</tspan>
                                    
                                    </text>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="paymentInfoProductDetails">
                                <p>Cash &amp; Digital Payment Accepted.</p>
                            </div>
                                <hr style={{marginTop: "30px"}}/>
                                <div class="productDetailsPhone">
                                    <a href="tel:+8801894874999"><p>Help : +8801894874999</p>
                                    </a>
                                </div>
                            </div>
                            </div>
                                <div class="productDetailsMiddle">
                                    <h3 class="sectionHeading">Details</h3>
                                    <div class="productDesctionArea">
                                    <div>Pineapple is a large tropical fruit with a spiky, tough skin and sweet insides. Pineapples are naturally high in fiber, an important component of a healthy diet that can help improve digestion. Pineapples also contain a good array of vitamins and minerals including calcium, manganese, plus vitamins A and C, as well as folic acid. One of the key phytonutrients found in pineapple is bromelain that has long been recognized for its anti-inflammatory and anti-microbial effects. Once you've cut it, you can cover pineapple and leave it out on the counter. This makes it softer and juicier but won't change its taste. Pineapple goes bad quickly, so make sure you eat it within 2-3 days.</div></div></div><div class="productDetailsFoooter"><div class="productDetailsFooterTop"><div class="productDetailsFooterTopLeft"><p class="productDetailsFootertopText"></p></div><div class="productDetailsFooterTopRight">


                                    <p class="productDetailsFootertopText"></p></div>
                                    </div><div class="productDetailsFoooterBody">
                                    
                                    <div class="productDetailsFoooterBodyLeft"></div>
                                    <div class="productDetailsFoooterBodyRight"></div>
                                    </div>
                                    </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
                </div>
                    <div class="rightSideProductDetailsModal">
                    </div>

                               
        </div>

                             
    )
}

