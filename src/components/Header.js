import React from 'react';
//images
import Logo from '../assets/farrukh.jpg'; 
//PDF
import MyPDF from '../assets/CV.pdf';




const Header = () => {  
  return (
  <header className='py-8'>
<div className='container mx-auto'>
<div className='flex justify-between items-center'>
  <a href='//farrukh-uz.netlify.app'>
<img src={Logo}  width="80px" height="100px"  alt="Farrukh" />Farrukh Mukhammadkulov
  </a>

  <a href={ MyPDF} download="..assets/CV.pdf"> <button className='btn btn-sm'>Download CV</button></a>
  
</div>
</div>
  </header>

  );
};

export default Header;





