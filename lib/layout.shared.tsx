import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';
import { SITE_CONFIG } from './constants';

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: SITE_CONFIG.title,
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
