import React, { useContext, useState } from 'react';
import {
	useHistory,
} from 'react-router-dom';
import { AuthContext } from '../App';
import { Input, ActionButton, Form, Label } from '../styled/Components';
import apiLink from '../API';

const Login = () => {
	const history = useHistory();
	const authContext = useContext(AuthContext);

	const [form, setForm] = useState({
		email: "",
		password: ""
	});

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const body = {
			credentials: {
				...form
			}
		}
		await fetch(`${apiLink}/auth/signin`, {
			method: 'post',
			credentials: 'include',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		}).then(res => res.json())
			.then(res => {
				if (res.status === "OK") {
					/* Update the authContext */
					authContext.signIn(res.result.userID, res.result.token);

					/* Go to the user page */
					history.push(`/${res.result.role}/${res.result.userID}`);

					/* Set a timeout for when to log the user out of 1 hour */
					setTimeout(() => {
						alert("Your session has expired, please re-login!");
						authContext.signOut();
					}, 60*60*1000);
				} else {
					alert(res.message);
				}
			}).catch(err => console.log(err));
	}

	const onChange = (event: React.ChangeEvent) => {
		event.preventDefault();
		const { name, value } = event.target as any;
		setForm({ ...form, [name]: value });
	}

	return (
		<div className="bg-gray-900 m-auto w-9/12 rounded-lg px-10 pt-10 text-center min-w-max max-w-4xl shadow-lg text-gray-300">
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
					className="asldkf"
					onClick={onSubmit}>
					Log in
				</ActionButton>
			</Form>
		</div>
	);
}

export default Login;
