import React, { useContext, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useParams,
	useHistory,
	useRouteMatch
} from 'react-router-dom';
import NavBar from './NavBar';
import { AuthContext } from '../App';

const UserPage = () => {
	const history = useHistory();
	const authContext = useContext(AuthContext);
	if (!authContext.authenticated) {
		authContext.signOut();
		history.push("/");
	}
	const { url, path } = useRouteMatch();
	return (
		<div className="flex flex-row w-full h-full">
			<NavBar>
				<Link to={`${url}/home`}
					className="mt-auto flex flex-row justify-center group-hover:justify-start group-hover:mr-3
						hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">home</i>
					<p className="hidden group-hover:block mx-2 whitespace-nowrap">Home</p>
				</Link>
				<Link to={`${url}/schedule`} className="flex flex-row justify-center group-hover:justify-start group-hover:mr-3 
					hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">schedule</i>
					<p className="hidden group-hover:block mx-2">Schedule</p>
				</Link>
				<Link to={`${url}/courses`} className="flex flex-row justify-center group-hover:justify-start 
					group-hover:mr-3 hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">list</i>
					<p className="hidden group-hover:block mx-2">Courses</p>
				</Link>
				<Link to={`/`} className="mt-auto mb-2 flex flex-row justify-center 
					group-hover:mr-3 group-hover:justify-start hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">logout</i>
					<p className="hidden group-hover:block mx-2 whitespace-nowrap">Log out</p>
				</Link>
			</NavBar>
			<Switch>
				<Route path={`${path}/home`}>
					<div className="overflow-auto flex-1">
						home
						</div>
				</Route>

				<Route path={`${path}/schedule`}>
					<div className="overflow-auto flex-1">
						schedule
						</div>
				</Route>

				<Route path={`${path}/courses`}>
					<div className="overflow-auto flex-1">
						courses
						</div>
				</Route>

				<Route path={`${path}/`}>
					<Redirect to={`${url}/home`} />
				</Route>

			</Switch>
		</div>
	);
}
export default UserPage;
