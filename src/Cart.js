
import React from "react";
//import './Project/static/css/styleContainer.css';

import './MainNormalize.css'
export default  function Cart(){

    

    return(
        

        <div className="mainContentArea">
    <div className="rightSidebar">
        <div className="leftSideBar">
            <div className="leftSideBarInner ">
                <div className="leftSideBarTop ">
                    <ul className="leftSideBarTopNav">
                        <li className="leftSideBarTopNavItem"><a className="leftSideBarTopNavItemLink" href="/"><img
                                    className="categoryImageIcon"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5ODZFMEQzRTE4RTExRUJCMDU0ODc1NENEMkVFNkE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5ODZFMEQ0RTE4RTExRUJCMDU0ODc1NENEMkVFNkE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Nzk4NkUwRDFFMThFMTFFQkIwNTQ4NzU0Q0QyRUU2QTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk4NkUwRDJFMThFMTFFQkIwNTQ4NzU0Q0QyRUU2QTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GW5VvAAAAYFBMVEUxh3COvbDY6ORrqJicxbpQmIW21MxBj3vr8/F8sqQRdFqmy8HP497F3dfh7eoEbVEjfma92NELcFYaeWD1+fjm8O7w9vQAak74+/pdoI7z+Pf8/f3+/v76/Puu0Mf///8Q93MYAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AABm0SURBVHja7N3peqO4EgZgse8G22BMTKz7v8txPOm0nUY2iJJUElU/zvL0OT3dvEF82hl3v1J/X4ReFkRJwpomz/P+p/L82DQsiYYh88JiX3aXDTwPzpz9m427feEFETv2i+rIoiALr+WJ0K2qXXzDbup+XeVsyML9biR05NXF3sAOPWTVbPDiHaHjfL2vWZL3qurAAq9qCR1PtfssOvYaigVheSF088n8GrC611iHJCg6QjdWpxt4b6RYcE0JXXtdqswQuAPwVqKnxZD3GIpl1YXQNZTvJT2iyofiROhKqzTdqE925RNvR+jKxJseazHPJ/RNif9x3xE65HCbx3obKvFSQofpjodJb03V0fVM6GtrPxx6uyoPSkJf06yj/5ALPu/hidClaoyj3to6YH7d0aKnXtPbXUlxJvRFHbSh7u2vY5YS+sy6XJPekToMPqHP6aFZ364/V1QR+pvqsrx3rdiV0F+UH9S9i9UUF0IXpbfe2WrCC6FPkEe904WInRG5xkZ+JPSHb/kGyO+RLib0PyPsQ91vpZKK0L/GW4PtkN/77bvNo7fZod9Y1UG6bfTi2G+wcu+yXfSK9Rsttt8o+i7qN1wmP+3G0M/b+5j/moDzzltDj5t+89XsN4W+7Zb9bw3pZtAv3oG8v3N8sRH0khH2wxDdbgPo7cYG4GYEOufRKwpw/77svtPobUDECF52Rq85ipe9cxT9nBEujhivD92n0P66z35yD92j0P5ugK5yDD1NCPVt1dnFJfT9kUgR5Tkd6BdKcLPzXOwIekdN+4LS0cSrR9/nJImsiVeO7hHjwjpWlqOfaOJcIsV7VqP7NO4qN1DT2ose02IJyWI7W9Hpc470w64OvR2Ibs2HPbQQvaP5lbU9duvQKcKtr6i1C51GZEDiXGcTekjzqDBxrrQHnSZYoOoQW4J+odWPgCG+sAL9TCOvoOVZgH6iiVTgCtCjp9Q9hx+JP+NG76h7rqCSFjP6jszVqJ/wovu0/lHVMM0JK3pJ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" />
                                <span className="marginLeft">Home</span></a></li>
                        <li className="leftSideBarTopNavItem"><a className="leftSideBarTopNavItemLink"
                                href="/type/Fresh?smref=DesktopLeftSidebarWidget"><img className="categoryImageIcon"
                                    src="/static/media/fresh.c490817a.png"/><span className="marginLeft">Fresh</span></a>
                        </li>
                        <li className="leftSideBarTopNavItem"><a className="leftSideBarTopNavItemLink"
                                href="/type/Regular?smref=DesktopLeftSidebarWidget"><img className="categoryImageIcon"
                                    src="/static/media/regular.13e10ad7.png"/><span className="marginLeft">Regular</span></a>
                        </li>
                        <li className="leftSideBarTopNavItem"><a className="leftSideBarTopNavItemLink"
                                href="/type/Preorder?smref=DesktopLeftSidebarWidget"><img className="categoryImageIcon"
                                    src="/static/media/preorders2.866c3fa6.png"/><span
                                    className="marginLeft">Preorder</span></a></li>
                    </ul>
                </div>
                <div className="leftSideBarTop exploreMargin">
                    <ul className="leftSideBarTopNav explore__bg">
                        <li className="leftSideBarTopNavItem "><a className="leftSideBarTopNavItemLink" href=""><span
                                    className="explore__text"> Explore </span><span className="shodai__text"> Shodai
                                </span><span className="mama__text"> Mama </span></a></li>
                    </ul>
                </div>
                <div className="leftSidebarBottom   px2 ">
                    <ul className="leftSideBarNav">
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/products/hygiene?smref=DesktopLeftSidebarWidget"> <img className="categoryImageIcon"
                                    src="/static/media/hygiene.3e40b6db.png" alt="hygiene"/> <span>Hygiene</span></a>
                        </li>
                        <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                href="/category/Breakfast-Snacks?smref=DesktopLeftSidebarWidget"> <img
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



        
        <div className="addToCartPage">
            <div className="addToCartPageBody">
                <div className="addToCartOriginFresh">
                    <div className="regularAndOrderPlace"><input type="checkbox" checked=""/>
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
                                    <div className="singleProductAddToCartQty"><button
                                            className="singleProductAddToCartPlus ">+</button><span
                                            className="singleProductAddToCartQtyNumber">1</span><button
                                            className="singleProductAddToCartMinus">-</button></div>
                                    <div className="singleProductAddToCartImg"><img className="singleProductAddToCartImgSize"
                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624442628390_00010391_czmIWFyz_SASSMIS.webp"/>
                                    </div>
                                    <div className="singleProductAddToCartName">
                                        <p className="singleProductAddToCartNameText">Pineapple Medium</p>
                                        <div className="singleProductAddToCartPrice"><span
                                                className="singleProductAddToCartPriceSymbole">৳ </span><span
                                                className="singleProductAddToCartPriceText"> 45</span><span
                                                className="singleProductAddToCartPriceText"> / each</span></div>
                                    </div>
                                    <p className="singleProductAddToCartTotalPrice"><span
                                            className="singleProductAddToCartPriceSymbole">৳ </span><span
                                            className="singleProductAddToCartTotalPriceText">45</span> <br/></p>
                                    <div className="singleProductAddToCartClose"><span>×</span></div>
                                </div>
                            </div>
                            <div className=" addToCartCheckBoxAndProductAddToCart productAddToCartArea">
                                <div className="singleProductAddToCart px2">
                                    <div className="singleProductAddToCartQty"><button
                                            className="singleProductAddToCartPlus ">+</button><span
                                            className="singleProductAddToCartQtyNumber">1</span><button
                                            className="singleProductAddToCartMinus">-</button></div>
                                    <div className="singleProductAddToCartImg"><img className="singleProductAddToCartImgSize"
                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624519151384_84633001_CNUNfM7J_SASSMIS.webp"/>
                                    </div>
                                    <div className="singleProductAddToCartName">
                                        <p className="singleProductAddToCartNameText">Banana Green</p>
                                        <div className="singleProductAddToCartPrice"><span
                                                className="singleProductAddToCartPriceSymbole">৳ </span><span
                                                className="singleProductAddToCartPriceText"> 28</span><span
                                                className="singleProductAddToCartPriceText"> / 4 pcs</span></div>
                                    </div>
                                    <p className="singleProductAddToCartTotalPrice"><span
                                            className="singleProductAddToCartPriceSymbole">৳ </span><span
                                            className="singleProductAddToCartTotalPriceText">28</span> <br/></p>
                                    <div className="singleProductAddToCartClose"><span>×</span></div>
                                </div>
                            </div>
                            <div className=" addToCartCheckBoxAndProductAddToCart productAddToCartArea">
                                <div className="singleProductAddToCart px2">
                                    <div className="singleProductAddToCartQty"><button
                                            className="singleProductAddToCartPlus ">+</button><span
                                            className="singleProductAddToCartQtyNumber">1</span><button
                                            className="singleProductAddToCartMinus">-</button></div>
                                    <div className="singleProductAddToCartImg"><img className="singleProductAddToCartImgSize"
                                            src="https://bucket.shodaimama.com/files/sm/images/gZgiLo1638097268902L3LK6l.png"/>
                                    </div>
                                    <div className="singleProductAddToCartName">
                                        <p className="singleProductAddToCartNameText">Gourd</p>
                                        <div className="singleProductAddToCartPrice"><span
                                                className="singleProductAddToCartPriceSymbole">৳ </span><span
                                                className="singleProductAddToCartPriceText"> 65</span><span
                                                className="singleProductAddToCartPriceText"> / each</span></div>
                                    </div>
                                    <p className="singleProductAddToCartTotalPrice"><span
                                            className="singleProductAddToCartPriceSymbole">৳ </span><span
                                            className="singleProductAddToCartTotalPriceText">65</span> <br/></p>
                                    <div className="singleProductAddToCartClose"><span>×</span></div>
                                </div>
                            </div>
                            <div className=" addToCartCheckBoxAndProductAddToCart productAddToCartArea">
                                <div className="singleProductAddToCart px2">
                                    <div className="singleProductAddToCartQty"><button
                                            className="singleProductAddToCartPlus ">+</button><span
                                            className="singleProductAddToCartQtyNumber">1</span><button
                                            className="singleProductAddToCartMinus">-</button></div>
                                    <div className="singleProductAddToCartImg"><img className="singleProductAddToCartImgSize"
                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624531929651_40306931_KLtR0Xlm_SASSMIS.webp"/>
                                    </div>
                                    <div className="singleProductAddToCartName">
                                        <p className="singleProductAddToCartNameText">Round Brinjal</p>
                                        <div className="singleProductAddToCartPrice"><span
                                                className="singleProductAddToCartPriceSymbole">৳ </span><span
                                                className="singleProductAddToCartPriceText"> 32</span><span
                                                className="singleProductAddToCartPriceText"> / 500 gm</span></div>
                                    </div>
                                    <p className="singleProductAddToCartTotalPrice"><span
                                            className="singleProductAddToCartPriceSymbole">৳ </span><span
                                            className="singleProductAddToCartTotalPriceText">32</span> <br/></p>
                                    <div className="singleProductAddToCartClose"><span>×</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addToCartPageHeader">
                    <div className="addToCartHeaderTopCol addToCartHeaderSingleOrigin">
                        <div className="cartPageHeaderProudctCount"><img className="cartPageHeaderProudctCountImg"
                                src="/static/media/cart.95d8dc6c.svg" width="50px"/><span className="cartPagecountNumber">4
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