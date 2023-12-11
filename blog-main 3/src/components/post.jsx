import React from 'react';
import {Link} from "react-router-dom";

function Post({post}) {
	return (
	<div className=' mb-10'>
		<div className='font-bold text-2xl  mb-5 '>{post.title}</div>
		<div>
			<img className=' w-[400px] h-[400px] rounded-lg my-5 transform motion-safe:hover:scale-110'
			     src='https://mymodernmet.com/wp/wp-content/uploads/2018/03/karl-shakur-travel-photos-1.jpg' alt=''/>
		</div>

		<div className="flex max-w-xl flex-col items-start justify-between">

			<div className="leading-6 flex justify-between items-center gap-x-10 text-xs my-3">

				<img
				src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt="" className="h-10 w-10 rounded-full bg-gray-50"/>

				Michael Foster

				<time dateTime="2020-03-16" className="text-gray-500">{post.time}</time>

				<div
				className="relative z-1 rounded-full bg-gray-50 px-2 py-0.5 font-medium text-gray-600 hover:bg-gray-200">Travel
				</div>
			</div>


			<div className='text-sm mb-3'>
				{post.content}
			</div>
			<a href='' className='font-bold text-sm underline   hover:text-gray-600 '><Link to="/view-post">View Post</Link></a>

		</div>
	</div>
	);
}

export default Post;
