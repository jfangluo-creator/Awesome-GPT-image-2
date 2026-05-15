# 📊 图表与信息图

[返回分类](categories.md) · [查看全部案例](cases-001-100.md) · [返回首页](../README.md)


信息图、流程图、知识图谱、技术图解、数据可视化、爆炸分解图、标注说明图等。

---

## 📊 例 3：一周穿搭指南

![一周穿搭指南](../images/一周穿搭指南.jpg)

**Prompt:**

```text
{
  "type": "7-day fashion lookbook infographic",
  "header": {
    "title": "{argument name=\"main title\" default=\"一周穿搭指南\"}",
    "subtitle": "{argument name=\"style keywords\" default=\"温柔 | 靓丽 | 优雅\"}",
    "slogan_cn": "优雅不设限，自信每一天",
    "slogan_en": "{argument name=\"english slogan\" default=\"ELEGANCE HAS NO LIMIT, BE CONFIDENT EVERY DAY\"}"
  },
  "subject": "{argument name=\"subject description\" default=\"young elegant Asian woman\"}",
  "layout": {
    "columns": 7,
    "column_elements": [
      "day_header",
      "main_portrait",
      "4_detail_thumbnails",
      "outfit_specs",
      "keywords_colors",
      "3_color_swatches",
      "star_ratings",
      "fabric_price",
      "4_season_icons"
    ],
    "days": [
      { "day": "周一 (MONDAY)", "outfit": "beige blazer suit", "scene": "场景：重要会议 / 正式商务" },
      { "day": "周二 (TUESDAY)", "outfit": "pink blazer suit", "scene": "场景：日常通勤" },
      { "day": "周三 (WEDNESDAY)", "outfit": "cream knit cardigan set", "scene": "场景：生活休闲" },
      { "day": "周四 (THURSDAY)", "outfit": "champagne slip dress", "scene": "场景：外出私会" },
      { "day": "周五 (FRIDAY)", "outfit": "blue knit top, white skirt", "scene": "场景：休闲社交" },
      { "day": "周六 (SATURDAY)", "outfit": "white sports bra, purple leggings", "scene": "场景：运动休闲" },
      { "day": "周日 (SUNDAY)", "outfit": "beige lounge knitwear", "scene": "场景：居家 / 约会" }
    ]
  },
  "footer": {
    "tips": "{argument name=\"footer tips\" default=\"Tips: 根据天气与场合灵活调整，配饰是提升整体造型的关键；保持自信与舒适，才是穿搭的最终目的。\"}",
    "legend": [
      "春: 春季适用",
      "夏: 夏季适用",
      "秋: 秋季适用",
      "冬: 冬季适用"
    ]
  }
}
```

