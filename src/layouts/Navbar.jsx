import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAuthService from '../apiservice/useAuthService';


const Navbar = () => {
	const { user } = useAuth()
	const { logout } = useAuthService()

	return (
		<nav className="fixed top-0 left-0 w-full h-16 z-20 bg-background/100 backdrop-blur-sm border-b-neutral shadow-xl flex items-center justify-between px-4">
			<h1 className="text-3xl font-bold text-txt"><Link to="/">Financial Tracker</Link></h1>

			{!user?
				<ul className="flex">
					<li className="px-2 py-1 rounded-lg text-txt-depressed text-sm md:text-lg font-medium hover:text-accent hover:bg-base hover:highlight-white cursor-pointer transition-all"><Link to="/login">Login</Link></li>
					<li className="px-2 py-1 rounded-lg text-txt-depressed text-sm md:text-lg font-medium hover:text-accent hover:bg-base hover:highlight-white cursor-pointer transition-all"><Link to="/signup">Signup</Link></li>
					{/* <li className="px-2 py-1 rounded-lg text-txt-depressed font-medium hover:text-accent hover:bg-base hover:highlight-white cursor-pointer transition-all"><Link to="/dashboard">Dashboard</Link></li> */}
				</ul> :
				<ul className="flex">
					<li className="px-2 py-1 rounded-lg text-txt-depressed text-sm md:text-lg font-medium hover:text-accent hover:bg-base hover:highlight-white cursor-pointer transition-all"><Link to="#">Hello, {user.fname}</Link></li>
					<li className="px-2 py-1 rounded-lg text-txt-depressed text-sm md:text-lg font-medium hover:text-accent hover:bg-base hover:highlight-white cursor-pointer transition-all"><Link to="/dashboard">Dashboard</Link></li>
					<li className="px-2 py-1 rounded-lg text-txt-depressed text-sm md:text-lg font-medium hover:text-accent hover:bg-base hover:highlight-white cursor-pointer transition-all" onClick={() => logout()}>Logout</li>
				</ul>
			}
		</nav>
	);
};

export default Navbar;

//in this navbar we understand that if the user is not there means the condition is false then the first statement is work in which the login and signup will render on the navbar 
//but if the user is exist then the second statement will works as we know that navbar will show the three different things on the navbar as given in the list itme
