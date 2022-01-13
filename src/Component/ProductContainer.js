import React from "react";
import Productcart from './Productcart'
export default function ProductContainer(props){

    return(

           
            
            
          

            <div className="container pb-5">
            <div className=" common__product__title__area">
                <div className="common__product__title__wrapper">
                    <div className="common__product__left__border" style={{background: 'rgb(68, 189, 50)'}}>
                    </div>
                    <p className="common__product__title">{props.category}</p>
                    <p className="common__product__title__subTitle">গুনগত মান বজায় রাখার জন্য পচনশীল
                        খাদ্যপণ্য সরবরাহ করা হয় সকাল ৮-১১ টা পর্যন্ত ।</p>
                </div>
            </div>      

    {/* Product List Body*/}

    <div className="productListArea">                      
        {                  
            props.data.map((curval,i)=>{
                return(
                    curval.category===props.category?
                        <Productcart curval={curval} addBtn={props.addBtn}/>: null
                )
            })
        }
                       
        </div>

            <div className="show__more__text__wrapper">
                <a href="/type/Fresh">Show More </a>
        </div>
    </div>     

            
            
    )
}