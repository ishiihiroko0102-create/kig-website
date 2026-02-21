# 株式会社KIG ウェブサイト 仕様書

**プロジェクト名:** kig-website
**作成日:** 2026年2月19日
**対象環境:** テスト環境（kig.co.jp）
**本番環境（予定）:** kig-ltd.com（別プロジェクトで後日対応）

---

## 1. プロジェクト概要

### 目的
株式会社KIGのコーポレートサイトをリニューアル。現行サイト（kig-ltd.com）のコンテンツを完全移植し、モダンな技術スタックで再構築する。

### 方針
- テスト環境（kig.co.jp）で開発・確認後、本番（kig-ltd.com）へ展開
- Basic認証 + noindex でテスト環境を保護
- GitHub にコードを管理し、Vercel と連携して自動デプロイ

---

## 2. 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| Astro | 5.17.2 | フレームワーク |
| Tailwind CSS | 4.2.0 | スタイリング |
| @tailwindcss/vite | 4.2.0 | Viteプラグイン |
| @vercel/edge | 最新 | Edge Middleware（Basic認証） |
| Node.js | v22.13.0 | 実行環境 |
| npm | - | パッケージ管理 |

---

## 3. 環境構成

### ローカル開発環境
- **URL:** http://localhost:4321
- **起動コマンド:** `npm run dev`
- **ビルドコマンド:** `npm run build`

### テスト環境（現在稼働中）
- **URL:** https://kig.co.jp
- **Vercel URL:** https://kig-website-two.vercel.app
- **Basic認証:** あり（後述）
- **noindex:** あり（検索エンジンからの保護）

### 本番環境（予定）
- **URL:** https://kig-ltd.com
- **Basic認証:** なし
- **noindex:** なし

---

## 4. リポジトリ・デプロイ設定

### GitHub
- **リポジトリ:** https://github.com/ishiihiroko0102-create/kig-website
- **アカウント:** ishiihiroko0102-create
- **ブランチ:** main

### Vercel
- **プロジェクト:** kig-website
- **チーム:** hirokos-projects-9c46ab86
- **プラン:** Hobby（無料）
- **自動デプロイ:** GitHub main ブランチへのプッシュで自動反映
- **手動デプロイ:** `vercel --prod`

### デプロイフロー
```
ローカルで編集
  ↓
git add / git commit / git push origin main
  ↓
Vercel が自動でビルド・デプロイ
  ↓
https://kig.co.jp に反映
```

---

## 5. DNS・ドメイン設定

### kig.co.jp（テスト環境）
- **レジストラ:** お名前ドットコム
- **DNS管理:** お名前ドットコム（DNSレコード設定）
- **設定内容:**

| タイプ | ホスト名 | 値 | TTL |
|--------|----------|----|-----|
| A | @ | 76.76.21.21 | 3600 |

- **SSL:** Vercel が自動で発行
- **現行ネームサーバー:** dns0.heteml.jp / dns1.heteml.jp（heteml管理）

### kig-ltd.com（本番・将来対応）
- 現行サイトが稼働中。リニューアル後に切り替え予定。

---

## 6. セキュリティ設定

### Basic認証
- **実装方式:** Vercel Edge Middleware（`middleware.js`）
- **ユーザー名:** kig
- **パスワード:** king2010
- **環境変数:** Vercel の環境変数に設定済み
  - `BASIC_AUTH_USER` = kig
  - `BASIC_AUTH_PASSWORD` = king2010

### noindex（検索エンジン保護）
- **実装方式:** `vercel.json` のレスポンスヘッダー
- **設定:** `X-Robots-Tag: noindex, nofollow`（全パス対象）

### 設定ファイル
```
middleware.js     # Basic認証（Edge Middleware）
vercel.json       # noindexヘッダー設定
```

---

## 7. デザインシステム

### デザイン方針
現行サイト（kig-ltd.com）の内容を完全移植しつつ、企業サイトとして信頼感のあるデザインに刷新。

**参考サイト:** https://www.mds-fund.com/fund（MDSファンド）
**スタイル:** 白ベース + ネイビーアクセント / プロフェッショナル・信頼感重視

### 検討したデザイン変遷
1. **Tailwind デフォルト** → シンプルすぎ
2. **Apple 風**（白・ミニマル）→ 検討したが却下
3. **MDSファンド風**（濃紺・ダーク）→ 企業っぽくないと却下
4. **現在のデザイン**（白ベース + ネイビーアクセント）→ 採用

### カラーパレット

