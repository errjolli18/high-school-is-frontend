import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	useHistory,
	useRouteMatch
} from 'react-router-dom';

function App() {
	return (
		<div className="App h-screen w-screen flex justify-center items-center bg-purple-800">
			<Router>
				<Switch>
					<Route path="/u/:userId">
						<UserPage />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

const UserContext = React.createContext({
	userId: 0,
	userType: ""
});

const UserPage = () => {
	const {userId} = useParams<any>();
	return (
		<UserContext.Provider value={{ userId: userId, userType: "teacher" }}>
			<div className="flex flex-row w-full h-full">
				<NavBar />
				<div className="overflow-auto flex-1">
				</div>
			</div>
		</UserContext.Provider>
	);
}

const NavBar = () => {
	return (
		<div className="h-full w-20 hover:w-40 duration-300">
			<ul className="group flex flex-col justify-center h-full bg-gray-900">
				<li className="mt-auto flex flex-row justify-center group-hover:justify-start group-hover:mr-3
					hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">home</i>
					<p className="hidden group-hover:block mx-2 whitespace-nowrap">Home</p>
				</li>
				<li className="flex flex-row justify-center group-hover:justify-start group-hover:mr-3 
					hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">schedule</i>
					<p className="hidden group-hover:block mx-2">Schedule</p>
				</li>
				<li className="flex flex-row justify-center group-hover:justify-start 
					group-hover:mr-3 hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">list</i>
					<p className="hidden group-hover:block mx-2">Courses</p>
				</li>
				<li className="mt-auto mb-2 flex flex-row justify-center 
					group-hover:mr-3 group-hover:justify-start hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">logout</i>
					<p className="hidden group-hover:block mx-2 whitespace-nowrap">Log out</p>
				</li>
			</ul>
		</div>
	);
}

const Login = () => {
	const history = useHistory();
	const { url } = useRouteMatch();

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		history.push(`/u/1`);
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
							bg-gray-300 appearance-none rounded 
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
					onClick={onSubmit}
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
