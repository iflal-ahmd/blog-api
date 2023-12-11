import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function Footer () {
    return (
        <div className='bg-black h-[100px]'>

      <div className='flex justify-between items-end  '>
        <div className='text-white font-sans font-semibold mx-8 my-8 '>
        Design & Developed 
        </div>
        <div className=  'flex text-white  mx-8 my-8 gap-2'>
            <ul><Facebook/></ul>
            <ul><Instagram/></ul>
            <ul><Twitter/></ul>
            <ul><Youtube/></ul>
        </div>
      </div>
       
    </div>
    );
}

export default Footer;
