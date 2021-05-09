import React from 'react';

function App() {
	return (
		<div className="App flex justify-center items-center bg-purple-800">
			<Login />
		</div>
	);
}

const Login = () => {
	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	}
	const onChange = (event: React.ChangeEvent) => {
		event.preventDefault();
	}
	return (
		<div className="bg-purple-900 m-auto w-9/12 rounded-lg px-10 pt-10 text-center min-w-max max-w-4xl shadow-lg text-gray-300">
			<p className="text-2xl"><b>High School Management System</b></p>
			<form className="flex flex-col justify-center items-center mt-5">
				<label className="flex flex-col m-3 text-left w-full">
					Email:
					<input
						className="
							bg-gray-300 appearance-none border-2 border-gray-300 rounded 
							w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white 
							focus:border-purple-500"
						type="text" />
				</label>
				<label className="flex flex-col m-3 text-left w-full">
					Password:
					<input
						className="
							bg-gray-300 appearance-none border-2 border-gray-300 rounded 
							w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white 
							focus:border-purple-500"
						type="password" />
				</label>
				<button 
					className="shadow bg-purple-600 hover:bg-purple-500 focus:shadow-outline 
						focus:outline-none text-white font-bold py-2 px-4 rounded m-3" 
					type="button">
					Log in
				</button>
			</form>
		</div>
	);
}

export default App;
