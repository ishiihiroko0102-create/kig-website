# KIG Website 構成メモ

**最終更新: 2026-02-22**

---

## 1. 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Astro |
| スタイリング | Scoped CSS + global.css |
| フォント | Poppins（見出し）+ Inter（本文） |
| i18n | 自作（src/i18n/utils.ts + translations.ts） |
| デプロイ | 静的ビルド（`npm run build` → dist/） |

---

## 2. デザインシステム

### カラーパレット

**ベース: モノクロミニマル（richka.co.jp インスパイア）**

| 用途 | 変数 | 値 |
|------|------|------|
| テキスト（メイン） | `--text-primary` | `#2D2D2D` |
| テキスト（サブ） | `--text-secondary` | `#555555` |
| テキスト（ミュート） | `--text-muted` | `#888888` |
| 背景（白） | `--white` | `#ffffff` |
| 背景（グレー） | `--gray-100` | `#f7f7f7` |
| ボーダー | `--gray-200` | `#e0e0e0` |
| プライマリ（黒） | `--primary` | `#0a0a0a` |

**アクセントカラー（トップページのみ）**

| 用途 | 変数 | 値 |
|------|------|------|
| オレンジ | `--accent-orange` | `#FF6900` |
| オレンジホバー | `--accent-orange-hover` | `#E85D00` |
| オレンジ薄背景 | `--accent-orange-light` | `#FFF3E8` |

### オレンジ色の適用箇所（決定済み）

| 要素 | 色 | 備考 |
|------|------|------|
| セクションラベル（BUSINESS, NEWS等） | オレンジ | `.section-label` |
| セクションタイトル下線 | オレンジ | `.section-title::after` |
| K-Badge（King/Keep/Kind） | オレンジ背景+白文字 | `.k-badge` |
| スタッフアバター | オレンジ薄背景+オレンジ文字 | `.staff-avatar` |
| ニュースタグ | オレンジ薄背景+オレンジ文字 | `.news-tag` |
| CTAボタン（メイン） | オレンジ背景 | `.btn-accent` |
| 採用CTAセクション背景 | オレンジグラデーション | `.cta-orange-bg` |
| ミッション画像プレースホルダ | オレンジ薄背景 | `.mission-image-placeholder` |

### グレーの適用箇所（決定済み）

| 要素 | 色 | 備考 |
|------|------|------|
| 事業番号（01, 02...） | グレー `#888` | `.biz-num` |
| 事業リンク「詳しく見る →」 | グレー `#888` | `.biz-link` |
| 営業所アイコン | グレー `#888` | `.location-preview-icon` |
| 営業所リンク | グレー `#888` | `.location-preview-link` |
| ECアイコン | グレー `#888` | `.ec-icon` |
| ECリンク | グレー `#888` | `.ec-link` |
| カードホバー | 黒ボーダー+黒シャドウ | ホバー時 `border-color: #2D2D2D` |
| 統計数字 | 黒 `#2D2D2D` | `.stat-num`, `.stat-year` |

---

## 3. ページ構成（22ページ）

### ディレクトリ構造

```
src/
  components/          ← 共有コンポーネント（コンテンツ+スタイル+スクリプト）
    Header.astro       ← ヘッダー（ナビ・Store ドロップダウン・言語切替）
    Footer.astro       ← フッター（richka風CTA・4カラムナビ・言語切替）
    HomePage.astro     ← トップページ共有コンポーネント
    AboutPage.astro    ← 企業情報
    BusinessPage.astro ← 事業紹介
    ContactPage.astro  ← お問い合わせ
    RecruitPage.astro  ← 採用情報
    StaffPage.astro    ← スタッフ紹介
    NewsPage.astro     ← ニュース
  layouts/
    Layout.astro       ← 共通レイアウト（meta・hreflang・OGP）
  i18n/
    translations.ts    ← 翻訳辞書（ja/en 300+キー）
    utils.ts           ← 言語ユーティリティ関数
  pages/
    index.astro            ← トップ（JA）
    about.astro            ← 企業情報（JA）
    business.astro         ← 事業紹介（JA）
    contact.astro          ← お問い合わせ（JA）
    recruit.astro          ← 採用情報（JA）
    staff.astro            ← スタッフ紹介（JA）
    news.astro             ← ニュース（JA）
    faq-design.astro       ← FAQ
    roadmap.astro          ← ロードマップ
    en/
      index.astro          ← トップ（EN）
      about.astro          ← 企業情報（EN）
      business.astro       ← 事業紹介（EN）
      contact.astro        ← お問い合わせ（EN）
      recruit.astro        ← 採用情報（EN）
      staff.astro          ← スタッフ紹介（EN）
      news.astro           ← ニュース（EN）
    locations/
      index.astro          ← 営業所一覧
      osaka-honsha.astro   ← 大阪本社
      osaka-minoh-dai2.astro ← 箕面第2
      osaka-kaitori-center.astro ← 買取センター
      kyushu.astro         ← 九州支店
  styles/
    global.css             ← グローバルCSS変数・リセット・共通クラス
```

