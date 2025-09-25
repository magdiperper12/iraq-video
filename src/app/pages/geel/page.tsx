'use client';

import {
	FaUsers,
	FaMoneyBillWave,
	FaGift,
	FaVideo,
	FaCopy,
	FaCommentDots,
} from 'react-icons/fa';
import { MdLeaderboard } from 'react-icons/md';

export default function GenerationsPage() {
	return (
		<main className='p-6 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-6 transition-colors duration-300'>
			{/* Header Stats */}
			<div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
				<div className='bg-orange-500 text-white rounded-xl p-4 text-center'>
					<p className='text-2xl font-bold'>5</p>
					<p className='text-sm'>عدد الفيديوهات</p>
				</div>
				<div className='bg-green-500 text-white rounded-xl p-4 text-center'>
					<p className='text-2xl font-bold'>5</p>
					<p className='text-sm'>المستويات المكتملة</p>
				</div>
				<div className='bg-blue-500 text-white rounded-xl p-4 text-center'>
					<p className='text-2xl font-bold'>9</p>
					<p className='text-sm'>إجمالي الإحالات</p>
				</div>
				<div className='bg-purple-600 text-white rounded-xl p-4 text-center'>
					<p className='text-2xl font-bold'>53.7 ريال</p>
					<p className='text-sm'>إجمالي الأرباح</p>
				</div>
			</div>

			{/* Referral Code */}
			<div className='bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex justify-between items-center transition-colors duration-300'>
				<div>
					<h2 className='font-bold mb-1 dark:text-white'>
						كود الإحالة الخاص بك
					</h2>
					<p className='text-gray-500 dark:text-gray-400 text-sm'>
						شارك هذا الكود مع الأصدقاء للحصول على أرباح إضافية.
					</p>
				</div>
				<div className='flex items-center gap-2'>
					<span className='bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg shadow text-gray-800 dark:text-gray-200'>
						AHM123
					</span>
					<button className='flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium'>
						<FaCopy /> نسخ
					</button>
				</div>
			</div>

			{/* Earnings Details */}
			<div className='bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors duration-300'>
				<h2 className='font-bold mb-4 dark:text-white'>
					تفصيل أرباح المستويات
				</h2>
				<div className='space-y-2'>
					{[
						{ level: 'المستوى 1', amount: '34.8 ريال' },
						{ level: 'المستوى 2', amount: '7.2 ريال' },
						{ level: 'المستوى 3', amount: '6.5 ريال' },
						{ level: 'المستوى 4', amount: '3.2 ريال' },
						{ level: 'المستوى 5', amount: '2 ريال' },
					].map((item, i) => (
						<div
							key={i}
							className='flex justify-between border-b border-gray-200 dark:border-gray-700 last:border-none py-2'>
							<span className='dark:text-gray-200'>{item.level}</span>
							<span className='text-indigo-600 dark:text-indigo-400 font-medium'>
								{item.amount}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Members Table */}
			<div className='bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors duration-300'>
				<h2 className='font-bold mb-4 dark:text-white'>
					الأعضاء المحالين الجدد
				</h2>
				<div className='space-y-3'>
					{[
						{ name: 'أحمد محمد', level: 'المستوى 1', amount: '20' },
						{ name: 'محمد علي', level: 'المستوى 2', amount: '10' },
						{ name: 'يوسف سعيد', level: 'المستوى 3', amount: '6' },
						{ name: 'فاطمة أحمد', level: 'المستوى 1', amount: '20' },
						{ name: 'سارة جمال', level: 'المستوى 2', amount: '15' },
					].map((member, i) => (
						<div
							key={i}
							className='flex justify-between items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow transition'>
							<div className='flex items-center gap-2'>
								<FaUsers className='text-indigo-500' />
								<div>
									<p className='font-medium dark:text-white'>{member.name}</p>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										{member.level}
									</p>
								</div>
							</div>
							<span className='text-green-600 dark:text-green-400 font-bold'>
								{member.amount} ريال
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Footer - Notes and Tasks */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* Notes */}
				<div className='bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors duration-300'>
					<h2 className='font-bold mb-2 dark:text-white'>ملاحظات</h2>
					<p className='text-sm text-gray-600 dark:text-gray-400'>
						✦ اربح مكافآت أكثر عند مشاركة الكود مع أصدقائك. ✦ العمولات موزعة على
						5 مستويات (12% - 6% - 3% - 2% - 1%). ✦ قم بمتابعة إحصائياتك بشكل
						دوري.
					</p>
				</div>

				{/* Tasks */}
				<div className='bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors duration-300'>
					<h2 className='font-bold mb-2 dark:text-white'>قائمة المهام</h2>
					<div className='space-y-2'>
						{[
							'مشاهدة فيديو - أساسيات التسويق',
							'مشاهدة فيديو - استراتيجيات الإعلان',
							'مشاهدة فيديو - إدارة الحملات',
							'مشاهدة فيديو - إعلانات فيسبوك',
							'مشاهدة فيديو - تحسين محركات البحث',
						].map((task, i) => (
							<div
								key={i}
								className='flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-none'>
								<span className='text-sm dark:text-gray-300'>{task}</span>
								<button className='text-indigo-600 dark:text-indigo-400 font-medium text-sm'>
									إبدأ
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
