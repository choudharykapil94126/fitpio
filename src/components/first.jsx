import React from 'react'
import dollar from '../icons/dollar.jpg';
import note from '../icons/note.jpg';
import money from '../icons/money.jpg';
import bag from '../icons/bag.jpg';

const First = () => {
  return (
    <>
        <div className="firstmain">
            <div className="firstinner">
                <img src={dollar} alt="" />
                <div>
                    <p>Earning</p>
                    <p>$198k</p>
                    <p>37.8% this month</p>
                </div>
            </div>
            <div className="firstinner">
                <img src={note} alt="" />
                <div>
                    <p>Earning</p>
                    <p>$198k</p>
                    <p>37.8% this month</p>
                </div>
            </div>
            <div className="firstinner">
                <img src={money} alt="" />
                <div>
                    <p>Earning</p>
                    <p>$198k</p>
                    <p>37.8% this month</p>
                </div>
            </div>
            <div className="firstinner">
                <img src={bag} alt="" />
                <div>
                    <p>Earning</p>
                    <p>$198k</p>
                    <p>37.8% this month</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default First