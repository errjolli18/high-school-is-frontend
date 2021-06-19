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

/** Event Entry */
const EventEntry = (props: any) => {
	return (
		<div className="flex items-center gap-4">
			<div className={`flex flex-col items-center border-2 border-${props.bordercolor}-400 rounded-tl-2xl rounded-bl-2xl py-1 px-4`}>
				<p className="font-bold text-5xl"> {props.date} </p>
				<p className="-mt-2 text-3xl"> {props.month} </p>
			</div>
			<div className="flex flex-col gap-4 items-start">
				<p className="font-bold text-xl"> {props.title} </p>
				<p className="-mt-2 text-gray-400 text-lg"> {props.desc} </p>
			</div>
		</div>
	);
}

export {
	Form,
	ActionButton,
	Input,
	Label,
	ContentPage,
	NavBar,
	EventEntry,
};
