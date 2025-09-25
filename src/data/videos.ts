export type Video = {
	id: number;
	title: string;
	description: string;
	duration: string;
	thumbnail: string;
	src: string;
};

export const videos: Video[] = [
	{
		id: 1,
		title: 'قواعد البيانات',
		description: 'فهم قواعد البيانات وإدارتها',
		duration: '35:00',
		thumbnail: '/images/db.jpg',
		src: '/videos/db.mp4',
	},
	{
		id: 2,
		title: 'تطوير المواقع الالكترونية',
		description: 'كيفية إنشاء موقع ويب احترافي',
		duration: '40:00',
		thumbnail: '/images/webdev.jpg',
		src: '/videos/webdev.mp4',
	},
	{
		id: 3,
		title: 'مقدمة في البرمجة',
		description: 'تعلم أساسيات البرمجة من الصفر',
		duration: '30:00',
		thumbnail: '/images/code.jpg',
		src: '/videos/code.mp4',
	},
	{
		id: 4,
		title: 'تحليل البيانات',
		description: 'استخراج المعلومات من البيانات',
		duration: '37:30',
		thumbnail: '/images/data.jpg',
		src: '/videos/data.mp4',
	},
	{
		id: 5,
		title: 'الذكاء الاصطناعي',
		description: 'مدخل إلى عالم الذكاء الاصطناعي',
		duration: '45:00',
		thumbnail: '/images/ai.jpg',
		src: '/videos/ai.mp4',
	},
	{
		id: 6,
		title: 'الأمان السيبراني',
		description: 'حماية البيانات والأنظمة',
		duration: '32:30',
		thumbnail: '/images/cyber.jpg',
		src: '/videos/cyber.mp4',
	},
];
