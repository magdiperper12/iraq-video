import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import BackToTopButton from '../components/theme/BackToTopButton';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	metadataBase: new URL('https://winlink.com'),
	title: 'WinLink | شاهد الفيديوهات وابدأ رحلتك للربح',
	description:
		'WinLink منصة ربحية مبتكرة — شاهد الفيديوهات، شارك روابطك، وابنِ شبكة أجيالك حتى 5 مستويات. استثمر في الباقات المناسبة لك وابدأ في تحقيق دخل إضافي بسهولة.',
	openGraph: {
		title: 'WinLink | شاهد، شارك، واربح',
		description:
			'WinLink هي منصة رقمية تجمع بين الترفيه والربح. من خلال مشاهدة الفيديوهات وتفعيل الباقات يمكنك بناء شجرة أجيال حتى الجيل الخامس وزيادة أرباحك.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://winlink.com/',
		images: [
			{
				url: 'https://winlink.com/og-image.png',
				alt: 'WinLink - منصة الربح الذكية',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'WinLink | شاهد، شارك، واربح',
		description:
			'منصة WinLink تقدم لك تجربة فريدة: شاهد الفيديوهات، استثمر في الباقات، وابنِ شبكة أجيال تحقق لك دخل متزايد بسهولة وأمان.',
		images: ['/og-image.png'],
	},
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon.ico',
		apple: '/favicon.png',
		other: {
			rel: 'manifest',
			url: '/manifest.json',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ar'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='WinLink Team'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='application-name'
					content='WinLink - منصة الربح'
				/>
				<meta
					name='image'
					content='https://winlink.com/og-image.png'
				/>
				<link
					rel='canonical'
					href='https://winlink.com/'
				/>

				{/* Favicon */}
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon.png'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
					type='image/x-icon'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>

				{/* Structured Data */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								'@context': 'https://schema.org',
								'@type': 'Organization',
								name: 'WinLink - منصة الربح الذكية',
								url: 'https://winlink.com/',
								logo: 'https://winlink.com/logo.png',
								sameAs: [
									'https://www.facebook.com/winlink',
									'https://t.me/winlink',
								],
								description:
									'WinLink هي منصة ربحية مبتكرة تجمع بين مشاهدة الفيديوهات، تفعيل الباقات، ونظام الأجيال حتى 5 مستويات لتحقيق دخل إضافي.',
								contactPoint: {
									'@type': 'ContactPoint',
									email: 'support@winlink.com',
									contactType: 'خدمة العملاء',
									areaServed: 'EG',
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'WebSite',
								url: 'https://winlink.com/',
								name: 'WinLink | شاهد، شارك، واربح',
								potentialAction: {
									'@type': 'SearchAction',
									target: 'https://winlink.com/search?q={search_term_string}',
									'query-input': 'required name=search_term_string',
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'ImageObject',
								contentUrl: 'https://winlink.com/og-image.png',
								url: 'https://winlink.com/og-image.png',
								width: 800,
								height: 600,
								name: 'شعار WinLink',
							},
						]),
					}}
				/>
			</head>

			<body
				className={`bg-gradient-to-r relative ${roboto.className} text-darkprimary dark:text-primary custom-scroll overflow-x-hidden bg-primary dark:bg-darkprimary`}>
				<div className='fixed top-0 z-50'>
					<Header />
				</div>
				<div className='pt-20'> {children}</div>

				<Footer />
				<BackToTopButton />
			</body>
		</html>
	);
}