| 変数名 | カラーコード | 用途 |
|--------|-------------|------|
| --navy | #0d1f6e | メインネイビー（ヘッダー・ボタン等） |
| --navy-mid | #1a3a8f | ネイビーホバー |
| --navy-light | #e8edf8 | 薄いネイビー（背景・タグ） |
| --accent | #1e4fd8 | アクセントブルー |
| --black | #111827 | テキスト（見出し） |
| --gray-700 | #374151 | テキスト（本文） |
| --gray-500 | #6b7280 | テキスト（サブ） |
| --gray-200 | #e5e7eb | ボーダー |
| --gray-100 | #f3f4f6 | 背景グレー |
| --white | #ffffff | 背景白 |

### フォント
```css
font-family: 'Inter', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
             'Yu Gothic', Meiryo, sans-serif;
```
- **欧文:** Inter（Google Fonts）
- **和文:** Hiragino Sans（Mac）/ Yu Gothic（Windows）/ Meiryo（Windows fallback）

### アニメーション
- **種類:** スクロール時フェードイン（fade-up）
- **実装:** Intersection Observer API
- **効果:** `opacity: 0 + translateY(32px)` → `opacity: 1 + translateY(0)`
- **遷移:** 0.7s ease（遅延バリエーション: 0.1s / 0.2s / 0.3s）
- **ホバー:** カードが `translateY(-4px)` で浮き上がる

---

## 8. ホームページ企画コンセプト（追加：2026年2月21日）

### ホームページの使命・役割

**デザイン参考:** Apple風（ミニマル、洗練、信頼感）

**ビジネス特性への対応:**
- **ECサイト中心だが、企業全体像を表現**
  - メガキングドットコム（BtoB パーツ販売）
  - 楽天ストア（BtoC）
  - WEB事業部（デジタルマーケティング）
  - オリジナル商品制作
  - → これらが有機的に連携する企業イメージ

- **「ECサイト特化」という限定的な打ち出しはしない**
  - むしろ、多角経営企業としてのスケール感を表現
  - 顧客中心の多部門連携体制を見せる

### 必須コンテンツ領域

1. **お客様向けサービスガイド**
   - ショッピングガイド（商品選定のコツ）
   - 購入前のコンサルティング情報
   - 購入後のサポート・保証情報
   - 返品・交換ポリシー
   - よくある質問（FAQ）

2. **社内スタッフ向けメンバーページ（セキュアエリア）**
   - ログイン機能
   - マニュアル・研修資料
   - 社内情報共有スペース
   - キャリア開発情報
   - 部門別情報エリア

3. **企業信頼感の構築**
   - スタッフ顔出し紹介（親しみやすさ）
   - 「King・Keep・Kind」の経営理念の浸透
   - 実績・事業展開の多様性
   - サスティナビリティ・社会貢献

---

## 9. ページ構成

### サイトマップ

```
/               # トップページ
/about          # 企業情報（企業理念・会社紹介・会社情報）
/staff          # スタッフ紹介
/business       # 事業一覧
/recruit        # 採用情報
/contact        # お問い合わせ
```

### ページ別コンテンツ

#### `/` トップページ
| セクション | 内容 |
|-----------|------|
| Hero | キャッチコピー「持続と共に果てなき進化を。」/ King・Keep・Kindカード |
| Mission | Leading × Revolution × Improve |
| Business | 4事業の概要カード |
| About KIG | 社名の由来・3つのK・会社数字 |
| Staff | スタッフ一覧（6名） |
| Recruit CTA | 採用バナー |

#### `/about` 企業情報
| セクション | 内容 |
|-----------|------|
| Concept | 企業理念・KING/KEEP/KINDの3カード |
| Introduction | 会社紹介・主な事業領域リスト |
| Company Info | 会社概要テーブル・営業所一覧 |

#### `/staff` スタッフ紹介
- 8名のスタッフカード（アバター・名前・役職）

#### `/business` 事業一覧
- 4事業の詳細（番号・タイトル・説明・特徴3つ）

#### `/recruit` 採用情報
- 企業メッセージ・4つの待遇
- 3職種の求人詳細（給与・勤務地・業務内容）

#### `/contact` お問い合わせ
- 会社連絡先情報
- お問い合わせフォーム（氏名・電話・メール・件名・内容）

---

## 10. 会社情報コンテンツ

**重要**: 会社情報は **[MASTER_DATA.md](./MASTER_DATA.md)** で一元管理しています。

### 基本情報

