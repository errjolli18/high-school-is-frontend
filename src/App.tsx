import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Login from './shared/Login';
import Teacher from './teacher/Teacher';
import Student from './student/Student';

type AuthContextType = {
	authenticated: boolean;
	userId: number;
	jwtToken: string;
	signIn: (userId: number, jwtToken: string) => void;
	signOut: () => void;
};

/** The authentication context that is referred to to determine if the user is
* logged in. 
* @returns {AuthContextType} The context object
* */
export const AuthContext = React.createContext<AuthContextType>({
	authenticated: false,
	userId: 0,
	jwtToken: "",
	signIn: () => console.log("Sign in"),
	signOut: () => console.log("Sign out"),
});

function App() {
	const signIn = (userId: number, jwtToken: string) => {
		setAuthState({
			...authState,
			authenticated: true,
			userId: userId,
			jwtToken: jwtToken
		});
		console.log();
	}
	const signOut = () => {
		setAuthState({
			...authState,
			authenticated: false,
			userId: 0,
			jwtToken: ""
		});
	}
	const [authState, setAuthState] = useState({
		authenticated: false,
		userId: 0,
		jwtToken: "",
		signIn: signIn,
		signOut: signOut
	});
	return (
		<AuthContext.Provider value={authState}>
			<div className="App h-screen w-screen flex justify-center items-center bg-gray-700 shadow-xl">
				<Router>
					<Switch>
						<Route path="/teacher/:userId">
							<Teacher />
						</Route>
						<Route path="/student/:userId">
							<Student />
						</Route>
						<Route path="/">
							<Login />
						</Route>
					</Switch>
				</Router>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
