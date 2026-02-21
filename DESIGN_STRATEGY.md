# KIG Corporate Website - デザイン・コンテンツ戦略書

**作成日**: 2026年2月20日
**ステータス**: デザイン決定済み（コンテンツ整理中）
**次フェーズ**: チームとのブラッシュアップ

---

## 1. プロジェクト概要

### 目標
- KIG のコーポレートサイトをリニューアル
- テスト環境（kig.co.jp）で開発・確認
- B2B + B2C 両方に対応
- 採用・求人・企業情報・イベント写真の公開

### ブランドイメージ
- **キーワード**: プロ・厳格・信頼感
- **参考**: MDSファンド（https://www.mds-fund.com/）
- **ターゲット**: 企業 / 求職者 / パートナー企業

---

## 2. デザイン決定事項

### カラーパレット

```
Primary Colors:
- Background: #FFFFFF (ホワイト)
- Secondary Background: #F5F7FA (ライトグレー)
- Text Primary: #1a202c (ダークグレー)
- Text Secondary: #4a5568 (ミディアムグレー)

Accent Colors:
- Blue (Primary CTA): #0066cc
- Blue (Hover): #004d99
- Blue (Light Background): #e6f0ff

Support Colors:
- Border: #e2e8f0
- Gold (Highlight): #d4af37
```

### タイポグラフィ

```
Heading Font: Poppins (Bold / Semi-bold)
Body Font: Open Sans (Regular / Medium)
Japanese Support: Hiragino Sans / Yu Gothic

Sizes:
- H1: clamp(40px, 8vw, 72px) - Hero
- H2: 48px - Section Title
- H3: 24px - Card Title
- Body: 16px
- Small: 14px - Footer
```

### レイアウトパターン

1. **Hero Section**
   - 100vh フルスクリーン
   - 背景動画 + グラデーションオーバーレイ
   - テキストアニメーション（slideUp）
   - Primary + Secondary ボタン

2. **Bento Grid**
   - 4カラム（auto-fit）
   - 事業紹介用
   - ホバーでグラデーション背景表示
   - Secondary ボタン付き

3. **Grid Cards**
   - 2-4カラム（auto-fit）
   - 採用・ニュース用
   - 画像プレースホルダー
   - タグシステム（採用 / ニュース / イベント）

4. **About Section**
   - 左：テキスト + 統計情報
   - 右：イメージ画像
   - Stats: ホバーアニメーション

5. **Staff Grid**
   - 6カラム（auto-fit）
   - プロフィール画像（円形）
   - 名前 + 役職

6. **CTA Section**
   - グラデーション背景（青系）
   - ホワイトボタン
   - 採用ページへのリンク

7. **Footer**
   - 4カラムグリッド
   - リンク + 企業情報
   - ホバーエフェクト付き

---

## 3. UI/UX 仕様（MDSファンド風）

### ボタンシステム

```css
/* Primary Button */
- Background: #0066cc
- Hover: #004d99
- Padding: 12px 32px
- Min-height: 44px
- Border-radius: 6px
- Transition: all 0.2s ease

/* Secondary Button */
- Background: transparent
- Border: 1px solid #e2e8f0
- Hover: #e6f0ff background
- Padding: 11px 31px
- Transition: all 0.2s ease

/* Shared Effects */
- Hover: transform translateY(-1px)
- Active: transform translateY(0)
- Box-shadow progression (sm → md)
```

### シャドウシステム

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 16px 32px rgba(0, 0, 0, 0.08)

Hover: sm → md へ遷移
```

### ホバーエフェクト

```css
Cards:
- translateY(-4px)
- shadow-sm → shadow-md
- border-color: transparent → #0066cc
- transition: all 0.2s ease

Buttons:
- translateY(-1px)
- shadow-sm → shadow-md
- background-color変更
- transition: all 0.2s ease

Stats:
- translateY(-2px)
- shadow-sm → shadow-md
- transition: all 0.2s ease
```

### アニメーション

```css
Scroll Fade-in:
- opacity: 0 → 1
- duration: 0.8s
- easing: ease-out
- トリガー: Intersection Observer

