import React from 'react';
import { PenSquare } from 'lucide-react';
import { Trash2 } from 'lucide-react';


function ViewPost  ()  {
    return (
    
    
            <header className='tablet:m-14 phone:m-3'>
                <section  className='grid justify-items-center'>
                   
                   <h1 className='tablet:text-2xl phone:text-xl font-semibold '> Aenean eleifend ante  maecenas</h1>
                   
                    <img className='tablet:w-[800px] tablet:h-[500px] rounded-lg my-5  phone:w-[500px] phone:h-[350px]' src='https://th.bing.com/th/id/R.7ee7cc1568e67be792a095f3ca383aeb?rik=AjJSu1yQQMHX5g&pid=ImgRaw&r=0' alt=''/>
                  
                          <div className='flex justify-between items-center gap-[100px] my-5'>
                               <div className='grid'> 
                                <img className=' tablet:w-20 tablet:h-20 phone:w-10 phone:h-10 rounded-full' src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                                  <div className=' phone:text-sm phone:font-semibold' >  Michael Foster</div>
                                </div>
                               <div className='grid phone:text-sm phone:font-semibold'>
                               <time datetime="2020-03-16" class="">Mar 16, 2020</time>

                                    <div className='text-gray-500 font-bold'>Travel</div> 
                                </div>     
                          </div>
                   
    
                   <p className='tablet:text-xl phone:text-lg indent-8 mx-5'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
                     Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                     Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
                     Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                     Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.
                     Venenatis eget adipiscing luctus lorem.Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim.
                     Venenatis eget adipiscing luctus lorem.Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
                     Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                     enean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                     Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                     Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. 
                     Venenatis eget adipiscing luctus lorem.Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
                     Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                   </p>
                </section>
                <section className='flex flex-row-reverse mx-20 my-10  gap-5'>
                   <a href='' className=' text-red-700 '><Trash2 /></a>
                   <a href='' className='text-blue-500'> <PenSquare /></a>
                </section>
            </header>
     
       
    );
}

export default ViewPost;
