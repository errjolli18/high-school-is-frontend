import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Login from './shared/Login';
import UserPage from './shared/UserPage';

type AuthContextType = {
	authenticated: boolean;
	userId: number;
	jwtToken: string;
	signIn: (userId: number, jwtToken: string) => void;
	signOut: () => void;
};

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
						<Route path="/u/:userId">
							<UserPage />
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
