import React from 'react';
import rightgraph from '../icons/WhatsApp Image 2023-10-16 at 12.41.03_4ee51cee.jpg';
import leftgraph from '../icons/WhatsApp Image 2023-10-16 at 12.41.03_bfda0392.jpg';

const Graph = () => {
  return (
    <>
    <div className="maingraph">
        <div>
          <img src={leftgraph} alt="" />
        </div>
        <div>
          <img src={rightgraph} alt="" />  
        </div>
    </div>
    </>
  )
}

export default Graph