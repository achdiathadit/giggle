import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
	return (
		<div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 dark:border-gray-700'>
			<div className='flex justify-between items-center space-x-5 w-screen mb-5'>
				<Link to='/'>
					<p className='text-2xl bg-purple-700 font-bold text-white dark:bg-purple-200 dark:text-purple-700 rounded-full h-24 w-24 flex items-center justify-center'>
						Giggle
					</p>
				</Link>
				<button
					type='button'
					onClick={() => setDarkTheme(!darkTheme)}
					className='w-32 font-bold bg-gray-900 text-l text-yellow-300 dark:bg-yellow-300 dark:text-gray-900 rounded-full  px-2 py-1 hover:shadow-md hover:bg-gray-800 dark:hover:bg-yellow-200'
				>
					{darkTheme ? 'Light mode' : 'Dark mode'}
				</button>
			</div>
			<Search />
		</div>
	);
};
