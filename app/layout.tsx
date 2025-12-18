import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | 南部センターベーカリー業務マニュアル',
		default: '南部センターベーカリー業務マニュアル',
	},
	description: '南部センターベーカリーの業務マニュアルサイトです。',
};

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="ja" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
