import React from 'react';
import { useFormContext, Controller } from "react-hook-form";

// eslint-disable-next-line react/prop-types
function RHFInput({name, label, type}) {
	const { control } = useFormContext();
	return (
	<Controller control={control} name={name}
		render={({ field }) => {
		  return (
		    <div>
			    <label htmlFor={name}
						className="block mb-2 font-semibold text-gray-900">{label}</label>
			    <input type={type} {...field}/>
				</div>
		    )
	    }}/>
	)
}

export default RHFInput;
