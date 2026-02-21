# KIG Corporate Website

> 株式会社KIGのコーポレートサイトリニューアルプロジェクト
>
> 自動車パーツ買取・販売のプロフェッショナル企業として、BtoB・BtoC両対応のホームページを構築

---

## 🚀 クイックスタート

### 開発環境での起動

```bash
# リポジトリのクローン
git clone https://github.com/ishiihiroko0102-create/kig-website.git
cd kig-website

# 依存パッケージのインストール
npm install

# 開発サーバーの起動（http://localhost:4321）
npm run dev
```

### ビルド・プレビュー

```bash
# 本番用にビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

---

## 📋 プロジェクト情報

### 基本情報

| 項目 | 内容 |
|------|------|
| **プロジェクト名** | kig-website |
| **企業名** | 株式会社KIG |
| **代表取締役** | 石井 浩子 |
| **テスト環境** | https://kig.co.jp |
| **本番環境** | https://kig-ltd.com（将来） |

### 技術スタック

- **フレームワーク**: Astro 5.17.2
- **スタイリング**: Tailwind CSS 4.2.0
- **デプロイ**: Vercel（自動デプロイ）
- **ソースコード**: GitHub（ishiihiroko0102-create/kig-website）

### チームメンバー

- **プロジェクト管理**: 石井 浩子（代表取締役）
- **開発**: Claude Code AI
- **設計**: Claude Code AI（エージェント併用）

---

## 📁 プロジェクト構成

```
kig-website/
├── public/                    # 静的ファイル
├── src/
│   ├── components/           # Astro コンポーネント
│   ├── layouts/              # ページレイアウト
│   ├── pages/                # ページテンプレート
│   │   ├── index.astro       # トップページ
│   │   ├── about.astro       # 企業情報
│   │   ├── business.astro    # 事業紹介
│   │   ├── staff.astro       # スタッフ紹介
│   │   ├── recruit.astro     # 採用情報
│   │   ├── news/             # ニュース
│   │   ├── members/          # メンバーページ（認証付き）
│   │   └── contact.astro     # お問い合わせ
│   ├── content/              # コンテンツコレクション
│   │   ├── news/             # ニュース記事（Markdown）
│   │   └── manuals/          # マニュアル（メンバーページ用）
│   └── styles/               # グローバルスタイル
├── docs/                      # ドキュメント
│   └── internal/              # 内部資料
├── middleware.js             # Vercel Edge Middleware（Basic認証）
├── vercel.json               # Vercel 設定（noindexヘッダー）
├── astro.config.mjs          # Astro 設定
├── SPEC.md                   # 技術仕様書
├── DESIGN_STRATEGY.md        # デザイン戦略
├── PLANNING_STRATEGY.md      # ページ構成・企画
├── SEO_AND_CONTENT_STRATEGY.md  # SEO・コンテンツ戦略
├── CONTENT_DETAILED_STRATEGY.md # コンテンツ詳細テンプレート
├── MASTER_DATA.md            # 一元管理データ（会社情報・キーワード）
├── UPDATE_LOG.md             # ドキュメント更新ログ
├── BUSINESS_CONTEXT.md       # ビジネス背景
├── WORKFLOW.md               # 開発ワークフロー
└── README.md                 # このファイル
```

---

## 📖 重要なドキュメント

### 🎯 まずはこれを読む

1. **[PLANNING_OVERVIEW.md](./PLANNING_OVERVIEW.md)** - プロジェクト全体の概要（最初はここから）
2. **[SPEC.md](./SPEC.md)** - 技術仕様・環境設定
3. **[PLANNING_STRATEGY.md](./PLANNING_STRATEGY.md)** - ページ構成・機能設計

### 🛠️ 開発時に参照

- **[DESIGN_STRATEGY.md](./DESIGN_STRATEGY.md)** - デザイン・UI/UX仕様
- **[WORKFLOW.md](./WORKFLOW.md)** - 効率的な開発ワークフロー
- **[MASTER_DATA.md](./MASTER_DATA.md)** - 会社情報・営業所・スタッフ（一元管理）

### 📝 コンテンツ・SEO

- **[SEO_AND_CONTENT_STRATEGY.md](./SEO_AND_CONTENT_STRATEGY.md)** - SEO戦略・キーワード
- **[CONTENT_DETAILED_STRATEGY.md](./CONTENT_DETAILED_STRATEGY.md)** - ニュース投稿テンプレート
- **[BUSINESS_CONTEXT.md](./BUSINESS_CONTEXT.md)** - ビジネス背景・規制対応

### 📊 更新・管理

- **[UPDATE_LOG.md](./UPDATE_LOG.md)** - ドキュメント更新履歴
- **[docs/internal/UPDATE_MANUAL.md](./docs/internal/UPDATE_MANUAL.md)** - 素人向け更新マニュアル
- **[docs/internal/DESIGN_DECISIONS.md](./docs/internal/DESIGN_DECISIONS.md)** - 設計思考の記録

---

## 🔧 よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド（本番用）
npm run build

# ビルド結果をプレビュー
npm run preview

# TypeScript チェック
npm run astro check

# Astro CLI 直接実行
npm run astro -- --help
```

