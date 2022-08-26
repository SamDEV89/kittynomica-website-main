import React, { useState } from "react";
import PrimaryAnchor from "../../buttons/PrimaryAnchor"
import  Cancel from '../../../assets/images/cancel.svg'
// import  Kit from '../../../assets/images/kit.svg'
// import  Eth from '../../../assets/images/eth.svg'

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
         text="BUY KITTYNOMICA WITH CARD"
         width="350px"
         onClick={toggleModal}
          filled="#6549B9"
       />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="content-group">
                <h1 className="header  text-[25px] text-white">BUY KITTYNOMICA WITH CARD</h1>
                
            </div>
            <img src={Cancel} className="close-modal" onClick={toggleModal}/>
            
          </div>
        </div>
      )}
    </>
  );
}
