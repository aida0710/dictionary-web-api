# Dictionary Web Api
## About
googleの辞書APIって利用しすぎるとお金掛かりますよね。だったら自分で作ればいいじゃないか。ということで作りました。<br/>
辞書データは[こちら](https://github.com/kujirahand/EJDict)を利用させていただきました。

## Usage
1. next.jsを使用しているので適当に自己ホストしてください。
2. `/api/dictionary/match?word=apple`にアクセスするとjsonが返ってきます。

部分検索の場合はmatchをambiguousに変更してください。<br/>
例: `/api/dictionary/ambiguous?word=apple`

## Todo

1. [ ] indexページで検索出来るように
2. [ ] 一致率検索を出来るように　例: `/api/dictionary/match?word=apple&match=0.5` 0.5は50%以上一致したものを返す
