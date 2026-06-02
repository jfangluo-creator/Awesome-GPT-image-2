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
### 📊 例 81：现代地铁工程信息图

![现代地铁工程信息图](../images/现代地铁工程信息图.jpg)

**Prompt:**

```text
Create a premium square “reference-style urban transportation infographic” centered around a futuristic modern metro system called the {METRO_NAME}, designed as a beautifully curated transit-engineering handbook page rather than a public transport advertisement.

The composition should feel like a modern visual encyclopedia mixed with an elite railway infrastructure field guide and high-end editorial infographic system.

Visual Direction:

• 1:1 square composition
• Dark premium urban-tech background with subtle railway schematics, metro maps, and futuristic blueprint overlays
• Elegant palette using deep navy, matte black, steel gray, electric blue accents, and soft white lighting
• Refined editorial typography hierarchy with modern transportation aesthetics
• Rounded modular information cards with clean spacing
• Gentle realistic reflections and premium HUD-style dividers
• Minimal transit-system iconography
• Extremely detailed central metro train render viewed in dramatic three-quarter perspective inside a futuristic underground station
• Thin precision annotation lines pointing toward transportation systems and smart engineering features
• Clean, organized “knowledge-first” layout with high information density but breathable spacing

Main Subject Presentation:

A stunning ultra-detailed realistic render of the {METRO_NAME} modern metro train placed at the center, featuring sleek aerodynamic train design, glowing destination displays, realistic stainless-steel textures, illuminated station lighting, smart glass windows, premium urban-environment realism, and futuristic rail infrastructure.

Surround the metro with scientific and engineering callouts explaining:

• regenerative braking system
• smart signalling & CBTC control
• electric propulsion system
• passenger information systems
• safety and surveillance technology
• platform screen doors
• energy-efficient design
• smart ventilation systems
• accessibility features
• track and infrastructure engineering

Include modular infographic sections such as:

• Metro System Overview
• Technical Specifications
• Train Dimensions & Layout
• Passenger Capacity & Flow
• Smart Control Systems
• Sustainability Features
• Track & Infrastructure Engineering
• Signalling & Automation
• Station Design & Facilities
• Safety & Emergency Systems
• Passenger Experience Features
• Urban Connectivity & Network Map
• Energy Efficiency Comparison
• Construction & Expansion Timeline
• “Top 5 Smart Innovations” section
• Built for Future Smart Cities

Add small premium visualization modules like:

• metro network maps
• train blueprint diagrams
• station layout graphics
• passenger flow visualizations
• signalling workflow diagrams
• energy-efficiency comparison charts
• train configuration illustrations
• smart-city connectivity graphics
• platform safety diagrams
• infrastructure cross-section visuals

Style Keywords:

“premium urban mobility encyclopedia”
“editorial metro engineering handbook”
“high-end transportation infographic”
“scientific railway infrastructure poster”
“museum-quality transit reference page”
“modular smart-city knowledge system”
“clean transportation editorial design”
“ultra-detailed metro visualization”

Avoid:

• cluttered public advertisement aesthetics
• cartoon transportation styling
• unrealistic sci-fi levitating trains
• excessive cyberpunk neon overload
• chaotic city scenes
• generic subway poster layouts

The final result should resemble a professionally published railway infrastructure reference-book page created for transit enthusiasts, architects, engineers, urban planners, transportation designers, and educational infrastructure archives.
```

