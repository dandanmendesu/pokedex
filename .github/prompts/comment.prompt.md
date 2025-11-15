—
mode: ‘ask’
model: Claude Sonnet 4
description: ‘Perform a REST API security review’
—
REST API のセキュリティレビューを実施し、対処すべきセキュリティ問題の TODO リストを提供してください。
– すべてのエンドポイントが認証と認可によって保護されていることを徹底する
– すべてのユーザー入力を検証し、データをサニタイズする
– レートリミットとスロットリングを実装する
– セキュリティイベントのロギングとモニタリングを実装する
TODO リストは、優先度と問題の種類でグループ化し、Markdown 形式で返してください。
