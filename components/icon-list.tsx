import React, { ReactNode } from 'react';
import { Check, Star, Zap, MessageCircleQuestion } from 'lucide-react';

// アイコンの定義はそのまま
const ICONS = {
	check: Check,
	star: Star,
	zap: Zap,
	question: MessageCircleQuestion,
};

// 親のリストコンポーネント
export function IconList({
	children,
	icon = 'check',
	color = 'text-blue-500',
}: {
	children: ReactNode;
	icon?: keyof typeof ICONS;
	color?: string;
}) {
	const IconComponent = ICONS[icon];

	// 子要素（Item）にアイコンと色を渡すために、mapする
	const items = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			// cloneElementを使って、子供にpropsを注入する魔法！🧙‍♀️
			return React.cloneElement(child as React.ReactElement<any>, {
				icon: IconComponent,
				color,
			});
		}
		return child;
	});

	return <ul className="flex flex-col my-4 pl-0 list-none">{items}</ul>;
}

// 子のアイテムコンポーネント（これを作るのがポイント‼️）
export function Item({ children, icon: Icon, color }: any) {
	return (
		<li className="flex items-start gap-1">
			{/* アイコンを表示 */}
			<div className={`mt-1 shrink-0 ${color}`}>
				{Icon && <Icon size={20} strokeWidth={2.5} />}
			</div>
			<div className="text-gray-700 dark:text-gray-300 leading-7">
				{children}
			</div>
		</li>
	);
}
