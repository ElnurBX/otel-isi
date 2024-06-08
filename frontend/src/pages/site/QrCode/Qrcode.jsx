import React from 'react'
import QRCode from 'react-qr-code';
import { useParams } from 'react-router';
const Qrcode = () => {
  const {id }=useParams()
  console.log(`https://aquaparkqr.netlify.app//details/${id}`);
  return (
    <div className='ml-5 mt-5 d-flex justify-content-center'>
      <QRCode 
      value={`https://aquaparkqr.netlify.app//details/${id}`}
      size={300}
      bgColor='#ffffff' 
      fgColor='#000000'
      />
    </div>
  )
}

export default Qrcode