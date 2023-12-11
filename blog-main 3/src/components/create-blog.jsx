import React from 'react';
import { CopyPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

function CreateBlog  ()  {
    const user = false;
    return (
     <div>
        {user ? <> 
            <ul className=' flex gap-3 justify-center items-center mr-10 mt-10 bg-blue font-bold text-xl text-gray-600 rounded-full hover:text-black  '>
          <li> 
            <Link to='post-blog ' className='flex  gap-2'> <CopyPlus/> Create Blog</Link>
          </li>
        </ul></>: <>
        <ul className=' flex gap-3 justify-center items-center mr-10 mt-10 bg-blue font-bold text-xl text-gray-600 rounded-full hover:text-black  '>
          <li> 
            <Link to='Register' className='flex  gap-2'> <CopyPlus/> Create Blog</Link>
          </li>
        </ul>
        </> }
     </div>
    );
}

export default CreateBlog;
