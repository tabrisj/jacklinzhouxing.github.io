# 改版说明（对比原始版本）

本文件是 [README](README.md) 的补充，逐条列出 `svelte-migration` 分支相对 `main`（原始 React 版）的每一处改动，便于逐项核对。

- **对比基准**：`main` 分支（原始 React 版）
- **对比对象**：`svelte-migration` 分支（本分支）
- **预览地址**：https://jlz-svelte-preview.apps.workbuddy.host/?sharecode=PSI7E43UI2
- **原始站点**：https://jacklinzhouxing.github.io/

---

## 一句话总结

把站点从 React 单页应用改写成 Svelte 5 多页面静态站，顺带修掉了原站的 4 个实际故障，并重做了导航、排版与字号体系。**页面内容基本原样保留**，改动集中在技术底座和视觉细节。

---

## 一、体积与性能

| 指标 | 原始版 | 改版后 | 变化 |
|---|---|---|---|
| 首屏 JS（原始） | 470 KB | 98.9 KB | **−79%** |
| 首屏 JS（gzip） | 152.7 KB | 36.0 KB | **−76%** |
| CSS（gzip） | 11.2 KB | 4.6 KB | **−59%** |
| npm 依赖数 | 72 个 | **8 个** | −89% |
| 仓库文件数 | 106 个 | 44 个 | −58% |
| 研究子页 HTTP 状态 | **404** | **200** | 修复 |

> 注：打包模块数从 2074 涨到 4221，看起来像变多了，实际不是——Lucide 图标库每个图标是一个独立模块，产物里只保留用到的那几个。以产物体积为准。

---

## 二、技术底座

| 项 | 原始版 | 改版后 | 说明 |
|---|---|---|---|
| 框架 | React 18 | Svelte 5 | Svelte 编译期消解框架，运行时极小 |
| 架构 | 单页应用（SPA） | **多页面静态站（MPA）** | 每页一个真实 HTML 文件 |
| 路由 | react-router + `404.html` 重定向 hack | **无路由** | 页面就是文件，天然可达 |
| 动画 | framer-motion（9 个文件） | 20 行 IntersectionObserver | 体积从数百 KB 降到可忽略 |
| 图标 | lucide-react | @lucide/svelte | 品牌图标（LinkedIn / X / 小红书）改为内联 SVG |
| 样式 | Tailwind + shadcn/ui | **Tailwind（原配置原样保留）** | class 字符串直接沿用，视觉不走样 |
| 构建 | Vite + Bun | Vite + npm | CI 工作流同步改写 |
| 部署 | GitHub Actions → Pages | 不变 | 仍然 push 到 main 自动发布 |

**删掉的依赖**：recharts、react-hook-form、@tanstack/react-query、vaul，以及 48 个 shadcn/ui 组件文件。这四套库在原始版本里就是死代码（打包产物中完全不出现），只是占着 `package.json`；48 个 UI 组件里实际只用到 12 个，改版后用几十行原生标记替掉了那 12 个的职责。

---

## 三、修复的实际故障

### 1. 四个研究子页全部打不开（最严重）

```
/research/automation       → HTTP 404
/research/infrastructure   → HTTP 404
/research/governance       → HTTP 404
/research/innovation       → HTTP 404
```

GitHub Pages 没有服务端重写能力。原始版本靠 `404.html` 把访客弹到 `/?/research/automation`，但**没有任何代码把路径还原回去**，所以即使弹回来，React Router 看到的仍然是首页，最终渲染的还是首页。

后果：这四个页面只能从首页点击进入，不能分享、不能收藏、不能刷新，搜索引擎抓到的永远是 404。

改版后每个页面是磁盘上真实的 `index.html`，直接返回 200，问题从根上消失。

### 2. 首页藏着一个假论文组件

`src/components/PublicationsSection.tsx` 里列着七篇署名 **"Harwell, J."** 的论文，发表在 APSR、QJE、Econometrica 等顶刊——全部是模板遗留的占位数据，与本人无关。

该组件当时没有被渲染（`Index.tsx` 里 import 了但没挂载），所以线上看不到。但它**距离上线只差一行**：只要有人把 `<PublicationsSection />` 加回去，就会以他的名义发布七篇虚构的顶刊论文。

已删除该文件及其 import。

### 3. 一条死链

2026 年 5 月 8 日的新闻里链接到 `dspeconference.com`，该域名已过期并被重新注册（现在跳转到停放页 `dlszywz.com`）。已改为纯文本。

### 4. 联系表单会静默失败

原始代码：

```js
if (res.ok) { sent = true; form.reset(); }
// 没有 else
catch { /* 静默吞掉 */ }
```

Formspree 限流或网络抖动时，访客看到按钮闪一下又回到 "Send Message"——和"发送成功但数据丢了"完全一样，没有任何提示。这是全站唯一的联系方式。

现在：失败会显示明确的错误说明（区分"服务端拒绝"和"网络失败"），错误块获得焦点让读屏软件播报，成功态加了 `aria-live`，提交按钮下方常驻一行 "Prefer email? xinglz@ust.hk" 作为兜底。

### 5. 锚点跳转被导航栏遮挡

点击导航跳转到某个区块时，区块标题会被顶部固定导航盖住。已给所有区块加 `scroll-mt-20`。

### 6. 研究子页是死胡同

子页原本剥掉了整个导航，只剩站名和一个返回链接。从搜索引擎落到 `/research/automation/` 的访客，必须先回首页才能到达 News、Teaching、CV 或 Contact。现在子页复用同一套导航。

---

## 四、设计与排版调整

