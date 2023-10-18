import React from 'react';
import bot1 from '../icons/bottomTop.jpeg';
import bot2 from '../icons/bottomDown.jpeg';

const bottom = () => {
  return (
    <>
        <div className="bottommain">
            <div className="bottomtop">
                <p>Product Sell</p>
                <div className="bottomtopright">
                    <div className="searchmain">
                    <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="searchinput" type="text" placeholder='search'/>
                    </div>
                    <div>
                        <p>Last 30 days</p>
                        <img src="" alt="" />
                    </div>
                </div>

            </div>
            <div className="bottomheads">
                <p>Product Name</p>
                <div className="bottomheadsmiddle">
                    <p>Stock</p>
                    <p>Price</p>
                    <p>Total Sales</p>
                </div>
            </div>
            <div className="bottombottom">
                <div className="leftbottom">
                    <img src={bot1} alt="" width="75px" />
                    <div>
                        <p>Abstract 3D</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="rightbottom">
                    <p>32 in stock</p>
                    <p className='rightbottomp2'><b>$ 45.99</b></p>
                    <p className='rightbottomp2'>20</p>
                </div>
            </div>
            <div className="bottombottom">
                <div className="leftbottom">
                    <img src={bot2} alt="" width="75px"/>
                    <div>
                        <p>Abstract 3D</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="rightbottom">
                    <p>32 in stock</p>
                    <p className='rightbottomp2'><b>$ 45.99</b></p>
                    <p className='rightbottomp2'>20</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default bottom