import React from 'react'

function Contract() {
  return (
    <div className='mt-40'>
        <div className="flex flex-col">
          <div >
            <h3 className="text-lg mini:text-[36px] text-white text-center mb-5 mt-5">
            Kittynomica contract            
            </h3>
          </div>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  text-center font-primary mini:leading-8">
           Use the contract information below to add the MWY token to your wallet.
          </p>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  text-center font-primary mini:leading-8">
          Address: 0x12b6893cE26Ea6341919FE289212ef77e51688c8
          </p>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  text-center font-primary mini:leading-8">
           Decimals: 18 
          </p>
          <p className="text-white text-sm mini:text-base mt-5 mini:mt-[20px]  text-center font-primary mini:leading-8">
           Token symbol: MWY
          </p>
         </div>
    </div>
  )
}

export default Contract