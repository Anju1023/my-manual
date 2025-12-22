import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import {
	Calendar,
	ShoppingCart,
	CalendarDays,
	Settings,
	PenTool,
	AlertTriangle,
	Phone,
	Search,
	BookOpen,
	MonitorCog,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
	return (
		// 色指定を削除！代わりに bg-fd-background 等が自動適用されます
		<main className="min-h-screen bg-fd-background text-fd-foreground py-8 px-4 md:py-16 md:px-8 font-medium">
			{/* ヒーローセクション */}
			<div className="text-left md:text-center mb-12 md:mb-24 space-y-6 max-w-5xl mx-auto">
				<h1 className="text-3xl font-extrabold text-fd-foreground sm:text-5xl lg:text-6xl leading-tight tracking-tight drop-shadow-sm">
					{SITE_CONFIG.department}
					<br className="hidden sm:block" />
					<span className="block mt-2 text-fd-primary/90">
						{SITE_CONFIG.manualName}
					</span>
				</h1>

				<p className="text-base sm:text-lg text-fd-muted-foreground max-w-2xl md:mx-auto leading-relaxed whitespace-pre-wrap">
					{SITE_CONFIG.heroDescription}
				</p>

				<div className="flex justify-start md:justify-center gap-4 mt-10">
					<Link
						href="/docs"
						className="group inline-flex items-center justify-center gap-2 rounded-3xl bg-fd-primary px-10 py-5 text-base sm:text-lg font-bold text-fd-primary-foreground hover:bg-fd-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl border-b-4 border-fd-primary/50 active:border-b-0 active:translate-y-1"
					>
						マニュアルを閲覧する{' '}
						<BookOpen className="inline w-[1.2em] h-[1.2em] group-hover:rotate-12 transition-transform" />
					</Link>
				</div>
			</div>

			{/* 業務メニュー一覧 */}
			<div className="mb-16 md:mb-24 max-w-6xl mx-auto">
				<h2 className="flex items-center justify-start md:justify-center gap-3 text-xl sm:text-2xl font-bold mb-10 text-fd-foreground">
					<MonitorCog className="inline w-[1.4em] h-[1.4em] text-fd-primary" />
					<span className="border-b-4 border-fd-primary/20 pb-1 px-2">
						業務メニュー
					</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							icon: <Calendar className="text-fd-primary" />,
							href: '/docs/01_daily',
							title: '01. 毎日の業務',
							children:
								'日替わり表の印刷・納品記録の保存など、日次ルーティン業務の手順',
						},
						{
							icon: (
								<ShoppingCart className="text-green-600 dark:text-green-400" />
							),
							href: '/docs/02_weekly',
							title: '02. 毎週の業務',
							children: '消耗品の発注（火・木）、土曜日のデータ更新作業など',
						},
						{
							icon: <CalendarDays className="text-red-500 dark:text-red-400" />,
							href: '/docs/03_monthly',
							title: '03. 月末・月初の業務',
							children: '棚卸し、シフト表作成、勤怠管理などの月次業務',
						},
						{
							icon: (
								<PenTool className="text-purple-500 dark:text-purple-400" />
							),
							href: '/docs/04_ad_hoc',
							title: '04. マスタ登録・変更',
							children:
								'新商品の登録、価格変更、終売処理などのマスタメンテナンス（※バックアップ必須）',
						},
						{
							icon: <Settings className="text-fd-muted-foreground" />,
							href: '/docs/99_system_specs',
							title: '99. 管理者向け情報',
							children:
								'システム構成図、VBAコード解説、トラブルシューティングガイド',
						},
					].map((item, idx) => (
						<Link key={idx} href={item.href} className="block group h-full">
							{/* bg-white ではなく bg-fd-card に変更 */}
							<div className="h-full bg-fd-card rounded-3xl p-6 shadow-sm border-2 border-transparent hover:border-fd-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
								<div className="absolute -right-4 -top-4 w-24 h-24 bg-fd-accent rounded-full z-0 group-hover:scale-150 transition-transform duration-500 ease-in-out opacity-50" />

								<div className="relative z-10 flex flex-col gap-4">
									<div className="w-12 h-12 rounded-2xl bg-fd-background flex items-center justify-center shadow-inner">
										{item.icon}
									</div>
									<div>
										<h3 className="font-bold text-lg mb-2 text-fd-foreground group-hover:text-fd-primary transition-colors">
											{item.title}
										</h3>
										<p className="text-sm text-fd-muted-foreground leading-relaxed">
											{item.children}
										</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* 運用ルールと便利機能 */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-16 md:mb-24 max-w-6xl mx-auto">
				<div className="flex flex-col gap-3 bg-red-50/50 dark:bg-red-900/10 rounded-3xl p-6 border border-red-100 dark:border-red-900/30 shadow-sm">
					<div className="flex items-center gap-3 text-red-600 dark:text-red-400 font-bold text-lg">
						<AlertTriangle className="w-6 h-6" />
						<h3>作業前のバックアップ取得</h3>
					</div>
					<p className="text-fd-foreground leading-relaxed">
						マスタデータ（CB商品データ等）に変更を加える際は、作業開始前に必ず{' '}
						<code className="font-bold bg-fd-background text-red-500 px-2 py-1 rounded-lg border border-red-100 dark:border-red-900/30 shadow-sm mx-1">
							BackUp
						</code>{' '}
						フォルダへ現行ファイルのコピーを保存してください。
					</p>
				</div>

				<div className="flex flex-col gap-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl p-6 border border-blue-100 dark:border-blue-900/30 shadow-sm">
					<div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-lg">
						<Search className="w-6 h-6" />
						<h3>検索機能の活用</h3>
					</div>
					<p className="text-fd-foreground leading-relaxed">
						画面右上の検索バー（ショートカット:{' '}
						<code className="font-bold bg-fd-background text-blue-500 px-2 py-1 rounded-lg border border-blue-100 dark:border-blue-900/30 shadow-sm mx-1">
							Ctrl + K
						</code>
						）より、キーワード（例：「新商品」「発注」）による全文検索が可能です。
					</p>
				</div>
			</div>

			{/* 問い合わせ先 */}
			<div className="max-w-3xl mx-auto">
				<div className="text-left md:text-center p-8 md:p-12 rounded-3xl bg-fd-card border-2 border-dashed border-fd-border shadow-sm relative">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-fd-accent -rotate-2 shadow-sm backdrop-blur-sm" />

					<h2 className="text-lg sm:text-xl font-bold mb-6 flex flex-col sm:flex-row items-start md:items-center justify-start md:justify-center gap-3 text-fd-foreground">
						<div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
							<Phone className="w-[1.2em] h-[1.2em] text-blue-500" />
						</div>
						<span>お問い合わせ / トラブルシューティング</span>
					</h2>

					<div className="space-y-5 text-sm sm:text-base text-fd-muted-foreground">
						<p>
							マニュアルを参照しても解決しない場合や、
							<br className="hidden sm:block" />
							システムエラーが発生した場合は下記担当者へご連絡ください。
						</p>
						<div className="py-4">
							<p className="font-bold text-xl sm:text-2xl text-fd-primary tracking-wider">
								システム担当: {SITE_CONFIG.admin}
							</p>
						</div>
						<p className="text-xs sm:text-sm text-fd-muted-foreground bg-fd-muted inline-block px-6 py-3 rounded-2xl border border-fd-border/50">
							※エラー発生時は、画面の写真を添付の上ご報告いただけますと幸いです。
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
