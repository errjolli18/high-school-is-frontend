import React, { useContext  } from 'react';
import {
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useRouteMatch
} from 'react-router-dom';

import {NavBar} from '../styled/Components';
import Home from './Home';
import Schedule from './Schedule';
import Courses from './Courses';
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
		<div className="flex flex-row w-full h-full bg-gray-900 text-gray-200">
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
					<Home />
				</Route>

				<Route path={`${path}/schedule`}>
					<Schedule />
				</Route>

				<Route path={`${path}/courses`}>
					<Courses />
				</Route>

				<Route path={`${path}/`}>
					<Redirect to={`${url}/home`} />
				</Route>

			</Switch>
		</div>
	);
}
export default UserPage;
