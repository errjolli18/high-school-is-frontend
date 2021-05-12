import React, { useContext, useState } from 'react';
import {
	useHistory,
} from 'react-router-dom';
import { AuthContext } from '../App';
import { Input, ActionButton, Form, Label } from '../styled/ActionButton';

const Login = () => {
	const history = useHistory();
	const authContext = useContext(AuthContext);
	if (authContext.authenticated) {
		authContext.signOut();
	}

	const [form, setForm] = useState({
		email: "",
		password: ""
	});

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (form.email === "name@gmail.com" && form.password === "password") {
			authContext.signIn(1, "This is my jwt token that i got from the server");
			history.push(`/u/1`);
		}
	}
	const onChange = (event: React.ChangeEvent) => {
		event.preventDefault();
		const { name, value } = event.target as any;
		setForm({ ...form, [name]: value });
	}
	return (
		<div className="bg-purple-900 m-auto w-9/12 rounded-lg px-10 pt-10 text-center min-w-max max-w-4xl shadow-lg text-gray-300">
			<p className="text-2xl"><b>High School Management System</b></p>
			<Form>
				<Label>
					Email:
					<Input
						name="email"
						value={form.email}
						onChange={onChange}
						type="text" />
				</Label>
				<Label>
					Password:
					<Input
						name="password"
						value={form.password}
						onChange={onChange}
						type="password" />
				</Label>
				<ActionButton
					onClick={onSubmit}>
					Log in
				</ActionButton>
			</Form>
		</div>
	);
}

export default Login;