Hero Text:
- slideUp: translateY(30px) → 0
- duration: 0.8s
- stagger delay: 0.2s, 0.4s

Continuous:
- float: translateY(0px) → -10px → 0px
- duration: 3s
- loop: infinite
```

### レスポンシブブレークポイント

```
Mobile: 375px
Tablet: 768px
Desktop: 1024px
Large Desktop: 1440px

Mobile特有の対応:
- Hero buttons: flex-direction column
- About grid: 1 column
- Footer: 1 column
```

---

## 4. 企画コンセプト（追加：2026年2月21日）

### ホームページの位置づけ

**参考基準:** Apple のようなデザイン・体験（ミニマル、洗練、信頼感）

**ビジネスモデル:**
- ECサイト運営（メガキングドットコム・楽天ストア）
- しかし、「ECサイト特化企業」という打ち出しはしない
- 複数部門を持つ企業として総合的に見せる

**必要なセクション:**
1. **企業全体の信頼感・スケール感の表現**
   - ECだけでなく、複数事業展開の実績
   - 多様な機能チーム（WEB事業部、バイヤー、商品管理など）
   - グローバルに対応できる企業イメージ

2. **お客様向けサービスガイドの充実**
   - ショッピングガイド
   - 商品選定のコンサルティング
   - アフターサービス情報
   - これらを「お役立ち情報」として位置づけ

3. **社内スタッフ向けメンバーページ**
   - マニュアル公開エリア
   - 内部情報共有スペース
   - 研修・キャリア開発情報
   - セキュアなアクセス管理

4. **ブランドストーリー強化**
   - 「King・Keep・Kind」の3つの価値観
   - サスティナブルな経営理念
   - スタッフ紹介（顔の見える企業）

---

## 5. コンテンツ構成（未確定 - 要チーム検討）

### 採用情報ページ

**構成案:**
```
1. Hero（採用メッセージ）
2. 求人一覧（3職種）
   - 営業スタッフ
   - 倉庫内物流スタッフ
   - データ入力スタッフ

3. 待遇・福利厚生
4. 企業文化・スタッフ紹介
5. よくある質問（FAQ）
6. 応募フォーム
```

**掲載情報:**
- 職種名
- 給与（試用期間含む）
- 勤務地
- 業務内容
- 必須条件 / 歓迎条件
- 待遇（完全週休2日、社会保険完備、フォークリフト免許取得支援、セカンドチャンス制度）

**UI要素:**
- カード形式（3カラム）
- タグ（「新着」「急募」など）
- 「応募する」ボタン（Primary）

### ニュース・イベント情報

**構成案:**
```
1. 更新情報一覧
   - ニュース記事
   - イベント写真
   - 企業ブログ

2. フィルター機能
   - 「全て」「ニュース」「イベント」「採用」

3. 詳細ページ
   - ニュース記事テンプレート
   - イベント写真ギャラリー
   - 関連記事リンク
```

**掲載頻度:**
- 月1回？ 週1回？ 不定期？ → **要決定**

**画像フォーマット:**
- アイキャッチ画像: 1200x600px
- ギャラリー: 600x400px（リサイズ可能）
- OGP: 1200x630px

### スタッフ・チーム情報

**現在掲載予定の8名:**
1. 石井 浩子 - WEBマーケティング
2. 中本 学志 - 広報戦略兼バイヤー
3. 中嶋 創介 - バイヤー
4. 本岡 勇作 - バイヤー兼商品管理
5. 樋口 愛実 - アカウントディレクター
6. たっかん - 商品管理
7. 監督 - 商品管理
8. メガゴリくん - 広報

**詳細情報:**
- プロフィール写真（顔出し？ アバター？）
- 役職
- 簡単なプロフィール文
- SNS リンク（オプション）

---

## 6. 画像・動画資産（要準備）

### 必要な画像

```
Hero Section:
- 背景動画 MP4（1920x1080, 30fps, 最大10秒）
- フォールバック画像

Business Cards:
- 4つの事業のビジュアル（各400x300px）

Grid Cards:
- 採用・ニュース・イベント画像（各600x400px）

