import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function proxy(req: NextRequest) {
	// 💻 ローカル開発中（npm run dev）はパスワードなしでOKにする！
	// （もしローカルでもテストしたいなら、この3行を一時的に消してね）
	if (process.env.NODE_ENV === 'development') {
		return NextResponse.next();
	}

	// ここから本番用のロック処理！🗝️
	const basicAuth = req.headers.get('authorization');

	if (basicAuth) {
		const authValue = basicAuth.split(' ')[1];
		const [user, pwd] = atob(authValue).split(':');

		// Vercelで設定した環境変数と合ってるかチェック！
		if (
			user === process.env.BASIC_AUTH_USER &&
			pwd === process.env.BASIC_AUTH_PASSWORD
		) {
			return NextResponse.next();
		}
	}

	// 認証されてないなら、パスワード入力画面を出す
	return new NextResponse('Auth Required.', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="Secure Area"',
		},
	});
}
