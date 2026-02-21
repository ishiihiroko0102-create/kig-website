# KIG Website - プロジェクト概要

## プロジェクト基本情報

- **会社名**: 株式会社KIG（K Improve Group）
- **事業内容**: 中古自動車パーツの買取・販売、EC運営、WEB事業、オリジナル商品制作
- **フレームワーク**: Astro（静的サイト生成）
- **ホスティング**: Vercel（Deployment Protection 有効 = 認証必須）
- **ドメイン**: kig.co.jp（DNS未設定 → ヘテムルで Aレコード `76.76.21.21` に変更が必要）
- **GitHub**: https://github.com/ishiihiroko0102-create/kig-website

## 技術構成

| 項目 | 技術 |
|------|------|
| フレームワーク | Astro |
| スタイリング | Scoped CSS + src/styles/global.css |
| フォント | Poppins（見出し）+ Inter（本文） |
| i18n | 自作（src/i18n/utils.ts + translations.ts）673行 |
| ビルド | `npm run build` → dist/（22ページ） |
| デプロイ | `vercel --prod` または `git push`（自動デプロイ） |

## デザインシステム

**モノクロミニマル（richka.co.jp インスパイア）+ オレンジアクセント**

### カラールール（確定済み・変更しないこと）

| 要素 | 色 | 備考 |
|------|------|------|
| セクションラベル | オレンジ `#FF6900` | BUSINESS, NEWS 等 |
| セクションタイトル下線 | オレンジ | `.section-title::after` |
| K-Badge（King/Keep/Kind） | オレンジ背景+白文字 | |
| スタッフアバター | オレンジ薄背景 | |
| ニュースタグ | オレンジ薄背景 | |
| CTAボタン（メイン） | オレンジ背景 | `.btn-accent` |
| 採用CTAセクション | オレンジグラデーション背景 | |
| 事業番号（01, 02...） | **グレー** `#888` | オレンジではない |
| 事業リンク | **グレー** `#888` | オレンジではない |
| 営業所アイコン | **グレー** `#888` | オレンジではない |
| ECアイコン | **グレー** `#888` | オレンジではない |
| カードホバー | **黒ボーダー+黒シャドウ** | オレンジではない |
| 統計数字 | **黒** `#2D2D2D` | オレンジではない |

## ファイル構成

```
src/
  components/          ← 共有コンポーネント（コンテンツ+スタイル+スクリプト一体）
    Header.astro       ← ナビ・Storeドロップダウン（楽天/ヤフオク/Yahoo!ショッピング）・Ja/En切替
    Footer.astro       ← richka風 Contact Us CTA・4カラムナビ・Ja/En切替
    HomePage.astro     ← トップページ全セクション
    AboutPage.astro    ← 企業情報ページ
    BusinessPage.astro ← 事業紹介ページ
    ContactPage.astro  ← お問い合わせページ
    RecruitPage.astro  ← 採用情報ページ
    StaffPage.astro    ← スタッフ紹介ページ
    NewsPage.astro     ← ニュースページ
  layouts/
    Layout.astro       ← 共通レイアウト（meta・hreflang・OGP）
  i18n/
    translations.ts    ← 翻訳辞書（ja/en 300+キー）
    utils.ts           ← getLangFromUrl / getLocalizedPath / getAlternateUrl
  pages/               ← ページラッパー（薄い、~15行、Layout+XxxPage呼ぶだけ）
    index.astro, about.astro, business.astro, contact.astro,
    recruit.astro, staff.astro, news.astro
    en/                ← 英語版（同構造）
      index.astro, about.astro, business.astro, contact.astro,
      recruit.astro, staff.astro, news.astro
    locations/         ← 営業所ページ（英語版未対応）
      index.astro, osaka-honsha.astro, osaka-minoh-dai2.astro,
      osaka-kaitori-center.astro, kyushu.astro
    faq-design.astro, roadmap.astro
  styles/
    global.css         ← CSS変数・リセット・共通クラス（モノクロパレット）
docs/
  SITE_CONFIGURATION.md ← 詳細構成メモ
  UPDATE_MANUAL.md      ← 更新マニュアル（非エンジニア向け）
```

## トップページ セクション構成

1. **Hero** - "K IMPROVE GROUP" ブランド → メインコピー → イタリックタグライン → CTA2つ
2. **Mission** - 2カラム（テキスト｜ビジュアル）+ King/Keep/Kind 3カード
3. **Business** - 4カラム横並び: メガキングドットコム / 楽天ストア / WEB事業部 / オリジナル商品制作
4. **Locations** - 2カラム: 大阪営業所 / 九州支店
5. **EC Platforms** - 4カラム: メガキング / 楽天 / ヤフオク / Yahoo!ショッピング
6. **About KIG** - 3カラム: 画像｜テキスト+K-Badge｜統計
7. **Staff** - 3カラムグリッド（6名）
8. **News** - 3カラムグリッド（3件）
9. **Recruit CTA** - パララックス背景（オレンジ）

## ヘッダー構成

```
[KIG] [ABOUT▼ | 事業一覧 | 営業所 | 採用情報 | ニュース | お問い合わせ] [Store▼] [Ja/En]
```
- Store ドロップダウン: 楽天ストア / ヤフオク / Yahoo!ショッピング

## 外部リンク

| サービス | URL |
|----------|-----|
| メガキングドットコム | http://mega-king.com/kaitori/ |
| 楽天ストア | https://www.rakuten.co.jp/kig-ltd/ |
| Yahoo!オークション | https://auctions.yahoo.co.jp/seller/kig_kaitori |
| Yahoo!ショッピング | https://shopping.yahoo.co.jp/search?seller_id=kig |
| Facebook | https://www.facebook.com/megaking.com.kig/ |
| Instagram | https://www.instagram.com/megaking_kig/ |

## 未対応 TODO

- [ ] kig.co.jp DNS設定（ヘテムル管理画面でAレコード→76.76.21.21）
- [ ] kig.co.jp ドメイン更新（期限: 2026/02/28）
- [ ] locations ページの英語版（/en/locations/*）
- [ ] faq-design / roadmap の英語版
- [ ] 実画像への差し替え（現在 Unsplash プレースホルダ）
- [ ] モバイルハンバーガーメニュー
- [ ] お問い合わせフォームのバックエンド接続
- [ ] OGP画像の設定
- [ ] Google Analytics / Search Console の設置

## 注意事項

- 常に日本語で回答すること
- カラールールは確定済み。勝手にオレンジに変えない（グレー/黒の要素は維持）
- 共有コンポーネントパターン: 内容変更は `src/components/XxxPage.astro` を編集
- テキスト変更は `src/i18n/translations.ts` を編集（ja/en 両方）
- ページ追加は `src/pages/` にラッパー + `src/components/` に共有コンポーネント
