// app/pricing/page.tsx
'use client';

import { FaCheckCircle } from 'react-icons/fa';

const PricingPage = () => {
	const plans = [
		{
			title: 'الباقة الأساسية',
			price: '99 ريال',
			oldPrice: '',
			description: 'الباقة المثالية لمن يريد تحسين مستوى التحصيل الدراسي.',
			features: [
				'الوصول لمحتوى تعليمي أساسي',
				'أسئلة تدريبية',
				'اختبارات قصيرة',
				'دعم فني واستشارات',
			],
			button: 'اشترك الآن',
			popular: false,
		},
		{
			title: 'الباقة المتميزة',
			price: '199 ريال',
			oldPrice: '249 ريال',
			description: 'الوصول الشامل للطلاب مع تدريبات إضافية شاملة.',
			features: [
				'الوصول لجميع المحتويات (١٥٠+)',
				'اختبارات شاملة',
				'خطة تدريبية',
				'دعم فني واستشارات',
			],
			button: 'اشترك الآن',
			popular: true,
		},
		{
			title: 'باقة VIP',
			price: '399 ريال',
			oldPrice: '499 ريال',
			description: 'لمن يبحث عن تجربة تعليمية متميزة وشاملة مع متابعة شخصية.',
			features: [
				'الوصول لجميع المحتويات',
				'اختبارات شاملة',
				'خطة تدريبية متقدمة',
				'جلسات متابعة شخصية',
				'دعم فني واستشارات',
			],
			button: 'اشترك الآن',
			popular: false,
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12 px-4 transition-colors duration-300'>
			<h1 className='text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white'>
				اختر الباقة المناسبة لك
			</h1>
			<p className='text-gray-500 dark:text-gray-400 text-center mb-10'>
				باقات تعليمية مصممة لتناسب جميع المستويات والاحتياجات
			</p>

			{/* Pricing Cards */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl'>
				{plans.map((plan, i) => (
					<div
						key={i}
						className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col border transition hover:shadow-lg ${
							plan.popular
								? 'border-indigo-500 scale-105'
								: 'border-gray-200 dark:border-gray-700'
						}`}>
						{plan.popular && (
							<span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full'>
								الأكثر شعبية
							</span>
						)}
						<h2 className='text-xl font-semibold text-center text-gray-900 dark:text-white'>
							{plan.title}
						</h2>
						<div className='text-center my-4'>
							{plan.oldPrice && (
								<span className='text-gray-400 line-through text-sm mr-2'>
									{plan.oldPrice}
								</span>
							)}
							<span className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>
								{plan.price}
							</span>
						</div>
						<p className='text-gray-600 dark:text-gray-300 text-center mb-4'>
							{plan.description}
						</p>

						<ul className='flex-1 space-y-2 text-sm text-gray-700 dark:text-gray-200'>
							{plan.features.map((feature, idx) => (
								<li
									key={idx}
									className='flex items-center'>
									<FaCheckCircle className='text-green-500 dark:text-green-400 ml-2' />
									{feature}
								</li>
							))}
						</ul>

						<button className='mt-6 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-md py-2 transition'>
							{plan.button}
						</button>
					</div>
				))}
			</div>

			{/* FAQ */}
			<div className='max-w-4xl w-full mt-12'>
				<h2 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
					الأسئلة الشائعة
				</h2>
				<div className='space-y-3'>
					{[
						'هل يمكنني تغيير الباقة لاحقاً؟',
						'ما طرق الدفع المتاحة؟',
						'هل يوجد خصم للمدارس؟',
						'كيف يتم تفعيل الباقة؟',
					].map((q, i) => (
						<details
							key={i}
							className='border rounded-md p-3 bg-white dark:bg-gray-800 dark:border-gray-700'>
							<summary className='cursor-pointer font-medium text-gray-900 dark:text-white'>
								{q}
							</summary>
							<p className='mt-2 text-gray-600 dark:text-gray-300 text-sm'>
								سيتم عرض الإجابة الخاصة بـ "{q}" هنا.
							</p>
						</details>
					))}
				</div>
			</div>
		</div>
	);
};

export default PricingPage;
