
import React from "react";
//import './Project/static/css/styleContainer.css';

//import './MainNormalize.css'
export default  function Cart(){

    

return(
<div className="mainContentArea">
    <div className="rightSidebar">
        <div className="leftSideBar">
            <div className="leftSideBarInner ">
                <div className="leftSideBarTop ">
                    <ul className="leftSideBarTopNav">
                        <li className="leftSideBarTopNavItem">
                            <a className="leftSideBarTopNavItemLink" 
                                href="/">
                                    <img
                                    className="categoryImageIcon"
                                    src={require("../img/homeIcon.png")} />
                                <span className="marginLeft">Home</span>
                            </a>
                        </li>
                        <li className="leftSideBarTopNavItem">
                            <a className="leftSideBarTopNavItemLink"
                                href="/type/Fresh?smref=DesktopLeftSidebarWidget">
                                <img className="categoryImageIcon"
                                    src={require('../img/freshIcon.png')} />
                                    <span className="marginLeft">Fresh</span>
                            </a>
                        </li>
                        <li className="leftSideBarTopNavItem">
                            <a className="leftSideBarTopNavItemLink"
                                href="/type/Regular?smref=DesktopLeftSidebarWidget">
                                <img className="categoryImageIcon"
                                    src={require('../img/regularIcon.png')}/>
                                    <span className="marginLeft">Regular</span></a>
                        </li>
                        <li className="leftSideBarTopNavItem">
                            <a className="leftSideBarTopNavItemLink"
                                href="/type/Preorder?smref=DesktopLeftSidebarWidget">
                                <img className="categoryImageIcon"
                                    src={require('../img/PreorderIcon.png')}/>
                                    <span
                                        className="marginLeft">Preorder</span></a></li>
                    </ul>
                </div>


                <div className="leftSideBarTop exploreMargin">
                    <ul className="leftSideBarTopNav explore__bg">
                        <li className="leftSideBarTopNavItem ">
                            <a className="leftSideBarTopNavItemLink" href="">
                            <span className="explore__text"> Explore </span>
                            <span className="shodai__text"> Shodai</span>
                            <span className="mama__text"> Mama </span></a></li>
                    </ul>
                </div>

                <div className="leftSidebarBottom   px2 ">
                    <ul className="leftSideBarNav">
                        <li className="leftSideBarNavItem">
                            <a className="categoryMainarea"
                                href="/products/hygiene?smref=DesktopLeftSidebarWidget"> 
                                <img className="categoryImageIcon"
                                    src={require("../img/hygieneIcon.png")} 
                                    alt="hygiene"/> 
                                    <span>Hygiene</span></a>
                        </li>
                        <li className="leftSideBarNavItem">
                            <a className="categoryMainarea"
                                href="/category/Breakfast-Snacks?smref=DesktopLeftSidebarWidget"> 
                                <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898877195_13897913_pzqI9rNe_SASSMIS.png"/>
                                <span>Breakfast &amp; Snacks</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/cooking?smref=DesktopLeftSidebarWidget"> <img className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899365843_78289539_xABdWVP9_SASSMIS.png"/>
                                <span>Cooking</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/meat-fish?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898961192_90522818_KghL8x1J_SASSMIS.png"/>
                                <span>Meat &amp; Fish</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/fruits-vegetables?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899307994_65454848_CIwz48po_SASSMIS.png"/>
                                <span>Fruits &amp; Vegetables</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/dairy?smref=DesktopLeftSidebarWidget"> <img className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899351387_03874966_LxV51z7O_SASSMIS.png"/>
                                <span>Dairy</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/frozen-canned?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899323584_96693783_5krgoIJF_SASSMIS.png"/>
                                <span>Frozen &amp; Canned</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/beverages?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899334805_88037401_ydaYkVYO_SASSMIS.png"/>
                                <span>Beverages</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/kids-care?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899294952_67754284_UJNyG34G_SASSMIS.png"/>
                                <span>Kids care</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/personal-care?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899416181_88846315_slIcWkwD_SASSMIS.png"/>
                                <span>Personal Care</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/home-kitchen?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978022808_01668484_NxondpNz_SASSMIS.png"/>
                                <span>Home &amp; Kitchen</span></a></li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/stationary?smref=DesktopLeftSidebarWidget"> <img
                                    className="categoryImageIcon"
                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978447975_34684347_cjsf6yrN_SASSMIS.png"/>
                                <span>Stationary</span></a></li>
                    </ul>
                </div>
            </div>
        </div>


        {/* MainCard Menu */}
        
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
                        <h4 className="text__white">Products ( 4 )</h4>
                        <h4 className="text__white">Subtotal : ৳ 170 </h4>
                    </div>
                </div>


                <div className="cart__page__placce__order__area">
                    <div className="cart__page__placce__order__left product-info-text p10">
                        <p> <span>Delivery Time &nbsp;: &nbsp; </span>Everyday Delivery 08:00 AM - 11:00 AM.</p>
                        <p> <span>Delivery Charge &nbsp;: &nbsp; </span>৳ 0</p><span>
                            <p><span>Items &nbsp;: &nbsp; </span>4</p>
                            <p><span>Total &nbsp;: &nbsp; </span>৳ 170</p>
                        </span>
                        <div className="codState">Cash &amp; Digital Payment Accepted.</div>
                    </div>
                    <div className=" cart__page__placce__order__right">
                        <div className="products-cart">
                            <div className=" addToCartCheckBoxAndProductAddToCart productAddToCartArea">
                                <div className="singleProductAddToCart px2">
                                
                                    <div className="singleProductAddToCartQty">
                                    <button className="singleProductAddToCartPlus ">+</button><span
                                            className="singleProductAddToCartQtyNumber">1</span>
                                    <button className="singleProductAddToCartMinus">-</button></div>
                                    <div className="singleProductAddToCartImg">
                                        <img className="singleProductAddToCartImgSize"
                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624442628390_00010391_czmIWFyz_SASSMIS.webp"/>
                                    </div>
                                    <div className="singleProductAddToCartName">
                                        <p className="singleProductAddToCartNameText">Pineapple Medium</p>
                                        <div className="singleProductAddToCartPrice"><span
                                                className="singleProductAddToCartPriceSymbole">৳ </span><span
                                                className="singleProductAddToCartPriceText"> 45</span><span
                                                className="singleProductAddToCartPriceText"> / each</span></div>
                                    </div>
                                    <p className="singleProductAddToCartTotalPrice">
                                    <span className="singleProductAddToCartPriceSymbole">৳ </span>
                                        <span className="singleProductAddToCartTotalPriceText">45</span> <br/></p>
                                    <div className="singleProductAddToCartClose"><span>×</span></div>
                                </div>
                            </div>
                           
                            
                            
                        </div>
                    </div>
                </div>
                <div className="addToCartPageHeader">
                    <div className="addToCartHeaderTopCol addToCartHeaderSingleOrigin">

                    <div className="cartPageHeaderProudctCount">
                        <img className="cartPageHeaderProudctCountImg"
                         src="/static/media/cart.95d8dc6c.svg" width="50px"/>
                        <span className="cartPagecountNumber">4
                        Items</span></div>
                    <div>

                            <p className="cartPageProductPrice"> Total : <span className="cartPageMonySymbol"> ৳ </span> 170</p>
                        </div>
                        <div className="placeOrderAndCloseBtn">
                            <div className="placeOrderAltogether"><button className="placeOrderAl__btn">Place
                                    Order</button><button className="placeOrderAltogether__btn">Place Order</button></div>
                            <div className=" cartPageHeaderClose">
                                <p className="px2 closeBtn"> ×</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hideChangeAddress"></div>
        <div className="notification-container notification-container-empty">
            <div></div>
        </div>
    </div>
</div>
        
        
    )
}