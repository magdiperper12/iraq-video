'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { videos, Video } from '../../../data/videos';

declare global {
	interface Window {
		YT: any;
		onYouTubeIframeAPIReady: () => void;
	}
}

const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // 🔑 حط الـ API Key بتاعك هنا

// نوع بيانات تفاصيل الفيديو من YouTube
interface VideoDetails {
	title: string;
	description: string;
	duration: string;
	start?: number;
	thumbnail: string;
}

// دالة تجيب تفاصيل الفيديو من YouTube API
const getVideoDetails = async (
	videoId: string
): Promise<VideoDetails | null> => {
	try {
		const res = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${API_KEY}`
		);
		const data = await res.json();

		if (data.items && data.items.length > 0) {
			const snippet = data.items[0].snippet;
			const contentDetails = data.items[0].contentDetails;

			// تحويل مدة الفيديو من ISO 8601 إلى تنسيق مقروء
			const isoDuration = contentDetails.duration;
			const duration = formatDuration(isoDuration);

			return {
				title: snippet.title,
				description: snippet.description,
				duration: duration,
				thumbnail: snippet.thumbnails.high.url,
			};
		}
		return null;
	} catch (error) {
		console.error('Error fetching video details:', error);
		return null;
	}
};

// دالة لتحويل مدة الفيديو من ISO 8601 إلى تنسيق mm:ss
const formatDuration = (isoDuration: string): string => {
	const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
	if (!match) return '00:00';

	const hours = parseInt(match[1]) || 0;
	const minutes = parseInt(match[2]) || 0;
	const seconds = parseInt(match[3]) || 0;

	const totalMinutes = hours * 60 + minutes;
	const formattedSeconds = seconds.toString().padStart(2, '0');

	return `${totalMinutes}:${formattedSeconds}`;
};

export default function VideoLibrary() {
	const [query, setQuery] = useState('');
	const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
	const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
	const [allVideosDetails, setAllVideosDetails] = useState<{
		[key: string]: VideoDetails;
	}>({});
	const [progress, setProgress] = useState(0);
	const videoRef = useRef<HTMLDivElement | null>(null);
	const playerRef = useRef<any>(null);
	const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

	// جلب تفاصيل جميع الفيديوهات عند تحميل المكون
	useEffect(() => {
		const fetchAllVideosDetails = async () => {
			const details: { [key: string]: VideoDetails } = {};

			for (const video of videos) {
				const detail = await getVideoDetails(video.src);
				if (detail) {
					details[video.src] = detail;
				}
			}

			setAllVideosDetails(details);
		};

		fetchAllVideosDetails();
	}, []);

	// فلترة الفيديوهات حسب البحث
	const filteredVideos = videos.filter((v) => {
		const details = allVideosDetails[v.src];
		return details?.title.toLowerCase().includes(query.toLowerCase());
	});

	// تحميل YouTube API
	useEffect(() => {
		if (!window.YT) {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			document.body.appendChild(tag);
		}
	}, []);

	// جلب تفاصيل الفيديو المحدد
	useEffect(() => {
		if (selectedVideo) {
			const details = allVideosDetails[selectedVideo.src];
			if (details) {
				setVideoDetails(details);
			} else {
				// إذا لم تكن التفاصيل محملة مسبقًا، جلبها الآن
				getVideoDetails(selectedVideo.src).then((details) => {
					if (details) setVideoDetails(details);
				});
			}
		}
	}, [selectedVideo, allVideosDetails]);

	// إنشاء مشغل يوتيوب عند فتح الفيديو
	useEffect(() => {
		if (selectedVideo && window.YT && videoRef.current) {
			const savedProgress = localStorage.getItem(
				`progress-${selectedVideo.id}`
			);
			if (savedProgress) {
				setProgress(parseInt(savedProgress));
			}

			playerRef.current = new window.YT.Player('yt-player', {
				videoId: selectedVideo.src,
				playerVars: {
					autoplay: 1,
					modestbranding: 1,
					rel: 0,
				},
				events: {
					onReady: (event: any) => {
						event.target.playVideo();

						progressIntervalRef.current = setInterval(() => {
							if (playerRef.current && playerRef.current.getCurrentTime) {
								const current = playerRef.current.getCurrentTime();
								const duration = playerRef.current.getDuration();
								if (duration > 0) {
									const percent = Math.floor((current / duration) * 100);
									setProgress(percent);
									localStorage.setItem(
										`progress-${selectedVideo.id}`,
										percent.toString()
									);
								}
							}
						}, 1000);
					},
				},
			});
		}

		return () => {
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
			}
		};
	}, [selectedVideo]);

	return (
		<div
			className='p-4 sm:p-6 font-sans bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300'
			dir='rtl'>
			<h1 className='text-xl sm:text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2 text-gray-900 dark:text-white'>
				🎬 مكتبة الفيديوهات
			</h1>

			{/* Search */}
			<div className='relative max-w-md w-full mx-auto mb-6'>
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
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
				{filteredVideos.map((video) => {
					const details = allVideosDetails[video.src];
					return (
						<div
							key={video.id}
							className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300'
							onClick={() => setSelectedVideo(video)}>
							<img
								src={
									details?.thumbnail ||
									`https://img.youtube.com/vi/${video.src}/hqdefault.jpg`
								}
								alt={details?.title || 'فيديو'}
								className='w-full h-40 object-cover'
							/>
							<div className='p-3 sm:p-4'>
								<h3 className='font-medium text-gray-800 dark:text-white truncate'>
									{details?.title || 'جاري التحميل...'}
								</h3>
								<p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1'>
									⏱ {details?.duration || '--:--'}
								</p>
							</div>
						</div>
					);
				})}
			</div>

			{/* Modal */}
			{selectedVideo && (
				<div className='fixed inset-0 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center h-screen w-full z-50 p-4'>
					<div className='relative w-full max-w-6xl m-auto'>
						<button
							onClick={() => {
								setSelectedVideo(null);
								setVideoDetails(null);
							}}
							className='absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 z-50 hover:bg-red-700 transition-colors'>
							✖
						</button>
						<div className='absolute top-0 left-0 w-full h-full max-w-6xl max-h-[90vh] z-30'></div>
						<div className='bg-black rounded-lg w-full h-full max-w-6xl max-h-[90vh] flex flex-col z-10'>
							{/* YouTube Player */}
							<div className='relative w-full aspect-video flex-1'>
								<div
									id='yt-player'
									ref={videoRef}
									className='w-full h-full'></div>
							</div>

							{/* معلومات الفيديو */}
							<div className='p-4 bg-white dark:bg-gray-900'>
								<h2 className='text-lg sm:text-xl font-bold text-gray-800 dark:text-white'>
									{videoDetails?.title || 'جاري التحميل...'}
								</h2>
								<p className='text-sm text-gray-600 dark:text-gray-400 mt-2 whitespace-pre-line'>
									{videoDetails?.description || 'جاري تحميل الوصف...'}
								</p>

								{/* Progress */}
								<div className='bg-gray-100 dark:bg-gray-800 border rounded-lg p-3 mt-3'>
									<div className='flex items-center gap-2 mb-2'>
										<FaCheckCircle className='text-green-600' />
										<span className='font-semibold text-sm sm:text-base'>
											تقدم المشاهدة:
										</span>
									</div>
									<p className='text-xs sm:text-sm mb-1'>{progress}%</p>
									<div className='w-full bg-gray-200 rounded-full h-2'>
										<div
											className='bg-blue-600 h-2 rounded-full transition-all duration-300'
											style={{ width: `${progress}%` }}></div>
									</div>
									<p className='text-xs sm:text-sm text-gray-500 mt-2'>
										{progress === 0
											? 'ابدأ مشاهدة الفيديو لتتبع تقدمك'
											: progress === 100
											? 'أحسنت! لقد أكملت مشاهدة الفيديو 🎉'
											: 'استمر في المشاهدة لتحقق المزيد'}
									</p>
								</div>

								{/* Next Action */}
								<div className='bg-gray-100 dark:bg-gray-800 border rounded-lg p-3 mt-3 text-center'>
									<button
										onClick={() => {
											setSelectedVideo(null);
											setVideoDetails(null);
										}}
										className='flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition mx-auto text-sm sm:text-base'>
										<FaPlay /> تصفح المزيد من الفيديوهات
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
