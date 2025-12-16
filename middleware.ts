import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: ['/:path*'], // 全てのページに鍵をかける設定
};

export function middleware(req: NextRequest) {
	// 開発環境（ローカル）ではパスワードなしでOKにする？
	// もしローカルでもパスワードかけたければ、このif文を消してね！
	if (process.env.NODE_ENV === 'development') {
		return NextResponse.next();
	}

	// ベーシック認証の情報を取得
	const basicAuth = req.headers.get('authorization');

	if (basicAuth) {
		const authValue = basicAuth.split(' ')[1];
		const [user, pwd] = atob(authValue).split(':');

		// 🔐 ここで ID と パスワード をチェック！（環境変数を使うよ）
		if (
			user === process.env.BASIC_AUTH_USER &&
			pwd === process.env.BASIC_AUTH_PASSWORD
		) {
			return NextResponse.next();
		}
	}

	// 認証失敗（またはまだ入力してない）時は、入力画面を出す
	return new NextResponse('Auth Required.', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="Secure Area"',
		},
	});
}
