import { source } from '@/lib/source';
import { createTokenizer } from '@orama/tokenizers/japanese';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
	// https://docs.orama.com/docs/orama-js/supported-languages
	search: {
		locale: 'ja',
	},
	configuration: {
		components: {
			tokenizer: createTokenizer(),
		},
	},
});
