import React, { useState } from "react";
import PrimaryAnchor from "../../buttons/PrimaryAnchor"
import  Cancel from '../../../assets/images/cancel.svg'
import wallet from '../../../assets/images/google-wallet.svg'
import meta from '../../../assets/images/meta.svg'

import "../modal.css"
import { Link } from "react-router-dom";

export default function EthModal() {
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
         text="CONNECT WALLET"
         width="350px"
         onClick={toggleModal}
          filled="#6549B9"
       />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
           <h2 className="font-press_start2p text-[16px] md:text-[25px] uppercase text-white  leading-[3.7rem] md:leading-[5rem]">SELECT PROVIDER</h2>
            <div className="img-container">
                
                <div>
                <Link to="/after-connect"><img src={meta} alt='logo' className="img"/></Link>
                 <p className="text-white font-grotesk_semibold ">MetaMask</p>
                </div>
                <div>
                 <Link to="/after-connect"><img src={wallet} alt='logo' className="img"/></Link>
                 <p className="text-white font-grotesk_semibold ">Wallet Connect</p>
                </div>
            </div>
                 <img src={Cancel} className="close-modal" onClick={toggleModal}/>
          </div>
        </div>
      )}
    </>
  );
}
