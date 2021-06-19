import { useEffect, useContext, useState } from 'react';
import { ContentPage, EventEntry } from '../styled/Components';
import { AuthContext } from '../App';
import apiLink from '../API';

type Statistics = {
	average: number;
	maxGrade: number;
	minGrade: number;
	latestGrade: number;
	maxSubject: string;
	minSubject: string;
	latestSubject: string;
	attendance: number;
	unjustified: number;
};
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

/** @function Home 
* @returns The home page of the user 
* */
const Home = () => {
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

const Timetable = () => {
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
						<TimetableColumn day={day}/>
					))}
				</div>
			</div>
		</div>
	);
}

/** Timetable Column */
const TimetableColumn = (props: {day: Day}) => {
	const {day} = props;
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

const Statistics = (props: any) => {
	const authContext = useContext(AuthContext);
	const [statistics, setStatistics] = useState<Statistics>({
		average: 0,
		maxGrade: 0,
		minGrade: 0,
		latestGrade: 0,
		maxSubject: "",
		minSubject: "",
		latestSubject: "",
		attendance: 0,
		unjustified: 0,
	});
	let userId = authContext.userId;
	useEffect(() => {
		if(authContext.authenticated){
			fetch(`${apiLink}/students/${userId}/statistics`, {
				method: 'get',
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${authContext.jwtToken}`
				},
			})
				.then(res => res.json())
				.then(res => {
					console.log(res);
					if (res.status === "success") {
						setStatistics(res.result);
					} else {
						alert(res.message);
					}
				}).catch(err => console.log(err));
		}
	}, [authContext.authenticated, authContext.userId]);
	return (
		<div className="w-full mb-8 bg-gray-100 shadow-xl p-10 rounded-3xl">
			<div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
				<p className="text-2xl text-blue-900"> Statistika </p>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex flex-col items-center pr-4 mt-1">
					<p className="font-semibold text-sm"> Nota mesatare</p>
					<p className="text-5xl font-light text-blue-800"> {statistics.average} </p>
				</div>
				<div className="flex items-center justify-between px-8 border-l-2 border-r-2 border-gray-300 mt-1 gap-8">
					<div className="flex flex-col items-center">
						<p className="font-semibold text-sm"> Nota Max </p>
						<p className="text-5xl font-light text-gray-400"> {statistics.maxGrade} </p>
					</div>
					<div className="flex flex-col items-center">
						<p className="font-semibold text-sm"> Nota Min </p>
						<p className="text-5xl font-light text-gray-400"> {statistics.minGrade} </p>
					</div>
					<div className="flex flex-col items-center">
						<p className="font-semibold text-sm"> Nota e fundit </p>
						<p className="text-5xl font-light text-gray-400"> {statistics.latestGrade} </p>
					</div>
				</div>
				<div className="flex flex-col items-center px-2">
					<p className="font-semibold text-sm"> Mungesat / Pa Arsye </p>
					<p className="text-5xl font-light text-gray-400"> {statistics.attendance} / <span className="text-red-400"> {statistics.unjustified} </span> </p>
				</div>
			</div>

			<div className="flex items-center justify-center px-20 gap-12 pt-12">
				<div className="flex flex-col items-center">
					<p className="font-semibold text-sm"> Rezultati Max </p>
					<p className="text-2xl font-light text-gray-400"> {statistics.maxSubject} </p>
				</div>
				<div className="flex flex-col items-center">
					<p className="font-semibold text-sm"> Rezultati Min </p>
					<p className="text-2xl font-light text-gray-400"> {statistics.minSubject} </p>
				</div>
				<div className="flex flex-col items-center">
					<p className="font-semibold text-sm"> Nota e fundit </p>
					<p className="text-2xl font-light text-gray-400"> {statistics.latestSubject} </p>
				</div>
			</div>
		</div>
	);
}

export default Home;
