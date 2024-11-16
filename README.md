# Sprunki Incredibox Online

这是一个基于 [Next.js](https://nextjs.org/)、[Tailwind CSS](https://tailwindcss.com/)、[ShadcnUI](https://ui.shadcn.com/) 和 [NextIntl](https://next-intl-docs.vercel.app/) 的在线音乐游戏平台。

## 项目动机

Sprunki Incredibox 是一个创新的在线音乐游戏平台，致力于为用户提供独特、有趣的音乐创作体验。我们的目标是让每个人都能轻松地创作和分享音乐。

## 特性

- 多语言支持（中文、英文、法语、西班牙语、日语）
- 响应式设计，支持多设备访问
- 丰富的游戏模式和角色
- 社交分享功能
- 快速加载和流畅的用户体验

## 技术栈

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Shadcn UI
- next-intl 国际化
- 响应式设计
- 社交媒体分享集成

## 快速开始

```bash
# 克隆项目
git clone https://github.com/your-username/sprunki-incredibox.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```bash
.
├── public/                # 静态资源
│   └── images/            # 游戏图片和资源
├── src/
│   ├── app/               # 路由和页面
│   ├── components/        # 可复用组件
│   │   ├── game-window.tsx
│   │   ├── game-list.tsx
│   │   └── ui/            # Shadcn UI 组件
│   ├── lib/               # 工具函数
│   ├── styles/            # 全局样式
│   └── types/             # TypeScript 类型定义
├── messages/              # 国际化语言文件
│   ├── en.json
│   ├── zh.json
│   └── ...
```

## 国际化

项目支持多语言，语言文件位于 `messages/` 目录。目前支持：
- 🇺🇸 英语
- 🇨🇳 中文
- 🇫🇷 法语
- 🇪🇸 西班牙语
- 🇯🇵 日语

## 部署

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/sprunki-incredibox)

## 贡献

欢迎提交 PR 和 Issue！请阅读 CONTRIBUTING.md 了解详情。

## 许可证

[MIT License](LICENSE)

## 致谢

感谢 Incredibox 原作者和所有为项目做出贡献的开发者和音乐爱好者。
