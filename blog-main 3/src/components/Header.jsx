import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { CopyPlus } from 'lucide-react';


function Header  ()  {
    const user = false;
    
    return (

   
         
        <div className= 'bg-[url("https://s3-alpha-sig.figma.com/img/d787/5dfc/66b935b57fa83634ef2115a6ae21dd6f?Expires=1702252800&Signature=ckdxJe2Yz7YzPhtg0BOD1GT9OxdzjVbRnEDBHL9ni4gc6STweSTLW4wHRMDgMRSJ3~VhZNi93yhaJD91yxLma6wTDXGV-Qgeb~yBm0I~mxk11-~hfk87zPr7b6I4YbnSyZAYwwbKvoSC8s~9KQwa1rfE6r8LKR-N0ZiZdoprJOpKEaTObja2lmuvcW8qTtsIkgwpOeNxnBNNoKfk9skDax4hSOx~zFaVQ6uEaCercXUjEGKgfwtJRoVp80-n-YZCyj4MdhtLy8eOmgBxKRPw0PRgxcFZekrrvIXeUnAEnzBL61XFGVLtYt3SkW4hrvZa0dJ3akVHSdqwbP05JJ0q5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")]  h-[600px] border-black'>
            <nav className='flex justify-between  text-white sticky top-0  items-center '>

                <div className='flex  gap-1 ml-4  text-3xl text-white font-semibold phone:text-xl'>
                    <div className=''>Inspiration by</div>
                    <div> Trazler</div>
                </div>
                <ul className='flex gap-2 m-2 mr-5 font-semibold  text-gray-300 justify-center items-center '>

                    {user ?  <>
                                <li className=' hover:text-black  '>  < CircleUser /> </li>
                                 <l>|</l>
                                <li className=' hover:text-black'> Logout</li>
                                <l>|</l>
                                <li className=' hover:text-black'><Link to="/post-blog"> <CopyPlus/></Link></li>
                            </> : 
                            <>
                                <li className=' hover:text-black'><Link to="/loginPage">Login</Link></li>
                                <l>|</l>
                                <li className=' hover:text-black'><Link to="/RegisterPage">Register</Link></li>
                            </> }

                   
                   
                </ul>
        </nav>


            <div className='grid justify-center items-center mt-[200px]  text-white'>
                <div className='grid justify-center items-center text-4xl max-phone:text-2xl phone:text-center'>
                    INSPIRATION FOR TRAVEL BY REAL PEOPLE
                </div>
                <div className='grid justify-center items-center text-2xl'>
                   Book smart, travel simple
                </div>
                <div className=' grid justify-center items-center ' >
                  Start planning your trip
                </div>
            </div>

            
        </div>
    );
}

export default Header;
