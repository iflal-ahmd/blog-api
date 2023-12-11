import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

 function Socialm () {
    return (
        <div className=' dt:flex dt:justify-between dt:items-end dt:my-[50px] dt:mx-[100px] tablet:flex tablet:justify-between tablet:items-end tablet:my-[25px] tablet:mx-[50px] phone:grid phone:justify-items-center phone:my-5 phone:mx-5'>


            <ul className='flex gap-3 text-xl font-semibold   text-gray-500'>
                <li className=' hover:underline hover:text-black'> <a href=''>FOOD</a></li>
                <li className=' hover:underline hover:text-black'> <a href=''>SPORT</a></li>
                <li className=' hover:underline hover:text-black'> <a href=''>FAMILY</a></li>
                <li className=' hover:underline hover:text-black'> <a href=''>TRAVEL</a></li>
            </ul>  

           <ul className='flex gap-3'>
           <li><a href=''> <Facebook/></a></li>
            <li><a href=''><Instagram/></a></li>
            <li><a href=''><Twitter/></a></li>
            <li><a href=''><Youtube/></a></li>
           </ul> 
        </div>
    );
}

export default Socialm;
