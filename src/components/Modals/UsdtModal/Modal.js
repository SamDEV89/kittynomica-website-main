import React, { useState } from "react";
import PrimaryAnchor from "../../buttons/PrimaryAnchor"
import  Cancel from '../../../assets/images/cancel.svg'
import  Kit from '../../../assets/images/kit.svg'
import  Usdt from '../../../assets/images/usdt.svg'

import "../modal.css"

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <PrimaryAnchor
         text="BUY KITTYNOMICA WITH USDT "
         width="350px"
         onClick={toggleModal}
          filled="#6549B9"
       />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="content-group">
                <h1 className="header  text-[25px] text-white">BUY KITTYNOMICA WITH USDT  </h1>
                <p className="text">You can use the popup below to buy Kittynomica in the presale - 
                y’all be able to claim the kittynomica once the presale ends .
                if buying the minimum of 1,000 MWY. Please ensure you have at 
                least 0.01 ETH to cover the cost of the purchase plus the gas fees  </p>
                <div class="input-container">
                    <label>Buying</label>
                    <input className="input-field medium" type="text" placeholder="0"/>
                    <span className="right-txt"><img src={Kit} width='31px' height='31px'/> MWY</span>
                </div>
                <div class="input-container">
                   <label>Selling</label>
                    <input className="input-field " type="text" placeholder="0"/>
                    <span className="right-txt"><img src={Usdt} width='31px' height='31px'/> Usdt</span>
                </div>
                <PrimaryAnchor
                 text="CONVERT ETH"
                 width="220px"
                // onClick={toggleModal}
                  filled="#6549B9"
                />
            </div>
            <img src={Cancel} className="close-modal" onClick={toggleModal}/>
            
          </div>
        </div>
      )}
    </>
  );
}