**来源：** [@yyyole](https://x.com/yyyole) | 2026-05-10


---

## 📊 例 25：手机拆解图

![手机拆解图](../images/手机拆解图.jpg)

**Prompt:**

```text
Create a 3D Insane detailed exploded assembly drawing of {argument name="subject or object" default="smartphone"}
```

**来源：** [@Ankit_patel211](https://x.com/Ankit_patel211/status/2048834306379075759) | 2026-05-11

## 📊 例 30：FACS 面部表情图表

![FACS 面部表情图表](../images/FACS%20面部表情图表.jpg)

**Prompt:**

```text
生成一张包含 {argument name="grid" default="7x7 共 49 种图案的网格"} 的单张图像，展示各种面部表情及其对应的好莱坞 AU 代码（面部动作编码系统）。
```

**来源：** [@eijo_AIart](https://x.com/eijo_AIart/status/2052704638718398879) | 2026-05-13

## 📊 例 49：中国国家概况信息图

![中国国家概况信息图](../images/中国国家概况信息图.jpg)

**Prompt:**

```text
目标：为 {argument name="country name" default="中国"} 创建一份简洁、现代的国家概况信息图，标题为“中国国家概况”，中心放置大型 3D 浮雕地图，周围环绕统计数据卡片。

画布：16:9 横向信息图，浅灰色背景，清晰的企业编辑风格，柔和的阴影，红/蓝/绿强调色，高分辨率矢量与 3D 结合的外观。

主地图：在中心放置一张大型 3D 地形浮雕地图，占据画布大部分空间。使用地形配色：西部为橙褐色山脉，中部为黄色高原，东部和沿海为绿色低地。添加白色省界和黑色省份标签。将台湾、海南和南海诸岛作为独立的浮雕部分包含在内。在中心处放置醒目的黑色大写字母“CHINA”。用红色星号标记北京并标注。地图标签应准确包含 28 个省/自治区/直辖市标签：新疆、西藏、青海、甘肃、内蒙古、宁夏、四川、云南、贵州、广西、广东、海南、福建、浙江、江苏、安徽、山东、湖北、湖南、陕西、山西、北京、天津、辽宁、吉林、黑龙江、台湾和中国。

左上角标题栏：醒目的红色大标题“中国”，深色副标题“国家概况”，一条细红分割线，以及一段简短文字：“中国，全称中华人民共和国，是位于东亚的国家。它是世界上人口最多的国家，人口超过 14 亿。”

左侧统计卡片：一张圆角白色长卡片，包含 5 行堆叠的事实数据，每行配有红色圆形图标和文字。5 行内容为：人口 — {argument name="population value" default="14.1 亿"} — 世界排名：第 1；GDP（名义） — 17.79 万亿美元 — 世界排名：第 2；人均 GDP — 12,614 美元 — 世界排名：第 63；首都 — {argument name="capital city" default="北京"}；官方语言 — {argument name="official language" default="中文（普通话）"}。行与行之间使用细分割线。

右上角概况卡片：一张圆角白色卡片，标题为红色的“概况”。包含 4 行红色图标内容：政府 — 单一制社会主义共和国；成立日期 — 1949 年 10 月 1 日；土地面积 — 960 万平方公里，世界排名：第 3；人口密度 — 约 147 人/平方公里。

中右侧经济图表卡片：一张圆角白色卡片，标题为“经济概览”，副标题为“(名义 GDP)”，并附有小标签“万亿美元”。包含 4 根垂直柱状图，分别代表 2020、2021、2022、2023 年，数值分别为 14.72、16.86、17.96、17.79。2020–2022 年使用蓝色柱状，2023 年使用红色柱状。

左下角产业卡片：一张圆角白色卡片，标题为“产业构成 (按 GDP)”。包含 3 部分组成的环形图：蓝色代表工业 39.7%，红色代表服务业 53.2%，绿色代表农业 7.1%。添加带有相同 3 个标签和百分比的图例。

底部中心出口卡片：一张圆角白色卡片，标题为“主要出口产品 (2023 年)”。包含 5 列出口数据，配有蓝色线条图标和红色数值：电子产品 — 1.02 万亿美元；机械设备 — 0.78 万亿美元；纺织服装 — 0.31 万亿美元；汽车产品 — 0.26 万亿美元；化学产品 — 0.23 万亿美元。

右下角贸易伙伴卡片：一张圆角白色卡片，标题为“主要贸易伙伴 (按贸易总额)”。包含 5 条蓝色水平柱状图，配有小型旗帜图标和数值：美国 — 6640 亿美元；欧盟 — 6430 亿美元；东盟 — 5960 亿美元；中国香港 — 2650 亿美元；日本 — 2270 亿美元。

页脚：居中放置一行小字来源说明：“数据来源：世界银行、世界贸易组织、中国国家统计局。”

约束条件：所有卡片需围绕地图排列且互不重叠，使用统一的字体，红色标题，蓝色图表元素，柔和的投影，圆角卡片，且不得添加水印。
```

**来源：** [@abs_uiux](https://x.com/abs_uiux/status/2054973851553980678#reversed-0) | 2026-05-15


---

## 📊 例 50：Flaming Burger 项目

![Flaming Burger 项目](../images/Flaming%20Burger%20项目.jpg)

**Prompt:**

```text
目标：为一段 10 秒的火烤芝士汉堡美食广告创建一个电影感项目/规格表，顶部标题为“PART 1 | 10 SECONDS | 12 PANELS”。

画布：宽屏 16:9 黑色画布，带有细暖金色边框，深色高端电影质感背景，细腻的烟雾纹理，以及优雅的哑光金色衬线字体。使用精确的 12 帧项目网格，排列为 3 行 4 列，每个面板用细金线勾勒，并在左上角标注 01 到 12 的序号。

主体：一个极具戏剧性的美食汉堡，配有芝麻面包、炭烤牛肉饼、融化的切达干酪、生菜、番茄/洋葱点缀，以及烟雾、火星和火焰。汉堡应呈现超写实、光泽感、高对比度的效果，拍摄风格如同高端美食广告。使用 {argument name="burger style" default="a flaming gourmet cheeseburger with sesame bun, charred patty, melted cheddar, lettuce, tomato, smoke, sparks, and fire"}。整体色调为黑色、琥珀色、橙色火焰、熔岩芝士黄和深红色高光。

布局与面板内容：包含精确的 12 个面板，每个面板都有一个大型电影感图像区域和一个紧凑的底部元数据条，分为四个标签框：CAMERA（摄像）、ACTION（动作）、SOUND（声音）、TRANSITION（转场）。在这些标签旁使用小型金色图标、微小易读的注释以及细分隔线。12 个可见面板如下：
01：黑暗中低角度英雄汉堡特写，肉饼周围火焰升腾，背景有烟雾；注释建议“Low-Angle Hero / Slow Reveal”（低角度英雄/缓慢揭示），“Darkness and embers. Flames rise to reveal the hero”（黑暗与余烬。火焰升起揭示主角），“Ember crackle, flame whoosh, low cinematic hum”（余烬噼啪声、火焰呼啸声、低沉电影感嗡嗡声），“Heat shimmer push to next”（热浪闪烁推进至下一帧）。
02：汉堡宏观低推镜头，芝士滴落，火焰舔舐面包；动作描述火焰舔舐面包，烟雾缭绕；声音为火焰呼啸和面包滋滋声；转场为切镜。
03：芝麻面包的极度宏观特写，带有蒸汽卷和发光背景；动作描述芝麻面包发光，烟雾缭绕；声音为滋滋声回响和柔和的嘶嘶声；转场为推入。
04：融化芝士在炭烤肉层间拉丝的极度宏观特写；动作描述芝士融化并从肉饼间滴落；声音为芝士滋滋声和多汁的噼啪声；转场为匹配剪辑。
05：汉堡侧面轮廓特写，可见生菜、红洋葱/番茄，多汁肉饼处于焦点；动作描述层层堆叠，多汁、新鲜、充满活力；声音为多汁滴落声和柔和的脆响；转场为切镜。
06：居中中景英雄镜头，汉堡被火焰包围；动作描述汉堡在火与烟中呼吸；声音为低沉轰鸣和余烬碎裂声；转场为推入剪辑。
07：炭烤肉饼和芝士拉丝的极度宏观焦点切换；动作描述滋滋作响，芝士拉丝；声音为多汁的灼烧爆裂声和噼啪声；转场为切镜。
08：低角度英雄镜头，烟雾在汉堡周围缭绕；动作描述烟雾在主角周围升起；声音为余烬流动和柔和的呼啸声；转场为推入。
09：宏观环绕镜头，四分之三侧视图，汉堡从烟火中浮现；动作描述闪亮的高光和深邃的对比度；声音为电影感嗡嗡声和柔和的噼啪声；转场为环绕至正面。
10：正面居中锁定镜头，汉堡周围火圈加强；动作描述火圈加强，烟雾包裹汉堡；声音为火焰呼啸和冲击感音效；转场为切镜。
11：英雄美学推入镜头，汉堡在火焰中完美居中；动作描述高潮，火热的荣耀，一切看起来完美无瑕；声音为冲击撞击声和低沉的电影感嗡嗡声；转场为推入锁定。
12：最终居中英雄锁定镜头，火焰平息，烟雾升起；动作描述主角定格，结尾节拍；声音为余烬消散和柔和的尾音；转场为平息。

视觉风格：高端电影感美食摄影项目，超细腻的汉堡纹理，浅景深，油脂和芝士上的清脆高光，漂浮的余烬，逼真的火焰模拟，烟雾缭绕的黑色背景，高端商业处理。使该项目看起来像专业导演的拍摄计划，而不是漫画页面。使用 {argument name="top title" default="PART 1 | 10 SECONDS | 12 PANELS"} 和 {argument name="visual mood" default="dark luxury cinematic fire-and-smoke food commercial"}。

文本限制：所有可见文本保持英文。使用金色衬线数字和标题。元数据注释应小巧但视觉上合理，整齐地排列在每个面板下方。不要添加额外的面板、徽标、水印、人物、餐具、盘子或餐厅品牌。
```

**来源：** [@bmx_ai13](https://x.com/bmx_ai13/status/2054942255300157671#reversed-0) | 2026-05-15


---
