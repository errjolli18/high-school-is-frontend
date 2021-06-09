import { ContentPage } from '../styled/Components';

/** @function Home 
* @returns The home page of the user 
* */
const Home = () => {
	return (
		<ContentPage title="Home">
			<div className="p-10 h-full flex items-start justify-start gap-16">
				<div className="w-3/4 flex flex-col items-stretch">
					<div className="w-full mb-8 bg-gray-100 shadow-xl p-10 rounded-3xl">
						<div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
							<p className="text-2xl text-blue-900"> Statistika </p>
							<select className="w-38 text-lg bg-transparent text-blue-400 pr-2" id="semester" name="semester">
								<option value="sem-akt">Semesteri Aktual</option>
								<option value="sem-akt">Semesteri Aktual</option>
								<option value="sem-akt">Semesteri Aktual</option>
							</select>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex flex-col items-center pr-4 mt-1">
								<p className="font-semibold text-sm"> Nota mesatare</p>
								<p className="text-5xl font-light text-blue-800"> 8.7 </p>
							</div>
							<div className="flex items-center justify-between px-8 border-l-2 border-r-2 border-gray-300 mt-1 gap-8">
								<div className="flex flex-col items-center">
									<p className="font-semibold text-sm"> Nota Max </p>
									<p className="text-5xl font-light text-gray-400"> 10 </p>
								</div>
								<div className="flex flex-col items-center">
									<p className="font-semibold text-sm"> Nota Min </p>
									<p className="text-5xl font-light text-gray-400"> 7 </p>
								</div>
								<div className="flex flex-col items-center">
									<p className="font-semibold text-sm"> Nota e fundit </p>
									<p className="text-5xl font-light text-gray-400"> 9 </p>
								</div>
							</div>
							<div className="flex flex-col items-center px-2">
								<p className="font-semibold text-sm"> Mungesat / Pa Arsye </p>
								<p className="text-5xl font-light text-gray-400"> 11 / <span className="text-red-400"> 0 </span> </p>
							</div>	
						</div>

						<div className="flex items-center justify-center px-20 gap-12 pt-12">
							<div className="flex flex-col items-center">
								<p className="font-semibold text-sm"> Rezultati Max </p>
								<p className="text-2xl font-light text-gray-400"> Biologjia </p>
							</div>
							<div className="flex flex-col items-center">
								<p className="font-semibold text-sm"> Rezultati Min </p>
								<p className="text-2xl font-light text-gray-400"> Kimia </p>
							</div>
							<div className="flex flex-col items-center">
								<p className="font-semibold text-sm"> Lenda me me pak nota </p>
								<p className="text-2xl font-light text-gray-400"> Historia </p>
							</div>
						</div>
					</div>

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
							<div className="flex flex-col items-center">
								<p className="text-center py-1 px-4 text-gray-400 w-full"> H </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-blue-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-green-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-red-700 w-full"> Histori </p>
								<p className="text-center py-1 px-4 select-none text-gray-100 w-full"> Pushim </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-yellow-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-indigo-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-purple-700 w-full"> Histori </p>
							</div>
							<div className="flex flex-col items-center">
								<p className="text-center py-1 px-4 text-gray-400 w-full"> M </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-pink-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-red-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-blue-700 w-full"> Histori </p>
								<p className="text-center py-1 px-4 select-none text-gray-100 w-full"> Pushim </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-yellow-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-indigo-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-purple-700 w-full"> Histori </p>
							</div>
							<div className="flex flex-col items-center">
								<p className="text-center py-1 px-4 text-gray-400 w-full"> M </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-green-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-pink-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-purple-700 w-full"> Histori </p>
								<p className="text-center py-1 px-4 select-none text-gray-100 w-full"> Pushim </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-yellow-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-indigo-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-blue-700 w-full"> Histori </p>
							</div>
							<div className="flex flex-col items-center">
								<p className="text-center py-1 px-4 text-gray-400 w-full"> E </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-yellow-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-blue-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-green-700 w-full"> Histori </p>
								<p className="text-center py-1 px-4 select-none text-gray-100 w-full"> Pushim </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-red-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-indigo-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-purple-700 w-full"> Histori </p>
							</div>
							<div className="flex flex-col items-center">
								<p className="text-center py-1 px-4 text-gray-400 w-full"> P </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-purple-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-pink-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-blue-700 w-full"> Histori </p>
								<p className="text-center py-1 px-4 select-none text-gray-100 w-full"> Pushim </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-indigo-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-red-700 w-full"> Histori </p>
								<p className="text-center my-1 py-1 px-4 text-white rounded-2xl bg-yellow-700 w-full"> Histori </p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-1/4 h-full">
					<div className="w-full h-full overflow-y-auto bg-gray-100 shadow-xl p-10 rounded-3xl">
						<div className="flex items-center justify-between pb-2 border-b-2 border-gray-300">
							<p className="text-2xl text-blue-900"> Evente </p>
						</div>
						<div className="flex flex-col gap-4 items-start py-2">
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-center border-2 border-red-400 rounded-tl-2xl rounded-bl-2xl py-1 px-4">
									<p className="font-bold text-5xl"> 23 </p>
									<p className="-mt-2 text-3xl"> Mar </p>
								</div>
								<div className="flex flex-col gap-4 items-center">
									<p className="font-bold text-xl"> Field Trip </p>
									<p className="-mt-2 text-gray-400 text-lg"> Mali i Dajtit </p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-center border-2 border-blue-400 rounded-tl-2xl rounded-bl-2xl py-1 px-4">
									<p className="font-bold text-5xl"> 06 </p>
									<p className="-mt-2 text-3xl"> Prill </p>
								</div>
								<div className="flex flex-col gap-4 items-center">
									<p className="font-bold text-xl"> Test </p>
									<p className="-mt-2 text-gray-400 text-lg"> Lenda Anglisht </p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-center border-2 border-indigo-400 rounded-tl-2xl rounded-bl-2xl py-1 px-4">
									<p className="font-bold text-5xl"> 12 </p>
									<p className="-mt-2 text-3xl"> Maj </p>
								</div>
								<div className="flex flex-col gap-4 items-center">
									<p className="font-bold text-xl"> Test </p>
									<p className="-mt-2 text-gray-400 text-lg"> Lenda Histori </p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-center border-2 border-purple-400 rounded-tl-2xl rounded-bl-2xl py-1 px-4">
									<p className="font-bold text-5xl"> 23 </p>
									<p className="-mt-2 text-3xl"> Maj </p>
								</div>
								<div className="flex flex-col gap-4 items-center">
									<p className="font-bold text-xl"> Field Trip a</p>
									<p className="-mt-2 text-gray-400 text-lg"> Muzeu Kombetar </p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex flex-col items-center border-2 border-pink-400 rounded-tl-2xl rounded-bl-2xl py-1 px-4">
									<p className="font-bold text-5xl"> 06 </p>
									<p className="-mt-2 text-3xl"> Qer </p>
								</div>
								<div className="flex flex-col gap-4 items-center">
									<p className="font-bold text-xl"> Test </p>
									<p className="-mt-2 text-gray-400 text-lg"> Lenda Histori </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContentPage>
	);
}

export default Home;
