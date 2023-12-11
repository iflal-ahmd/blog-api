import React, { useState } from   "react";

export default function RegisterPage (){
   const [username,setUsername] = useState ('');
   const [password,setPassword] = useState ('');

    async function register (ev){
     ev.praventDefault();
     await fetch('http://localhost:4000/register',{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers:{'Content-Type':'application/json'},
     })
   }

    return  (
 <article>
     <header className="flex flex-col items-center justify-center px-6 py-8 mx-auto phone:h-screen dt:py-0">
     
      <section className="w-full bg-white rounded-lg shadow  phone:mt-0 phone:max-w-md dt:p-0">
          <body className="p-6 space-y-4 phone:space-y-6 phone:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 phone:text-2xl">
                 Register 
              </h1>
              <form 
                class="space-y-4 phone:space-y-6"
                onSubmit={register} 
                 >
              <div>
                      <label for="username" className="block mb-2  Name text-gray-900 ">Username</label>
                      <input 
                        type="username"
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}  
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="Username" />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 font-semibold text-gray-900">Password</label>
                      <input
                       type="password"  
                       placeholder="Password"
                       value={password}
                       onChange={ ev => setPassword (ev.target.value)} 
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                  </div>
                 
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                  
              </form>
          </body>
      </section>
  </header>
</article>
    )
}