About Section:
- 企業イメージ画像（600x400px）

Staff:
- 8名のプロフィール写真（120x120px, 円形）

その他:
- OGP画像（1200x630px）
- Favicon
- ロゴ画像
```

### 画像ソース

**ダミー（開発用）:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pravatar: https://pravatar.cc

**本番（実装時）:**
- スタッフ顔写真
- イベント写真
- オフィス写真
- 商品写真

---

## 7. ページ構成（サイトマップ）

```
/
├── /about
│   ├── 企業理念
│   ├── 会社概要
│   └── スタッフ紹介
├── /business
│   ├── メガキングドットコム
│   ├── 楽天ストア
│   ├── WEB事業部
│   └── オリジナル商品制作
├── /recruit
│   ├── 採用情報（一覧）
│   ├── 職種詳細ページ（×3）
│   ├── 待遇・福利厚生
│   ├── 企業文化
│   ├── よくある質問
│   └── 応募フォーム
├── /news
│   ├── ニュース一覧
│   ├── 記事詳細ページ
│   └── イベント写真ギャラリー
├── /contact
│   ├── お問い合わせフォーム
│   └── 企業情報・アクセス
└── /privacy
    └── プライバシーポリシー
```

---

## 8. 実装ステータス

### ✅ 完了した部分

- [x] デザインコンセプト決定（MDSファンド風）
- [x] カラーパレット決定
- [x] UI/UX 仕様書作成
- [x] 最終デザイン実装 (`mds-complete.astro`)
- [x] Figma ファイル作成
- [x] レスポンシブ対応

### ⏳ 進行中

- [ ] コンテンツの最終確認
- [ ] 画像・動画資産の準備
- [ ] ページレイアウト詳細設計

### 🔄 次フェーズ（チーム検討後）

- [ ] 採用情報ページの詳細実装
- [ ] ニュース・イベント機能実装
- [ ] フォーム実装 + バックエンド連携
- [ ] SEO / メタデータ設定
- [ ] アクセシビリティ対応
- [ ] パフォーマンス最適化
- [ ] テスト環境でのユーザーテスト
- [ ] 本番環境へのデプロイ

---

## 9. チーム検討項目（要決定）

### デザイン面

- [ ] ボタンのサイズ・配置は最適か？
- [ ] カラーコントラストは十分か？
- [ ] アニメーション速度は適切か？
- [ ] モバイル表示は問題ないか？

### コンテンツ面

- [ ] ニュース更新頻度は？（月1回 / 週1回 / 不定期）
- [ ] スタッフ写真の撮影は必要か？
- [ ] イベント写真のギャラリー形式は？
- [ ] 企業紹介動画は必要か？

### 機能面

- [ ] 応募フォームの項目詳細
- [ ] メール送信の実装方法
- [ ] ニュース管理画面の必要性
- [ ] 多言語対応は必要か？

### 運用面

- [ ] 誰がコンテンツを更新するのか？
- [ ] 承認フロー
- [ ] 更新スケジュール
- [ ] バックアップ・セキュリティ対策

---

## 10. 参考リンク

- **Figma デザイン**: https://www.figma.com/design/PIz6uPLnl6sRy7wCQTMALS/KIG-Corporate---Design-Concepts
- **参考サイト**: https://www.mds-fund.com/
- **デザインコンセプト**: `/DESIGN_CONCEPTS.md`
- **実装ページ**: `/src/pages/concepts/mds-complete.astro`

---

## 11. 次回ミーティングアジェンダ

```
1. デザイン確認
   - ボタン・ホバーエフェクト
   - レスポンシブ表示
   - カラースキーム

2. コンテンツ戦略
   - ニュース更新頻度の決定
   - 画像資産の準備状況
   - スタッフ情報の撮影日程

3. ページ詳細設計
   - 採用ページの構成確認
   - フォーム項目の決定
   - 問い合わせ機能の仕様

4. 実装タイムライン
   - 各ページの優先順位
   - 開発スケジュール
   - テスト・リリース予定
```

---

**作成**: Claude Code AI
**最終更新**: 2026年2月20日
