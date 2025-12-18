import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import { Metadata, Viewport } from 'next';

const inter = Inter({
	subsets: ['latin'],
});

const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | 南部センターベーカリー業務マニュアル',
		default: '南部センターベーカリー業務マニュアル',
	},
	description: '南部センターベーカリーの業務マニュアルサイトです。',
};

export const viewport: Viewport = {
	themeColor: '#c88144',
};

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="ja"
			className={`${inter.className} ${notoSansJP.className}`}
			suppressHydrationWarning
		>
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
