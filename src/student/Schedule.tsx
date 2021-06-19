import { useEffect, useContext, useState } from 'react';
import { ContentPage, EventEntry } from '../styled/Components';
import { AuthContext } from '../App';
import apiLink from '../API';

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

const organizeSchedule = (hours: Hour[]): Day[] => {
	const days: Day[] = [
		{name: "Monday", hours: [null, null, null, null, null, null, null]},
		{name: "Tueday", hours: [null, null, null, null, null, null, null]},
		{name: "Wednesday", hours: [null, null, null, null, null, null, null]},
		{name: "Thursday", hours: [null, null, null, null, null, null, null]},
		{name: "Friday", hours: [null, null, null, null, null, null, null]}
	];
	hours.forEach(hour => {
		let index = hour.day - 1;
		if(index >=3) index ++;
		days[index].hours[hour.slot -1] = hour;
	});
	return days;
}

/* The colors used by the schedule to automatically color different courses */
const scheduleColors = ['#eb506f', '#7e50eb', '#50ebb2', '#50eb55', '#d9eb50'];
const getColorForCourse = (courseId: number) => {
	const colorIndex = courseId % scheduleColors.length;
	return scheduleColors[colorIndex];
};

const Schedule = () => {
	const authContext = useContext(AuthContext);
	const [days, setDays] = useState<Day[]>([]);
	let userId = authContext.userId;
	useEffect(() => {
		if(authContext.authenticated){
			fetch(`${apiLink}/students/${userId}/timetable`, {
				method: 'get',
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${authContext.jwtToken}`
				},
			})
				.then(res => res.json())
				.then(res => {
					if (res.status === "success") {
						const days = organizeSchedule(res.result);
						setDays(days);
					} else {
						alert(res.message);
					}
				}).catch(err => console.log(err));
		}
	}, [authContext.authenticated, authContext.userId]);
	return (
		<ContentPage title="Schedule">
			<div className="flex flex-row justify-start my-10">
				<NumberColumn />
				{days.map(day => <Day day={day} />)}
			</div>
		</ContentPage>
	);
}

const Day = (props: { day: Day }) => {
	const { day } = props;
	let colors = ['blue', 'green', 'red', 'yellow', 'indigo', 'purple', 'pink'];
	return (
		<div className="w-60 flex-1 flex flex-col items-center">
			<p className="text-gray-700"> {props.day.name[0]} </p>
			{day.hours.map(hour => {
				if (hour) {
					return (
						<Hour hour={hour} />
					);
				}
				return <EmptyBlock />;
			})}
		</div>
	);
}

const NumberColumn = () => {
	const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="w-40 flex flex-col items-center">
			<p className="text-gray-700">Hours</p>
			{hours.map(hour => (
				<div className="p-2 flex flex-col items-center jusfity-center 
					w-full">

					<div className="flex flex-col justify-center items-center 
						w-full h-14 my-2 rounded-xl">
						<p>{hour}</p>
					</div>

				</div>
			))}
		</div>
	);
}

const Hour = (props: { hour: Hour }) => {
	const { hour } = props;
	const style = {
		backgroundColor: getColorForCourse(hour.courseID)
	};
	return (
		<div className="p-2 flex flex-col items-center jusfity-center 
			w-full">

			<div style={style} className="flex flex-col justify-center items-center 
			w-full h-14 bg-gray-400 my-2 rounded-xl">
				<p>{hour.courseName}</p>
			</div>

		</div>
	);
}

const EmptyBlock = () => {
	return (
		<div className="p-2 flex flex-col items-center jusfity-center
			w-full">

			<div className="flex flex-col justify-center items-center 
			w-full h-14 my-2 rounded-xl">
			</div>

		</div>
	);
}

export default Schedule;
