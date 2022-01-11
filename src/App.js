
import axios from "axios";
import React, { useEffect, useState } from 'react';
import './App.css';
//import './Project/static/css/styleContainer.css'
import './MainNormalize.css'

import Cart from "./Cart";


function App() {

//   const [data, setdata]=useState(null);
const [stateClick,setstateClick]=useState(false);

//   useEffect(()=>{
//     axios.get('https://fakestoreapi.com/products').then((response) => {
//       setdata(response.data);
//     });
//   }, []);
  //console.log(data);

//   const buttonHandle=()=>{
//       data.map((curval,index)=>{
//       console.log(curval)
//     })
//   };

  const handleState=()=>{
        setstateClick(true)
  }


return (
<div id='rooot'>
   <div>
        <header className="headerArea pl2 clearFix">
            <div className="hideMobileMenu mobile__menu">
                <div className="mobile__menu__left">
                    <div className="mobile__menu__top__content checkout_header_text">
                        <div className="show__location__to__mobile mobile__profile__relative">
                                
                            <svg stroke="currentColor" 
                                  fill="currentColor" 
                                  strokeWidth="0" 
                                  viewBox="0 0 512 512"
                                  className="headerLocationIcon" 
                                  height="1em" 
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z">
                                    </path>
                              </svg>
                              <a className="location__and__signin__text" href="/signin">Sign In</a>
                                
                            </div>
                            <div className="show__location__to__mobile">
                                <svg stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    viewBox="0 0 384 512"
                                    className="headerLocationIcon" 
                                    height="1em" 
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                    </path>
                                </svg>
                                <p className="location__and__signin__text">Select Delivery Location</p>
                            </div>
                        </div>
                        <ul>
                            <li className="leftSideBarNavItem">
                                <a className="categoryMainarea" 
                                    href="/products/hygiene?smref=MobileLeftSidebarWidget">
                                    <img className="categoryImageIcon" 
                                    src="static/media/hygiene.3e40b6db.png"/>
                                    <span>Hygiene</span>
                                </a>
                              </li>

                            <li className="leftSideBarNavItem">
                                <a className="categoryMainarea"
                                    href="/category/Breakfast-Snacks?smref=MobileLeftSidebarWidget">
                                    <img className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898877195_13897913_pzqI9rNe_SASSMIS.png"/>
                                    <span>Breakfast &amp; Snacks</span>
                                  </a>
                            </li>
                            <li className="leftSideBarNavItem">
                                <a className="categoryMainarea" href="/category/cooking?smref=MobileLeftSidebarWidget">
                                <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899365843_78289539_xABdWVP9_SASSMIS.png"/><span>Cooking</span></a>
                            </li>
                            <li className="leftSideBarNavItem">
                            <a className="categoryMainarea"
                                    href="/category/meat-fish?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898961192_90522818_KghL8x1J_SASSMIS.png"/><span>Meat
                                        &amp; Fish</span>
                                        
                                    </a></li>
                            <li className="leftSideBarNavItem">
                                <a className="categoryMainarea"
                                    href="/category/fruits-vegetables?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899307994_65454848_CIwz48po_SASSMIS.png" /><span>Fruits
                                        &amp; Vegetables</span>
                                  </a></li>
                            <li className="leftSideBarNavItem">
                            <a className="categoryMainarea"
                                    href="/category/dairy?smref=MobileLeftSidebarWidget">
                                    <img className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899351387_03874966_LxV51z7O_SASSMIS.png" /><span>Dairy</span></a>
                            </li>
                            <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                    href="/category/frozen-canned?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899323584_96693783_5krgoIJF_SASSMIS.png" /><span>Frozen
                                        &amp; Canned</span></a></li>
                            <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                    href="/category/beverages?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899334805_88037401_ydaYkVYO_SASSMIS.png" /><span>Beverages</span></a>
                            </li>
                            <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                    href="/category/kids-care?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899294952_67754284_UJNyG34G_SASSMIS.png"/><span>Kids
                                        care</span></a></li>
                            <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                    href="/category/personal-care?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899416181_88846315_slIcWkwD_SASSMIS.png"/><span>Personal
                                        Care</span></a></li>
                            <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                    href="/category/home-kitchen?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978022808_01668484_NxondpNz_SASSMIS.png"/><span>Home
                                        &amp; Kitchen</span></a></li>
                            <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                    href="/category/stationary?smref=MobileLeftSidebarWidget">
                                    <img
                                        className="categoryImageIcon"
                                        src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978447975_34684347_cjsf6yrN_SASSMIS.png"/>
                                        <span>Stationary</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile__menu__right"></div>
                </div>





            
                 

               



                <div className="headerInner">
                    <div className="headerLeftCol">
                        <ul id="toggle__icon__area" className="toggle__icon__area">
                            <li className="toggle__icon"></li>
                            <li className="toggle__icon"></li>
                            <li className="toggle__icon"></li>
                        </ul>
                        <div className="headerLogo"><a href="/">
                        <img src={require("./img/logo.png")}/></a></div>
                    </div>
                    <div className="headerMiddleCol">
                        <div className="searchIconForMobile"><svg className="searcIconIcon" fill="#2ecc71"
                                xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                <path id="fi-rr-search"
                                    d="M14.785,13.9l-3.726-3.726a6.252,6.252,0,1,0-.883.883L13.9,14.785a.624.624,0,1,0,.883-.883ZM6.23,11.223A4.993,4.993,0,1,1,11.223,6.23,4.993,4.993,0,0,1,6.23,11.223Z"
                                    transform="translate(0.032 0.032)" fill="#3e5570"></path>
                            </svg></div>
                    </div>
                    <div className="headerRightCol">
                        <div><label className="searchArea">
                        <img
                              src="data:image/png;base64,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"
                                    width="30px" height="30px" alt="" /></label></div>
                        <div className="headerCityCol hover1"><svg stroke="currentColor" fill="currentColor"
                               strokeWidth ="0" viewBox="0 0 384 512" className="headerLocationIcon" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                </path>
                            </svg><span className="cityText">Select Delivery Location</span></div><span>
                            <div className="headerLanguageSettingsCol profile__popup__relatvie hideProfilePopup"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                    className="headerLocationIcon" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">

                                    <path
                                        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z">
                                    </path>
                                </svg><a className="signInTextForHeader " href="/signin">Sign In</a></div>
                        </span><a href="/cart?smref=HeaderWidget">
                            <div className="header__cart__icon__col">
                                <div className="cartLogo">
                                <img src="img/cardImg.svg" /></div> 
                            </div>
                            
                        </a><a > {/* href="/cart?smref=HeaderWidget"*/}
                            <div 
                                    className="headerSignInCol hover1"
                                   
                                    onClick={()=>handleState()}
                                    
                                    >

                                <div className="header__right__cart__info">
                                    <div className="togg__arrow">
                                    <img src={require("./img/leftArrowImg.svg")} width="100%"/></div>
                                    <p className="right__cart__info__style border__bottom__under__list">
                                     <img className="artboardsize" src={require('./img/artboard.svg')} /> 0 </p>
                                    <p className="right__cart__info__style"><span className="right__cart__info__icon"> ৳ </span>
                                        0</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div> 
            </header>

            {/*
            <div className="headerInner">
                <div className="headerLeftCol">
                    <ul id="toggle__icon__area" className="toggle__icon__area">
                        <li className="toggle__icon"></li>
                        <li className="toggle__icon"></li>
                        <li className="toggle__icon"></li>
                    </ul>
                    <div className="headerLogo"><a href="/">
                    <img src={require("./img/logo.png")} /></a></div>
                </div>
                <div className="headerMiddleCol">
                    <div className="searchIconForMobile"><svg className="searcIconIcon" fill="#2ecc71"
                            xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <path id="fi-rr-search"
                                d="M14.785,13.9l-3.726-3.726a6.252,6.252,0,1,0-.883.883L13.9,14.785a.624.624,0,1,0,.883-.883ZM6.23,11.223A4.993,4.993,0,1,1,11.223,6.23,4.993,4.993,0,0,1,6.23,11.223Z"
                                transform="translate(0.032 0.032)" fill="#3e5570"></path>
                        </svg></div>
                </div>
                <div className="headerRightCol">
                    <div><label className="searchArea">
                    <img
                                src="data:image/png;base64,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"
                                width="30px" height="30px" alt=""/></label></div>
                    <div className="headerCityCol hover1"><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                            viewBox="0 0 384 512" className="headerLocationIcon" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                            </path>
                        </svg><span className="cityText">Select Delivery Location</span></div><span>
                        <div className="headerLanguageSettingsCol profile__popup__relatvie hideProfilePopup"><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                className="headerLocationIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z">
                                </path>
                            </svg><a className="signInTextForHeader " href="/signin">Sign In</a></div>
                    </span><a href="/cart?smref=HeaderWidget">
                        <div className="header__cart__icon__col">
                            <div className="cartLogo">
                            <img src="/static/media/cart.95d8dc6c.svg"/></div>
                        </div>
                    </a><a href="/cart?smref=HeaderWidget">
                        <div className="headerSignInCol hover1">
                            <div className="header__right__cart__info">
                            
                               <div className="togg__arrow">
                                <img src="img/leftArrowImg.svg" width="100%"/>   
                            </div>
                           
                            <p className="right__cart__info__style border__bottom__under__list"> 
                            <img className="artboardsize"
                                    src={require("./img/artboard.svg")}/> 0 </p>
                            <p className="right__cart__info__style"><span className="right__cart__info__icon"> ৳ </span> 0
                            </p>
                        </div>
                </div>
                </a>
            </div>
        </div> 

            
            */}
            

             


    <div className="mainContentArea">
        <div className="rightSidebar">
                <div className="leftSideBar">
                    <div className="leftSideBarInner ">
                        <div className="leftSideBarTop ">
                            <ul className="leftSideBarTopNav">
                                <li className="leftSideBarTopNavItem">
                                    <a className="leftSideBarTopNavItemLink" href="/">

                                        <img className="categoryImageIcon"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5ODZFMEQzRTE4RTExRUJCMDU0ODc1NENEMkVFNkE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5ODZFMEQ0RTE4RTExRUJCMDU0ODc1NENEMkVFNkE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Nzk4NkUwRDFFMThFMTFFQkIwNTQ4NzU0Q0QyRUU2QTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk4NkUwRDJFMThFMTFFQkIwNTQ4NzU0Q0QyRUU2QTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GW5VvAAAAYFBMVEUxh3COvbDY6ORrqJicxbpQmIW21MxBj3vr8/F8sqQRdFqmy8HP497F3dfh7eoEbVEjfma92NELcFYaeWD1+fjm8O7w9vQAak74+/pdoI7z+Pf8/f3+/v76/Puu0Mf///8Q93MYAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AABm0SURBVHja7N3peqO4EgZgse8G22BMTKz7v8txPOm0nUY2iJJUElU/zvL0OT3dvEF82hl3v1J/X4ReFkRJwpomz/P+p/L82DQsiYYh88JiX3aXDTwPzpz9m427feEFETv2i+rIoiALr+WJ0K2qXXzDbup+XeVsyML9biR05NXF3sAOPWTVbPDiHaHjfL2vWZL3qurAAq9qCR1PtfssOvYaigVheSF088n8GrC611iHJCg6QjdWpxt4b6RYcE0JXXtdqswQuAPwVqKnxZD3GIpl1YXQNZTvJT2iyofiROhKqzTdqE925RNvR+jKxJseazHPJ/RNif9x3xE65HCbx3obKvFSQofpjodJb03V0fVM6GtrPxx6uyoPSkJf06yj/5ALPu/hidClaoyj3to6YH7d0aKnXtPbXUlxJvRFHbSh7u2vY5YS+sy6XJPekToMPqHP6aFZ364/V1QR+pvqsrx3rdiV0F+UH9S9i9UUF0IXpbfe2WrCC6FPkEe904WInRG5xkZ+JPSHb/kGyO+RLib0PyPsQ91vpZKK0L/GW4PtkN/77bvNo7fZod9Y1UG6bfTi2G+wcu+yXfSK9Rsttt8o+i7qN1wmP+3G0M/b+5j/moDzzltDj5t+89XsN4W+7Zb9bw3pZtAv3oG8v3N8sRH0khH2wxDdbgPo7cYG4GYEOufRKwpw/77svtPobUDECF52Rq85ipe9cxT9nBEujhivD92n0P66z35yD92j0P5ugK5yDD1NCPVt1dnFJfT9kUgR5Tkd6BdKcLPzXOwIekdN+4LS0cSrR9/nJImsiVeO7hHjwjpWlqOfaOJcIsV7VqP7NO4qN1DT2ose02IJyWI7W9Hpc470w64OvR2Ibs2HPbQQvaP5lbU9duvQKcKtr6i1C51GZEDiXGcTekjzqDBxrrQHnSZYoOoQW4J+odWPgCG+sAL9TCOvoOVZgH6iiVTgCtCjp9Q9hx+JP+NG76h7rqCSFjP6jszVqJ/wovu0/lHVMM0JK3pJ5urUU5zoJQ29Kqymw4hO5orVd/jQydyedx0K3Sdze9QZ5fbtqcOg05iMVRkeBD0lc6vUIdBPNN5u1ygNAHpL82o6R2RbDOgXmj/XWtEnAnRa3q65BvPotB5OewWm0UMy0F+ZWfSYBExUaBK9pG2pRqqOzaF3NPhqqPLSFHpLgzLGatUwPKMOuqVDc60RdOqsmR2kuRhAL+i529pxYxTcra1CNzoFd/N1KPWif9LMGoI6dlrRLd2NXDdJFEUJc+XTlHxqRLcxxOVDWH6O37W7BiCrfY5RkM2vIIL+KAb60H373pQoPo+/qszWruBN9uPSqoC/i6Eu9A/blsTVwW5S4CNc9eYNl1GiYL+MUmFOBt22ZRORLxRoV1z7yj5lzMdP2MHr5kMLumVT6MfrS4OddHtbjHIFHIgGHeiWjcpE6TsEyXuk6lYSvQP+G4bq0Sen1tAeG1dnc8KV1JedjbIFHOHrUjm6VR/0Qzzv3ZP5zEbS6NAz0s1JMbpVPfSmnMkgc2L1II0OPpo5qEXf2bQ5NUnnQyyfJw7woC+delmGPto05D6cF2Xqg8XoeacQ3aK7GmpvIcXSE3MwoffJqAy9tOdw55kRbkWcQ4W+7DDRJehnexZCzo5wT3Eushd9Ub9tCbo9i+KWRDjZOIcLvWdnJeiVoxFOMs4hQ1+yZG4++tmWubXFEU5udA4b+oIGnjnXuEtEuKcJGGYpes8u4Oi2NO5SEe5pkj2yFH1+A88cS+6yEe6hLpml6LMbeOZW4y4f4Z7iXG0l+uwGfia6b8WwzKoItzTOIUSfO0QzE92KMfc8HqFqRpzDiD5zDH4euhUrpBp/hKtTZCP6zEnWWeidDROqABHuKc4FNqL3ezB0G1bLwES4x3pzdyhO9OYMhG5BFx0swj3W61uCcaLP6qzPQL/g76IDRrjHenkfOFL0ww4EHf/KCdAI9xTnEuvQ+wgCvUO/zh04ws2Mc1jR+woAHX2Kg49ws+IcWnQ2rkbHnuKURLg5cQ4t+vstL2/Rkac4RRFuRpzDi378WImOfHODsgj3Ps7hRX/bbXuD3uI+T0hhhHvaXRzYhf6u28ZsnlENzqOmmtjZihj93RA8s7e7pjzCPVac24Re+yvQMR8ipSHCvYxzmNHfjNAwW5dOaIlwj5UmFqH3pTQ64mOeZSPcKWOR5NLJ82AReiKLjnhcRjbC3RvpOoSIc7jRX06sMxvXSElHuD9xLLhI/v8P1qAzOfS9cxHu75uanOR+h7KxBb2PpdCxvuiyEe7pmyz7m/yNc9jRExl0rLdvyUa4X+k736/80cGO/uKrzmybaVkV4Z6CgXScswQ9WY6O80VfHeGefn4k49z1YAW6eDUFs+pFB4hwT+NWsnHuaAV6shQdZXSXjnCi4WS2k/sNv46nwY8ufNWZRdEdKMI9NR2V3G/ZDjagD8vQS4wR7hMowsHEuQw/er1bhI5vNSRohHusTDLOfeBHF932MY3uux7hnuKcPB929MNpATq6eXTZCPc5528iG+fwows2rE+ip9gWzCiIcI91rFxFP55no2PbyKQkwj0FhsJR9OnzoafQL7iWwCqLcBBxDjs6m4uOa627dIQLFy320hjntI6BVDPRUQ3MQEe4muWm45zO51sP89BRDcxIr4UTPNloN7ZZbTbOaX2p6nQWOqb+GnSE+//TLfjYHwoH0Q/eHPQTnv6adITbv1EV/ky4h94fxxnoePpr0BHuof0WdeCj1jn0QzwDHc1EumyEE50ewboZOU9HnNMclJP36GgWu0NHuKGd1xyUrqHX7Vt0LPNr0BHOW/zhdwX93wH43+gtjhgHHuGmrlYWHQCbOYaevEPHMRoHHeEEJ/+LzvMfWqfQD+0bdBSjcdARThgPROf5P2U+69H762v0DoO5dIQTvLivlsoLrmdSGue0o7PX6Bg66cAR7k08EJznPxkCbEX/vVv9F7r5a7igI9zbeCC6bdNzCD14hW5+rgU8wr2PB6LL05WdRKkfPT+/QDd+mBR4hJu1h0VznDMQlq8v0E237uARbuZ6mKvWOGcAPRKjm27dZSPcThDh5m9kKBuNcc4Aen0Soptt3aUjXJW/m1STXzfruYH+vECSoWndoSPcwvky0SZHBXHOBHokQjfaukNHuOULHQV7YeDPnzWB/rRqiiFp3aEjnMykiWAVVVM6gP50CDzDsXxCOsJN/5klp0cFY3qH2AH0aBp9Z2GEO8J2tQQLMICPHjaC/jjVxhCMu4NHOPlBlYuOOGdmJvM6iW5qVlU6wmUqgEL1cc7Mgx6m0FtDRz7LPk7RCoi1TbHgkwEY58yg5+MEuqEzxKAj3PoxNNHvHNuN/jC/ysxubIGOcCDvo6ANAYtzhtCzCXQTw3HSEa5Q++VVkhZMo7N/0U102KAjHNxFPoJVVDA/VKYSc/oPemh9hAPtTZdH0B9TFOjXf9D1X90BHOFkj3VetooK4rogU+jBb/Qx1/wnAI9w0Bf5nAdV7YmxAZHf6Lpn2KAjnOzZvhLTbqvjnLG9Bd0vdM1jsNLvpSjCKTknKFYT54yhF7/Q9X7SoSNcOKopwbTbyk+JMfTgGV3vJx04wik8LEawimpdnDOG3jyj6/ykQ0c4pecICA4vWBXnzO0XTJ/QNfbS5SPc9BdW9QFw8HHO3MWW1yd0fUcRQEc49WcDCfZLycc5cxsGsyd0bQPvso+qnX49tJwCBh3nutwUevKIntoa4cpRRwlWX0p/qK6mbqs+XB7QNc2lg0e4btRTghke6b/P1dQhL+UDup7Fz9ARTtm20vmrqGTn9UpD+0rCB3QtnQjgCFd7o84SNDaKrx9QMzzzP7qOZAEc4fJ41FuCWAFy3a+2Yn/RdSygAI5w4JNq+n/6PANx7v+DBO/oV+siHPwGMwPfmdhA1636QVee46AjnGyzsbYEqRvspmf15f2gqx4XtDvCzVhFZU+cG37QFV/UAx3h9qO56hLQH+tP3QvP2R/0E0W41alb0/VCMGNyTPVp39ARTsW6KIjUDX3+naryv9FVzqtCRzid96ctTN2ycW6n9VyA6ze6wu8KdIQrRgwlSN3Qp2kom11lSgdhpSPc9IdT852oL5hg49xF48Ev0Te6svAuG+EEGw103378iikA/phpi3PN/+gf2CKcoDM8tCOiCmHjXKXtftvzHV3RokjwCDfiKgETcAdVSXxnqkbegSOcyvPXYafdgIeiwCu+oytZpwcc4ZpyxFeCrRfQSz/hR9+ZmpWwwBHOzKSaLBP0hw18HQVT0WODjnDBeURa00zQf3/YNviODv4PAv5JNzipJv9jCtvSAffZGP9EHuGMTqpJT7sBZxrYPhsDXysFHeH8EXedBx0/+qB9NgY9xwbcsJmfVJOddpPfCqE4zu1v6KAXbUJHGAyTarLTbljjXHFDh+ymA0e4QzHaUYJpN5xxzruhB2gjHJpJNelpN9l8o3RRfHBDj7BGOG071RROu0m/Bgq3M0c3dIY0wuGaVJOddkMY527kUFvToWOLN9pW09Nu8s9F1aL44w29RhnhrqN9JZh2k24BVa1ourATxgiHclJNenYUW5xLmY8wwmGdVJP+GZaOc0pWUfmswhfhTO1Ug6jp/CX98YtVxLmKXbFFOGXHP2qadmvQx7krC5FFOOSTatL5S7b5UrDHMWQergjH/NH2ElzViyfOeSxDFeFsmFSTzV9oRucytm7oPZJcyCSIcHZMqr2v6U2JWLZCDGxV48Ekh0qnI5w1k2qy027Scc4DRl8z31JLNljTEc6iSbUZ024RaJwDTXMRW/PbDaARrhtdqgtonNuDLmhjaybZpL5Rgghn26Ta+woB49wF8uQCtgpd5s8viHDe6F5NT7vJxTkGir5mxEdiWkQQ4eLRxZqedpOKc5DL5ppV6MsHTKcjXOOPbpbgU7Y8zoGezX5kaz4WCUyEs3dSTdvfGPRYoHwVer8383NvU10h2rbzERZ93ddhyaU50xHO8km1GSmmWR/nYHe91CtT4YKe+nSEs35Sbcb3OFkb56Av3ljbFZj9R5+OcIjODlJXgmm32Z81P0eGXsdrGijVd6phqelpt5lxLgVfR7G605/PiSSCCOfKpNqMYdRcOs59wq+iWD/S07z/eZ2OcA5Nqs1ooqXjnILzPAGG95J3c+rTEc6pSbX3NT3t9j7OqdjfBDGmG0hFuG7cVgnOAn0T5/Y1UvTXEX767zqcx83V9E9/ctIZ3OHQX0T46QhXe+MWa3ra7UWcS5XsZ1s5DPs2wk9HuDwet1nT027CAaqzmt1sQOiiCF8u/dF2vQQNn2AoWtFetiMDakAmI7zgI5aOG64FcU7VwQQNFPrUKHwGumralZqeJZ2Ic8quSGwY2Docb94o3PE0brxmHlRSqjuKAg79V4QXnZDkbd187Ka73r/iXKfuXDHG4ALioXob4W612zy6aJHjUz82VXiqWMIAj5bP/6qHorapJvNR+MiHDx3mfcQguwW1938I9cU/SUcyF6P3zfdRO3ulZ0YODHYSp8nifRi9GC9uyHx81bgy7/YAFV+7GzCNV4IR+nt0HZUxj9C3hu6xkNC3hh6ygtC3hn5lMaFvDb2COTyQ0G1C91lK6FtDb6EOBCZ0a9APnPEjoW8LvYE85J/Q7UBnoNd5ELoV6F/XeQyEvi30r4t7MkLfFvrXFV0hoW8L/esyvj2hbwu9UnDBLqEjR+9UXKVN6KjR6/GGrnd0htBNozf8Cz0h9C2hJ3f0gdC3hB7c0TNC3xK6d0e/ErreSoyiX+/oJaFvCd2/o591/iNzMjeLXp/v6Lwh9O2g33psd/SI0LeDHn2jB4S+HfTsGz0k9O2gF9/oJaFvB738Rj/XhL4V9K/wfkfXGd8J3Sz63fv+LwOhbwV9+EH3XEOvItb8X2xOff9vmyR0Ht37QY8dQz9LH4NZuo4e/6B/7WerHUKX746ErqOnP+gak5wWdPm1np7j6A3/ix4R+jbQhwd0j9C3ge49oO8JfRvo1QN6WxP6JtDbB3R9+5UJ3ST6H+3//y3Q1WcjdJPowRN6QW/6FtCLJ/SO0LeA3j2haxueIXSD6A1/Rh8I3X304Rd6SOjuo4e/0HcuoVeEPlm7X+i6PurIZ9m0oJvay/bnk/4XfSB019GDf9ALQncd/foPekrorqOf/kHXNPxO6MbQH6h//lNG6G6jZxPoFaG7jV5NoI85obuMnl8m0PV02gjdFPrAp9CvhO4y+nUS/eNA6O6i1x+T6FoWQhO6IfSET6OHhO4uuidATwndXfSdAF3HKbGEbmZq9cn56b+EhO4quidET2tCdxS9E6JraN8J3Qh6wsXo4dbRXd2f7r1AP9WE7iR69wKdDzWhO4j+3Lr/Ro8J3UX08CW68vlVQjeAfvh4ic6zmtCdQx/4a/TyQOjOoe/foKu+pY3Q9aMfx3foitt3QtePnvF36P6B0B1D99+iK17/Tuja0RP+Hr04ELpT6MUMdLV/JkLXjX48z0BXu5WR0HWjZ3wOensgdIfQd7PQle56IHTN6BGfh74ndHfQ45noKntthK4XvRnnooeE7gp6yOein4+E7gZ63s5GV3jovxb0HaGL+2tC9NOB0F1Ar7sF6OrOIiF0negDX4Le1YTuAHq5CF3ZAA2ha0SP+DL0ktDtR68Woqs6oYDQ9aEnfCl6Rei2o8eL0RVtZiR0behiWvGvVIRuN/pVAl3Nq07outBfyL74pYrQbUaPpdCVBHhC14T+CvbVr5WEbi/6XhJdxatO6HrQEy6L7teEbil6JY2uYASe0LWgR1wevYOfVyd0Dei1vwJdwbz6B6Grvy0n4GvQT+DHkfiEflRtfuhWocOvlitQo181/OlOyl/0jK9D/4S+jjPbPPpetfmxXYkOfskH2zy68rvQQr4WHXzepdw4+kX1VcZsXI8OPUITbBw9NjouMxOdB9B9yE2jX1R32AYOgQ7dbUsuW0b3FJvnKQg6+H7GbMPolep70DwOgw6+ddnbLHqp+uxddoFCL6Fn24IPpOiKh44K5fcdVhwKHTrL9X1TqPywyy/0UjoM66u/myvgcOgn+OHiJlPXYZf/GY2U/ZnSQsN1bMcTILqay3fzZMgyD6rCP+WtebrJ9+/jQVYWRE2vowoOic4NXfROBbd0Yjl6d6Bnir0OO2B0LbfvUinvoi9D5wk9VdyVcHj0HTXwbjTuS9C5Rw/WicZ9ETo18G407svQdzk9Wwca92XolODxVshVodMQje3DMjLo6ZGeL8Y6pgrR+Z4eMMbac5Xo8JOsVOsr4GrRz4yeMbZiZ8Xoqm9opFLbW5NDV3uDF9XyKrh6dPqs2/1Bl0Nv6bNu8wddDp2GYxFV7nM96GpWzFHJ1JXrQucZPW0clXF96BeaZUVRyUUjOk8beuLmq0m5TnRe0hiN+VGZkutFpzBnaYhbhU5hzs4Qtw5d6TXrVG9r4CbQaWTO6EhcawSddxThjdWx42bQuU/jsYYqL7kpdL6v6fmbqHrPzaHTomgzVXCT6LTXya7OGgw6LanQXwE3jT7SBgjNFV2Mo/MzzbhpreTMzaPzltQtGZQBROcnGprTZ55yHOg0u66tmo5jQacBWavMgdBJXUsddxwTOt/RJmb15j7Hhc59UrfFHA6d+9TCW2IOiE7fdVvMIdFJXWVu33Gc6DylURrcfTUV6KSuahwO1BwYnZ9oHB7r2Ks6dH6mmVbwSlqOG51faDk8cA1njh2dtr4AVwAvpACdVktClsftQOcxbWkFqrrgtqDzigbiQSqvuD3ofEcddoghGZ/bhE4ddnxDMurR+YUWxKPrqilHv4V42uiGLbarR+d72tQqXYeY24lOcQ5dhNOAzlsak5Wq6MTtRefcow/78spGbjU6jdMsH5GJVZsoR+cp9diX9c533H50fqFptwUVnLkL6Le+GzXxc5v2qw4PLejUxONp2vWhU4qf17R/cqfQeUmL4t/Uca/LQhs6b2kG5vWATMrdQ+c8pjwnTnCFRgid6Dyl9dGCSnbcVXTOC5p4m6iDN3KH0XlHL7vh19wAOr3s/77m2gn0o/OU5ltNvuZm0G8xnvrsf/rmhYnnbwSdtxkN0N2H4E58O+ic+zQa37PK0MM3hc55uPFAd/A++ebQebrpcdmhM/fkDaJzXibUsm8OnfPrJnP8MRz5htH52dvctuZD9mH4oZtG57wLavqYbw391n3b0Hh8VCJ44BjQt5Pokj2Kx40DnfP9Bra9sRjJw8aCfgvyjrOzK5pHjQed85i5TD5yQp9md/TbnsSoHjMu9Nu33UF2JPENL/otyQ9O9dvroUT3iPGhc95lzkzA5VmH8AFjROf8w3NiTL7xPlA+XpzonI+x9cN0UTwifbhY0W+1s7mVz7Md3ieLGJ3zc2Fplk+KM+bnihr9azIms24DXIP5JbcC/f51t6gPdxj2I/pHih/9VqfQjma+jooPG56nFehffXcP/cB8EqaWPExb0L/SPGL3OvE6e56kRehf73uI8fteR9a84zaif33fiwFV9/0YXFvbnqF16
 Le6VFmCpVEvLXx+VqLfX/jrYHh4ngXxh6UPz1b0e7IrTME3QZFa/OBsRr9HuyJgtd4mPYtTyx+a7ehf1VaenleeDV51duCBuYB+rzT2BnXvfP3l3bryrJxBv9dnWWRRA0pfN1FW+BenHpNb6N9dOj/2gmStfd0kgRfvLg4+IBfRf0JeVXhBxJpF+2IPDYsCr6g6hx+My+g/9eFX19DLgiFKGGua/O+QXp3nTcNYEg1B5oXXyv/YwvP4T4ABABOCDV7Egd+3AAAAAElFTkSuQmCC" />

                                        <span className="marginLeft">
                                            Home</span></a></li>
                                <li className="leftSideBarTopNavItem">
                                    <a className="leftSideBarTopNavItemLink"
                                        href="/type/Fresh?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon"
                                            src={require("./img/freshIcon.png")} />
                                        <span className="marginLeft">Fresh</span>
                                    </a></li>
                                <li className="leftSideBarTopNavItem">
                                    <a className="leftSideBarTopNavItemLink"
                                        href="/type/Regular?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon" src={require("./img/regularIcon.png")} />
                                        <span className="marginLeft">Regular</span></a></li>
                                <li className="leftSideBarTopNavItem">
                                    <a className="leftSideBarTopNavItemLink"
                                        href="/type/Preorder?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon" src={require("./img/PreorderIcon.png")} />
                                        <span className="marginLeft">Preorder</span>
                                    </a></li>
                            </ul>
                        </div>
                        <div className="leftSideBarTop exploreMargin">
                            <ul className="leftSideBarTopNav explore__bg">
                                <li className="leftSideBarTopNavItem ">
                                    <a className="leftSideBarTopNavItemLink" href="">
                                        <span className="explore__text"> Explore </span><span className="shodai__text">
                                            Shodai </span><span className="mama__text"> Mama </span></a></li>
                            </ul>
                        </div>
                        <div className="leftSidebarBottom   px2 ">
                            <ul className="leftSideBarNav">
                                <li className="leftSideBarNavItem">
                                    <a className="categoryMainarea" href="/products/hygiene?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon" src={require("./img/hygieneIcon.png")} alt="hygiene"/>
                                        <span>Hygiene</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/Breakfast-Snacks?smref=DesktopLeftSidebarWidget"> 
                                        <img
                                            className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898877195_13897913_pzqI9rNe_SASSMIS.png"/>
                                        <span>Breakfast &amp; Snacks</span></a></li>
                                <li className="leftSideBarNavItem">
                                    <a className="categoryMainarea" href="/category/cooking?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899365843_78289539_xABdWVP9_SASSMIS.png"/>

                                        <span>Cooking</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/meat-fish?smref=DesktopLeftSidebarWidget"> 
                                        <img
                                            className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898961192_90522818_KghL8x1J_SASSMIS.png"/>

                                        <span>Meat &amp; Fish</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/fruits-vegetables?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899307994_65454848_CIwz48po_SASSMIS.png"/>
                                        <span>Fruits &amp; Vegetables</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/dairy?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899351387_03874966_LxV51z7O_SASSMIS.png"/>
                                        <span>Dairy</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/frozen-canned?smref=DesktopLeftSidebarWidget"> 
                                        <img
                                            className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899323584_96693783_5krgoIJF_SASSMIS.png"/>
                                        <span>Frozen &amp; Canned</span></a></li>
                                <li className="leftSideBarNavItem">
                                    <a className="categoryMainarea"
                                        href="/category/beverages?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899334805_88037401_ydaYkVYO_SASSMIS.png"/>
                                        <span>Beverages</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/kids-care?smref=DesktopLeftSidebarWidget">
                                        <img className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899294952_67754284_UJNyG34G_SASSMIS.png"/>
                                        <span>Kids care</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/personal-care?smref=DesktopLeftSidebarWidget">

                                        <img className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899416181_88846315_slIcWkwD_SASSMIS.png"/>
                                        <span>Personal Care</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/home-kitchen?smref=DesktopLeftSidebarWidget"> 
                                        <img
                                            className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978022808_01668484_NxondpNz_SASSMIS.png"/>
                                        <span>Home &amp; Kitchen</span></a></li>
                                <li className="leftSideBarNavItem"><a className="categoryMainarea"
                                        href="/category/stationary?smref=DesktopLeftSidebarWidget">
                                         <img
                                            className="categoryImageIcon"
                                            src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978447975_34684347_cjsf6yrN_SASSMIS.png"/>
                                        <span>Stationary</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

               {/* card module */}
               {
                   stateClick? <Cart/>: null
               }








                <div className="homeArea">
                    <div className="global_category_tab_btn_area">
                        <div className="global_category_tab_btn_wrapper">
                            <div className="single_global_catergory_btn"><a className="globalBtn_link"
                                    href="/type/Fresh?smref=HomeTopWidget">Fresh</a></div>
                            <div className="single_global_catergory_btn"><a className="globalBtn_link"
                                    href="/type/Regular?smref=HomeTopWidget">Regular</a></div>
                            <div className="single_global_catergory_btn"><a className="globalBtn_link"
                                    href="/type/Preorder?smref=HomeTopWidget">Preorder</a></div>
                        </div>
                    </div>
                    <div className="homeContentArea">
                        <div className="bannerArea pb60">
                            <div className="container">
                                <div className="carousel-root" tabIndex="0">
                                    <div className="carousel carousel-slider" style={{width:'100%'}}>
                                        <ul className="control-dots">
                                            <li className="dot selected" value="0" role="button" tabIndex="0"
                                                aria-label="slide item 1"></li>
                                            <li className="dot" value="1" role="button" tabIndex="0"
                                                aria-label="slide item 2"></li>
                                            <li className="dot" value="2" role="button" tabIndex="0"
                                                aria-label="slide item 3"></li>
                                            <li className="dot" value="3" role="button" tabIndex="0"
                                                aria-label="slide item 4"></li>
                                            <li className="dot" value="4" role="button" tabIndex="0"
                                                aria-label="slide item 5"></li>
                                            <li className="dot" value="5" role="button" tabIndex="0"
                                                aria-label="slide item 6"></li>
                                        </ul><button type="button" aria-label="previous slide / item"
                                            className="control-arrow control-prev"></button>
                                        <div className="slider-wrapper axis-horizontal">
                                            <ul className="slider animated"
                                                style={{transform: 'translate3d(-100%, 0px, 0px)', transitionDuration: '350ms'}}>
                                                {/*<li className="slide">
                                                    <div className="image">
                                                    <img
                                                            src="https://bucket.shodaimama.com/files/sm/images/lfYjG51639978759343YtI18U.png"
                                                            alt="banner-1" />
                                                    </div>
                                                    </li>  
                                                <li className="slide selected">
                                                    <div className="image">
                                                    <img
                                                            src={require("./img/fontSlide.jpeg")}
                                                            alt="banner-1"/></div>
                                                </li>
                                                    */}
                                                {/*
                                                <li className="slide">
                                                    <div className="image"><img
                                                            src="https://bucket.shodaimama.com/files/sm/images/r59HnY1639978584493djXc1w.png"
                                                            alt="banner-1"/></div>
                                                </li>
                                                <li className="slide">
                                                    <div className="image"><img
                                                            src="https://bucket.shodaimama.com/files/sm/images/csvw8b1639978620805J6NYQ3.png"
                                                            alt="banner-1"/></div>
                                                </li>
                                                <li className="slide">
                                                    <div className="image"><img
                                                            src="https://bucket.shodaimama.com/files/sm/images/rrJQWI163997863637200iQTQ.png"
                                                            alt="banner-1"/></div>
                                                </li>
                                                <li className="slide">
                                                    <div className="image"><img
                                                            src="https://bucket.shodaimama.com/files/sm/images/af8Zsm1639978805128uyhbwD.png"
                                                            alt="banner-1"/></div>
                                                </li>
                                                <li className="slide">
                                                    <div className="image"><img
                                                            src="https://bucket.shodaimama.com/files/sm/images/lfYjG51639978759343YtI18U.png"
                                                            alt="banner-1"/></div>
                                                </li>  */}
                                                <li className="slide selected">
                                                    <div className="image"><img
                                                            src={require("./img/fontSlide.jpeg")}
                                                            alt="banner-1" width='210%'/></div>
                                                </li>
                                            </ul>
                                        </div><button type="button" aria-label="next slide / item"
                                            className="control-arrow control-next"></button>
                                        <p className="carousel-status">1 of 6</p>
                                    </div>
                                    <div className="carousel">
                                        <div className="thumbs-wrapper axis-vertical"><button type="button"
                                                className="control-arrow control-prev control-disabled"
                                                aria-label="previous slide / item"></button>
                                            <ul className="thumbs animated"
                                                style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '350ms'}}>
                                                <li className="thumb selected" aria-label="slide item 1" role="button"
                                                    tabIndex="0" style={{width: '80px'}}>
                                                    <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/T16nh11640530118286U4YYkV.jpeg"
                                                        alt="banner-1"/></li>
                                                <li className="thumb" aria-label="slide item 2" role="button" tabIndex="0"
                                                    style={{width: '80px'}}>
                                                    <img src="https://bucket.shodaimama.com/files/sm/images/r59HnY1639978584493djXc1w.png"
                                                        alt="banner-1"/></li>
                                                <li className="thumb" aria-label="slide item 3" role="button" tabIndex="0"
                                                    style={{width: '80px'}}><img
                                                        src="https://bucket.shodaimama.com/files/sm/images/csvw8b1639978620805J6NYQ3.png"
                                                        alt="banner-1"/></li>
                                                <li className="thumb" aria-label="slide item 4" role="button" tabIndex="0"
                                                    style={{width: '80px'}}>
                                                    <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/rrJQWI163997863637200iQTQ.png"
                                                        alt="banner-1"/></li>
                                                <li className="thumb" aria-label="slide item 5" role="button" tabIndex="0"
                                                    style={{width: '80px'}}>
                                                    <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/af8Zsm1639978805128uyhbwD.png"
                                                        alt="banner-1"/></li>
                                                <li className="thumb" aria-label="slide item 6" role="button" tabIndex="0"
                                                style={{width: '80px'}}>
                                                    <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/lfYjG51639978759343YtI18U.png"
                                                        alt="banner-1"/></li>
                                            </ul><button type="button" className="control-arrow control-next"
                                                aria-label="next slide / item"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bannerAreaMobile pb-4">
                            <div className="carousel-root" tabIndex="0">
                                <div className="carousel carousel-slider" style={{width: '100%'}}>
                                    <ul className="control-dots">
                                        <li className="dot selected" value="0" role="button" tabIndex="0"
                                            aria-label="slide item 1"></li>
                                        <li className="dot" value="1" role="button" tabIndex="0" aria-label="slide item 2">
                                        </li>
                                        <li className="dot" value="2" role="button" tabIndex="0" aria-label="slide item 3">
                                        </li>
                                        <li className="dot" value="3" role="button" tabIndex="0" aria-label="slide item 4">
                                        </li>
                                        <li className="dot" value="4" role="button" tabIndex="0" aria-label="slide item 5">
                                        </li>
                                        <li className="dot" value="5" role="button" tabIndex="0" aria-label="slide item 6">
                                        </li>
                                    </ul><button type="button" aria-label="previous slide / item"
                                        className="control-arrow control-prev"></button>
                                    <div className="slider-wrapper axis-horizontal">
                                        <ul className="slider animated"
                                            style={{transform: 'translate3d(-100%, 0px, 0px)', transitionDuration: '350ms'}}>
                                            <li className="slide">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/7U5Kxp1639978903729rB5vLI.png"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide selected">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/KI4pOd1640530128412y5em01.jpeg"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/q4iO371639978839747NNUmNg.png"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/3JRhjv1639978883695cALlAS.png"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/GTPlh41639978896150kJzu5O.png"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/RjkRfn1639978908433ne2F4Y.png"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/7U5Kxp1639978903729rB5vLI.png"
                                                        alt="banner-1"/></div>
                                            </li>
                                            <li className="slide selected">
                                                <div className="image">
                                                <img
                                                        src="https://bucket.shodaimama.com/files/sm/images/KI4pOd1640530128412y5em01.jpeg"
                                                        alt="banner-1"/></div>
                                            </li>
                                        </ul>
                                    </div><button type="button" aria-label="next slide / item"
                                        className="control-arrow control-next"></button>
                                    <p className="carousel-status">1 of 6</p>
                                </div>
                                <div className="carousel">
                                    <div className="thumbs-wrapper axis-vertical"><button type="button"
                                            className="control-arrow control-prev control-disabled"
                                            aria-label="previous slide / item"></button>
                                        <ul className="thumbs animated"
                                            style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '350ms'}}>
                                            <li className="thumb selected" aria-label="slide item 1" role="button"
                                                tabIndex="0" style={{width: '80px'}}>
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/KI4pOd1640530128412y5em01.jpeg"
                                                    alt="banner-1"/></li>
                                            <li className="thumb" aria-label="slide item 2" role="button" tabIndex="0"
                                                style={{width: '80px'}}>
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/q4iO371639978839747NNUmNg.png"
                                                    alt="banner-1"/></li>
                                            <li className="thumb" aria-label="slide item 3" role="button" tabIndex="0"
                                            style={{width: '80px'}}>
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/3JRhjv1639978883695cALlAS.png"
                                                    alt="banner-1"/></li>
                                            <li className="thumb" aria-label="slide item 4" role="button" tabIndex="0"
                                            style={{width: '80px'}}>
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/GTPlh41639978896150kJzu5O.png"
                                                    alt="banner-1"/></li>
                                            <li className="thumb" aria-label="slide item 5" role="button" tabIndex="0"
                                            style={{width: '80px'}}>
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/RjkRfn1639978908433ne2F4Y.png"
                                                    alt="banner-1"/></li>
                                            <li className="thumb" aria-label="slide item 6" role="button" tabIndex="0"
                                            style={{width: '80px'}}>
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/7U5Kxp1639978903729rB5vLI.png"
                                                    alt="banner-1"/></li>
                                        </ul><button type="button" className="control-arrow control-next"
                                            aria-label="next slide / item"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5">
                            <div className="container">
                                <div className=" common__product__title__area">
                                    <div className="common__product__title__wrapper">
                                        <div className="common__product__left__border"
                                            style={{background: 'rgb(68, 189, 50)'}}></div>
                                        <p className="common__product__title">Preorder</p>
                                        <p className="common__product__title__subTitle">বাজার দরের চেয়ে কম মূল্যে মৌসুমি
                                            পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।</p>
                                    </div>
                                </div>
                                <div className="productListArea "><a className="offerBannerItem"
                                        href="/offer/shodaimama-bbq-fest?smref=HomePreorderWidget">
                                        <div className="offerBannerItemImg">
                                        <img
                                                src="https://bucket.shodaimama.com/files/sm/images/whXCzt1640081138967PO8UH7.jpeg"/>
                                        </div>
                                        <div className="offerBannerContent">
                                            <p>সদাইমামা বার-বি-কিউ ফেস্ট ...</p><svg stroke="currentColor"
                                                fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48"
                                                enableBackground="new 0 0 48 48" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <polygon fill="#2196F3"
                                                    points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"></polygon>
                                            </svg>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                        <div className="container pb-5">
                            <div className=" common__product__title__area">
                                <div className="common__product__title__wrapper">
                                    <div className="common__product__left__border" style={{background: 'rgb(68, 189, 50)'}}>
                                    </div>
                                    <p className="common__product__title">Fresh</p>
                                    <p className="common__product__title__subTitle">গুনগত মান বজায় রাখার জন্য পচনশীল
                                        খাদ্যপণ্য সরবরাহ করা হয় সকাল ৮-১১ টা পর্যন্ত ।</p>
                                </div>
                            </div>
                            <div className="productListArea">
                                <div>
                                    <div className="productListArea">
                                        <div className="productCart "><span style={{cursor: 'pointer'}}>
                                                <div className="productContent">
                                                    <div className="productOrigin fresh"> <a href="/">Fresh</a></div>
                                                    <div className="productContentInner">
                                                        <div className="productImageArea">
                                                            <img className="prodcutImg" alt="Pineapple Medium"
                                                                src="https://bucket.shodaimama.com/files/sm/images/smprod_1624442628390_00010391_czmIWFyz_SASSMIS.webp"/>
                                                        </div>
                                                        <p className="productName">Pineapple Medium</p>
                                                        <p className="productSubtext">each</p>
                                                        <p className="productPriceArea"><span className="quantitySymbol">৳
                                                            </span><span className="prodcutPrice">45</span></p>
                                                    </div>
                                                </div>
                                            </span>
                                            <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                    className="productCardDetailsBtn">Details</button></div>
                                            <div><span className="productDetailsArea">
                                                    <div className="productDeliveryStatus">
                                                    <img
                                                            src={require("./img/fastDelivaryIcon.png")} alt="bike picture"/>
                                                        <p>Next Morning</p>
                                                    </div>
                                                    <div className="productDeliveryText"><img
                                                            src="data:image/png;base64,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"
                                                            alt=""/><img
                                                            src="data:image/png;base64,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"
                                                            alt="" style={{margin: '0px 5px'}}/></div>
                                                </span></div>
                                            <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                    Cart</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="productListArea">
                                        <div className="productCart ">
                                            <span style={{cursor: 'pointer'}}>
                                                <div className="productContent">
                                                    <div className="productOrigin fresh"> <a href="/">Fresh</a></div>
                                                    <div className="productContentInner">
                                                        <div className="productImageArea">
                                                            <img className="prodcutImg" alt="Banana Green"
                                                                src="https://bucket.shodaimama.com/files/sm/images/smprod_1624519151384_84633001_CNUNfM7J_SASSMIS.webp"/>
                                                        </div>
                                                        <p className="productName">Banana Green</p>
                                                        <p className="productSubtext">4 pcs</p>
                                                        <p className="productPriceArea"><span className="quantitySymbol">৳
                                                            </span><span className="prodcutPrice">28</span></p>
                                                    </div>
                                                </div>
                                            </span>
                                            <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                    className="productCardDetailsBtn">Details</button></div>
                                            <div><span className="productDetailsArea">
                                                    <div className="productDeliveryStatus"><img
                                                            src={require("./img/fastDelivaryIcon.png")} alt="bike picture"/>
                                                        <p>Next Morning</p>
                                                    </div>
                                                    <div className="productDeliveryText"><img
                                                            src="data:image/png;base64,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"
                                                            alt=""/><img
                                                            src="data:image/png;base64,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"
                                                            alt="" style={{margin: '0px 5px'}}/></div>
                                                </span></div>
                                            <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                    Cart</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="productListArea">
                                        <div className="productCart "><span style={{cursor: 'pointer'}}>
                                                <div className="productContent">
                                                    <div className="productOrigin fresh"> <a href="/">Fresh</a></div>
                                                    <div className="productContentInner">
                                                        <div className="productImageArea">
                                                        <img className="prodcutImg"
                                                                alt="Gourd"
                                                                src="https://bucket.shodaimama.com/files/sm/images/gZgiLo1638097268902L3LK6l.png"/>
                                                        </div>
                                                        <p className="productName">Gourd</p>
                                                        <p className="productSubtext">each</p>
                                                        <p className="productPriceArea"><span className="quantitySymbol">৳
                                                            </span><span className="prodcutPrice">65</span></p>
                                                    </div>
                                                </div>
                                            </span>
                                            <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                    className="productCardDetailsBtn">Details</button></div>
                                            <div><span className="productDetailsArea">
                                                    <div className="productDeliveryStatus"><img
                                                            src={require("./img/fastDelivaryIcon.png")} alt="bike picture"/>
                                                        <p>Next Morning</p>
                                                    </div>
                                                    <div className="productDeliveryText">
                                                    <img
                                                            src="data:image/png;base64,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"
                                                            alt=""/>
                                                        <img src="data:image/png;base64,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"
                                                            alt="" style={{margin: '0px 5px'}}/></div>
                                                </span></div>
                                            <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                    Cart</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="productListArea">
                                        <div className="productCart "><span style={{cursor: 'pointer'}}>
                                                <div className="productContent">
                                                    <div className="productOrigin fresh"> <a href="/">Fresh</a></div>
                                                    <div className="productContentInner">
                                                        <div className="productImageArea"><img className="prodcutImg"
                                                                alt="Round Brinjal"
                                                                src="https://bucket.shodaimama.com/files/sm/images/smprod_1624531929651_40306931_KLtR0Xlm_SASSMIS.webp"/>

                                                        </div>
                                                        <p className="productName">Round Brinjal</p>
                                                        <p className="productSubtext">500 gm</p>
                                                        <p className="productPriceArea"><span className="quantitySymbol">৳
                                                            </span><span className="prodcutPrice">32</span></p>
                                                    </div>
                                                </div>
                                            </span>
                                            <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                    className="productCardDetailsBtn">Details</button></div>
                                            <div><span className="productDetailsArea">
                                                    <div className="productDeliveryStatus"><img
                                                            src={require("./img/fastDelivaryIcon.png")} alt="bike picture"/>
                                                        <p>Next Morning</p>
                                                    </div>
                                                    <div className="productDeliveryText"><img
                                                            src="data:image/png;base64,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"
                                                            alt=""/><img
                                                            src="data:image/png;base64,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"
                                                            alt="" style={{margin: '0px 5px'}}/></div>
                                                </span></div>
                                            <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                    Cart</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="productListArea">
                                        <div className="productCart ">
                                        <span style={{cursor: 'pointer'}}>
                                                <div className="productContent">
                                                    <div className="productOrigin fresh"> 
                                                      <a href="/">Fresh</a>
                                                    </div>
                                                    <div className="productContentInner">
                                                        <div className="productImageArea">
                                                        <img className="prodcutImg"
                                                                alt="Red Tomato"
                                                                src="https://bucket.shodaimama.com/files/sm/images/smprod_1624531802779_09776635_VXOUGIJD_SASSMIS.webp"/>
                                                            <img src="data:image/png;base64,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"
                                                                alt="" style={{margin: "0px 5px"}}/>
                                                                </div>
                                                                </div>
                                                              </div>
                                            </span></div> 
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: "pointer"}}>
                                            <div className="productContent">
                                                <div className="productOrigin fresh"> <a href="/">Fresh</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea">
                                                    <img className="prodcutImg"
                                                            alt="Roast Chicken"
                                                            src="https://bucket.shodaimama.com/files/sm/images/WgSutE1638438669432xBfrAN.jpeg"/>
                                                    </div>
                                                    <p className="productName">Roast Chicken</p>
                                                    <p className="productSubtext">250 gm</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">130</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}>
                                            <button className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus">
                                                <img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Next Morning</p>
                                                </div>
                                                <div className="productDeliveryText">
                                                <img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin fresh"> <a href="/">Fresh</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Cock Chicken Skin Off"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624443046759_27246148_LsBOqPzg_SASSMIS.webp"/>
                                                    </div>
                                                    <p className="productName">Cock Chicken Skin Off</p>
                                                    <p className="productSubtext">500 gm</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">230</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: "pointer"}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus">
                                                    <img src={require("./img/fastDelivaryIcon.png")} alt="bike picture"/>

                                                    <p>Next Morning</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show__more__text__wrapper">
                            <a href="/type/Fresh">Show More </a></div>
                    </div>
                    <div className="container pb-5">
                        <div className=" common__product__title__area">
                            <div className="common__product__title__wrapper">
                                <div className="common__product__left__border" style={{background: "rgb(68, 189, 50)"}}>

                                </div>
                                <p className="common__product__title">Regular</p>
                                <p className="common__product__title__subTitle">২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ
                                    সরবরাহ করা হয় সকাল ১০টা-রাত ১০টা পর্যন্ত ।</p>
                            </div>
                        </div>
                        <div className="productListArea">
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: "pointer"}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Miniket Rice Premium"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624530867616_18725458_d5yPZvEw_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Miniket Rice Premium</p>
                                                    <p className="productSubtext">5 kg</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">350</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus"><img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart ">
                                        <span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a>
                                                </div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea">
                                                        <img className="prodcutImg" alt="Chicken Eggs (Layer)"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1627800916640_45228516_onrxkOib_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Chicken Eggs (Layer)</p>
                                                    <p className="productSubtext">12 pcs</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">115</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus"><img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/>
                                                    <img src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Chopstick Deshi Masala Instant Noodles 8 Pack"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1628594232309_46317802_sAwg76ny_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Chopstick Deshi Masala Instant Noodles
                                                        ...</p>
                                                    <p className="productSubtext"> 8 Pack</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">134</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus"><img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Rupchanda Soyabean Oil"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624535644433_78835947_qlDb9G0a_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Rupchanda Soyabean Oil</p>
                                                    <p className="productSubtext">5 ltr</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">760</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}>
                                            <button className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus"><img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAdkSURBVGhD7VlniFRJEK5d16yYEcyKImKOiJjXHH6IigFRzAFRVFxBUDBiQEVFMStmDJgwizlhzjnnnMVsXX2f/d7N7syet4fezRz7QfO6+/X0VnVVfVX9NkoN8j9AtHtGPJIVCTckKxJuSFbkd2Pz5s3St29fKVKkiHTv3t3NJo6wUGTnzp0yaNAgKV26tERFRbGNGjVKsmXLJhs2bJB9+/bJpEmT3OpEgIT4b2L//v06ZMgQrVixIhIxW4UKFXTw4MFqArtV8bFjxw6tXLmyG4XGb1Xk6NGjOmLECK1ataovdMmSJXXAgAG6fft2tyo+rl+/rp06ddIuXbronTt33CyrD9cLjV+myNmzZ3XcuHEaGxvrC124cGHt3bu3bty4UT99+uRWxsfLly+1SZMm2rVrV23cuLG2b9/evVFt3ry5njp1iv3fosiVK1d08uTJ/MOe0Hnz5tVu3brp6tWr9d27d27lzwEXC0TDhg1d7wegDFCqVCndu3cv+6HwU0Xu37+vCxYs0LZt22qGDBkodL58+dSYhEJ//PjRrUw6LMjZAnHkyBFdu3atG6l27tyZz6FDhzKOEkOMCebj4cOHsnXrVtm2bZscO3ZMrl69yvlcuXJJo0aNZOHChVK8eHGJjo4WcxX5/PmznDx5Ur59+4YD4dq/i5QpU8qZM2fkw4cPkj59eu6FOVNE3r59K7lz55anT5/Kq1ev5MKFC5I5c2aZNWuWtG7dWl6/fs2/WahQITFP4H4s41u0aCF2upIuXTpp0KCBmJ+KmVTM7NwAf8QT/OvXr0kWOjFAcFAt9vUQOIcDS5s2rbx//15Sp07N9ubNG3+dkYnMnDlTzKVFDhw4oMbX0MfH5cuXNVWqVG4Uvnj27Jlmz56d/RhoCTN66NChg6RJk0YyZcrkZoTJygJcnj9/TnPitL5//y6XLl2iK+bMmZPrdu3aJRcvXqT73bx5k65Rv359uopRqbRp04aJrXz58nQNiy+5d++eGGPx94EYO3asnDt3jp7QsWNHWbFiBS0FK82ZM4dr4B2Qn4A27kGAiQBThk+gZs2afCIIQaUWOxyD8ydMmMA+MHDgQO3Ro4faYWjPnj21Xr16nHvy5IkuWrSIa5o1a8b3NWrUgEtr7dq1OR+I/v376+7du91ISTSmFPsWU1q9enX2Hzx4oGYE9n1FzA85ERcXpxbAZCgPyLzr16/XkSNHcowNwCLDhw/X2bNnc+5XAoomhFnT9VSnTp2qZnE1i/uKsNayUyFTAQj2LVu2iMUIxwDMCXfDE4Bb5c+fX4yG6SIeqlSp4tdKSWkJgUD+K4CUwHaBoGTwYwgP1KpVK0gRMFfdunWlRIkSrEpBzRDaLEU/93Dw4EEyWlJbQiAubt++7UYi5gliFYIbicydO1eKFSvGGPFA+gWfN23a1P9xq1atxHxUHj9+zDGUq1atmhw6dIjWwzpY4tq1a2LuxXe/GhZjPHU0pAHkK1CxlTSyfPlyWg15D+9AGP7nIJjYOx2cCKwQaD4LbDLEly9fJEWKFFwLZsO6/wqBikAgwuZZwAEIokDWClcEspZ/sbJizY+ThNi0aROzqCVPadeuHX1z8eLFYhuxdEGeAJYuXconbnTz5s2TPXv2iBWQzAlWzvPd4cOHmReWLVvGMTB9+nQSiFE/8xUwceJEGTNmDPPS+fPnxZI08wrcyiieawKJwlcEAY/kFgqrVq0S43IpV64cy4UXL16wJpo2bZqMHj1aLEdwHUwMwfGHoChw9+5dJsNbt25xjBtfmTJlOA+FAAi6Zs0a3gqhALBkyRImwYwZM/K9ZXA5ceIEY6VAgQJ+CeMhnkXASKGA07UkJL169ZJKlSqJlQa0Ehhr2LBhfmWAOQiEk4PVLPew4VRPnz7NNagcrBwnw0G58ePHsyKwKpvslCNHDq47fvw4WRL7rVu3TuyWyOejR49k5cqVZFXzKK4l6GAO3jBUjKBct1PgRcfYTE04znsZF8CcWUWtdOHYWE1NWDXXU6tiOYd9cAkDUNOZS6lVt7x42clz3gPmjCG5D/bFPcjIhrEBBGV2D0ZpDHi0SAv2eF/jrQ6Sli1b8pk1a1affvv06SM3btyQmJh415efAlRdtmxZukxSgRjE1xN8SUEBCjdDrMLN7c4vM2bMCJ1HALyE786fP1+s1vIVQbChj/yRGBA3SFKBVTOSJoK1aNGibiZpwO9QWSMWUYGD6XDAYEeQCuIF1UWQIgg+aIjyG1nUU6RgwYI+6yQGix0Gbb9+/dzMD2A/nO4/gVXOpGQokCVLFnoFSAS0a8UqDwoWD1IE8DI8fohyIJyB3IPCFYrEC3bAzEn2ipRm6YBy/5lRHOrUqeN6kYUgRezm5nqRhSBFYmNjXS+yEBTsAAIeNDdlyhT/80u4AakA7IpvbSgoQyqC/0mAEXAHCWeAfvPkycPEGFIRFHJxcXHkbVgHSoUbcG9H9e1dvUMqAsBkKAWgCFq4AYkROQSlPWVMTJFIQxBrRSqSFQk3JCsSbkhWJLwg8gfL3OvGcNT8+AAAAABJRU5ErkJggg=="
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Quaker Oats Poly"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624441509419_30548997_i2UK3UGF_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Quaker Oats Poly</p>
                                                    <p className="productSubtext">450 gm</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">265</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus"><img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAcBSURBVGhD7ZhniBRLEMfrznQmDGfOihkDiKLgBzErglkUQRBRPDH7xawoKiYURDArKhgQRVAxYEblOHPOYsScMGMo6192z03vzdwtzxfGx/6gmK5OOzXdXVW9SSzQ/4Bk8/zjSRgSNRKGRI2EIVEjR0N+/PhhStEmR0Ny5cpFSUlJ1K9fPzp27JipjR7ZGnL+/HmqUqUKIfg3adKEBg4cqEY1aNCAli1bRt+/fzc9IwBSlDDS0tJ45syZRsvk4MGD3KtXL6Q2LIbxsGHD+PLly6b1vyFbQ/Cib9680fLIkSP55MmTWvbz9OlTnjZtGpcqVUr7t2jRgjdt2mRa/z1CDfn8+bO+GHj37p2WrTx8+JDXrl2rbbFs3bqV27Rpo/2KFCnCkydP1v7/NI4hjx8/5qNHj/
                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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Bru Pure Instant Coffee Jar"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624524307454_41319346_n3IZhjcS_SASSMIS.webp"/>
                                                    </div>
                                                    <p className="productName">Bru Pure Instant Coffee Jar</p>
                                                    <p className="productSubtext">100 gm</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">449</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div>
                                            <span className="productDetailsArea">
                                                <div className="productDeliveryStatus">
                                                    <img src={require("./img/fastDelivaryIcon.png")} alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText">
                                                    <img src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Horlicks Health And Nutrition Drink Jar"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624445033731_92019225_CDJtdCCV_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Horlicks Health And Nutrition Drink Jar
                                                    </p>
                                                    <p className="productSubtext">500 gm</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">350</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus"><img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAcBSURBVGhD7ZhniBRLEMfrznQmDGfOihkDiKLgBzErglkUQRBRPDH7xawoKiYURDArKhgQRVAxYEblOHPOYsScMGMo6192z03vzdwtzxfGx/6gmK5OOzXdXVW9SSzQ/4Bk8/zjSRgSNRKGRI2EIVEjR0N+/PhhStEmR0Ny5cpFSUlJ1K9fPzp27JipjR7ZGnL+/HmqUqUKIfg3adKEBg4cqEY1aNCAli1bRt+/fzc9IwBSlDDS0tJ45syZRsvk4MGD3KtXL6Q2LIbxsGHD+PLly6b1vyFbQ/Cib9680fLIkSP55MmTWvbz9OlTnjZtGpcqVUr7t2jRgjdt2mRa/z1CDfn8+bO+GHj37p2WrTx8+JDXrl2rbbFs3bqV27Rpo/2KFCnCkydP1v7/NI4hjx8/5qNHj/LXr1958eLFugpgyZIlnhE1atTQflavUKECT5o0iW/duqV9/dy4cYNHjRrFefPm1b5du3blvXv3mta/F8eQ2bNn6w8WLVrUe1E57F4ZcunSJU5OTnbq/NKzZ0/esWOHmdFl5cqV3KhRI+1XrVo1nj9/Pn/8+NG0/h6OITjA2Bp+7t69y/v372fxUjxixAgW78UVK1bMYkCQDBkyxMySlYyMDO7fv7/Xd8CAAVr3V3EMqVu3Lp85c8Zo
                                8YFtduTIEV66dCmPHj2aO3bs6K2ixCAuV64ct27dmrt168aLFi3i9PR0/vDhgxmdyfLly7levXo6rlmzZrx69WrTEh/ODRExwqooAwRExBOZmFJTU0mMpdq1a6vEw7Nnz3T89evX9Slbky5evEhijLZXrVqVZLtR48aNqWnTplSrVi3tt23bNlq1ahVVrlyZZLVUypcvr2OCUEMOHTpEBQsW1Inki5F4KWrbtq3pQiQHlNq3b280lzx58lCdOnX0BWAcDBVXrKmNnCX9ELlz584iqH/y5AndvHmTJAapcXiKOzczE8kWptevX9P79+9NDVHfvn2pd+/e1LlzZ1PzCzUEX7979+6UkpJCL1++1NUoWbKk6UL06tUrKl68uNEywcsiun/79s2RePMzGBpkpN0ZmBvlwoULayYxdOhQ2rhxIxUoUIDEpetqzp07l8TByIbEiF+PSAMXDlq1auVlEX369OGxY8dq2VsReei+Xb9+vVqMsngdkkOsehgY9+jRI5JJSVwqffr0ic6ePUsSUHWblSlTRr/snDlzqHTp0roVw8AYcQp04sQJ3VJYXWz3+vXr61bEPBIaSGKd5ntYUZzBEiVKuCty+/ZtLVsBfj1M9u3bx8ePH+fBgwfzwoULtQxXumbNGs3D4NFevHgRODZWtmzZwtWrV/d0ZAYAHhCg7u3bt17Z4hhy7949b4IePXpoTLF6mMh54HHjxoUGQXD//n11v0BWP3AeKy1bttQPYfVZs2bpODk7LCuidQDZBoKvxTEEaQbKiAXAThYmO3fu5OnTp2vQtP1r1qyp5SDE0+gzdp5Yka3FK1as0PL48eN1TL58+fjKlSssLlj1hg0b8uHDh7UMHEMse/bscSYOEvFqmlguWLDAjGKeOnWqtgVlyQAfasOGDSz3mizzxQq2FFYbAiQ88ObNm7ldu3aqo4+fwBWJR9atW8fDhw/XcX6wv3Fmwhg0aBDLQQ6cM0gmTJig45BJT5kyRVcI+Z7ELa23ODfE7DxKLJLJOvHCRmp4GngXgEA7ceJELVvgbQoVKmS0nLF9EV+QFeCmKqmOxhQHWGMezmHPSYDdv+DBgwdO++7du72y/+sdOHCAJYprDubvHyb2sIvr1vOHuw3qxc1rveW3/g6SFNyUiOReAutIthadPn2aOnTo4OVjyLMsX7580ZWXO4+piQ+siNxv9DcAshA/jiG2UzwgJ5JrsNEywYsipQFXr17V1McPgh3ysufPn5ua7MFW9SMrTRKvjJaJY0j+/Pl/Rck4kHt54F7HKkk6oWX8KLJY8fmqg3PnzpHEFaNlD1YB2QKAQch+kYWnpaVpnQP2l3mwZJm8a9cuLcNPoz47AZ06ddKnBfcItFWqVEmfiOwW3DlwH5FM2pknSJAJXLt2jS9cuKBj4e6bN2+ubUE4hty5c8ebCJQtW9bTgwR/FW3fvl3/RfEjZ0IvUfiHxXLq1CmWFFyjfNBcfgFyNdCyTVHwLoglXbp0UT0WxxBEaDsZvASyTKuHCdIJ5EcIVEghghgzZoxeZUHQHH4Rt8ozZszwdJQBIjr02Ku4xTHEul/Jdr06q4cJ2pH3wAjkPthqWCH8kYE0G7kTPogcfO2LdDxoHgja4Z7xvwByK+jz5s3T97CGhOGk8VEGt85ixYo5rtyPYwjuAFEEBsATSi6XJVOwqCHWXUYZfGhxRnqPD0INMeU/mt9KUaJEwpCokTAkaiQMiRoJQ6IF0U+QexpJehuzxgAAAABJRU5ErkJggg=="
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="productListArea">
                                    <div className="productCart "><span style={{cursor: 'pointer'}}>
                                            <div className="productContent">
                                                <div className="productOrigin regular"> <a href="/">Regular</a></div>
                                                <div className="productContentInner">
                                                    <div className="productImageArea"><img className="prodcutImg"
                                                            alt="Nutella Hazelnut Cocoa Spread"
                                                            src="https://bucket.shodaimama.com/files/sm/images/smprod_1624446824017_23115847_2rPQh3zD_SASSMIS.jpg"/>
                                                    </div>
                                                    <p className="productName">Nutella Hazelnut Cocoa Spread</p>
                                                    <p className="productSubtext">350 gm</p>
                                                    <p className="productPriceArea"><span className="quantitySymbol">৳
                                                        </span><span className="prodcutPrice">520</span></p>
                                                </div>
                                            </div>
                                        </span>
                                        <div className="productDetailsBtnArea" style={{cursor: 'pointer'}}><button
                                                className="productCardDetailsBtn">Details</button></div>
                                        <div><span className="productDetailsArea">
                                                <div className="productDeliveryStatus">
                                                <img src={require("./img/fastDelivaryIcon.png")}
                                                        alt="bike picture"/>
                                                    <p>Today</p>
                                                </div>
                                                <div className="productDeliveryText"><img
                                                        src="data:image/png;base64,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"
                                                        alt=""/><img
                                                        src="data:image/png;base64,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"
                                                        alt="" style={{margin: '0px 5px'}}/></div>
                                            </span></div>
                                        <div className="bottomAddToCartBtn"><button className="addToBgBtnGeneral">Add To
                                                Cart</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show__more__text__wrapper"><a href="/type/Regular">Show More </a></div>
                    </div>
                    <div>
                        <div className="homePageCategoryArea pb60">
                            <div className="container">
                                <div className="sectionHeadingArea">
                                    <p className="sectionHeading">Shodaimama Categories</p>
                                </div>
                                <div className="homePageCategory "><a
                                        href="/category/Breakfast-Snacks?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898877195_13897913_pzqI9rNe_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Breakfast &amp; Snacks</p>
                                        </div>
                                    </a><a href="/category/cooking?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea">
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899365843_78289539_xABdWVP9_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Cooking</p>
                                        </div>
                                    </a><a href="/category/meat-fish?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898961192_90522818_KghL8x1J_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Meat &amp; Fish</p>
                                        </div>
                                    </a><a href="/category/fruits-vegetables?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899307994_65454848_CIwz48po_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Fruits &amp; Vegetables</p>
                                        </div>
                                    </a><a href="/category/dairy?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899351387_03874966_LxV51z7O_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Dairy</p>
                                        </div>
                                    </a><a href="/category/frozen-canned?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899323584_96693783_5krgoIJF_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Frozen &amp; Canned</p>
                                        </div>
                                    </a><a href="/category/beverages?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899334805_88037401_ydaYkVYO_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Beverages</p>
                                        </div>
                                    </a><a href="/category/kids-care?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea">
                                            <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899294952_67754284_UJNyG34G_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Kids care</p>
                                        </div>
                                    </a><a href="/category/personal-care?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899416181_88846315_slIcWkwD_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Personal Care</p>
                                        </div>
                                    </a>
                                    <a href="/category/home-kitchen?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea">
                                                <img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978022808_01668484_NxondpNz_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Home &amp; Kitchen</p>
                                        </div>
                                    </a><a href="/category/stationary?smref=HomeCategoryWidget">
                                        <div className="categoryItem">
                                            <div className="categoryImageArea"><img
                                                    src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978447975_34684347_cjsf6yrN_SASSMIS.png"/>
                                            </div>
                                            <p className="categoryName">Stationary</p>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="container pb60 ">
                        <div className="sectionHeadingArea">
                            <p className="sectionHeading">why<span> ShodaiMama</span></p>
                        </div>
                        <div className="serviceArea">
                            <div className="serviceItem">
                                <div className="serviceItemIcon"><img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTcwMUUxM0NERUVCMTFFQkE2MDA4MzdDOEYzMjNBRDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTcwMUUxM0JERUVCMTFFQkE2MDA4MzdDOEYzMjNBRDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjEgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJERjVBMkU2Qzg5Nzc1RkFDNDc4NzI3MUE4NzhFRDU3MiIgc3RSZWY6ZG9jdW1lbnRJRD0iREY1QTJFNkM4OTc3NUZBQzQ3ODcyNzFBODc4RUQ1NzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5eKISTAAADAFBMVEVGloEVdVuXZG5aoY6pzsXwvcnqobGr0MaGuqz46u7///8oeWNpqpjxwcyYxbn69PYKdFjC3NW21s1hamTx9/VRnIjvusZUbGPS5eB9taehyr+zYnPt9fM2d2X68fPU5uLp8vDhdY7njaEuiHAqhm5nc20cfmRNmoZ1aGhdo5D34eZIdGdgpZPEYXfz+Pf79vihY3AReF300dm92dKCuKqx08rf7el1saHqnK7G39jyxtCCZmqabHT68vQhgWj35Olbc2rg7urSYHoYfGIOdlva6ubutMLX6OPspbWIu67icovhaoUNdlqnzcOeyL3M4tz12uFlqJapY3Ejc14ycV+HbnHzztaNvrHmkqXm8e4UeV/45+uu0cjusr/OYXn22+Lsr71srJvl8O323uR7Z2nZ6eUWe2DkgJbJ4Npxrp45j3jjd489kXu62NAtcV/kfZTkip/00Nntqrk0jHVvrZ2Pv7LxyNLfcYr57fDLYXfplqj7+fr01dzfYX2RwLRJbWJ4b2/khpvJzcuVw7fqmqzpmKvok6a41887b2B7tKXrqLcwinKcx7yWxLjlgpj12d9Ak32yanokg2rgZ4JLmYX57vHmhpzkepEzi3Tnl6l4sqMPeV15s6SEuav9/v4LdVkMdVn6/Pz7+Pn5/Pv8+/z7/fz4+/qjy8Dd7OiTwrY3jnfc6+fmiJ31+vj2+vk7kHni7+v8/f3dYHvifJNpaWbo8u/v9vRDlH9Hl4LzzNXE3tfP5N4ggWcmhGsnhGzA29R/t6iSwbXr9PF3sqIef2bgbojL4tzvt8TgY38/knwafWOky8FJmIPj7+zZYHvQ5N/57/I1jXX36OzBan369fcbemEgeWHz1Nvwv8v3+/ric4w4jnfifpXkfJOLvbCKdXf0+fjVaYFUnorvu8fus8BElX/rn7Afd2AddFyoa3fvvckgb1rJaX7zy9Sz08tXoIy6YXTrorP+/f2QwLNYnovnmKpRY1znip+At6nniZ7ebIbtrbxda2XicIm/X3X///+VmHiGAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAADm1JREFUeNrs3XlYVWUeB3AUFJwUXxRScLkkBqF0FUXBdCjlEuEgDWUSt2sGRiFqpWmpN5f2jDSipmyubDKsiksl4h5EWW5p2V7OpNHsOs4+09Q7ojdlueecdz33nPOe7189T8Jzz+e55+X9nff3vscHmkGOj0lgYplYJpaJxTclwVk1uRaLJbcmK3ibiSWd8rG/3GIDl1MakRG21cTylJQ5LcBDHixONrE6ZXcIkMwOv3IT63KaY4Bsimo3m1ju+EcCpSSGlZhY51OxCKAk/2YTCwY3ArSUhVaJjtV8HCAnv0ZsrOB8gJGk+SJjlTcCrJSlC4yVDXCzWFgsP4CfQEGxJicRYIFxYmKFkFgB+24RsRyALEXbxcOq2EuIBeqChcOqBcRprBcMy9oCKLSsYmH9DdBkS7NIWJX7qLDAvt0CYTkAZWIDxcHyAdSJGi8I1tZSeixgL7YKgZUJmCTxuUoBsI4DRonoZ3isHMAu0eEGxwpjiAUSdxkbK4YlFrBNMzTWcKZYoKyfgbEaAOMcHG9crP2ssYCPcbHWMMcCfobFWs8eK6LSqFjR7LHANKNiFXLAetCoWHUcsECQQbGG88DyNShWEQcr+9MGxUpkb1WYYtQxax+Tr1JhdEbM2cb84evqolZPMO6klMXTrDVMW5gN/teQ7Rq+hrEKGJTOUBCs+jR6rFZBsEr8GNyF2QJgBQfG5N/D4m9hrfGxkplNR/cbHyuD2SRUgMaQL1hZFUHDY5XHssIKMT6WhdldGGp8LAczLIfxsZqYYY03PlYcK6sWaHyseK2O71rEeosVVrEAWCdZYc0XAGsaI6s0qwBYyYywtkABsGAEG6x4IbBq2WCdEQJr814mQ5Ygu8KCbAywWqEYWDC9jB4rVRQs6E//mGa3MFhw4DpKq71QHCxYlWrX2MRB04usOdk043yQWFhUXaVFJaJhpZJjrYaiYVFs3kkRDmsCsdU8KBzWZuIR/pB4WLCV0CryMwGxVmhkwVAXWFlkPVqx20XEgr5EWIugkFjvEO1Z3SomFjxFgDUH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"/>

                                </div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Hassle Free Grocery Shopping</p>
                                    <p className="serviceSubContentTitle">Avoid the crowds and long queues to get your
                                        daily needs.</p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon"><img src={require("./img/freshness.png")}/>
                                </div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Freshness Redefined</p>
                                    <p className="serviceSubContentTitle">Fresh groceries from trusted and hygienic
                                        sources to your doorstep.</p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon">
                                <img src={require("./img/onTimeDoorStep.png")}/></div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">On-time doorstep delivery</p>
                                    <p className="serviceSubContentTitle">Solution to your needs just on time.</p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon">
                                <img src={require("./img/fast-and-flawless-payment.png")}/></div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Fast &amp; Flawless payment system</p>
                                    <p className="serviceSubContentTitle">All secured payment gateways to ensure stress
                                        free fast payment.</p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon"><img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKBWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNlYWY3ODcxLWYyNmMtZDg0YS1iODE1LTcyNTcyYzJkMDc0NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZjQ3Y2UxZi0wN2YyLWIwNGEtODEwNS0wMTJlZWM0OWJkYjgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iREY1QTJFNkM4OTc3NUZBQzQ3ODcyNzFBODc4RUQ1NzIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiB0aWZmOkltYWdlV2lkdGg9IjMwMCIgdGlmZjpJbWFnZUxlbmd0aD0iMzAwIiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSIxLzEiIHRpZmY6WVJlc29sdXRpb249IjEvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMSIgZXhpZjpFeGlmVmVyc2lvbj0iMDIzMSIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDctMDZUMjM6MTE6MjArMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA3LTA3VDExOjIwOjQyKzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA3LTA3VDExOjIwOjQyKzA2OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjJkZDk2ZjYtOWNhZC1kMTQxLWEzMDctOTZiNDI4NTUxZThhIiBzdEV2dDp3aGVuPSIyMDIxLTA3LTA3VDExOjIwOjQyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmNDdjZTFmLTA3ZjItYjA0YS04MTA1LTAxMmVlYzQ5YmRiOCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wN1QxMToyMDo0MiswNjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMmRkOTZmNi05Y2FkLWQxNDEtYTMwNy05NmI0Mjg1NTFlOGEiIHN0UmVmOmRvY3VtZW50SUQ9IkRGNUEyRTZDODk3NzVGQUM0Nzg3MjcxQTg3OEVENTcyIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9IkRGNUEyRTZDODk3NzVGQUM0Nzg3MjcxQTg3OEVENTcyIi8+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkRGNUEyRTZDODk3NzVGQUM0Nzg3MjcxQTg3OEVENTcyPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2QkVCN0E5Q0Q4MEYxMUVCOEE3MUJDMzVBQjk0OUVCNjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlmZjpCaXRzUGVyU2FtcGxlPiA8cmRmOlNlcT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L3RpZmY6Qml0c1BlclNhbXBsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7MXJIWAAAMRUlEQVR4nO3dUXbjRhJE0aRP728WMuuZhXiFnA+LFkURJACiUBGR7371cbdbVVmZIYBEU5fr9VoA4OCv2QsAgLUI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"/>
                                </div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Customer Centric Approach </p>
                                    <p className="serviceSubContentTitle">For us, our customer needs comes first. Our
                                        Aim is to offer the very Best quality, at the best price and deals. </p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon"><img src={require("./img/value-for-money.a1ed3a72.png")}/>
                                </div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Value for Money</p>
                                    <p className="serviceSubContentTitle">Commited to ensure that your hard-earned money
                                        are spent wisely.</p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon"><img
                                        src={require("./img/uncompromised-dedicated-service.f13021df.png")}/></div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Prompt Query Resolve</p>
                                    <p className="serviceSubContentTitle">Not just answering your calls, rather a
                                        substantial solution to all your queries.</p>
                                </div>
                            </div>
                            <div className="serviceItem">
                                <div className="serviceItemIcon"><img src={require("./img/stress-free-refund.b1606821.png")}/></div>
                                <div className="serviceItemContent">
                                    <p className="serviceContentTitle">Stress Free Refund/Return policy</p>
                                    <p className="serviceSubContentTitle">With proper validation your return and refund
                                        will be as smooth as your shopping experience with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category__tab_for__mobile">
                    <div className="category__tab__for__mobile__content">
                        <div className="category__tab__for__mobile_HomeIcon"><a href="/"><svg stroke="currentColor"
                                    fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                    </path>
                                </svg></a></div>
                        <div className="category__tab__for__mobile_right">
                            <div className="single__category_tab_for_mobile"><a
                                    className="category__link_for__mobile active__tab__btn__regular"
                                    href="/type/Regular">Regular</a></div>
                            <div className="single__category_tab_for_mobile"><a
                                    className="category__link_for__mobile active__tab__btn__fresh"
                                    href="/type/Fresh">Fresh</a></div>
                            <div className="single__category_tab_for_mobile"><a
                                    className="category__link_for__mobile  active__tab__btn__preorder"
                                    href="/type/Preorder">Pre Order</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="footer-content">
                        <div className=" footer-column logo__area "><a href="/"><img src={require("./img/logo.png")}/></a>
                            <div className="social__media"><a href="https://www.facebook.com/shodaimama.bd"> <svg
                                        stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                                        </path>
                                    </svg></a><a href="https://www.linkedin.com/company/shodaimama/about/"> <svg
                                        stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                        </path>
                                    </svg></a><a href="https://www.instagram.com/shodai_mama/"> <svg
                                        stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                        </path>
                                    </svg></a><a href="https://www.youtube.com/channel/UCM7zrBcpSeJxKhRo5yI02gA">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 576 512" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg></a></div><a href="/download/app">
                                <div className="shodaimama__app"><a> Shodaimama App</a>
                                    <div className="ball motion-blur"></div>
                                </div>
                            </a>
                            <div className="shodaimama__CopyRight">
                                <p><i>ShodaiMama © 2021</i></p>
                            </div>
                        </div>
                        <div className=" footer-column">
                            <div className="usefull__link">
                                <p className="footer-heading">Useful links</p>
                                <ul className="footer__nav">
                                    <li className="footer__nav__item"><a href="/aboutus">About ShodaiMama</a></li>
                                    <li className="footer__nav__item"><a href="/faq">FAQ</a></li>
                                    <li className="footer__nav__item"><a href="/contactUs">Contact Us</a></li>
                                    <li className="footer__nav__item"><a href="/career">Career</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" footer-column">
                            <div className="usefull__link">
                                <p className="footer-heading">Helpful links</p>
                                <ul className="footer__nav">
                                    <li className="footer__nav__item"><a href="/whyShodaiMama">Why Choose ShodaiMama</a>
                                    </li>
                                    <li className="footer__nav__item"><a href="/privacyPolicy">Privacy policy</a></li>
                                    <li className="footer__nav__item"><a href="/termsAndConditions">Terms &amp;
                                            Condition</a></li>
                                    <li className="footer__nav__item"><a href="/returnAndRefund">Delivery, Return &amp;
                                            Refund</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column">
                            <div className="usefull__link">
                                <p className="footer-heading">Contact Us</p>
                                <ul className="footer__nav footer__about__nav">
                                    <li className="footer__nav__item"><svg stroke="currentColor" fill="currentColor"
                                            strokeWidth="0" viewBox="0 0 384 512" className="footer__nav__icon"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg><span className="footer__nav__link ">House 18, block: k, South Banasree,
                                            Dhaka</span></li>
                                    <li className="footer__nav__item"><svg stroke="currentColor" fill="currentColor"
                                            strokeWidth="0" viewBox="0 0 512 512" className="footer__nav__icon"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z">
                                            </path>
                                        </svg><span className="footer__nav__link ">info@shodaimama.com</span></li>
                                    <li className="footer__nav__item"><svg stroke="currentColor" fill="currentColor"
                                            strokeWidth="0" viewBox="0 0 24 24" className="footer__nav__icon" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12,2C6.486,2,2,6.486,2,12v0.714V16v0.143C2,17.167,2.897,18,4,18h1c0.553,0,1-0.448,1-1v-5.143c0-0.552-0.447-1-1-1 H4.092C4.648,6.987,7.978,4,12,4s7.352,2.987,7.908,6.857H19c-0.553,0-1,0.448-1,1V16v1v1c0,1.103-0.897,2-2,2h-2v-1h-4v3h2h2h2 c2.206,0,4-1.794,4-4c1.103,0,2-0.833,2-1.857V16v-3.286V12C22,6.486,17.514,2,12,2z">
                                            </path>
                                        </svg><span className="footer__nav__link ">support@shodaimama.com</span></li>
                                    <li className="footer__nav__item__phone"><a href="tel:+8801894874999">
                                            <p>Help : +8801894874999</p>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footerPaymentSection">
                        <div className="PaymentMethodImage"><img src={require("./img/SSLCommerz-Pay.png")} width="100%"/>
                        </div>
                        <div className="PaymentMethodImageForMobile"><img src={require("./img/SSLCommerz-payMobile.png")} width="100%"/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>


  </div>
  </div>
  );
}


export default App;