### 导航栏（重点）

原来七个链接是**纯文字**，只有鼠标悬停时变个颜色。现在：

- 药丸形背景，悬停有填充色
- **滚动时当前区块的导航项常驻高亮**（绯红色底 + 绯红字）
- 键盘 Tab 时有明显焦点环
- 命中区域从 20px 高增加到 36px 高
- 内宽从 `max-w-5xl` 改为 `max-w-3xl`，与正文左边缘对齐（原来在 1440px 屏上错位 128px）
- 桌面断点从 768px 移到 1024px（原来在中间区间会挤爆）
- 移动端菜单支持 Escape 关闭并把焦点还给按钮

### 对比度（实测，非估算）

| 用在哪 | 原值 | 对比度 | 现值 | 对比度 |
|---|---|---|---|---|
| 导航项 / 日期 / 说明 | `220 5% 46%` | **4.45:1 ✗** | `220 8% 40%` | **5.65:1 ✓** |
| 媒体条目类型标签 | `primary/60` | **3.08:1 ✗** | `primary/80` | **4.63:1 ✓** |
| 教学页讲座小字 | `muted/80` | **3.68:1 ✗** | 全色 | **5.65:1 ✓** |

WCAG AA 要求正文 4.5:1。原版三处不达标，其中导航项卡在 4.45 刚好差一点。

### 字号体系

原来散落着 `text-[15px]`、`text-[13px]` 这类手写值。现在建立语义阶梯：`caption` 13px / `body-sm` 14px / `body` 15px / `lead` 17px。

### 行宽

正文段落限制在 68 字符。原来的 720px 栏宽在 15px 字号下约 95 字符/行，远超阅读舒适区（60–75），容易串行。

### 字体

`font-serif` 原本会落到 Tailwind 默认的 Georgia，导致 **Teaching 板块的标题与全站不是同一款字**。已把 `serif` 直接钉死为 Playfair Display，别名不会再漂。

### 留白收紧

每块上下从 80/96px 收到 56/64px；列表间距、卡片内边距、区块内边距同步收紧约 30%。内容一条没删，页面明显变短。

### 标题统一

原来 Teaching 有图标但没细线、其余有细线没图标，导致标题左边缘不齐。抽出统一的 `SectionHeading` 组件（主题图标 + Playfair 标题 + 标题下绯红细线），七个区块各配图标：

Publications 📜 · News 📰 · Research 🔬 · Teaching 📖 · Engagement 📣 · CV 📄 · Contact ✉

---

## 五、内容改动

| 项 | 变化 | 说明 |
|---|---|---|
| 个人简介 | **未改** | 三段原文 |
| 媒体列表 | **未改** | 17 条（14 英文 + 3 中文） |
| 四个研究子页 | **未改** | 标题、叙述、论文列表全部原样 |
| 教学 | **未改** | 课程、学校、年份全部原样 |
| CV（工作/教育/服务/获奖） | **未改** | 原样 |
| **Publications** | **新增区块** | 8 篇论文从 CV 里提出来，按年份分组，**每篇都链到出版商页面** |
| **News** | 14 条 → **10 条** | 移除了 4 条纯媒体条目（FT ×2、Wire China、Rest of World），它们在 Engagement 里有权威记录 |
| **CV** | 移除论文列表 | 已移到 Publications，避免同一批论文出现两次 |
| **CV 内嵌预览** | 保留并改进 | 见下 |
| **"边缘学术人"** | 死链 → 链接 | 指向 https://xhslink.cn/o/7xPzz8l5NT，前面加小红书徽标 |

### CV 内嵌预览

原始版本有个固定 900px 高的 PDF iframe，在 660px 宽的栏里内容被压得很小，且它的 `<noscript>` 兜底对"手机不加载 PDF"这个更常见的情况根本不触发。

现在改为列宽自适应（`80vh`，最小 640px）、懒加载，底部加了一行明确的"打不开就点这里在新标签页打开 PDF"。

### 小红书徽标说明

Lucide 图标库 1.x 已移除所有品牌图标，所以这个徽标是手绘的近似图形（`#FF2442` 圆角方块 + 白色"小红书"），**不是官方 logo 资源**。如需精确的品牌资产，需替换为官方 SVG。

---

## 六、无障碍

- 两个布局都加了"跳到正文"的 skip link
- `aria-current` 从 `"true"` 改为 `"location"`（页内锚点的正确值）
- 表单输入框补了 `autocomplete`，移动端字号 16px（防止 iOS 聚焦时整页缩放）
- 动画尊重 `prefers-reduced-motion`（原版 framer-motion 未处理）
- 移动菜单支持 Escape 关闭 + 焦点返回

---

## 七、待确认的三件事

1. **News 少了 4 条媒体**。现在 News 最新的条目是 2026 年 5 月 8 日，因为 6–8 月的三条媒体报道都移到了 Engagement。如果希望首页"最近动态"保持新鲜，可以改为：News 保留全量时间线，Engagement 只收旧档。

2. **Publications 排在 News 之前**。理由是论文是学术职业的主要产出，不该埋在 CV 里。如果觉得顺序不对可以调整。

3. **是否需要保留 `.dark` 暗色令牌**。CSS 里有一套完整的暗色配色但没有任何切换器，属于"发布了一套未经验证的配色"。

---

## 八、如何验证

```bash
npm install
npm run dev      # 本地预览
npm run build    # 产物在 dist/
```

CI 已验证：干净导出后 `npm ci && npm run build` 通过。部署工作流沿用原来的 GitHub Actions，只是把 `bun` 换成了 `npm`。
