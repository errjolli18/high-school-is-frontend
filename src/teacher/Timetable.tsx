import { useContext } from 'react';
import { ContentPage } from '../styled/Components';
import { AuthContext } from '../App';
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
		<ContentPage title="Timetable">
			<div className="m-5 flex flex-col items-stretch">

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
		</ContentPage>
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

export default Timetable;
