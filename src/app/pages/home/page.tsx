'use client';

import {
	FaCopy,
	FaGift,
	FaPlayCircle,
	FaUsers,
	FaChartPie,
} from 'react-icons/fa';

export default function DashboardPage() {
	return (
		<main className='p-6 min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300'>
			{/* Header */}
			<h1 className='text-2xl font-bold mb-6'>
				👋 أهلاً بك،{' '}
				<span className='text-primary dark:text-darkprimary'>أحمد محمد</span>!
			</h1>

			{/* Stats */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
				{/* نسبة الإكمال */}
				<div className='flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-5 w-full border border-gray-200 dark:border-gray-700'>
					<FaChartPie className='text-primary dark:text-darkprimary mb-3 text-2xl' />
					<p className='text-xl font-bold'>0%</p>
					<p className='text-gray-500 dark:text-gray-400 text-sm'>
						نسبة الإكمال
					</p>
				</div>

				{/* إجمالي الأرباح */}
				<div className='flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-5 w-full border border-gray-200 dark:border-gray-700'>
					<FaGift className='text-secondary dark:text-cyan-400 mb-3 text-2xl' />
					<p className='text-xl font-bold'>53 ريال</p>
					<p className='text-gray-500 dark:text-gray-400 text-sm'>
						إجمالي الأرباح
					</p>
				</div>

				{/* إجمالي الإحالات */}
				<div className='flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-5 w-full border border-gray-200 dark:border-gray-700'>
					<FaUsers className='text-accent dark:text-blue-400 mb-3 text-2xl' />
					<p className='text-xl font-bold'>9</p>
					<p className='text-gray-500 dark:text-gray-400 text-sm'>
						إجمالي الإحالات
					</p>
				</div>

				{/* باقة المستخدم */}
				<div className='flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-5 w-full border border-gray-200 dark:border-gray-700'>
					<FaPlayCircle className='text-primary dark:text-darkprimary mb-3 text-2xl' />
					<p className='text-xl font-bold'>ذهبية</p>
					<p className='text-gray-500 dark:text-gray-400 text-sm'>
						باقة المستخدم
					</p>
				</div>
			</div>

			{/* Actions */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
				{/* تطوير الباقة */}
				<div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-lg transition'>
					<h2 className='font-bold mb-2 text-lg'>تطوير الباقة</h2>
					<p className='text-gray-500 dark:text-gray-400 text-sm mb-4'>
						اكتشف الباقات المتاحة للترقية
					</p>
					<button className='bg-primary dark:bg-darkprimary hover:opacity-90 text-white rounded-lg py-2 transition'>
						ابدأ الآن
					</button>
				</div>

				{/* شجرة الأجيال */}
				<div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-lg transition'>
					<h2 className='font-bold mb-2 text-lg'>شجرة الأجيال</h2>
					<p className='text-gray-500 dark:text-gray-400 text-sm mb-4'>
						تابع الأشخاص المحالين من خلالك
					</p>
					<button className='bg-secondary dark:bg-cyan-500 hover:opacity-90 text-white rounded-lg py-2 transition'>
						ابدأ الآن
					</button>
				</div>

				{/* مشاهدة الفيديوهات */}
				<div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-lg transition'>
					<h2 className='font-bold mb-2 text-lg'>مشاهدة الفيديوهات</h2>
					<p className='text-gray-500 dark:text-gray-400 text-sm mb-4'>
						تابع مسيرة التعلم مع مكتبة الفيديوهات
					</p>
					<button className='bg-accent dark:bg-blue-500 hover:opacity-90 text-white rounded-lg py-2 flex items-center justify-center gap-2 transition'>
						<FaPlayCircle size={18} /> ابدأ الآن
					</button>
				</div>
			</div>

			{/* Recent Activities */}
			<div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700'>
				<h2 className='font-bold mb-4 text-lg'>النشاطات الأخيرة</h2>

				<div className='flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 py-3'>
					<span className='text-green-500'>✔️</span>
					<div>
						<p className='text-sm'>تم مشاهدة فيديو "أساسيات التسويق الرقمي"</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>
							منذ ساعتين
						</p>
					</div>
				</div>

				<div className='flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 py-3'>
					<span className='text-blue-400'>👤</span>
					<div>
						<p className='text-sm'>
							انضم عضو جديد من خلال رمز الإحالة الخاص بك
						</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>أمس</p>
					</div>
				</div>

				<div className='flex items-center gap-3 py-3'>
					<span className='text-yellow-400'>⭐</span>
					<div>
						<p className='text-sm'>تم ترقيتك إلى مستوى الباقة الذهبية</p>
						<p className='text-xs text-gray-500 dark:text-gray-400'>
							منذ 3 أيام
						</p>
					</div>
				</div>
			</div>

			{/* Referral Code */}
			<div className='bg-gradient-to-r from-primary to-secondary dark:from-darkprimary dark:to-cyan-600 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-center text-white shadow-md'>
				<span className='font-bold text-lg'>كود الإحالة الخاص بك</span>
				<div className='flex items-center gap-3 mt-3 md:mt-0'>
					<span className='bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-1 rounded-lg shadow font-mono'>
						AHM123
					</span>
					<button className='flex items-center gap-1 text-sm bg-gray-200 dark:bg-gray-600 hover:opacity-80 px-3 py-1 rounded-lg transition text-gray-900 dark:text-gray-100'>
						<FaCopy size={14} /> نسخ الكود
					</button>
				</div>
			</div>
		</main>
	);
}
