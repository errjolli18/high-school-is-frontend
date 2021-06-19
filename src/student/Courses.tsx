import { ContentPage } from '../styled/Components';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../App';
import apiLink from '../API';

function getRandomInt(min = 0, max = 5) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var colors = ["red", "yellow", "green", "blue", "purple", "pink"];

type Course = {
	courseID: number;
	grade: number;
	name: string;
	isElective: boolean;
};
const Courses = () => {
	const authContext = useContext(AuthContext);
	const [courses, setCourses] = useState<Course[]>([]);
	useEffect(() => {
		fetch(`${apiLink}/students/${authContext.userId}/courses`, {
			method: 'get',
			headers: {
				"Authorization": `Bearer ${authContext.jwtToken}`
			},
		})
			.then(res => res.json())
			.then(res => {
				if (res.status === "success") {
					setCourses(res.result);
				} else {
					alert(res.message);
				}
			}).catch(err => console.log(err));
	}, [authContext.userId]);
	return (
		<ContentPage title="Courses">
			<div className="p-20 h-full">
				<table className="table-fixed w-full">
					<thead>
						<tr className="h-16 align-top">
							<th className="w-1/4 text-left uppercase font-bold text-lg">Course</th>
							<th className="w-1/8 text-left uppercase font-bold text-lg">Hours per week</th>
							<th className="w-1/8 text-left uppercase font-bold text-lg">Lecturer</th>
							<th className="w-1/8 text-left uppercase font-bold text-lg">Attendace</th>
							<th className="w-1/8 text-left uppercase font-bold text-lg">Avg. Grade</th>
						</tr>
					</thead>
					<tbody>
						{courses.map(course => (
							<tr className="h-16 align-top">
								<td className="flex items-center">
									<div className={`w-6 h-6 rounded-full bg-${colors[getRandomInt()]}-400 mr-3`}></div>
									<p className="font font-medium">{course.name}</p>
								</td>
								<td>5</td>
								<td>Professor</td>
								<td>15/23</td>
								<td className="text-blue-600 font-bold">8.4</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ContentPage>
	);
}

export default Courses;
