import React, { ReactNode } from 'react';
import {
	Check,
	Star,
	Zap,
	MessageCircleQuestion,
	LucideIcon,
	PencilLine,
	FileCheckCorner,
} from 'lucide-react';

const ICONS = {
	check: Check,
	star: Star,
	zap: Zap,
	question: MessageCircleQuestion,
	pen: PencilLine,
	file: FileCheckCorner,
};

// 親: IconListのProps
type IconListProps = {
	children: ReactNode;
	icon?: keyof typeof ICONS;
	color?: string;
};

// 子: ItemのProps
type ItemProps = {
	children: ReactNode;
	icon?: LucideIcon; // 親から自動で渡される
	color?: string; // 親から自動で渡される
};

export function IconList({
	children,
	icon = 'check',
	color = 'text-blue-500',
}: IconListProps) {
	const IconComponent = ICONS[icon];

	// 子供たち（Item）に、一括でアイコンと色を渡してあげる魔法！🧙‍♀️
	const items = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child as React.ReactElement<any>, {
				icon: IconComponent,
				color,
			});
		}
		return child;
	});

	return <ul className="flex flex-col my-4 pl-0 list-none">{items}</ul>;
}

// これが新しい Item コンポーネント！
export function Item({ children, icon: Icon, color }: ItemProps) {
	return (
		<li className="flex items-start gap-2">
			{/* アイコン部分 */}
			<div className={`mt-1 shrink-0 ${color}`}>
				{Icon && <Icon size={20} strokeWidth={2.5} />}
			</div>

			{/* コンテンツ部分
				💡 ポイント: [&_ol]:list-decimal などをつけて、
				Tailwindに消されたリストの数字を復活させてるよ！
			*/}
			<div className="flex-1 text-gray-700 dark:text-gray-300 leading-7 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 space-y-2 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
				{children}
			</div>
		</li>
	);
}
