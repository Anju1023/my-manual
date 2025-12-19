import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: '南部センター ベーカリー 業務マニュアル',
		},
		githubUrl: 'https://github.com/Anju1023/my-manual',
		links: [
			{
				icon: <BookIcon />,
				text: 'マニュアル',
				url: '/docs',
			},
		],
	};
}
