'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { videos } from '../../../data/videos';

export default function VideoLibrary() {
	const [query, setQuery] = useState('');

	const filteredVideos = videos.filter((v) =>
		v.title.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div
			className='p-6 font-sans bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300'
			dir='rtl'>
			<h1 className='text-2xl font-bold text-center mb-2 flex items-center justify-center gap-2 text-gray-900 dark:text-white'>
				🎬 مكتبة الفيديوهات
			</h1>

			{/* Search */}
			<div className='relative max-w-md mx-auto mb-6'>
				<FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500' />
				<input
					type='text'
					placeholder='البحث في الفيديوهات...'
					className='w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-lg py-2 pl-10 pr-3 outline-none focus:ring-2 focus:ring-blue-500 transition'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>

			{/* Videos */}
			<div className='grid md:grid-cols-3 gap-6'>
				{filteredVideos.map((video) => (
					<div
						key={video.id}
						className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition'>
						<div className='relative'>
							<img
								src={video.thumbnail}
								alt={video.title}
								className='w-full h-40 object-cover rounded-t-lg'
							/>
							<span className='absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded'>
								{video.duration}
							</span>
						</div>
						<div className='p-4'>
							<h3 className='font-bold text-lg text-gray-900 dark:text-white'>
								{video.title}
							</h3>
							<p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
								{video.description}
							</p>
							<Link
								href={`/pages/videos/${video.id}`}
								className='flex items-center gap-2 w-full justify-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
								<FaPlay /> بدء المشاهدة
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
