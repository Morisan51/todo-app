# CLAUDE.md - todo-app

## プロジェクト概要

Claude Code学習用のTODOアプリ。

## 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | React（Vite） |
| スタイリング | 素のCSS |
| データ保存 | LocalStorage |
| バージョン管理 | Git + GitHub |

## ディレクトリ構造

```
src/
├── App.js              ← ルートコンポーネント
├── App.css             ← スタイル
├── components/
│   ├── TodoInput.js    ← 入力フォーム
│   ├── TodoList.js     ← リスト表示
│   └── TodoItem.js     ← 1件表示
└── hooks/
    └── useTodos.js     ← 状態管理 + LocalStorage
```

## 実行コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## Git運用ルール

- コミットメッセージは日本語
- 機能単位でコミットを分ける（1コミット = 1機能）
- プッシュ前に差分を確認する
