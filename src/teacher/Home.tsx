import { ContentPage, EventEntry } from '../styled/Components';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../App';
import apiLink from '../API';

type CourseData = {
	course: string,
	class: string
};

type TeacherData = {
	firstname: string,
	lastname: string,
	courses: Array<CourseData>
}

type Hour = {
	slot: number;
	courseID: number;
	day: number;
	courseName: string;
};
type Day = {
	name: string;
	hours: Array<Hour | null>
};

const days = [
	{
		name: "Monday",
		hours: [
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			null,
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
		]
	},
	{
		name: "Tuesday",
		hours: [
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Physics" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Software Engineering" },
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Software Engineering" },
		]
	},
	{
		name: "Wednesday",
		hours: [
			{ slot: 1, courseID: 2, day: 2, courseName: "Physics" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Digital Design" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Physics" },
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Digital Design" },
		]
	},
	{
		name: "Thursday",
		hours: [
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Physics" },
			null,
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Digital Design" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Physics" },
		]
	},
	{
		name: "Friday",
		hours: [
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
			null,
			null,
			null,
			{ slot: 1, courseID: 2, day: 2, courseName: "Digital Design" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Digital Design" },
			{ slot: 1, courseID: 2, day: 2, courseName: "Calculus" },
		]
	},
];

const Timetable = () => {
	const authContext = useContext(AuthContext);
	let userId = authContext.userId;
	return (
		<div className="flex flex-col items-stretch">

			<div className="w-full bg-gray-100 shadow-xl p-10 rounded-3xl">
				<div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
					<p className="text-2xl text-blue-900"> Plani Javor </p>
				</div>
				<div className="flex items-center justify-start gap-8 mt-2">
					<div className="flex flex-col items-center">
						<p className="text-center py-1 px-4 text-gray-400 w-full"> Ora </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> 1 </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> 2 </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> 3 </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> Pushim </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> 4 </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> 5 </p>
						<p className="text-center my-1 py-1 px-4 text-gray-400 w-full"> 6 </p>
					</div>
					{days.map(day => (
						<TimetableColumn day={day} />
					))}
				</div>
			</div>
		</div>
	);
}

/** Timetable Column */
const TimetableColumn = (props: { day: Day }) => {
	const { day } = props;
	let colors = ['blue', 'green', 'red', 'yellow', 'indigo', 'purple', 'pink'];
	return (
		<div className="flex flex-col items-center">
			<p className="text-center py-1 px-4 text-gray-400 w-full"> {props.day.name[0]} </p>
			{day.hours.map(hour => {
				if (hour === null) {
					return (
						<p className={`text-center my-1 py-1 px-4 text-white rounded-2xl bg-transparent w-full`}>
							""
						</p>
					);
				}
				return (
					<p className={`text-center my-1 py-1 px-4 text-white rounded-2xl bg-${colors[Math.floor(Math.random() * colors.length)]}-700 w-full`}>
						{hour.courseName}
					</p>
				);
			})}
		</div>
	);
}

const Statistics = (props: any) => {
	const authContext = useContext(AuthContext);
	let [teacherData, setData] = useState<TeacherData>({
		firstname: "",
		lastname: "",
		courses: []
	});

	let colors = ['blue', 'green', 'red', 'yellow', 'indigo', 'purple', 'pink'];

	useEffect(() => {
		if (authContext.authenticated) {
			fetch(`${apiLink}/teachers/teacherData`, {
				method: 'post',
				credentials: 'include',
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${authContext.jwtToken}`
				},
				body: JSON.stringify({ userId: authContext.userId })
			})
				.then(res => res.json())
				.then(res => {
					if (res.status === "ok") {
						setData(res.result);
					} else {
						alert(res.message);
					}
				}).catch(err => console.log(err));
		}
	}, []);

	return (
		<div className="w-full mb-8 bg-gray-100 shadow-xl p-10 rounded-3xl">
			<div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
				<p className="text-2xl text-blue-900"> {teacherData.firstname} {teacherData.lastname} </p>
			</div>

			<div className="flex items-center justify-start gap-12 pt-12">
				<div className="flex flex-row items-center gap-8">
					<p className="font-semibold text-xl"> Lendet : </p>
					{teacherData.courses.map(course => (
						<p className={`text-center py-1 px-4 text-white font-semibold rounded-2xl bg-${colors[Math.floor(Math.random() * colors.length)]}-700`}> {course.course} {course.class} </p>
					))}
				</div>
			</div>
		</div>
	);
}

const Events = () => {
	return (
		<div className="w-1/4 h-full overflow-y-auto">
			<div className="w-full h-full bg-gray-100 shadow-xl p-10 rounded-3xl">
				<div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
					<p className="text-2xl text-blue-900"> Evente </p>
				</div>
				<div className="flex flex-col gap-4 items-start py-2">
					<EventEntry date="23" month="Mar" title="Field Trip" desc="Mali i Dajtit" bordercolor="red"></EventEntry>
					<EventEntry date="06" month="Prill" title="Test" desc="Lenda Anglisht" bordercolor="blue"></EventEntry>
					<EventEntry date="12" month="Maj" title="Test" desc="Lenda Histori" bordercolor="purple"></EventEntry>
					<EventEntry date="23" month="Maj" title="Field Trip" desc="Muzeu Kombetar" bordercolor="pink"></EventEntry>
					<EventEntry date="06" month="Qer" title="Test" desc="Lenda Histori" bordercolor="indigo"></EventEntry>
				</div>
			</div>
		</div>
	);
}

const Home = (props: any) => {
	return (
		<ContentPage title="Home">
			<div className="p-10 h-full flex items-start justify-start gap-16">
				<div className="flex flex-col items-stretch w-full">
					<Statistics />
					<Timetable />
				</div>
				<Events />
			</div>
		</ContentPage>
	);
}

export default Home;