詳細は **[MASTER_DATA.md セクション 1](./MASTER_DATA.md#1-会社基本情報)** を参照してください。

| 項目 | 参照先 |
|------|--------|
| 会社名・代表者・設立・資本金 | MASTER_DATA.md セクション 1.1 |
| 企業理念・スローガン | MASTER_DATA.md セクション 1.2 |
| ステータス情報 | MASTER_DATA.md セクション 1.3 |

### 営業所一覧

詳細は **[MASTER_DATA.md セクション 2](./MASTER_DATA.md#2-営業所一覧)** を参照してください。

**営業所（5拠点）:**
- 本社（大阪市西区）
- 箕面第2営業所
- 買取センター
- 箕面営業所
- 九州支店（福岡県北九州市）

全営業所の住所・電話番号・対応エリアは MASTER_DATA.md セクション 2.1 に記載

### スタッフ一覧

詳細は **[MASTER_DATA.md セクション 3](./MASTER_DATA.md#3-スタッフ一覧)** を参照してください。

**掲載スタッフ（8名）:**
- 石井 浩子（WEBマーケティング）
- 中本 学志（広報戦略兼バイヤー）
- 中嶋 創介（バイヤー）
- 本岡 勇作（バイヤー兼商品管理）
- 樋口 愛実（アカウントディレクター）
- たっかん（商品管理）
- 監督（商品管理）
- メガゴリくん（広報）

全スタッフの詳細・掲載同意状況は MASTER_DATA.md セクション 3 に記載

### 企業理念・スローガン

詳細は **[MASTER_DATA.md セクション 1.2](./MASTER_DATA.md#12-企業理念スローガン)** を参照してください。

- **スローガン:** No improve without lasting.
- **経営理念:** Leading × Revolution × Improve

### 事業・サービス一覧

詳細は **[MASTER_DATA.md セクション 4](./MASTER_DATA.md#4-事業部事業内容)** を参照してください。

**事業部（3部門）:**
- オート事業部（自動車パーツ買取・販売）
- ウェブ事業部（デジタルマーケティング・制作）
- 商品管理部（在庫管理・商品撮影・製作）

**サービス（6事業）:**
- メガキングドットコム
- 楽天ストア
- Yahoo!オークション
- Yahoo!ショッピング
- WEB事業部
- オリジナル商品制作

全事業・買取方式の詳細は MASTER_DATA.md セクション 4 に記載

### 採用情報

詳細は **[MASTER_DATA.md セクション 5](./MASTER_DATA.md#5-採用情報採用条件)** を参照してください。

**募集職種：**
- 営業スタッフ
- 倉庫内物流スタッフ
- データ入力スタッフ

給与・試用期間・待遇は MASTER_DATA.md セクション 5.2-5.3 に記載

### SNS・外部リンク

詳細は **[MASTER_DATA.md セクション 7](./MASTER_DATA.md#7-sns外部リンク一覧)** を参照してください。

**公式SNS:**
- Instagram: https://www.instagram.com/megaking_kig/
- Facebook: https://www.facebook.com/megaking.com.kig/
- YouTube: [動画チャネル]

---

## 11. ファイル構成

```
kig-website/
├── middleware.js          # Basic認証（Vercel Edge Middleware）
├── vercel.json            # noindexヘッダー設定
├── astro.config.mjs       # Astro設定（Tailwind CSS Viteプラグイン）
├── package.json
├── package-lock.json
├── SPEC.md                # この仕様書
└── src/
    ├── components/
    │   ├── Header.astro   # ヘッダー（スティッキー・ドロップダウンナビ）
    │   └── Footer.astro   # フッター（ネイビー背景・4カラム）
    ├── layouts/
    │   └── Layout.astro   # 共通レイアウト（noindex対応）
    ├── pages/
    │   ├── index.astro    # トップページ
    │   ├── about.astro    # 企業情報
    │   ├── staff.astro    # スタッフ紹介
    │   ├── business.astro # 事業一覧
    │   ├── recruit.astro  # 採用情報
    │   └── contact.astro  # お問い合わせ
    └── styles/
        └── global.css     # グローバルスタイル・デザイントークン
```

---

## 12. 今後の対応事項（TODO）

- [ ] お問い合わせフォームのメール送信機能実装（現在は表示のみ）
- [ ] スタッフ・スタッフ紹介の写真・コメント追加
- [ ] ロゴ画像の作成・設置
- [ ] OGP画像（og-image.jpg）の作成・設置
- [ ] イベント情報ページの実装
- [ ] モバイルメニュー（ハンバーガーメニュー）の実装
- [ ] kig.co.jp の DNS 反映確認
- [ ] 本番環境（kig-ltd.com）への展開
- [ ] 本番環境では Basic認証・noindex を解除

---

## 13. 外部サービス アカウント・ログイン情報

> ⚠️ このファイルはパブリックリポジトリに保存されています。パスワードは別途管理してください。

---

### GitHub

| 項目 | 内容 |
|------|------|
| ログインURL | https://github.com/login |
| アカウント名 | ishiihiroko0102-create |
| リポジトリURL | https://github.com/ishiihiroko0102-create/kig-website |

**CLI 操作:**
```bash
# GitHub CLI インストール（Mac）
brew install gh

# ログイン（ブラウザ認証）
gh auth login --web

# ログイン状態確認
gh auth status

# リポジトリ作成
gh repo create kig-website --public --source=. --remote=origin --push
```

---

### Vercel

| 項目 | 内容 |
|------|------|
| ログインURL | https://vercel.com/login |
| 登録メール | ishii.hiroko0102@gmail.com |
| ログイン方法 | GitHub アカウント連携（Social Login）|
| プラン | Hobby（無料） |
| ダッシュボード | https://vercel.com/hirokos-projects-9c46ab86/kig-website |
| 設定画面 | https://vercel.com/hirokos-projects-9c46ab86/kig-website/settings |
| 環境変数 | https://vercel.com/hirokos-projects-9c46ab86/kig-website/settings/environment-variables |
| デプロイ履歴 | https://vercel.com/hirokos-projects-9c46ab86/kig-website/deployments |

**環境変数（設定済み）:**

| 変数名 | 値 | 用途 |
|--------|-----|------|
| BASIC_AUTH_USER | kig | Basic認証ユーザー名 |
| BASIC_AUTH_PASSWORD | king2010 | Basic認証パスワード |

**CLI 操作:**
```bash
# Vercel CLI インストール
npm install -g vercel

# ログイン（ブラウザ認証）
vercel login --web
# → https://vercel.com/oauth/device?user_code=XXXX を開いてコード入力

# 本番デプロイ
vercel --prod

# ドメイン追加
vercel domains add kig.co.jp

# ドメイン確認
vercel domains inspect kig.co.jp

# 環境変数追加
vercel env add BASIC_AUTH_USER production
vercel env add BASIC_AUTH_PASSWORD production

# 環境変数一覧
vercel env ls
```

---

### お名前ドットコム

| 項目 | 内容 |
|------|------|
| ログインURL | https://www.onamae.com |
| 管理ドメイン | kig.co.jp |

**DNS設定の手順:**
1. ログイン後「ドメイン」メニューへ
2. 「ドメイン機能一覧」をクリック
3. 「DNS設定/転送設定」を選択
4. 対象ドメイン（kig.co.jp）を選んで「次へ」
5. 「ドメインDNS」→「DNSレコード設定」を選択
6. Aレコードを追加

**現在の設定:**

| タイプ | ホスト名 | 値 | TTL |
|--------|----------|----|-----|
| A | @ | 76.76.21.21（Vercel）| 3600 |

---

### heteml（現行サーバー）

| 項目 | 内容 |
|------|------|
| ログインURL | https://heteml.jp |
| 用途 | kig.co.jp の現行ネームサーバー管理 |
| ネームサーバー | dns0.heteml.jp / dns1.heteml.jp |

> ※ kig.co.jp のネームサーバーは heteml のまま変更せず、お名前ドットコムの DNS レコードで Vercel の IP を直接指定している。

---

### 楽天市場ストア

| 項目 | 内容 |
|------|------|
| ストアURL | https://www.rakuten.co.jp/kig-ltd/ |
| 店舗名 | メガキングドットコム楽天ストア |
| RMS（管理画面）| https://rms.rakuten.co.jp/ |

---

### SNS

| サービス | URL | 用途 |
|---------|-----|------|
| Facebook | https://www.facebook.com/megaking.com.kig/ | 公式Facebook |
| Instagram | https://www.instagram.com/megaking_kig/ | 公式Instagram |

---

### 現行サイト（参照元）

| 項目 | 内容 |
|------|------|
| URL | https://www.kig-ltd.com |
| CMS | WordPress（Wix）|
| 用途 | コンテンツ移植元・本番環境（予定） |

---

## 14. CLI ツール セットアップ一覧

| ツール | インストール方法 | 確認コマンド |
|--------|---------------|-------------|
| Node.js | nodebrew 管理（`~/.nodebrew`）| `node --version` |
| npm | Node.js に同梱 | `npm --version` |
| Vercel CLI | `npm install -g vercel` | `vercel --version` |
| GitHub CLI | `brew install gh` | `gh --version` |
| Astro CLI | プロジェクト内 `npx astro` | `npx astro --version` |

---

*最終更新: 2026年2月19日*
