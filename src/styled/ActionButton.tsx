const Form = (props: any) => {
	return (
		<form
			{...props}
			className="flex flex-col justify-center items-center mt-5">
		</form>
	);
}

const Label = (props: any) => {
	return (
		<label {...props} className="flex flex-col m-3 text-left w-full">
		</label>
	);
}

const Input = (props: any) => {
	return (
		<input
			{...props}
			className="
				bg-gray-300 appearance-none rounded 
				w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white 
				focus:border-purple-500"
		/>
	);
}

const ActionButton = (props: any) => {
	return (
		<button
			{...props}
			className="shadow bg-purple-600 hover:bg-purple-500 
			focus:shadow-outline focus:outline-none text-white font-bold
			py-2 px-4 rounded m-3">
		</button>
	);
}


export {
	Form,
	ActionButton,
	Input,
	Label,
};