---

## 🌐 環境情報

### テスト環境

- **URL**: https://kig.co.jp
- **Vercel URL**: https://kig-website-two.vercel.app
- **Basic認証**: あり（username: kig / password: king2010）
- **noindex**: あり（検索エンジン保護）

### 本番環境（将来）

- **URL**: https://kig-ltd.com
- **Basic認証**: なし
- **noindex**: なし

### デプロイフロー

```
ローカル開発
    ↓
git push origin main
    ↓
Vercel が自動ビルド・デプロイ
    ↓
https://kig.co.jp に反映（数分以内）
```

---

## 📱 対応デバイス

- **モバイル**: 375px 以上
- **タブレット**: 768px 以上
- **デスクトップ**: 1024px 以上
- **大型画面**: 1440px 以上

---

## 🎨 デザイン参考

- **スタイル**: MDSファンド風（白ベース + ネイビーアクセント）
- **参考サイト**: https://www.mds-fund.com/
- **フィロソフィ**: Apple 風（ミニマル、洗練、信頼感）

---

## 📊 SEO 戦略

**ターゲットキーワード（複合キーワード戦略）:**
- Phase 1（3ヶ月）: 「KIG 買取」1-5位、「自動車パーツ 買取 大阪」5-10位
- Phase 2（6ヶ月）: 「KIG 買取」1位、「自動車パーツ 買取」1-3位

詳細は **[SEO_AND_CONTENT_STRATEGY.md](./SEO_AND_CONTENT_STRATEGY.md)** を参照

---

## 🔐 セキュリティ

### テスト環境

- Basic認証により保護（Vercel Edge Middleware）
- `noindex` メタタグで検索エンジンから保護

### メンバーページ

- パスワード認証（環境変数管理）
- Cookie ベースのセッション（30日間有効）
- 環境変数: `MEMBERS_PASSWORD`

---

## 📞 お問い合わせ・サポート

### 企業情報

- **会社名**: 株式会社KIG
- **本社**: 〒550-0002 大阪府大阪市西区江戸堀2-1-1 9階
- **電話**: 06-6225-1609
- **古物商許可証**: 大阪府公安委員会　第622322204235号

### ホームページに関するお問い合わせ

ホームページ上の「お問い合わせ」フォームから送信してください。

---

## 📚 参考リンク

- **GitHub**: https://github.com/ishiihiroko0102-create/kig-website
- **Vercel**: https://vercel.com
- **Astro Documentation**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com

---

## 📝 ライセンス

このプロジェクトのコンテンツは株式会社KIGの所有物です。

---

## 🙋 トラブルシューティング

### 開発サーバーが起動しない

```bash
# 1. node_modules を削除
rm -rf node_modules package-lock.json

# 2. 再インストール
npm install

# 3. 再度起動
npm run dev
```

### ポート 4321 が既に使用されている

```bash
# 別のポートで起動
npm run dev -- --host 127.0.0.1 --port 3000
```

### Vercel デプロイが失敗

- GitHub へのプッシュが完了しているか確認
- Vercel ダッシュボードでビルドログを確認
- 環境変数（Basic認証パスワード等）が Vercel に設定されているか確認

---

## 👨‍💼 最後に

このプロジェクトは、株式会社KIG が自動車パーツ買取業界の専門企業として、

> 「呼ばれたらすぐに行く。どこまでも。」

という理念を体現するために、モダンで信頼感のあるホームページを目指しています。

ご質問やご提案があれば、いつでもお気軽にお問い合わせください！

---

**作成**: Claude Code AI
**最終更新**: 2026年2月21日
**ステータス**: 開発進行中
