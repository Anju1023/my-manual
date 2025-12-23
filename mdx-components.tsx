import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

// ⚠️ PDF化が終わったらここを false に戻してね！
const isPrinting = true;

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	// ここで「開きっぱなしのアコーディオン」の見た目を作るよ！
	const PrintingAccordion: typeof Accordion = (props) => (
		<div
			style={{
				border: '1px solid #e5e7eb',
				padding: '1rem',
				borderRadius: '0.5rem',
				marginBottom: '1rem',
			}}
		>
			<h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
				{props.title}
			</h3>
			{props.children}
		</div>
	);

	return {
		...defaultMdxComponents,
		// ここがポイント！ isPrinting が true なら、上の開きっぱなし版を使う！
		Accordion: isPrinting ? PrintingAccordion : Accordion,
		Accordions: isPrinting ? 'div' : Accordions,

		// あんじゅが元々書いてた設定もそのまま残してるよ！
		img: (props) => <ImageZoom {...(props as any)} className="rounded-lg" />,
		pre: ({ ref: _ref, ...props }) => (
			<CodeBlock keepBackground {...props}>
				<Pre>{props.children}</Pre>
			</CodeBlock>
		),
		...components,
	};
}