### i18n アーキテクチャ

- JA: `/` （デフォルト、prefixなし）
- EN: `/en/`
- 共有コンポーネントパターン: `XxxPage.astro` にコンテンツ+スタイル+スクリプトを集約
- ページラッパー: 薄い（~15行）`Layout` + `XxxPage` を呼ぶだけ
- 翻訳: `t(lang, 'key')` 関数、フォールバック ja → key

---

## 4. ヘッダー構成

```
[KIG ロゴ] | [ABOUT▼ | 事業一覧 | 営業所 | 採用情報 | ニュース | お問い合わせ] | [Store▼] [Ja/En]
```

- **Store ドロップダウン**: 楽天ストア / ヤフオク / Yahoo!ショッピング（3店舗）
- **言語切替**: Ja / En テキストトグル（現在の言語がボールド）
- **ABOUT サブメニュー**: 企業理念 / 会社紹介 / 会社情報 / スタッフ紹介
- **モバイル**: ナビ・Store非表示、言語切替のみ残る

---

## 5. トップページ セクション構成

```
1. Hero
   - ブランド名: "K IMPROVE GROUP"（レタースペーシング・グレー）
   - メインコピー: "クルマのパーツに、もう一度価値を。"
   - タグライン: "No improve without lasting. ── 「進化」とは、「持続」から始まる"（イタリック）
   - 説明文（イタリック）
   - CTA: [買取のご相談 →] [企業情報を見る]

2. Mission（OUR MISSION）
   - 2カラム: テキスト | ビジュアル
   - King / Keep / Kind の3カード

3. Business（事業紹介）
   - 4カラムグリッド（1024px以下で2カラム、768px以下で1カラム）
   - 01: メガキングドットコム
   - 02: 楽天ストア
   - 03: WEB事業部
   - 04: オリジナル商品制作

4. Locations（営業所のご案内）
   - 2カラム: 大阪営業所 / 九州支店
   - アイコン: グレー

5. EC Platforms（SHOPPING）
   - 4カラムグリッド
   - メガキングドットコム / 楽天ストア / Yahoo!オークション / Yahoo!ショッピング
   - アイコン: グレー

6. About KIG
   - 3カラム: 画像 | テキスト+K-Badge | 統計数字
   - 統計: 2010年設立 / 5拠点 / 8,000万円

7. Staff（スタッフ紹介）
   - 3カラムグリッド（768px以下で2カラム）
   - アバター: オレンジ薄背景

8. News（最新情報）
   - 3カラムグリッド
   - ニュースタグ: オレンジ

9. Recruit CTA
   - パララックス背景（オレンジグラデーション）
   - 白文字 + 白ボタン
```

---

## 6. フッター構成

```
1. Contact Us → CTA（大文字・96px・矢印アニメーション）
2. 4カラムナビ: 会社 | 事業 | 採用・お問い合わせ | 本社情報+SNS
3. フッターボトム: KIG ロゴ | Ja/En切替 | Privacy Policy | Copyright
```

- 背景: `#1a1a1a`（ダークグレー）
- テキスト: 白系
- 言語切替: トグルスイッチ UI

---

## 7. サブページ共通パターン

各サブページの構成:
- Hero: ダークグラデーション背景 `#0A0A0A → #1A1A1A`
- パンくず: HOME > ページ名
- コンテンツ: ページ固有
- 採用バナー or 関連CTA

---

## 8. 外部リンク

| サービス | URL |
|----------|-----|
| メガキングドットコム | http://mega-king.com/kaitori/ |
| 楽天ストア | https://www.rakuten.co.jp/kig-ltd/ |
| Yahoo!オークション | https://auctions.yahoo.co.jp/seller/kig_kaitori |
| Yahoo!ショッピング | https://shopping.yahoo.co.jp/search?seller_id=kig |
| Facebook | https://www.facebook.com/megaking.com.kig/ |
| Instagram | https://www.instagram.com/megaking_kig/ |

---

## 9. 未対応（TODO）

- [ ] locations ページの英語版（/en/locations/*）
- [ ] faq-design / roadmap の英語版
- [ ] 実画像への差し替え（現在 Unsplash プレースホルダ）
- [ ] モバイルハンバーガーメニュー
- [ ] お問い合わせフォームのバックエンド接続
- [ ] OGP画像の設定
- [ ] Google Analytics / Search Console の設置
