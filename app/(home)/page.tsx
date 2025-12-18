import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Callout } from 'fumadocs-ui/components/callout';
import {
	Calendar,
	ShoppingCart,
	CalendarDays,
	Settings,
	PenTool,
	AlertTriangle,
	Phone,
	Search,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
	return (
		<main className="container mx-auto py-12 px-4">
			{/* ヒーローセクション */}
			<div className="text-center mb-16 space-y-4">
				<h1 className="text-4xl font-extrabold text-fd-foreground sm:text-5xl leading-tight">
					🍞 {SITE_CONFIG.department}
					<br />
					{SITE_CONFIG.manualName}
				</h1>
				<p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed whitespace-pre-wrap">
					{SITE_CONFIG.heroDescription}
				</p>
				<div className="flex justify-center gap-4 mt-8">
					<Link
						href="/docs"
						className="inline-flex items-center justify-center rounded-full bg-fd-primary px-8 py-3 text-sm font-bold text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors shadow-lg"
					>
						マニュアルを閲覧する 📖
					</Link>
				</div>
			</div>

			{/* 業務メニュー一覧 */}
			<div className="mb-20">
				<h2 className="text-2xl font-bold mb-8 text-center border-b-2 border-dotted border-fd-border pb-2 inline-block w-full">
					🚀 業務メニュー
				</h2>
				<Cards>
					<Card
						icon={<Calendar />}
						href="/docs/01_daily"
						title="01. 毎日の業務"
					>
						日替わり表の印刷・納品記録の保存など、日次ルーティン業務の手順
					</Card>
					<Card
						icon={<ShoppingCart />}
						href="/docs/02_weekly"
						title="02. 毎週の業務"
					>
						消耗品の発注（火・木）、土曜日のデータ更新作業など
					</Card>
					<Card
						icon={<CalendarDays />}
						href="/docs/03_monthly"
						title="03. 月末・月初の業務"
					>
						棚卸し、シフト表作成、勤怠管理などの月次業務
					</Card>
					<Card
						icon={<PenTool />}
						href="/docs/04_ad_hoc"
						title="04. マスタ登録・変更"
					>
						新商品の登録、価格変更、終売処理などのマスタメンテナンス（※バックアップ必須）
					</Card>
					<Card
						icon={<Settings />}
						href="/docs/99_system_specs"
						title="99. 管理者向け情報"
					>
						システム構成図、VBAコード解説、トラブルシューティングガイド
					</Card>
				</Cards>
			</div>

			{/* 運用ルールと便利機能 (Calloutに変更) */}
			<div className="grid md:grid-cols-2 gap-6 mb-20">
				<Callout
					title="作業前のバックアップ取得"
					icon={<AlertTriangle />}
					type="error"
				>
					マスタデータ（CB商品データ等）に変更を加える際は、作業開始前に必ず{' '}
					<code>BackUp</code> フォルダへ現行ファイルのコピーを保存してください。
				</Callout>

				<Callout title="検索機能の活用" icon={<Search />} type="info">
					画面右上の検索バー（ショートカット: <code>Ctrl + K</code>
					）より、キーワード（例：「新商品」「発注」）による全文検索が可能です。
				</Callout>
			</div>

			{/* 問い合わせ先 */}
			<div className="text-center p-10 rounded-3xl bg-fd-secondary/30">
				<h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
					<Phone className="w-6 h-6" /> お問い合わせ / トラブルシューティング
				</h2>
				<p className="mb-2">
					マニュアルを参照しても解決しない場合や、システムエラーが発生した場合は下記担当者へご連絡ください。
				</p>
				<p className="font-bold text-lg mt-2">
					システム担当: {SITE_CONFIG.admin}
				</p>
				<p className="text-sm text-fd-muted-foreground mt-4">
					※エラー発生時は、画面の写真を添付の上ご報告いただけますと幸いです。
				</p>
			</div>
		</main>
	);
}
