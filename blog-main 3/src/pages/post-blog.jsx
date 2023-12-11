
import React from 'react';
import UploadImage from './upload-image';
import { Select,
     SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue, }
    from '@radix-ui/react-select';
import {useSelector} from "react-redux";
import {useForm, Controller, FormProvider} from "react-hook-form";
import axios from "axios";
import RHFInput from "../components/rhf-input.jsx";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
const postSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  category: yup.string().optional(),
  userId: yup.number().required()
})

function PostBlog  () {

  const user = useSelector((state) => state.auth.user)

  const _memoizedUser = React.useMemo(() => {
    const userFromLocalStorage = localStorage.getItem('user')
    return !user ? JSON.parse(userFromLocalStorage) : user
  }, [user])

  const form = useForm(
  {
    resolver: yupResolver(postSchema),
  }
  );

  const handleSubmit = React.useCallback(async (data) => {
    try {
      const resp = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/blog',
        withCredentials: false,
        data
      });
    }catch (e){
      console.log(e)
    }
  }, [])
  console.log(form.formState.errors)
    return (

 <section className=" w-full ">
     <div className=" tablet:py-0">

      <div className="drop-shadow-xl ">
          <div className=" grid tablet:justify-items-center phone:justify-items-center my-5">
              <h1 className="tablet:mb-8 tablet:text-2xl font-bold phone:text-xl phone:mb-5 leading-tight tracking-tight text-gray-900 ">
                 Create Blog
              </h1>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 phone:space-y-6 ">
                <RHFInput name="title" label="Title" type="text"/>
                <input type="hidden" value={_memoizedUser.id} {...form.register('userId')}/>
                    <div className='grid gap-3 '>
                        <h1 className='text-xl font-medium'>Image</h1>
                      <label  className='border-dashed border-2 border-black py-14 px-[6rem]'><UploadImage/></label>
                     <input  placeholder='Image' style={{display:"none"}}/>
                     </div>
                <Controller control={form.control} name="content" render={({field}) => {
                  return (
                  <div className="grid gap-3">
                    <label htmlFor="Articals" className=" text-xl font-medium"> Write your Article</label>
                    <textarea {...field} type="Articals"
                              className="tablet:w-[650px] tablet:h-[250px] phone:h-[225px] phone:w-[500px] capitalize  bg-gray-50 border border-gray-300 text-gray-900 phone:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5"
                              placeholder=" Write here...."/>
                  </div>
                  )
                }}/>

                <Controller render={({field}) => {
                  return (
                  <Select onValueChange={(value) => {
                    field.onChange({target: {value}})
                  }}>
                    <SelectTrigger className="w-[180px] border-2 rounded-lg border-gray-400">
                      <SelectValue placeholder="Category "></SelectValue>
                    </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="food">FOOD</SelectItem>
                          <SelectItem value="sport">SPORT</SelectItem>
                          <SelectItem value="family">FAMILY</SelectItem>
                          <SelectItem value="travel">TRAVEL</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    )
                  }} name={'category'} control={form.control} defaultValue={'food'} />

                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Post</button>

              </form>
            </FormProvider>
          </div>
      </div>
  </div>
</section>

    );
}

export default PostBlog;
