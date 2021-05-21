import { ContentPage } from '../styled/Components';

const scheduleData = [
	{
		name: "Monday",
		hours: [
			{course: "Calculus", hour: 1},
			{course: "Physics", hour: 2}
		]
	},
	{
		name: "Tuesday",
		hours: [
			{course: "Calculus", hour: 1},
			{course: "Physics", hour: 2}
		]
	},
	{
		name: "Wednesday",
		hours: [
			{course: "Calculus", hour: 1},
			{course: "Physics", hour: 2}
		]
	},
	{
		name: "Friday",
		hours: [
			{course: "Calculus", hour: 1},
			{course: "Physics", hour: 2}
		]
	}
];

const Schedule = () => {
	return (
		<ContentPage title="Schedule">
			<div className="flex flex-row justify-center">
				{scheduleData.map(day => <Day day={day} /> )}
			</div>
		</ContentPage>
	);
}

const Day = (props: any) => {
	return (
		<div className="flex flex-col items-center bg-gray-300 border-r-2 border-gray-600 last:border-0 px-5">
			<p className="text-blue-900 border-b border-blue-900 mb-2">{props.day.name}</p>
			<EmptyBlock />
			<EmptyBlock />
			<EmptyBlock />
			<EmptyBlock />
			<EmptyBlock />
			<EmptyBlock />
		</div>
	);
}

const Hour = () => {
	return (
		<div>
		</div>
	);
}

const EmptyBlock = () => {
	return (
		<div className="flex flex-col justify-center items-center w-20 h-14 bg-purple-400 m-2">
			<p>Calculus</p>
		</div>
	);
}

export default Schedule;
