import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		img: (props) => <ImageZoom {...(props as any)} className="rounded-lg" />,
		pre: ({ ref: _ref, ...props }) => (
			<CodeBlock keepBackground {...props}>
				<Pre>{props.children}</Pre>
			</CodeBlock>
		),
		...components,
	};
}
