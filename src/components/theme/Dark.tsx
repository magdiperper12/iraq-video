'use client';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from './useDarkMode';

const Dark: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true); // بعد تحميل الكلاينت
	}, []);

	if (!mounted) return null; // تمنع render قبل ما الكلاينت يشتغل

	return (
		<div className='text-nowrap'>
			<div
				className='m-auto lg:w-auto rounded-full flex items-center cursor-pointer'
				onClick={toggleDarkMode}>
				<div
					className={`w-8 h-8 rounded-full flex justify-center items-center ${
						isDarkMode ? 'bg-yellow-50' : 'bg-darkprimary'
					}`}>
					{isDarkMode ? (
						<FaSun className='text-red-600 ' />
					) : (
						<FaMoon className='text-darkforth' />
					)}
				</div>
			</div>
		</div>
	);
};

export default Dark;
