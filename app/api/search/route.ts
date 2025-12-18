import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/japanese';

export const { GET } = createFromSource(source, {
	// 💡 ポイント：localeMap を使わずに、直接設定を書く！
	components: {
		tokenizer: createTokenizer(),
	},
	search: {
		threshold: 0,
		tolerance: 0, // 0にすると「あいまい検索」が無効になって、正確な日本語検索ができるよ！
	},
});
