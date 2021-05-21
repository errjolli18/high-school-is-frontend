/** Default form */
const Form = (props: any) => {
	return (
		<form
			{...props}
			className="flex flex-col justify-center items-center mt-5">
		</form>
	);
}

/** Default label which wraps the input */
const Label = (props: any) => {
	return (
		<label {...props} className="flex flex-col m-3 text-left w-full">
		</label>
	);
}

/** Default input */
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

/** Default button */
const ActionButton = (props: any) => {
	return (
		<button
			{...props}
			className={`shadow bg-purple-800 hover:bg-purple-700 
			focus:shadow-outline focus:outline-none text-white font-bold
			py-2 px-4 rounded m-3 ${props.className}`}>
		</button>
	);
}

/** Where content will be displayed in the user page */
const ContentPage = (props: any) => {
	return (
		<div className="overflow-auto flex-1 flex flex-col">
			<header><p className="text-3xl ml-10 my-3">{props.title}</p></header>
			{/* The children and other props go here */}
			<section {...props} className="flex-1 bg-gray-200 rounded-tl-large text-gray-900"></section>
		</div>
	);
}

/** Navigation container */
const NavBar = (props: any) => {
	return (
		<nav {...props} className="group flex flex-col justify-center bg-gray-900 h-full w-20 hover:w-40 duration-300">
		</nav>
	);
}

export {
	Form,
	ActionButton,
	Input,
	Label,
	ContentPage,
	NavBar,
};