**来源：** [@status](https://x.com/j_smeaton99/status/2056950969083343077) | 2026-05-19

---

### 📊 例 82：奢华机械腕表技术图鉴

![奢华机械腕表技术图鉴](../images/奢华机械腕表技术图鉴.jpg)

**Prompt:**

```text
2x2 grid 16:9, do this for 4 most expensive strangest watches ever made:

class Haute_Horlogerie_DNA:
    def __init__(self):
        self.subject = "[TIMEPIECE]"
        self.parents = {
            "composition_parent": "Exploded movement diagram with transparent case",
            "material_parent": "Brushed titanium, sapphire crystal, rose gold gears, alligator leather",
            "graphic_parent": "Swiss manufacture technical brochure with elegant data panels",
            "atmosphere_parent": "Crisp daylight studio, pure white background, subtle reflection on polished surfaces"
        }
        self.mutations = {
            "semantic_mutation": "The balance wheel reveals a miniature cosmos ticking inside",
            "information_mutation": "Power reserve indicator, frequency, complication callouts, hand-finishing grades, assembly timeline",
            "medium_mutation": "Smooth matte premium paper with embossed logo",
            "scale_mutation": "Grain-level view of Côtes de Genève finishing and jewel bearings"
        }
        self.style_mix = [0.30, 0.30, 0.25, 0.10, 0.05]

    def generate_subject(self):
        subject = """
        [TIMEPIECE] shown in its full mechanical glory. The dial, hands, movement,
        and strap float in perfect alignment against a bright, clean background.
        Every gear and spring is highlighted with exacting clarity.
        """
        return render(
            subject,
            format="luxury watch advertisement with technical insert",
            title="[MODEL REFERENCE]",
            subtitle="[MANUFACTURE / COLLECTION]",
            constraints="bright white space, metallic brilliance, hyper-detailed, modern elegance"
        )
```

**来源：** [@status](https://x.com/Gdgtify/status/2056928396991488312) | 2026-05-19

---
### 📊 例 103：数字油画客厅练习页

![数字油画客厅练习页](../images/数字油画客厅练习页.jpg)

**Prompt:**

```text
目标：创建一张可打印的数字油画练习页，展示一个卡通客厅场景，中心站着一个类似儿童的角色，设计为简洁的黑白线条画，带有编号区域和颜色图例。

画布：A4 纵向页面，300 DPI，白色背景，细黑色外边框，清晰的矢量风格轮廓，除图例中的微小色块外无阴影。主插图占据页面上方约 70% 的空间，说明/颜色键面板占据下方约 30% 的空间。

主插图布局：绘制一个采用简洁圆润卡通风格的温馨客厅。中心：一个站立的卡通角色，有着大圆眼、小点鼻、担忧的波浪嘴、兜帽或头盔状头发、短袖衬衫、细手臂、长裤和赤脚。左侧：一张沙发，有两个座垫/靠垫，两侧各有一个可见的扶手，以及一个小靠枕。沙发上方：一幅带框的墙面画，包含一个小风景，有山丘、天空和一棵树。角色右侧：一张侧桌，上面有一盏灯和一个抽屉；后方/右侧有一盆高大的盆栽，正好有 10 片可见叶子。最右侧：一台三脚架上的相机，对准角色，带有屏幕/机身、镜头/按钮，以及正好三条三脚架腿。背景包括一面墙、右侧一扇带有垂直窗格的大窗户、带有木板线条的地板，以及前景中一块大的长方形地毯。

数字涂色区域：在场景的线条区域内放置黑色数字，使用 1 到 14 的数字。在匹配的表面上重复使用相同的数字。保持数字清晰并居中于形状内。匹配指定的分配：1 为米色墙面区域，2 为浅灰色头部/兜帽区域，3 为黄色皮肤/四肢，4 为黑色相机/三脚架细节，5 为白色衬衫和相机屏幕，6 为蓝色沙发，7 为棕褐色靠枕，8 为棕色画框，9 为天蓝色窗户/画中天空，10 为绿色植物/树叶，11 为奶油色灯具/地毯内部，12 为青色地毯边框，13 为木棕色地板/桌子/木板区域，14 为米色花盆。

底部说明面板：在图例上方添加一条水平分隔线。居中放置一个粗体标题，内容为 {argument name="instruction title" default="说明"}。在其下方，添加较小的文字，内容为 {argument name="instruction subtitle" default="用对应的颜色涂满区域。"}。下方排列 14 个颜色图例条目，分为三列。每个条目包含一个数字、一个小填充色块和一个英文颜色标签。14 个条目必须为：1 Beige (米色), 2 Light Gray (浅灰色), 3 Yellow (黄色), 4 Black (黑色), 5 White (白色), 6 Blue (蓝色), 7 Tan (棕褐色), 8 Brown (棕色), 9 Sky Blue (天蓝色), 10 Green (绿色), 11 Cream (奶油色), 12 Teal (青色), 13 Wood Brown (木棕色), 14 Beige (Pot) (米色花盆)。

风格限制：使其看起来像一张精致的儿童可打印练习页，具有平滑统一的黑色轮廓、圆润友好的形状、大量适合涂色的封闭区域，无渐变，无逼真纹理，无额外文字，无水印。主体可自定义为 {argument name="central character" default="一个担忧的卡通儿童形象"}，场景为 {argument name="room setting" default="温馨客厅"}，调色板为 {argument name="color palette" default="14 色数字油画调色板"}。
```

**来源：** [@status](https://x.com/NingKrysta45057/status/2057426499033055629#reversed-0) | 2026-05-20

---
### 📊 例 121：导览式科普绘本

![导览式科普绘本](../images/导览式科普绘本.jpg)

**Prompt:**

```text
《导览式科普绘本》提示词：

请根据【主题】创作一张高完成度的「导览式科普绘本」风格插画。

这是一张结合“大型场景主视觉 + 导览路线 + 可爱导览 IP + 知识站点 + 儿童科普绘本质感”的场景导览式科普图解页。画面需要让观者像被带着参观一个复杂系统一样，边看边理解主题背后的运行逻辑、空间结构、流程关系和关键知识点。

【基础设定】
主题：【填写主题，例如发射场的一天 / 一个集装箱的旅行 / 地铁站里的秘密路线 / 下潜到深海的一小时 / 机场如何运转 / 医院急诊系统 / 智慧农场 / 消防站出警流程】
画幅比例：【4:3 横版】
主色调：【根据主题自动匹配，整体保持明亮、清爽、儿童友好】
风格方向：【现代儿童科普绘本 / 场景导览式图解 / 高完成度数字插画】

【核心表达】
请围绕【主题】设计一个完整的大型场景或复杂系统。画面中必须有一个明确的主视觉场景，例如大型设施、交通系统、科技装备、自然探索场景、城市公共系统或生产流程。主体要足够清晰、有规模感、有细节，能够成为第一眼的视觉中心。

画面要通过“导览路线”的方式组织信息，避免仅把场景做成静态陈列。请设计一条清晰的参观路线、流程路线、时间线或空间动线，让读者可以沿着路线一步步理解这个系统是如何运行的。

【导览 IP 设计】
请为本图设计一个原创、可爱、亲和的导览小 IP。导览 IP 可以是小动物、小朋友、拟人化工具或其他适合主题的原创形象，但必须具有独立原创性，不要照搬任何参考图中的角色、动物形象、服装、配色或搭档关系。

导览 IP 的作用是：
1. 开场介绍主题
2. 指向关键知识点
3. 引导读者顺着路线阅读
4. 增加儿童绘本的陪伴感和趣味性

导览 IP 可以在画面中出现 2-3 次，但不要过度抢主视觉。角色应圆润、可爱、有表情、有动作，适合儿童科普绘本。

【信息结构】
画面中请设置 3-6 个“知识站点”，每个站点用简短中文标签和短说明表达。站点命名可以采用：
- 第1站｜xxx
- 第2站｜xxx
- 重点观察｜xxx
- 小知识｜xxx
- 为什么｜xxx
- 如何工作｜xxx

每个知识点都要围绕主题的核心运行逻辑展开，不要写空泛说明。文字要短、清楚、自然，避免长段落，适合儿童阅读。

【画面模块】
整张图建议包含以下模块：
1. 顶部主标题区：清楚写出主题名称
2. 开场导览区：导览 IP 引出主题
3. 大型主场景区：展示主题系统的完整场景
4. 导览路线区：用箭头、虚线、路径、时间节点或流程线串联知识点
5. 知识站点区：用小信息框、导览牌、局部标注展示关键知识
6. 小百科 / 小贴士区：补充一个有趣知识
7. 收尾区：让导览 IP 做简短总结或引导

【构图要求】
画面采用 4:3 横版构图，整体像一本高质量儿童科普绘本的跨页，也像一张儿童科技馆导览图。画面需要有清晰的视觉重心：大型主场景占据主要空间，导览路线贯穿画面，知识模块自然分布在周围。信息丰富但不能杂乱，阅读路径要顺畅。

【视觉风格】
整体采用现代儿童科普绘本风格：
- 明亮、清爽、干净的色彩
- 清晰自然的手绘线条
- 高完成度数字插画质感
- 细节丰富但有秩序
- 可爱但不低幼
- 有科普图解感
- 有导览地图感
- 场景真实可信，但表达方式亲和

【文字与标注】
文字以中文为主，使用短标题、短标签、简短说明。不要生成大段复杂文字。信息框应像儿童科普书中的导览牌、知识卡片或小贴士。文字要尽量清晰、简洁、可读。

【最终目标】
让整张图像一页高质量的儿童科普绘本：孩子第一眼被可爱角色和大场景吸引，第二眼能顺着路线读懂系统如何运行，第三眼还能继续发现细节和知识点。画面要具有系列化潜力，方便后续替换不同主题继续创作同类型图片。
```

**来源：** [@MrLarus](https://x.com/MrLarus/status/2058773446167773521) | 2026-05-26

---

### 📊 例 132：咕咕嘎嘎造型包装结构板

![咕咕嘎嘎造型包装结构板](../images/咕咕嘎嘎造型包装结构板.jpg)

**Prompt:**

```text
Using the attached image, create an illustration sheet of professional industrial design packaging for the package (PACKAGE TYPE). A centered heroic 3D rendering with realistic materials, soft studio lighting and commercial quality finishes. Surrounded by technical views: front, side, top, bottom, oblique perspective and flat position. Include sketches of the frame structure, crease lines, seam details, and size arrows in millimeters. Show materials and finishes (matte, glossy print, plastic, paper, glass, etc.) in handwritten annotations. Add color swatches, realistic product illustrations, and subtle shadows. Clean sketchbook background, realistic rendering + pencil sketch style, modern design design, ultra-detailed, portfolio ready.
```

**来源：** [@iamaiistudio](https://x.com/iamaiistudio/status/2059305097897914664) | 2026-05-28

---

### 📊 例 185：Neuro-AI 混合系统信息图

![Neuro-AI 混合系统信息图](../images/Neuro-AI%20%E6%B7%B7%E5%90%88%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
Create a premium square “neuro-AI hybrid system infographic” designed as a scientific cognitive engineering handbook page.

Visual Direction:
• 1:1 composition
• dark neutral background with glowing neural network overlays
• palette: electric blue, violet, soft white, silver
• elegant scientific typography and modular panels
• central ultra-detailed human brain + AI circuit fusion render

Main Subject:
A realistic human brain merging with AI neural networks and digital circuitry.

Include callouts:
• memory encoding system
• AI augmentation layer
• cognitive signal pathways
• emotional response mapping
• sensory integration nodes
• neural data transfer system
• learning adaptation loops

Modules:
• Brain Function Overview
• AI Enhancement Layers
• Signal Flow Diagram
• Cognitive Performance Metrics
• Human vs AI Comparison Chart
• Neural Safety Protocols
• Future Evolution Path

Style:
“neuroscience + AI engineering manual”, “high-end cognitive systems diagram”
```

**来源：** [@YaZoraiz](https://x.com/YaZoraiz/status/2052968427514708371) | 2026-05-30

---

### 📊 例 210：冠状病毒尺度缩放科学信息图

![冠状病毒尺度缩放科学信息图](../images/%E5%86%A0%E7%8A%B6%E7%97%85%E6%AF%92%E5%B0%BA%E5%BA%A6%E7%BC%A9%E6%94%BE%E7%A7%91%E5%AD%A6%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
instructions> [SUBJECT]=Coronavirus. A hyper-realistic 3D zoom-sequence infographic generated from a single input: [SUBJECT]. The system auto-detects scale layers from atomic/subcomponent to full contextual view. Layout Structure (CRITICAL) 6–8 circular or hexagonal frames arranged in expanding sequence Innermost frame = smallest detectable detail; outermost = full subject in environment Frames connected by subtle zoom-path lines No repeated scales — each frame shows new level of detail Frame Design Each zoom level includes: Hyper-detailed 3D render at that scale Micro label: scale name (e.g., "molecular," "cellular," "structural") + 3–5 word insight Optional: measurement tag or magnification factor Contextual Halo Around the sequence, include only scale-specific references: Measurement units, scientific notation, cultural scale metaphors (No generic magnifying glass icons) Scale Panel (Alternative Layout) Zoom level Key insight (3–5 words) Scale factor tag Detail icon (grid, wave, particle, etc.) Title "[SUBJECT]: AT EVERY SCALE" (or) "ZOOM: THE WORLD OF [SUBJECT]" Style: ultra-realistic 3D render, scientific editorial infographic, precise macro lighting, global illumination, shallow depth of field, clean sequential layout. </instructions>
```

**来源：** [@Gdgtify](https://x.com/Gdgtify/status/2051288232613351571) | 2026-05-30

---

### 📊 例 215：古希腊三哲时间轴城市图

![古希腊三哲时间轴城市图](../images/%E5%8F%A4%E5%B8%8C%E8%85%8A%E4%B8%89%E5%93%B2%E6%97%B6%E9%97%B4%E8%BD%B4%E5%9F%8E%E5%B8%82%E5%9B%BE.jpg)

**Prompt:**

```text
二千五百年前，柏拉图，苏格拉底， 亚力士多德，坐在雅典街头聊天，聊出了世界文明史的源头。

背景可以加上他们聊天内容，按时间轴的走向，重叠在古希腊雅典的城市风光中。
```

**来源：** [@ToroJushiAi](https://x.com/ToroJushiAi/status/2050713034503409874) | 2026-05-30

---

### 📊 例 226：奢华个人色彩档案信息图

![奢华个人色彩档案信息图](../images/%E5%A5%A2%E5%8D%8E%E4%B8%AA%E4%BA%BA%E8%89%B2%E5%BD%A9%E6%A1%A3%E6%A1%88%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
LUXURY PERSONAL COLOR PROFILE — EDITORIAL LAYOUT
Studio portrait of subject as anchor — skin retouched to luminous glass-like perfection, preserved natural structure, realistic pore texture, soft directional key lighting, no facial alteration. Background: warm ecru parchment with subtle linen grain texture. Layout reads like a Vogue Italia beauty supplement printed on heavyweight matte stock. Structured editorial grid, 3-column asymmetric, wide negative space, serif condensed display headers, all labels in spaced uppercase tracking, cohesive warm ivory/sand/ecru background system throughout all panels, ultra-photorealistic 8K, soft diffused studio lighting, flat elegant surfaces, no drop shadows.
PANELS:
① UNDERTONE DIAGNOSIS — Tonal spectrum bar from cool ash to warm amber, precision needle marker on subject's reading. Labels: Cool / Neutral-Cool / Neutral / Neutral-Warm / Warm. Fine annotation text.
② SEASONAL COLOR PALETTE — 10–12 fabric-textured swatches in subject's optimal season. Each labeled with poetic color name and HEX. Grouped: Power Colors / Softest Options / Harmonizing Neutrals.
③ COLORS TO AVOID — Desaturated row of clashing tones with fine editorial strikethrough. Clean, non-harsh presentation.
④ MAKEUP CARTOGRAPHY — Eyeshadow gradient dust swatches / blush tones fanned on skin strip / lip spectrum barely-there to bold / highlighter finishes labeled: champagne, rose gold, pearlescent ivory.
⑤ HAIR COLOR SPECTRUM — Curved gradient strip: base, dimension, highlight, contrast tones. Gold bracket indicators on best options.
⑥ JEWELRY & METAL GUIDE — Flat-lay editorial render: yellow gold, rose gold, oxidized silver, platinum finishes alongside complementary stone tones. Minimal styling.
⑦ YOU IN YOUR PALETTE — 3–4 editorial lookbook frames, subject in palette-correct outfits. Mood labels: Quiet Luxury / Off-Duty Editorial / Evening Presence.
⑧ CAPSULE WARDROBE GRID — Outfit flatlay: tops, bottoms, outerwear, shoes, bag — all palette-correct. Coordinating lines showing interchangeability. Net-a-Porter editorial aesthetic.
⑨ PRINTS & PATTERNS — 4 fabric print thumbnails: micro geometric, tonal abstract, classic stripe, floral scale. One-line styling note per print.
⑩ STYLE ARCHETYPE — Single typographic panel. Style identity title set large (e.g. "Modern Romantic / Warm Classicist"). Three defining aesthetic words. Four-line editorial wardrobe philosophy note.
RENDER SPECS: Ultra-photorealistic, 8K, editorial magazine print quality, warm neutral color grading, soft diffused studio lighting consistent across all panels, one serif display font + one fine sans-serif body font, no gradients, flat matte surfaces only.
```

**来源：** [@meng_dagg695](https://x.com/meng_dagg695/status/2049822844918575586) | 2026-05-30

---

### 📊 例 229：手机爆炸拆解图

![手机爆炸拆解图](../images/%E6%89%8B%E6%9C%BA%E7%88%86%E7%82%B8%E6%8B%86%E8%A7%A3%E5%9B%BE.jpg)

**Prompt:**

```text
Create a 3D Insane detailed exploded assembly drawing of [subject or object]
```

**来源：** [@Ankit_patel211](https://x.com/Ankit_patel211/status/2048834306379075759) | 2026-05-30

---

### 📊 例 230：长发造型分析信息图

![长发造型分析信息图](../images/%E9%95%BF%E5%8F%91%E9%80%A0%E5%9E%8B%E5%88%86%E6%9E%90%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
Create a professional "HAIRSTYLE ANALYSIS" infographic with a different male model (the same face) having long, thick hair (6-10 inches), slightly wavy texture.

Style should be clean, modern, premium grooming guide (similar layout but not identical).

TOP TITLE:
"HAIRSTYLE ANALYSIS - Long Hair Edition"

LEFT PANEL (Key Features with icons):
Face Shape: Oval
Hair Type: Thick
Texture: Wavy
Length: Long

BEST OPTIONS (Top row with green indicators):
Layered Flow Cut (Adds movement & volume)
Modern Curtain Hair (Stylish & balanced)
Textured Long Waves (Natural & full)
Loose Slick Back (Controlled but not flat)

LESS FLATTERING (Bottom row with red indicators):
Flat Straight Long Hair (No volume)
Overly Oily Slick Back (Too heavy)
Uneven Long Layers (Messy shape)
Excessively Frizzy Look (Uncontrolled)

BEST HAIR LENGTH SECTION:
Ideal: 6-10 inches with layers
Avoid: Too flat or too heavy bottom

BEST HAIR COLORS:
Dark Brown
Natural Black
Warm Brown
Ash Brown

DESIGN STYLE:
Clean grid infographic
White/beige background
Soft shadows
Premium magazine look
Realistic face and hair detail
Consistent spacing and typography
High resolution, 4K
```

**来源：** [@Gemalpha_88](https://x.com/Gemalpha_88/status/2048918707343401034) | 2026-05-30

---

### 📊 例 237：品牌口红推荐报告信息图

![品牌口红推荐报告信息图](../images/%E5%93%81%E7%89%8C%E5%8F%A3%E7%BA%A2%E6%8E%A8%E8%8D%90%E6%8A%A5%E5%91%8A%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
一、系统角色
你是一个专业美妆顾问 + 人脸分析系统 + 品牌视觉设计系统。
你的任务是：基于用户上传自拍与指定口红品牌，生成一张具有品牌调性的“口红推荐报告信息结构图”。

二、输入参数
用户图像：{用户自拍}
品牌：{口红品牌，如 Dior / YSL / Armani / Chanel / TF}
风格偏好（可选）：{通勤 / 温柔 / 气场 / 氛围感 / 显白优先}
推荐数量：3–5

三、品牌视觉层（新增核心模块）
根据 {品牌} 自动构建视觉风格（Brand Visual Identity），提取品牌调性，例如：
Dior：
优雅、高级、法式、灰白 + 银色、柔光
YSL：
黑金、性感、强对比、时尚编辑感
Armani：
低饱和、雾面、克制、灰调高级感
Chanel：
极简黑白、高级、理性、结构清晰
Tom Ford：
深色、高对比、奢华、电影感

视觉应用到海报：
1. 主色调（背景微变化，不是大面积铺色）
2. 强调色（用于色号标题/细线/小元素）
3. 光影风格（柔光 / 强对比 / 冷调 / 暖调）
4. 字体气质（优雅 / 现代 / 冷感 / 力量感）

四、分析层
对用户进行分析：
- 肤色：冷 / 暖 / 中性（+ 明度）
- 气质：清冷 / 温柔 / 明艳 / 干净 / 成熟
- 唇部特征：薄 / 厚 / 唇色基础
- 妆容状态：素颜 / 日常 / 精致
输出一句总结：「更适合 {色系} + {饱和度} + {质地} 的口红方向」

五、推荐层（增强差异）
从 {品牌} 推荐 3–5 个色号：
每个包含：
- 色号名称（#999）
- 色系（正红 / 豆沙 / 枫叶 / 奶茶 / 玫瑰）
- 上脸效果（显白 / 提气色 / 氛围感 / 气场增强）
- 场景（逛街 / 通勤 / 聚餐 / 约会 / 宴会）

要求：每个色号“风格明确区分”（一个日常、一个气场、一个氛围感等）

六、信息结构图
生成竖版信息结构图
整体风格：美妆时尚大片质感 + 结构化信息可视化排版 + 品牌视觉体系深度融合
极简但不单调，高级但有视觉层次

【整体布局】
左上：用户输入区
右上：分析结论
中部：试色矩阵（核心）
底部：总结

## 1️⃣ 左上（用户区）
用户自拍（真实质感）
+ 小标题：「肤色分析」
+ 一句话结论：「适合低饱和玫瑰调，避免高荧光色」

极细品牌色线条（如 YSL 金线 / Dior 灰线）

## 2️⃣ 中部（核心试色矩阵）
这是视觉重点区域（占比60%以上）
展示方式：将 3–5 个色号以“人脸试色对比”的形式排列：
每一列 = 一个色号
每个色号包含：
- 小型人脸图（同一张脸，不同唇色）
- 色号名称（如 #999）
- 色系标签（如 Classic Red）
- 一句话效果说明
要求：所有人脸保持一致，仅唇色变化，真实试色效果（lip color try-on），肤质真实，不塑料，光影统一。
排列方式：横向排布 或 网格排布（整齐但不死板）

品牌增强点：
- Dior：轻柔渐变背景 + 柔光阴影
- YSL：更强对比 + 黑色细分割线
- Armani：整体灰调统一，低对比
- Chanel：严格对齐，极简黑白
- TF：局部暗背景 + 高光强调

## 3️⃣ 每个色号模块
包含：
色号名（突出）
色系标签
一句推荐语
场景标签（逛街/通勤/聚餐/约会/宴会等）

品牌化处理：
- 用“品牌强调色”做：
  - 色号标题
  - 细分隔线
  - 小icon
（不是色块，而是“精致点缀”）

## 4️⃣ 底部总结
一段“有判断力的建议”，
例如：「日常建议选择低饱和豆沙色提升气色，重要场合可使用正红增强气场」
或：「你的肤色更适合柔和玫瑰调，避免高荧光色系」
但不要完全引用以上2个例子的建议，根据用户实际肤色来建议。
品牌增强：底部可加极淡品牌风格横线 / 极小品牌字样（非logo）

七、UI设计
- 不使用圆角卡片 UI
- 不使用厚边框
1. 引入“层级对比”：
   - 主体亮
   - 次要信息弱
2. 使用“微对比”：
   - 细线
   - 灰度差
   - 字重变化
3. 加入“节奏感”：
   - 疏密变化
   - 模块呼吸
4. 品牌点缀：
   - 只用 5% 强调
   - 不破坏极简结构

八、图像质量
真实皮肤质感
唇色精准
统一光影
商业级美妆摄影
8K

———
品牌：YSL
```

**来源：** [@liyue_ai](https://x.com/liyue_ai/status/2048667226195317219) | 2026-05-30

---

### 📊 例 239：拼拼豆豆风格信息图海报

![拼拼豆豆风格信息图海报](../images/%E6%8B%BC%E6%8B%BC%E8%B1%86%E8%B1%86%E9%A3%8E%E6%A0%BC%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
生成一张 16:9 横版信息图海报。
主题：潘金莲
必须覆盖的知识点：
【知识点1】
【知识点2】
【知识点3】
【知识点4】
【知识点5】
【知识点6】
【知识点7】
【知识点8】
视觉风格定义：
这是一张"拼豆 / Perler beads / fuse beads / 像素珠阵列"风格的结构性平面信息图海报。画面由大量规则排列的圆形塑料拼豆构成，每一颗拼豆都具有清晰圆形边界、轻微中心凹点、均匀间距、低饱和塑料质感和稳定网格秩序。整体必须保持正视平面构图，像一张由拼豆拼成的公共文化信息图海报，而不是玩具摄影、3D模型、卡通插画或普通像素画。
核心构图：
将【主题】主体压缩为一个大尺度单色拼豆图像场，而不是完整写实物体、居中插画或图标集合。主体必须从画幅边缘涌入，跨越页面边界，并被出血裁切，像一个更大的拼豆媒介图像残片进入纸面。主体占据主要视觉重量，但不完整呈现；观众必须通过轮廓、方向、缺失区域、拼豆密度和局部纹理重建主题。
色彩系统：严格三层功能配色 —— 浅色底场（60-70%）呼吸切割，主题结构色（25-35%）构成主体表达氛围，高对比信息色（3-6%）承载标题、编号、注释。信息节点必须沿留白窗口、色场边界、切口节点、主体缺口、负空间通道和底部边缘分散布置，数量为 8 个，对应 8 个知识点。
阅读路线：构建跳跃式阅读路径：上方小型标记 → 侧向主标题 → 主体边缘知识点 → 负空间注释窗口 → 底部脚注与图例。画面必须同时满足远距离识别和近距离阅读。
禁止：完整写实物体、可爱卡通风、3D 玩具摄影、景深虚化、图标堆叠式信息图、平均分配颜色、文字覆盖主体中心、水彩油画厚涂 3D 渲染风。
最终效果：一张高级拼豆风格结构性信息图海报。【主题】被压缩成巨大的拼豆色场、像素化珠阵边缘、缺珠空洞、负空间刀口、编号节点、档案注释和颗粒秩序。
```

**来源：** [@知识猫图解](https://x.com/GeekCatX/status/2059848813188378626) | 2026-05-28

---


### 📊 例 309：日文销售书籍信息图广告

![日文销售书籍信息图广告](../images/%E6%97%A5%E6%96%87%E9%94%80%E5%94%AE%E4%B9%A6%E7%B1%8D%E4%BF%A1%E6%81%AF%E5%9B%BE%E5%B9%BF%E5%91%8A.jpg)

**Prompt:**

```text
Goal: Create a premium Japanese business-book promotional infographic for {argument name="book title" default="最強の営業"}, presenting the idea that sales is more beautiful the muddier it gets, with a luxury black-and-gold editorial design.

Canvas: Wide 16:9 landscape advertisement, dark charcoal-black textured background with subtle diagonal fabric-like grain, sharp gold divider lines, high contrast white and metallic-gold typography. Overall feel: serious, authoritative, bestselling business book launch visual.

Layout: Left two-thirds is a structured infographic; right one-third shows exactly 1 upright 3D-rendered book mockup standing on a glossy dark surface with a faint reflection. The book cover is white, black, and gold, with oversized Japanese title text and a vertical spine visible. Add small supporting Japanese cover text, including the main title {argument name="book title" default="最強の営業"}, the phrase {argument name="sales phrase" default="営業に『センス』はいらない"}, and gold emphasis around the word キーエンス.

Top headline area: Large Japanese headline in the upper left: {argument name="headline text" default="営業は、泥くさいほど美しい"}. Make “泥くさい” metallic gold and the rest white. Beneath it, add a thin gold line and a smaller subtitle: {argument name="subtitle text" default="売上1兆円企業キーエンスで学んだ『凡人が天才に勝つ技術』"}.

Middle section: A cream-colored horizontal panel titled 「この本のエッセンス」 on a black-and-gold ribbon. Include exactly 3 essence rows, each with a circular black icon at left and Japanese label plus explanation at right: 1) gear icon, 「仕組み」で勝つ: explanation about not relying on individual talent or intuition and pursuing reproducible systems anyone can sell with; 2) sunrise icon, 「未来」を売る: explanation about proposing the customer’s ideal future beyond the product; 3) bar chart icon, 「量」を科学する: explanation about breaking down behavior like physics and producing quality from overwhelming contact volume.

Lower middle section: Black panel with gold borders titled 「明日から使える 3つの必殺型」. Include exactly 3 numbered method cards in a row: 1) 「セルフロープレ」 with a simple line icon of a person and speech bubble, describing repeating role-play alone before meeting clients; 2) 「インパクトデモ」 with a monitor/play icon, describing making the client experience convenience and internalize it; 3) 「ワンモア」 with an open-door arrow icon, describing making one more angle of proposal before giving up. Use gold numerals in small boxed labels.

Bottom message strip: Add a small outlined label 「メッセージ」 at bottom left. Main sentence in large Japanese text: {argument name="bottom message" default="『頑張ります』はいらない。必要なのは、結果を出すための『武器』と『防具』だ。"} Highlight 「武器」 and 「防具」 in gold outlined boxes. At bottom right add a gold closing line: 「泥くさく、しかし最高に合理的な営業学がここに!」

Visual style: Japanese corporate advertising, bookstore poster, elegant typography mixing Mincho-style serif Japanese and bold Gothic Japanese, crisp grid alignment, metallic gold accents, off-white panels, subtle shadows, clean vector icons, realistic book mockup lighting.

Constraints: Use exactly 1 book mockup, exactly 3 essence rows, and exactly 3 method cards. Keep all text legible, preserve the Japanese wording, avoid extra logos, avoid people, avoid clutter, no watermark.
```

**来源：** [あさひ](https://x.com/asahi_sales) | 2026-05-30

---


### 📊 例 330：伊斯坦布尔天气信息海报

![伊斯坦布尔天气信息海报](../images/%E4%BC%8A%E6%96%AF%E5%9D%A6%E5%B8%83%E5%B0%94%E5%A4%A9%E6%B0%94%E4%BF%A1%E6%81%AF%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
设计一张高质量海报，提供关于 {argument name="location" default="伊斯坦布尔"} 在 {argument name="date" default="2026 年 6 月 2 日"} 的天气信息。

[English]
Design a high-quality poster providing information about the weather in {argument name="location" default="Istanbul"} on {argument name="date" default="June 2, 2026"}.
```

**来源：** [@Ahmet Muhammed Ertuğrul](https://x.com/ahmetmertugrul/status/2061561008750027029) | 2026-06-01

---


### 📊 例 373：带有参考角色的 Notebook Slides

![带有参考角色的 Notebook Slides](../images/%E5%B8%A6%E6%9C%89%E5%8F%82%E8%80%83%E8%A7%92%E8%89%B2%E7%9A%84%20Notebook%20Slides.jpg)

**Prompt:**

```text
[中文]
以 REFERENCE_0 为角色基础，创建一套由 8 张图片组成的日式教育 Slides，主题为 {argument name="topic" default="Claudeに『部下AI』を持たせる"}。保持角色设计、服装、面具、发型和赛博朋克细节与参考图一致，但在每张 Slide 中重新绘制角色的姿势和表情。

整体格式：每张 Slide 应呈现为手绘笔记本/速写本页面，背景为米色纸张，带有黑色圆角外框，左侧有螺旋装订，使用马克笔风格的日语手写字体，并配有红色强调标记、箭头、对勾、小图标和简单的流程图。采用温暖的模拟笔记风格，而非整洁的企业演示文稿。在所有 8 张图片中保持统一的 Slide 设计语言。

角色放置：在大多数 Slide 中，将角色作为演示者/吉祥物放置在右侧或右下角。姿势要自然多变：双手张开表示惊讶、指向图表、拿着剪贴板、坐着审阅、做出 OK/确认手势，或举起一根手指进行讲解。保留参考角色的身份和服装特征。

生成以下 8 个 Slide 主题：
1. 开场/整体概述：标题文本 {argument name="headline text" default="Claudeに『部下AI』を持たせる"}；副标题 {argument name="subtitle text" default="15分で仕事を自動化する5つのテンプレート"}；核心信息：「部下AI」が開発の常識を変えた；包含五个自动化示例：コードレビュー、テスト作成、ドキュメント生成、全部15分で自動化，以及简单的清单式布局。
2. 什么是子 Agent：解释「サブエージェントとは」，即一种可复用的 AI 角色或专家助手。包含小型角色卡片和箭头，展示主 Claude Agent 如何委派任务。
3. 为什么需要它：解释「なぜ必要か」，通过对比前后差异，强调反复要求 AI 执行相同任务效率低下，可以将其转化为模板。
4. 代码审查员：标题「コードレビュー」；展示 GitHub/代码审查风格的流程，包含文件、注释、Bug 和对勾图标。
5. 测试编写器：标题「テストライター」；展示测试生成工作流，包含步骤、文件名、单元测试和通过/失败风格的图标。
6. 安全扫描器：标题「セキュリティスキャナー」；展示风险等级 CRITICAL、HIGH、MEDIUM、LOW，并强调 Agent 仅检测问题而不自动修复。
7. 成本优化：标题「コスト削減の鍵：モデルの使い分け」；展示对比，说明更便宜/更小的模型可以处理简单的检查，从而大幅降低成本，并用醒目的红色标注节省金额。
8. 今日起步/总结：标题「今日から始める一歩」；展示简单的 3 步流程：创建模板，将其放入 Claude Agents 文件夹或工作流中，请求审查/自动化，最后用一个大对勾标记完成。

文字风格：全程使用日语。标题要大且粗，带有红色下划线和手写注释。图表要简洁易读。仅使用列出的 8 个 Slide 主题，不要添加额外页面。

约束条件：每张图片必须保持相同的笔记本布局、米色调色板、黑色边框、左侧螺旋装订以及一致的角色身份。避免照片级真实感，避免 3D 渲染，避免水印，且不得将角色更改为其他人。

[English]
Using REFERENCE_0 as the character base, create a consistent set of exactly 8 Japanese educational slide images about {argument name="topic" default="Claudeに『部下AI』を持たせる"}. Keep the character design, outfit, mask, hairstyle, and cyberpunk details consistent with the reference, but redraw the character in new poses and expressions for each slide.

Overall format: Each slide should look like a hand-drawn notebook/sketchbook page with a cream paper background, black rounded outer frame, left-side spiral binding, marker-style Japanese handwriting, red emphasis marks, arrows, check marks, small icons, and simple workflow diagrams. Use a warm analog note-taking style rather than a clean corporate deck. Maintain the same slide design language across all 8 images.

Character placement: Place the character as a presenter/mascot on the right side or lower-right area of most slides. Vary the pose naturally: surprised with both hands open, pointing at diagrams, holding a clipboard, sitting while reviewing, making an OK/check gesture, or explaining with one raised finger. Preserve the reference character’s identity and clothing.

Generate exactly these 8 slide topics:
1. Opening / overall overview: Title text {argument name="headline text" default="Claudeに『部下AI』を持たせる"}; subtitle {argument name="subtitle text" default="15分で仕事を自動化する5つのテンプレート"}; main message: 「部下AI」が開発の常識を変えた; include the five automation examples: コードレビュー, テスト作成, ドキュメント生成, 全部15分で自動化, and a simple checklist-like layout.
2. What is a sub-agent: Explain 「サブエージェントとは」 as a reusable AI role or specialist assistant. Include small role cards and arrows showing a main Claude agent delegating tasks.
3. Why it is needed: Explain 「なぜ必要か」 with a before/after comparison, emphasizing that repeatedly asking AI for the same tasks is inefficient and can be turned into templates.
4. Code reviewer: Title 「コードレビュー」; show a GitHub/code review style flow with files, comments, bugs, and a check mark.
5. Test writer: Title 「テストライター」; show a test-generation workflow with steps, file names, unit tests, and pass/fail style icons.
6. Security scanner: Title 「セキュリティスキャナー」; show risk levels CRITICAL, HIGH, MEDIUM, LOW and emphasize that the agent detects issues but does not automatically fix them.
7. Cost optimization: Title 「コスト削減の鍵：モデルの使い分け」; show a comparison that cheaper/smaller models can handle simple checks and that costs can become much cheaper, with bold red savings notes.
8. Start today / summary: Title 「今日から始める一歩」; show a simple 3-step process: create a template, place it in a Claude agents folder or workflow, ask for review/automation, then mark it complete with a big check.

Text style: Use Japanese text throughout. Make headlines large and bold, with red underlines and handwritten annotations. Keep diagrams simple and readable. Use only the listed 8 slide topics and do not add extra slides.

Constraints: Keep the same notebook layout, cream color palette, black border, left spiral binding, and consistent character identity across every image. Avoid photorealism, avoid 3D rendering, avoid watermarks, and do not change the character into a different person.
```

**来源：** [@テツメモ｜AI図解×検証｜Newsletter](https://x.com/tetumemo/status/2061415764985569667#reversed-0) | 2026-06-01

---
