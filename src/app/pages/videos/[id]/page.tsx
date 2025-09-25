'use client';

import { useState, useRef } from 'react';
import { FaArrowRight, FaCheckCircle, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import { videos } from '../../../../data/videos';

export default function VideoPage({ params }: { params: { id: string } }) {
	const video = videos.find((v) => v.id === Number(params.id));
	const [progress, setProgress] = useState(0);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	if (!video) {
		return <div className='p-6'>الفيديو غير موجود</div>;
	}

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			const percent =
				(videoRef.current.currentTime / videoRef.current.duration) * 100;
			setProgress(Math.floor(percent));
		}
	};

	return (
		<div
			className='p-6 max-w-3xl mx-auto font-sans'
			dir='rtl'>
			{/* Back Button */}
			<Link
				href='/videos'
				className='flex items-center gap-2 mb-4 text-gray-700 hover:text-blue-600 transition'>
				<FaArrowRight /> العودة إلى الفيديوهات
			</Link>

			{/* Video Player */}
			<div className='bg-black rounded-lg overflow-hidden mb-6'>
				<video
					ref={videoRef}
					className='w-full rounded-lg'
					controls
					onTimeUpdate={handleTimeUpdate}>
					<source
						src={video.src}
						type='video/mp4'
					/>
					المتصفح لا يدعم تشغيل الفيديو.
				</video>
			</div>

			{/* Video Info */}
			<div className='bg-white border rounded-lg p-4 mb-6'>
				<div className='flex justify-between items-center mb-2'>
					<h2 className='text-lg font-bold'>{video.title}</h2>
					<span className='text-sm text-gray-500'>{video.duration} ⏱</span>
				</div>
				<p className='text-gray-600 text-sm'>{video.description}</p>
			</div>

			{/* Progress */}
			<div className='bg-white border rounded-lg p-4 mb-6'>
				<div className='flex items-center gap-2 mb-2'>
					<FaCheckCircle className='text-green-600' />
					<span className='font-semibold'>تقدم المشاهدة:</span>
				</div>
				<p className='text-sm mb-1'>{progress}%</p>
				<div className='w-full bg-gray-200 rounded-full h-2'>
					<div
						className='bg-blue-600 h-2 rounded-full'
						style={{ width: `${progress}%` }}></div>
				</div>
				<p className='text-sm text-gray-500 mt-2'>
					{progress === 0
						? 'ابدأ مشاهدة الفيديو لتتبع تقدمك'
						: progress === 100
						? 'أحسنت! لقد أكملت مشاهدة الفيديو 🎉'
						: 'استمر في المشاهدة لتحقق المزيد'}
				</p>
			</div>

			{/* Next Action */}
			<div className='bg-white border rounded-lg p-4 text-center'>
				<h3 className='font-semibold mb-2'>ماذا بعد؟</h3>
				<p className='text-gray-600 mb-4'>
					استمتع بمشاهدة هذا الفيديو وإليك تقدمك.
				</p>
				<Link
					href='/videos'
					className='flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mx-auto'>
					<FaPlay /> تصفح المزيد من الفيديوهات
				</Link>
			</div>
		</div>
	);
}
