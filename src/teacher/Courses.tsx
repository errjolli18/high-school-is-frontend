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

const courses: Course[] = [
	{courseID: 1, grade: 7.5, name: "Calculus", isElective: false},
	{courseID: 2, grade: 8.3, name: "Physics", isElective: false},
	{courseID: 3, grade: 8.0, name: "Digital Design", isElective: false},
	{courseID: 4, grade: 9.3, name: "Software Engineering", isElective: false},
	{courseID: 5, grade: 6.9, name: "Databases", isElective: false},
	{courseID: 6, grade: 9.8, name: "Java", isElective: false},
	{courseID: 7, grade: 10.0, name: "Numerical Analysis", isElective: false},
];

const Courses = () => {
	const authContext = useContext(AuthContext);
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
								<td className="text-blue-600 font-bold">{course.grade}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ContentPage>
	);
}

export default Courses;
