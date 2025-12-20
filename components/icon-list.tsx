import React, { ReactNode, isValidElement } from 'react';
import { Check, Star, Zap, MessageCircleQuestion } from 'lucide-react';

const ICONS = {
	check: Check,
	star: Star,
	zap: Zap,
	question: MessageCircleQuestion,
};

type IconListProps = {
	children: ReactNode;
	icon?: keyof typeof ICONS;
	color?: string;
};

// propsにchildrenが含まれている型を定義
type PropsWithChildren = {
	children: ReactNode;
};

export function IconList({
	children,
	icon = 'check',
	color = 'text-blue-500',
}: IconListProps) {
	const IconComponent = ICONS[icon];

	// 1. ulタグを剥がして、中身をフラットにする
	const rawItems = React.Children.toArray(children).flatMap((child) => {
		if (isValidElement(child) && child.type === 'ul') {
			const ulProps = child.props as PropsWithChildren;
			return React.Children.toArray(ulProps.children);
		}
		return child;
	});

	// 🛠 ここが修正ポイント‼️
	// 2. 「改行」や「空白」だけのテキストノード（お化け👻）を除去する！
	const items = rawItems.filter((child) => {
		if (typeof child === 'string' && child.trim().length === 0) {
			return false; // 空っぽならリストに入れない！
		}
		return true;
	});

	return (
		<ul className="flex flex-col gap-3 my-4 pl-0 list-none">
			{items.map((child, index) => {
				let content = child;

				// liタグの場合も中身を取り出す
				if (isValidElement(child) && child.type === 'li') {
					const liProps = child.props as PropsWithChildren;
					content = liProps.children;
				}

				return (
					<li key={index} className="flex items-start gap-3">
						<div className={`mt-1 shrink-0 ${color}`}>
							<IconComponent size={20} strokeWidth={2.5} />
						</div>
						<div className="text-gray-700 dark:text-gray-300 leading-7">
							{content}
						</div>
					</li>
				);
			})}
		</ul>
	);
}
