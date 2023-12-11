import * as React from 'react';
import { useSelector } from 'react-redux'
import {useForm, FormProvider, Controller} from 'react-hook-form';
import RHFInput from "../components/rhf-input.jsx";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";




function AddPost() {

	const user = useSelector((state) => state.auth.user)

	const _memoizedUser = React.useMemo(() => {
		const userFromLocalStorage = localStorage.getItem('user')
		return !user ? JSON.parse(userFromLocalStorage) : user
	}, [user])

	const form = useForm({
		resolver: r(postSchema)
	});

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

	return (
	<div>
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)}>

				<RHFInput name="title" label="Title" type="text"/>
				<input type="hidden" value={_memoizedUser.id} {...form.register('userId')}/>
				<Controller control={form.control} name="content" render={({field}) => {
					return(
						<div>
							<textarea {...field} />
						</div>
					)
				}}/>
				<button type="submit">Submit</button>
			</form>
		</FormProvider>
	</div>
	);
}

export default AddPost;
