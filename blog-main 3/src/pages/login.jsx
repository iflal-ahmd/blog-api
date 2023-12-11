import React, { useState } from   "react";
import {useForm, FormProvider, Controller} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import RHFInput from "../components/rhf-input.jsx";
import {login} from "../redux/auth/authSlice"
import { useSelector, useDispatch } from 'react-redux'
const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

export default function Login (){

    const dispatch = useDispatch();

    const form = useForm({
        resolver: yupResolver(loginSchema),
    });

    const handleSubmit = React.useCallback(async (data) => {
      console.log(data);
      try {
        const resp = await axios({
          method: 'post',
          url: 'http://localhost:3000/api/login',
          withCredentials: false,
          data
        });
        window.localStorage.setItem('user', JSON.stringify(resp.data.user))
        dispatch(login(resp.data.user))
      }catch (e){
        dispatch(login(null))
      }

    }, [dispatch])

    console.log(form.formState.errors);

    return  (
         <section className="bg-gray-50 ">
             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto phone:h-screen dt:py-0">

              <div className="w-full bg-white rounded-lg shadow  phone:mt-0 phone:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                          Login
                      </h1>
                      <FormProvider {...form}>
                          <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <RHFInput name={"username"} label={"Username"} type={"text"} />
                            <RHFInput name={"password"} label={"Password"} type={"password"} />
                            <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">LogIn</button>
                      </form>
                      </FormProvider>
                  </div>
              </div>
          </div>
        </section>
    )
}
