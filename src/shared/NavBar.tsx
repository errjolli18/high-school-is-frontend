const NavBar = (props: {children?: React.ReactNode}) => {
	return (
		<div className="group flex flex-col justify-center bg-gray-900 h-full w-20 hover:w-40 duration-300">
			{props.children}
		</div>
	);
}


export default NavBar;
