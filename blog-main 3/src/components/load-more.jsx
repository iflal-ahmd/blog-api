import React from 'react';
import { RefreshCw } from 'lucide-react';

function LoadMore()  {
    return (
        <div>
            <a href='' className='flex gap-3 justify-center items-center mr-10 mt-10 bg-blue font-bold text-xl text-gray-600 rounded-full hover:text-black '>
            <RefreshCw />  Load More
            </a>
        </div>
    );
}

export default LoadMore;
