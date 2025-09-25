'use client';

import {
	FaUser,
	FaEnvelope,
	FaPhone,
	FaCheckCircle,
	FaCopy,
	FaSignOutAlt,
	FaCalendarAlt,
	FaVideo,
	FaUsers,
	FaMedal,
} from 'react-icons/fa';

export default function ProfilePage() {
	return (
		<main className='p-6 min-h-screen flex justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
			<div className='w-full max-w-4xl space-y-6'>
				{/* Header */}
				<div className='text-center'>
					<h1 className='text-2xl font-bold flex items-center justify-center gap-2 text-gray-900 dark:text-white'>
						<FaUser /> الملف الشخصي
					</h1>
					<p className='text-gray-500 dark:text-gray-400 text-sm'>
						لإدارة بطاقتك الشخصية وإعدادات الحساب
					</p>
				</div>

				{/* Personal Info */}
				<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6 transition-colors'>
					<div className='flex justify-between items-center mb-4'>
						<h2 className='font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100'>
							<FaUser /> المعلومات الشخصية
						</h2>
						<button className='text-sm bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700'>
							تعديل
						</button>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='text-sm text-gray-500 dark:text-gray-400'>
								الاسم الكامل
							</label>
							<p className='font-medium text-gray-900 dark:text-gray-100'>
								أحمد محمد
							</p>
						</div>
						<div>
							<label className='text-sm text-gray-500 dark:text-gray-400'>
								البريد الإلكتروني
							</label>
							<p className='font-medium flex items-center gap-2 text-gray-900 dark:text-gray-100'>
								<FaEnvelope /> ahmed@example.com
							</p>
						</div>
						<div>
							<label className='text-sm text-gray-500 dark:text-gray-400'>
								رقم الجوال
							</label>
							<p className='font-medium flex items-center gap-2 text-gray-900 dark:text-gray-100'>
								<FaPhone /> 966501234567
							</p>
						</div>
						<div>
							<label className='text-sm text-gray-500 dark:text-gray-400'>
								حالة الحساب
							</label>
							<p className='flex items-center gap-1 text-green-600 dark:text-green-400 font-medium'>
								<FaCheckCircle /> نشط
							</p>
						</div>
						<div>
							<label className='text-sm text-gray-500 dark:text-gray-400'>
								كود الإحالة الخاص بك
							</label>
							<div className='flex items-center gap-2'>
								<span className='bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-lg shadow'>
									AHM123
								</span>
								<button className='text-indigo-600 dark:text-indigo-400 flex items-center gap-1 text-sm'>
									<FaCopy /> نسخ
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Account Stats */}
				<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
					<h2 className='font-bold mb-4 text-gray-900 dark:text-gray-100'>
						إحصاءات الحساب
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						<div className='text-center bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4'>
							<FaMedal className='mx-auto text-purple-600 dark:text-purple-400 text-xl mb-2' />
							<p className='font-bold text-lg text-gray-900 dark:text-gray-100'>
								53
							</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								نقاط المكافآت
							</p>
						</div>
						<div className='text-center bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4'>
							<FaCalendarAlt className='mx-auto text-indigo-600 dark:text-indigo-400 text-xl mb-2' />
							<p className='font-bold text-lg text-gray-900 dark:text-gray-100'>
								633
							</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								أيام العضوية
							</p>
						</div>
						<div className='text-center bg-green-50 dark:bg-green-900/30 rounded-lg p-4'>
							<FaUsers className='mx-auto text-green-600 dark:text-green-400 text-xl mb-2' />
							<p className='font-bold text-lg text-gray-900 dark:text-gray-100'>
								9
							</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								إجمالي الإحالات
							</p>
						</div>
						<div className='text-center bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4'>
							<FaVideo className='mx-auto text-pink-600 dark:text-pink-400 text-xl mb-2' />
							<p className='font-bold text-lg text-gray-900 dark:text-gray-100'>
								0
							</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								الفيديوهات المشاهدة
							</p>
						</div>
					</div>
				</div>

				{/* Settings */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
						<h2 className='font-bold mb-4 text-gray-900 dark:text-gray-100'>
							أمان الحساب
						</h2>
						<div className='space-y-2'>
							<button className='w-full border rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'>
								تغيير كلمة المرور
							</button>
							<button className='w-full border rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'>
								تفعيل المصادقة الثنائية
							</button>
							<button className='w-full border rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'>
								تحديث البيانات
							</button>
						</div>
					</div>

					<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
						<h2 className='font-bold mb-4 text-gray-900 dark:text-gray-100'>
							إعدادات الحساب
						</h2>
						<div className='space-y-2'>
							<button className='w-full border rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'>
								إشعارات البريد
							</button>
							<button className='w-full border rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'>
								إعدادات الخصوصية
							</button>
							<button className='w-full border rounded-lg p-2 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'>
								تفضيلات العرض
							</button>
						</div>
					</div>
				</div>

				{/* Danger Zone */}
				<div className='bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl p-6'>
					<h2 className='font-bold text-red-600 dark:text-red-400 mb-2'>
						منطقة الخطر
					</h2>
					<p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
						تسجيل الخروج من الحساب أو حذف الحساب نهائياً
					</p>
					<button className='bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2'>
						<FaSignOutAlt /> تسجيل الخروج
					</button>
				</div>

				{/* Support */}
				<div className='bg-white dark:bg-gray-800 shadow rounded-xl p-6'>
					<h2 className='font-bold mb-2 text-gray-900 dark:text-gray-100'>
						تحتاج مساعدة؟
					</h2>
					<p className='text-sm text-gray-600 dark:text-gray-400'>
						تواصل مع فريق الدعم الخاص بنا عبر البريد الإلكتروني أو الهاتف
					</p>
					<div className='flex flex-col md:flex-row gap-2 mt-3'>
						<span className='bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-lg'>
							support@example.com
						</span>
						<span className='bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-lg'>
							0123456789
						</span>
					</div>
				</div>
			</div>
		</main>
	);
}
