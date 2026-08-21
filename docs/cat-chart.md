# 📊 图表与信息图

[返回分类](categories.md) · [查看全部案例](cases/cases-001-100.md) · [返回首页](../README.md)


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

### 📊 例 434：面部表情解剖图表

![面部表情解剖图表](../images/%E9%9D%A2%E9%83%A8%E8%A1%A8%E6%83%85%E8%A7%A3%E5%89%96%E5%9B%BE%E8%A1%A8.jpg)

**Prompt:**

```text
[中文]
创建一个清晰的教育类 {argument name="expression grid" default="FACS 面部动作编码系统表情网格"}，主体为 {argument name="subject" default="写实成年女性角色"}。采用极简影棚灯光，{argument name="background" default="中性白色背景"}，呈现专业面部解剖参考图表美学，具备写实的皮肤纹理，风格统一

[English]
Create a clean educational {argument name="expression grid" default="FACS Action Unit expression grid"} featuring a {argument name="subject" default="realistic adult female character"}. Minimal studio lighting, {argument name="background" default="neutral white background"}, professional facial anatomy reference sheet aesthetic, realistic skin texture, consistent
```

**来源：** [@Roger](https://x.com/AI_Skiller/status/2062962362991214858) | 2026-06-05

---

### 📊 例 492：金毛寻回犬百科卡片

![金毛寻回犬百科卡片](../images/%E9%87%91%E6%AF%9B%E5%AF%BB%E5%9B%9E%E7%8A%AC%E7%99%BE%E7%A7%91%E5%8D%A1%E7%89%87.jpg)

**Prompt:**

```text
[中文]
目标：创建一张关于 {argument name="animal breed" default="金毛寻回犬"} 的垂直模块化百科卡片，设计风格参考精致的中文宠物科普海报。

画布：高长比例信息图，约 9:16 纵横比，温暖的米白色背景，柔和的米色和奶油色圆角卡片，带有细腻的阴影，留白充足，网格对齐整齐，具备高分辨率打印级质感。

主体布局：在中心偏左位置放置一只大型写实全身金毛寻回犬，站立并面向前方，嘴巴微张，露出舌头，毛发金黄蓬松，爪部自然，采用柔和的摄影棚灯光。左上方放置一个小巧的品牌/标签胶囊，随后是一个醒目的中文大标题（品种名称）及副标题“温暖友善的家庭伴侣”。在副标题下方添加小号大写英文字母“GOLDEN RETRIEVER”。

顶部区域元素：在标题和犬只周围包含 3 个紧凑的信息块：左侧 1 个小型品种起源/规格卡片（包含多行简短统计数据），右上角 1 个小型人气或评分卡片（带有星级评分），左侧统计数据下方 1 个小型介绍卡片（包含简短描述性文字）。

右侧细节栏：创建 5 个堆叠的圆角细节卡片，每个卡片包含一张圆形特写照片和简短的中文说明文字。5 个特写分别为：1 眼部/面部细节，2 耳部或口吻细节，3 毛发细节，4 尾部或身体毛发细节，5 脚垫细节。将这些卡片垂直对齐在犬只右侧。

中部及底部模块：在犬只下方及周围使用由 10 个圆角矩形内容卡片组成的整洁仪表盘。这 10 个卡片分别为：1 身体特征卡（带小型侧视图犬只剪影及要点文字），2 性格特征卡（带 5 个小型线条图标），3 能力/评分卡（带 5 行星级评分），4 生活习惯卡（带 4 个图标要点），5 护理建议卡（带多行简短要点），6 安全或警告卡（带三角形警示图标），7 优缺点对比卡（分为绿色“优点”和红色“缺点”区域），8 适合饲养人群卡（带 5 个图标要点），9 核心要点 Top 5 卡（带 5 个带数字的橙色圆圈），10 小型补充资料/知识卡（用于平衡网格布局）。

视觉风格：专业的百科卡片美学，整洁的中文编辑排版，采用奶油色、米色、金棕色、柔和橙色以及淡雅的绿/红色调。使用细线条图标、圆形照片裁剪、小型金色星级评分、圆角设计、细腻的投影以及统一的边距。中心犬只应为视觉焦点；文字排版应紧凑且井然有序。

文本内容：全程使用中文 UI 风格标签和简短的中文段落，主标题设置为 {argument name="headline text" default="金毛犬"}。副标题设置为 {argument name="subtitle text" default="温暖友善的家庭伴侣"}。保持文字清晰易读，避免拥挤；在无法显示微小文字的地方使用占位符式的短中文要点行。

自定义：将整体色调设置为 {argument name="color palette" default="暖奶油色、米色、金棕色、柔和橙色"}，插图/照片风格设置为 {argument name="visual style" default="写实宠物摄影结合简洁信息图设计"}。

约束条件：仅限一只主体犬只，右侧栏必须为 5 个细节卡片，底部/中部必须为 10 个信息卡片，星级评分卡必须为 5 行，Top 5 卡片必须为 5 个带数字的项目。禁止出现人物、水印、杂乱背景或额外动物。

[English]
Goal: Create a vertical modular encyclopedia card about {argument name="animal breed" default="Golden Retriever"}, designed like a polished Chinese science-popularization pet profile poster.

Canvas: Tall portrait infographic, about 9:16 aspect ratio, warm off-white background, soft beige and cream rounded cards, subtle shadows, plenty of white space, clean grid alignment, high-resolution print-ready look.

Main layout: Place a large realistic full-body golden retriever in the center-left, standing and facing forward, happy open mouth, visible tongue, fluffy golden coat, natural paws, soft studio lighting. At the top-left, use a small brand/tag pill, then a large bold Chinese headline for the breed name and a short subtitle meaning “gentle and friendly family companion.” Add the English text “GOLDEN RETRIEVER” below the subtitle in small uppercase letters.

Top area elements: Include exactly 3 compact information blocks around the title and dog: 1 small breed-origin/specification card on the left with multiple short rows of stats, 1 small popularity or rating card at the top-right with star rating, and 1 small introduction card below the left stats with brief descriptive text.

Right detail column: Create exactly 5 stacked rounded detail cards, each with a circular close-up photo and short Chinese explanatory text. The 5 close-ups are: 1 eye/face detail, 2 ear or muzzle detail, 3 coat/fur detail, 4 tail or body coat detail, 5 paw pad detail. Keep these cards aligned vertically on the right side of the dog.

Middle and lower modules: Use a neat dashboard of exactly 10 rounded rectangular content cards below and around the dog. The 10 cards are: 1 physical characteristics card with a small side-view dog silhouette and bullet text, 2 personality traits card with five small line icons, 3 ability/rating card with exactly 5 rows of star ratings, 4 lifestyle habits card with four icon bullets, 5 care advice card with multiple short bullet rows, 6 safety or warning card with triangle alert icons, 7 strengths and weaknesses comparison card split into green “advantages” and red “disadvantages” areas, 8 suitable owners card with five icon bullets, 9 Top 5 key facts card with exactly five numbered orange circles, 10 small bonus profile/knowledge card if needed to balance the grid.

Visual style: Professional encyclopedia-card aesthetic, clean Chinese editorial layout, soft warm palette of cream, beige, pale gold, muted orange, light brown, and gentle green/red accents. Use thin line icons, circular photo crops, small gold star ratings, rounded corners, subtle drop shadows, and consistent margins. The central dog should be the most visually dominant element; all text should look dense but organized.

Text content: Use Chinese UI-style labels and short Chinese paragraphs throughout, with the main title set to {argument name="headline text" default="金毛犬"}. Use a warm subtitle set to {argument name="subtitle text" default="温暖友善的家庭伴侣"}. Keep text legible-looking but do not overcrowd; use placeholder-like short Chinese bullet lines where tiny text is not readable.

Customization: Set the overall palette to {argument name="color palette" default="warm cream, beige, golden brown, muted orange"} and the illustration/photo style to {argument name="visual style" default="realistic pet photography combined with clean infographic design"}.

Constraints: Exactly one main dog, exactly 5 right-column close-up detail cards, exactly 10 lower/middle information cards, exactly 5 rows in the star-rating card, exactly 5 numbered items in the Top 5 card. No people, no watermark, no messy background, no extra animals.
```

**来源：** [@自学Ai的鱼头叔叔](https://x.com/Aiyutoushushu/status/2062828293557273035) | 2026-06-05

---

### 📊 例 493：英国短毛猫百科图鉴卡片

![英国短毛猫百科图鉴卡片](../images/%E8%8B%B1%E5%9B%BD%E7%9F%AD%E6%AF%9B%E7%8C%AB%E7%99%BE%E7%A7%91%E5%9B%BE%E9%89%B4%E5%8D%A1%E7%89%87.jpg)

**Prompt:**

```text
[中文]
目标：为 {argument name="animal topic" default="英国短毛猫"} 创建一张竖版百科风格的图鉴卡片，设计风格参考精致的中文科普信息图。

画布：3:4 竖版布局，暖象牙色背景，柔和的鼠尾草绿边框，圆角模块化卡片，细腻的阴影，整洁的排版间距，高分辨率印刷质量。

页眉：左上角包含一个小书本图标，并在该参数内添加小型图鉴标签：{argument name="atlas label" default="百科科普图鉴 CAT BREED ATLAS"}。下方使用该参数添加醒目的大号深绿色中文标题：{argument name="headline text" default="英国短毛猫"}。标题下方放置英文副标题“British Shorthair”及一行简短的中文描述。副标题下方添加三个带有图标的小型胶囊标签。

主体：画面中右侧为一只写实的英国短毛猫摄影图：毛发呈蓝灰色且质感丰盈，圆脸，毛发浓密，拥有铜金色双眼，耳朵直立，正面坐姿，尾巴向右卷曲。猫咪背景为柔焦的米色调家居内饰。

布局：使用 9 个带标签的信息模块，每个模块配有一个绿色圆形字母徽章：从 A 到 I。将 A、B、C、D、E 排布在上部和中部区域，F、G、H 排布在下方，I 作为底部全宽特色条。每个模块均为圆角矩形，填充淡奶油色，并带有细绿色轮廓线。

模块数量与内容：包含以下 9 个模块：A 基本资料，B 外貌特征，C 性格/行为，D 喂养与护理，E 风险与注意事项，F 适宜人群，G 优缺点对比，H 快速评分，I 5 大关键词。使用简洁的中文正文和微型图标，保持布局清晰，避免拥挤。

细节标注：添加 5 个圆形放大细节标注，通过细引导线连接至猫咪：1 大圆眼，2 丰盈毛发质感，3 粗圆尾巴，4 浓密胸/颈部毛发，5 圆爪/紧凑体型特征。每个标注应包含一张裁剪后的微距图像及一个简短的中文标签和一段说明文字。

可见重复元素：在 A 模块中包含 4 个横向排列的小型毛色猫头图标。在 E 模块中包含 5 行带有红色三角形警告图标的警示项。在 F 模块中包含 3 行带有绿色勾选图标的适宜人群项，以及 2 行带有橙色 X 图标的不适宜人群项。在 G 模块中包含 2 列对比栏，分别为绿色“优点”栏和橙色“缺点”栏。在 H 模块中包含 6 行评分项，每行配有蓝色星级评分。在 I 模块中包含 5 个关键词卡片，编号 1 至 5，每个配有一个小图标：笑脸、男性符号、鱼、小圆圈符号及爱心。

底部照片条：在右下方放置 4 张小型圆角猫咪生活/姿态照片：正面坐姿、侧面站姿、放松躺卧、蜷缩在窝中睡觉。每张照片下方添加简短的中文说明。

视觉风格：专业百科卡片，柔和的教育设计，柔和的绿色与米色调色板，写实动物摄影与矢量 UI 图标结合，细分割线，圆角设计，紧凑而整洁的中文排版。避免使用霓虹色、杂乱元素、水印、二维码或多余的装饰性文字。

[English]
Goal: Create a vertical encyclopedia-style atlas card for {argument name="animal topic" default="British Shorthair cat"}, designed like a polished Chinese science-popularization infographic.

Canvas: Portrait 3:4 layout, warm ivory background, soft sage-green borders, rounded modular cards, subtle shadows, clean editorial spacing, high-resolution print quality.

Header: At the top left include a tiny book icon and the small atlas label in Chinese inside this parameter: {argument name="atlas label" default="百科科普图鉴 CAT BREED ATLAS"}. Add a large dark-green Chinese headline using this parameter: {argument name="headline text" default="英国短毛猫"}. Under it place the English subtitle “British Shorthair” and a short Chinese descriptor line. Add three small pill tags with icons below the subtitle.

Main subject: Center-right dominant realistic studio photo of a British Shorthair cat: plush blue-gray coat, round face, dense fur, copper-gold eyes, upright ears, sitting front-facing with tail curled to the right. Background behind the cat is softly blurred home interior in beige tones.

Layout: Use exactly 9 labeled information modules, each with a green circular letter badge: A through I. Arrange A, B, C, D, E around the upper and middle area, F, G, H beneath them, and I as a full-width bottom feature strip. Each module is a rounded rectangle with pale cream fill and thin green outline.

Section count and contents: Include exactly these 9 modules: A Basic profile, B Appearance features, C Personality / behavior, D Feeding and care, E Risk and precautions, F Suitable owners, G Pros and cons comparison, H Quick rating, I Top 5 keywords. Use concise Chinese body copy and tiny icons, but keep the layout readable and not overcrowded.

Detail callouts: Add exactly 5 circular zoom-in detail callouts connected to the cat by thin leader lines: 1 large round eyes, 2 plush coat texture, 3 thick rounded tail, 4 dense chest / neck fur, 5 round paws / compact body feature. Each callout should contain a cropped macro image and a short Chinese label with a paragraph-length note.

Visible repeated elements: In section A include exactly 4 small coat-color cat head icons in a row. In section E include exactly 5 warning rows with red triangular warning icons. In section F include exactly 3 owner-suitability rows with green check icons and exactly 2 unsuitable rows with orange X icons. In section G include exactly 2 comparison columns, one green “advantages” column and one orange “disadvantages” column. In section H include exactly 6 rating rows, each with blue star ratings. In section I include exactly 5 keyword cards, numbered 1 to 5, each with a small icon: smiley face, male symbol, fish, small circular symbol, and heart.

Bottom photo strip: Along the bottom right, place exactly 4 small rounded photos of the cat showing lifestyle / posture scenes: sitting front view, standing side view, lying relaxed, curled up sleeping in a bed. Add small Chinese captions under each photo.

Visual style: Professional encyclopedia card, soft educational design, muted green and beige palette, realistic animal photography mixed with vector UI icons, thin dividers, rounded corners, compact but clean Chinese typography. Avoid neon colors, clutter, watermark, QR codes, or extra decorative text.
```

**来源：** [@自学Ai的鱼头叔叔](https://x.com/Aiyutoushushu/status/2062828293557273035) | 2026-06-05

---

### 📊 例 494：2027 年审美系桌面日历

![2027 年审美系桌面日历](../images/2027%20%E5%B9%B4%E5%AE%A1%E7%BE%8E%E7%B3%BB%E6%A1%8C%E9%9D%A2%E6%97%A5%E5%8E%86.jpg)

**Prompt:**

```text
[中文]
请使用这张照片（可在参考图中放入你的图片）来制作一个 {argument name="year" default="2027 年 1 月至 12 月"} 的桌面日历。格式：A4 竖版。特征：{argument name="style" default="韩式插画风格"}，鲜明的人物特征，自然的表情，全身构图，动态姿势，精致的服装细节，{argument name="art technique" default="手绘涂鸦风格"}，喷溅笔触，自由线条，柔和色彩与水墨的结合，漫画素描质感，简约白色背景，边缘带有象征性元素，氛围感强，高细节，高质量。

[English]
Please use this photo (Can put you Image in the reference) to create a desktop calendar for {argument name="year" default="January-December 2027"}. Format: A4 vertical. Features: {argument name="style" default="Korean illustration style"}, distinct character features, natural expressions, full-body composition, dynamic poses, exquisite clothing details, {argument name="art technique" default="hand-drawn doodle style"}, splatter brushstrokes, free lines, a mix of pastels and ink, comic sketch texture, simple white background, symbolic elements around the edges, strong atmosphere, high detail, high quality.
```

**来源：** [@Future AI 🧩](https://x.com/FutureVibesAi/status/2062824885194461244) | 2026-06-05

---

### 📊 例 537：创新遗珍爆炸图

![创新遗珍爆炸图](../images/%E5%88%9B%E6%96%B0%E9%81%97%E7%8F%8D%E7%88%86%E7%82%B8%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
生成一张超写实的“创新遗珍爆炸图”。

1. 语义提取：
AI 推断：
- 解决的核心问题
- 运作机制
- 历史时期
- 发明者文化
- 材料
- 失效点
- 社会影响

2. 容器：
结构：悬浮在玻璃博物馆展示柜中的爆炸式物体。
每个零件均由黄铜杆和精细张力线悬挂。

3. 背景：
带有模糊图表、公差、标签和档案印章的专利纸墙。

4. 整合：
发明的核心洞察成为中心的发光机制。

5. 视觉语法：
材质：拉丝钢、玻璃、黄铜、陈旧纸张、黑色墨水。
光影：奢侈品摄影风格。
拒绝廉价的蓝图陈词滥调。

输入变量：{argument name="invention" default="[请输入发明名称]"}

输出：
2x2 网格，16:9，四项改变世界的发明。

[English]
Generate a hyper-realistic "Innovation Reliquary Exploded Diagram."

1. Semantic Extraction:
AI infers:
- Core problem solved
- Mechanism
- Historical era
- Inventor culture
- Materials
- Failure points
- Social impact

2. Container:
Structure: floating exploded object inside a glass museum case.
Every part is suspended on brass rods and fine tension wires.

3. Background:
Patent-paper wall with faint diagrams, tolerances, labels, and archive stamps.

4. Integration:
The invention’s key insight becomes a central glowing mechanism.

5. Visual Syntax:
Materials: brushed steel, glass, brass, aged paper, black ink.
Lighting: luxury product photography.
No cheap blueprint clichés.

Input Variable: {argument name="invention" default="[INSERT INVENTION]"}

Output:
2x2 grid, 16:9, four world-changing inventions.
```

**来源：** [@Gadgetify](https://x.com/Gdgtify/status/2062720059575783713) | 2026-06-05

---

### 📊 例 657：技术拆解信息图

![技术拆解信息图](../images/%E6%8A%80%E6%9C%AF%E6%8B%86%E8%A7%A3%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个高质量的技术信息图，对象为 {argument name="target object" default="[OBJECT]"}。仅使用提供的参考图像来理解物体的形状和形态 —— 请勿复制原始照片的角度、构图或背景。将主体重新构思为一张清新、专业且逼真的照片，采用干净、光线充足的布景和更具美感的背景。物体本身应看起来像真实照片，而非插图。在上方叠加一层 {argument name="overlay style" default="技术蓝图风格叠加层"}，包含白色线条、箭头、尺寸标注、零件标签、材质说明、测量数据和小型功能图表。整体构图应清晰、优雅且富有信息量。在左上角包含一个标注为 "OBJECT" 的草图插图框。比例为 4:5。

[English]
Create a high-quality technical infographic of {argument name="target object" default="[OBJECT]"}. Use the provided reference image only to understand the shape and form of the object — do not replicate the original photo, angle, composition, or background. Reimagine the subject as a fresh, professional, and realistic photograph with a clean, well-lit setup and a more aesthetic background. The object itself should look like a real photo, not an illustration. Layer a {argument name="overlay style" default="technical blueprint-style overlay"} on top, featuring white lines, arrows, dimension callouts, part labels, material notes, measurements, and small functional diagrams. The overall composition should feel clear, elegant, and informative. Include a sketch inset box in the upper left corner labeled "OBJECT". 4:5 ratio.
```

**来源：** [@PromptLab](https://x.com/iamaiistudio/status/2063125837835329762) | 2026-06-06

---

### 📊 例 738：SynClub 聊天音效指南

![SynClub 聊天音效指南](../images/SynClub%20%E8%81%8A%E5%A4%A9%E9%9F%B3%E6%95%88%E6%8C%87%E5%8D%97.jpg)

**Prompt:**

```text
[中文]
目标：为 SynClub 创建一份垂直日文信息图表指南，解释在括号中输入特定词汇即可触发的聊天内音效。使用标题 {argument name="headline text" default="チャット内効果音 一覧ガイド"} 和品牌名称 {argument name="brand name" default="SynClub"}。

画布：2:3 纵向布局，奶油色羊皮纸背景，配以海军蓝和金色点缀，细几何线条，小闪光图标，圆角卡片，简洁的应用指南风格。左上角设有深海军蓝页眉条，包含 SynClub 徽标图标和文字标识。主标题为深海军蓝与金色的粗体日文字体。在标题下方添加说明：「（ ）で囲んだワードを入力すると、効果音が再生されます！」

布局：左侧三分之二包含四个堆叠的圆角分类卡片，构成主要指南列表。右侧上方为 Q 版动漫引导角色，下方为类似智能手机的聊天界面模型。左下角包含一个海军蓝色的使用技巧框，右下角包含一个金色边框的号召性用语横幅。

主体细节：右上角绘制一个可爱的 Q 版女学生风格动漫角色，长黑发、海军蓝制服、金色发夹，手持指示棒；包含一个气泡框，写着「使ってみてね！」。她的脸部被一个居中的柔和灰色模糊/遮挡块覆盖。角色造型使用 {argument name="guide character style" default="chibi anime schoolgirl with long dark hair and navy uniform"}。

指南列表：展示 4 个音效类别，每个类别包含一个图标、彩色标题和括号内的日文触发短语。
1. 「ドア系」：门图标，棕色/金色标题，5 个触发短语：「（ドアをノックする）」「（ドアを叩く）」「（ドアを開ける）」「（ドアを閉める）」「（鍵をかける）」
2. 「書籍系」：打开的书图标，蓝色标题，3 个触发短语：「（本を開く）」「（ページをめくる）」「（本を閉じる）」
3. 「触れ合い系」：握手图标，金色标题，8 个触发短语：「（抱きしめる、ハグ、抱く）」「（服を脱ぐ）」「（撫でる）」「（頭を撫く）」「（袖を引っ張る）」「（ドキドキ、赤面、頬が真っ赤）」「（舐める）」以及紧凑列表样式的换行。
4. 「生活系」：房屋图标，绿色标题，3 个触发短语：「（靴を振る）」「（携帯が鳴る）」「（布団に入る）」

聊天模型：右侧中间显示一个深海军蓝圆角手机框，标注为「会話画面イメージ」。内部为动漫聊天场景，背景是暖色调咖啡馆灯光下的银发奇幻女性。在聊天图像顶部，显示名称 {argument name="chat character name" default="ファンネリア"}。叠加 4 个圆角聊天气泡：两个三文鱼粉色叙述气泡和两个海军蓝色用户回复气泡。在粉色气泡内高亮显示部分触发词，包括「ドアをノックする」和「頬を赤らめつつ」。保持日文聊天文本小巧且具有氛围感；无需完全清晰可读，但必须看起来像真实的语境聊天界面。

底部文本：左下角海军蓝色框标题为「使い方のポイント」，配有灯泡图标。包含解释性日文文本，说明当句子中括号内写入动作时会触发音效，例如「（ドアをノックする）失礼します…」，并附带高亮提示：「『会話動画』生成の際、自分側の台詞に効果音の記述を挿入しても再生されます。」下方添加小免责声明：「※上記はすべてではありません…まだ判明していない効果音が存在します！」并配有一个小感叹号图标。右下角金色号召性用语框配有扩音器图标，写着「よりリアルな会話体験を！」以及下方的「効果音を活用して、臨場感あふれるチャットを楽しみましょう！」

视觉风格：精致的日文社交媒体信息图表，高分辨率，清晰易读的字体，温暖的奶油色背景，深海军蓝边框，金色高光，圆角矩形，细微的星光闪烁。保持所有日文文本整洁且位置正确。除 SynClub 品牌标识外，无其他水印。

[English]
Goal: Create a vertical Japanese infographic guide for SynClub explaining in-chat sound effects triggered by typing words in parentheses. Use the headline {argument name="headline text" default="チャット内効果音 一覧ガイド"} and the brand name {argument name="brand name" default="SynClub"}.

Canvas: Portrait 2:3 layout, cream parchment background with navy and gold accents, thin geometric lines, small sparkle icons, rounded cards, clean app-guide styling. Top left has the SynClub logo icon and wordmark on a dark navy header strip. Main title is large, bold Japanese typography in dark navy and gold. Under the title, add the instruction: 「（ ）で囲んだワードを入力すると、効果音が再生されます！」.

Layout: Left two-thirds contains the main guide list in four stacked rounded category cards. Right side contains a chibi anime guide character at the top and a smartphone-like chat screen mockup below. Bottom left contains a navy usage-tip box, and bottom right contains a gold-bordered callout banner.

Subject details: At upper right, draw a cute chibi schoolgirl-style anime character with long dark hair, navy uniform, gold hairpins, and a pointing stick; include a speech bubble saying 「使ってみてね！」. Her face is covered by a centered soft gray square blur/censor block. Use {argument name="guide character style" default="chibi anime schoolgirl with long dark hair and navy uniform"} for the character styling.

Guide list: Show exactly 4 sound-effect categories, each with an icon, colored title, and visible trigger phrases in Japanese parentheses.
1. 「ドア系」 with a door icon, brown/gold header, 5 trigger phrases: 「（ドアをノックする）」「（ドアを叩く）」「（ドアを開ける）」「（ドアを閉める）」「（鍵をかける）」.
2. 「書籍系」 with an open-book icon, blue header, 3 trigger phrases: 「（本を開く）」「（ページをめくる）」「（本を閉じる）」.
3. 「触れ合い系」 with a handshake icon, gold header, 8 trigger phrases: 「（抱きしめる、ハグ、抱く）」「（服を脱ぐ）」「（撫でる）」「（頭を撫く）」「（袖を引っ張る）」「（ドキドキ、赤面、頬が真っ赤）」「（舐める）」 plus one line spacing/continuation style as in a compact list.
4. 「生活系」 with a house icon, green header, 3 trigger phrases: 「（靴を振る）」「（携帯が鳴る）」「（布団に入る）」.

Chat mockup: Right middle shows a dark navy rounded phone frame labeled 「会話画面イメージ」. Inside is an anime chat scene with a silver-haired fantasy woman in warm café lighting. At the top of the chat image, show the name {argument name="chat character name" default="ファンネリア"}. Overlay exactly 4 rounded chat bubbles: two salmon/pink narrator bubbles and two navy user-response bubbles. Highlight some trigger words in yellow inside the pink bubbles, including 「ドアをノックする」 and 「頬を赤らめつつ」. Keep Japanese chat text small and atmospheric; it does not need to be fully legible, but must resemble a real roleplay chat screen.

Bottom text: Bottom left navy box titled 「使い方のポイント」 with a lightbulb icon. Include explanatory Japanese text saying sound effects trigger when actions are written in parentheses in the sentence, example 「（ドアをノックする）失礼します…」, and a highlighted note: 「『会話動画』生成の際、自分側の台詞に効果音の記述を挿入しても再生されます。」 Add a small disclaimer below: 「※上記はすべてではありません…まだ判明していない効果音が存在します！」 with a small exclamation icon. Bottom right gold callout with megaphone icon says 「よりリアルな会話体験を！」 and underneath 「効果音を活用して、臨場感あふれるチャットを楽しみましょう！」.

Visual style: Polished Japanese social-media infographic, high-resolution, crisp readable typography, warm cream background, dark navy borders, gold highlights, rounded rectangles, subtle star sparkles. Keep all Japanese text clean and correctly placed. No watermark beyond the SynClub brand mark.
```

**来源：** [@レティシア・ノエル](https://x.com/N7S6P1/status/2063593311756300618) | 2026-06-07

---

### 📊 例 822：Churro Maker 信息图表项目

![Churro Maker 信息图表项目](../images/Churro%20Maker%20%E4%BF%A1%E6%81%AF%E5%9B%BE%E8%A1%A8%E9%A1%B9%E7%9B%AE.jpg)

**Prompt:**

```text
[中文]
创建一个清晰、简洁的信息图表项目海报，用于 {argument name="product name" default="THE CHURRO MAKER"}。采用 16:9 宽屏布局，白色背景，黑色边框，粗体黑色排版，优质的 {argument name="style" default="Pixar 3D 风格渲染"}，明亮生动的色彩 — {argument name="color scheme" default="金黄的油炸面团，闪闪发光的白糖"}

[English]
Create a crisp, clean infographic storyboard poster for {argument name="product name" default="THE CHURRO MAKER"}. Wide 16:9 layout, white background, black borders, bold black typography, premium {argument name="style" default="Pixar 3D stylized rendering"}, bright vivid colors — {argument name="color scheme" default="golden fried dough, sparkling white sugar"}
```

**来源：** [@TechieSA](https://x.com/TechieBySA/status/2064032022830502202) | 2026-06-08

---

### 📊 例 830：中文文本准确性信息图

![中文文本准确性信息图](../images/%E4%B8%AD%E6%96%87%E6%96%87%E6%9C%AC%E5%87%86%E7%A1%AE%E6%80%A7%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张竖版中文商业信息图海报，解释 AI 图像生成目前已实现高中文文本准确率，将杂乱的文本转化为清晰的交付成果。

画布：3:4 竖版海报，简洁的白色背景，采用趣味手绘编辑风格，辅以橙色、绿色、黑色和灰色点缀。使用粗线条草图轮廓、圆形气泡框、充满活力的涂鸦标记，营造友好的科技说明风格。

布局：构图中心为一部大型智能手机模型，展示清晰的中文报告页面。左侧展示一个灰色的“之前”文档面板，上面布满乱码符号和无法辨认的类中文文本。右侧展示一位坐在笔记本电脑后、手持触控笔、做出兴奋握拳姿势的可爱卡通设计师。在手机下方中心和前景处添加一个巨大的亮绿色对勾。右上角添加一个绿色圆形徽章，下方添加一个橙色气泡框。底部的大标题置于一个橙色手绘轮廓气泡内。

文本内容：使用 5 个主要文本区域。1) 左侧灰色气泡：“以前：乱码”。2) 右上角绿色徽章：“95% 准确率”。3) 右侧橙色气泡：“现在：清晰”。4) 手机屏幕标题：“项目总结报告”。5) 底部大标题：“中文准确率 95%”。

手机屏幕细节：展示一部带有刘海屏和状态栏时间 9:41 的黑色 iPhone 风格智能手机。报告页面内包含 4 个由细灰色分割线隔开的堆叠内容区域。第 1 部分包含一个橙色目标图标和标题“项目目标”，后跟关于提升用户体验、优化产品功能和加强系统稳定性的简短中文正文。第 2 部分包含一个蓝色柱状图图标和标题“关键成果”，后跟 3 个要点：用户满意度提升 32%，系统性能提升 45%，问题响应时间缩短 50%。第 3 部分包含一个绿色对勾图标和标题“主要结论”，后跟说明项目达到预期目标并奠定坚实基础的正文。第 4 部分包含一个黄色灯泡图标和标题“下一步计划”，后跟关于持续优化和扩展应用场景的正文。

左侧“之前”区域：渲染一个带有顶部栏的灰色浏览器/文档卡片，上面有多行损坏的字符、问号、标点符号和散乱的汉字，清晰可见且无法阅读。在左下角添加杂乱的纸张、涂鸦和信封图标，以强调文档的无序状态。

右侧人物细节：创建一个可爱的年轻男性卡通设计师，留着棕色卷发，肤色白皙，身穿橙色毛衣，姿势简单生动；面部可留白或进行柔和处理。他一手拿着黑色触控笔，坐在写有“设计师”圆形贴纸的灰色笔记本电脑后。在桌面上添加 3 个前景配件：一本带有简单布局草图和色块的螺旋笔记本、一支黑笔和一个带有橙色爱心的白色马克杯。

视觉风格：友好的中文社交媒体说明海报，半扁平矢量插画与马克笔风格手绘线条相结合，柔和阴影，圆润形状，高可读性，强调鲜艳的绿色对勾和橙色标题。构图丰富但清晰易读，不使用照片写实风格。

约束条件：严格保留指定的中文文本，保持手机报告文本清晰易读，仅使用一个中央手机、一个左侧杂乱文档卡片、一个设计师角色、一个绿色对勾、一个绿色徽章、一个橙色气泡框和一个底部大标题。不要添加水印、Logo、二维码或额外的核心主张。

[English]
Goal: Create a vertical Chinese business infographic poster explaining that AI image generation now achieves high Chinese text accuracy, transforming messy text into clear deliverables.

Canvas: Portrait 3:4 poster, clean white background, playful hand-drawn editorial style with orange, green, black, and gray accents. Use thick sketch outlines, rounded speech bubbles, energetic doodle marks, and a friendly tech-explainer tone.

Layout: Center the composition around one large smartphone mockup showing a clean Chinese report page. On the left, show a gray “before” document panel full of garbled symbols and unreadable Chinese-like text. On the right, show a cheerful cartoon designer sitting behind a laptop, holding a stylus, with an excited fist pose. Add a large bright green check mark overlapping the lower center of the phone and foreground. Add a green circular badge in the upper right and an orange speech bubble below it. Put a large bottom headline inside an orange hand-drawn outline bubble.

Text content: Use exactly 5 main text areas. 1) Left gray speech bubble: “以前：乱码”. 2) Upper-right green badge: “95% 准确率”. 3) Right orange speech bubble: “现在：清晰”. 4) Phone screen title: “项目总结报告”. 5) Bottom headline: “中文准确率95%”.

Phone screen details: Show an iPhone-like black smartphone with notch and status bar time 9:41. Inside the report page, include 4 stacked content sections separated by thin gray dividers. Section 1 has an orange target icon and heading “项目目标”, followed by short Chinese body text about improving user experience, optimizing product functions, and strengthening system stability. Section 2 has a blue bar-chart icon and heading “关键成果”, followed by 3 bullet points: user satisfaction increased 32%, system performance improved 45%, issue response time shortened 50%. Section 3 has a green check icon and heading “主要结论”, followed by body text saying the project achieved expected goals and laid a solid foundation. Section 4 has a yellow lightbulb icon and heading “下一步计划”, followed by body text about continuous optimization and expanding application scenarios.

Left “before” area: Render a gray browser/document card with a top bar and multiple lines of broken characters, question marks, punctuation, and scattered Chinese characters, clearly unreadable. Add messy paper sheets, scribbles, and an envelope icon near the bottom left to emphasize disorganized documents.

Right character details: Create a cute young male cartoon designer with curly brown hair, fair skin, orange sweater, and simple expressive pose; the face may be left blank or softly obscured. He holds a black stylus in one hand and sits behind a gray laptop with a round sticker reading “设计师”. On the desk add exactly 3 foreground accessories: a spiral notebook with simple layout sketches and small color blocks, a black pen, and a white mug with an orange heart.

Visual style: Friendly Chinese social-media explainer poster, semi-flat vector illustration mixed with marker-like hand-drawn lines, soft shadows, rounded shapes, high readability, vibrant green check mark and orange headline emphasis. Keep the composition busy but legible, with no photorealism.

Constraints: Preserve the Chinese text exactly as specified, keep the smartphone report text crisp and readable, use exactly one central phone, one left messy document card, one designer character, one green check mark, one green badge, one orange speech bubble, and one bottom headline. Do not add watermarks, logos, QR codes, or extra main claims.
```

**来源：** [@唐华斑竹🦅](https://x.com/uniswap12/status/2064010171396051074) | 2026-06-08

---

### 📊 例 841：AI 使用对比信息图

![AI 使用对比信息图](../images/AI%20%E4%BD%BF%E7%94%A8%E5%AF%B9%E6%AF%94%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创作一张正方形的日本对比信息图，以精致的半写实动漫商务插画风格，展示使用 AI 的人与不使用 AI 的人之间的区别。

画布：1:1 正方形社交媒体图片，从顶部中心附近向底部中心对角线分割为两个对比鲜明的半部分。左侧使用明亮的暖色调，右侧使用深灰蓝色调。在两个场景之间添加一个干净的白色对角分割线。

左侧面板：展示一名使用 AI 的成功上班族。主体是一名穿着 {argument name="shirt color" default="绿色"} 衬衫的年轻日本商务人士，坐在木质办公桌前使用笔记本电脑。在笔记本电脑旁放置一个可爱的小型青色与白色相间的机器人助手，机身上写有“AI”字样。添加柔和的绿色光晕、闪光和积极的氛围。背景中展示两名正在讨论的商务同事、明亮的办公室窗户、植物和演示材料。刻意遮挡或柔化所有人物面部，以实现类似隐私保护的匿名化处理。

左侧文字：在顶部放置一个绿色的圆形标题标签，写着「AIを活用している人」。下方添加标题「活躍して成果を出している！」。包含 2 个白色的想法/对话气泡：一个大气泡写着「AIがサポートしてくれるから効率的に進められる！アイデアも広がる！」，一个小气泡写着「さすが！仕事が早くて助かるよ！」。在员工周围包含 3 张悬浮的 AI 支持卡片：带有文档和放大镜图标的「情報収集・要約」、带有灯泡图标的「アイデア出し」，以及「資料作成サポート」和带有图表图标的「データ分析」。在桌面上，放置一个标有「成果・信頼 評価UP!」的金色奖杯。在左下角，添加一张带有 4 个绿色勾选项目的白色清单卡片：「作業時間を大幅削減！」、「質の高い成果を創出！」、「評価・信頼UP！」、「新しいことに挑戦できる！」。

右侧面板：展示一名没有使用 AI、压力巨大的上班族。主体是一名穿着白衬衫和蓝领带的年轻日本商务人士，瘫坐在办公桌前，一只手扶着头，看着笔记本电脑显得不知所措。办公桌周围堆满了大量的纸张、活页夹和文件。办公室看起来昏暗、寒冷、杂乱，呈现深夜景象，配有挂钟、潦草的压力标记、向下的趋势图和疲惫的氛围。像左侧一样，刻意遮挡或柔化人物面部。

右侧文字：在顶部放置一个深色的圆形标题标签，写着「AIを使えていない人」。下方添加标题「苦労して成果が出せず、遅れてしまう…」。在员工上方包含 1 个大的白色想法气泡，写着「調べるのに時間がかかる…資料作るのも大変…終わらない…」。在墙上或员工周围包含 3 张米色便签：「時間がない！」、「資料が多すぎる…」、「何から手をつければ…」。在向下的图表附近添加一个小标签，写着「進捗の遅れ…」。在右下角，添加一张带有 4 个黑色叉号项目的白色清单卡片：「作業に時間がかかり、残業続き…」、「成果が出ず、評価が上がらない…」、「新しいことに手が回らない…」、「周りに差をつけられて焦る…」。

视觉风格：高质量日本商务插画，半写实动漫风格，简洁的信息图构图，清晰易读的排版，柔和的阴影，细致的办公道具，成功与挣扎之间强烈的视觉对比。保持所有日语文本清晰可辨，且与原文完全一致。无水印，无额外 Logo，无额外的清单项目。

[English]
Goal: Create a square Japanese comparison infographic showing the difference between a person who uses AI and a person who does not, in a polished semi-realistic anime business illustration style.

Canvas: 1:1 square social media image, split diagonally from near the top center toward the bottom center into two contrasting halves. Use bright warm colors on the left and dark gray-blue colors on the right. Add a clean white diagonal divider between the two scenes.

Left panel: Show a successful office worker using AI. The main subject is a young Japanese businessperson in a {argument name="shirt color" default="green"} shirt sitting at a wooden desk with a laptop. Place a cute small teal-and-white robot assistant beside the laptop, with “AI” written on its body. Add subtle green glow, sparkles, and a positive atmosphere. In the background, show two business colleagues standing and discussing, a bright office window, plants, and presentation materials. Deliberately obscure or softly blur all human faces for privacy-like anonymization.

Left text: At the top, place a green rounded title label reading 「AIを活用している人」. Under it, add the headline 「活躍して成果を出している！」. Include exactly 2 white thought/speech bubbles: one large bubble saying 「AIがサポートしてくれるから効率的に進められる！アイデアも広がる！」 and one smaller bubble saying 「さすが！仕事が早くて助かるよ！」. Include exactly 3 floating AI support cards around the worker: 「情報収集・要約」 with a document and magnifying glass icon, 「アイデア出し」 with a lightbulb icon, and 「資料作成サポート」 plus 「データ分析」 with chart icons. On the desk, include a gold trophy labeled 「成果・信頼 評価UP!」. At the bottom left, add a white checklist card with exactly 4 green check items: 「作業時間を大幅削減！」, 「質の高い成果を創出！」, 「評価・信頼UP！」, 「新しいことに挑戦できる！」.

Right panel: Show a stressed office worker who is not using AI. The main subject is a young Japanese businessperson in a white shirt and blue tie slumped at a desk, holding their head with one hand while looking overwhelmed at a laptop. Surround the desk with large stacks of papers, binders, and documents. The office should look dim, cold, cluttered, and late-at-night, with a wall clock, scribble stress marks, a downward-trending chart, and an exhausted mood. Deliberately obscure or softly blur the human face as on the left side.

Right text: At the top, place a dark rounded title label reading 「AIを使えていない人」. Under it, add the headline 「苦労して成果が出せず、遅れてしまう…」. Include exactly 1 large white thought bubble above the worker saying 「調べるのに時間がかかる…資料作るのも大変…終わらない…」. Include exactly 3 beige sticky notes on the wall or around the worker: 「時間がない！」, 「資料が多すぎる…」, and 「何から手をつければ…」. Add a small label near the downward chart reading 「進捗の遅れ…」. At the bottom right, add a white checklist card with exactly 4 black X items: 「作業に時間がかかり、残業続き…」, 「成果が出ず、評価が上がらない…」, 「新しいことに手が回らない…」, 「周りに差をつけられて焦る…」.

Visual style: High-quality Japanese business illustration, semi-realistic anime, clean infographic composition, crisp readable typography, soft shading, detailed office props, strong emotional contrast between success and struggle. Keep all Japanese text legible and exactly as written. No watermark, no extra logos, no additional checklist items.
```

**来源：** [@谷知 紀英🐸 緑グリーン株式会社｜代表取締役🥬](https://x.com/midori_green_88/status/2063986830421475584) | 2026-06-08

---

### 📊 例 899：摩托车工程信息图海报

![摩托车工程信息图海报](../images/%E6%91%A9%E6%89%98%E8%BD%A6%E5%B7%A5%E7%A8%8B%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
超高端摩托车信息图杰作，以 {argument name="motorcycle model" default="传奇 Royal Enfield Continental GT 650"} 为主角，呈现博物馆级的工程展览效果。中央巨大的摩托车主视觉渲染图采用充满活力的英伦赛车风格配色，在电影级摄影棚灯光照射下，展现出戏剧性的反射效果和超写实的金属质感。深黑色背景融合了发光的霓虹橙、铜色、铬色和电光蓝点缀。配有未来感蓝图网格叠加、全息 HUD 界面元素以及精密工程原理图。以高端航空航天展示布局，排列出高度精细的前视图、侧视图、后视图、顶视图和 3/4 透视图。摩托车周围环绕着由发光数据线和数字界面图形连接的动画风格技术标注。规格亮点：• 648cc 并列双缸发动机 • 47 马力最大功率 • 52 牛·米峰值扭矩 • 6 速变速箱 • 双通道 ABS • 钢管双摇篮车架 • 双铬合金排气系统 • Cafe Racer 骑行姿态 • 最高时速 170 km/h • 油箱容量 12.5 升 • 风油冷发动机 • 双盘式制动系统。附加视觉元素：• 发动机爆炸图解 • 发动机活塞和曲轴图表 • 扭矩和功率曲线图 • 达到 170 km/h 的速度表可视化 • 燃油效率分析显示 • 悬挂几何结构分解 • 车轮和轮胎规格 • 高级性能数据卡 • 皇家赛车历史时间轴部分 • 未来感全息性能仪表盘。设计风格：National Geographic × Top Gear × Apple 产品发布会 × 一级方程式工程展示 × 军事航空航天信息图风格。色彩丰富的橙色、蓝色、银色和铬色点缀。博物馆展览品质，奢华杂志封面美学，屡获殊荣的平面设计，电影级 HDR 对比度，超清晰排版，高级信息图层级，照片级真实材质，工程蓝图优雅感，未来汽车展示，超精细纹理，8K HDR 杰作，世界级信息图海报。

[English]
Ultra premium motorcycle infographic masterpiece featuring the {argument name="motorcycle model" default="legendary Royal Enfield Continental GT 650"} displayed as a museum-grade engineering exhibit. Massive central hero render of the motorcycle in vibrant British racing-inspired colors, illuminated by cinematic studio lighting with dramatic reflections and ultra realistic metallic surfaces. Deep black background blended with glowing neon orange, copper, chrome, and electric blue accents. Futuristic blueprint grid overlays, holographic HUD interface elements, and precision engineering schematics. Show highly detailed front view, side view, rear view, top view, and 3/4 perspective view arranged in a premium aerospace presentation layout. Surround the motorcycle with animated-style technical callouts connected by glowing data lines and digital interface graphics. Highlighted Specifications: • 648cc Parallel Twin Engine • 47 HP Maximum Power • 52 Nm Peak Torque • 6-Speed Transmission • Dual Channel ABS • Steel Tubular Double Cradle Frame • Twin Chrome Exhaust System • Cafe Racer Riding Position • Top Speed 170 km/h • Fuel Tank Capacity 12.5 Liters • Air-Oil Cooled Engine • Dual Disc Braking System Additional Visual Elements: • Exploded engine cutaway illustration • Engine piston and crankshaft diagrams • Torque and power curve graphs • Speedometer visualization reaching 170 km/h • Fuel efficiency analytics display • Suspension geometry breakdown • Wheel and tire specifications • Premium performance data cards • Royal racing heritage timeline section • Futuristic holographic performance dashboard Design Style: National Geographic × Top Gear × Apple Product Launch × Formula 1 Engineering Presentation × Military Aerospace Infographic Style. Highly colorful orange, blue, silver and chrome accents. Museum exhibition quality, luxury magazine cover aesthetics, award-winning graphic design, cinematic HDR contrast, ultra sharp typography, premium infographic hierarchy, photorealistic materials, engineering blueprint elegance, futuristic automotive showcase, hyper detailed textures, 8K HDR masterpiece, world-class infographic poster.
```

**来源：** [@Snow](https://x.com/iamrealsnow/status/2063831404765663401) | 2026-06-08

---

### 📊 例 996：K-pop 舞蹈编排信息图

![K-pop 舞蹈编排信息图](../images/K-pop%20%E8%88%9E%E8%B9%88%E7%BC%96%E6%8E%92%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
一份彩色铅笔素描风格的舞蹈编排信息图，主题为 {argument name="dance type" default="K-pop 独舞"}。

布局：16 个步骤排列在整洁的 4x4 网格中，每个面板展示不同的舞蹈动作。

主体：一位 {argument name="character" default="亚洲少女"}，留着长波浪卷发，身穿 {argument name="outfit" default="时尚的淡色系棒球夹克"}，内搭修身白色上衣、百褶网球裙、及膝袜和厚底运动鞋。服装配色包括柔粉色、薰衣草紫、婴儿蓝和白色，营造出可爱且充满活力的 K-pop 偶像美学。

风格：手绘彩色铅笔插画，柔和的阴影，可见的铅笔纹理，线条略显写意但清晰，充满活力的淡色调，迷人的笔记本风格艺术作品。

动作：每一帧展示流畅、富有表现力的舞蹈动作（手臂波浪、扭胯、旋转、比心手势、脚步动作、转身、结束姿势），并配有指示方向和运动流向的小箭头。

设计：现代 K-pop 美学，简约时尚的信息图布局，淡色高光，装饰性的闪光和星星，步骤编号（1–16），每帧下方配有简短说明。

文字：顶部标题 —— “K-POP SOLO DANCE – 16 COUNTS – 10 SECONDS – CUTE & PLAYFUL ENERGY”。

环境：简单的舞蹈练习室背景，柔和的灯光，极简阴影。

质量：超精细，构图清晰，布局平衡，编辑级舞蹈教程海报，专业的信息图设计。

负面提示词：模糊，低质量，多余的肢体，解剖结构扭曲，比例失调，布局混乱，设计过于拥挤，文字错误，水印，重复的姿势。

[English]
A colored pencil sketch style choreography sheet infographic for a {argument name="dance type" default="K-pop solo dance"}.

Layout: 16 steps arranged in a clean 4x4 grid, each panel showing a different dance move.

Subject: a {argument name="character" default="teenage Asian girl"} with long wavy hair, wearing a {argument name="outfit" default="trendy pastel varsity jacket"} over a fitted white top, pleated tennis skirt, knee-high socks, and chunky platform sneakers. Outfit colors include soft pink, lavender, baby blue, and white, creating a cute and energetic K-pop idol aesthetic.

Style: hand-drawn colored pencil illustration, soft shading, visible pencil texture, slightly sketchy but clean lines, vibrant pastel palette, charming notebook-style artwork.

Movement: each frame shows smooth, expressive dance motions (arm waves, hip sways, spins, finger-heart gestures, footwork, turns, ending pose), with small arrows indicating direction and motion flow.

Design: modern K-pop aesthetic, minimal and stylish infographic layout, pastel highlights, decorative sparkles and stars, step numbers (1–16), short captions under each frame.

Text: Title at the top — “K-POP SOLO DANCE – 16 COUNTS – 10 SECONDS – CUTE & PLAYFUL ENERGY”.

Environment: simple dance practice studio background, soft lighting, minimal shadows.

Quality: ultra-detailed, sharp composition, balanced layout, editorial dance tutorial poster, professional infographic design.

Negative prompt: blurry, low quality, extra limbs, distorted anatomy, bad proportions, messy layout, overcrowded design, text errors, watermark, duplicate poses.
```

**来源：** [@Aria](https://x.com/ariaxawan/status/2064213389346488645) | 2026-06-09

---

### 📊 例 1018：动漫棒球挥棒关键帧图表

![动漫棒球挥棒关键帧图表](../images/%E5%8A%A8%E6%BC%AB%E6%A3%92%E7%90%83%E6%8C%A5%E6%A3%92%E5%85%B3%E9%94%AE%E5%B8%A7%E5%9B%BE%E8%A1%A8.jpg)

**Prompt:**

```text
[中文]
目标：创建一个动漫动画关键帧图表，展示一名可爱的年轻女性棒球击球手完成挥棒动作的过程，类似于中间帧动画参考。

画布：1:1 正方形图像，深板岩灰背景，包含一个整齐的 3 列 2 行网格，共 6 张圆角矩形卡片。每张卡片都有厚实的中灰色边框、微妙的阴影，以及右下角的小斜线细节。

布局：每张卡片垂直分为两部分：上方约一半区域为大面积青蓝色标题栏，下方为白色插图区域。一条细深色水平分割线将标题与白色区域隔开。在每个青色标题栏中居中放置一个粗体白色帧编号。

帧标签：使用 6 个标签，每张卡片一个，按从左到右、从上到下的顺序排列：“001”、“002”、“003”、“004”、“005”、“006”。

角色细节：角色为 {argument name="character description" default="一位娇小的动漫棒球少女，留着棕色短波波头，有着大而有神的眼睛"}。她穿着 {argument name="baseball uniform" default="带有深海军蓝饰边的白色棒球服、深色内搭、海军蓝长袜、白色钉鞋和击球手套"}。她手持 {argument name="bat style" default="一根轻质木制棒球棒"}。在所有 6 张卡片中保持角色形象的一致性。

动作序列：展示 6 个不同的击球姿势：001 后挥准备姿势，球棒举在肩后，身体侧转；002 稍微开放的准备姿势，球棒仍处于蓄力状态；003 重心前移，球棒开始挥动；004 击球或接近击球的姿势，球棒横向扫过身体；005 完整挥棒延伸，头发飘动，球棒水平向前伸展；006 挥棒随动延伸，类似于 005，但挥棒幅度稍大。确保角色大小适中，能舒适地放入每张卡片下方的白色区域内。

视觉风格：简洁的动漫插画，柔和的水彩风格阴影，清晰的线条，明亮精致的运动角色外观，极简背景，除球棒外无额外道具。采用简单的 UI 卡片展示形式，而非写实环境。

约束：包含 6 张卡片和 6 个编号标题。不要添加额外的说明文字、徽标、水印、棒球场场景或额外角色。

[English]
Goal: Create an anime animation keyframe sheet showing a cute young female baseball batter progressing through a swing, like an in-between animation reference.

Canvas: Square 1:1 image, dark slate-gray background, with a neat 3-column by 2-row grid of exactly 6 rounded rectangular cards. Each card has a thick medium-gray border, subtle shadow, and a small diagonal hatch mark detail in the bottom-right corner.

Layout: Each of the 6 cards is vertically split into two sections: a large cyan-blue header occupying about the upper half, and a white illustration area occupying the lower half. A thin dark horizontal divider separates the header from the white area. Center a bold white frame number in each cyan header.

Frame labels: Use exactly 6 labels, one per card, in this order from left to right, top row then bottom row: "001", "002", "003", "004", "005", "006".

Subject details: The character is {argument name="character description" default="a petite anime girl baseball player with short brown bobbed hair and large expressive eyes"}. She wears {argument name="baseball uniform" default="a white baseball uniform with dark navy trim, dark undershirt, navy socks, white cleats, and batting gloves"}. She holds {argument name="bat style" default="a light wooden baseball bat"}. Render the same character consistently across all 6 cards.

Action sequence: Show exactly 6 distinct batting poses: 001 backswing stance with bat raised behind the shoulder and body turned sideways; 002 slightly more open ready stance with the bat still cocked; 003 forward weight shift with the bat beginning to travel; 004 contact or near-contact pose with the bat sweeping downward across the body; 005 full swing extension with hair flowing and the bat stretched horizontally forward; 006 follow-through extension, similar to 005 but slightly farther through the swing. Keep the player small enough to fit comfortably inside the white lower area of each card.

Visual style: Clean anime illustration, soft watercolor-like shading, crisp line art, bright polished sports-character look, minimal background, no extra props besides the bat. Use a simple UI-card presentation rather than a realistic environment.

Constraints: Include exactly 6 cards and exactly 6 numbered headers. Do not add extra captions, logos, watermarks, baseball field scenery, or additional characters.
```

**来源：** [@角駒｜AIとプロダクトづくりの観測記録](https://x.com/kadokoma_ai/status/2064169442796298560) | 2026-06-09

---

### 📊 例 1077：YOLOv13 架构图

![YOLOv13 架构图](../images/YOLOv13%20%E6%9E%B6%E6%9E%84%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创建一张清晰的技术架构图，将 {argument name="model name" default="YOLOv13"} 解释为一页教育性 Slides，展示输入图像如何流经 Backbone、HyperACE、Neck、FullPAD 和 Head 检测输出。

画布：16:9 宽屏横向信息图，白色背景，清爽的矢量风格，细彩色轮廓，圆角矩形，带箭头的连接线，以及易读的无衬线字体。使用从左到右的流水线布局，并在主路径下方放置补充模块。

布局：最左侧放置一个小型的堆叠缩略图，标注为“输入图像 (Input Image) (3, H, W)”，然后通过箭头指向一个大型蓝色 Backbone 面板。将绿色 Neck 面板放置在上方中央，紫色 Head 面板放置在右侧，HyperACE 放置在左下方中央，FullPAD 放置在右下方中央，并在底部放置一个带框的说明性标题。

主要流水线部分及精确元素计数：
- 最左侧 1 个输入图像堆叠，显示为分层的横向照片。
- 1 个 Backbone 面板，标题为“Backbone”，副标题为“(基于 DS-C3k2 模块构建)”。在内部，精确显示 5 个垂直堆叠的 DS-C3k2 模块框，分别标注为 B1、B2、B3、B4、B5。在每个相邻模块之间放置“/2”下采样标记，共 4 个下采样标签。添加侧向输出箭头：B1 和 B2 指向右侧，标注为“B1 (未使用)”和“B2 (未使用)”；B3、B4 和 B5 以蓝色指向右侧，标注为“B3 (C3, H/8, W/8)”、“B4 (C4, H/16, W/16)”和“B5 (C5, H/32, W/32)”。
- 1 个 HyperACE 模块位于 Backbone 下方，橙色轮廓，标题为“HyperACE”，副标题为“(基于超图的自适应相关性增强) Eq.8-11”。在内部，包含一个虚线圆角注释框，写着“对跨尺度和跨位置的高阶及低阶相关性进行建模”。来自 B3/B4/B5 的蓝色线条输入到 HyperACE 中。HyperACE 输出一个橙色箭头指向一个标注为“Y”和“相关性增强特征 (Correlation-enhanced feature)”的小型橙色 3D 立方体。
- 1 个 Neck 面板位于上方中央，绿色轮廓，标题为“Neck”，副标题为“(基于 DS-C3k2 模块构建)”。在内部，精确显示 6 个 DS-C3k2 模块框，排列成 2 列 3 行的网格。在模块之间使用黑色箭头，包含 2 个标注为“↑ 2×”的黄色上采样框和 2 个标注为“↓ 2×”的紫色下采样框。在 Neck 左边缘包含 3 个蓝色圆形输入连接点，并在网格下方或侧面包含 3 个绿色/紫色圆形隧道标记。
- 1 个 FullPAD 图例模块位于 Neck 下方，红色轮廓，标题为“FullPAD”，副标题为“(全流水线聚合与分发) Eq.12-13”。显示 3 行图例：“Backbone–Neck 隧道 (Backbone 到 Neck 的连接)”，使用蓝色虚线箭头和蓝色空心圆；“Neck 内部隧道 (Neck 的内部层)”，使用绿色虚线箭头和绿色空心圆；“Neck–Head 隧道 (Neck 到 Head 的连接)”，使用紫色虚线箭头和紫色空心圆。用橙色箭头将立方体特征连接到 FullPAD，并绘制指向 Neck 和 Head 的蓝色/绿色/紫色虚线隧道路径。
- 1 个 Head 面板位于右侧，紫色轮廓，标题为“Head”，副标题为“(检测 x3)”。在内部，精确显示 3 个垂直堆叠的 Detect 框：“Detect (步长 8)”、“Detect (步长 16)”和“Detect (步长 32)”。每个框接收来自 Neck 的一个箭头，并向右输出为 H3、H4、H5，标注为“H3 (尺度 1/8)”、“H4 (尺度 1/16)”和“H5 (尺度 1/32)”。

颜色编码：Backbone 线条和面板为蓝色，Neck 为绿色，Head 为紫色，HyperACE 为橙色，FullPAD 轮廓为红色。主箭头为实线；FullPAD 隧道为虚线/点划线，带有空心圆形节点。模块框使用柔和的淡色填充。

底部标题：添加一个横跨底部的宽圆角矩形。文字：“经典的 YOLO 是一个单向的 Backbone → Neck → Head 流水线。” 接着在下一行：“{argument name="model name" default="YOLOv13"} 在此基础上增加了 HyperACE 和 FullPAD，以增强特征表示和信息流。” 将 Backbone、Neck、Head、HyperACE 和 FullPAD 等词分别着色为蓝色、绿色、紫色、橙色和红色。

约束：保持所有标签清晰易读，各部分对齐整齐，保留模块和检测头的精确数量，避免添加额外的模块，除小型输入图像缩略图外避免照片级真实感，且不要添加水印。

[English]
Goal: Create a clean technical architecture diagram explaining {argument name="model name" default="YOLOv13"} as a one-page educational slide, showing how an input image flows through Backbone, HyperACE, Neck, FullPAD, and Head detection outputs.

Canvas: Wide 16:9 landscape infographic on a white background, crisp vector style, thin colored outlines, rounded rectangles, arrowed connectors, and readable sans-serif text. Use a left-to-right pipeline with supplementary modules below the main path.

Layout: Start at far left with a small stacked thumbnail illustration labeled “Input Image (3, H, W)”, then an arrow into a large blue Backbone panel. Place the green Neck panel in the upper center, the purple Head panel on the right, HyperACE in the lower left-center, FullPAD in the lower center-right, and a boxed explanatory caption along the bottom.

Main pipeline sections and exact element counts:
- 1 Input Image stack at far left, shown as layered landscape photos.
- 1 Backbone panel titled “Backbone” with subtitle “(built from DS-C3k2 blocks)”. Inside it, show exactly 5 vertically stacked DS-C3k2 block boxes labeled B1, B2, B3, B4, B5. Put “/2” downsampling markers between each adjacent block, for exactly 4 downsampling labels. Add side output arrows: B1 and B2 go right and are labeled “B1 (unused)” and “B2 (unused)”; B3, B4, and B5 go right in blue and are labeled “B3 (C3, H/8, W/8)”, “B4 (C4, H/16, W/16)”, and “B5 (C5, H/32, W/32)”.
- 1 HyperACE module below the Backbone, orange outline, titled “HyperACE” with subtitle “(Hypergraph-based Adaptive Correlation Enhancement) Eq.8-11”. Inside it, include one dashed rounded note box saying “Models cross-scale and cross-position high-order and low-order correlations”. Blue lines from B3/B4/B5 feed into HyperACE. HyperACE outputs an orange arrow to a small orange 3D cube labeled “Y” and “Correlation-enhanced feature”.
- 1 Neck panel in the upper center, green outline, titled “Neck” with subtitle “(built from DS-C3k2 blocks)”. Inside it show exactly 6 DS-C3k2 block boxes arranged in a 2-column by 3-row grid. Use black arrows between blocks, with exactly 2 yellow upsample boxes labeled “↑ 2×” and exactly 2 purple downsample boxes labeled “↓ 2×”. Include 3 blue circular input junctions on the left edge of the Neck and 3 green/purple circular tunnel markers below or beside the grid.
- 1 FullPAD legend module below the Neck, red outline, titled “FullPAD” with subtitle “(Full-Pipeline Aggregation-and-Distribution) Eq.12-13”. Show exactly 3 legend rows: “Backbone–Neck tunnel (Backbone-to-Neck connection)” using blue dotted arrows and blue hollow circles; “In-Neck tunnel (the internal layers of the Neck)” using green dotted arrows and green hollow circles; “Neck–Head tunnel (Neck-to-Head connection)” using purple dotted arrows and purple hollow circles. Connect the cube feature into FullPAD with an orange arrow, and draw dotted blue/green/purple tunnel routes upward and rightward to the Neck and Head.
- 1 Head panel on the right, purple outline, titled “Head” with subtitle “(Detect x3)”. Inside it show exactly 3 vertically stacked Detect boxes: “Detect (stride 8)”, “Detect (stride 16)”, and “Detect (stride 32)”. Each receives one arrow from the Neck and outputs to the right as H3, H4, H5 with labels “H3 (scale 1/8)”, “H4 (scale 1/16)”, and “H5 (scale 1/32)”.

Color coding: Backbone lines and panel in blue, Neck in green, Head in purple, HyperACE in orange, FullPAD outline in red. Main arrows are solid; FullPAD tunnels are dotted/dashed with hollow circular nodes. Use subtle pastel fills for module boxes.

Bottom caption: Add one wide rounded rectangle spanning the lower width. Text: “Classic YOLO is a one-directional Backbone → Neck → Head pipeline.” Then on the next line: “{argument name="model name" default="YOLOv13"} adds HyperACE and FullPAD on top of it to enhance feature representation and information flow.” Color the words Backbone blue, Neck green, Head purple, HyperACE orange, and FullPAD red.

Constraints: Keep all labels legible, align sections neatly, preserve the exact counts of blocks and detect heads, avoid extra modules, avoid photorealism except for the small input image thumbnail, and do not add a watermark.
```

**来源：** [@Keigo Nakano](https://x.com/keigo_naka91980/status/2064553638429872289) | 2026-06-10

---

### 📊 例 1106：低糖甜点科学信息图

![低糖甜点科学信息图](../images/%E4%BD%8E%E7%B3%96%E7%94%9C%E7%82%B9%E7%A7%91%E5%AD%A6%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
{argument name="grid style" default="2x2 grid"}, {argument name="aspect" default="16:9"}, ai infers: render_target =
( isometric_ingredient_swap_station_for_[dessert_type]_with_alternative_sweeteners_binders_flours * 1.6 )
+ ( glycemic_impact_comparison_chart_of_natural_and_artificial_sweeteners_for_[dessert_type] * 1.5 )
+ ( bulk_and_structure_science_diagram_explaining_how_to_replace_sugar_in_[dessert_type] * 1.6 )
+ ( texture_result_matrix_cakey_vs_chewy_vs_crispy_using_different_low_sugar_approaches * 1.4 )
+ ( taste_masking_and_flavor_boosting_techniques_for_[dessert_type]_with_spices_and_extracts * 1.2 )
+ ( 3_step_recipe_cards_for_low_sugar_[dessert_type]_with_precise_weights * 1.3 )
+ ( common_myths_busted_about_sugar_alcohols_and_natural_sweeteners * 1.0 )
- ( shaming_language_about_sugar_or_moralizing_food / 3.5 )
- ( unbaked_gooey_mess_presented_as_“healthy”_without_real_structure / 3.0 )
- ( over_use_of_green_leaves_and_“skinny”_labels / 3.3 )
```

**来源：** [@Gadgetify](https://x.com/Gdgtify/status/2065106786420711534) | 2026-06-11

---

### 📊 例 1118：社交媒体书籍总结信息图

![社交媒体书籍总结信息图](../images/%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%E4%B9%A6%E7%B1%8D%E6%80%BB%E7%BB%93%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
生成一张中等信息密度、适合社交媒体传播的书籍总结信息图海报，主题为《{argument name="书名" default="书籍名称"}》。

【整体风格】
{argument name="风格" default="现代极简 + 轻复古手绘风"}，背景使用柔和浅色（{argument name="背景色" default="奶油色 #FAF7F2"} 或浅灰蓝 #F5F8FA），大量留白，安静、有内容、可长时间阅读。

【核心要求】
先判断这本书的主要类型（认知成长、商业财富、心理情绪、小说故事），再据此自然组织内容和侧重点。不要用固定模板标题，不要强行凑结构，要像一个真正读懂书的人在分享。

【内容结构建议（动态组合）】
- 开场：书名 + 作者 + 一句极具洞察力的话（像人话）
- 核心理解：这本书真正想表达的核心是什么？它在回应什么现实问题？
- 最值得带走的部分（重点模块）：根据书类型选择模型、杠杆、情绪机制、人物冲突等
- 关键结构或框架（视觉核心）
- 印象深刻的例子/片段（带画面感）
- 值得记住的金句区（留白处理）
- 可以带走的改变/行动建议（3-5条，具体可执行）

【视觉要求】
- 自适应网格布局（2-3列或自由分布）
- 白色卡片 + 圆角 + 轻微阴影
- 每个模块配简洁手绘风格插图
- 标题层级清晰，重要信息适当强调
- 配色克制优雅（主色根据书类型选：科技蓝、成长绿、心理暖棕等）

【语言风格】
像人在讲书：有理解、有筛选、有顿悟感。避免“本书讲了…”“核心思想是…”等模板化表达。

生成一张信息清晰、设计高级、适合小红书/微博/推特传播的书籍总结海报。
```

**来源：** [@GOLD](https://x.com/Honcia13/status/2065079355387285763) | 2026-06-11

---

### 📊 例 1164：提示词：👇
生成一张 6 步流程图，主题为「旗袍花卉妆造生成过程」。每个小图保持 16:9，排版干净统一。

![提示词：👇 生成一张 6 步流程图，主题为「旗袍花卉妆造生成过程」。每个小图保持 16 9，排版干净统一。](../images/%E6%8F%90%E7%A4%BA%E8%AF%8D%EF%BC%9A%F0%9F%91%87%20%E7%94%9F%E6%88%90%E4%B8%80%E5%BC%A0%206%20%E6%AD%A5%E6%B5%81%E7%A8%8B%E5%9B%BE%EF%BC%8C%E4%B8%BB%E9%A2%98%E4%B8%BA%E3%80%8C%E6%97%97%E8%A2%8D%E8%8A%B1%E5%8D%89%E5%A6%86%E9%80%A0%E7%94%9F%E6%88%90%E8%BF%87%E7%A8%8B%E3%80%8D%E3%80%82%E6%AF%8F%E4%B8%AA%E5%B0%8F%E5%9B%BE%E4%BF%9D%E6%8C%81%2016%209%EF%BC%8C%E6%8E%92%E7%89%88%E5%B9%B2%E5%87%80%E7%BB%9F%E4%B8%80%E3%80%82.jpg)

**Prompt:**

```text
👇
生成一张 6 步流程图，主题为「旗袍花卉妆造生成过程」。每个小图保持 16:9，排版干净统一。

步骤1：素颜状态，花枝未生长。
步骤2：底妆轻微提亮，肩后细枝开始萌芽。
步骤3：眼妆打底，枝条变多，小花苞出现。
步骤4：眼影加深、眼线睫毛出现，花朵初步绽放。
```

**来源：** [@小宇Chengzi](https://x.com/Chengzilhy/status/2065002687511548186) | 2026-06-11

---

### 📊 例 1222：Codex 培训海报工作流程信息图

![Codex 培训海报工作流程信息图](../images/Codex%20%E5%9F%B9%E8%AE%AD%E6%B5%B7%E6%8A%A5%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张简洁的日文演示风格信息图，展示如何利用 Codex 和 Image 2.0 批量制作年度培训研讨会海报。

画布：16:9 横向 Slides，米白色背景，深海军蓝与柔和金色作为点缀色，现代企业医疗审美，留白充裕，带有细微阴影、细分割线和清晰的矢量图标。

页眉：大型加粗海军蓝日文标题：{argument name="headline text" default="使用 Codex 批量制作本年度培训海报"}。在标题左侧添加一条细长的金色垂直线。下方是较小的灰色副标题：{argument name="subtitle text" default="将信息汇总为项目，通过 Image 2.0 指定设计，实现一键批量生成。"}。在副标题下方放置一条细水平分割线。

顶部流程部分：在一行中显示 3 个带编号的步骤，由两条金色箭头线从左至右连接。每个步骤都有一个海军蓝圆形数字徽章、一个海军蓝标题、一个简单的线条图标和简短的日文说明文字。
1. 第 1 步标题：「将信息整理至文件夹」，配文件夹图标。正文说明将每场研讨会的信息收集到一个文件夹中，包含三个要点：日期/时间/地点、研讨会标题/部门、演讲者/讲座标题；并说明这成为项目素材。
2. 第 2 步标题：「创建项目并下达指令」，配清单文档图标。正文解释将文件夹转换为 Codex 项目，并指示其利用这些信息创建研讨会海报，包括设计方向（如颜色、布局和氛围）。
3. 第 3 步标题：「使用 Image 2.0 批量生成」，配带有闪光标记的显示器图标。正文解释所有研讨会海报均以统一设计同时生成，无需逐一制作，细微修改可通过补充指令处理。

底部海报展示区：在一行中均匀排列 4 张垂直研讨会海报卡片，每张卡片具有圆角、柔和的投影、白色主体、海军蓝页眉带、金色图标、右下角金色植物线条装饰以及底部附近的金色水平线。每张卡片包含四行带图标和标签的信息行：「日時」、「場所」、「演者」、「講演タイトル」。

海报卡片 1：页眉文字「第1回 医療安全研修会」，配盾牌与十字图标。日期行：「2025年6月20日（金） 18:00～19:30」。地点行：「本館 3階 大会議室」。演讲者行：「医療安全管理室　山田 太郎」。讲座标题行：「インシデントを防ぐための実践的アプローチ」。

海报卡片 2：页眉文字「第2回 感染対策研修会」，配病毒/网络图标。日期行：「2025年7月18日（金） 18:00～19:30」。地点行：「本館 3階 大会議室」。演讲者行：「感染管理認定看護師　佐藤 花子」。讲座标题行：「標準予防策の再確認と実践のポイント」。

海报卡片 3：页眉文字「第3回 放射線安全研修会」，配辐射符号图标。日期行：「2025年8月22日（金） 18:00～19:30」。地点行：「本館 3階 大会議室」。演讲者行：「診療放射線技師　鈴木 一郎」。讲座标题行：「放射線被ばくの最小化と防護の実践」。

海报卡片 4：页眉文字「第4回 接遇研修会」，配握手图标。日期行：「2025年9月19日（金） 18:00～19:30」。地点行：「本館 3階 大会議室」。演讲者行：「接遇担当　高橋 美咲」。讲座标题行：「信頼される医療者になるためのコミュニケーションの基本」。

页脚：在卡片下方居中放置一行简短的灰色日文总结：{argument name="footer text" default="统一设计、批量生成，彻底告别逐一制作的繁琐。"}。

视觉风格：标题和卡片页眉使用深海军蓝，点缀和图标/箭头使用柔和金色，分割线和辅助文字使用浅灰色。保持排版高度可读，采用日文无衬线字体，标题加粗，所有正文对齐整齐。保持自动生成报告的精致外观，不含照片、人物、水印，且不增加额外的海报卡片或步骤。

[English]
Goal: Create a clean Japanese presentation-style infographic showing how annual training seminar posters were batch-created with Codex and Image 2.0.

Canvas: 16:9 horizontal slide, off-white background, dark navy and muted gold accent colors, modern corporate healthcare aesthetic, generous margins, subtle shadows, thin divider lines, crisp vector icons.

Header: Large bold navy Japanese headline: {argument name="headline text" default="今年度の研修会ポスターをCodexで一括作成した"}. Add a thin vertical gold line to the left of the headline. Under it, a smaller gray subtitle: {argument name="subtitle text" default="情報をまとめてプロジェクト化し、Image 2.0でデザイン指定。全部まとめて生成。"}. Place a thin horizontal divider below the subtitle.

Top process section: Show exactly 3 numbered steps in one row, connected left-to-right by two gold arrow lines. Each step has a navy circular number badge, a navy title, a simple line icon, and short Japanese explanatory text.
1. Step 1 title: 「情報をフォルダにまとめる」 with a folder icon. Body says the information for each seminar is gathered into one folder, with three bullet items: date/time/place, seminar title/division, speaker/lecture title; then says this becomes project material.
2. Step 2 title: 「プロジェクト化して指示する」 with a checklist document icon. Body explains turning the folder into a Codex project and instructing it to create seminar posters using the information, including design directions such as colors, layout, and mood.
3. Step 3 title: 「Image 2.0で一括生成」 with a monitor icon containing sparkle marks. Body explains that all seminar posters are generated together in a unified design, no need to make them one by one, and small corrections can be handled with additional instructions.

Bottom poster gallery: Display exactly 4 vertical seminar poster cards in a single row, evenly spaced, each with rounded corners, soft drop shadow, white body, navy header band, gold icons, gold botanical line decoration at the bottom right, and a gold horizontal line near the bottom. Each card has four information rows with icons and labels: 「日時」, 「場所」, 「演者」, 「講演タイトル」.

Poster card 1: Header text 「第1回 医療安全研修会」 with a shield-and-cross icon. Date row: 「2025年6月20日（金） 18:00～19:30」. Place row: 「本館 3階 大会議室」. Speaker row: 「医療安全管理室　山田 太郎」. Lecture title row: 「インシデントを防ぐための実践的アプローチ」.

Poster card 2: Header text 「第2回 感染対策研修会」 with a virus/network icon. Date row: 「2025年7月18日（金） 18:00～19:30」. Place row: 「本館 3階 大会議室」. Speaker row: 「感染管理認定看護師　佐藤 花子」. Lecture title row: 「標準予防策の再確認と実践のポイント」.

Poster card 3: Header text 「第3回 放射線安全研修会」 with a radiation symbol icon. Date row: 「2025年8月22日（金） 18:00～19:30」. Place row: 「本館 3階 大会議室」. Speaker row: 「診療放射線技師　鈴木 一郎」. Lecture title row: 「放射線被ばくの最小化と防護の実践」.

Poster card 4: Header text 「第4回 接遇研修会」 with a handshake icon. Date row: 「2025年9月19日（金） 18:00～19:30」. Place row: 「本館 3階 大会議室」. Speaker row: 「接遇担当　高橋 美咲」. Lecture title row: 「信頼される医療者になるためのコミュニケーションの基本」.

Footer: Center a small gray Japanese summary line below the cards: {argument name="footer text" default="すべて統一デザイン・一括生成・1枚ずつ作る手間がゼロに"}.

Visual style: Use dark navy for headings and card headers, muted gold for accents/icons/arrows, light gray for dividers and secondary text. Keep typography highly legible, Japanese sans-serif, with the headline bold and all body text aligned neatly. Maintain a polished autogenerated-report look with no photos, no people, no watermark, and no extra poster cards or extra steps.
```

**来源：** [@てんそ｜医療× AI](https://x.com/tenso_ai_med/status/2065535061198540873) | 2026-06-12

---

### 📊 例 1253：Master Potter 陶瓷信息图网格

![Master Potter 陶瓷信息图网格](../images/Master%20Potter%20%E9%99%B6%E7%93%B7%E4%BF%A1%E6%81%AF%E5%9B%BE%E7%BD%91%E6%A0%BC.jpg)

**Prompt:**

```text
[中文]
2x2 网格，16:9，针对 {argument name="number of potters" default="4"} 位著名陶艺大师执行此操作   输入：   [{argument name="potter data" default="四位陶艺大师及其釉料化学成分图表"}]   系统：   将每位陶艺家渲染为“正在化身为器皿的原始粘土”。每个面板包含一位从巨大的柴烧窑和石膏板中浮现出来的核心工匠。下半部分由生陶土、未烧制的粘土、木制修坯刀、灰釉配方和窑具组成。上半部分是一位超写实的电影级陶艺家，身上覆盖着泥浆、辐射热畸变、皮革围裙和汗水。   转换逻辑：   窑炉的化学反应转化为物理纹理。釉面的缩釉和开片变成皮肤纹理或织物图案，拉坯留下的轮纹变成罗纹状的结构盔甲，窑具变成沉重的结构支撑或饰品。   环境：   窑炉扩展为柴烧穴窑中咆哮、耀眼的内部空间，或是一个细节极其丰富、尘土飞扬的陶艺工作室，伴随着强烈的热畸变和飞溅的余烬。   数据层：   添加精细的陶瓷标注： - “10 号锥还原烧” - “热冲击” - “二氧化硅助熔剂比” - “大气碳” - “玻璃化温度点” - “缩釉”   视觉风格：   照片级写实的工业与工艺摄影，强烈的暖色调灯光（橙色、红色和深土褐色），浓重的烟雾和热畸变纹理，原始泥土和玻璃质釉面的微距细节。   构图：   严格的 2x2 网格，每个面板如同高端工艺与材料科学杂志的专题报道。

[English]
2x2 grid, 16:9 do this for {argument name="number of potters" default="4"} famous master potters   input:   [{argument name="potter data" default="four master potters & their glaze chemistry charts"}]   system:   render each potter as a “raw clay becoming vessel.” each panel contains one central artisan emerging from a giant, wood-fired kiln and plaster bat. the lower half is made from raw grog, unfired clay, wooden ribs, ash glaze recipes, and kiln wadding. the upper half is a hyper-realistic cinematic potter covered in slip, radiant heat distortion, leather aprons, and sweat.   transformation logic:   the chemistry of the kiln becomes physical texture. glaze crawls and crackles become physical skin textures or fabric patterns, throwing rings become ribbed, structural armor, and kiln wadding becomes heavy, structural supports or jewelry.   environment:   the kiln expands into the roaring, blinding interior of a wood-fired anagama kiln or a hyper-detailed, dusty pottery studio, with massive thermal heat distortion and flying embers.   data layer:   add refined ceramic callouts: - “cone 10 reduction” - “thermal shock” - “silica flux ratio” - “atmospheric carbon” - “vitrification point” - “glaze crawl”   visual style:   photorealistic industrial and craft photography, intense warm lighting (oranges, reds, and deep earth browns), heavy smoke and heat distortion textures, macro details of raw earth and glassy glazes.   composition:   strict 2x2 grid, each panel like a premium craft and material science magazine feature.
```

**来源：** [@Gadgetify](https://x.com/Gdgtify/status/2065423373799424499) | 2026-06-12

---

### 📊 例 1435：用于药物研究的科学信息图

![用于药物研究的科学信息图](../images/%E7%94%A8%E4%BA%8E%E8%8D%AF%E7%89%A9%E7%A0%94%E7%A9%B6%E7%9A%84%E7%A7%91%E5%AD%A6%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个关于 {argument name="topic" default="LIME 药物设计"} 的详细科学信息图，涵盖其核心概念、作用机制以及在 {argument name="industry" default="药物研究"} 领域的实际应用

[English]
Create a detailed scientific infographic about {argument name="topic" default="LIME Drug Design"}, covering its core concepts, mechanisms, and real-world applications in {argument name="industry" default="pharmaceutical research"}
```

**来源：** [@PromptLab](https://x.com/iamaiistudio/status/2065586883036578036) | 2026-06-13

---

### 📊 例 1575：时尚信息图概念设计表

![时尚信息图概念设计表](../images/%E6%97%B6%E5%B0%9A%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%A6%82%E5%BF%B5%E8%AE%BE%E8%AE%A1%E8%A1%A8.jpg)

**Prompt:**

```text
[中文]
时尚蓝图设计表，展示了一位身着休闲 {argument name="team style" default="足球灵感"} 街头服饰的年轻时髦女性，全身正面视角，配有详细的服装注释和造型标注标签。留着长直黑发，妆容自然柔和，笑容轻松，身穿海军蓝与深红色条纹的 {argument name="jersey style" default="巴塞罗那足球队风格"} 球衣，搭配超大廓形水洗蓝 {argument name="pants type" default="超宽腿牛仔裤"}，白色厚底运动鞋，黑色单肩包，双手随意插在口袋里，背景为带有现代装饰的极简室内环境，呈现出随性自然的韩系街头时尚美学。

模特周围环绕着时尚信息图元素、球衣面料说明、牛仔材质描述、鞋履拆解、配饰标注、姿势分析、造型建议，采用电影级柔光，构图简洁大气，超高细节，专业时尚概念设计表，8k。

[English]
Fashion blueprint sheet of a stylish young woman in casual {argument name="team style" default="football-inspired"} streetwear, full-body front view with detailed outfit annotations and styling callout labels. Long straight dark hair, soft natural makeup, relaxed smile, navy and deep-red striped {argument name="jersey style" default="FC Barcelona-style"} football jersey, oversized faded blue {argument name="pants type" default="ultra-wide-leg denim jeans"}, white chunky sneakers, black shoulder bag, hands tucked casually into pockets, minimalist indoor setting with modern décor, effortless Korean street-fashion aesthetic.

Surrounding the model are fashion infographic elements, jersey fabric notes, denim texture descriptions, footwear breakdowns, accessory callouts, pose analysis, styling tips, cinematic soft lighting, clean editorial composition, ultra detailed, professional fashion concept sheet, 8k.
```

**来源：** [@Zephyra Leigh](https://x.com/ZephyraLeigh/status/2066538934713380962) | 2026-06-15

---

### 📊 例 1636：Museum Wall Claude Fable 5 信息图

![Museum Wall Claude Fable 5 信息图](../images/Museum%20Wall%20Claude%20Fable%205%20%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创建一张垂直的博物馆画廊风格日式说明信息图，主题为 {argument name="headline text" default="Claude Fable 5に、米国が動いた"}，呈现为一面精心策划的墙面展品，配有华丽的金色画框、温暖的聚光灯，以及一名正在观察展品的小型观察者角色。

画布：3:4 纵向构图，暖色调奶油色画廊墙面，木质地板，柔和阴影，左上方和右上方各有一盏天花板聚光灯，写实 3D 渲染信息图风格，配以优雅的编辑级灯光。

布局：顶部居中放置大号粗体黑色衬线日文字体标题，上方和下方配有小型金色装饰花纹。在标题下方，排列 3 个主要的华丽框架展品，并由 2 个金色箭头从左至右连接：一个直线箭头从左侧框架指向中心框架，另一个 L 型箭头从中心框架向下/向右指向右侧的大型框架。

主要框架展品，共 3 个：
1. 左侧框架：小型金色画框，背景为深色寺庙风格，内含一块雕刻石碑。顶部海军蓝标签文字为 {argument name="left frame label" default="Mythos 5"}。底部象牙白标签文字为「高性能モデル」。在此框架下方，附带一块华丽的象牙白铭牌，内含一个带有金锁的小型棕色宝箱，文字为「フル性能だが限定提供」。
2. 中心框架：中型金色画框，展示桌面上打开的插画故事书，右页为明亮的风景插画。顶部海军蓝标签文字为 {argument name="center frame label" default="Fable 5"}。底部象牙白标签文字为「公開向け調整」。在此框架下方，附带一块华丽的象牙白铭牌，内含一个简单的纸箱图标，文字为「危険部分を抑制」。
3. 右侧框架：右侧最大的金色画框，深红色背景，内含一个带有金色美国鹰印章的密封红色信封。顶部红色标签文字为「米国通達」，中央大号文字为「停止通達」，底部红色标签文字为「全アクセス停止」。在此框架下方，附带一块华丽的象牙白铭牌，内含一个红色圆形暂停图标，文字为「国籍判定できず 全員停止」。

附加文本框：在左下方观察者与右侧框架之间，放置一张小型华丽的象牙白便签卡。内容必须包含以下日文正文：「性能と安全のせめぎ合いが、国境の壁を生んだ。その判断が、すべての扉を閉じた。」，下方配有一个微小的金色装饰。

观察者角色：在左下方添加 1 名 Q 版成年女性，背影呈四分之三视角，抬头仰望展品。她留着 {argument name="hair color" default="深棕色"} 的齐肩波波头，戴着眼镜，身穿白色衬衫、黑色铅笔裙和黑色平底鞋。相对于墙面展示，她的比例要小。

视觉风格：高级博物馆信息图，华丽的金色画框，奶油色与酒红色调，衬线字体，柔和的写实阴影，抛光的木质地板，平衡的留白，细腻的景深，高分辨率垂直海报设计。

约束条件：必须使用 3 个主要框架展品，3 个附在展品下方的说明铭牌，1 张独立的便签卡，2 个方向箭头，1 个观察者角色，以及 2 盏天花板聚光灯。保留所写的日文文本，避免多余的标签，禁止添加水印或 Logo，并确保所有文字清晰易读。

[English]
Goal: Create a vertical museum-gallery style Japanese explainer infographic about {argument name="headline text" default="Claude Fable 5に、米国が動いた"}, shown as a curated wall exhibit with ornate gold picture frames, warm spotlights, and a small viewer character observing the display.

Canvas: Portrait 3:4 composition, warm cream gallery wall, wooden floor, subtle shadows, two ceiling spotlights at the upper left and upper right, realistic 3D-rendered infographic style with elegant editorial lighting.

Layout: Large centered headline at the top in bold black serif Japanese typography, with small gold ornamental flourishes above and below. Beneath it, arrange exactly 3 main ornate framed exhibits connected left-to-right by exactly 2 gold arrows: one straight arrow from the left frame to the center frame, then an L-shaped arrow from the center frame down/right to the large right frame.

Main framed exhibits, exactly 3:
1. Left frame: small gold frame with a dark temple-like background and a carved stone tablet. Top navy label reads {argument name="left frame label" default="Mythos 5"}. Bottom ivory label reads 「高性能モデル」. Below this frame, attach one ornate ivory plaque containing a small brown treasure chest with a gold lock and the text 「フル性能だが限定提供」.
2. Center frame: medium gold frame showing an open illustrated storybook on a table, with a bright landscape illustration on the right page. Top navy label reads {argument name="center frame label" default="Fable 5"}. Bottom ivory label reads 「公開向け調整」. Below this frame, attach one ornate ivory plaque containing a simple cardboard box icon and the text 「危険部分を抑制」.
3. Right frame: largest gold frame on the right, deep red background, containing a sealed red envelope with a gold U.S. eagle seal. Top red label reads 「米国通達」, large central text reads 「停止通達」, and bottom red label reads 「全アクセス停止」. Below this frame, attach one ornate ivory plaque containing a red circular pause icon and the text 「国籍判定できず 全員停止」.

Additional text box: Place one small ornate ivory note card near the lower center-left, between the viewer and the right frame. It should contain exactly this Japanese body text: 「性能と安全のせめぎ合いが、国境の壁を生んだ。その判断が、すべての扉を閉じた。」 with a tiny gold ornament beneath.

Viewer character: Add exactly 1 chibi-style adult woman standing at the lower left, seen from behind in three-quarter view, looking up at the exhibit. She has {argument name="hair color" default="dark brown"} shoulder-length bobbed hair, glasses, a white blouse, black pencil skirt, and black flats. Keep her small relative to the wall display.

Visual style: Premium museum infographic, ornate gold frames, cream and burgundy palette, serif typography, soft realistic shadows, polished wood floor, balanced negative space, subtle depth-of-field, high-resolution vertical poster design.

Constraints: Use exactly 3 main framed exhibits, exactly 3 lower explanatory plaques attached to those exhibits, exactly 1 separate note card, exactly 2 directional arrows, exactly 1 viewer character, and exactly 2 ceiling spotlights. Preserve the Japanese text as written, avoid extra labels, avoid watermarks or logos, and keep all text legible.
```

**来源：** [@永野ヨウ](https://x.com/nagano_yoh/status/2066366747125698830) | 2026-06-15

---

### 📊 例 1684：史诗级宇宙历史时间轴海报

![史诗级宇宙历史时间轴海报](../images/%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%AE%87%E5%AE%99%E5%8E%86%E5%8F%B2%E6%97%B6%E9%97%B4%E8%BD%B4%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
目标：为 gpt-image-2 创建一幅超宽、信息密度极高的全景插画时间轴，涵盖整个宇宙、地球、生命、人类文明、科技及未来，并将其渲染为一幅无缝衔接的史诗级横截面壁画。

画布：16:9 横向海报，极高细节，电影级写实风格与博物馆级教育插画相结合，清晰度足以辨认微小的时间轴标签。画面中心使用宏大的地球弧形地平线，上方为外太空，下方为分层历史场景。画面不留空白。

整体布局：构图分为 4 个主要横向区域。顶部区域：深空中的宇宙历史。中上区域：横跨广阔景观的地球历史与自然演化。中下区域：人类文明与科技进步。底部区域：一条连续的金色时间轴带，包含 18 个精确标注的中文里程碑，每个里程碑配有一个小圆点标记。

顶部宇宙区域：最左侧展示炽热的宇宙大爆炸，色彩斑斓的星云和星场、螺旋星系、正在形成的行星、太阳系、地球与月球、小行星与彗星、火箭、卫星、空间站、月球上的宇航员、月球车、火星车、未来空间望远镜、航天器、环形空间站、遥远行星、黑洞，以及最右侧蓝色的激光状太空轨迹。在上方区域添加一条带有小型圆形节点的细长金色轨道时间轴线。

中上地球与演化区域：左侧融合火山喷发的早期地球，伴有闪电、熔岩、陨石撞击、炽热海洋、微生物气泡和海洋生物；过渡到郁郁葱葱的史前海洋，包含鱼类、菊石、三叶虫和海生爬行动物；延伸至恐龙景观，包含森林、蜥脚类、兽脚类、翼龙及小型恐龙；过渡到冰河时代的群山与猛犸象；最后过渡到现代河流、草原、大象、鹿、风力发电机、农田，以及右侧线条流畅的未来城市天际线。保持过渡无缝衔接，如同按时间顺序排列的世界地图。

中下文明与科技区域：最左侧展示人类演化的剪影，包括前行的人类、早期营火、洞穴、石器、原始小屋、陶器、羊群与牛群。随后展示古代农业、金字塔、神庙、古典城市、宝塔、中世纪城堡、教堂、集市、帆船、商队、早期机械、蒸汽火车、自行车、汽车、飞机、冒烟的工厂、电线、电话、收音机、电视机、计算机、笔记本电脑、智能手机、服务器、实验室、控制室、机器人、全息蓝色界面、高速列车及未来玻璃城市。包含许多身着时代服装的小人物，自然地进行互动。

底部条带：创建一个深蓝黑色的页脚带，配有一条细金线和 18 个均匀分布的里程碑节点。每个节点使用以下精确的中文标签和日期：1. 「宇宙诞生\n约138亿年前」，2. 「太阳系形成\n约46亿年前」，3. 「地球形成\n约45亿年前」，4. 「生命起源\n约38亿年前」，5. 「海洋生命\n约5.4亿年前」，6. 「恐龙时代\n约2.3亿年前」，7. 「哺乳动物时代\n约6600万年前」，8. 「人类出现\n约300万年前」，9. 「农业革命\n约1.2万年前」，10. 「文明起源\n约公元前3500年」，11. 「古典时代\n约公元前800年」，12. 「中世纪\n约5世纪」，13. 「大航海时代\n15–17世纪」，14. 「工业革命\n18–19世纪」，15. 「电气时代\n19–20世纪」，16. 「信息时代\n20世纪后半叶」，17. 「数字时代\n21世纪」，18. 「未来探索\n未来」。

视觉风格：超高细节的史诗级科技历史信息图，写实光影，色彩鲜艳且协调，金色装饰线条，深蓝与橙色调，微缩模型细节，电影级景深，清晰的微场景，拒绝卡通风格，拒绝扁平矢量感。

限制条件：海报内容需极其丰富但逻辑连贯；确保所有 18 个底部标签清晰可读；避免在时间轴外出现随机乱码文字；避免重复的里程碑标签；不得添加水印或 Logo。主题为 {argument name="timeline theme" default="宇宙、地球、生命、文明、科技及未来探索的完整历史"}。页脚标签使用 {argument name="language for milestone labels" default="中文"}，视觉风格采用 {argument name="visual style" default="超高细节电影级教育壁画"}，强调色使用 {argument name="accent color" default="金色"}，未来城市氛围设定为 {argument name="future city mood" default="乐观的蓝色未来感"}。

[English]
Goal: Create an ultra-wide, extremely information-dense panoramic illustrated timeline of the entire universe, Earth, life, human civilization, technology, and the future, rendered as a single seamless epic cross-section mural for gpt-image-2.

Canvas: 16:9 horizontal poster, very high detail, cinematic realism mixed with museum-quality educational illustration, sharp enough to read tiny timeline labels. Use a grand curved horizon of Earth across the center, with outer space above and layered historical scenes below. No blank areas.

Overall layout: The composition is divided into 4 main horizontal zones. Top zone: cosmic history in deep space. Upper-middle zone: Earth history and natural evolution across a sweeping landscape. Lower-middle zone: human civilization and technological progress. Bottom zone: a continuous golden timeline strip with exactly 18 labeled milestones in Chinese, each with a small circular marker.

Top cosmic zone: Show a fiery Big Bang explosion at far left, colorful nebulae and starfields, a spiral galaxy, forming planets, the solar system, Earth and Moon, asteroids and comets, rockets, satellites, a space station, astronauts on the Moon, lunar rover, Mars rover, futuristic space telescopes, spacecraft, a ring station, distant planets, black hole, and blue laser-like space trails at far right. Add a thin golden orbital timeline line with small circular nodes crossing this upper area.

Upper-middle Earth and evolution zone: Blend volcanic early Earth on the left with lightning, lava, meteor impacts, hot oceans, microbial bubbles and sea creatures; transition into lush prehistoric seas with fish, ammonites, trilobites, and marine reptiles; continue into a dinosaur landscape with forests, sauropods, theropods, pterosaurs, and smaller dinosaurs; transition to ice-age mountains and mammoths; then to modern rivers, grasslands, elephants, deer, birds, wind turbines, farmland, and a sleek futuristic city skyline at the right. Keep the transitions seamless like a chronological world map.

Lower-middle civilization and technology zone: At far left show human evolution silhouettes walking forward, early campfires, caves, stone tools, primitive huts, pottery, sheep and cattle. Continue through ancient agriculture, pyramids, temples, classical cities, pagodas, medieval castles, churches, marketplaces, sailing ships, caravans, early machines, steam trains, bicycles, automobiles, airplanes, factories with smokestacks, power lines, telephones, radios, televisions, computers, laptops, smartphones, servers, laboratories, control rooms, robots, holographic blue interfaces, high-speed trains, and futuristic glass cities. Include many tiny people in period clothing interacting naturally.

Bottom strip: Create a dark blue-black footer band with a thin gold line and exactly 18 milestone nodes, evenly spaced left to right. Use these exact Chinese labels and dates, one per node: 1. 「宇宙诞生\n约138亿年前」, 2. 「太阳系形成\n约46亿年前」, 3. 「地球形成\n约45亿年前」, 4. 「生命起源\n约38亿年前」, 5. 「海洋生命\n约5.4亿年前」, 6. 「恐龙时代\n约2.3亿年前」, 7. 「哺乳动物时代\n约6600万年前」, 8. 「人类出现\n约300万年前」, 9. 「农业革命\n约1.2万年前」, 10. 「文明起源\n约公元前3500年」, 11. 「古典时代\n约公元前800年」, 12. 「中世纪\n约5世纪」, 13. 「大航海时代\n15–17世纪」, 14. 「工业革命\n18–19世纪」, 15. 「电气时代\n19–20世纪」, 16. 「信息时代\n20世纪后半叶」, 17. 「数字时代\n21世纪」, 18. 「未来探索\n未来」.

Visual style: Hyper-detailed epic science-history infographic, realistic lighting, vibrant but coherent color grading, gold accent lines, deep blues and oranges, miniature diorama detail, cinematic depth, crisp micro-scenes, no cartoon style, no flat vector look.

Constraints: Make the poster astonishingly dense but coherent; keep all 18 bottom labels legible; avoid random unreadable text outside the timeline; avoid duplicated milestone labels; do not add watermarks or logos. The main theme is {argument name="timeline theme" default="the complete history of the universe, Earth, life, civilization, technology, and future exploration"}. Use {argument name="language for milestone labels" default="Chinese"} for the footer labels, a {argument name="visual style" default="hyper-detailed cinematic educational mural"}, a {argument name="accent color" default="gold"}, and a {argument name="future city mood" default="optimistic blue futuristic"}.
```

**来源：** [@沐阳](https://x.com/yyyole/status/2066865025059520750) | 2026-06-16

---

### 📊 例 1691：纹身师故事板信息图

![纹身师故事板信息图](../images/%E7%BA%B9%E8%BA%AB%E5%B8%88%E6%95%85%E4%BA%8B%E6%9D%BF%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个清晰、简洁的信息图故事板海报，主题为 {argument name="subject" default="纹身师"}。16:9 宽屏布局，白色背景，黑色边框，粗体黑色排版，优质 Pixar 3D 风格渲染，富有情绪的暖色调工作室灯光，点缀霓虹色彩 — 深黑色

[English]
Create a crisp, clean infographic storyboard poster for {argument name="subject" default="THE TATTOO ARTIST"}. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, moody warm studio lighting with neon color pops — deep black
```

**来源：** [@TechieSA](https://x.com/TechieBySA/status/2066849629564555622) | 2026-06-16

---

### 📊 例 1751：地球剖面结构信息图

![地球剖面结构信息图](../images/%E5%9C%B0%E7%90%83%E5%89%96%E9%9D%A2%E7%BB%93%E6%9E%84%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创建一张具有视觉冲击力的科学剖面信息图，展示 {argument name="planet name" default="地球"}，呈现其在太空中且内部结构如同精密 3D 剖面模型般暴露出来的效果。

画布：1:1 正方形构图，高分辨率，背景为布满繁星的黑色太空。行星占据画面左侧及中心大部分区域，标注文字排列在右侧。

主体：从太空视角观察的写实地球，略微偏左，地表可见亚洲、日本、东南亚和澳大利亚。从地球右前方移除一个巨大的楔形四分之一部分以露出内部。剖面应呈现出物理切割感，边缘为厚实的岩石地壳，内部层级带有发光效果。在行星周围添加一层淡淡的蓝色大气光晕。

剖面结构：准确展示 4 个独立的内部/结构层，每一层视觉上均清晰可辨，并与标注引导线对齐：1) 最外层为薄薄的棕色岩石地壳，2) 厚实的红橙色地幔层，呈现湍流质感，3) 包围中心明亮的橙色外核，以及 4) 位于中心发着黄白色光芒的内核球体。使地幔成为视觉上最大的层级，外核呈半球状且具有发光感，内核则极其明亮并带有旋转的热流质感。

文字与标注：在右侧放置 4 个日语标注块，每个标注块配有一个白色圆点标记和一条指向对应层级的细白引导线。使用加粗的白色日语标题，并在每个标题下方添加较小的白色解释性文字。四个可见标签必须为：{argument name="crust label" default="地殻"}，下方小字“地球の最も外側の薄い層。”；{argument name="mantle label" default="マントル"}，下方小字“厚さ約2,900kmの層。高温の岩石がゆっくりと流動している。”；{argument name="outer core label" default="外核"}，下方小字“厚さ約2,200kmの層。主に鉄とニッケルの流体で構成される。”；{argument name="inner core label" default="内核"}，下方小字“半径約1,220kmの固体の層。主に鉄とニッケルでできており、非常に高温・高圧の環境にある。”

视觉风格：写实太空科学教育海报，电影级光效，清晰的排版，逼真的地球纹理，发光的熔岩状内部，简洁的白色标注线，高对比度，精致的博物馆级信息图风格。

约束：保持 4 个标注块和 4 个层级标签。不要添加额外的图标、标签、边框、Logo、水印或装饰性 UI 面板。确保所有文字清晰易读，并放置在行星右侧。

[English]
Goal: Create a dramatic scientific cutaway infographic of {argument name="planet name" default="Earth"}, showing the planet in space with its internal layers exposed like a precise 3D sectional model.

Canvas: Square 1:1 composition, high-resolution, black star-filled space background. The planet fills most of the left and center of the frame, with annotation text arranged on the right side.

Main subject: A photorealistic Earth viewed from space, centered slightly left, with Asia, Japan, Southeast Asia, and Australia visible on the surface. Remove a large wedge-shaped quarter section from the front-right side of the globe to reveal the interior. The cutaway should look physically carved, with a thick rocky crust rim and glowing internal layers. Add a subtle blue atmospheric glow around the planet.

Cutaway structure: Show exactly 4 discrete internal/structural layers, each visually distinct and aligned with annotation leader lines: 1) a thin brown rocky crust at the outer edge, 2) a thick red-orange molten mantle layer with turbulent texture, 3) a bright orange outer core surrounding the center, and 4) a glowing yellow-white inner core sphere at the center. Make the mantle the largest visible layer, the outer core semi-spherical and luminous, and the inner core intensely bright with swirling heat texture.

Text and labels: Place exactly 4 Japanese annotation blocks on the right, each with a white dot marker and thin white leader line pointing to the correct layer. Use bold white Japanese headings and smaller white explanatory text beneath each heading. The four visible labels must be: {argument name="crust label" default="地殻"} with smaller text “地球の最も外側の薄い層。”; {argument name="mantle label" default="マントル"} with smaller text “厚さ約2,900kmの層。高温の岩石がゆっくりと流動している。”; {argument name="outer core label" default="外核"} with smaller text “厚さ約2,200kmの層。主に鉄とニッケルの流体で構成される。”; {argument name="inner core label" default="内核"} with smaller text “半径約1,220kmの固体の層。主に鉄とニッケルでできており、非常に高温・高圧の環境にある。”

Visual style: Photorealistic space-science educational poster, cinematic lighting, crisp typography, realistic Earth texture, glowing lava-like interior, clean white callout lines, high contrast, polished museum infographic style.

Constraints: Keep exactly 4 annotation blocks and exactly 4 layer labels. Do not add extra icons, extra labels, borders, logos, watermarks, or decorative UI panels. Keep all text legible and positioned to the right of the planet.
```

**来源：** [@G2（じーにー）｜AIビジネス翻訳家](https://x.com/aiclass_g2/status/2067362555019042839) | 2026-06-17

---

### 📊 例 1758：牙医故事板信息图

![牙医故事板信息图](../images/%E7%89%99%E5%8C%BB%E6%95%85%E4%BA%8B%E6%9D%BF%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创作一张清晰、简洁的信息图故事板海报，主题为 {argument name="subject" default="牙医"}。布局为 {argument name="aspect ratio" default="宽屏 16:9"}，白色背景，黑色边框，粗体黑色排版，渲染风格为 {argument name="rendering style" default="高级 Pixar 3D 风格化渲染"}，色彩明亮生动 —— 洁净的临床白，天蓝色手套

[English]
Create a crisp, clean infographic storyboard poster for {argument name="subject" default="THE DENTIST"}. {argument name="aspect ratio" default="Wide 16:9"} layout, white background, black borders, bold black typography, {argument name="rendering style" default="premium Pixar 3D stylized rendering"}, bright vivid colors — clean clinical white, sky blue gloves
```

**来源：** [@TechieSA](https://x.com/TechieBySA/status/2067286660149092638) | 2026-06-17

---

### 📊 例 1789：技术蓝图信息图

![技术蓝图信息图](../images/%E6%8A%80%E6%9C%AF%E8%93%9D%E5%9B%BE%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
关于 {argument name="object" default="[OBJECT]"} 的高级技术信息图。
仅使用参考图像来理解物体的形状和结构，切勿直接复制相同的照片、角度、构图或背景。以全新的专业写实摄影风格重新诠释该主体，画面需整洁、光线充足，并配以合适且更具美感的背景。保持物体为真实照片，而非插画。添加技术蓝图风格的叠加层，包含白色线条、箭头、尺寸标注、标签以及关于零件、材质、测量数据和功能的小型图示。
构图清晰、优雅且富有信息量。
在左上角包含一个草图框，标题为 "OBJECT"。

[English]
Premium technical infographic of {argument name="object" default="[OBJECT]"}.
Use the reference image only to understand the shape and structure of the object, without copying the same photo, angle, composition, or background. Reinterpret the subject in a new professional and realistic photograph, clean and well-lit, with a suitable and more aesthetic background. Keep the object as a real photo, not an
illustration. Add a technical blueprint-style overlay with white lines, arrows, dimensions, labels, and small diagrams of parts, materials, measurements, and functionality.
Clear, elegant, and informative composition.
Include a sketch box in the upper left corner with the title "OBJECT".
```

**来源：** [@Al-Shamus](https://x.com/im_shahid7/status/2067218870264602681) | 2026-06-17

---

### 📊 例 1790：中华文明历程海报

![中华文明历程海报](../images/%E4%B8%AD%E5%8D%8E%E6%96%87%E6%98%8E%E5%8E%86%E7%A8%8B%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
目标：创作一张信息极其密集的全景式插画历史信息图，标题为 {argument name="main title" default="中华上下五千年文化历程"}，将五千年中华文明展现为从史前时代到当代的一条连续视觉时间轴。

画布：宽幅横向海报，比例约为 16:9，羊皮纸色背景，带有古卷质感，装饰有云纹和龙纹边框，采用暖棕褐色墨水，辅以柔和的红色、蓝色、玉绿色、青铜色、金色和黑色书法。采用密集的手绘中国历史壁画风格，线条细腻，包含微缩人物、建筑细节、文物插图，并具备博物馆目录般的精确度。

布局：将海报分为 5 个堆叠的横向带。第 1 带是主要的时间轴全景，顶部设有大标题，并从左至右排列 10 个标记明确的时代板块：1) 史前，2) 夏商周，3) 春秋战国，4) 秦汉，5) 魏晋南北朝，6) 隋唐，7) 宋元，8) 明清，9) 近现代，10) 当代。第 2 带是文物、文字、发明、书籍、钱币、瓷器、印章、乐器和书法样本的目录条。第 3 带是社会生活与经济条，展示农业、作坊、集市、学校、礼仪、贸易、军队、宫廷场景、船只、桥梁和城市街道。第 4 带是科学、医学、植物学、天文学、制图学和技术条，包含图表、学者、工具、时钟、地球仪、实验室般的房间以及早期工业场景。第 5 带是现代至当代技术条，包含实验室、工厂、计算机、办公室、航空航天、卫星、高铁、可再生能源和未来主义基础设施。

主题细节：顶部的时间轴应如连续的古老山水画般流动，包含山川、河流、道路、宫殿、寺庙、城门、村庄、农田、商队、骑兵、军队、学者、皇帝、工匠、僧侣、商人、戏曲表演者、改革开放时期的市民、现代工程师、摩天大楼、高铁、火箭发射和轨道航天器。在中央上方全景图中加入一条蜿蜒的浅色河流或龙形丝带，在视觉上连接各个时代。左侧应体现史前和青铜时代感，中间应强调历代王朝和古典文化，右侧则过渡到现代工业、城市生活和空间技术。

文字内容：在顶部中央使用黑色大号毛笔书法书写主标题 {argument name="main title" default="中华上下五千年文化历程"}。在顶部沿线保留 10 个小型深色牌匾作为时代标签。在画面中添加大量细小的中文书法注释、卷轴残片、书页、印章和标签，但它们应作为装饰性的历史注解，而非大段可阅读的文字。

视觉风格：极繁主义教育挂图，百科全书式博物馆壁画，中国古画与历史信息图的融合，包含数千个微小细节，清晰的微缩场景，精心分隔的板块，无留白，陈旧纸张质感，手绘墨线，细腻的水彩渲染，写实但风格化的历史服饰与文物。

约束条件：必须保留 10 个顶部时代板块和 5 个横向内容带。画面需密集且连贯，不得包含任何现代英文字符、水印、Logo，不得有空白区域，且不得有单一超大字符主导构图。

[English]
Goal: Create an extremely information-dense panoramic illustrated historical infographic titled {argument name="main title" default="中华上下五千年文化历程"}, showing five thousand years of Chinese civilization as a continuous visual timeline from ancient prehistory to the contemporary era.

Canvas: Wide horizontal poster, approximately 16:9 aspect ratio, parchment-colored background, antique scroll texture, ornate cloud-and-dragon border, warm sepia ink with muted reds, blues, jade greens, bronze, gold, and black calligraphy. Use a dense hand-painted Chinese historical mural style with fine linework, miniature figures, architectural details, artifact illustrations, and museum-catalog precision.

Layout: Divide the poster into 5 stacked horizontal bands. Band 1 is the main chronological panorama with a large title at the top and exactly 10 labeled era panels running left to right: 1) 史前, 2) 夏商周, 3) 春秋战国, 4) 秦汉, 5) 魏晋南北朝, 6) 隋唐, 7) 宋元, 8) 明清, 9) 近现代, 10) 当代. Band 2 is a catalog strip of artifacts, writing, inventions, books, coins, porcelain, seals, instruments, and calligraphy samples. Band 3 is a social-life and economy strip showing agriculture, workshops, markets, schools, rituals, trade, armies, court scenes, ships, bridges, and city streets. Band 4 is a science, medicine, botany, astronomy, cartography, and technology strip with diagrams, scholars, tools, clocks, globes, laboratory-like rooms, and early industrial scenes. Band 5 is a modern-to-contemporary technology strip with laboratories, factories, computers, offices, aerospace, satellites, high-speed rail, renewable energy, and futuristic infrastructure.

Subject details: The top timeline should flow like a continuous ancient landscape with mountains, rivers, roads, palaces, temples, city gates, villages, farms, caravans, horse riders, armies, scholars, emperors, artisans, monks, merchants, opera performers, reform-era citizens, modern engineers, skyscrapers, bullet train, rocket launch, and orbiting spacecraft. Include a pale winding river or dragon-like ribbon crossing the central upper panorama, visually connecting the eras. The left side should feel prehistoric and bronze-age, the middle should emphasize imperial dynasties and classical culture, and the right side should shift into modern industry, urban life, and space technology.

Text content: Use the main title {argument name="main title" default="中华上下五千年文化历程"} in large black brush calligraphy centered at the top. Keep the 10 era labels in small dark plaques along the top. Add many tiny Chinese calligraphy notes, scroll fragments, book pages, seals, and labels throughout, but they should function as decorative historical annotations rather than large readable paragraphs.

Visual style: Maximalist educational wall chart, encyclopedic museum mural, ancient Chinese painting fused with historical infographic, thousands of tiny details, crisp miniature scenes, carefully separated panels, no empty space, aged paper texture, hand-drawn ink outlines, subtle watercolor shading, realistic but stylized historical costumes and artifacts.

Constraints: Preserve exactly 10 top era panels and 5 horizontal content bands. Make the image dense but coherent, with no modern English text, no watermark, no logo, no blank areas, and no single oversized character dominating the composition.
```

**来源：** [@今天也要学AI](https://x.com/DevAIVibe/status/2067208622975971802) | 2026-06-17

---

### 📊 例 2060：龙井茶信息图海报

![龙井茶信息图海报](../images/%E9%BE%99%E4%BA%95%E8%8C%B6%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
目标：为 {argument name="tea name" default="龙井茶"} 创建一张精致的中国茶信息图海报，采用优雅的编辑排版、柔和的植物氛围以及清晰的中文排版。

画布：16:9 宽屏横向画布，温暖的米白色背景，带有微妙的纸张纹理，圆角卡片 UI 面板，配有柔和阴影和细浅色边框。使用象牙白、鼠尾草绿、橄榄绿、柔和金和深森林绿组成的冷静色调。

布局：构建 7 个圆角矩形内容面板和 1 个底部长条标语栏。排列如下：左侧一个大型主视觉卡片，占据约一半宽度和上部三分之二空间；中右列堆叠两个小卡片；最右列堆叠两个小卡片；左下角一个小型采摘卡片；底部中心/右侧横跨一个长条标语栏。

主视觉卡片：左上角放置一个带有叶子图标的小胶囊标签，文字为“中国十大名茶之一”。添加一个非常大的深绿色中文标题“{argument name="tea name" default="龙井茶"}”和一个较小的英文副标题“{argument name="English tea name" default="Longjing Tea"}”。下方添加简短描述“中国十大名茶之一，以扁平挺秀、清香鲜爽著称。” 在该卡片右侧添加逼真的产品静物：一杯淡绿色的玻璃茶杯，杯中漂浮着茶叶，后方是一个浅色白碟，堆放着扁平的龙井茶叶。背景应包含模糊的绿色植物阴影和柔和的日光。在主视觉卡片底部，展示 3 个由细垂直线分隔的图标功能块：叶子图标标注“历史悠久 / 千年传承”，山峰图标标注“匠心工艺 / 传统炒制”，冒热气的茶杯图标标注“清雅之味 / 自然本真”。在该卡片右下角，添加一个带有地图定位图标的地点胶囊，文字为“浙江·杭州·西湖”。

中右上方卡片：创建一个产地卡片，带有水上传统中式凉亭的细线圆形图标，标题为“产地”，文字为“主要产于浙江杭州西湖一带，西湖龙井最为知名。” 底部添加淡淡的灰绿色景观剪影。

中右下方卡片：创建一个风味卡片，带有淡绿色圆形茶杯图标，标题为“风味”，文字为“豆香、栗香与清新的嫩香并存，口感柔和，回甘细腻。” 右下角添加微妙的茶叶线条画。

最右上方卡片：创建一个标题为“特点”的功能列表卡片，带有深绿色圆形叶子图标。包含 4 行由虚线分隔的水平列表行，每行配有一个小图标和中文文字：1) 叶子图标“外形扁平挺直”，2) 水滴图标“色泽嫩绿光润”，3) 香气/蒸汽图标“香气清高鲜爽”，4) 茶碗图标“滋味鲜醇甘润”。右上角添加两个淡淡的装饰性叶子轮廓。

最右下方卡片：创建一个标题为“冲泡建议”的冲泡指南卡片，带有茶壶图标。添加文字行“水温 80–85°C | 茶水比例 1:50 | 可用玻璃杯或盖碗冲泡。” 底部展示 3 个由垂直分隔符隔开的小型指标块：温度计图标“80–85°C”，水滴图标“1:50”，茶杯图标“玻璃杯/盖碗”。

左下角采摘卡片：创建一个标题为“等级与采摘”的卡片，带有小叶子图标。添加正文“以春茶为佳，芽叶细嫩，明前茶尤受欢迎。” 在该卡片右侧，放置一张带有浅景深效果的、田间新鲜嫩绿茶芽的小型圆角照片。

底部标语栏：创建一个带有微妙叶子纹理的长条淡绿色标语栏。居中放置大字间距的中文“鲜 · 香 · 甘”。右侧添加短语“一杯龙井，品味江南春意”，配以精致的流线和叶子插图，以及一个包含“茶”字的小型垂直茶印。

视觉风格：高端现代中式编辑设计，逼真的茶摄影与简洁的矢量图标融合，柔和的自然光，清晰易读的文字，宽敞的间距，平衡的网格，圆角，微妙的阴影，无杂乱感。

约束：使用 7 个内容面板和 1 个底部标语栏，3 个主视觉功能块，4 个功能列表行，以及 3 个冲泡指标块。保持所有中文文字清晰易读。无水印，无额外 Logo，无人物。

[English]
Goal: Create a clean premium Chinese tea infographic poster for {argument name="tea name" default="龙井茶"}, with an elegant editorial product-card layout combining photography, soft illustrations, and Chinese typography.

Canvas: Wide horizontal 16:9 canvas, warm off-white background, subtle paper texture, rounded white cards with soft shadows and thin pale-gray borders. Use a refined palette of deep tea green, muted olive, cream, light beige, and pale gold.

Layout: Arrange exactly 7 rounded information cards plus 1 bottom slogan banner. The left side contains one large hero card occupying about half the canvas width and upper-left area. The right side contains four smaller cards in a 2-by-2 grid. The bottom-left contains one horizontal card. The bottom center/right contains a long banner spanning most of the remaining width.

Hero card details: Large Chinese title “{argument name="tea name" default="龙井茶"}” in dark green calligraphic serif style, with smaller English subtitle “{argument name="English tea name" default="Longjing Tea"}”. Add a small pill label at top left reading “中国十大名茶之一” with a leaf icon. Include short body copy: “中国十大名茶之一，以扁平挺秀、清香鲜爽著称。” On the right side of this card, show a realistic transparent glass cup of pale green tea with floating tea leaves, placed behind a shallow white ceramic dish filled with dry flat Longjing tea leaves. Add faint bamboo/leaf shadows in the background. Along the bottom of the hero card, show exactly 3 small icon feature blocks: 1) leaf icon, “历史悠久 / 千年传承”; 2) mountain icon, “匠心工艺 / 传统炒制”; 3) teacup icon, “清雅之味 / 自然本真”. Add a small location pill at bottom right with a pin icon and text “浙江 · 杭州 · 西湖”.

Right-side card count and contents: Create exactly 4 smaller rounded cards. Card 1, top middle: “产地” with a circular line icon of a traditional pavilion and text “主要产于浙江杭州西湖一带，西湖龙井最为知名。” Add misty gray-green mountains at the bottom. Card 2, top right: “特点” with exactly 4 list rows separated by dotted lines, each with a small icon: “外形扁平挺直”, “色泽嫩绿光润”, “香气清高鲜爽”, “滋味鲜醇甘润”. Card 3, lower middle: “风味” with a small teacup icon and text “豆香、栗香与清新的嫩香并存，口感柔和，回甘细腻。” Add pale botanical line art leaves in the lower-right corner. Card 4, lower right: “冲泡建议” with a teapot icon and text “水温 80–85°C | 茶水比例 1:50 | 可用玻璃杯或盖碗冲泡。” At the bottom of this card show exactly 3 small measurement icons and labels: thermometer “80–85°C”, water drop “1:50”, teacup “玻璃杯/盖碗”.

Bottom-left card: Title “等级与采摘” with a small leaf icon. Text: “以春茶为佳，芽叶细嫩，明前茶尤受欢迎。” Include one rectangular rounded photo inset showing fresh green tea buds growing outdoors with soft bokeh.

Bottom banner: A long pale green textured banner with large dark green slogan text “{argument name="slogan" default="鲜 · 香 · 甘"}” centered-left, followed by smaller text “一杯龙井，品味江南春意”. Add a delicate flowing tea-leaf line illustration on the right and a tiny vertical tea seal icon.

Visual style: High-end modern Chinese wellness branding, minimal and airy, crisp readable Chinese text, soft natural light, realistic tea photography blended with subtle botanical line art. Keep all cards aligned on a grid with generous spacing and rounded corners.

Constraints: Use exactly 7 information cards and exactly 1 bottom slogan banner. Use exactly 3 hero feature blocks, 4 feature list rows, and 3 brewing measurement icons. Do not add extra logos, watermarks, QR codes, people, or unrelated objects.
```

**来源：** [@歸藏(guizang.ai)](https://x.com/op7418/status/2068239294372987378) | 2026-06-20

---

### 📊 例 2117：复古兔子拼贴标本

![复古兔子拼贴标本](../images/%E5%A4%8D%E5%8F%A4%E5%85%94%E5%AD%90%E6%8B%BC%E8%B4%B4%E6%A0%87%E6%9C%AC.jpg)

**Prompt:**

```text
[中文]
创作一张竖构图的复古混合媒介拼贴插画，画面中心为一个站立的兔子形状角色，背景为泛黄的奶油色档案纸，带有细长矩形边框和淡淡的污渍。该角色是一个全身拟人化的兔子剪影，拥有 2 只修长的竖耳、1 个圆头、1 个躯干、2 只手臂、2 条腿和 2 只厚实的靴子，完全由撕碎的纸片、古董图表、地图、手稿残片、电路板碎片、硬币、齿轮和工程蓝图拼贴而成。配色采用柔和的深褐色、羊皮纸色、赭石色、海军蓝蓝图色、褪色的电路板绿色、铜色和深色墨水色调。头部由左侧的马匹洞穴壁画纸和右侧的解剖/技术绘图纸拼贴而成，中央的奶油色圆形面部贴片上绘有一个简单的黑色无穷大符号，头部右侧附有一个巨大的红色玻璃相机镜头或机械光学装置。在头部后方，绘制向外延伸的精细放射状墨水线条。两只耳朵各不相同：左耳包含一个带有小型标注节点和撕裂手稿边缘的科学网络图；右耳包含单词“MYCELIUM”、白色蘑菇/菌丝体插图以及一条绿色电路板条。躯干看起来像一件打补丁的黄色纸质外套或束腰外衣，上面印有大字 {argument name="torso text" default="KANA"}，并配有撕裂的胶带状纸条、地图碎片、小型灯泡绘图以及右侧露出的绿色电路板。在头部左下方/躯干上部附近添加 6 枚清晰可见的硬币，并在角色左侧髋部/侧面添加 3 个工业齿轮。腿部和靴子由深海军蓝蓝图纸制成，带有白色绘图线条、米色撕裂纸带和厚重的黑色靴底。在角色周围添加带有细引线的小型手写注释标签，呈现老式标本图的风格：右上角标注“Catalog ocean prominent”，左中部标注“Illimeted manuscip cuttings”，右中部标注“Circuit letterpress samples”，左下角标注“Industrial gears”，右下角标注“Catalog specimen plate”。整体氛围：异想天开的复古未来主义珍奇屋标本，精准的拼贴边缘，层叠的撕裂纸张质感，手绘技术细节，无写实人脸特征，非现代简洁矢量风格。主体应为 {argument name="character shape" default="a rabbit silhouette"}，面部贴片上带有 {argument name="central symbol" default="a black infinity symbol"}，以高分辨率扫描纸艺拼贴形式呈现于 {argument name="background paper" default="aged cream paper"} 之上。

[English]
Create a vertical vintage mixed-media collage illustration of a standing rabbit-shaped character centered on an aged cream archival paper page, with a thin rectangular border and subtle stains. The character is a full-body anthropomorphic bunny silhouette with exactly 2 long upright ears, 1 round head, 1 torso, 2 arms, 2 legs, and 2 chunky boots, constructed entirely from torn paper fragments, antique diagrams, maps, manuscript scraps, circuit board pieces, coins, gears, and engineering blueprints. Use a muted sepia, parchment, ochre, navy blueprint, faded green circuit-board, copper, and dark ink palette. The head should be a collage of horse cave-art paper on the left, anatomical/technical drawing paper on the right, a central cream circular face patch containing a simple black infinity symbol, and a large red glass camera-lens or mechanical optical device attached on the right side of the head. Behind the head, draw fine radial sunburst ink lines extending outward. The 2 ears should differ: the left ear contains a scientific network diagram with small labeled nodes and torn manuscript edges; the right ear contains the word “MYCELIUM,” a white mushroom/mycelium illustration, and a green circuit-board strip. The torso should resemble a patched yellow paper coat or tunic with the large printed word {argument name="torso text" default="KANA"}, torn tape-like strips, map fragments, small lightbulb drawings, and exposed green circuit board on the right side. Add exactly 6 visible coins clustered near the lower left side of the head/upper torso, and exactly 3 industrial gears at the character’s left hip/side. The legs and boots should be made from dark navy blueprint paper with white drafting lines, beige torn paper bands, and heavy black boot soles. Include small handwritten annotation labels around the character with thin leader lines, in the style of an old specimen plate: “Catalog ocean prominent” near the upper right, “Illimeted manuscip cuttings” at left middle, “Circuit letterpress samples” at right middle, “Industrial gears” at lower left, and “Catalog specimen plate” at lower right. Overall mood: whimsical retro-futurist cabinet-of-curiosities specimen, precise collage edges, layered torn paper texture, hand-drawn technical details, no photorealistic human features, no modern clean vector style. The main subject should be {argument name="character shape" default="a rabbit silhouette"} with {argument name="central symbol" default="a black infinity symbol"} on the face patch, rendered as a high-resolution scanned paper collage on {argument name="background paper" default="aged cream paper"}.
```

**来源：** [@KANA｜東京AI映像](https://x.com/KanaWorks_AI/status/2068687847117512863) | 2026-06-21

---

### 📊 例 2159：远征规划战略项目

![远征规划战略项目](../images/%E8%BF%9C%E5%BE%81%E8%A7%84%E5%88%92%E6%88%98%E7%95%A5%E9%A1%B9%E7%9B%AE.jpg)

**Prompt:**

```text
[中文]
为正在规划 {argument name="mission type" default="[旅程 / 任务]"} 前往 {argument name="location" default="[目的地 / 时代]"} 的远征队长提供的战略指挥项目。左侧面板：详细的地形路线图，标注了航点、危险区域，边缘处设有时间轴。中央面板：所有装备的俯视平铺图，按整齐的行排列，每件物品均标注了重量和功能，标记了冗余项，不包含任何多余物品。右侧面板：远征进行中或抵达目的地时的场景，广阔景观中点缀着渺小的人物，比例感鲜明。视觉语言从制图的精确性，过渡到功能性清单记录，再到宏大的史诗级环境摄影。标题栏显示：“{argument name="expedition name" default="[远征名称]"} — [路线], [日期], [目标]”。

[English]
A strategic command board for an expedition leader planning {argument name="mission type" default="[JOURNEY / MISSION]"} to {argument name="location" default="[DESTINATION / ERA]"}. Left panel: detailed topographic route map with labeled waypoints, annotated danger zones, and a timeline running along the edge. Center panel: overhead flat lay of every piece of kit in neat organized rows, each item tagged by weight and function, redundancies flagged, nothing unnecessary included. Right panel: the expedition in motion or the destination reached, small human figures against a vast landscape, scale unmistakable. Visual language shifts from cartographic precision through functional inventory documentation to sweeping epic environmental photography. Title block reads: "{argument name="expedition name" default="[EXPEDITION NAME]"} — [ROUTE], [DATE], [OBJECTIVE]".
```

**来源：** [@PromptLab](https://x.com/iamaiistudio/status/2069104692098130014) | 2026-06-22

---

### 📊 例 2162：赛博生物发光花卉信息图

![赛博生物发光花卉信息图](../images/%E8%B5%9B%E5%8D%9A%E7%94%9F%E7%89%A9%E5%8F%91%E5%85%89%E8%8A%B1%E5%8D%89%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
赛博半透明生物荧光花卉概念信息图，9:16竖版。中央是一株超写实3D赛博花卉，悬浮于冷黑色未来实验室虚空中。花瓣与叶片呈半透明磨砂玻璃质感，具有次表面散射、X光透视、薄膜折射与显微水滴；内部植物脉络转化为PCB电路、光导纤维、发光毛细管和能量流体。保持真实植物结构：65%有机生命体，35%数字电路。采用“主星—卫星”构图：中央立体花卉占约30%，外围70%为高密度二维HUD信息系统。画面边缘精确排列10个独立数据模组，严格对齐隐藏网格，以0.5pt超细直线和90度机械折线连接花瓣、叶脉、茎干、雄蕊与电路节点。模组内嵌微型条形图、波形图、光谱曲线、等高线剖面、拓扑节点和点阵刻度。视觉风格：超写实生物X光渲染 × 冷峻正交HUD界面 × 未来植物实验档案。背景为接近黑色的无限虚空，加入极弱数字颗粒、扫描线、点阵网格和体积雾。主体无外框自然融入背景，外围UI采用硬边模块化切割。避免普通游戏界面、廉价赛博朋克、卡通质感和机械零件随意拼贴。**配色主题：{argument name="主题名称" default="郁金香"}*** 背景基底：{argument name="深色背景" default="冷黑色"}* 半透明结构色：{低饱和玻璃色}* 主生物荧光色：{主色}* 辅助荧光色：{辅色}* 唯一强调色：{强调色}* 技术文字色：{文字色}色彩规则：背景与结构色占约60%，主、辅助荧光色占约30%，强调色仅占5%—10%。全画面最多两种荧光色和一种强调色。强调色严格用于雄蕊能量核心、电路节点、关键箭头、危险参数与数据峰值，禁止大面积使用，禁止随机彩虹渐变。字体采用浓缩技术文档排版。顶部设置一个超大纯汉字黑体标题，约64px，禁止拼音、英文和中英混排。10个模组使用等宽小标题、技术无衬线正文 and 高密度微文本。文字从中央向边缘逐渐密集，不遮挡主体，不出现乱码大字。主体配色映射：花瓣主体使用透明结构色，花瓣边缘与叶脉使用主荧光色，内部细脉与光纤使用辅助荧光色，PCB交汇节点与雄蕊核心仅使用强调色。外围HUD亮度不得超过中央花卉。高细节、电影级照明、真实折射、体积辉光、锐利边缘、精密排版、印刷级品质、统一构图、极高信息密度。主体：{argument name="主体" default="郁金香"}
```

**来源：** [@知识猫图解](https://x.com/GeekCatX/status/2069089696978976877) | 2026-06-22

---

### 📊 例 2238：皮克斯风格信息图故事板

![皮克斯风格信息图故事板](../images/%E7%9A%AE%E5%85%8B%E6%96%AF%E9%A3%8E%E6%A0%BC%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%95%85%E4%BA%8B%E6%9D%BF.jpg)

**Prompt:**

```text
[中文]
创建一个清晰、简洁的信息图故事板海报，主题为 {argument name="title" default="THE DONUT MAKER"}。采用 16:9 宽屏布局，白色背景，黑色边框，粗体黑色排版，{argument name="style" default="高级皮克斯 3D 风格渲染"}，明亮鲜艳的色彩——金黄色的油炸面团，浓郁的巧克力

[English]
Create a crisp, clean infographic storyboard poster for {argument name="title" default="THE DONUT MAKER"}. Wide 16:9 layout, white background, black borders, bold black typography, {argument name="style" default="premium Pixar 3D stylized rendering"}, bright vivid colors — golden fried dough, rich chocolate
```

**来源：** [@TechieSA](https://x.com/TechieBySA/status/2069463116291731475) | 2026-06-23

---

### 📊 例 2318：Claude Code 速报信息图

![Claude Code 速报信息图](../images/Claude%20Code%20%E9%80%9F%E6%8A%A5%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创建一张日式手绘风格的速报信息图，主题为 {argument name="headline topic" default="Claude Code 实现用于 X 速报帖子的信息图生成功能"}。

画布：16:9 横向图片，深蓝色黑板背景，粗糙的马克笔和粉笔质感，采用高对比度的红色、橙色、黄色、白色和奶油色。使用不规则的手写字体、草图轮廓、笔触和涂鸦图标。拒绝照片级真实感。

布局：左侧设有一个带白色边框的竖长红色速报横幅，垂直堆叠白色大号日文「速报」字样，底部附近有一个黄色闪电图标。顶部中央设有一个宽大的红橙渐变笔触标题横幅，左侧配有 1 个黄色闪电图标，右侧配有 1 个扩音器图标。下方是一个圆角来源栏。中间主要区域包含 2 个垂直堆叠的大型圆角矩形信息面板。右侧包含 2 个垂直堆叠的小型圆角卡片：上方为来源信息卡，下方为日期/时间卡。底部一行包含 3 个标签胶囊。

文本内容：顶部标题横幅文字：第一行「Claude Code」，第二行「インフォグラフィック画像生成機能を」，第三行「X速報投稿に実装」。来源栏文字：「SOURCE: zenn-blog-automation PR #217」。右侧来源卡文字：「情報源:」然后是「zenn-blog-automation」和「PR #217」。第一个主面板文字：「GPT-IMAGE-2で」、「breaking_newsテーマの」、「インフォグラフィックを生成し」、「X速報投稿に添付できるようになった。」在图像缩略图图标上包含一个写有「GPT-IMAGE-2」的小型橙色标签。第二个主面板文字：「画像生成失敗時は」、「テキストのみ投稿にフォールバック。」日期/时间卡文字：「検出日時:」然后是 {argument name="timestamp" default="2026/06/24 19:15 JST"}。底部标签胶囊必须包含 3 个标签：{argument name="hashtag one" default="#claudecode"}、{argument name="hashtag two" default="#anthropic"} 以及 {argument name="hashtag three" default="#ai"}。

需包含的离散视觉元素：1 个左侧竖向横幅、1 个顶部标题笔触横幅、1 个来源栏、2 个主信息面板、2 个右侧卡片、3 个标签胶囊、共 2 个黄色闪电图标、1 个扩音器、1 个文档图标、1 个时钟图标、1 个带山脉图案的图像缩略图图标、2 个指向右侧的橙色箭头图标、1 个带 X 的云朵失败图标，以及 1 个带三个点的对话气泡。

视觉风格：充满活力的日式速报信息图，马克笔海报外观，略显不规则的白色手写字体，橙色圆角边框，重要短语下方有黄色下划线高亮，扩音器、横幅和标签周围有小型装饰性放射状强调标记。保持构图紧凑但易读，具有强烈的层级感和戏剧性的紧急新闻氛围。

约束：严格使用指定的日文文本，不要添加额外的部分或标签，所有图标保持手绘风格，避免使用 Logo，避免水印，并全程保持粗糙的粉笔和颜料质感。

[English]
Goal: Create a hand-drawn breaking-news style infographic in Japanese about {argument name="headline topic" default="Claude Code implementing infographic image generation for X breaking-news posts"}.

Canvas: 16:9 horizontal image, dark navy chalkboard background, rough marker and chalk texture, high-contrast red, orange, yellow, white, and cream colors. Use imperfect hand-lettering, sketchy outlines, brush strokes, and doodle icons. No photorealism.

Layout: Left side has 1 tall vertical red breaking-news banner with a white border, large white Japanese text 「速報」 stacked vertically, and 1 yellow lightning bolt near the bottom. Top center has 1 wide red-to-orange brush-stroke headline banner with 1 yellow lightning icon on the left and 1 megaphone icon on the right. Under it is 1 rounded source bar. Main middle area contains exactly 2 large rounded rectangular information panels stacked vertically. Right side contains exactly 2 smaller rounded cards stacked vertically: a source-information card above and a date/time card below. Bottom row contains exactly 3 hashtag pills.

Text content: Top headline banner text: 「Claude Code」 on the first line, then 「インフォグラフィック画像生成機能を」, then 「X速報投稿に実装」. Source bar text: 「SOURCE: zenn-blog-automation PR #217」. Right source card text: 「情報源:」 then 「zenn-blog-automation」 then 「PR #217」. First main panel text: 「GPT-IMAGE-2で」, 「breaking_newsテーマの」, 「インフォグラフィックを生成し」, 「X速報投稿に添付できるようになった。」 Include a small orange label reading 「GPT-IMAGE-2」 on an image-thumbnail icon. Second main panel text: 「画像生成失敗時は」, 「テキストのみ投稿にフォールバック。」 Date/time card text: 「検出日時:」 then {argument name="timestamp" default="2026/06/24 19:15 JST"}. Bottom hashtag pills must read exactly 3 labels: {argument name="hashtag one" default="#claudecode"}, {argument name="hashtag two" default="#anthropic"}, and {argument name="hashtag three" default="#ai"}.

Discrete visual elements to include: exactly 1 left vertical banner, 1 top headline brush banner, 1 source bar, 2 main info panels, 2 right-side cards, 3 hashtag pills, 2 yellow lightning bolts total, 1 megaphone, 1 document icon, 1 clock icon, 1 image-thumbnail icon with mountains, 2 orange arrow icons pointing right, 1 cloud-with-X failure icon, and 1 speech bubble with three dots.

Visual style: Energetic Japanese breaking-news infographic, marker poster look, slightly irregular white handwritten type, orange rounded borders, yellow underline highlights under important phrases, small decorative radiating accent marks around the megaphone, banner, and hashtags. Keep the composition dense but readable, with strong hierarchy and a dramatic emergency-news feel.

Constraints: Use Japanese text exactly as specified, do not add extra sections or extra hashtags, keep all icons hand-drawn, avoid logos, avoid watermarks, and maintain the rough chalk-and-paint texture throughout.
```

**来源：** [@甲斐甲](https://x.com/k_aik_ou/status/2069726412253110717) | 2026-06-24

---

### 📊 例 2380：白斑河鲀科学图鉴

![白斑河鲀科学图鉴](../images/%E7%99%BD%E6%96%91%E6%B2%B3%E9%B2%80%E7%A7%91%E5%AD%A6%E5%9B%BE%E9%89%B4.jpg)

**Prompt:**

```text
[中文]
目标：制作一张 4:5 纵向比例的微距科学图鉴信息图，主题为 {argument name="animal name" default="白斑河鲀"}，将该动物呈现为极具视觉冲击力的全出血珊瑚礁景观，并采用信息丰富的杂志排版。

画布：4:5 纵向比例，深青色海洋背景，将高分辨率写实野生动物微距摄影与简洁的矢量信息图板块相结合。使用奶油色、沙色、柔和的黄色、水蓝色和珊瑚橙色作为点缀。添加细微的气泡、珊瑚礁纹理和圆角板块边框。

主体：一条大型写实白斑河鲀，{argument name="scientific name" default="Arothron hispidus"}，位于画面中下方偏右，面向右侧，身体充气呈圆形，覆盖着密集的白斑，拥有带有黄色光环的明亮眼睛、微噘的小嘴、半透明的鳍，背景可见珊瑚礁。鱼类应像景观标本一样占据中心位置。

顶部标题区：大型压缩大写奶油色标题，内容为 {argument name="headline text" default="白斑河鲀"}。下方添加斜体黄色学名“Arothron hispidus”，随后是一行简短的分类信息“辐鳍鱼纲 / 鲀形目 / 四齿鲀科”，以及一段简短描述：“一种迷人的珊瑚礁居民，拥有强大的防御能力和缓慢的游动姿态——可爱、聪明且具有潜在危险。”

左侧栏：创建一个名为“防御特征”的纵向板块，包含 6 张带编号的特征卡片，每张卡片配有小幅照片剪裁和文字。6 张卡片分别为：1) “充气”：展示充气后的河鲀面部，解释其通过快速吸入水或空气使身体膨胀成一个大圆球；2) “棘刺”：展示近距离观察下竖起的尖锐皮肤棘刺，解释其在充气时会从皮肤中竖起；3) “坚韧皮肤”：展示皮革般的斑点皮肤，解释其带有凸起和鳞片的厚实皮肤提供了机械性保护；4) “喙状牙齿”：展示嘴部，解释其融合的强力牙齿可以压碎螃蟹、蜗牛和海胆等带壳猎物；5) “毒素风险”：展示带有生物危害标志和黄色警告三角的河鲀，解释河鲀毒素可能致命且无解药；6) “警告姿态”：展示完全充气的带刺河鲀，解释受威胁的动物会充气、竖起棘刺并展示鲜明的对比图案。

右侧栏：创建堆叠的圆角科学板块。顶部为分类卡片，包含 3 行内容及图标：“纲：辐鳍鱼纲 (Actinopterygii)”、“目：鲀形目 (Tetraodontiformes)”、“科：四齿鲀科 (Tetraodontidae)”。下方为“分布范围”板块，展示青色背景上的米色世界地图，并以橙色高亮显示印度洋-太平洋分布区，标注为“印度洋-太平洋：东非至琉球群岛，南至澳大利亚，东至法属波利尼西亚。”下方创建 3 张生态卡片：“捕食者”配以鲨鱼、石斑鱼、海鳗和海鸟图像；“饮食”配以螃蟹、蜗牛和海胆图像；“行为”配以小型河鲀肖像，描述其缓慢放松的游动方式，常在珊瑚礁附近徘徊，独居或成对，除非受到挑衅否则不具攻击性。

中下部信息带：在鱼类附近添加一张“栖息地”小卡片，配有珊瑚图标，介绍其在清澈热带水域的珊瑚礁和泻湖中生活，通常靠近斜坡和避风区域，深度可达 40 米。在中心区域底部，添加 5 个带有图标的度量瓷砖：“体型：最大 50 厘米 (20 英寸)”、“重量：最大 2.5 公斤 (5.5 磅)”、“速度：最快 8 公里/小时 (5 英里/小时)”、“寿命：野生环境下 10–15 年”、“保护状况：无危 (LC)，IUCN 红色名录”。

底部区域：创建两个大型圆角板块。左侧板块标题为“关键适应性”，包含 7 个绿色勾选符号的要点：具有可快速充气的弹性胃；通过肌肉控制竖起的棘刺；用于物理防御的坚韧带刺皮肤；用于压碎硬壳猎物的强力喙；作为化学防御的河鲀毒素；与珊瑚和沙地融为一体的卓越伪装；用于精确机动的强壮胸鳍。包含一张带刺充气河鲀的圆形内嵌图像。右侧板块标题为“3 个惊人的事实”，包含 3 条带编号的事实：1) 它们可以使用胸鳍在海底“行走”；2) 河鲀毒素并非由鱼类自身产生，而是来自其饮食中的细菌，并随地点和季节而变化；3) 尽管看起来行动迟缓，但它们是优秀的解题者，拥有良好的记忆力。添加三张小型辅助插图：行走中的河鲀、绿色细菌和蓝色大脑。

页脚：添加一个带有相机图标的窄长圆角横幅，包含保护信息 {argument name="footer message" default="只可远观，不可触碰。拍照留念，切勿惊扰。这些神奇的防御机制属于海洋。"}，随后是一个蓝色小爱心。

约束条件：使用列出的准确板块数量和编号项目。保持所有文字为英文，清晰易读，并对齐到精致的教育海报网格中。避免添加额外的动物或不相关的标签。无水印，无二维码，无 Logo。

[English]
Goal: Create a vertical 4:5 macro-detail scientific plate infographic about {argument name="animal name" default="White-Spotted Pufferfish"}, presenting the animal as a dramatic full-bleed reef landscape with an information-rich magazine layout.

Canvas: Portrait 4:5 aspect ratio, dark teal oceanic background, high-resolution photorealistic macro wildlife photography blended with clean vector infographic panels. Use cream, sand, muted yellow, aqua, and coral-orange accents. Add subtle bubbles, reef texture, and rounded panel borders.

Main subject: A large photorealistic white-spotted pufferfish, {argument name="scientific name" default="Arothron hispidus"}, centered slightly low and right, facing right, inflated into a round body covered in dense white spots, with a glossy yellow-ringed eye, small puckered mouth, translucent fins, and coral reef visible behind it. The fish should dominate the center like a landscape specimen.

Top title area: Large condensed uppercase cream headline reading {argument name="headline text" default="WHITE-SPOTTED PUFFERFISH"}. Under it, add the italic yellow scientific name “Arothron hispidus”, then a small taxonomy line “Actinopterygii / Tetraodontiformes / Tetraodontidae” and a short description: “A charismatic coral reef resident with powerful defenses and a slow-moving demeanor—cute, clever, and potentially deadly.”

Left column: Create a vertical panel titled “DEFENSIVE FEATURES” with exactly 6 numbered feature cards, each with a small photo crop and text. The 6 cards are: 1) “INFLATION” showing an inflated pufferfish face, explaining it rapidly fills its stomach with water or air to swell into a large rounded ball; 2) “SPINES” showing close-up raised sharp skin spines, explaining they erect from the skin when inflated; 3) “TOUGH SKIN” showing leathery spotted skin, explaining thick skin in bumps and scales provides mechanical protection; 4) “BEAK-LIKE TEETH” showing the mouth, explaining fused powerful teeth crush hard-shelled prey like crabs, snails, and urchins; 5) “TOXIN RISK” showing the pufferfish with a biohazard symbol and yellow warning triangle, explaining tetrodotoxin can be lethal and has no antidote; 6) “WARNING POSTURE” showing a fully inflated spiny fish, explaining the threatened animal inflates, raises spines, and displays bold contrast patterns.

Right column: Create stacked rounded science panels. At the top, a taxonomy card with exactly 3 rows and icons: “CLASS: Actinopterygii (ray-finned fishes)”, “ORDER: Tetraodontiformes (pufferfishes and relatives)”, and “FAMILY: Tetraodontidae (true pufferfishes)”. Below it, a “RANGE” panel with a beige world map on teal and orange highlighted Indo-Pacific distribution, captioned “Indo-Pacific: East Africa to the Ryukyu Islands, south to Australia, and east to French Polynesia.” Below, create exactly 3 ecological cards: “PREDATORS” with shark, grouper, moray eel, and seabird imagery; “DIET” with crab, snail, and sea urchin imagery; and “BEHAVIOR” with a small pufferfish portrait, describing slow relaxed movement, often hovering near reefs, solitary or paired, not aggressive unless provoked.

Center-lower info strip: Add a small “HABITAT” card near the fish with a coral icon and text about coral reefs and lagoons in clear tropical waters, usually near slopes and sheltered areas from the surface down to 40 meters. Along the bottom of the central area, add exactly 5 metric tiles with icons: “SIZE Up to 50 cm (20 in)”, “WEIGHT Up to 2.5 kg (5.5 lb)”, “SPEED Up to 8 km/h (5 mph)”, “LIFESPAN 10–15 years in the wild”, and “CONSERVATION STATUS LEAST CONCERN (LC), IUCN Red List”.

Bottom section: Create two large rounded panels. Left panel titled “KEY ADAPTATIONS” with exactly 7 green check bullet points: elastic stomach for rapid inflation; spines that erect via muscular control; tough spined skin for physical defense; powerful beak for crushing hard prey; tetrodotoxin as chemical defense; excellent camouflage with white spots blending into coral and sand; strong pectoral fins for precise maneuvering. Include a circular inset image of a spiny inflated pufferfish. Right panel titled “3 SURPRISING FACTS” with exactly 3 numbered facts: 1) they can “walk” on the seafloor using pectoral fins; 2) tetrodotoxin is not produced by the fish itself but comes from bacteria in its diet and varies by location and season; 3) despite their slow look, they are excellent problem-solvers with good memory. Add three small supporting illustrations: walking pufferfish, green bacterium, and blue brain.

Footer: Add a narrow rounded banner with a camera icon and the conservation message {argument name="footer message" default="Admire, don’t take. Photograph, don’t touch. These amazing defenses belong in the ocean."} followed by a small blue heart.

Constraints: Use exactly the listed panel counts and numbered items. Keep all text in English, legible, and aligned to a polished educational poster grid. Avoid extra animals or unrelated labels. No watermark, no QR code, no logos.
```

**来源：** [@Pan](https://x.com/sebatheepan/status/2070174521856864651) | 2026-06-25

---

### 📊 例 2512：历史战役可视化长卷

![历史战役可视化长卷](../images/%E5%8E%86%E5%8F%B2%E6%88%98%E5%BD%B9%E5%8F%AF%E8%A7%86%E5%8C%96%E9%95%BF%E5%8D%B7.jpg)

**Prompt:**

```text
生成一张【经典战役可视化长卷】，单张完整图片，不要拼图，不要多宫格，不要分栏，横版 3:1。

战役主题：【{argument name="战役主题" default="赤壁之战"}】
标题：【{argument name="标题" default="赤壁之战"}】
副标题：【{argument name="副标题" default="一句话概括关键转折"}】
核心内容：【战场地形 / 双方阵营 / 主攻路线
```

**来源：** [@Larus Canus](https://x.com/MrLarus/status/2070401850101158066) | 2026-06-26

---

### 📊 例 2514：韩语版人机协作团队信息图

![韩语版人机协作团队信息图](../images/%E9%9F%A9%E8%AF%AD%E7%89%88%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C%E5%9B%A2%E9%98%9F%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张竖版韩语信息图海报，总结 Anthropic 关于构建高效人机协作团队的课程，页面 {argument name="page number" default="1/2"}，采用简洁的米色编辑科技风格，并带有编号的课程章节。

画布：2:3 竖版海报，米白色暖色背景，细边圆角卡片，橙色编号圆圈，黑色韩语字体，微妙的灰色分割线，小型线条艺术插图，以及类似 Anthropic 的极简品牌标识。采用类似于博客摘要信息图的密集但易读的布局。

页眉：大号粗体韩语标题：“Anthropic 的教训：构建高效的 Human-Agent Team”。下方为小号副标题：“从一个人与一个 AI 工作的时代，迈向人与 Agent 在同一工作空间协作的团队时代”。元数据行：“原文摘要 | Claude Tag | 2026.06.24”。右上角有一个小巧的圆角页面徽章“1/2”，以及一幅手将积木放入三个橙色抽屉的插图；抽屉上显示着人类、机器人和目标的简单图标。

布局：本页使用 5 个主要的编号章节，以清晰的网格堆叠。第 1 和第 2 章节位于页眉下方并排显示。第 3 章节是一个宽带，分为三个参与卡片和一个模拟聊天截图。第 4 章节是一个全宽课程卡片。第 5 章节是另一个全宽课程卡片。底部设有导航条、来源条和页脚品牌标识。

第 1 章节：编号徽章“1”，标题“有什么不同？”。展示一个包含 2 个面板的对比图：左侧面板标记为“单人模式”，显示 1 个人类图标 ↔ 1 个 AI 机器人图标，配文“1 名人类 ↔ 1 个 AI”；右侧面板标记为“多人模式”，显示多个人类剪影 + 多个机器人图标 + 一个目标图标，配文“多人 + 多个 Agent + 共同目标”。添加底部标注：“现在的 AI 协作更接近团队工作，而非个人任务”。

第 2 章节：编号徽章“2”，标题“什么是多人模式 Agent？”。包含 3 个带图标的定义行：机器人图标行“与多个人类同时工作的 AI Agent”；大脑图标行“拥有自主记忆 (memory)、技能 (skills) 和凭证 (credentials)”；类似 Slack 标志的彩色图标行“驻留在 Slack 等协作空间中支持团队目标”。底部示例胶囊：“例如：在团队频道中共同进行数据分析”。

第 3 章节：编号徽章“3”，标题“如何高效参与团队”。左侧包含 3 个圆角卡片：卡片 1（带头像和便签图标），标题“持续记忆”，描述“记住目标并调整执行”；卡片 2（带盾牌和钥匙图标），标题“与人类分离的凭证”，描述“安全的权限和可预测的护栏”；卡片 3（带数据库和放大镜图标），标题“广泛且持续的信息访问”，描述“理解并遵循组织期望的行为方式”。在这些卡片下方添加一个星形标注：“仅有技术是不够的 → 还需要团队的运营方式和共同规范”。右侧显示一个类似 Slack 的聊天截图，标题为“# data-analysis”，带有紫色侧边栏，并显示来自以下发送者的 5 条聊天消息：“민지 (分析主管)”、“Claude (Data Analyst)”、“호준 (PM)”、“Claude (Data Analyst)”以及一个小型的最终状态/消息区域。包含微小的头像和时间戳，但保持文本清晰紧凑。

第 4 章节：编号徽章“4”，标题“Lesson 1. 公开工作，并为 Agent 提供广泛的背景信息”。左侧插图：3 个人坐在笔记本电脑前，周围环绕着包含文档、聊天和代码图标的虚线共享工作空间图。中间的要点区域解释说，Agent 应该在 Slack、Jira、文档和存储库等可见空间中工作；私聊会隐藏背景信息；Agent 需要访问记录的对话和工件。添加两个侧边卡片：卡片标题“为什么重要？”（带橙色星形图标，要点包括记忆不是自动的、缺失背景会降低输出质量、共享背景可改善建议）；卡片标题“Anthropic 式运营方式”（带齿轮图标，要点包括共享频道、公开分享工作成果、将有用的私聊移至共享空间、记录易读的摘要）。底部锁定标注：“敏感对话可以通过 DM、Claude.ai 和 Claude Code 等独立空间处理”。

第 5 章节：编号徽章“5”，标题“Lesson 2. 为所有人及 Agent 明确分配角色和工具”。包含一个简短的韩语要点列表，关于分配明确的角色、工具、凭证和期望。左下方创建 2 个小表格：“Human (人类)”表格（包含 4 行人类队友及其角色）；“Agents (Agent)”表格（包含 4 行：“Claude (Data Analyst)”、“Claude (Design Critic)”、“Claude (Research Synthesizer)”、“Claude (QA Tester)”）。右侧是一个绿色边框的清单卡片，标题为“高效团队的样子”，包含 5 个清单项：“达成共识的 Task Set”、“人类和 Agent 在同一线程中协作”、“记录各角色的范围和责任”、“个人不再由 AI 代替，团队共享相同的背景和数据”，以及最后一项关于共享工具和权限的简洁说明。

底部导航：添加橙色箭头图标和文字：“下一页：Lesson 3 复杂性设置 · Lesson 4 建立信任 · 清单 · 结论”，右侧带有小的“1/2”徽章。来源条包含两个带图标的项目：“来源 URL: https://claude.com/blog/building-effective-human-agent-teams”和“原文标题: Building effective human-agent teams”。右下角大字标“ANTHROPIC”。左下角版权“© 2026 Gonnecter”。右下角添加一个微小的彩色抽象标志。

视觉风格：现代韩语商业信息图，清晰的矢量线条艺术，暖奶油色背景，橙色点缀，聊天模拟图使用柔和的紫色，成功清单使用绿色，精确对齐，高信息密度，易读的韩语文本，无照片写实感，除微妙的卡片深度外无阴影。

约束：保持 5 个编号主章节，2 个对比面板，3 个定义行，3 个参与卡片，5 条聊天消息，2 个角色表格，以及 5 个清单项。不要添加额外的页面、额外的课程编号、水印或不相关的图标。

[English]
Goal: Create a tall Korean infographic poster summarizing Anthropic’s lesson on building effective human-agent teams, page {argument name="page number" default="1/2"}, with a clean beige editorial tech style and numbered lesson sections.

Canvas: Vertical 2:3 poster, off-white warm background, thin rounded cards, orange numbered circles, black Korean typography, subtle gray dividers, small line-art illustrations, and Anthropic-like minimal branding. Use a dense but readable layout similar to a blog-summary infographic.

Header: Large bold title in Korean: “Anthropic의 교훈: 효과적인 Human-Agent Team 만들기”. Under it, small subtitle: “한 사람이 한 AI와 일하던 시대에서, 사람과 에이전트가 같은 워크스페이스에서 함께 일하는 팀의 시대로”. Metadata row: “원문 요약 | Claude Tag | 2026.06.24”. Top-right corner has a small rounded page badge “1/2” and an illustration of a hand placing blocks on three orange drawers; the drawers show simple icons for humans, a robot, and a target.

Layout: Use exactly 5 main numbered sections on this page, stacked in a clear grid. Section 1 and 2 sit side by side below the header. Section 3 is a wide band split between three participation cards and a mock chat screenshot. Section 4 is a full-width lesson card. Section 5 is another full-width lesson card. Bottom has a navigation strip, source strip, and footer branding.

Section 1: Number badge “1” and title “무엇이 달라졌나?”. Show a comparison diagram with exactly 2 panels: left panel labeled “싱글플레이어”, showing one human icon ↔ one AI robot icon with caption “1명 인간 ↔ 1개 AI”; right panel labeled “멀티플레이어”, showing multiple human silhouettes + multiple robot icons + a target icon with caption “여러 사람 + 여러 에이전트 + 공동 목표”. Add a bottom callout: “이제 AI 협업은 개인 작업이 아니라 팀 작업에 가깝다”.

Section 2: Number badge “2” and title “멀티플레이어 에이전트란?”. Include exactly 3 definition rows with icons: robot icon row “여러 인간과 동시에 일하는 AI 에이전트”; brain icon row “자체 기억(memory), 스킬(skills), 자격증명(credentials)을 보유”; Slack logo-inspired colored icon row “Slack 같은 협업 공간에 상주하며 팀 목표를 지원”. Bottom example pill: “예: 팀 채널에서 데이터 분석을 함께 진행”.

Section 3: Number badge “3” and title “팀에 생산적으로 참여하려면”. Left side contains exactly 3 rounded cards: card 1 with head and sticky-note icon, title “지속적 메모리”, description “목표를 기억하고 실행을 조정”; card 2 with shield and key icon, title “인간과 분리된 자격증명”, description “안전한 권한과 예측 가능한 가드레일”; card 3 with database and magnifying-glass icon, title “넓고 지속적인 정보 접근”, description “조직이 원하는 방식을 이해하고 행동”. Below those cards add a star callout: “기술만으로는 부족하다 → 팀의 운영 방식과 공통 규범도 필요”. Right side shows a Slack-like chat screenshot titled “# data-analysis” with a purple sidebar and exactly 5 visible chat messages from these senders: “민지 (분석 리드)”, “Claude (Data Analyst)”, “호준 (PM)”, “Claude (Data Analyst)”, and a small final status/message area. Include tiny avatars and timestamps, but keep text mostly legible and compact.

Section 4: Number badge “4” and title “Lesson 1. 공개적으로 일하고, 에이전트에 넓은 맥락을 제공하라”. Left illustration: exactly 3 people sitting with laptops around a dotted shared workspace diagram containing document, chat, and code icons. Middle bullet area explains that agents should work in visible spaces like Slack, Jira, documents, and repositories; private DMs can hide context; and agents need access to recorded conversations and artifacts. Add two side cards: card titled “왜 중요한가?” with orange star icon and bullet points about memory not being automatic, missing context lowering output quality, and shared context improving recommendations; card titled “Anthropic 식 운영 방식” with gear icon and bullets about shared channels, openly sharing work products, moving useful DMs into shared space, and documenting easy-to-read summaries. Bottom lock callout: “민감한 대화는 DM, Claude.ai, Claude Code와처럼 별도 공간에서 다룰 수 있다”.

Section 5: Number badge “5” and title “Lesson 2. 모든 인간과 에이전트에 역할과 도구를 명확히 부여하라”. Include a short Korean bullet list about assigning clear roles, tools, credentials, and expectations. Below left, create exactly 2 small tables: “Human (사람)” table with 4 rows of human teammates and roles; “Agents (에이전트)” table with 4 rows: “Claude (Data Analyst)”, “Claude (Design Critic)”, “Claude (Research Synthesizer)”, “Claude (QA Tester)”. On the right, a green bordered checklist card titled “잘 작동하는 팀의 모습” with exactly 5 checklist items: “합의된 Task Set”, “사람과 에이전트가 같은 스레드에서 함께 작업”, “각 역할의 범위와 책임을 문서화”, “개인은 AI가 나타나는 대신, 팀 전체가 같은 맥락과 같은 숫자를 공유”, and one concise final item about shared tools and permissions.

Bottom navigation: Add an orange arrow icon and text: “다음 페이지: Lesson 3 복잡성 설정 · Lesson 4 신뢰 구축 · 체크리스트 · 결론”, with a small “1/2” badge on the right. Source strip contains two icon-labeled items: “출처 URL: https://claude.com/blog/building-effective-human-agent-teams” and “원문 제목: Building effective human-agent teams”. Bottom-right large wordmark “ANTHROPIC”. Bottom-left copyright “© 2026 Gonnecter”. Add a tiny colorful abstract logo at the bottom-right corner.

Visual style: Modern Korean business infographic, crisp vector line art, warm cream background, orange accents, muted purple for chat mockup, green for success checklist, precise alignment, high information density, readable Korean text, no photorealism, no shadows beyond very subtle card depth.

Constraints: Keep exactly 5 numbered main sections, exactly 2 comparison panels, exactly 3 definition rows, exactly 3 participation cards, exactly 5 chat messages, exactly 2 role tables, and exactly 5 checklist items. Do not add extra pages, extra lesson numbers, watermarks, or unrelated icons.
```

**来源：** [@고영혁 (Dylan Ko)](https://x.com/Gonnector/status/2070393328584343918) | 2026-06-26

---

### 📊 例 2562：皮克斯风格信息图故事板海报

![皮克斯风格信息图故事板海报](../images/%E7%9A%AE%E5%85%8B%E6%96%AF%E9%A3%8E%E6%A0%BC%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%95%85%E4%BA%8B%E6%9D%BF%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
创建一个清晰、简洁的信息图故事板海报，主题为 {argument name="subject" default="THE MILKSHAKE MAKER"}。宽屏 16:9 布局，白色背景，黑色边框，粗体黑色排版，高级皮克斯 3D 风格渲染，明亮生动的色彩 — {argument name="color scheme" default="奶油香草白，鲜艳红"}

[English]
Create a crisp, clean infographic storyboard poster for {argument name="subject" default="THE MILKSHAKE MAKER"}. Wide 16:9 layout, white background, black borders, bold black typography, premium Pixar 3D stylized rendering, bright vivid colors — {argument name="color scheme" default="creamy vanilla white, vivid red"}
```

**来源：** [@TechieSA](https://x.com/TechieBySA/status/2070895951028298148) | 2026-06-27

---

### 📊 例 2798：GPT Image 2 分层工作流信息图

![GPT Image 2 分层工作流信息图](../images/GPT%20Image%202%20%E5%88%86%E5%B1%82%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张精美的 16:9 中文科技信息图 Slides，解释使用 {argument name="AI image model name" default="GPT Image 2"} 制作复杂设计图的正确工作流：分层生成 + 合成，并以科幻运动鞋广告为例。

画布：宽屏 16:9 深色界面风格演示文稿，约 1152×768，黑至深蓝背景，带有纤细的发光面板边框、圆角卡片、精致的网格和玻璃拟态效果。强调色为橙色、青蓝色、薄荷绿、紫色和白色。整体外观：高级 AI 设计教程、SaaS 仪表盘风格，高对比度，排版清晰。

页眉：左上角为白色大标题“GPT Image 2”。下方是双色中文主标题：橙色文字“复杂设计图的正确打开方式：”后接白色文字“分层生成 + 合成”。下方是较小的灰色副标题：“把复杂设计拆成三层分别生成，最后合成，效果更可控、细节更精准。”

主要布局：将幻灯片分为三列。左列对比错误与推荐方法。中列展示 3 张垂直堆叠的提示词分层示例卡片，中间用加号连接。右列展示最终合成的运动鞋海报。底行左侧包含 2 张对比结果卡片，右侧包含 3 张建议卡片。

左列细节：创建 2 张大圆角卡片。
1. 上方卡片，红色警告风格，带红色 X 图标。标题：“一次性生成（常见翻车原因）”。正文：“把所有元素塞进一个 Prompt”。简短说明：“结果：构图 OK，但细节容易混乱，元素可能缺失或变形。” 包含一张预览图：一只科幻跑鞋悬浮在科幻景观之上，配有大号中文“未来已来”和微小的英文“FUTURE IS NOW”。
2. 下方卡片，绿色成功风格，带绿色勾选图标。标题：“分层生成（推荐做法）”。正文：“每层只聚焦一件事”。简短说明：“结果：每层精准可控，合成后整体效果更专业。” 在此卡片内，展示 3 行带有图标和标签的迷你分层行：蓝色图像图标行“背景层：场景 / 光线 / 氛围”，备注“只描述环境、光照、色调、氛围”；紫色立方体图标行“主体层：角色 / 产品 / 动作”，备注“只描述主体、材质、细节、姿态”；橙色 T 图标行“文字装饰层：文案 / 图形 / 装饰”，备注“只描述文字、排版、装饰视觉元素”。

中列细节：展示 3 张堆叠的提示词示例卡片，由青色加号连接，并有一条青色箭头从堆叠处指向右侧的最终海报。
1. 蓝色卡片，编号“1”，标题“背景层 Prompt 示例”。文字：“未来感科技场景，冷色调，日出光线，地面有反光，远处有星球”。图像：宽阔的空旷科幻景观，带反光水面、山脉、日出、巨大的发光环和行星，无鞋子。
2. 紫色卡片，编号“2”，标题“主体层 Prompt 示例”。文字：“科技感运动鞋，悬浮，侧视角，高细节，产品摄影”。图像：一只孤立的灰色科幻运动鞋，背景为透明/棋盘格或浅色，无风景，无文字。
3. 橙色卡片，编号“3”，标题“文字装饰层 Prompt 示例”。文字：“科技风标题排版，中文主标题，英文副标题，简洁装饰线条”。图像：排版条，包含中文标题“未来已来”、英文副标题“FUTURE IS NOW”、小字“轻盈 / 科技 / 突破”以及精细的橙色装饰线条。

右列最终海报：大型垂直圆角面板，带有绿色页眉条。页眉标题：“合成后最终效果”。页眉副标题：“三层合成，整体精准，细节丰富，视觉统一”。下方创建电影级成品广告：一只精致的灰色科幻跑鞋悬浮在科幻外星景观的浅水面上，背景有山石、晨光、巨大的发光环形传送门，右上角有一颗巨大的月球/行星。海报底部包含加粗中文标题 {argument name="Chinese headline text" default="未来已来"}，英文副标题 {argument name="English subtitle text" default="FUTURE IS NOW"}，以及小字间距的特征词“轻盈 / 科技 / 突破”。

底行：总共创建 5 张小卡片。
左侧区域标题“实测对比”，副标题“同样的需求，不同的生成方式，结果差异明显。” 包含 2 张卡片：红色 X 卡片“一次出全部”，备注“构图 OK，但细节乱，文字可能出错，元素可能变形”及微缩预览；绿色勾选卡片“分三层合成”，备注“每层精准可控，合成后整体效果更专业”及微缩预览。
右侧区域标题“使用建议”，包含 3 张带图标的建议卡片：蓝色闪电图标“先用 Instant 模式快速验证思路（成本低、速度快）”；紫色大脑图标“确认结构后切 Thinking 模式生成高质量最终图”；绿色堆叠层图标“分层结构 + 合成 = {argument name="AI image model name repeated" default="GPT Image 2"} 的真正用法”。

视觉风格：现代中文信息图，深色玻璃面板，发光霓虹轮廓，逼真的 3D 产品渲染预览，清晰的白色中文排版，橙色强调核心概念，绿色表示推荐工作流，红色表示错误，青色箭头和连接线。保持所有文字清晰且对齐。保持科幻运动鞋主题一致；鞋子应为银灰色，符合空气动力学，高细节，带有雕刻鞋底孔和可见鞋带。

约束：使用 3 张分层示例卡片，3 行迷你分层行，2 张方法对比卡片，3 张使用建议卡片，1 张大型最终海报，以及 1 条从分层堆叠指向最终海报的青色箭头。不要添加额外的 Logo、水印、二维码、人物或不相关的物体。

[English]
Goal: Create a polished 16:9 Chinese tech infographic slide explaining the correct workflow for making complex design images with {argument name="AI image model name" default="GPT Image 2"}: layered generation plus compositing, using a futuristic sneaker advertisement as the example.

Canvas: Wide 16:9 dark interface-style presentation, approximately 1152×768, black-to-deep-navy background, thin glowing panel borders, rounded cards, subtle grid and glassmorphism. Accent colors are orange, cyan-blue, mint green, purple, and white. Overall look: premium AI design tutorial, SaaS dashboard, high contrast, crisp typography.

Header: At top left, large white title “GPT Image 2”. Under it, a two-color Chinese headline: orange text “复杂设计图的正确打开方式:” followed by white text “分层生成 + 合成”. Below, a smaller gray subtitle: “把复杂设计拆成三层分别生成，最后合成，效果更可控、细节更精准。”

Main layout: Split the slide into three columns. Left column compares wrong vs recommended method. Middle column shows exactly 3 separate prompt-layer example cards stacked vertically with plus signs between them. Right column shows the final composited sneaker poster. Bottom row contains exactly 2 comparison result cards on the left and exactly 3 recommendation cards on the right.

Left column details: Create 2 large rounded cards.
1. Top card, red warning style with red X icon. Title: “一次性生成（常见翻车原因）”. Body: “把所有元素塞进一个 Prompt”. Smaller explanation: “结果：构图 OK，但细节容易混乱，元素可能缺失或变形。” Include a small preview image of a futuristic running shoe floating over a sci-fi landscape with large Chinese text “未来已来” and tiny English “FUTURE IS NOW”.
2. Bottom card, green success style with green check icon. Title: “分层生成（推荐做法）”. Body: “每层只聚焦一件事”. Smaller explanation: “结果：每层精准可控，合成后整体效果更专业。” Inside this card, show exactly 3 mini layer rows with icons and labels: blue image icon row “背景层：场景 / 光线 / 氛围” with note “只描述环境、光照、色调、氛围”; purple cube icon row “主体层：角色 / 产品 / 动作” with note “只描述主体、材质、细节、姿态”; orange T icon row “文字装饰层：文案 / 图形 / 装饰” with note “只描述文字、排版、装饰视觉元素”.

Middle column details: Show exactly 3 stacked prompt example cards connected by cyan plus signs, and a cyan arrow pointing from the stack to the final poster on the right.
1. Blue card numbered “1”, title “背景层 Prompt 示例”. Text: “未来感科技场景，冷色调，日出光线，地面有反光，远处有星球”. Image: a wide empty sci-fi landscape with reflective water, mountains, sunrise, a large glowing ring, and a planet, no shoe.
2. Purple card numbered “2”, title “主体层 Prompt 示例”. Text: “科技感运动鞋，悬浮，侧视角，高细节，产品摄影”. Image: a single gray futuristic sneaker isolated on a transparent/checkered or pale background, no scenery, no text.
3. Orange card numbered “3”, title “文字装饰层 Prompt 示例”. Text: “科技风标题排版，中文主标题，英文副标题，简洁装饰线条”. Image: typography strip with Chinese title “未来已来”, English subtitle “FUTURE IS NOW”, small text “轻盈 / 科技 / 突破”, and fine orange decorative lines.

Right column final poster: Large vertical rounded panel with a green header strip. Header title: “合成后最终效果”. Header subtitle: “三层合成，整体精准，细节丰富，视觉统一”. Below it, create a cinematic finished advertisement: a detailed gray futuristic running shoe floating above reflective shallow water in a sci-fi alien landscape, with mountains and rocks, dawn light, a huge glowing circular portal/ring behind the shoe, and a large moon/planet in the upper right. At the bottom of the poster, include bold Chinese headline {argument name="Chinese headline text" default="未来已来"}, English subtitle {argument name="English subtitle text" default="FUTURE IS NOW"}, and small spaced feature words “轻盈 / 科技 / 突破”.

Bottom row: Create exactly 5 small cards total.
Left section titled “实测对比” with caption “同样的需求，不同的生成方式，结果差异明显。” It contains 2 cards: red X card “一次出全部” with notes “构图 OK，但细节乱，文字可能出错，元素可能变形” and a tiny preview; green check card “分三层合成” with notes “每层精准可控，合成后整体效果更专业” and a tiny preview.
Right section titled “使用建议” contains exactly 3 recommendation cards with icons: blue lightning icon “先用 Instant 模式快速验证思路（成本低、速度快）”; purple brain icon “确认结构后切 Thinking 模式生成高质量最终图”; green stacked-layers icon “分层结构 + 合成 = {argument name="AI image model name repeated" default="GPT Image 2"} 的真正用法”.

Visual style: Modern Chinese infographic, dark glass panels, glowing neon outlines, realistic 3D product render previews, crisp white Chinese typography, orange emphasis for the main concept, green for recommended workflow, red for mistakes, cyan arrows and connectors. Keep all text legible and aligned. Use the futuristic sneaker theme consistently; the shoe should be silver-gray, aerodynamic, high-detail, with sculpted sole holes and visible laces.

Constraints: Use exactly 3 layer example cards, exactly 3 mini layer rows, exactly 2 method comparison cards, exactly 3 usage recommendation cards, exactly 1 large final poster, and exactly 1 cyan arrow from the layer stack to the final poster. Do not add extra logos, watermarks, QR codes, people, or unrelated objects.
```

**来源：** [@小海豚笔记 (AI & 副业探索)](https://x.com/gaoren7716/status/2071428446668959912) | 2026-06-29

---

### 📊 例 2895：七夕动漫 7 月日历

![七夕动漫 7 月日历](../images/%E4%B8%83%E5%A4%95%E5%8A%A8%E6%BC%AB%207%20%E6%9C%88%E6%97%A5%E5%8E%86.jpg)

**Prompt:**

```text
[中文]
目标：创作一张竖版动漫风格的 7 月问候日历插画，主角为 {argument name="character name" default="Meru"}，一位原创少女角色，在夜晚的七夕竹枝下祈祷。

画布：高比例智能手机壁纸格式，约为 9:16，细节丰富，电影级光影，无边框或水印。

主体：一位美丽的动漫金发少女，留着长波浪卷发，拥有紫罗兰色的眼睛，以四分之三侧面朝向右上方，双手合十，姿态温柔地祈祷。她穿着华丽的 {argument name="dress color" default="玫瑰粉与黑色"} 哥特洛丽塔风格浴衣，配有蕾丝花边、露肩荷叶袖、层叠丝带、巨大的腰间蝴蝶结、黑色蕾丝装饰和宝石首饰。她的头发部分盘起，饰有巨大的黑色蕾丝蝴蝶结、粉色玫瑰发饰、小羽毛和装饰性丝带。表情柔和、充满希望且略带憧憬。

背景：梦幻般的七夕夜景，背景是生动的银河星空。天空呈现深靛蓝色和紫色，繁星点点，发光的星云缭绕，明亮的星团从左上角向中心斜向延伸。下方展示柔和的虚化灯光，远处隐约可见水边祭典的氛围。

竹枝与装饰：在右上角和左上角添加竹枝作为边框，长长的绿叶上带有蓝色和粉色的轮廓光。包含 6 条清晰可见的悬挂式许愿签：右上角枝条附近 2 条，右侧中部 1 条浅色签，右下角 1 条局部浅色签，左侧 1 条粉色签，顶部边缘附近 1 条部分可见的紫色签。许愿签上应包含细小的竖排手写日式文字，具有装饰性但无需完全清晰可辨。

日历叠加层：在左下角放置一个精致的半透明日历设计，对应 {argument name="calendar month" default="2026 年 7 月"}。包含一个优雅的小标题“2026”，一个大号的“7”和“July”。下方包含 7 列工作日行，标签严格标注为“SUN MON TUE WED THU FRI SAT”，随后是 2026 年 7 月的 31 个日期数字：第一行从周三开始，依次为 1、2、3、4；随后是 5–11、12–18、19–25 和 26–31。使用纤细的白色衬线字体，周日略带粉色，周六略带蓝色。在日历上方和下方添加细小的装饰性花纹。

光影与风格：超精细的日本动漫插画，光泽感绘画渲染，明亮的轮廓光，柔和的粉色和蓝色高光，柔和的景深，闪烁的粒子，浪漫的奇幻氛围，发丝、蕾丝、丝带、褶皱和星空的细节丰富。保持构图优雅且呈竖向，角色占据中心和下半部分，银河占据左上方，竹枝位于右侧，日历位于左下角且不突兀。

限制：无额外角色，前景中无现代城市物体，无 Logo，无水印，除日历外无大号文字。保持梦幻般的七夕 7 月问候氛围，并包含可选的问候主题 {argument name="seasonal greeting" default="下半年充满希望的开始"}。

[English]
Goal: Create a vertical anime-style July greeting calendar illustration featuring {argument name="character name" default="Meru"}, an original young woman character, praying beneath Tanabata bamboo at night.

Canvas: Tall smartphone wallpaper format, approximately 9:16, richly detailed, cinematic lighting, no border or watermark.

Main subject: A beautiful blonde anime girl with long wavy hair and violet eyes stands in three-quarter profile facing upward to the right, hands clasped in a gentle prayer pose. She wears an ornate {argument name="dress color" default="rose pink and black"} gothic-lolita yukata-inspired dress with lace trim, off-shoulder ruffled sleeves, layered ribbons, a large waist bow, black lace accents, and gemstone jewelry. Her hair is partly tied back with a large black lace bow, pink rose hair ornament, small feathers, and decorative ribbons. Expression is soft, hopeful, and slightly wistful.

Background: A magical Tanabata night scene under a vivid Milky Way sky. The sky is deep indigo and violet with countless stars, glowing nebula clouds, and a bright star cluster stretching diagonally from upper left toward center. Below, show soft bokeh lights and a reflective waterside festival atmosphere in the distance.

Bamboo and decorations: Add bamboo branches framing the upper right and left edges, with long green leaves catching blue and pink rim light. Include exactly 6 visible hanging paper wish strips: 2 near the upper right branch, 1 mid-right pale strip, 1 lower-right partial pale strip, 1 left-side pink strip, and 1 partially visible purple strip near the top edge. The wish strips should contain small vertical handwritten Japanese-style writing, decorative but not fully legible.

Calendar overlay: At the lower left, place a refined translucent calendar design for {argument name="calendar month" default="July 2026"}. Show a small elegant heading with “2026”, a large “7”, and “July”. Below it, include a 7-column weekday row labeled exactly “SUN MON TUE WED THU FRI SAT”, followed by exactly 31 date numbers laid out for July 2026: first row starts under Wednesday with 1, 2, 3, 4; then rows 5–11, 12–18, 19–25, and 26–31. Use thin white serif typography, with Sundays subtly pink and Saturdays subtly blue. Add tiny ornamental flourishes above and below the calendar.

Lighting and style: Ultra-detailed Japanese anime illustration, glossy painterly rendering, luminous rim lighting, soft pink and blue highlights, gentle depth of field, sparkling particles, romantic fantasy mood, high detail in hair strands, lace, ribbons, fabric folds, and starry sky. Keep the composition elegant and vertical, with the character occupying the center and lower half, the galaxy dominant in the upper left, bamboo on the right, and the calendar unobtrusive at bottom left.

Constraints: No extra characters, no modern city objects in the foreground, no logo, no watermark, no large text besides the calendar. Maintain a dreamy July Tanabata greeting atmosphere with the optional greeting theme {argument name="seasonal greeting" default="a hopeful start to the second half of the year"}.
```

**来源：** [@レティシア・ノエル](https://x.com/N7S6P1/status/2072325056634740820) | 2026-07-01

---

### 📊 例 2909：摩洛哥足球实力儿童信息图

![摩洛哥足球实力儿童信息图](../images/%E6%91%A9%E6%B4%9B%E5%93%A5%E8%B6%B3%E7%90%83%E5%AE%9E%E5%8A%9B%E5%84%BF%E7%AB%A5%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：为儿童创作一张活泼的日本教育信息图，解释 {argument name="headline topic" default="为什么摩洛哥足球这么强？"}。使其看起来像是一份家长和孩子可以一起阅读的彩色学校讲义。

画布：竖版肖像信息图，白色背景，粗圆角红/绿/蓝边框，俏皮的漫画风格插图，高可读性，明亮的基色，简洁的矢量风格绘图，2D 卡通风格，非写实。

顶部标题：顶部横跨醒目的粗体日文标题：「どうしてモロッコはサッカーで強いの？」（为什么摩洛哥足球这么强？），其中「モロッコ」（摩洛哥）和「サッカーで強い」（足球强）用红绿色强调。下方是一个蓝色丝带副标题：「ヨーロッパとのつながりがポイント！」（与欧洲的联系是关键！）。左上角放置一面飘扬的摩洛哥国旗，右上角放置一名穿着摩洛哥红色足球服、怀抱足球的微笑男孩。

布局：使用 5 个带编号的主板块和 4 张带字母的小型解释卡片。页面应内容丰富但组织有序，像儿童百科全书信息图一样。

板块 1，左上角，红色编号徽章「①」：标题「どうしてモロッコ人はヨーロッパにいるの？」（为什么摩洛哥人会在欧洲？）。包含三个红色要点，解释摩洛哥与法国和西班牙的历史渊源，许多人在就业不足时前往欧洲学习或工作，家庭在那里定居，因此子女和孙辈在欧洲长大。展示一张简单的西欧和北非地图，标注「フランス」（法国）、「スペイン」（西班牙）、「オランダ」（荷兰）、「ジブラルタル海峡」（直布罗陀海峡）和「モロッコ」（摩洛哥），并用红色箭头标出从摩洛哥指向西班牙、法国和荷兰的方向。添加小标题：「モロッコはアフリカの北西にある国」（摩洛哥是位于非洲西北部的国家）。

板块 2，右上角，绿色编号徽章「②」：标题「その子どもはモロッコ人になれるの？」（他们的孩子能成为摩洛哥人吗？）。包含两个绿色要点，解释如果父亲或母亲是摩洛哥人，孩子也拥有摩洛哥国籍，即使出生在西班牙也可能代表摩洛哥参赛。展示一个由 3 人组成的幸福家庭：父亲、母亲和幼子。添加 3 个身份物品：一本标注「ROYAUME DU MAROC PASSPORT」的摩洛哥护照、一面摩洛哥国旗和一面西班牙国旗。包含一个虚线框，标注「国籍＝どこの国の人か、というきまり」（国籍＝关于属于哪个国家的规定）。

中心板块 3，大型，蓝色编号徽章「③」：标题「だから強い！」（所以才强大！）。展示 3 名穿着红色球衣、绿色短裤的摩洛哥足球运动员在超大足球前奋力奔跑。他们的球衣号码分别是 2、7 和 17。在他们周围添加黄色闪光标记。

板块 3 周围的字母卡片：创建 4 张蓝色边框的卡片，分别标注 A、B、C 和 D。卡片 A 标题「ヨーロッパで育つ」（在欧洲成长），展示 2 名儿童在带有锥筒和教练氛围的欧洲足球场上训练；文字说明强大的俱乐部和训练使他们足球水平很高。卡片 B 标题「モロッコ代表をえらべる」（可以选择摩洛哥国家队），展示一件印有 10 号的红色摩洛哥球衣，以及一颗包含绿色摩洛哥五角星的红心；文字说明如果他们的根在摩洛哥，就有机会成为摩洛哥代表。卡片 C 标题「チームがまとまっている」（团队凝聚力强），展示 5 名穿着红色球衣的球员从背后围成一圈，可见号码包括 6 和 10；文字说明每个人在攻防中都通力合作。卡片 D 标题「国も育成に力を入れている」（国家也致力于青训），展示一所足球学校建筑和训练场；文字说明国家正在建设足球学校和训练基地。

板块 4，左下角，红色编号徽章「④」：标题「どうしてスペイン代表じゃなくて、モロッコ代表？」（为什么是摩洛哥代表而不是西班牙代表？）。制作一张对比两种路径的插图：左侧标注「スペイン代表」（西班牙代表）配以忧虑的男孩和暗示竞争激烈的灰色剪影；右侧标注「モロッコ代表」（摩洛哥代表）配以穿着摩洛哥球衣、向上指的快乐男孩。包含要点文字，解释进入西班牙国家队很困难，代表摩洛哥可能提供更好的参加大型比赛的机会，且球员可能希望为自己家族根源的国家效力。

板块 5，右下角，绿色编号徽章「⑤」：标题「まとめ」（总结）。使用三行图标：3 个小孩子、一次握手和一个奖杯。总结文字应说明摩洛哥有许多在欧洲长大的球员，这些球员团结成摩洛哥国家队，因此即使在世界杯上也表现强劲。用红色强调最后一行：「だからワールドカップでも強い！」（所以即使在世界杯上也依然强大！）。

底部公式条：一个红色圆角标签「ひとことでいうと」（一言以蔽之），后跟粗体彩色等式：「ヨーロッパで育った力 ＋ モロッコ代表としての団結 ＝ 強さ！」（在欧洲成长的力量 ＋ 作为摩洛哥代表的团结 ＝ 强大！）。

视觉风格：明亮的日本儿童信息图，粗轮廓，可爱的表情，简单的地理地图，圆角面板，醒目的手写风格日文字体，红/绿/蓝配色方案与摩洛哥和足球相呼应。保持所有文字清晰易读，避免添加无关事实或额外板块。

[English]
Goal: Create a cheerful Japanese educational infographic for children explaining {argument name="headline topic" default="どうしてモロッコはサッカーで強いの？"}. Make it look like a colorful school handout that a parent and child could read together.

Canvas: Vertical portrait infographic, white background, thick rounded red/green/blue panel borders, playful manga-style illustrations, high readability, bright primary colors, clean vector-like drawing, 2D cartoon style, no photorealism.

Top header: Large bold Japanese headline across the top: 「どうしてモロッコはサッカーで強いの？」 with 「モロッコ」 and 「サッカーで強い」 emphasized in red and green. Under it, a blue ribbon subtitle: 「ヨーロッパとのつながりがポイント！」. Place a waving Morocco flag on the top left and a smiling boy in a red Morocco soccer jersey holding a soccer ball on the top right.

Layout: Use exactly 5 numbered main sections plus 4 smaller lettered explanation cards. The page should be dense but organized, like a kids’ encyclopedia infographic.

Section 1, upper left, red numbered badge 「①」: Title 「どうしてモロッコ人はヨーロッパにいるの？」. Include three red bullet points explaining that Morocco has historic links with France and Spain, many people went to Europe for study or work when there were not enough jobs, and families settled there so children and grandchildren grew up in Europe. Show a simple map of western Europe and north Africa with labels for 「フランス」, 「スペイン」, 「オランダ」, 「ジブラルタル海峡」, and 「モロッコ」, with red arrows from Morocco toward Spain, France, and the Netherlands. Add a small caption: 「モロッコはアフリカの北西にある国」.

Section 2, upper right, green numbered badge 「②」: Title 「その子どもはモロッコ人になれるの？」. Include two green bullet points explaining that if a father or mother is Moroccan, the child also has Moroccan nationality, and even if born in Spain they may represent Morocco. Show a smiling family of exactly 3 people: father, mother, and young boy. Add exactly 3 identity objects: a Moroccan passport labeled 「ROYAUME DU MAROC PASSPORT」, a Morocco flag, and a Spain flag. Include a dotted box labeled 「国籍＝どこの国の人か、というきまり」.

Center section 3, large, blue numbered badge 「③」: Title 「だから強い！」. Show exactly 3 energetic Moroccan soccer players in red jerseys and green shorts running forward in front of an oversized soccer ball. Their jersey numbers are exactly 2, 7, and 17. Add small yellow sparkle marks around them.

Lettered cards around section 3: Create exactly 4 blue-framed cards labeled A, B, C, and D. Card A title 「ヨーロッパで育つ」, showing exactly 2 children training on a European soccer field with cones and a coach-like atmosphere; text says strong clubs and training make them very good at soccer. Card B title 「モロッコ代表をえらべる」, showing a red Morocco jersey with number 10 and a red heart containing the green Moroccan star; text says if their roots are Moroccan, there is a path to become a Morocco representative. Card C title 「チームがまとまっている」, showing exactly 5 players in red jerseys huddling from behind, with visible numbers including 6 and 10; text says everyone cooperates in defending and attacking. Card D title 「国も育成に力を入れている」, showing a soccer school building and practice field; text says the country builds soccer schools and training grounds.

Section 4, lower left, red numbered badge 「④」: Title 「どうしてスペイン代表じゃなくて、モロッコ代表？」. Make a split illustration comparing two routes: left label 「スペイン代表」 with a worried boy and gray silhouettes suggesting competition is hard; right label 「モロッコ代表」 with a happy boy pointing upward in a Morocco jersey. Include bullet text explaining that entering Spain’s national team is difficult, representing Morocco may offer a better chance to play in big tournaments, and the player may want to play for the country of their family roots.

Section 5, lower right, green numbered badge 「⑤」: Title 「まとめ」. Use three rows with icons: exactly 3 small children, a handshake, and a trophy. Summary text should say Morocco has many players who grew up in Europe, those players unite as the Morocco national team, and therefore they are strong even at the World Cup. Emphasize the final line in red: 「だからワールドカップでも強い！」.

Bottom formula strip: A red rounded label 「ひとことでいうと」 followed by the equation in bold colors: 「ヨーロッパで育った力 ＋ モロッコ代表としての団結 ＝ 強さ！」.

Visual style: Bright Japanese children’s infographic, thick outlines, cute expressive faces, simple geography map, rounded panels, bold handwritten-style Japanese fonts, red/green/blue color coding matching Morocco and soccer. Keep all text legible and avoid adding unrelated facts or extra sections.
```

**来源：** [@ML_Bear](https://x.com/MLBear2/status/2072298411978903768) | 2026-07-01

---

### 📊 例 2926：韩式涂鸦编辑插画

![韩式涂鸦编辑插画](../images/%E9%9F%A9%E5%BC%8F%E6%B6%82%E9%B8%A6%E7%BC%96%E8%BE%91%E6%8F%92%E7%94%BB.jpg)

**Prompt:**

```text
[中文]
创作一张简单可爱的韩式涂鸦编辑插画，主题为 {argument name="topic" default="一个温馨的日常生活瞬间"}。风格：手绘涂鸦卡通，极简编辑信息图插画，干净的黑色墨水轮廓，略带不完美的素描线条，扁平化 2D 构图，极简线条艺术，大面积留白，仅使用柔和温暖的淡彩作为点缀。场景：围绕 [TOPIC] 设计一个温馨的日常生活瞬间，主角为一位年轻韩国女性。使用简单的背景，仅包含与主题相关的必要物品和道具。人物：可爱简洁的比例，极简的面部特征，轻松的小微笑，自然的姿态，简单的休闲装，克制的涂鸦人物风格。构图：垂直 3:4 比例，平视视角，主体置于一侧或下方区域，另一侧留出大面积空白，布局稀疏通透。物品：极简涂鸦风格道具，如书籍、咖啡杯、植物、雨伞、标志、云朵、爱心、便签、窗户等。排版：在空白处添加少量英文手写文字。氛围：平静、温馨、温暖、宁静、可爱。避免：水彩画、动漫风格、写实光影、电影级渲染、复杂的透视、高细节、密集的构图、奢华海报感、绘画质感、过度渲染的人物。

[English]
Create a simple and cute Korean doodled editorial illustration based on {argument name="topic" default="a cozy everyday moment"}. Style: hand-drawn doodle cartoon, minimal editorial infographic illustration, clean black ink outlines, slightly imperfect sketchy lines, flat 2D composition, minimal line art, large clean white negative space, soft warm pastel accent colors only. Scene: design a cozy everyday moment around [TOPIC] featuring one young Korean woman. Use a simple background with only essential objects and props related to the topic. Character: cute simplified proportions, minimal facial features, small relaxed smile, natural pose, simple casual outfit, restrained doodle character style. Composition: vertical 3:4 ratio, eye-level view, main subject placed on one side or lower area, large empty space on the opposite side, sparse and airy layout. Objects: minimal doodle-style props such as books, coffee cups, plants, umbrellas, signs, clouds, hearts, notes, windows, etc. Typography: add small English handwritten text in the empty space. Mood: calm, cozy, warm, quiet, cute. Avoid: watercolor painting, anime style, realistic lighting, cinematic rendering, complex perspective, high detail, dense composition, luxury poster mood, painterly textures, over-rendered characters.
```

**来源：** [@Sairah](https://x.com/Sairah_0/status/2072237844794585184) | 2026-07-01

---

### 📊 例 3104：Excel VBA 社区推广横幅

![Excel VBA 社区推广横幅](../images/Excel%20VBA%20%E7%A4%BE%E5%8C%BA%E6%8E%A8%E5%B9%BF%E6%A8%AA%E5%B9%85.jpg)

**Prompt:**

```text
[中文]
目标：为 Excel 和 VBA 在线社区创建一个方形推广信息图，采用友好且专业的绿白配色风格，并使用日文字体。

画布：1:1 正方形社交媒体图片，768 x 768 px 视觉感，淡薄荷绿渐变背景，带有柔和的白色曲线、细微的闪光效果，底部角落有小叶子装饰，布局清晰且对比度高。

布局：左上角为大标题区，右上角为插图区，中上部横跨一条深绿色横幅，中心为主要信息区，底部附近为行动号召按钮，最底部为 URL 页脚。

文本内容：顶部标题显示“{argument name="main title" default="Excel Fun*"}”，使用超大加粗深绿色字体，配有厚实的白色描边和柔和的投影。中间丝带横幅显示“{argument name="community headline" default="Excel・VBA 総合コミュニティ"}”，使用加粗白色文本。下方添加副标题“{argument name="community description" default="Excelに関わる全ての人がつながるコミュニティ"}”，字体为深绿色。金色奖章徽章显示“{argument name="member badge text" default="参加者 2500名 突破"}”。底部鼓励语显示“どなたでもお気軽にご参加ください！”（绿色字体）。大型圆角 CTA 按钮显示“{argument name="button text" default="今すぐチェック"}”，加粗白色字体，右侧配有一个白色圆形播放图标。页脚 URL 显示“sites.google.com/view/excel-vba-fun”，并附带一个小地球图标。

主体细节：右上角插图展示一个风格化的 Excel 电子表格窗口，标题栏带有“X-”标记，可见网格单元格和列字母，前方有三个简化的绿色用户剪影，一个圆形的“fx”公式图标，以及正好 2 个聊天气泡：一个带有三个绿点的白色气泡和一个带有三个白点的绿色气泡。中心左侧包含正好 1 枚带有锯齿边缘、月桂花环和三颗小星星的金色印章奖章，文字为加粗的黑褐色。中心右侧包含正好 1 台略微向右倾斜的笔记本电脑，显示一个包含正好 1 个饼图和正好 1 个绿色柱状图的电子表格仪表板；在笔记本电脑前方放置正好 1 个浮动的绿色 Excel 应用磁贴，上面有一个白色 X。

福利列表：在中心垂直堆叠正好 4 张水平圆角白色胶囊卡片。每张卡片左侧有一个绿色圆形图标，右侧为加粗的深绿色日文文本。4 张卡片分别为：1) 聊天气泡图标，“質問・相談歓迎”；2) 扩音器图标，“最新情報を共有”；3) 日历图标，“イベント参加OK”；4) 眼睛图标，“見るだけでもOK”。在福利列表上方添加一条虚线绿色分隔线。

视觉风格：明亮的矢量插图，光泽感的社交横幅设计，圆润的形状，粗轮廓，柔和的阴影，简洁的日文无衬线字体，主色调为翡翠绿、薄荷绿、白色和金色。保持整体清晰、欢快、易于亲近且具有社区感。

约束条件：严格使用上述计数的元素；不要添加额外的福利卡片、额外徽章、额外聊天气泡、二维码、水印或不相关的徽标。按指定要求保留日文文本。

[English]
Goal: Create a square promotional infographic for an Excel and VBA online community, using a friendly green-and-white corporate style with Japanese typography.

Canvas: 1:1 square social media image, 768 x 768 px feel, pale mint green gradient background with soft white curves, subtle sparkles, small leaf decorations in the lower corners, and a clean high-contrast layout.

Layout: Large title block at the top left, illustration block at the top right, wide dark-green banner across the upper middle, main information area in the center, call-to-action button near the bottom, and URL footer at the very bottom.

Text content: Top title reads “{argument name="main title" default="Excel Fun*"}” in oversized bold dark green letters with thick white outline and soft drop shadow. Middle ribbon banner reads “{argument name="community headline" default="Excel・VBA 総合コミュニティ"}” in bold white text. Under it, add the subtitle “{argument name="community description" default="Excelに関わる全ての人がつながるコミュニティ"}” in dark green. The gold medal badge says “{argument name="member badge text" default="参加者 2500名 突破"}”. Bottom encouragement line says “どなたでもお気軽にご参加ください！” in green. Large rounded CTA button says “{argument name="button text" default="今すぐチェック"}” in bold white, with a white circular play icon on the right. Footer URL reads “sites.google.com/view/excel-vba-fun” with a small globe icon.

Subject details: Top-right illustration shows a stylized Excel spreadsheet window with an “X-” mark in the header, visible grid cells and column letters, three simplified green user silhouettes in front, a round “fx” formula icon, and exactly 2 chat bubbles: one white bubble with three green dots and one green bubble with three white dots. Center-left contains exactly 1 gold seal medal with serrated edge, laurel wreath, three small stars, and bold black-brown lettering. Center-right contains exactly 1 laptop angled slightly right, showing a spreadsheet dashboard with exactly 1 pie chart and exactly 1 green bar chart; place exactly 1 floating green Excel app tile with a white X in front of the laptop.

Benefit list: Create exactly 4 horizontal rounded white pill cards stacked vertically in the center. Each card has a green circular icon on the left and bold dark green Japanese text on the right. The 4 cards are: 1) chat bubble icon, “質問・相談歓迎”; 2) megaphone icon, “最新情報を共有”; 3) calendar icon, “イベント参加OK”; 4) eye icon, “見るだけでもOK”. Add a dotted green divider line above the benefit list.

Visual style: Bright vector illustration, glossy social-banner design, rounded shapes, thick outlines, soft shadows, clean Japanese sans-serif typography, mostly emerald green, mint green, white, and gold. Keep everything crisp, cheerful, accessible, and community-oriented.

Constraints: Use exactly the counted elements described above; do not add extra benefit cards, extra badges, extra chat bubbles, QR codes, watermarks, or unrelated logos. Preserve the Japanese text exactly where specified.
```

**来源：** [@Excel Fun](https://x.com/ExcelFunFun/status/2072983729325351415) | 2026-07-03

---

### 📊 例 3108：进化分支树可视化

![进化分支树可视化](../images/%E8%BF%9B%E5%8C%96%E5%88%86%E6%94%AF%E6%A0%91%E5%8F%AF%E8%A7%86%E5%8C%96.jpg)

**Prompt:**

```text
[中文]
一个自上而下的分支树，其中 {argument name="theme" default="主题"} 对象沿着从单一根部延伸出的分叉枝干排列，底部为祖先形态，顶端为进化程度最高的形态，展开的树冠形成 {argument name="silhouette shape" default="形状"} 的轮廓 ::5 分支逻辑：AI_INFER 25–45 个主题对象按谱系排列——根部为一个起源，每个分叉代表一次分化，相关形态位于共享分支上——谱系从底部到最外侧顶端清晰可读 ::5 构图：整洁的树状分支，无交叉枝干，树冠分布均匀，轮廓边缘清晰，留白充裕 ::3 材质物理：真实的主题对象，准确的材质和各分支的年代感，一致的哑光质感，柔和阴影，淡淡的连接枝干 ::2 光照：平坦的顶部柔光箱，无眩光 ::2 排版：每个分支顶端带有微小的节点标签 ::2 渲染堆栈：系统发育平铺，家谱式排列，分支谱系集合，8k ::1 负面提示词：[纠缠交叉的枝干，破碎的层级，断开的节点，破碎的树冠轮廓，倾斜，3D 透视，手部] ::-1

[English]
A top-down branching tree where {argument name="theme" default="THEME"} objects are arranged along forking limbs spreading from a single root, ancestral at the base and most-evolved at the tips, the spreading canopy forming the silhouette of {argument name="silhouette shape" default="SHAPE"} ::5 Branching Logic: AI_INFER 25–45 themed objects placed as a genealogy — one origin at the root, each fork a divergence, related forms on shared branches — the lineage reading clearly from base to outermost tips ::5 Composition: Clean dendritic branching, non-crossing limbs, even canopy spread, clean silhouette edge, generous margin ::3 Material Physics: Real themed objects, accurate materials and age per branch, consistent matte finish, soft shadows, faint connecting limbs ::2 Illumination: Flat overhead softbox, no glare ::2 Typography: Tiny node labels at each branch tip ::2 Render Stack: Phylogenetic flat-lay, family-tree arrangement, branching-lineage collection, 8k ::1 Negative: [tangled crossing branches, broken hierarchy, disconnected nodes, broken canopy silhouette, tilt, 3d perspective, hands] ::-1
```

**来源：** [@Gadgetify](https://x.com/Gdgtify/status/2072972113087283692) | 2026-07-03

---

### 📊 例 3114：极简韩式涂鸦插画

![极简韩式涂鸦插画](../images/%E6%9E%81%E7%AE%80%E9%9F%A9%E5%BC%8F%E6%B6%82%E9%B8%A6%E6%8F%92%E7%94%BB.jpg)

**Prompt:**

```text
[中文]
基于 {argument name="topic" default="日常琐事"} 创建一幅简约可爱的韩式涂鸦编辑风格插画。

风格：
手绘涂鸦卡通，
极简编辑信息图插画，
干净的黑色墨水轮廓，
略带不完美的素描线条，
扁平化 2D 构图，
极简线条艺术，
大面积留白，
仅使用柔和温暖的粉彩作为点缀色。

场景：
围绕 {argument name="topic" default="日常琐事"} 设计一个温馨的日常瞬间，并包含人物。
使用简单的背景，仅保留与主题相关的必要物体和道具。

角色：
可爱简约的比例，
极简的面部特征，
淡淡的放松微笑，
自然姿态，
简单的休闲装束，
克制的涂鸦角色风格。

构图：
垂直 3:4 比例，
平视视角，
主体放置在一侧或下方区域，
另一侧留出大面积空白，
布局稀疏且通透。

物体：
极简涂鸦风格道具，如书籍、咖啡杯、植物、雨伞、标志、云朵、爱心、便签、窗户等。

排版：
在空白处添加简短的英文手写文字。

氛围：
平静、温馨、温暖、宁静、可爱。

避免：
水彩画，
动漫风格，
写实光影，
电影级渲染，
复杂的透视，
高细节，
密集构图，
奢华海报风格，
油画质感，
过度渲染的角色。

[English]
Create a simple and cute Korean doodled editorial illustration based on {argument name="topic" default="daily routine"}.

Style:
hand-drawn doodle cartoon,
minimal editorial infographic illustration,
clean black ink outlines,
slightly imperfect sketchy lines,
flat 2D composition,
minimal line art,
large clean white negative space,
soft warm pastel accent colors only.

Scene:
design a cozy everyday moment around {argument name="topic" default="daily routine"} featuring me
Use a simple background with only essential objects and props related to the topic.

Character:
cute simplified proportions,
minimal facial features,
small relaxed smile,
natural pose,
simple casual outfit,
restrained doodle character style.

Composition:
vertical 3:4 ratio,
eye-level view,
main subject placed on one side or lower area,
large empty space on the opposite side,
sparse and airy layout.

Objects:
minimal doodle-style props such as books, coffee cups, plants, umbrellas, signs, clouds, hearts, notes, windows, etc.

Typography:
add small English handwritten text in the empty space.

Mood:
calm, cozy, warm, quiet, cute.

Avoid:
watercolor painting,
anime style,
realistic lighting,
cinematic rendering,
complex perspective,
high detail,
dense composition,
luxury poster mood,
painterly textures,
over-rendered characters.
```

**来源：** [@Sairah](https://x.com/Sairah_0/status/2072959738967703894) | 2026-07-03

---

### 📊 例 3120：复古瑜伽信息图海报

![复古瑜伽信息图海报](../images/%E5%A4%8D%E5%8F%A4%E7%91%9C%E4%BC%BD%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
创作一张关于 {argument name="infographic topic" default="瑜伽八步"} 的竖版复古风格信息图海报。画面中应包含一位 {argument name="model" default="印度男性"} 在布局中演示不同的瑜伽练习和体式，每个步骤展示在独立的插画区域内。加入优雅的瑜伽风格字体、{argument name="texture" default="暖色调羊皮纸"} 质感、装饰性边框、莲花、精致的曼陀罗细节，以及柔和的大地色系（米色和棕色），并配有清晰的教育性标签和简短说明。整体设计应呈现出精致灵性健康图表的感觉，布局平衡、易于阅读且具有装饰性，适合作为精美的瑜伽海报。

[English]
Create a vertical vintage-style infographic poster about the {argument name="infographic topic" default="eight steps of yoga"}. Feature an {argument name="model" default="Indian man"} demonstrating different yoga practices and poses across the layout, with each step shown in its own illustrated section. Include elegant yoga-inspired typography, {argument name="texture" default="warm parchment paper"} texture, ornamental borders, lotus flowers, subtle mandala details, soft earthy beige and brown tones, and clear educational labels with short descriptions. The overall design should feel like a refined spiritual wellness chart, balanced, readable, decorative, and suitable as a beautiful yoga poster.
```

**来源：** [@PromptLab](https://x.com/iamaiistudio/status/2072933024166207782) | 2026-07-03

---

### 📊 例 3142：笔记本电脑技术信息图插画

![笔记本电脑技术信息图插画](../images/%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%E6%8A%80%E6%9C%AF%E4%BF%A1%E6%81%AF%E5%9B%BE%E6%8F%92%E7%94%BB.jpg)

**Prompt:**

```text
[中文]
创建一个方形的技术信息图，主体为 {argument name="subject" default="笔记本电脑"}，将逼真的产品照片或照片级渲染图与直接绘制在设备上的精确标注叠加层相结合。

使用纯 {argument name="background color" default="白色"} 的摄影棚背景和 {argument name="ink color" default="黑色"} 的墨水技术线条，呈现出建筑草图或工程手册的风格。包含：
- 关键组件标签
- 内部剖面细节或爆炸视图轮廓
- 测量值、尺寸和比例标记
- 材质说明和数量注释
- 显示功能、气流、功率流、声路、压力或其他相关系统行为的箭头
- 必要时加入简单的示意图或剖面图

将标题“LAPTOP”放置在角落的一个手绘技术标注框内。

风格与布局规则：
- 逼真的笔记本电脑必须在标注下方清晰可见
- 标注应具有草图感、技术感和建筑感
- 保持构图简洁，留白平衡
- 营造教育感，如同博物馆展板或工程手册页面

视觉风格：
极简技术插画美学，真实影像上的黑色线条，精确但略带手绘感。

调色板：
白色背景，仅使用黑色标注线和黑色文字。无其他颜色。

输出：
1080 x 1080，超清晰，针对社交媒体信息流优化，无水印。

[English]
Create a square technical infographic of a {argument name="subject" default="laptop"}, combining a realistic product photograph or photorealistic render with precise annotation overlays drawn directly over the device.

Use a pure {argument name="background color" default="white"} studio background and {argument name="ink color" default="black"} ink technical linework, like an architectural sketch or engineering manual. Include:
- Key component labels
- Internal cutaway details or exploded-view outlines
- Measurements, dimensions, and scale markers
- Material callouts and quantity notes
- Arrows showing function, airflow, power flow, sound path, pressure, or other relevant system behavior
- Simple schematic or sectional diagrams where useful

Place the title "LAPTOP" inside a hand-drawn technical annotation box in one corner.

Style and layout rules:
- The realistic laptop must remain clearly visible beneath the annotations
- The annotations should feel sketched, technical, and architectural
- Keep the composition clean with balanced negative space
- Make it feel educational, like a museum exhibit panel or engineering manual page

Visual style:
Minimal technical illustration aesthetic, black linework over realistic imagery, precise but slightly hand-drawn.

Color palette:
White background with black annotation lines and black text only. No colors.

Output:
1080 x 1080, ultra-crisp, optimized for a social feed, no watermark.
```

**来源：** [@PromptLab](https://x.com/iamaiistudio/status/2072842732922618310) | 2026-07-03

---

### 📊 例 3155：等距视角房间历史时间轴

![等距视角房间历史时间轴](../images/%E7%AD%89%E8%B7%9D%E8%A7%86%E8%A7%92%E6%88%BF%E9%97%B4%E5%8E%86%E5%8F%B2%E6%97%B6%E9%97%B4%E8%BD%B4.jpg)

**Prompt:**

```text
[中文]
2x2 网格，16:9，AI 推理：一个单间房间（例如 {argument name="room type" default="书房或厨房"}）的等距剖面图，分为四个无缝象限。左下象限陈设着最早期的 {argument name="theme" default="[THEME]"} 物体，左上为中期，右上为后期，右下为最现代的时期。房间架构有细微演变但保持一致；物体体现时间变迁 ::5 时间逻辑：AI_INFER 在四个时间象限中分布 25–30 个物体，每个区域在历史上保持一致。象限按顺时针方向流动，如同时间循环 ::5 构图：等距视角（无透视畸变），象限过渡无缝，无杂乱，物体整齐排列在表面上 ::3 材质物理：真实材质，符合时代的陈旧感，柔和阴影，无发光物体 ::2 照明：所有区域光照均匀，无夸张阴影 ::2 排版：每个象限的地板上巧妙地放置小字体的年份范围 ::2 渲染堆栈：等距时间房间，演变立体模型，室内时间轴，8k ::1 负面提示词：[透视，破碎的房间几何结构，象限间时代错误混搭，挖掘，苔藓，生物发光] ::-1

[English]
2x2 grid, 16:9, AI infers: An isometric cutaway of a single room (like a {argument name="room type" default="study or kitchen"}) divided into four seamless quadrants. The bottom-left quadrant is furnished with the earliest era’s {argument name="theme" default="[THEME]"} objects, the top-left is a middle period, the top-right is late period, and the bottom-right is the most modern. The room’s architecture morphs subtly but stays consistent; the objects tell the time shift ::5 Time Logic: AI_INFER 25–30 objects distributed across the four time quadrants, each zone historically consistent. Quadrants flow clockwise like a time-loop ::5 Composition: Isometric view (no perspective distortion), seamless quadrant transitions, no clutter, objects neatly arranged on surfaces ::3 Material Physics: Real materials, period-appropriate aging, soft shadows, no glowing items ::2 Illumination: Neutral ambient light across all zones, no dramatic shadows ::2 Typography: Small year range subtly placed on the floor of each quadrant ::2 Render Stack: Isometric time-room, evolutionary diorama, interior timeline, 8k ::1 Negative: [perspective, broken room geometry, anachronistic mixing across quadrants, excavation, moss, bioluminescence] ::-1
```

**来源：** [@Gadgetify](https://x.com/Gdgtify/status/2073464356378198044) | 2026-07-04

---

### 📊 例 3373：Jakub Pachocki AI 创新者信息图

![Jakub Pachocki AI 创新者信息图](../images/Jakub%20Pachocki%20AI%20%E5%88%9B%E6%96%B0%E8%80%85%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：为一位 AI 创新者制作一张精美的正方形教育类信息图，包含水彩肖像和关于 {argument name="character name" default="Jakub Pachocki"} 的传记板块。

画布：1:1 正方形布局，白色背景，配以钴蓝色和橙色点缀，简洁的科技编辑风格，高分辨率矢量信息图质感，带有微妙的水彩纹理。

布局：分割式构图，左上角为大幅肖像，右上角为主要标题。使用带有细蓝色边框的圆角矩形内容卡片、虚线分隔符、简洁的线条图标以及电路/网络装饰。底部居中添加一个小型页脚标签。

左上角肖像：半写实水彩风格的头部和肩部肖像，描绘了一位肤色白皙、留着极短棕色头发、蓝色眼睛、面带微笑的男性，身穿深海军蓝圆领毛衣。将他置于蓝色水彩泼墨、点状半色调装饰和弯曲的圆形轨道线背景前。

标题：巨大的粗体大写深蓝色姓名文本，内容为 {argument name="headline name" default="JAKUB PACHOCKI"}。下方是一条纤细的橙色线条和一行资历说明：OpenAI • 首席科学家 • GPT-4, RL & Reasoning。在右上角添加一个小型的抽象分子/网络图标。

内容卡片：使用 5 个信息面板：
1. 右上角的“他是谁”卡片，配有蓝色圆形人物图标。正文：“Jakub Pachocki 是一位计算机科学家和 AI 研究员，现任 OpenAI 首席科学家。自 2017 年加入 OpenAI 以来，他领导了多项重大研究计划，并曾担任研究总监。他的工作涵盖大规模深度学习、强化学习、推理模型、优化以及前沿 AI 系统。”
2. 左下角的“职业时间线”卡片，配有蓝色日历图标和垂直时间线。包含 6 条时间线记录：2009 年：国际信息学奥林匹克竞赛银牌得主；2010–2013 年：华沙大学计算机科学专业；2013–2016 年：卡内基梅隆大学计算机科学博士；2017 年：加入 OpenAI；2018–2020 年：协助领导大规模强化学习工作，包括 OpenAI Five；2021–2024 年：OpenAI 研究总监；2024 年至今：OpenAI 首席科学家。
3. 右侧中央的“主要贡献”卡片，配有橙色灯泡图标。包含 5 行贡献内容，每行配有一个蓝色轮廓小图标：代表“大规模强化学习”的奖杯、代表“GPT-4 领导力”的 GPT-4 徽章、代表“深度学习扩展”的上升图表、代表“推理模型”的头脑/大脑网络，以及代表“理论与系统结合”的代码括号。在每个粗体蓝色贡献标签后使用简短的解释性文字，并以虚线水平线和橙色圆点分隔。
4. 左下角的“为何重要”卡片，配有蓝色星形图标。包含 4 条勾选符号列表：将理论严谨性与现实世界的 AI 突破相结合；帮助将扩展定律转化为实际的前沿模型进展；影响 LLM、强化学习和推理研究；指导全球领先的 AI 实验室之一的科学方向。
5. 右下角的“成就”卡片，配有蓝色古典柱式图标。添加段落文字，解释他如何成为现代 AI 领域关键的研究领导者，从强化学习的突破到 GPT-4 和下一代推理系统，作为 OpenAI 首席科学家，他将科学深度与工程执行力完美结合。

右下角插图：添加一个巨大的蓝色等距微芯片，顶部带有 OpenAI 结状标志，连接到电路走线，旁边是一个由节点和三角形网格线组成的蓝色发光线框大脑。

页脚：居中的小型间距大写文本，内容为 {argument name="footer text" default="AI 创新者系列"}，两侧配有微小的橙色圆点和纤细的蓝色电路装饰线。

视觉风格：清晰的现代信息图，深钴蓝色排版，橙色高光，纤细的圆角卡片，点状半色调图案，网络节点主题，简洁的无衬线字体，平衡的留白，专业的杂志海报设计。

约束条件：保持所有文字清晰且对齐；使用 5 个内容卡片、6 条时间线记录、5 行贡献内容和 4 条勾选符号列表；除芯片上的 OpenAI 风格结状标志外，不添加其他标志；无水印。

[English]
Goal: Create a polished square educational profile infographic for an AI innovator, featuring a watercolor portrait and biography panels about {argument name="character name" default="Jakub Pachocki"}.

Canvas: 1:1 square layout, white background with cobalt-blue and orange accent colors, clean tech editorial style, high-resolution vector-infographic finish with subtle watercolor textures.

Layout: Split composition with a large portrait on the upper left and the main name headline on the upper right. Use rounded rectangular content cards with thin blue borders, dotted dividers, simple line icons, and circuit/network decorations. Add a small footer label centered at the bottom.

Top left portrait: Semi-realistic watercolor head-and-shoulders portrait of a light-skinned man with very short brown hair, blue eyes, slight smile, wearing a dark navy crewneck sweater. Place him in front of blue watercolor splashes, dotted halftone accents, and curved circular orbit lines.

Header: Huge bold uppercase dark-blue name text reading {argument name="headline name" default="JAKUB PACHOCKI"}. Beneath it, a slim orange line and a credential row reading: OpenAI • Chief Scientist • GPT-4, RL & Reasoning. Add a small abstract molecule/network icon in the top-right corner.

Content cards: Use exactly 5 information panels:
1. “Who He Is” card at upper right with a blue circular person icon. Body text: “Jakub Pachocki is a computer scientist and AI researcher serving as Chief Scientist at OpenAI. Since joining OpenAI in 2017, he has led major research initiatives and previously served as Director of Research. His work spans large-scale deep learning, reinforcement learning, reasoning models, optimization, and frontier AI systems.”
2. “Career Timeline” card at lower left with a blue calendar icon and a vertical timeline. Include exactly 6 timeline entries: 2009: Silver medalist, International Olympiad in Informatics; 2010–2013: Computer Science, University of Warsaw; 2013–2016: Ph.D. in Computer Science, Carnegie Mellon University; 2017: Joined OpenAI; 2018–2020: Helped lead large-scale reinforcement learning efforts, including OpenAI Five; 2021–2024: Director of Research, OpenAI; 2024–present: Chief Scientist, OpenAI.
3. “Key Contributions” card at center right with an orange lightbulb icon. Include exactly 5 contribution rows, each with a small blue outline icon: trophy for “Large-Scale Reinforcement Learning,” GPT-4 badge for “GPT-4 Leadership,” rising chart for “Deep Learning Scaling,” head/brain network for “Reasoning Models,” and code brackets for “Theory Meets Systems.” Use short explanatory text after each bold blue contribution label, separated by dotted horizontal rules and orange bullet dots.
4. “Why He Matters” card at bottom left with a blue star icon. Include exactly 4 checkmark bullets: Connects theoretical rigor with real-world AI breakthroughs; Helped translate scaling into practical frontier-model progress; Influences LLMs, reinforcement learning, and reasoning research; Guides the scientific direction of one of the world’s leading AI labs.
5. “Legacy” card at bottom right with a blue classical-column icon. Add paragraph text explaining that he emerged as a key research leader in modern AI, from reinforcement-learning breakthroughs to GPT-4 and next-generation reasoning systems, combining scientific depth with engineering execution as Chief Scientist at OpenAI.

Bottom right illustration: Add a large blue isometric microchip with the OpenAI knot logo on top, connected to circuit traces, next to a glowing blue wireframe brain made of nodes and triangular mesh lines.

Footer: Centered small spaced uppercase text reading {argument name="footer text" default="AI INNOVATORS SERIES"}, flanked by tiny orange dots and thin blue circuit-line ornaments.

Visual style: Crisp modern infographic, deep cobalt blue typography, orange highlights, thin rounded cards, dotted halftone patterns, network-node motifs, clean sans-serif fonts, balanced white space, professional magazine-poster design.

Constraints: Keep all text legible and aligned; use exactly 5 content cards, exactly 6 timeline entries, exactly 5 contribution rows, and exactly 4 checkmark bullets; no extra logos except the OpenAI-style knot on the chip; no watermark.
```

**来源：** [@Derya Unutmaz, MD](https://x.com/DeryaTR_/status/2074491173880692843) | 2026-07-07

---

### 📊 例 3438：AI 编程搭档进化时间轴

![AI 编程搭档进化时间轴](../images/AI%20%E7%BC%96%E7%A8%8B%E6%90%AD%E6%A1%A3%E8%BF%9B%E5%8C%96%E6%97%B6%E9%97%B4%E8%BD%B4.jpg)

**Prompt:**

```text
[中文]
目标：创作一张深色霓虹风格的中文时间轴信息图海报，展示 AI 编程搭档技术栈的演变历史，包含四个横向阶段卡片及对应的成对软件工具。

画布：正方形 1:1 图像，约 768×768 像素，黑色至深海军蓝背景，带有微妙的辉光效果，细线条霓虹笔触，高对比度的现代科技美学。

标题：顶部使用醒目的大号中文标题：{argument name="headline text" default="我的 AI 编程搭档进化史 🚀"}。在“AI”和“编程”字样上使用白-青-紫渐变强调。下方添加较小的灰色副标题：{argument name="subtitle text" default="不同阶段，不同选择，适合自己的才是最好的。"}，两侧配有细横线分割。

布局：四个堆叠的圆角矩形时间轴卡片，垂直间距均匀。最左侧有一条细长的垂直时间轴线，上面有 4 个与 4 行对应的发光圆形节点：蓝色、绿色、黄色、紫色。每一行左侧为日期/阶段模块，右侧为较大的工具模块。右侧模块显示 2 个应用图标，中间由一个大号加号连接。

行：共 4 行。第 1 行颜色为蓝色，标注为 {argument name="row one text" default="1-2 月份｜探索尝试阶段"}；工具为 Cursor + Claude。第 2 行颜色为绿色，标注为 {argument name="row two text" default="3-4 月份｜效率提升阶段"}；工具为 CodeBuddy + Claude。第 3 行颜色为黄色，标注为 {argument name="row three text" default="5-6 月份｜深度协作阶段"}；工具为 Pi + Codex。第 4 行颜色为紫色，标注为 {argument name="row four text" default="7 月份｜专注交付阶段｜Now!"}；工具为 Orca + Codex。

应用磁贴与图标：总共创建 8 组应用图标/名称：1) Cursor，黑色圆角方形图标，带有白色多面钻石/光标标记，子标签“AI IDE”；2) Claude，橙色圆角方形图标，带有白色放射状星芒，子标签“AI Assistant”；3) CodeBuddy，亮绿色圆角方形图标，带有可爱的黑色机器人脸和白色眼睛，子标签“AI Coding Assistant”；4) Claude，同上；5) Pi，奶油色圆角方形图标，带有大号黄色“Pi”字样，子标签“AI Developer”；6) Codex，青色圆角方形 OpenAI 结状图标，子标签“by OpenAI”；7) Orca，紫色圆角方形图标，带有黑白虎鲸图案，子标签“AI IDE”；8) Codex，同上。工具名称为大号粗体白色文字；子标签为较小的浅灰色文字。加号为大号、居中且呈浅灰色。

页脚：在底部中心，添加一行小巧的手写风格文字：“💗 工具在变，热爱不变，持续进化 🚀”。

视觉风格：Cyber UI 仪表盘外观，带有半透明深色填充的圆角卡片，每行对应霓虹色边框，柔和的外发光，清晰的排版，整洁的对齐，无杂乱元素，无水印。

[English]
Goal: Create a dark neon Chinese timeline infographic poster showing the evolution history of an AI programming partner stack, with four horizontal stage cards and paired software tools.

Canvas: Square 1:1 image, about 768×768 px, black-to-deep-navy background with subtle glow, thin neon strokes, high-contrast modern tech aesthetic.

Header: Large bold Chinese headline at the top: {argument name="headline text" default="我的 AI 编程搭档进化史 🚀"}. Use a white-to-cyan-to-purple gradient emphasis across the AI/programming words. Under it, add a smaller gray subtitle: {argument name="subtitle text" default="不同阶段，不同选择，适合自己的才是最好的。"} with thin horizontal divider lines on both sides.

Layout: Four stacked rounded rectangular timeline cards, evenly spaced vertically. A thin vertical timeline line runs down the far left with exactly 4 glowing circular nodes aligned to the 4 rows: blue, green, yellow, purple. Each row has a left date/stage block and a larger right tools block. The right block shows exactly 2 app tiles separated by a large plus sign.

Rows: Use exactly 4 rows. Row 1 is blue and labeled {argument name="row one text" default="1-2 月份｜探索尝试阶段"}; tools are Cursor + Claude. Row 2 is green and labeled {argument name="row two text" default="3-4 月份｜效率提升阶段"}; tools are CodeBuddy + Claude. Row 3 is yellow and labeled {argument name="row three text" default="5-6 月份｜深度协作阶段"}; tools are Pi + Codex. Row 4 is purple and labeled {argument name="row four text" default="7 月份｜专注交付阶段｜Now!"}; tools are Orca + Codex.

App tiles and icons: Create exactly 8 app icon/name groups total: 1) Cursor, black rounded-square icon with a white faceted diamond/cursor mark, sublabel “AI IDE”; 2) Claude, orange rounded-square icon with a white radial starburst, sublabel “AI Assistant”; 3) CodeBuddy, bright green rounded-square icon with a cute black robot face and white eyes, sublabel “AI Coding Assistant”; 4) Claude, same as above; 5) Pi, cream rounded-square icon with large yellow “Pi”, sublabel “AI Developer”; 6) Codex, teal rounded-square OpenAI knot style icon, sublabel “by OpenAI”; 7) Orca, purple rounded-square icon with a black-and-white orca whale, sublabel “AI IDE”; 8) Codex, same as above. Tool names are large bold white text; sublabels are smaller light gray text. Plus signs are large, centered, and light gray.

Footer: At the bottom center, add a small colorful handwritten-style line: “💗 工具在变，热爱不变，持续进化 🚀”.

Visual style: Cyber UI dashboard look, rounded cards with translucent dark fill, colored neon borders matching each row, soft outer glows, crisp typography, clean alignment, no clutter, no watermark.
```

**来源：** [@Indie Fox](https://x.com/indie_maker_fox/status/2075006022209753174) | 2026-07-08

---

### 📊 例 3440：超现实饮料信息图广告

![超现实饮料信息图广告](../images/%E8%B6%85%E7%8E%B0%E5%AE%9E%E9%A5%AE%E6%96%99%E4%BF%A1%E6%81%AF%E5%9B%BE%E5%B9%BF%E5%91%8A.jpg)

**Prompt:**

```text
[中文]
一张高级信息图风格的广告，展示了一个超大的 {argument name="brand" default="Pepsi"} 饮料罐放置在一位 {argument name="subject" default="年轻女性"} 旁边。饮料罐的比例被放大到几乎与她整个坐姿身体一样大，营造出一种引人注目的超现实比例感。女性随意地靠在巨大的罐子上，一只手臂搭在上面，互动自然。Pepsi 罐身细节极其丰富，品牌标识清晰，带有冷凝水珠、逼真的反射效果和金属质感。Logo 清晰、锐利且比例协调。构图现代且极简，背景为干净的摄影棚，配有柔和的渐变色。微妙的信息图风格标注线突出了“清爽”、“气泡”、“冰凉质感”等特点。灯光为柔和的摄影棚光，带有受控的高光。模特穿着简约的现代服装，与罐身的 {argument name="colors" default="红、白、蓝"} 色调相得益彰。色彩分级清晰且略显鲜艳，具有商业广告美感。高端产品信息图，商业饮料广告，超高分辨率，4K，照片级真实感。

[English]
A premium infographic-style advertisement featuring an oversized {argument name="brand" default="Pepsi"} can placed beside a {argument name="subject" default="young woman"}. The can is scaled to be nearly the same size as her entire seated body, creating a striking surreal proportion. The woman sits casually leaning against the giant can, one arm resting on it, interacting naturally. The Pepsi can is ultra-detailed with crisp branding, condensation droplets, realistic reflections, and metallic texture. The logo is clean, sharp, and properly proportioned. Composition is modern and minimal, set in a clean studio with a soft gradient background. Subtle infographic-style annotation lines highlight features like 'refreshment', 'carbonation', 'chilled texture'. Lighting is soft studio with controlled highlights. The model wears minimal contemporary clothing that complements the {argument name="colors" default="red white and blue"} tones of the can. Color grading crisp and slightly vibrant, commercial ad aesthetic. High-end product infographic, commercial beverage advertisement, ultra high resolution, 4K, photorealistic.
```

**来源：** [@Emm | scenario.com](https://x.com/emmanuel_2m/status/2075000101362131350) | 2026-07-08

---

### 📊 例 3589：九款模型稻草人妖怪对比

![九款模型稻草人妖怪对比](../images/%E4%B9%9D%E6%AC%BE%E6%A8%A1%E5%9E%8B%E7%A8%BB%E8%8D%89%E4%BA%BA%E5%A6%96%E6%80%AA%E5%AF%B9%E6%AF%94.jpg)

**Prompt:**

```text
[中文]
目标：创建一个 3x3 对比图表，展示九种不同的 AI 图像模型针对同一角色概念的输出结果：一个全身日本稻草人妖怪战士，佩戴狐狸或鬼怪风格面具，正面站立，双臂水平伸展在木横梁上，呈现稻草人姿态。

画布：竖向海报，768 x 1152 宽高比，温暖的米白色羊皮纸背景，面板间有细窄的间隙，每个面板包含一个居中的全身角色插画，背景为浅色纸张。使用柔和的米色、稻草色、炭灰色、海军蓝和红色调。

布局：排列 9 个矩形面板，组成 3 列 3 行的网格。每个面板底部边缘设有一个深色标签栏，带有加粗的白色无衬线文字；第一个标签栏为红色，以突出显示首选模型。确保所有标签清晰且左对齐。

文本内容：使用以下 9 个面板标签，按从左上到右下的顺序排列：1) {argument name="highlighted model label" default="Seedream 5.0 Pro *"}, 2) Seedream V4.5, 3) Krea v2 Large (NEW), 4) Flux 2 Max, 5) Hunyuan V3, 6) Kling O3 (4K), 7) {argument name="bottom left model label" default="GPT Image 2"}, 8) Nano Banana 2, 9) Grok Imagine。

主体细节：在每个面板中，描绘同一个核心主体，但渲染风格有所不同：一个由干稻草、破布和木头制成的日本丰收之灵稻草人，佩戴带有红色标记的浅色狐狸面具或鬼怪面具，身披稻草斗篷或茅草披肩，穿着深靛蓝色农民裤、绳索绑带、草鞋，配有红色绳结装饰，腰部或胸前挂着一个小黄铜铃铛。在多个变体中加入弯曲的镰刀或钩状刀片。角色应看起来像民间传说概念艺术：诡异而迷人，手工感强，饱经风霜且具有仪式感。在大多数面板中，手臂应系在或搁在水平木梁上。在脚部附近添加细微的稻草碎片、松散的纤维和淡淡的素描阴影。

面板逐一变体：左上：精致的水彩概念艺术，更圆润的稻草斗篷，颜色较深的面具，腰部附近有小铃铛，腿部后方有朦胧的灰色水洗效果。中上：更干净的动漫概念渲染，橙色狐狸面具，红围巾，蓝黑色服装，稻草肩披，头部后方有木柱，右臀部挂着镰刀。右上：简化的可爱面具，宽大的稻草披风，高耸的稻草发羽，颈部有红色蝴蝶结绳，肩部可见木梁。左中：高瘦的稻草人，浅色面具，头部后方有巨大的圆形光环状稻草框，左侧有黄铜铃铛，长长的红色流苏垂下。正中：体型较粗壮，佩戴白色鬼怪面具，层叠的稻草裙，双手抓着横梁，两条弯曲的镰刀挂在红绳上。右中：更具动感的粗犷绘画版本，锐利的狐狸面具，稻草帽式兜帽，腰部有大铃铛，侧面有红色小恶魔面具挂饰，黑色灯笼裤。左下：最粗犷、质感最强的版本，深色泥泞服装，厚重的破烂稻草斗篷，阴影遮盖的面具，前方有黄铜铃铛，左下方有镰刀状刀片。中下：优雅精致的人物，带有放射状圆形稻草光环，窄狐狸面具，对称的稻草斗篷，红色颈绳，腰部有铃铛和钩子。右下：友好的玩具风格狐狸面具稻草人，紧凑的身体，整洁的稻草斗篷，头部后方有木柱，靛蓝色和服式服装和稻草护腿。

视觉风格：手绘奇幻角色表对比图，日本民间传说设计，水彩和水粉质感，墨水素描点缀，高细节，温暖的羊皮纸，略带粗糙的 AI 模型对比美学。使插画密集且富有质感，可见纤维、干笔触和细微的纸张纹理。

约束：不要添加额外的面板、标签、徽标、水印、标题或背景风景。保持每个角色全身且居中。确保 9 个带标签的模型面板数量准确且清晰。

[English]
Goal: Create a 3 by 3 comparison chart showing nine different AI image model outputs for the same character concept: a full-body Japanese straw scarecrow yokai warrior wearing a fox or oni-style mask, posed front-facing with arms stretched horizontally on a wooden crossbeam like a scarecrow.

Canvas: Vertical poster, 768 x 1152 aspect ratio, warm off-white parchment background, thin gutters between panels, each panel containing one full-body character illustration centered on a pale paper backdrop. Use a muted beige, straw, charcoal, navy, and red color palette.

Layout: Arrange exactly 9 rectangular panels in a 3-column by 3-row grid. Each panel has a dark label bar along the bottom edge with bold white sans-serif text; the first label bar is red to highlight the preferred model. Keep all labels readable and aligned left.

Text content: Use exactly these 9 panel labels, in this order from top-left to bottom-right: 1) {argument name="highlighted model label" default="Seedream 5.0 Pro *"}, 2) Seedream V4.5, 3) Krea v2 Large (NEW), 4) Flux 2 Max, 5) Hunyuan V3, 6) Kling O3 (4K), 7) {argument name="bottom left model label" default="GPT Image 2"}, 8) Nano Banana 2, 9) Grok Imagine.

Subject details: In every panel, depict the same core subject with variation in rendering style: a Japanese harvest-spirit scarecrow figure made of dry straw, ragged cloth, and wood, wearing a pale fox mask or demon mask with red markings, a straw cape or thatched mantle, dark indigo peasant trousers, rope bindings, sandals, a red cord accent, and a small brass bell hanging from the waist or chest. Include a curved sickle or hook-shaped blade at the side in several variations. The character should look like folklore concept art: eerie but charming, handmade, weathered, and ritualistic. The arms should be tied or resting along a horizontal wooden beam in most panels. Add subtle straw fragments, loose fibers, and small sketchy shadows near the feet.

Panel-by-panel variation: Top-left: delicate watercolor concept art, rounder straw cloak, darker face mask, small bell near the waist, misty gray wash behind the legs. Top-middle: cleaner anime-concept rendering with an orange fox mask, red scarf, blue-black outfit, straw shoulder cape, wooden post behind the head, sickle at the right hip. Top-right: simplified cute mask, broad straw poncho, tall straw hair plume, red bow cord at the neck, wooden beam visible across the shoulders. Middle-left: tall thin scarecrow with a pale mask, large circular halo-like straw frame behind the head, brass bell on the left side, long dangling red tassel. Middle-center: stockier figure with a white oni mask, layered straw skirt, both hands gripping the crossbeam, two curved sickles hanging from red cords. Middle-right: more dynamic rough painted version with sharp fox mask, straw hat-like hood, large bell on the waist, red small demon mask charm at the side, black balloon trousers. Bottom-left: grittiest and most textured version, dark muddy clothing, heavy ragged straw cloak, shadowy face mask, brass bell in front, scythe-like blade at the lower left. Bottom-middle: elegant refined figure with radiant circular straw halo, narrow fox mask, symmetrical straw cape, red neck cord, bell and hook at the waist. Bottom-right: friendly toy-like fox-masked scarecrow, compact body, neat straw cloak, wooden post behind head, indigo kimono-like clothing and straw shin guards.

Visual style: Hand-painted fantasy character-sheet comparison, Japanese folklore design, watercolor and gouache texture, ink sketch accents, high detail, warm parchment paper, slightly rough AI-model-comparison aesthetic. Make the illustration dense and textured, with visible fibers, dry brush marks, and subtle paper grain.

Constraints: Do not add extra panels, extra labels, logos, watermarks, captions, or background scenery. Keep every character full-body and centered. Ensure the exact count of 9 labeled model panels is clear.
```

**来源：** [@Ryo@AI動画×AIツール紹介](https://x.com/ryo05m/status/2075189442206462273) | 2026-07-09

---

### 📊 例 3596：手绘风西红柿炒鸡蛋食谱信息图

![手绘风西红柿炒鸡蛋食谱信息图](../images/%E6%89%8B%E7%BB%98%E9%A3%8E%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%82%92%E9%B8%A1%E8%9B%8B%E9%A3%9F%E8%B0%B1%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创作一张可爱的打开式笔记本风格手绘中文食谱信息图，教授如何制作 {argument name="dish name" default="西红柿鸡蛋"}。

画布：16:9 宽屏横向构图，呈现为米色网格笔记本的双页展开效果，页面边角圆润，带有淡淡的米色网格线、柔和的铅笔轮廓以及温暖的水彩质感。

布局：左上角书写醒目的手写中文标题“如何制作西红柿鸡蛋”，下方配有淡黄色荧光笔划线。上方中部横向排列 6 张贴有胶带的配料便签，从左至右依次为：1) 红色便签，标注“西红柿”并绘有西红柿；2) 黄色便签，标注“鸡蛋”并绘有两个鸡蛋及回形针；3) 绿色便签，标注“葱”并绘有小葱；4) 蓝色便签，标注“油”并绘有小油瓶；5) 紫色便签，标注“盐”并绘有盐罐；6) 粉色便签，标注“糖”并绘有糖罐。右上角展示放置在木托盘上白色餐盘里的成品西红柿炒鸡蛋，配有一小碗葱花、一把勺子、闪光点、一颗红心，以及手写文字“酸甜可口！”。

食谱步骤：下半部分放置 5 张由蓝色箭头连接的撕纸风格食谱卡片。卡片 1 带有红色边框，标注“1. 切”，展示砧板上的西红柿切片、菜刀及一小碗葱花。卡片 2 带有黄色边框，标注“2. 炒鸡蛋”，展示黑色平底锅中橙色小火烹饪的炒蛋。卡片 3 带有绿色边框，标注“3. 炒西红柿”，展示平底锅中烹饪的西红柿切片。卡片 4 带有蓝色边框，标注“4. 混合”，展示锅中混合在一起的西红柿与鸡蛋。卡片 5 带有粉色边框，标注“5. 调味”，展示锅中成品，上方有两把小勺，并配有一个带有绿色对勾的圆形标签，写着“完成！”。

装饰细节：左侧第一张步骤卡片旁添加一个拿着教鞭、探出头来的可爱卡通女孩。左侧边缘放置盆栽，散落的葱花、小爱心、闪光点，右下角放置一把木勺，左下角放置一个小碗和勺子。底部中心书写手写标语“美味家常菜，简单又健康！”，并配以红心和叶片装饰。

视觉风格：柔和的淡彩水彩风、彩色铅笔素描线条、卡哇伊烹饪插画、剪贴簿拼贴美学、便签上的美纹纸胶带、轻微阴影、温馨的家常感、清晰易读的中文手写字体。

约束条件：必须包含 6 张配料便签和 5 张步骤卡片；所有中文文本需清晰可辨且位于指定位置；禁止写实风格，禁止增加额外食谱步骤，禁止添加水印或 Logo。

[English]
Goal: Create a cute hand-drawn Chinese recipe infographic in an open notebook, teaching how to make {argument name="dish name" default="西红柿鸡蛋"}.

Canvas: Wide 16:9 horizontal composition, like a two-page spread of a cream-colored grid-paper notebook with rounded page corners, faint beige graph lines, soft pencil outlines, and a warm watercolor texture.

Layout: At the top left, write the large handwritten Chinese title “如何制作西红柿鸡蛋” with a pale yellow highlighter stroke underneath. Across the upper middle are exactly 6 taped ingredient sticky notes, left to right: 1) red note labeled “西红柿” with a tomato drawing, 2) yellow note labeled “鸡蛋” with two eggs and a paperclip, 3) green note labeled “葱” with green onions, 4) blue note labeled “油” with a small oil bottle, 5) purple note labeled “盐” with a salt shaker, 6) pink note labeled “糖” with a sugar jar. In the upper right, show the finished tomato-and-egg dish on a white plate on a wooden tray, with a small bowl of chopped scallions, a spoon, sparkles, a red heart, and handwritten text “酸甜可口！”.

Recipe steps: Along the lower half, place exactly 5 torn-paper recipe cards connected by blue arrow lines. Card 1 has a red border and label “1. 切”, showing sliced tomatoes on a cutting board, a cleaver, and a small bowl of chopped scallions. Card 2 has a yellow border and label “2. 炒鸡蛋”, showing scrambled eggs in a black frying pan over small orange flames. Card 3 has a green border and label “3. 炒西红柿”, showing tomato slices cooking in a frying pan. Card 4 has a blue border and label “4. 混合”, showing tomatoes and eggs mixed together in the pan. Card 5 has a pink border and label “5. 调味”, showing the finished mixture in the pan, two small spoons above it, and a rounded label with a green check mark reading “完成!”.

Decorative details: Add a small smiling cartoon girl peeking from the left side near the first step card, holding a pointer. Add potted plants on the far left margin, scattered chopped scallions, tiny hearts, sparkles, a wooden spoon on the lower right, and a small bowl with spoon on the lower left. At the bottom center, write the handwritten slogan “美味家常菜，简单又健康！” with red hearts and leafy flourishes.

Visual style: Soft pastel watercolor, colored pencil sketch lines, kawaii cooking illustration, scrapbook collage aesthetic, masking tape on the notes, light shadows, cozy homemade feel, neat legible Chinese handwriting.

Constraints: Use exactly 6 ingredient notes and exactly 5 step cards; keep all Chinese text legible and in the positions described; no photorealism, no extra recipe steps, no watermark, no logo.
```

**来源：** [@Gorden Sun](https://x.com/Gorden_Sun/status/2075170266318320065) | 2026-07-09

---

### 📊 例 3627：X 时间线突破数字艺术

![X 时间线突破数字艺术](../images/X%20%E6%97%B6%E9%97%B4%E7%BA%BF%E7%AA%81%E7%A0%B4%E6%95%B0%E5%AD%97%E8%89%BA%E6%9C%AF.jpg)

**Prompt:**

```text
{argument name="参照アバター" default="[人物像]"} = [参照アバター]
[入力項目]
{argument name="画像比率" default="1:1"} = 1:1 / 4:5 / 9:16
{XユーザーID} = @your_account
{argument name="メイン文字" default="BREAK THE TIMELINE"} = BREAK THE TIMELINE

[本文]
{参照アバター}を同一キャラクターとして使用する。顔立ち、髪型、髪色、体型、衣装、色、雰囲気を維持し、別人化させない。表情は笑顔ではなく、口角を上げず、唇を固く結び、眉をわずかに寄せた、鋭く反抗的で覚悟のある表情にする。
{画像比率}のシネマティックなデジタルアート。背景は明るい白を基調としたXのライトモード風タイムラインUI。スマホ本体ではなく、UI画面そのものがキャンバス全面にフルブリードで広がっている。外側のスマホ枠、黒いベゼル、端末の縁は表示しない。
上部には白いヘッダー、中央の黒いXマーク、2タブ構成のナビゲーション。背景には投稿カード、プロフィール丸アイコン、返信・リポスト・いいね・表示数・共有アイコンが並び、洗練されたミニマルなXタイムラインとして見える。投稿文は薄いグレーのダミーテキストラインで処理し、目立つ投稿カードまたはプロフィール行に「{XユーザーID}」だけを鮮明に表示する。
{参照アバター}がXのタイムライン画面を内側から物理的に殴り破り、割れた透明スクリーンとUIレイヤーを突き破って前方へ飛び出してくる。片拳をカメラ方向へ強く突き出し、もう片方の腕を後ろに引き、上半身をひねった躍動感のある破壊ポーズ。拳, 肩, 髪, 衣装に強い動きを出し、突破する瞬間の緊張感と迫力を強調する。
タイムラインそのものが破壊されている。投稿カードは亀裂で分断され、各UIアイコンは割れ目に沿って歪み、白いUIパネルが薄いレイヤーとして剥がれて奥行き方向に飛散している。透明なガラス破片、白いUI破片、細い光の亀裂、衝撃波がカメラに向かって飛び散る。ただしアバターの顔は明瞭に見える。
画面前面の中央から下部寄りに「{メイン文字}」を大きく配置する。単なる文字ではなく、高級広告ポスターのメインタイトルロゴとしてデザインする。極太のコンデンスドサンセリフ、Druk、Bebas Neue、Anton、DIN Condensedのような縦長で力強い広告フォント風。白〜シルバーの立体的なベベル、黒いインナーシャドウ、薄いグレーのドロップシャドウ、シャープなエッジ、ガラス状の亀裂、透明破片、リムライト、わずかな衝撃波の歪みを加える。文字は正確につづられ、鮮明で読みやすく、UIや破片に埋もれない。
全体は明るくクリーンなライティング。白、黒、ライトグレー、シルバーを基調に、控えめなブルーまたはシアンのアクセントを加える。高級感のあるシネマティック広告ビジュアル、シャープなディテール、奥行きのあるダイナミック構図。参照アバターのデザイン性を保ちながら、立体感と迫力のあるハイクオリティな仕上げにする。

[禁止事項]
笑顔、楽しそうな表情、かわいいアイドル風、別人化、衣装変更、複数キャラクター、人体・手指破綻、顔が隠れる、X以外のSNS UI、Instagram風、TikTok風、YouTube風、Facebook風、青いTwitter鳥ロゴ、スマホ端末本体、黒ベゼル、黒枠、暗い背景、安っぽい文字、丸文字、ポップ文字、エフェクトなしの文字、文字化け、スペルミス、余計な文字、指定ID以外のアカウント名、破壊感不足、ガラス破片なし、UI破壊なし、平面的、低品質、ぼやけ、血、傷、ホラー表現
```

**来源：** [@AIライフハック](https://x.com/ai_lifehack55/status/2075053578738131137) | 2026-07-09

---

### 📊 例 3647：日本 AI 员工信息图

![日本 AI 员工信息图](../images/%E6%97%A5%E6%9C%AC%20AI%20%E5%91%98%E5%B7%A5%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张简洁的日本商业信息图 Slides，解释向 AI 分配角色的转变，核心概念为“AI 员工”。使用 {argument name="main headline" default="AIに役割を持たせる時代へ。"} 作为顶部大标题。

画布：垂直肖像型信息图，比例约为 3:4，白色背景，细浅灰色边框，海军蓝强调色，黑色正文，圆角矩形内容块，极简线条图标。设计风格应类似于精致的 LinkedIn/X 商业 Slides 或提案讲义。

布局：从上到下分为 6 个堆叠部分。

第 1 部分 — 标题与循环图：顶部放置大号粗体标题。左侧包含三行简短的日语说明，关于花费一周时间开发个人 AI 总编辑，反复编写角色、分配工作、检查输出并重写角色的过程。右侧展示一个包含海军蓝箭头和简单图标的 4 步循环工作流。工作流步骤必须准确为 4 个：1) 铅笔图标，标注「役割を書き直す」；2) 文档图标，标注「役割を書く」；3) 办公桌前的人图标，标注「仕事を任せる」；4) 放大镜图标，标注「アウトプットを確認」。

第 2 部分 — 三家公司公告卡片：一个圆角框，标题为 {argument name="announcement heading" default="そうしたら今週、3社が「仕事をするAI」を発表しました。"}。在框内创建 3 张水平排列的公司卡片。卡片 1：类似 OpenAI 标志的结状图标，标题「OpenAI」，产品「ChatGPT Work」，简短的日语描述，关于宣布一种能自主处理复杂任务的新型 AI 工作结构。卡片 2：Anthropic 风格的 AI 图标，标题「Anthropic」，产品「Claude Cowork」，简短的日语描述，关于扩展 Claude Cowork，让 AI 作为团队成员工作。卡片 3：xAI 标志，标题「xAI」，产品 {argument name="xAI product name" default="Grok 4.5"}，简短的日语描述，关于推出在编码和 Agent 任务方面表现强劲的新旗舰产品。卡片下方放置一个深海军蓝横幅，内含白色文字：「3社とも、「答えるAI」ではなく「仕事をするAI」を出してきました。」。

第 3 部分 — 关键信息块：分为两栏。左栏为大号粗体文字：「AIを使う時代から、AIに役割を持たせる時代へ。」 右栏为一段解释，说明整个行业正朝着这个方向发展，ChatGPT Work、AI 员工和 AI 公司已不再是罕见概念。最后以一个粗体海军蓝问题结尾：{argument name="closing question" default="皆さんはもう、AI社員導入していますか？"}。

第 4 部分 — AI 员工定义：以海军蓝胶囊标题开头：「AI社員って何？」。用日语解释，简单来说，就是拥有角色的 AI。在「例えば自分なら、」下方包含 3 张小型角色卡片：1) 人物图标，标注「編集長（SNS・ブランド）」；2) 笔记本电脑/代码图标，标注「開発（コード）」；3) 文档/搜索图标，标注「秘書（調査・整理）」。添加注释说明每个角色都被赋予了独立职责。右侧写道，通过像赋予人类职位一样为 AI 分配角色，输出结果会变得更加稳定。

第 5 部分 — 如何制作：添加海军蓝胶囊标题「どうやって作るの？」并解释方法出奇简单：创建 Claude Code 公司提示词并运行它。展示 4 个水平排列的编号步骤。步骤 1：「Claude Codeで company/フォルダを作る」，配以深色终端风格的文件树，显示 7 个文件：company/, mission.md, vision.md, values.md, role_editor.md, role_developer.md, role_secretary.md, rules.md。步骤 2：「各役割のルールや基準を Markdownで書く」，配以要点：「ミッション」, 「ビジョン」, 「判断基準」, 「話し方」, 「役割の詳細など」。步骤 3：「Claude Codeにプロンプトを渡す」，配以黑色对话气泡，内含日语文本，要求其读取公司文件夹并担任 SNS 总编辑。步骤 4：「仕事を任せて、改善を繰り返す」，配以微型循环图，显示办公桌前的人、放大镜和铅笔图标，分别标注工作、检查、修正。

第 6 部分 — 底部要点：一个圆角页脚条，左侧带有海军蓝灯泡图标，以及粗体日语要点文字：{argument name="footer takeaway" default="大事なのはプロンプトの上手さではなく、「役割の設計」です。"}。右侧添加一个小人物/团队图标，并附上一句话解释：如果你将 AI 视为像人类一样需要培养的对象，它就会成为你可以信赖的员工。

视觉风格：日本企业信息图，清晰的排版，宽裕的间距，微妙的灰色分隔线，海军蓝高光，扁平单色线条图标，无照片，无渐变，无杂乱。保持所有日语文本清晰且对齐。除指定数量外，请勿添加额外的公司、步骤、卡片或装饰元素。

[English]
Goal: Create a clean Japanese business infographic slide explaining the shift to assigning roles to AI, centered on the concept of an “AI employee.” Use {argument name="main headline" default="AIに役割を持たせる時代へ。"} as the large top headline.

Canvas: Vertical portrait infographic, approximately 3:4 aspect ratio, white background, thin light-gray border, navy blue accent color, black body text, rounded rectangular content blocks, minimalist line icons. The design should look like a polished LinkedIn/X business slide or proposal handout.

Layout: Use 6 stacked sections from top to bottom.

Section 1 — Header and cycle diagram: At the top, place the large bold headline. On the left, include three short Japanese explanatory lines about spending one week developing a personal AI editor-in-chief, repeatedly writing roles, assigning work, checking output, and rewriting roles. On the right, show a circular 4-step workflow with navy arrows and simple icons. Count exactly 4 workflow steps: 1) pencil icon labeled 「役割を書き直す」, 2) document icon labeled 「役割を書く」, 3) person-at-desk icon labeled 「仕事を任せる」, 4) magnifying glass icon labeled 「アウトプットを確認」.

Section 2 — Three company announcement cards: A rounded box with the heading {argument name="announcement heading" default="そうしたら今週、3社が「仕事をするAI」を発表しました。"}. Inside it, create exactly 3 horizontal company cards. Card 1: OpenAI logo-like knot icon, title 「OpenAI」, product 「ChatGPT Work」, short Japanese description about announcing a new AI work structure that autonomously handles complex tasks. Card 2: Anthropic stylized AI logo, title 「Anthropic」, product 「Claude Cowork」, short Japanese description about expanding Claude Cowork, where AI works as a member of the team. Card 3: xAI logo, title 「xAI」, product {argument name="xAI product name" default="Grok 4.5"}, short Japanese description about launching a new flagship strong in coding and agent tasks. Below the cards, place a dark navy banner with white text: 「3社とも、「答えるAI」ではなく「仕事をするAI」を出してきました。」.

Section 3 — Key message block: Split into two columns. Left column has large bold text: 「AIを使う時代から、AIに役割を持たせる時代へ。」 Right column has a paragraph explaining that the whole industry is moving in this direction, and that ChatGPT Work, AI employees, and AI Company are no longer unusual concepts. End with a bold navy question: {argument name="closing question" default="皆さんはもう、AI社員導入していますか？"}.

Section 4 — Definition of AI employee: Start with a navy pill heading: 「AI社員って何？」. Explain in Japanese that, simply put, it is an AI with a role. Include exactly 3 small role cards under 「例えば自分なら、」: 1) person icon labeled 「編集長（SNS・ブランド）」, 2) laptop/code icon labeled 「開発（コード）」, 3) document/search icon labeled 「秘書（調査・整理）」. Add a note that each is given a separate role. On the right, write that by giving AI roles like people have job roles, output becomes more stable.

Section 5 — How to make it: Add a navy pill heading 「どうやって作るの？」 and explain that the method is surprisingly simple: create a Claude Code company prompt and operate it. Show exactly 4 numbered steps in a horizontal process. Step 1: 「Claude Codeで company/フォルダを作る」 with a dark terminal-style file tree showing exactly 7 files: company/, mission.md, vision.md, values.md, role_editor.md, role_developer.md, role_secretary.md, rules.md. Step 2: 「各役割のルールや基準を Markdownで書く」 with bullets: 「ミッション」, 「ビジョン」, 「判断基準」, 「話し方」, 「役割の詳細など」. Step 3: 「Claude Codeにプロンプトを渡す」 with a black speech bubble containing Japanese text asking it to read the company folder and act as the SNS editor-in-chief. Step 4: 「仕事を任せて、改善を繰り返す」 with a mini circular loop showing person-at-desk, magnifying glass, and pencil icons labeled work, check, fix.

Section 6 — Bottom takeaway: A rounded footer strip with a navy lightbulb icon on the left and bold Japanese takeaway text: {argument name="footer takeaway" default="大事なのはプロンプトの上手さではなく、「役割の設計」です。"}. On the right, add a small people/team icon and a sentence explaining that if you assume AI is something to train like a human, it becomes an employee you can rely on.

Visual style: Japanese corporate infographic, crisp typography, generous spacing, subtle gray dividers, navy highlights, flat monochrome line icons, no photos, no gradients, no clutter. Keep all Japanese text legible and aligned. Do not add extra companies, extra steps, extra cards, or decorative elements beyond the specified counts.
```

**来源：** [@坂本健太｜IdeaReal 🪼](https://x.com/ksakamoto7/status/2075726645705773360) | 2026-07-10

---

### 📊 例 3659：AI 创新者个人资料信息图

![AI 创新者个人资料信息图](../images/AI%20%E5%88%9B%E6%96%B0%E8%80%85%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创建一张精致的正方形 AI 创新者个人资料信息图，介绍 {argument name="character name" default="Thibault Sottiaux"}，采用现代科技杂志封面卡片的风格。

画布：正方形 1:1 布局，白色背景，深钴蓝色与亮橙色配色方案，带有细圆角蓝色边框，底部边缘饰有微妙的电路轨迹，角落处点缀着装饰性圆点和抽象的网络节点。采用清晰的矢量布局与柔和的水彩肖像相结合。

布局：双栏构图。左侧上方为大幅水彩风格的半身肖像，下方为职业生涯时间轴卡片。右侧上方为超大的姓名标题，下方为简短的所属机构行，随后是三张以平衡网格排列的圆角信息卡片。底部居中添加页脚标签。

英雄肖像：左上方展示一位面带微笑的成年男性，留着棕色短侧分发型，肤色浅，带有轻微胡茬，身穿黑色连帽衫，呈现为半写实水彩插画，背景有蓝色墨水溅射效果，肖像周围环绕着细细的轨道弧线。

标题与顶部文本：深蓝色大号加粗大写标题，内容为 {argument name="headline text" default="THIBAULT SOTTIAUX"}。下方放置一条细橙色横线，以及所属机构行：“OpenAI • Core Products Lead • Codex”，并使用橙色圆点作为分隔符。

卡片与内容：使用 5 张圆角内容卡片，每张卡片均带有蓝色轮廓、清晰的图标徽章和深蓝色章节标题。

1. “个人简介”卡片：蓝色圆圈内的用户剪影图标。正文：“Thibault ‘Tibo’ Sottiaux 是一位比利时软件工程师，也是 OpenAI 的 AI 产品负责人。他领导 Codex 项目，并致力于推动专注于辅助实际软件工程的 AI 系统核心产品工作。在加入 OpenAI 之前，他曾在 Google DeepMind 工作，构建了 AI/ML 工作流基础设施，并随后领导了 Gemini 的人类数据工作。”

2. “职业时间轴”卡片：日历图标。包含 6 条带有连接蓝色圆圈的时间轴条目：“2009–2012 年：UCLouvain 计算与应用数学学士学位”；“2012–2014 年：UCLouvain 计算与应用数学硕士学位”；“2015–2018 年：Google — 软件工程职位”；“2018–2024 年：Google DeepMind — 机器学习工作流与研究基础设施”；“2023–2024 年：Gemini 人类数据负责人”；“2024 年至今：OpenAI — Codex 领导力与核心产品工作”。

3. “核心贡献”卡片：橙色灯泡图标。包含 5 行贡献条目，每行左侧配有一个小型方形线条图标，并在加粗的蓝色标签文字前添加橙色圆点：“Codex 领导力：领导 OpenAI 的软件工程 Agent 及其产品方向。”；“Agentic 工程：协助构建能够理解代码库、规划任务、编写代码并审查变更的系统。”；“Gemini 体验：在 DeepMind 工作期间，为 Gemini 背后的基础设施和人类数据系统做出了贡献。”；“产品与平台集成：在各类 AI 工具之间架起研究、产品与平台执行的桥梁。”；“实际应用价值：专注于帮助人们完成有意义工作的实用 Agent 工作流。” 5 个左侧图标依次为：代码括号、大脑、闪光、拼图块和带代码的用户。

4. “重要意义”卡片：星形图标。包含 4 条勾选符号列表：“将前沿 AI 与日常开发者生产力相结合。”；“助力将 Agentic AI 转化为能够执行实际工作的实用工具。”；“结合了工程深度与产品执行力。”；“影响 AI 编码系统如何演变为更广泛的工作 Agent。”

5. “成就与影响”卡片：古典柱式图标。包含一段简短描述：“Thibault Sottiaux 代表了新一代将研究、工程与产品思维融为一体的 AI 领袖。通过 Codex 以及在 OpenAI 的核心产品领导工作，他正在塑造 Agentic 软件开发和实用 AI 系统的未来。” 在此卡片右下角添加一个装饰性的蓝色 3D 微芯片插画，芯片上带有 OpenAI 的结型符号，发光的电路向外辐射，上方悬浮着一个蓝色线框大脑/云朵。

页脚：居中且带有字间距的页脚文本，内容为“AI INNOVATORS SERIES”，两侧各有两个小橙色圆点。

视觉风格：简洁的编辑类信息图，高端 SaaS/AI 品牌感，强烈的层级结构，圆角卡片，细蓝色分隔线，深海军蓝排版，橙色高光，极简阴影，高分辨率印刷级成品。

约束：保持所有文字清晰且拼写正确。使用 5 张卡片、6 条时间轴条目、5 行核心贡献条目以及 4 条重要意义列表。不要添加额外人物、除芯片上 OpenAI 结型符号以外的徽标、水印或社交媒体 UI。

[English]
Goal: Create a polished square AI innovator profile infographic about {argument name="character name" default="Thibault Sottiaux"}, styled like a modern tech magazine hero card.

Canvas: Square 1:1 layout, white background, deep cobalt blue and bright orange accent color palette, thin rounded blue border, subtle circuit traces along the bottom edge, dotted decoration and abstract network nodes in the corners. Use crisp vector layout combined with a soft watercolor portrait.

Layout: Two-column composition. The left side contains a large watercolor-style head-and-shoulders portrait at the top and a career timeline card below it. The right side contains the oversized name headline at the top, followed by a short affiliation line, then three rounded information cards stacked in a balanced grid. Add a footer label centered at the bottom.

Hero portrait: On the upper left, show a friendly smiling adult man with short brown side-parted hair, light skin, light stubble, and a black hoodie, rendered as a semi-realistic watercolor illustration with blue ink splashes behind him and thin orbital arc lines around the portrait.

Headline and top text: Large bold uppercase title in dark blue reading {argument name="headline text" default="THIBAULT SOTTIAUX"}. Under it, place a thin orange rule and the affiliation line: “OpenAI • Core Products Lead • Codex”, with orange dot separators.

Cards and content: Use exactly 5 rounded content cards, each with a blue outline, clear icon badge, and dark-blue section heading.

1. “Who He Is” card: icon of a user silhouette in a blue circle. Body text: “Thibault ‘Tibo’ Sottiaux is a Belgian software engineer and AI product leader at OpenAI. He leads Codex and helps drive core product work focused on AI systems that assist real software engineering. Before OpenAI, he worked at Google DeepMind, where he built AI/ML workflow infrastructure and later led human data work for Gemini.”

2. “Career Timeline” card: calendar icon. Include exactly 6 timeline entries with connected blue circles: “2009–2012: B.Sc., Computational & Applied Mathematics, UCLouvain”; “2012–2014: M.Sc., Computational & Applied Mathematics, UCLouvain”; “2015–2018: Google — software engineering roles”; “2018–2024: Google DeepMind — ML workflows and research infrastructure”; “2023–2024: Gemini Human Data Lead”; “2024–present: OpenAI — Codex leadership and core product work”.

3. “Key Contributions” card: orange lightbulb icon. Include exactly 5 contribution rows, each with a small square line icon on the left and an orange bullet before bold blue label text: “Codex Leadership: Leads OpenAI’s software engineering agent and its product direction.”; “Agentic Engineering: Helps build systems that understand codebases, plan tasks, write code, and review changes.”; “Gemini Experience: At DeepMind, contributed to the infrastructure and human-data systems behind Gemini.”; “Product + Platform Integration: Bridges research, product, and platform execution across AI tools.”; “Real-World Utility: Focuses on practical agentic workflows that help people do meaningful work.” The 5 left-side icons are, in order: code brackets, brain, sparkle, puzzle piece, and user-with-code.

4. “Why He Matters” card: star icon. Include exactly 4 checkmark bullets: “Connects frontier AI to everyday developer productivity.”; “Helps turn agentic AI into useful tools that do real work.”; “Combines engineering depth with product execution.”; “Influences how AI coding systems evolve into broader work agents.”

5. “Legacy” card: classical column icon. Include a short paragraph: “Thibault Sottiaux represents a new generation of AI leaders who unite research, engineering, and product thinking. Through Codex and broader core-product leadership at OpenAI, he is helping shape the future of agentic software development and practical AI systems.” Add a decorative blue 3D microchip illustration to the lower right of this card, with the OpenAI knot symbol on the chip, glowing circuit lines radiating outward, and a blue wireframe brain/cloud above it.

Footer: Centered letter-spaced footer text reading “AI INNOVATORS SERIES”, with two small orange dots on each side.

Visual style: Clean editorial infographic, premium SaaS/AI branding, strong hierarchy, rounded cards, thin blue dividers, dark navy typography, orange highlights, minimal shadows, high-resolution print-ready finish.

Constraints: Keep all text legible and spelled correctly. Use exactly 5 cards, exactly 6 timeline entries, exactly 5 key contribution rows, and exactly 4 why-it-matters bullets. Do not add extra people, logos besides the OpenAI knot on the chip, watermarks, or social media UI.
```

**来源：** [@Derya Unutmaz, MD](https://x.com/DeryaTR_/status/2075648010181062826) | 2026-07-10

---

### 📊 例 3671：日本企业物价指数 Slides

![日本企业物价指数 Slides](../images/%E6%97%A5%E6%9C%AC%E4%BC%81%E4%B8%9A%E7%89%A9%E4%BB%B7%E6%8C%87%E6%95%B0%20Slides.jpg)

**Prompt:**

```text
[中文]
目标：制作一张简洁的日本经济信息图表 Slides，总结 {argument name="report month" default="2026年6月"} 的企业商品物价指数速报。

画布：16:9 横向演示幻灯片，白色背景，带有极浅的蓝色点缀，留白充足，采用精美的企业报告设计。主文本颜色使用深蓝色，数值百分比使用明亮的中蓝色。在右下角添加一个灰色的小页码“01”。

布局：左上角放置大标题“企业物价指数，{argument name="report month" default="2026年6月"}速报”。其正下方放置蓝色副标题“国内物价は前年比+7.1%、输入物价は円ベースで+29.7%”。主要内容居中，横向排列 3 张圆角矩形统计卡片，每张卡片带有浅蓝色边框、细微阴影、淡蓝色渐变填充，左上角设有圆形图标区域，包含粗体日文类别标题、细分割线以及两行指标数据。底部左侧放置一个友好的白蓝配色机器人吉祥物，指向右上方，底部居中位置放置一句总结性语句。

统计卡片：使用 3 张卡片。卡片 1：工厂图标，标题“国内企业物价”，指标行“前月比 +0.4%”和“前年比 +7.1%”。卡片 2：货船图标，标题“输出物价（円ベース）”，指标行“前月比 +0.4%”和“前年比 +20.7%”。卡片 3：地球与集装箱/仓库图标，标题“输入物价（円ベース）”，指标行“前月比 +1.3%”和“前年比 +29.7%”。百分比数值需放大并显示为明亮的蓝色，与每行标签右侧对齐。

底部文本：底部居中处使用粗体深蓝色日文：“6月の企业物价は、国内・输出・输入で上昇が続いた”。

视觉风格：现代日本商务演示风格，清晰的矢量图标，圆角设计，柔和阴影，平衡的留白，一致的对齐方式。除 3 张卡片、机器人吉祥物和页码外，无需图表或其他额外装饰。保持所有日文文本清晰易读，并严格按照指定内容呈现。

[English]
Goal: Create a clean Japanese economic infographic slide summarizing the corporate goods price index速報 for {argument name="report month" default="2026年6月"}.

Canvas: 16:9 horizontal presentation slide, white background with very pale blue accents, ample margins, polished corporate report design. Use navy as the main text color and bright medium blue for numerical percentages. Add a small gray page number “01” at the bottom right.

Layout: Large headline at the top left reading “企業物価指数、{argument name="report month" default="2026年6月"}速報”. Directly below it, a blue subtitle reading “国内物価は前年比+7.1%、輸入物価は円ベースで+29.7%”. Center the main content as exactly 3 rounded rectangular statistic cards in one horizontal row, each with a light blue border, subtle shadow, faint blue gradient fill, a circular icon area at top left, a bold Japanese category title, a thin divider line, and two metric rows. At the bottom, place a small friendly white-and-blue robot mascot on the lower left, pointing upward, and a centered conclusion sentence.

Statistic cards: Use exactly 3 cards. Card 1: factory icon, title “国内企業物価”, metric rows “前月比 +0.4%” and “前年比 +7.1%”. Card 2: cargo ship icon, title “輸出物価（円ベース）”, metric rows “前月比 +0.4%” and “前年比 +20.7%”. Card 3: globe and container/warehouse icon, title “輸入物価（円ベース）”, metric rows “前月比 +1.3%” and “前年比 +29.7%”. Make the percentages large and bright blue, aligned to the right of each row label.

Bottom text: Centered near the bottom in bold navy Japanese: “6月の企業物価は、国内・輸出・輸入で上昇が続いた”.

Visual style: Modern Japanese business presentation, crisp vector icons, rounded corners, soft shadows, balanced whitespace, consistent alignment. No charts or extra decorations beyond the 3 cards, the robot mascot, and page number. Keep all Japanese text legible and exactly as specified.
```

**来源：** [@ちょこ雑](https://x.com/ChocottoZ63313/status/2075597887875248574) | 2026-07-10

---

### 📊 例 3752：Muse 日语信息图

![Muse 日语信息图](../images/Muse%20%E6%97%A5%E8%AF%AD%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创作一张竖版手绘风格的日语信息图，背景为点阵笔记本纸，解释 {argument name="AI model name" default="Muse"} 如何改变插图式信息图的创作，并将其定位为日语图像生成的第三种选择。

画布：4:5 竖向布局，采用温暖的米白色纸张背景，带有细微的点阵网格。使用可爱的文具剪贴簿风格，配以深蓝色手绘墨水轮廓、粉色美纹纸胶带、米色胶带、微小星光、叶子、回形针涂鸦、箭头和手绘边框线。配色方案：深蓝色、灰粉色、米色、柔灰色以及少量红/蓝色图表点缀。

顶部标题：顶部横跨一条宽大的浅粉色丝带横幅，上面印有醒目的深蓝色日语标题文字：「{argument name="headline text" default="Muse で図解制作が変わる？"}」。下方居中放置红色副标题：「{argument name="subtitle text" default="日本語の画像生成、第3の選択肢"}」。

主要布局：左侧和中心放置三张带有白色手绘轮廓的内容卡片，右侧放置一个插画风格的演示角色。使用虚线粉色箭头连接卡片，以展示工作流程。

卡片数量：共 3 张卡片。
1. 左上角卡片：粉色胶带标签，印有深蓝色粗体文字「従来 AI」。下方两行文字：「文字が弱い」以及一个气泡框「日本語も崩れる」。插图：一堆凌乱的废纸团，带有混乱的涂鸦、感叹号以及一张带有警告图标的小图表。
2. 中心卡片：粉色胶带标签「正確さ」。下方两行文字：「図表を作る」以及「コードと検索」。插图：一个类似二维码的方块、一个放大镜、一个带有红蓝柱状的条形图、一个扳手图标和一个齿轮图标。
3. 左下角卡片：粉色胶带标签「自己修正」。下方两行文字：「描き直せる」以及「手間が軽くなる」。插图：循环刷新箭头、一个小橡皮擦以及一张带有勾选标记的小图表。

右侧细节：添加一个包含 3 个已勾选项目的清单，使用英文书写：“Nano Banana Pro”、“GPT Image 2” 和 “Muse Image”。在右下角边缘附近添加一个垂直侧注，写着 “Nano Banana Pro”，旁边有两个小的空复选框。

演示角色：在右侧绘制一位友好的日本职场女性，采用简单的动漫/Q 版信息图风格，高度约为图像的三分之一。她留着 {argument name="character hair" default="肩部长度的深棕色波波头"}，戴着黑色圆框眼镜，身穿白色衬衫（袖子卷起）、深蓝色铅笔裙和深蓝色平底鞋。她微笑着，指向左侧的中心卡片。

装饰元素数量：顶部角落包含 2 条胶带，右上角附近 1 个回形针，左下角附近 1 条蓝色胶带，边缘周围有若干小星光和涂鸦卷曲，顶部和底部有细细的手绘边框线。

视觉风格：简洁但具有手工感，日本社交媒体说明图风格，手写文字清晰易读，粗马克笔风格的深蓝色轮廓，带有轻微的不完美感，柔和的粉彩色填充，无照片写实感。

约束：保持所有日语文本准确且易读，避免添加额外的标题或卡片，维持 3 张卡片的结构和 3 项清单，无水印，无写实摄影。

[English]
Goal: Create a vertical hand-drawn Japanese infographic on dotted notebook paper explaining that {argument name="AI model name" default="Muse"} changes illustrated infographic creation, positioning it as a third option for Japanese image generation.

Canvas: Portrait 4:5 layout, warm off-white cream paper background with a subtle dotted grid. Use a cute stationery scrapbook style with sketchy navy ink outlines, pink masking tape, beige tape, tiny sparkles, leaves, paperclip doodles, arrows, and hand-drawn border lines. Color palette: navy blue, dusty pink, cream, soft gray, and small red/blue chart accents.

Top header: A wide pale pink ribbon banner across the top with bold dark navy Japanese headline text: 「{argument name="headline text" default="Museで図解制作が変わる？"}」. Under it, centered red subtitle: 「{argument name="subtitle text" default="日本語の画像生成、第3の選択肢"}」.

Main layout: Three white sketch-outlined content cards on the left and center, plus an illustrated presenter character on the right. Use dashed pink arrows to connect the cards and suggest a workflow.

Card count: Exactly 3 cards.
1. Upper-left card: Pink tape label with bold navy text 「従来AI」. Below, two lines: 「文字が弱い」 and a speech bubble 「日本語も崩れる」. Illustration: a messy pile of crumpled papers with chaotic scribbles, exclamation marks, and a small chart sheet with an alert icon.
2. Center card: Pink tape label 「正確さ」. Below, two lines: 「図表を作る」 and 「コードと検索」. Illustration: a QR-code-like square, a magnifying glass, a bar chart with red and blue bars, a wrench icon, and a gear icon.
3. Lower-left card: Pink tape label 「自己修正」. Below, two lines: 「描き直せる」 and 「手間が軽くなる」. Illustration: circular refresh arrows, a small eraser, and a mini chart sheet with check marks.

Right side details: Add a checklist with exactly 3 checked items, written in English: “Nano Banana Pro”, “GPT Image 2”, and “Muse Image”. Add a vertical side note near the lower right reading “Nano Banana Pro” with two small empty checkboxes beside the margin.

Presenter character: On the right, draw a friendly Japanese businesswoman in simple anime/chibi infographic style, about one-third of the image height. She has {argument name="character hair" default="shoulder-length dark brown bob hair"}, black round glasses, a white button-up blouse with sleeves rolled up, a navy pencil skirt, and navy flats. She smiles and points left toward the central card.

Decorative element count: Include exactly 2 pieces of tape at the top corners, exactly 1 paperclip near the upper right, exactly 1 blue tape strip near the lower left, several small sparkles and doodle curls around the edges, and thin hand-drawn border strokes at the top and bottom.

Visual style: Clean but handmade, Japanese social-media explainer graphic, legible hand-lettered text, thick marker-like navy outlines, slight imperfections, soft pastel fills, no photorealism.

Constraints: Keep all Japanese text accurate and readable, avoid extra headings or extra cards, maintain the exact three-card structure and the exact three-item checklist, no watermark, no realistic photography.
```

**来源：** [@永野ヨウ](https://x.com/nagano_yoh/status/2075419556982468979) | 2026-07-10

---

### 📊 例 3772：日式鲜花碳酸饮料保鲜信息图

![日式鲜花碳酸饮料保鲜信息图](../images/%E6%97%A5%E5%BC%8F%E9%B2%9C%E8%8A%B1%E7%A2%B3%E9%85%B8%E9%A5%AE%E6%96%99%E4%BF%9D%E9%B2%9C%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张竖版日式教育信息图，总结 {argument name="headline text" default="切り花に炭酸飲料を入れる方法とメリット・デメリットまとめ"}，解释如何在花瓶水中添加碳酸饮料，并涵盖其益处、弊端、推荐稀释比例、操作步骤及更基础的护理方法。

画布：竖版 4:5 信息图，采用暖米色背景，搭配清爽的杂志风排版、柔和的马卡龙色边框、圆角信息卡片、细腻的阴影效果，营造亲切的家庭园艺氛围。平衡使用扁平化矢量图标与小型写实照片。主色调：珊瑚粉、巧克力棕、薄荷绿、淡黄、天蓝及浅灰。

顶部标题：使用醒目的日式大标题，其中关于碳酸饮料的短语用珊瑚粉色强调，其余部分为深棕色。下方添加绿色小副标题：{argument name="subtitle text" default="海外で話題の「花を長持ちさせる裏技」を正しく知って、きれいなお花を長く楽しみましょう。"}。右上角放置一张写实风格的插花照片，花瓶为透明玻璃材质，放置在木桌上，花束包含粉色非洲菊、奶油色玫瑰、白色填充花及绿植。旁边放置 2 瓶饮料：一罐红色可乐，标签为“COLA”；一瓶蓝色汽水，标签为“CIDER”。下方展示 2 张竖向的小型水质对比照片：一张为清澈的水，另一张为棕色/浑浊的水。

主要内容区：使用 2 张并排的圆角卡片。
卡片 1（左侧，淡黄色标题栏）：标题 {argument name="benefits section title" default="なぜ炭酸飲料で花が長持ちする言われるの？"}。包含 2 个带粉色圆形数字标签的益处点：1) “糖分が栄養になる”（糖分转化为能量），配方糖堆叠图标，文字说明汽水中的糖分可作为鲜花能量来源；2) “酸性成分が働く”（酸性成分的作用），配水滴图标，文字说明酸性有助于水分吸收。
卡片 2（右侧，淡粉色标题栏，带黄色警告三角图标）：标题“知っておきたいデメリット・注意点”。包含 4 个带红色 X 图标的警告点：1) 糖分易滋生细菌导致茎部腐烂；2) 水质易浑浊，影响美观；3) 深色饮料（如可乐）会改变水色，降低观赏性；4) 过量使用适得其反，高浓度可能阻碍水分吸收并导致枯萎。文字保持简洁，使用日语。

中部蓝色操作区：创建一个带蓝色边框和淡蓝色填充的宽圆角矩形，分为两列。
左列标题：“炭酸飲料の入れ方（おすすめの割合）”。包含蓝色圆形标签“おすすめの割合”及公式：“炭酸飲料：水 = 1：10 ～ 1：20程度”，附带小字示例“例：水1リットルに炭酸飲料50〜100ml”。添加“ポイント”小节，包含 2 个勾选符号：尽可能使用无色素的透明汽水；深色饮料即使少量也会染色。
右列标题：“手順”。包含 4 个带蓝色圆圈的步骤：1) 在花瓶中倒入清水；2) 按上述比例加入碳酸饮料；3) 轻微搅拌；4) 插入鲜花。添加淡黄色备注框：“水はこまめに交換しましょう（できれば毎日）”。最右侧添加一个简单的等式插图：水滴图标（“水”）加装有黄色气泡液体的玻璃杯（“炭酸飲料”）。

底部绿色护理区：一个带绿色标题的宽圆角矩形：{argument name="care section title" default="切り花を長持ちさせる基本のお手入れ（炭酸飲料より効果的！）"}。内部并排 4 张等大的护理卡片，每张包含绿色数字圆圈、简短日语标题、写实缩略图、说明文字及绿色“ポイント”标签。4 张卡片内容为：1) “茎を斜めに切り戻す”，配手持刀具斜切茎部的照片，说明有助于吸水保鲜，要点：在水中剪切以防空气进入；2) “こまめに水替え”，配向玻璃花瓶注水的照片，说明每天或隔天换水，要点：换水时修剪茎部；3) “葉が水に浸からないようにする”，配茎叶浸入花瓶的照片，说明浸水叶片腐烂会滋生细菌，要点：去除水位以下的叶片并保持通风；4) “市販の延命剤を使う”，配花瓶旁鲜花保鲜剂的照片，说明其含有营养和抗菌成分，要点：遵循产品说明。

底部总结栏：使用两个圆角框。左侧较大的淡粉色框标注“まとめ”，配小花图标，文字说明碳酸饮料在适当浓度下可辅助保鲜，但彻底的基础护理才是最重要的秘诀。右侧较小的淡粉色建议框标注“一言アドバイス”，配花瓶小图标，建议避开直射阳光和空调风，将花放置在阴凉处。

风格限制：日语排版需清晰、亲切，标题加粗；使用整齐的网格对齐和充足的留白。除指定数量外，不得添加额外部分或重复项。避免使用水印、二维码、人物或除“COLA”和“CIDER”标签外的品牌 Logo。

[English]
Goal: Create a vertical Japanese educational infographic summarizing {argument name="headline text" default="切り花に炭酸飲料を入れる方法とメリット・デメリットまとめ"}, explaining how to add carbonated soft drinks to cut flower vase water, with benefits, drawbacks, recommended dilution, procedure, and better basic care methods.

Canvas: Portrait 4:5 infographic, clean magazine-style layout on a warm off-white background, soft pastel borders, rounded information cards, subtle shadows, friendly household gardening aesthetic. Use a balanced mix of flat vector icons and small realistic photo panels. Main colors: coral pink, chocolate brown, mint green, pale yellow, sky blue, and light gray.

Top header: Large bold Japanese headline in two colors, with the phrase about carbonated drinks emphasized in coral pink and the rest in dark brown. Under it, add a smaller green subtitle: {argument name="subtitle text" default="海外で話題の「花を長持ちさせる裏技」を正しく知って、きれいなお花を長く楽しみましょう。"}. On the upper right, place a realistic photo-style bouquet in a clear glass vase on a wooden table, with pink gerbera daisies, cream roses, small white filler flowers, and greenery. Beside it show exactly 2 drink bottles/cans: one red cola can labeled “COLA” and one blue cider bottle labeled “CIDER”. Below them show exactly 2 small vertical photo panels of vase water: one clear water close-up and one brown/tinted water close-up.

Main upper content area: Use exactly 2 side-by-side rounded cards.
Card 1, left, pale yellow title bar: title text {argument name="benefits section title" default="なぜ炭酸飲料で花が長持ちする言われるの？"}. Include exactly 2 numbered benefit rows with pink circular number badges: 1) “糖分が栄養になる” with a simple icon of stacked sugar cubes, and explanatory small text saying sugar in soda may be used as flower energy; 2) “酸性成分が働く” with a blue water drop icon, and small text saying acidity may help water uptake.
Card 2, right, pale pink title bar with a yellow warning triangle icon: title “知っておきたいデメリット・注意点”. Include exactly 4 warning rows, each with a red X icon: 1) sugar can encourage miscellaneous bacteria and make stems rot; 2) water becomes cloudy easily and looks bad; 3) dark-colored drinks such as cola can color the water and reduce visual beauty; 4) too much can have the opposite effect because excessive concentration may worsen water uptake and cause wilting. Keep text concise and Japanese.

Middle blue instruction band: Create one wide rounded rectangle with a blue outline and pale blue fill. Divide into two columns.
Left column title: “炭酸飲料の入れ方（おすすめの割合）”. Include a blue circular label “おすすめの割合” and a large formula: “炭酸飲料：水 = 1：10 ～ 1：20程度”, with small example text “例：水1リットルに炭酸飲料50〜100ml”. Add a “ポイント” subsection with exactly 2 checkmark bullet points: use clear cider/soda without artificial color when possible; dark drinks such as cola can color the water even in small amounts.
Right column title: “手順”. Include exactly 4 numbered steps in blue circles: 1) put clean water in the vase; 2) add carbonated drink at the above ratio; 3) mix lightly; 4) arrange cut flowers. Add a pale yellow note box: “水はこまめに交換しましょう（できれば毎日）”. On the far right add a large simple equation illustration: water drop icon labeled “水” plus a glass with bubbly yellow liquid labeled “炭酸飲料”.

Lower green care section: A wide rounded rectangle with a green header title: {argument name="care section title" default="切り花を長持ちさせる基本のお手入れ（炭酸飲料より効果的！）"}. Inside, show exactly 4 equal care cards in a row, each with a green numbered circle, a short Japanese title, a realistic photo thumbnail, explanatory text, and a green “ポイント” label. The 4 cards must be: 1) “茎を斜めに切り戻す”, photo of a hand cutting a green stem diagonally with a knife, explain better water absorption and freshness, point: cut underwater to prevent air entry; 2) “こまめに水替え”, photo of water being poured into a glass vase, explain changing water daily or every 1–2 days, point: recut stems when changing water; 3) “葉が水に浸からないようにする”, photo of stems and leaves inside a vase, explain submerged leaves rot and cause bacteria, point: remove leaves below the waterline and improve ventilation; 4) “市販の延命剤を使う”, photo of a blue flower food packet near a vase, explain it contains nutrients and antibacterial ingredients, point: follow product instructions.

Bottom summary strip: Use two rounded boxes. Left larger pale pink box with label “まとめ”, a small flower icon, and text explaining that carbonated drinks may support flower longevity when used at the proper concentration, but thorough basic care is the most important secret. Right smaller pale pink advice box with label “一言アドバイス”, small vase-and-flower icon, and text advising to avoid direct sunlight and air-conditioner wind, and keep flowers in a cool place.

Style constraints: Japanese typography must be legible, friendly, and bold for headings; use clean grid alignment and generous spacing. Do not add extra sections or extra repeated items beyond the specified counts. Avoid watermark, QR code, people, or brand logos other than the simple “COLA” and “CIDER” labels.
```

**来源：** [@yuna｜AI×デザイン](https://x.com/good_blue_/status/2076093672932946368) | 2026-07-11

---

### 📊 例 3843：2026 年 AI 图像工具梯队排行榜

![2026 年 AI 图像工具梯队排行榜](../images/2026%20%E5%B9%B4%20AI%20%E5%9B%BE%E5%83%8F%E5%B7%A5%E5%85%B7%E6%A2%AF%E9%98%9F%E6%8E%92%E8%A1%8C%E6%A6%9C.jpg)

**Prompt:**

```text
[中文]
目标：制作一张信息密度高的日式信息图，将 {argument name="topic" default="AI 图像生成工具"} 排列为 2026 年梯队排行榜，采用高级黑、海军蓝和金色的科技美学，专为社交媒体分享而设计。

画布：正方形 1:1 海报，高分辨率，深黑色背景，带有微妙的蓝色网格线和发光的青色/金色装饰。使用醒目的日文排版、锐利的表格边框、星级评分、皇冠、徽章和应用图标风格的图标。整体外观应呈现出经过大量测试后制作的专业对比图表感。

页眉：顶部大标题：「AI 图像生成工具 Tier 表」，其中“AI”和日文为白色，“Tier 表”为金色。左上角添加一个金色徽章，写着「2026 年 最新版」。在标题上方，添加一行小字：「保存必看！迷茫时看这一张就够了」。在标题下方，添加一个蓝色轮廓的副标题栏：「用途别最强一览，完全指南」。在标题附近添加一个小金冠。

右上角选择框：添加一个带边框的面板，标题为「选择要点」，包含 4 个复选框要点：「根据想要制作的内容选择」、「了解擅长与不擅长领域」、「根据目的灵活使用」、「迷茫时从上位工具开始尝试」。

主要布局：一个大型对比表格占据图像大部分空间。左侧为梯队带，中间为工具排名行，右侧为星级评分列和价格说明。使用确定的梯队分组：SSS「压倒性最强」、SS「非常优秀」、S「优秀」、A「特化型且强大」、B「视用途而定」。梯队字母分别使用金色、青色、绿色、紫色和浅蓝色。

主表格行：包含 8 个排名工具，每个工具配有一个圆形排名奖章、方形徽标图标、工具名称、简短的日文描述和几个彩色功能标签。行内容如下：
1. {argument name="top ranked tool" default="GPT Image 2"} — 描述「综合实力 No.1 的最强模型」，徽标类似 OpenAI 的结形标志，排名奖章为带有“NEW”标签的金色。
2. Seedream 5.0 Pro — 描述「广告与商业创意最强」，蓝色螺旋徽标。
3. Nano Banana — 描述「写实照片、人物、商品最强」，黄色香蕉徽标。
4. Muse — 描述「电影般的世界观与概念艺术」，紫色 M 徽标。
5. Ideogram — 描述「文字设计与排版最强」，黑色抽象大脑/排版徽标。
6. Flux — 描述「擅长插画、艺术与 CG 表现」，蓝色三角形 Flux 徽标。
7. Recraft — 描述「Logo、图标与矢量图最强」，黑白 R 形徽标。
8. Imagen 2 — 描述「擅长自然风景与照片还原」，彩色 Google G 徽标。

评分列：使用 8 个对比列，标签为：「综合实力」、「写实/人物」、「插画/艺术」、「文字/设计」、「编辑/加工」、「商业用途」、「易用性」、「价格参考(月费)」。每行填充金色星级评分，适当包含半星/空星，最后一列为简洁的月费说明。保持表格清晰且信息密集。

底部区域：添加一个横向的“按用途分类最强”指南，标题为「用途别最强速查表」。包含 7 张带皇冠的卡片，每张包含编号、类别、徽标、工具名称和简短评价：
1. 「写实人物」 — Nano Banana — 「压倒性的真实感」。
2. 「广告・商业」 — Seedream 5.0 Pro — 「商业品质 No.1」。
3. 「综合实力」 — GPT Image 2 — 「各项指标均高水准」。
4. 「电影・世界观」 — Muse — 「电影级表现」。
5. 「文字・设计」 — Ideogram — 「文字效果精美」。
6. 「插画・艺术」 — Flux — 「擅长艺术表现」。
7. 「Logo・图标」 — Recraft — 「矢量图最强」。

右下角推荐框：添加一个发光面板，标题为「迷茫时选这些！」，配有灯泡图标和信息：「先尝试前 3 名，几乎可以覆盖所有需求！」。

页脚：添加两个深色边框的备注框。左侧框带有目标图标和两个要点：「不拘泥于单一工具，根据目的灵活切换才是最强策略！」以及「专业人士往往会组合使用多个工具，以实现质量最大化」。右侧框带有书签图标和文字：「保存起来，随时回顾！」以及「更新后会发布最新版本！」。包含一行关于价格和评分仅为 2026 年估算值的小字免责声明。

视觉风格：时尚的赛博仪表盘，黑色玻璃面板，纤细的霓虹蓝分割线，金色高光，布局紧凑有序，日文文字清晰，应用图标为白色圆角正方形，星级评分为金属质感金色，无摄影背景，无人像。

约束：保留 8 个排名工具、5 个梯队带、8 个评分列、4 个选择要点和 7 张底部用途卡片的精确数量。确保所有文字清晰易读。不要添加额外的工具、额外的卡片、水印或随机的英文标签。

[English]
Goal: Create a dense Japanese infographic ranking {argument name="topic" default="AI image generation tools"} as a 2026 tier list, with a premium black, navy, and gold tech aesthetic, designed for social media sharing.

Canvas: Square 1:1 poster, high resolution, dark black background with subtle blue grid lines and glowing cyan/gold accents. Use bold Japanese typography, sharp table borders, star ratings, crowns, badges, and app-logo style icons. Overall look should feel like a professional comparison chart made after extensive testing.

Header: Large title at top: 「AI画像生成ツール Tier表」 with “AI” and Japanese text in white, “Tier表” in gold. Add a gold badge on the upper left reading 「2026年 最新版」. Above the title, add the small line 「保存必須！迷ったらこれを見ればOK」. Under the title, add a blue outlined subtitle bar: 「用途別に最強が一目でわかる 完全ガイド」. Add a small gold crown near the title.

Top-right selection box: Add a bordered panel titled 「選び方のポイント」 with exactly 4 checkbox bullet items: 「何を作りたいかで選ぶ」, 「得意・不得意を理解する」, 「目的に合わせて使い分ける」, 「迷ったら上位から試す」.

Main layout: A large comparison table fills most of the image. Left side has tier bands, middle has ranked tool rows, right side has star-rating columns and price notes. Use exact tier groups: SSS 「圧倒的最強」, SS 「非常に優秀」, S 「優秀」, A 「特化型で強力」, B 「用途次第で活躍」. Use large tier letters in gold, cyan, green, purple, and pale blue respectively.

Main table rows: Include exactly 8 ranked tools, each with a circular rank medal, a square logo icon, a tool name, a short Japanese description, and several small colored feature tags. The rows are:
1. {argument name="top ranked tool" default="GPT Image 2"} — description 「総合力No.1の最強モデル」, logo resembling the OpenAI knot mark, rank medal gold with “NEW” label.
2. Seedream 5.0 Pro — description 「広告・商用クリエイティブ最強」, blue spiral logo.
3. Nano Banana — description 「リアル写真・人物・商品に最強」, yellow banana logo.
4. Muse — description 「映画のような世界観・コンセプトアート」, purple M logo.
5. Ideogram — description 「文字デザイン・タイポグラフィ最強」, black abstract brain/typography logo.
6. Flux — description 「イラスト・アート・CG表現が得意」, blue triangular Flux logo.
7. Recraft — description 「ロゴ・アイコン・ベクターに最強」, black-and-white R-like logo.
8. Imagen 2 — description 「自然風景・写真の再現に強い」, multicolor Google G logo.

Rating columns: Use exactly 8 comparison columns with Japanese labels: 「総合力」, 「リアル/人物」, 「イラスト/アート」, 「文字/デザイン」, 「編集/加工」, 「商用利用」, 「使いやすさ」, 「料金目安(月額)」. Fill each row with gold star ratings, including half/empty stars where appropriate, and compact monthly pricing notes in the final column. Keep the table legible but information-dense.

Bottom section: Add a horizontal “best by use case” guide titled 「用途別 最強早見表」. Include exactly 7 crowned cards, each with a number, category, logo, tool name, and short verdict:
1. 「リアル人物」 — Nano Banana — 「圧倒的リアル」.
2. 「広告・商用」 — Seedream 5.0 Pro — 「商用品質No.1」.
3. 「総合力」 — GPT Image 2 — 「なんでも高水準」.
4. 「シネマ・世界観」 — Muse — 「映画レベル」.
5. 「文字・デザイン」 — Ideogram — 「文字が綺麗」.
6. 「イラスト・アート」 — Flux — 「アート表現が得意」.
7. 「ロゴ・アイコン」 — Recraft — 「ベクター最強」.

Bottom-right recommendation box: Add a glowing panel titled 「迷ったらこれ！」 with a lightbulb icon and the message 「まずは上位から 3つ使えば ほぼ全てカバーできる！」.

Footer: Add two dark bordered note boxes. Left box with target icon and two bullet notes: 「1つのツールにこだわらず、目的に合わせて使い分けるのが最強の戦略！」 and 「プロほど複数のツールを組み合わせて、クオリティを最大化しています。」 Right box with bookmark icon and text: 「保存して、いつでも見返せるようにしよう！」 and 「アップデートされたらまた最新版に更新します！」 Include a tiny disclaimer line about pricing and ratings being estimates as of 2026.

Visual style: Sleek cyber dashboard, black glass panels, thin neon blue dividers, gold highlights, dense but organized layout, crisp Japanese text, app icons in white rounded squares, star ratings in metallic gold, no photographic background, no people.

Constraints: Preserve the exact count of 8 ranked tools, 5 tier bands, 8 rating columns, 4 selection tips, and 7 bottom use-case cards. Make all text sharp and readable. Do not add extra tools, extra cards, watermarks, or random English labels.
```

**来源：** [@CREATOR'ZZ【公式】](https://x.com/_creatorzz_/status/2075790458610204741) | 2026-07-11

---

### 📊 例 3864：推理上下文与 Prompt Cache 演示幻灯片

![推理上下文与 Prompt Cache 演示幻灯片](../images/%E6%8E%A8%E7%90%86%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%20Prompt%20Cache%20%E6%BC%94%E7%A4%BA%E5%B9%BB%E7%81%AF%E7%89%87.jpg)

**Prompt:**

```text
[中文]
目标：制作一张 16:9 的日文商务/技术信息图幻灯片，展示连续推理上下文和显式 Prompt Cache 如何提高长周期任务的效率。采用精致的 PowerPoint 原生信息图风格，包含密集但易读的说明文字。

画布：16:9 横向幻灯片，暖米白色背景，深蓝色文字，青色和橄榄绿强调色，细圆角边框，柔和阴影，宽裕的页边距。不使用照片级真实元素；使用扁平化矢量图标和清晰的排版。

顶部文本区域：在左上角放置一个醒目的大号日文标题：{argument name="headline text" default="持续推理与显式缓存提升长周期任务效率"}。下方添加一句较小的半粗体引导句：{argument name="lead text" default="通过选择性保留过往轮次的推理和可重用的 Prompt，可以提升一致性和效率，但需要根据前提变更和使用频率来设计保存范围。"}

主要布局：引导句下方并排放置两个大型圆角矩形面板。左侧面板为青色，标题为“reasoning.context”；右侧面板为橄榄绿，标题为“显式 Prompt Cache”。用细线和一个位于底部中心的小圆形链条图标连接两个面板，暗示推理上下文与缓存之间的协调。右侧面板附近有一个指向它的小型绿色向上箭头。

左侧面板细节：最左侧包含 3 个垂直堆叠的轮次标记，由带向下箭头的垂直线连接。标记分别标注为“1 轮次”、“2 轮次”和“3 轮次”。每个标记旁边显示一个小人图标和对话气泡。右侧包含 3 个水平圆角卡片，带有青色图标块和日文说明文字：1) 齿轮图标，“auto｜利用模型的默认行为”；2) 清单图标，“all_turns｜在多个轮次中重用稳定的目标、前提和优先级”；3) 时钟图标，“current_turn｜在不再需要之前推理的场景下，仅限于当前轮次”。

右侧面板细节：包含 3 个水平圆角卡片，带有橄榄色图标块和日文说明文字：1) 文档图标，“开发者指定要重用的公共前缀”；2) 数据库圆柱图标，“缓存写入成本通常为输入单价的 1.25 倍”；3) 百分比标签图标，“读取会有折扣，因此重复利用的次数决定了效果”。

底部结论栏：在底部创建一个带有细黄色边框的宽圆角矩形标注框。在标注框左侧放置一个带箭头的金色目标图标。右侧放置一句醒目的日文结论：{argument name="conclusion text" default="在提升长周期任务一致性和效率的同时，当前提发生变更时，需要设计切断过往推理或不必要缓存的机制"}。

视觉风格：日式企业幻灯片设计，清晰的矢量线条图标，圆角矩形，浅米色背景，青色左侧区域，橄榄色右侧区域，黄色结论强调，强烈的层级感，高度可读的日文无衬线字体，无装饰性杂乱元素。

约束：保留元素的精确数量：2 个主面板，3 个左侧轮次标记，3 个左侧选项卡，3 个右侧缓存卡，1 个中央链条连接器，1 个底部结论标注框，以及 1 个目标图标。不要添加额外的面板、卡片、水印、Logo 或装饰性字符。保持幻灯片内所有文字清晰易读。

[English]
Goal: Create a clean 16:9 Japanese business/technical infographic slide about how continuous reasoning context and explicit prompt caching improve long-running task efficiency. Use a polished PowerPoint-native infographic look with dense but readable explanatory text.

Canvas: 16:9 landscape slide, warm off-white background, dark navy text, teal and olive green accent colors, thin rounded borders, subtle shadows, generous margins. Leave no photo-realistic elements; use flat vector icons and crisp typography.

Top text area: Place a large bold Japanese headline at the top left: {argument name="headline text" default="継続推論と明示的キャッシュが長期タスクを効率化"}. Under it, add a smaller semibold lead sentence: {argument name="lead text" default="過去ターンの推論と再利用可能なプロンプトを選択的に保持することで一貫性と効率を高められるが、前提変更や利用回数を踏まえて保存範囲を設計する必要がある。"}

Main layout: Two large rounded rectangular panels sit side by side beneath the lead sentence. The left panel is teal and titled “reasoning.context”; the right panel is olive green and titled “明示的プロンプトキャッシュ”. Connect the panels with a thin line and a small circular chain-link icon centered between them near the bottom, suggesting coordination between reasoning context and cache. A small upward green arrow near the right panel points back toward it.

Left panel details: Include exactly 3 vertically stacked turn markers on the far left, connected by a vertical line with a downward arrow. The markers are labeled “1ターン”, “2ターン”, and “3ターン”. Next to each marker, show a small person icon and speech bubble. To the right, include exactly 3 horizontal rounded cards with teal icon blocks and Japanese explanatory text: 1) gear icon, “auto｜モデルの既定動作を利用”; 2) checklist icon, “all_turns｜安定した目標、前提、優先順位を複数ターンで再利用”; 3) clock icon, “current_turn｜以前の推論が不要になった場面で現在ターンに限定”.

Right panel details: Include exactly 3 horizontal rounded cards with olive icon blocks and Japanese explanatory text: 1) document icon, “再利用する共通プレフィックスを開発者が指定”; 2) database cylinder icon, “キャッシュ書き込みは通常入力単価の1.25倍”; 3) percent tag icon, “読み出しは割引されるため、反復利用の回数が効果を左右する”.

Bottom conclusion band: Across the bottom, create one wide rounded rectangle callout with a thin yellow border. On the left of the band place a gold target icon with an arrow. To the right, place a bold Japanese conclusion: {argument name="conclusion text" default="長期タスクの一貫性と効率を高める一方、前提変更時には過去の推論や不要なキャッシュを切り離す設計が必要"}.

Visual style: Japanese corporate slide design, crisp vector line icons, rounded rectangles, light cream background, teal left section, olive right section, yellow conclusion accent, strong hierarchy, highly legible Japanese sans-serif typography, no decorative clutter.

Constraints: Preserve the exact count of elements: 2 main panels, 3 left turn markers, 3 left option cards, 3 right cache cards, 1 central chain-link connector, 1 bottom conclusion callout, and 1 target icon. Do not add extra panels, extra cards, watermarks, logos, or decorative characters. Keep all slide text inside the infographic sharp and readable.
```

**来源：** [@炎鎮🔥 - ₿onochin -](https://x.com/super_bonochin/status/2076449091765375357) | 2026-07-12

---

### 📊 例 3882：带有蓝图叠加层的技术产品信息图

![带有蓝图叠加层的技术产品信息图](../images/%E5%B8%A6%E6%9C%89%E8%93%9D%E5%9B%BE%E5%8F%A0%E5%8A%A0%E5%B1%82%E7%9A%84%E6%8A%80%E6%9C%AF%E4%BA%A7%E5%93%81%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
关于 {argument name="product name" default="[产品名称]"} 的高级技术信息图。
仅参考图像以了解物体的形状和结构，请勿复制相同的照片、角度、构图或背景。以全新的专业写实风格重新诠释主体，要求画面整洁、光线充足，并配以合适且更具美感的背景。物体应保持真实照片质感，而非插画。添加技术蓝图风格的叠加层，包含白色线条、箭头、尺寸标注、标签以及关于零件、材质、测量数据和功能的小型图示。
构图清晰、优雅且信息丰富。
在左上角包含一个草图框，标题为“{argument name="title" default="[名称]"}”。

[English]
Premium technical infographic of {argument name="product name" default="[product name ]"}.
Use the reference image only to understand the shape and structure of the object, without copying the same photo, angle, composition, or background. Reinterpret the subject in a new professional and realistic photograph, clean and well-lit, with a suitable and more aesthetic background. Keep the object as a real photo, not an
illustration. Add a technical blueprint-style overlay with white lines, arrows, dimensions, labels, and small diagrams of parts, materials, measurements, and functionality.
Clear, elegant, and informative composition.
Include a sketch box in the upper left corner with the title "{argument name="title" default="[name]"} ".
```

**来源：** [@Al-Shamus](https://x.com/im_shahid7/status/2076325223490888066) | 2026-07-12

---

### 📊 例 3900：Pachinko 物理调试布局

![Pachinko 物理调试布局](../images/Pachinko%20%E7%89%A9%E7%90%86%E8%B0%83%E8%AF%95%E5%B8%83%E5%B1%80.jpg)

**Prompt:**

```text
[中文]
目标：创建一个深色调的 Pachinko 机器项目布局技术调试可视化图，展示球体通道、碰撞轨道、钉子、命名的游戏区域以及模拟的球体轨迹。

画布：4:5 比例的方形技术图表，背景为近乎黑色的酒红色，具有透明工程叠加层的质感。在布局后方使用深栗色的块状矩形障碍物轮廓网格。

主要布局：绘制一个占据几乎整个画布的大型 Pachinko 项目。项目由粗壮的角状金棕色轨道构成：外围有一个大的椭圆形/八边形环，中央空心区域周围有一个大的多边形内环，底部和右下角有几个短轨道段。保持轨道厚实、带有斜角且略微半透明，看起来像调试用的碰撞几何体。

轨迹路径：在轨道和通道上添加 5 条细长的霓虹灯球体路径轨迹：1 条青色路径紧贴最左侧的发射通道，1 条亮粉色路径在左边缘和底部出口附近穿梭，1 条柠檬绿路径从左上角弯曲穿过左中区域并向下延伸至底部，1 条红色路径急剧穿过左中和左上区域，以及 1 条黄色路径沿着左侧外弧线移动。路径应相互重叠，看起来像模拟的 Pachinko 球体运动，带有急转弯和曲线段。

调试区域：绘制青色虚线矩形区域框，并带有小型青色标签。包含 7 个标记区域：“region:JACKPOT_1”位于左中，“region:STATIC”位于左下/中部附近，“region:START”位于中下部，“region:LUCKY”位于右下中部，“region:LAUNCHER”位于右下角，“region:OUT”位于左下出口区域，以及沿左侧的一条长虚线发射/通道区域。

钉子与标签：添加 15 个小型绿色方形钉子标记，并配有绿色调试标签。将它们放置在中央项目周围：2 个靠近左上角，标记为“peg-left-top-1”和“peg-left-top-2”；3 个靠近顶部中心，标记为“peg-center-top-1”、“peg-center-top-2”和“peg-1”；3 个在右上角，标记为“peg-right-top-1”、“peg-right-top-2”和“peg-right-path-2”；3 个在右下/右中，标记为“peg-right-path-1”、“peg-lucky-guide”和“peg-right-pocket-1”；4 个在左下/左中，标记为“peg-left-path-1”、“peg-left-pocket-1”、“peg-start-left”和“peg-start-right”。标签应保持小巧、纤细且为绿色，如同游戏引擎编辑器的叠加层。

其他细节：在左中部的 Jackpot 区域附近包含一个微小的青色数字框，显示“19”。在左上通道附近添加一些红色引导三角形和线条碎片。该图表应看起来像 GPT 生成的游戏布局审查截图，而非精美的 UI 艺术作品。

视觉风格：低光调试渲染，深栗色和黑色调色板，金色碰撞轨道，青色虚线 UI 叠加层，绿色钉子注释，霓虹轨迹线。无写实感，无角色，无真实的 Pachinko 机器机柜，无装饰性动漫艺术。

可自定义概念：将布局构建为 {argument name="machine type" default="pachinko"} 物理调试地图，标题隐含 {argument name="gameplay focus" default="ball trajectory and lane review"}。使用轨道颜色 {argument name="rail color" default="muted golden brown"}，背景颜色 {argument name="background color" default="near-black burgundy"}，以及轨迹颜色 {argument name="trajectory colors" default="cyan, hot pink, lime green, red, yellow"}。

[English]
Goal: Create a dark technical debug visualization of a pachinko machine playfield layout, showing ball lanes, collision rails, pegs, named gameplay regions, and simulated ball trajectories.

Canvas: Square-ish 4:5 technical diagram on a nearly black burgundy background, with a transparent-engineering-overlay feel. Use a dark maroon grid of blocky rectangular obstacle silhouettes behind the layout.

Main layout: Draw a large pachinko board occupying almost the full canvas. The board is formed by thick angular golden-brown rails: one large outer oval/octagonal loop around the perimeter, one large inner polygonal ring around an empty central dark void, and several short rail segments near the bottom and lower-right. Keep the rails chunky, beveled, and slightly translucent, like debug collision geometry.

Trajectory paths: Add exactly 5 thin neon ball-path traces over the rails and lanes: 1 cyan path hugging the far-left launch lane, 1 hot pink path weaving near the left edge and bottom exit, 1 lime green path that curves from the upper-left across the mid-left and down to the bottom, 1 red path that crosses sharply through the left-middle and upper-left, and 1 yellow path following the outer left arc. The paths should overlap and look like simulated pachinko ball travel, with sharp turns and curved segments.

Debug regions: Draw dashed cyan rectangular region boxes with small cyan labels. Include exactly 7 labeled regions: "region:JACKPOT_1" at left-middle, "region:STATIC" near the lower-left/middle, "region:START" centered lower-middle, "region:LUCKY" right-lower-middle, "region:LAUNCHER" bottom-right, "region:OUT" lower-left exit area, and one tall dashed launch/channel region along the left side.

Pegs and labels: Add exactly 15 small green square peg markers with green debug labels. Place them around the central playfield: 2 near the upper-left labeled "peg-left-top-1" and "peg-left-top-2"; 3 near the top center labeled "peg-center-top-1", "peg-center-top-2", and "peg-1"; 3 on the upper-right labeled "peg-right-top-1", "peg-right-top-2", and "peg-right-path-2"; 3 on the lower-right/lower-middle labeled "peg-right-path-1", "peg-lucky-guide", and "peg-right-pocket-1"; 4 in the lower-left/lower-middle labeled "peg-left-path-1", "peg-left-pocket-1", "peg-start-left", and "peg-start-right". Make labels small, thin, and green, as if from a game-engine editor overlay.

Additional details: Include one tiny cyan number box reading "19" near the left-middle jackpot area. Add a few small red guide triangles and line fragments near the top-left lane. The diagram should look like a GPT-generated game-layout review screenshot rather than polished UI art.

Visual style: Low-light debug render, dark maroon and black palette, golden collision rails, cyan dashed UI overlays, green peg annotations, neon trajectory lines. No photorealism, no characters, no real pachinko machine cabinet, no decorative anime art.

Customizable concept: Build the layout as a {argument name="machine type" default="pachinko"} physics debug map titled by implication around {argument name="gameplay focus" default="ball trajectory and lane review"}. Use rail color {argument name="rail color" default="muted golden brown"}, background color {argument name="background color" default="near-black burgundy"}, and trajectory colors {argument name="trajectory colors" default="cyan, hot pink, lime green, red, yellow"}.
```

**来源：** [@Maoku](https://x.com/Maoku/status/2076296169307967967) | 2026-07-12

---

### 📊 例 3929：ASMR 开箱分镜信息图

![ASMR 开箱分镜信息图](../images/ASMR%20%E5%BC%80%E7%AE%B1%E5%88%86%E9%95%9C%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个简洁、高级的产品 ASMR 开箱视频分镜信息图。设计规范：白色背景，现代极简布局。顶部标题：STORYBOARD。产品名称以绿色粗体显示（替换为：{argument name="product name" default="[产品名称]"}）。副标题：ASMR UNBOXING。在标题下方包含四个信息框：时长：30 秒，风格：第一人称视角 (POV) 手部特写、ASMR，受众：{argument name="audience" default="18–35 岁"}，音频建议：柔和 ASMR • 揉捏声 • 轻敲声 • 倾倒声。创建 {argument name="number of panels" default="12"} 个分镜面板，按 3 列 × 4 行网格排列。每个面板应包含：一个绿色数字徽章 (1–12)、时间戳 (0–2.5s, 2.5–5s 等)、展示场景的逼真电影感图像、手写风格的白色涂鸦文字，如：TA-DA! POP! WOW! PICK! CRINKLE~ TEAR! POUR~ HOT WATER STIR~ SMOOTH! BEST! 每张图像下方有三个文本部分：视觉 (VISUAL)：动作 (ACTION)：对话 (DIALOGUE)：使用逼真的产品摄影、暖色调木桌、柔和自然光、浅景深、仅限第一人称视角 (POV) 手部（不露脸）、高端商业广告风格。分镜序列：1 (0–2.5s) 视觉：木桌上的产品盒。动作：手进入画面并指向盒子。对话：“你试过这个吗？” 2 (2.5–5s) 视觉：打开盒子。动作：缓慢掀开顶盖。对话：“让我们一起开箱吧。” 3 (5–7.5s) 视觉：整齐排列的多个独立小袋。动作：完全展示内部。对话：“哇，看这里有多少！” 4 (7.5–10s) 视觉：拿起一个小袋。动作：取出一个条状包装。对话：“我们先从一个开始。” 5 (10–12.5s) 视觉：小袋特写。动作：握住并轻轻揉捏。对话：“这个揉捏声真治愈。” 6 (12.5–15s) 视觉：撕开顶部。动作：缓慢的 ASMR 撕开动作。对话：“轻轻撕开一小口。” 7 (15–17.5s) 视觉：可见内部粉末。动作：展示粉末特写。对话：“看起来很美味。” 8 (17.5–20s) 视觉：将粉末倒入杯中。动作：缓慢倾倒。对话：“全部倒进去。” 9 (20–22.5s) 视觉：倒入热水。动作：可见蒸汽。对话：“加入热水。” 10 (22.5–25s) 视觉：搅拌饮料。动作：缓慢画圈搅拌。对话：“搅拌均匀。” 11 (25–27.5s) 视觉：成品饮料。动作：从上方展示奶油质感。对话：“看起来顺滑又浓郁。” 12 (27.5–30s) 视觉：产品盒放在成品饮料旁，并竖起大拇指。动作：手部竖起大拇指。对话：“简单、美味，搞定！” 页脚：总时长：30 秒，格式：竖屏 (9:16)，风格：第一人称视角 (POV) 手部特写、ASMR 开箱。排版应类似于专业创意代理公司的分镜稿，具有整洁的间距、绿色点缀、圆角面板边框，以及适合客户提案的高端呈现效果。

[English]
Create a clean, premium storyboard infographic for a product ASMR unboxing video. Design specifications: White background with a modern, minimalist layout. Title at the top: STORYBOARD. Product name in bold green (replace with: {argument name="product name" default="[PRODUCT NAME]"}). Subtitle: ASMR UNBOXING. Include four information boxes below the title: Duration: 30 Seconds, Style: POV Hands, ASMR, Audience: {argument name="audience" default="18–35 years old"}, Audio Suggestion: Soft ASMR • Crinkles • Tapping • Pouring. Create {argument name="number of panels" default="12"} storyboard panels arranged in a 3-column × 4-row grid. Each panel should contain: A numbered green badge (1–12), Timestamp (0–2.5s, 2.5–5s, etc.), A realistic cinematic image showing the scene, Handwritten white doodle text like: TA-DA! POP! WOW! PICK! CRINKLE~ TEAR! POUR~ HOT WATER STIR~ SMOOTH! BEST! Three text sections below every image: VISUAL: ACTION: DIALOGUE: Use realistic product photography, warm wooden table, soft natural lighting, shallow depth of field, POV hands only (no face visible), premium commercial advertising style. Storyboard sequence: 1 (0–2.5s) Visual: Product box on wooden table. Action: Hands enter frame and point to the box. Dialogue: "Have you tried this before?" 2 (2.5–5s) Visual: Opening the box. Action: Lift the top flap slowly. Dialogue: "Let's unbox it together." 3 (5–7.5s) Visual: Multiple individual sachets neatly arranged. Action: Fully reveal the inside. Dialogue: "Wow, look how many!" 4 (7.5–10s) Visual: Pick up one sachet. Action: Remove a single stick pack. Dialogue: "Let's start with one." 5 (10–12.5s) Visual: Close-up of sachet. Action: Hold and gently crinkle it. Dialogue: "That crinkle sound is satisfying." 6 (12.5–15s) Visual: Tear open the top. Action: Slow ASMR tearing. Dialogue: "Just a small tear." 7 (15–17.5s) Visual: Powder visible inside. Action: Show the powder close-up. Dialogue: "Looks delicious." 8 (17.5–20s) Visual: Pour powder into mug. Action: Slow pouring. Dialogue: "Pour everything in." 9 (20–22.5s) Visual: Hot water being poured. Action: Steam visible. Dialogue: "Add hot water." 10 (22.5–25s) Visual: Stir drink. Action: Slow circular stirring. Dialogue: "Mix it well." 11 (25–27.5s) Visual: Finished drink. Action: Show creamy texture from above. Dialogue: "Looks smooth and creamy." 12 (27.5–30s) Visual: Product box beside finished drink with thumbs up. Action: Hand gives thumbs up. Dialogue: "Easy, delicious, and ready!" Footer: Total Duration: 30 Seconds, Format: Vertical (9:16), Style: POV Hands, ASMR Unboxing. Typography should resemble a professional creative agency storyboard, with clean spacing, green accents, rounded panel borders, and high-end presentation suitable for client pitches.
```

**来源：** [@Ciri](https://x.com/Ciri_ai/status/2076202198888022135) | 2026-07-12

---

### 📊 例 4054：90 年代游戏攻略指南页面

![90 年代游戏攻略指南页面](../images/90%20%E5%B9%B4%E4%BB%A3%E6%B8%B8%E6%88%8F%E6%94%BB%E7%95%A5%E6%8C%87%E5%8D%97%E9%A1%B5%E9%9D%A2.jpg)

**Prompt:**

```text
架空のゲームの攻略本のページの画像を作成。{argument name="発売年" default="1995年"}発売のゲーム
```

**来源：** [@SSSS.CRYPTOMAN⚡️AI](https://x.com/SSSS_CRYPTOMAN/status/2077142696666571167) | 2026-07-14

---

### 📊 例 4084：韩语信息图表工作表批处理

![韩语信息图表工作表批处理](../images/%E9%9F%A9%E8%AF%AD%E4%BF%A1%E6%81%AF%E5%9B%BE%E8%A1%A8%E5%B7%A5%E4%BD%9C%E8%A1%A8%E6%89%B9%E5%A4%84%E7%90%86.jpg)

**Prompt:**

```text
[中文]
目标：创建一个宽幅联络表预览，展示由英语考试文章生成的 12 份韩语课堂信息图表工作表，以缩略图形式排列，便于对比和批量审阅。

画布：浅灰色背景上的 16:9 宽幅横向图像，留有充足的页边距。将 12 个纵向 A4 风格的页面缩略图放置在整洁的网格中：顶部一行 6 页，底部一行 6 页。每个页面都有白色纸张边框、细微的投影，下方居中处有一个从 1 到 12 的黑色小数字。

布局：每个缩略图都是一张色彩丰富、密集的韩语教育信息图表页面，专为高中英语阅读理解设计。使用统一的工作表风格：顶部标题横幅、左上角的小型来源标签、带有编号步骤的分区模块、卡通学生/教师、简单的图标、迷你图表、示意图、箭头、标注框以及底部附近的简短摘要框。页面在放大时应呈现为可阅读的韩语教育海报，但在联络表中保持缩略图大小。

页面：包含 12 个不同的信息图表页面，编号和标题如下：1. “사회사의 핵심 구성”（社会史的核心构成）；2. “낯선 숲에서 커지는 불안”（在陌生的森林中增长的焦虑）；3. “좋은 글은 많은 해석을 낳는다”（好文章产生多种解读）；4. “진화와 생태계의 조화”（进化与生态系统的和谐）；5. “공정 중간 정보와 전략 변화”（过程中的信息与策略变化）；6. “빛의 만남: 그림 물자의 에너지 영향”（光的相遇：光物质的能量影响）；7. “미디어 변화와 맞춤형 광고”（媒体变化与个性化广告）；8. “나라별 삶의 만족도 차이”（各国生活满意度差异）；9. “시련을 넘어 다시 도전한 선수”（克服磨难再次挑战的运动员）；10. “작은 돌이 행성으로 모이는 과정”（小石块聚集成行星的过程）；11. “서비스 가격은 왜 자주 바뀌는가”（为什么服务价格经常变动）；12. “단순 노출 효과”（单纯曝光效应）。

视觉风格：明亮的韩语教科书信息图表设计，柔和的粉彩背景，海军蓝和青色的标题栏，圆角内容卡片，友好的卡通人物，小型装饰性学术图标，简洁的矢量插图，以及细彩色的分隔线。采用精致的课堂讲义美学，而非照片写实风格。在保持整体批次视觉一致性的同时，使页面在颜色和图表类型上有所变化。

文本内容：工作表缩略图中全程使用韩语文本。主标题应清晰易读；较小的正文内容可以密集，但应类似于真实的韩语教育材料。使用可自定义的整体主题集 {argument name="topic set" default="Korean English exam passage infographic worksheets"}，并保持页面标题风格基于 {argument name="language" default="Korean"}。

约束：不要展示人物手持页面的画面。不要创建单个放大的工作表；图像必须是包含 12 个纵向缩略图且下方带有 12 个数字的批处理联络表。避免出现水印、应用 UI、浏览器界面或页码之外的额外说明文字。

[English]
Goal: Create a wide contact-sheet preview showing exactly 12 Korean classroom infographic worksheets generated from English exam passages, arranged as miniature pages for comparison and batch review.

Canvas: Wide horizontal 16:9 image on a light gray background, with generous margins. Place 12 portrait-oriented A4-style page thumbnails in a clean grid: 6 pages across the top row and 6 pages across the bottom row. Each page has a white paper border, subtle drop shadow, and a small black number centered underneath from 1 to 12.

Layout: Each thumbnail is a dense, colorful educational infographic page in Korean, designed for high school English reading comprehension. Use a consistent worksheet style: top title banner, small source label at the upper left, section blocks with numbered steps, cartoon students/teachers, simple icons, mini charts, diagrams, arrows, callout boxes, and a short summary box near the bottom. The pages should look readable as Korean educational posters when zoomed in but remain thumbnail-sized in the contact sheet.

Pages: Include exactly 12 distinct infographic pages, numbered and titled as follows: 1. “사회사의 핵심 구성” about the core components of society; 2. “낯선 숲에서 커지는 불안” about anxiety growing in an unfamiliar forest; 3. “좋은 글은 많은 해석을 낳는다” about good writing producing many interpretations; 4. “진화와 생태계의 조화” about evolution and ecological balance; 5. “공정 중간 정보와 전략 변화” about mid-process information and changing strategies; 6. “빛의 만남: 그림 물자의 에너지 영향” about light interactions and energy effects; 7. “미디어 변화와 맞춤형 광고” about media change and personalized advertising; 8. “나라별 삶의 만족도 차이” about differences in life satisfaction by country; 9. “시련을 넘어 다시 도전한 선수” about an athlete overcoming trials and trying again; 10. “작은 돌이 행성으로 모이는 과정” about small rocks forming planets; 11. “서비스 가격은 왜 자주 바뀌는가” about why service prices change often; 12. “단순 노출 효과” about the mere exposure effect.

Visual style: Bright Korean textbook infographic design, soft pastel backgrounds, navy and teal title headers, rounded content cards, friendly cartoon characters, small decorative academic icons, clean vector illustrations, and thin colored dividers. Use a polished classroom handout aesthetic, not photorealistic. Make the pages varied in color and diagram type while keeping them visually consistent as one batch.

Text content: Use Korean text throughout the worksheet thumbnails. The main titles should be legible; smaller body text may be dense but should resemble authentic Korean educational material. Use the customizable overall topic set as {argument name="topic set" default="Korean English exam passage infographic worksheets"}, and keep the page title style based on {argument name="language" default="Korean"}.

Constraints: Do not show people holding the pages. Do not create a single enlarged worksheet; the image must be a batch contact sheet with exactly 12 portrait thumbnails and exactly 12 numbers beneath them. Avoid watermarks, app UI, browser chrome, or extra captions outside the page numbers.
```

**来源：** [@flowedu](https://x.com/flow_edu_/status/2077017066453024908) | 2026-07-14

---

### 📊 例 4438：日语 AI 字幕缩略图

![日语 AI 字幕缩略图](../images/%E6%97%A5%E8%AF%AD%20AI%20%E5%AD%97%E5%B9%95%E7%BC%A9%E7%95%A5%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张极具冲击力的日语 YouTube 缩略图，主题是利用 AI 自动生成视频字幕/电视字幕（Telop），并展示从 Vrew 到 Claude Code 的戏剧性对比。

画布：16:9 横向缩略图，1200×675 规格，针对 YouTube 进行优化。背景使用深色模糊的视频剪辑时间轴界面，紫色和蓝色的时间轴轨道以及细小的片段块清晰可见但处于虚焦状态。

布局：在顶部放置一个醒目的粗体日语标题 {argument name="top headline" default="AI でテロップを自動作成"}。文字应为白色，带有粗黑色描边和额外的细白色外描边，略微倾斜且间距紧凑，以实现最大视觉冲击力。在左中位置放置一个巨大的白色对话气泡投诉框，带有黑色描边，右下角有一个小指针。气泡内使用粗体黑色日语文本书写投诉内容，最后一行用红色强调并配有黄色下划线：{argument name="complaint text" default="誤字脱字多すぎるし、テロップはズレまくってるし、変なところで改行するし、そのくせにそれ以外のことは何もできないって...\nVrew マジで使えんw"}。在中心偏右位置放置两个应用风格的 Logo 图块：总共 2 个 Logo。Logo 1 是一个青蓝色圆角方形的 Vrew 风格图标，带有白色 V 标记，位于中心附近，部分被一个小橙色像素化吉祥物/虫子形状遮盖。Logo 2 是一个较大的橙红色圆角方形 Claude 风格图标，带有白色放射状星爆，位于右上角，顶部右侧倾斜戴着一顶闪亮的金色皇冠。在橙色图标下方添加一个白色标签，用粗体黑色文字写着 {argument name="tool label" default="Claude Code"}。在两个 Logo 之间，添加 1 个带有白色描边的红色弧形箭头，从蓝色 Logo 指向橙色 Logo。

底部文字：在底部三分之一处填入一个巨大的日语结论短语 {argument name="bottom headline" default="これで全て解決"}。使用粗圆体显示字形，填充明亮的黄色渐变，配以厚重的黑色描边和发光的白色外描边。文字应覆盖背景并部分置于中心图形前方，营造出一种喧闹的缩略图构图。

视觉风格：日语病毒式科技缩略图，对比度极高，构图密集，夸张的描边、投影、白色发光效果、饱和的色彩，黑色背景氛围，风格紧迫且幽默。确保所有日语文本清晰、易读且拼写正确。

包含的独立元素：1 个顶部标题，1 个对话气泡，2 个应用 Logo，1 个橙色吉祥物/虫子形状，1 个红色弧形箭头，1 个金色皇冠，1 个 Claude Code 标签，以及 1 个巨大的底部标题。不要添加额外的 Logo、人物、水印或不相关的文字。

[English]
Goal: Create a high-impact Japanese YouTube thumbnail about automatically generating video captions/telops with AI, featuring a dramatic comparison from Vrew to Claude Code.

Canvas: 16:9 horizontal thumbnail, 1200×675 style, optimized for YouTube. Use a dark blurred video-editing timeline interface as the full background, with purple and blue timeline tracks and small clip blocks visible but out of focus.

Layout: Put a huge bold Japanese headline across the top reading {argument name="top headline" default="AIでテロップを自動作成"}. The letters should be white with thick black outline and an additional thin white outer stroke, slightly tilted and tightly spaced for maximum impact. Place one large white speech-bubble complaint box on the left-middle with a black outline and a small pointer at the bottom right. Inside it, use bold black Japanese text for the complaint and a red emphasized final line with a yellow underline: {argument name="complaint text" default="誤字脱字多すぎるし、テロップはズレまくってるし、変なところで改行するし、そのくせにそれ以外のことは何もできないって...\nVrewマジで使えんw"}. Place two app-style logo tiles in the center-right: exactly 2 logos total. Logo 1 is a cyan-blue rounded square Vrew-like icon with a white V mark, located near the center, partially overlapped by a small orange pixelated mascot/bug shape. Logo 2 is a larger orange-red rounded square Claude-like icon with a white radial starburst, located to the upper right, with a shiny gold crown tilted on its top-right corner. Add a small white label under the orange icon reading {argument name="tool label" default="Claude Code"} in bold black text. Between the two logos, add exactly 1 curved red arrow with a white outline pointing from the blue logo toward the orange logo.

Bottom text: Fill the bottom third with one enormous Japanese conclusion phrase reading {argument name="bottom headline" default="これで全て解決"}. Make it thick rounded display lettering with a bright yellow gradient fill, heavy black outline, and glowing white outer stroke. The text should overlap the background and partly sit in front of the center graphics, creating a loud thumbnail composition.

Visual style: Japanese viral tech thumbnail, extremely bold contrast, dense composition, exaggerated outlines, drop shadows, white glow effects, saturated colors, black background atmosphere, urgent and humorous tone. Make all Japanese text crisp, legible, and correctly spelled.

Discrete elements to include: exactly 1 top headline, exactly 1 speech bubble, exactly 2 app logos, exactly 1 orange mascot/bug shape, exactly 1 red curved arrow, exactly 1 gold crown, exactly 1 Claude Code label, and exactly 1 huge bottom headline. Do not add extra logos, people, watermarks, or unrelated text.
```

**来源：** [@河村 風真｜Fuma Kawamura](https://x.com/fumanpnp/status/2078412534810603849) | 2026-07-18

---

### 📊 例 4440：插画风旅游日历海报

![插画风旅游日历海报](../images/%E6%8F%92%E7%94%BB%E9%A3%8E%E6%97%85%E6%B8%B8%E6%97%A5%E5%8E%86%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
[中文]
创作一张 {argument name="year" default="[年份]"} 年美学插画日历海报，让同一位成熟的 {argument name="subject" default="[女性/男性/人物]"}（上传照片 100% 还原面部）出现在 {argument name="location" default="[地点]"} 的 12 个热门旅游景点中，并搭配不同的服装与心情。艺术风格应为柔和的水彩 + 水墨素描，线条干净利落，并带有轻微的纹理阴影。🎨✨ 人物面部表情生动。

[English]
Create a {argument name="year" default="[YEAR]"} aesthetic illustrated calendar poster featuring the same mature {argument name="subject" default="[WOMAN/MAN/PERSON]"} (uploaded photo reference face 100%) across all 12 popular and tourist locations of {argument name="location" default="[LOCATION]"} in different outfits and moods. The artwork should be in a soft watercolor + ink sketch style with clean hand-drawn linework and light textured shading. 🎨✨ The character has an expressive face.
```

**来源：** [@Saul Goodman](https://x.com/Goodmanprotocol/status/2078398691464163831) | 2026-07-18

---

### 📊 例 4490：三步拥有幸福人生信息图

![三步拥有幸福人生信息图](../images/%E4%B8%89%E6%AD%A5%E6%8B%A5%E6%9C%89%E5%B9%B8%E7%A6%8F%E4%BA%BA%E7%94%9F%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创作一张简洁的中文自我提升插画信息图，标题为 {argument name="headline text" default="三步拥有幸福人生"}，将幸福呈现为三个像说明书一样可执行的小步骤。

画布：宽屏 16:9 白色背景，留白充裕，采用极简主义编辑海报布局。所有插图和巨大的步骤数字均使用红橙色马克笔手绘风格，正文使用黑色中文字体。整体感觉：温暖、治愈、简洁、实用，类似于微信文章的封面插图。

标题：顶部居中放置一个巨大的粗糙手写红橙色标题：「三步拥有幸福人生」，两侧带有小巧的红色装饰笔触。下方添加一行黑色小副标题：「像说明书一样，把幸福拆成可执行的小步骤」。

布局：画布下三分之二处分为三个等宽列，通过从左向右的红橙色虚线箭头在视觉上连接。每一列上方有一个涂鸦插图，下方依次为红色细分割线、步骤标签、巨大的红色步骤数字、加粗的黑色标题以及三行简短的黑色说明文字。共包含 3 个步骤。

第 1 列（左）：部分标签「准备」。巨大的红色数字「01」，后接加粗标题「先照顾自己」。正文包含 3 行文字：「睡够一点」，「吃好一点，动一动」，「把身体和情绪放回正位」。插图：一个简单的笑脸小人坐在枕头或床边，手里拿着一个冒热气的杯子；包含一个小太阳笑脸涂鸦、一个心形对话气泡，营造舒适的休息与自我关怀氛围。

第 2 列（中）：部分标签「操作」。巨大的红色数字「02」，后接加粗标题「认真投入」。正文包含 3 行文字：「每天做好一件重要的小事」，「专注、练习、持续积累」，「让生活慢慢长出方向感」。插图：一个人在笔记本上书写，另一个人在阅读一本打开的书，一个小孩子正在给花盆上有心形图案的盆栽浇水；包含一个清单剪贴板、时钟、书籍、虚线运动箭头、成长箭头，以及一株象征进步的高大嫩芽。

第 3 列（右）：部分标签「完成」。巨大的红色数字「03」，后接加粗标题「分享与感恩」。正文包含 3 行文字：「和喜欢的人保持连接」，「表达感谢，也庆祝小成就」，「幸福会在分享中放大」。插图：两个简单的笑脸小人碰杯，一篮带有心形图案的苹果，一个笑脸太阳，一个心形对话气泡，以及一个带有对勾的小奖章。

视觉风格：红橙色线条应呈现出略微不完美且富有质感的笔触，如同蜡笔或马克笔绘制。文字应清晰易读，标题使用加粗无衬线中文字体，说明文字使用较小的黑色无衬线字体。保持设计简洁、平衡、友好且高对比度。

约束：包含 3 个列和 3 个编号步骤：01、02、03。严格保留指定的中文文本。不要添加额外的面板、照片、渐变、阴影、水印、Logo 或额外的说明段落。

[English]
Goal: Create a clean illustrated Chinese self-improvement infographic titled {argument name="headline text" default="三步拥有幸福人生"}, presenting happiness as three executable small steps like an instruction manual.

Canvas: Wide horizontal 16:9 white background, airy margins, minimalist editorial poster layout. Use a hand-drawn red-orange marker style for all illustrations and large step numbers, with black Chinese body text. Overall feeling: warm, encouraging, simple, practical, like a WeChat article cover illustration.

Header: Center a large rough handwritten red-orange headline at the top: 「三步拥有幸福人生」, with small decorative red strokes on both sides. Under it, add a small black subtitle: 「像说明书一样，把幸福拆成可执行的小步骤」.

Layout: Three equal columns across the lower two-thirds of the canvas, connected visually by red-orange dotted arrows moving left to right. Each column has one doodle illustration above, a thin red divider line, then a step label, huge red step number, bold black title, and three short black lines of explanatory text. Use exactly 3 steps.

Step 1 column, left: Section label 「准备」. Huge red number 「01」 followed by bold title 「先照顾自己」. Body text has exactly 3 lines: 「睡够一点」, 「吃好一点，动一动」, 「把身体和情绪放回正位」. Illustration: a simple smiling person sitting on the floor beside a pillow or bed, holding a steaming mug; include a small smiling sun doodle, a heart speech bubble, and cozy rest/self-care feeling.

Step 2 column, center: Section label 「操作」. Huge red number 「02」 followed by bold title 「认真投入」. Body text has exactly 3 lines: 「每天做好一件重要的小事」, 「专注、练习、持续积累」, 「让生活慢慢长出方向感」. Illustration: a person writing in a notebook, another person reading an open book, a small child watering a potted plant with a heart on the pot; include a checklist clipboard, a clock, books, dotted motion arrows, growth arrows, and a tall sprouting plant to symbolize progress.

Step 3 column, right: Section label 「完成」. Huge red number 「03」 followed by bold title 「分享与感恩」. Body text has exactly 3 lines: 「和喜欢的人保持连接」, 「表达感谢，也庆祝小成就」, 「幸福会在分享中放大」. Illustration: two simple smiling people clinking mugs or cups, a basket of apples with a heart, a smiling sun, a heart speech bubble, and a small award ribbon with a check mark.

Visual style: Red-orange sketch lines should look slightly imperfect and textured, as if drawn with a wax crayon or marker. Text should be crisp and readable, using bold sans-serif Chinese for headings and smaller black sans-serif for descriptions. Keep the design uncluttered, balanced, friendly, and high contrast.

Constraints: Include exactly 3 columns and exactly 3 numbered steps: 01, 02, 03. Preserve the visible Chinese text exactly as specified. Do not add extra panels, photos, gradients, shadows, watermarks, logos, or additional explanatory paragraphs.
```

**来源：** [@小小东](https://x.com/xiaoxiaodong01/status/2078869781189677408) | 2026-07-19

---

### 📊 例 4626：平等合作商业信息图

![平等合作商业信息图](../images/%E5%B9%B3%E7%AD%89%E5%90%88%E4%BD%9C%E5%95%86%E4%B8%9A%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：创作一张垂直的韩语商业/职业信息图海报，对比“客户是老板，员工是下属”的剥削心态与平等合作心态。采用精致的编辑插画风格，结合半写实卡通人物、戏剧性的分屏叙事以及醒目的韩语排版。

画布：垂直 9:16 海报，暖色调奶油纸背景，高分辨率，清晰且适合打印的构图。顶部三分之一处包含醒目的深蓝色韩语标题：{argument name="headline text" default="돈을 주는 사람이\n무조건 갑일까?"}（意为：付钱的人就一定是“甲”吗？）。在标题周围添加细小的放射状强调线。

布局：将主插画分为左右两个垂直部分。左侧色调阴暗、拥挤、呈红褐色，充满压抑感；右侧明亮、通透、呈蓝色，展现专业感。一名处于中心位置的商务人士连接着两个世界，从左向右走，手中拿着一枚标有“을”（乙）的金币，佩戴着写有“파트너”（合作伙伴）的小徽章。

左侧部分，剥削性关系：展示 1 位傲慢的客户形象，如同国王般的“甲”：一个戴着标有“갑”（甲）字金冠、身穿毛皮镶边长袍的自负男子，在升高的阳台上用双筒望远镜钓鱼，象征着“试探底线”。在他上方添加韩语文字：“간만 보는 게 아니라, 공짜로 다 가져가려는 사람.”（不仅是试探，还想免费拿走一切的人）。他的对话气泡应写道：“아이디어 좀 더! 전략도 더! 자료도 더! 견적은 나중에!”（再多点创意！再多点策略！再多点资料！报价以后再说！）。在鱼钩附近添加 1 个悬挂标签，写着“간 보기 무한 루프”（无限试探循环）。在他下方展示 1 位过度劳累的下属员工，标注为“을”（乙），弯腰驼背、精疲力竭，被锁链锁在一个标有“무급 과제 반복 요구”（无偿任务重复要求）的沉重黑色球体上。在员工旁边放置一叠高高的文件，贴有三个大标签：“정보”（信息）、“지식”（知识）、“문서용역”（文档服务）。在文件堆周围，包含 5 张小需求便条：“시장 조사 좀 해주세요!”（请帮我做市场调查！）、“경쟁사 분석 부탁해요!”（拜托分析一下竞争对手！）、“사업 계획서 초안 부탁!”（请提供商业计划书草案！）、“PoC 해보고 결과만 주세요!”（做完 PoC 只把结果给我就行！）、“이 정도는 서비스죠?”（这点程度算服务吧？）。使用昏暗的灯光、破裂的石地板、阴影、压力标记，营造出一种被剥削的感觉。

右侧部分，合作关系：展示一个明亮的现代办公会议区，配有大窗户、天蓝色背景、城市天际线、室内植物和圆木桌。在右上角绘制一个蓝色笔触面板，内容为：“필요한 서비스에 타당한 값을 지불하는 대등한 파트너.”（为所需服务支付合理费用的平等伙伴）。在会议桌上方展示一个标有“파트너십”（伙伴关系）的平衡秤，秤的两端各有 2 个简单的图标人物，一个蓝色一个绿色，保持平衡。在桌旁展示 3 位商务人士：一位坐着的男性专业人士拿着标有“계약서”（合同）的文件，一位微笑的女性客户正在递交或展示一张标有“공정한 대가 ₩”（公平报酬 ₩）的支付卡/标识，以及作为平等伙伴到达的中心商务人士。添加 2 个对话气泡：“필요한 가치를 명확히 제공하겠습니다.”（我将明确提供所需的价值。）和“그 가치를 정당하게 평가하고 지불하겠습니다.”（我将公正地评估并支付该价值。）在桌子附近放置一个画架标志，上面有 3 个勾选的价值观：“신뢰”（信任）、“존중”（尊重）、“지속 가능한 성장”（可持续增长）。

底部横幅：添加一个带有金色饰边和月桂树装饰的深蓝色丝带牌匾。主要信息采用醒目的韩语大字体：{argument name="bottom slogan" default="갑·을이 아니라,\n서로 필요한 가치를\n정당하게 교환하는 관계"}（意为：不是“甲乙”关系，而是相互公平交换所需价值的关系）。在下方包含深蓝色标签：{argument name="hashtag line" default="#career #business #bizmodel\n#cowork #gonnector #고넥터"}。在左下角添加小字版权声明：“© 2026 Gonnector”，右下角添加一个微小的抽象彩色标志。

视觉风格：韩语编辑信息图，细腻的数字绘画，富有表现力的人物面部，干净的矢量风格排版与绘画质感相结合，深色剥削左侧与明亮协作右侧形成强烈对比，暖金色点缀，深蓝色排版，专业的 LinkedIn 风格商务插画。

约束条件：所有可见的韩语文字必须完全按照指定内容书写。确保标题醒目且易读。包含并统计以下指定元素：1 位傲慢的戴冠客户，1 位精疲力竭的下属员工，1 位中心行走的合作伙伴，右侧总共 3 位会议参与者，2 个平衡秤图标，5 张需求便条，3 个文件堆标签，右侧 2 个对话气泡，以及 3 个勾选的价值观。除标签和版权声明外，不得出现额外的英文替换文本。

[English]
Goal: Create a vertical Korean business/career infographic poster contrasting an exploitative “client as boss, worker as subordinate” mindset with an equal partnership mindset. Use a polished editorial illustration style with semi-realistic cartoon characters, dramatic split-screen storytelling, and bold Korean typography.

Canvas: Vertical 9:16 poster, warm cream paper background, high-resolution, clean print-ready composition. Top third contains a large headline in dark navy Korean text: {argument name="headline text" default="돈을 주는 사람이\n무조건 갑일까?"}. Add small radiating emphasis lines around the headline.

Layout: Divide the main illustration into two vertical halves. The left half is dark, cramped, reddish-brown, and oppressive; the right half is bright, airy, blue, and professional. A central walking businessman bridges the two worlds, moving from left to right, holding a gold coin marked “을” and wearing a small badge labeled “파트너.”

Left section, exploitative relationship: Show exactly 1 arrogant client figure as a king-like “갑”: a smug man in a gold crown labeled “갑,” fur-trimmed robe, using binoculars while fishing from an elevated balcony, symbolizing “testing the waters.” Include Korean text above him: “간만 보는 게 아니라, 공짜로 다 가져가려는 사람.” His speech bubble should say: “아이디어 좀 더! 전략도 더! 자료도 더! 견적은 나중에!” Add exactly 1 dangling tag near the fishing hook reading “간 보기 무한 루프.” Below him show exactly 1 overworked subordinate worker labeled “을,” hunched, exhausted, chained to a heavy black ball labeled “무급 과제 반복 요구.” Next to the worker place a tall stack of papers with three large labels: “정보,” “지식,” “문서용역.” Around the stack, include exactly 5 small request notes: “시장 조사 좀 해주세요!”, “경쟁사 분석 부탁해요!”, “사업 계획서 초안 부탁!”, “PoC 해보고 결과만 주세요!”, “이 정도는 서비스죠?” Use dim lighting, cracked stone floor, shadows, stress marks, and a feeling of exploitation.

Right section, partnership relationship: Show a bright modern office meeting area with large windows, sky-blue background, city skyline, indoor plant, and a round wooden table. At the top right paint a blue brush-stroke panel containing: “필요한 서비스에 타당한 값을 지불하는 대등한 파트너.” Above the meeting table show a balanced scale labeled “파트너십,” with exactly 2 simple human icons on opposite sides, one blue and one green, balanced equally. At the table show exactly 3 business people: a seated male professional holding a contract document labeled “계약서,” a smiling female client handing over or presenting a payment card/sign labeled “공정한 대가 ₩,” and the central businessman arriving as an equal partner. Add exactly 2 speech bubbles: “필요한 가치를 명확히 제공하겠습니다.” and “그 가치를 정당하게 평가하고 지불하겠습니다.” Place an easel sign near the table with exactly 3 checkmarked values: “신뢰,” “존중,” “지속 가능한 성장.”

Bottom banner: Add a dark navy ribbon plaque with gold trim and laurel accents. Main message in large Korean type: {argument name="bottom slogan" default="갑·을이 아니라,\n서로 필요한 가치를\n정당하게 교환하는 관계"}. Beneath it, include hashtags in dark navy: {argument name="hashtag line" default="#career #business #bizmodel\n#cowork #gonnector #고넥터"}. Add small copyright text at lower left: “© 2026 Gonnector,” and a tiny abstract colorful logo at lower right.

Visual style: Korean editorial infographic, detailed digital painting, expressive character faces, clean vector-like typography mixed with painterly textures, strong contrast between dark exploitative left and bright collaborative right, warm gold accents, navy typography, professional LinkedIn-style business illustration.

Constraints: Keep all visible text in Korean exactly as specified. Make the headline large and readable. Count and include exactly these enumerated elements: 1 arrogant crowned client, 1 exhausted subordinate worker, 1 central walking partner businessman, 3 meeting participants total on the right, 2 balanced scale icons, 5 request notes, 3 paper-stack labels, 2 speech bubbles on the right, and 3 checkmarked values. No extra people, no English replacement text except hashtags and copyright.
```

**来源：** [@고영혁 (Dylan Ko)](https://x.com/Gonnector/status/2079714924801233158) | 2026-07-21

---

### 📊 例 4741：瑞利散射信息图

![瑞利散射信息图](../images/%E7%91%9E%E5%88%A9%E6%95%A3%E5%B0%84%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：制作一张长版单页教育科学信息图，解释 {argument name="headline text" default="为什么天空是蓝色的 —— 以及为什么日落是红色的"}，副标题为 {argument name="subtitle text" default="一页纸读懂瑞利散射"}。采用简洁的扁平化科学杂志设计风格，适合作为课堂讲义。

画布：垂直 9:16 海报，米白色背景，顶部和底部边缘由黑色横条框定。在每个黑色横条内居中放置白色文字“GPT Image 2”。主要信息图区域留有宽裕的页边距，配有细海军蓝分割线、圆角卡片，以及海军蓝/青色/珊瑚色/黄色的配色方案。

布局：使用 5 个编号部分，每个部分左侧标有深海军蓝圆形徽章，内含白色数字 1 到 5。所有字体采用几何无衬线体，标题为粗体大写海军蓝，副标题为青色斜体。

第 1 部分 — 可见光谱：标题为“可见光谱”。展示一条长圆角水平彩虹渐变条，从左侧的紫/蓝色延伸至右侧的青、绿、黄、橙和红色。下方添加 4 个波长标签：“400 nm”、“500 nm”、“600 nm”和“700 nm”，并带有小刻度线。

第 2 部分 — 阳光进入大气层：标题为“阳光进入大气层”。左侧绘制一个大型风格化黄色太阳，右侧为地球弧形边缘，中间是淡蓝色大气带，填充许多蓝色空气分子小点。展示 4 条蓝色水平光线进入并伴随蓝色小箭头发生散射，以及 3 条红色水平光线直接穿过射向地球。在大气层中包含 6 个较大的分子/恒星散射图标。在光线下方添加两个解释性说明：“蓝光：散射程度高约 5.5 倍”（蓝色）和“红光：直接穿过”（红色）。

第 3 部分 — 公式与柱状图：并排创建两个圆角矩形卡片。左侧卡片显示大公式“I ∝ 1/λ⁴”及说明“散射强度与波长的四次方成反比”。右侧卡片标题为“相对散射（450 nm 对比 650 nm）”。包含一个简单的柱状图，共有 2 根柱子：一根标有“450 nm”的高蓝色柱子，和一根标有“650 nm”的较短红橙色柱子；Y 轴标记为“相对散射”，右侧有大字“≈ 4.4 : 1”。

第 4 部分 — 正午与日落：并排制作两个大型圆形/椭圆形图表。左侧图表标题：“正午 —— 穿过大气层的路径较短”。显示弯曲地球地平线上方的小太阳、地面上的黑色小人剪影、天空中的蓝色点，以及穿过较短大气路径并带有蓝色散射箭头的垂直红蓝光线。右侧图表标题：“日落 —— 路径较长”。显示左侧靠近地平线的低位太阳、穿过弯曲地球上方淡蓝色大气层的长水平路径、沿途散射掉的蓝光、射向右侧黑色小人剪影的红光，以及说明“蓝光在到达你的眼睛之前已被散射掉”。

第 5 部分 — 事实：横向排列 3 张圆角事实卡片。卡片 1 带有简单的火星轮廓图标，文字为“事实：火星的日落是蓝色的”。卡片 2 带有青色海浪图标，文字为“事实：海洋呈现蓝色是出于不同的原因”。卡片 3 带有紫色眼睛图标及光线，文字为“事实：紫光散射最强，但我们的眼睛更偏爱蓝色”。

页脚：添加居中的小型来源文字：“来源：Rayleigh (1871) · 课堂用插图 · 图 1/1”。

视觉风格：扁平矢量插画，细海军蓝轮廓，仅在必要处使用柔和渐变，标签清晰易读，具备科学教科书的严谨性，除地球纹理可略微精细外，不采用写实风格。保持间距平衡，确保每个标签清晰可见。

[English]
Goal: Create a tall single-page educational science infographic explaining {argument name="headline text" default="WHY THE SKY IS BLUE — AND SUNSETS ARE RED"} with the subtitle {argument name="subtitle text" default="Rayleigh scattering explained in one page"}. Use a clean flat-design science-magazine look, suitable for a classroom handout.

Canvas: Vertical 9:16 poster on an off-white background, framed by black horizontal bars at the very top and bottom. Center the white text “GPT Image 2” inside each black bar. Main infographic area has generous margins, thin navy divider lines, rounded cards, and a navy/teal/coral/yellow palette.

Layout: Use exactly 5 numbered sections, each marked by a dark navy circular badge with white numbers 1 through 5 on the left. Keep all typography geometric sans-serif, with bold uppercase navy headings and teal italic subtitle.

Section 1 — Visible Light Spectrum: Heading reads “VISIBLE LIGHT SPECTRUM”. Show one long rounded horizontal rainbow gradient bar from violet/blue at left through cyan, green, yellow, orange, and red at right. Add exactly 4 wavelength labels beneath it: “400 nm”, “500 nm”, “600 nm”, and “700 nm”, with small tick marks.

Section 2 — Sunlight Entering the Atmosphere: Heading reads “SUNLIGHT ENTERING THE ATMOSPHERE”. Draw a large stylized yellow sun on the left, Earth’s curved edge on the right, and a pale blue atmospheric band between them filled with many small blue air-molecule dots. Show exactly 4 blue horizontal light rays entering and scattering with small blue arrows, plus exactly 3 red horizontal rays passing straight through toward Earth. Include exactly 6 larger molecule/star scattering icons in the atmosphere. Add two explanatory captions below the rays: “Blue light: scattered ~5.5x more” in blue and “Red light: passes through” in red.

Section 3 — Formula and Bar Chart: Create two rounded rectangular cards side by side. Left card shows the large equation “I ∝ 1/λ⁴” and the caption “Scattering intensity is inversely proportional to the fourth power of wavelength”. Right card title reads “RELATIVE SCATTERING (450 nm vs 650 nm)”. Include a simple bar chart with exactly 2 bars: a tall blue bar labeled “450 nm” and a shorter red-orange bar labeled “650 nm”, y-axis labeled “Relative scattering”, and large text “≈ 4.4 : 1” on the right.

Section 4 — Noon vs Sunset: Make two large circular/oval diagrams side by side. Left diagram title: “NOON — short path through atmosphere”. It shows a small sun above a curved Earth horizon, a tiny black human silhouette at ground level, blue dots in the sky, and vertical red and blue rays passing through a short atmospheric path with blue scattering arrows. Right diagram title: “SUNSET — long path”. It shows a low sun near the horizon on the left, a long horizontal path through a pale blue atmosphere over curved Earth, blue light scattering away along the path, a red ray continuing to a black human silhouette at the right, and the caption “Blue is scattered away before reaching your eye”.

Section 5 — Facts: Create exactly 3 rounded fact cards in a row. Card 1 has a simple outlined Mars-like planet icon and text “Fact: Mars sunsets are blue”. Card 2 has a teal ocean wave icon and text “Fact: The ocean is blue for a different reason”. Card 3 has a purple eye icon with rays and text “Fact: Violet scatters most, but our eyes favor blue”.

Footer: Add small centered source text: “Sources: Rayleigh (1871) · Illustration for classroom use · Fig. 1 of 1”.

Visual style: Flat vector illustration, thin navy outlines, soft gradients only where needed, crisp readable labels, science textbook clarity, no photorealism except the Earth texture may be lightly detailed. Keep spacing balanced and ensure every label is legible.
```

**来源：** [@stevibe](https://x.com/stevibe/status/2079959686737252419) | 2026-07-22

---

### 📊 例 4802：日本儿科疾病科普信息图

![日本儿科疾病科普信息图](../images/%E6%97%A5%E6%9C%AC%E5%84%BF%E7%A7%91%E7%96%BE%E7%97%85%E7%A7%91%E6%99%AE%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
目标：为诊所诊室制作一张温馨、适合儿童的日本医疗科普信息图，解释手足口病与疱疹性咽峡炎的区别，并包含入托指南。

画布：竖版海报，纵向布局，奶油色纸张背景，柔和的粉彩色调，圆润的手绘风格，适合儿科诊所。使用粗体深褐色手写体日文，水彩风格的医学插图，以及彩色的圆角矩形。顶部大标题：「手足口病とヘルパンギーナ」，配有小装饰性五彩纸屑标记和粉色波浪下划线。

布局：从上到下垂直排列 5 个编号部分，每个部分置于带有不同强调色的圆角矩形卡片内。左侧使用大型圆形数字徽章：1 号粉色，2 号蓝色，3 号橙色，4 号绿色，5 号橙色。保持设计清晰，方便家长快速阅读。

第 1 部分：粉色边框卡片。标题文字：「手・足・口に小さな水疱、おしりにも」。横向展示 4 个医学插图：带有小红疹的张开手掌、带有红疹的脚底、带有溃疡的张开的嘴/喉咙、以及带有红疹的婴儿臀部/大腿。下方添加一个小太阳图标和文字：「夏〜秋に小さい子に多い」。

第 2 部分：蓝色边框卡片。标题文字：「原因はコクサッキーウイルス」。小字：「ありふれたかぜのウイルス」。右侧绘制一个可爱的圆形蓝色病毒角色，带有小突起、笑脸和蓝色强调标记。

第 3 部分：黄色边框卡片。创建一个包含 2 个重叠半透明圆圈的维恩图：左侧圆圈为粉色，右侧圆圈为蓝色，重叠部分为淡绿色。左侧圆圈文字：「のどの奥に 白い水疱 →ヘルパンギーナ」。右侧圆圈文字：「手のひら・足のうらに発疹 →手足口病」。图表下方添加说明文字：「原因ではなく『どこに出たか』でつけた病名。ヘルパンギーナでも全身に発疹が出ることがあり、厳密には区別できない」。

第 4 部分：绿色边框卡片。标题文字：「特効薬なし・対症療法」。小字：「約1週間で治る」。包含 4 个支持性护理插图：一杯水、一个盖着蓝色毯子（带有月亮和星星）睡觉的孩子、一个显示约 36.6°C 的数字体温计、以及一个穿着绿色条纹衬衫、举起拳头欢呼康复的孩子。

第 5 部分：橙色扇形边框卡片。大标题文字：「登園の目安」。包含 2 个清单条件：「① 熱がない」和「② 普通にご飯が食べられる」。添加一条醒目的橙色信息：「発疹が残っていても 普通の生活・登園OK」。添加小字备注：「ウイルスは治った後も長く出続けるので、発疹が消えるまで待つ意味はありません」。右侧绘制一个快乐的小男孩，戴着黄色帽子，穿着条纹衬衫、短裤，背着蓝色书包，正走向幼儿园；包含一个带有时钟和简单花朵的学校建筑。

视觉风格：可爱的日本托儿所健康宣传单，柔和的水彩阴影，圆角，简洁的间距，粉色/蓝色/黄色/绿色/橙色柔和色调，无生硬的写实感，无恐怖的症状表现。确保所有文字清晰且拼写正确。

可自定义文本槽：使用标题 {argument name="poster title" default="手足口病とヘルパンギーナ"}，主要疾病名称 {argument name="main disease" default="手足口病"}，对比疾病名称 {argument name="comparison disease" default="ヘルパンギーナ"}，病毒名称 {argument name="virus name" default="コクサッキーウイルス"}，以及入托指南标题 {argument name="attendance headline" default="登園の目安"}。

[English]
Goal: Create a warm, child-friendly Japanese medical explanation infographic for a clinic exam room, explaining the difference between hand, foot and mouth disease and herpangina, including daycare attendance guidance.

Canvas: Vertical poster, portrait orientation, cream paper background, soft pastel palette, rounded hand-drawn style, pediatric clinic friendly. Use thick dark-brown handwritten Japanese typography, watercolor-like medical illustrations, and colored rounded rectangles. Overall title at top: 「手足口病とヘルパンギーナ」 with small decorative confetti marks and a pink wavy underline.

Layout: Stack exactly 5 numbered sections from top to bottom, each inside a rounded rectangular card with a different accent color. Use large circular number badges on the left: 1 pink, 2 blue, 3 orange, 4 green, 5 orange. Keep the design clear enough for parents to read quickly.

Section 1: Pink-bordered card. Heading text: 「手・足・口に小さな水疱、おしりにも」. Show exactly 4 medical illustrations in a row: an open palm with small red blister spots, the sole of a foot with red spots, an open mouth/throat with sores, and a diapered baby bottom/thighs with spots. Add a small sun icon and text below: 「夏〜秋に小さい子に多い」.

Section 2: Blue-bordered card. Heading text: 「原因はコクサッキーウイルス」. Smaller text: 「ありふれたかぜのウイルス」. On the right, draw one cute round blue virus character with small protrusions, smiling face, and blue accent marks.

Section 3: Yellow-bordered card. Create a Venn diagram with exactly 2 overlapping translucent circles: left circle pink, right circle blue, overlap pale green. Left circle text: 「のどの奥に 白い水疱 →ヘルパンギーナ」. Right circle text: 「手のひら・足のうらに発疹 →手足口病」. Under the diagram, add explanatory text: 「原因ではなく『どこに出たか』でつけた病名。ヘルパンギーナでも全身に発疹が出ることがあり、厳密には区別できない」.

Section 4: Green-bordered card. Heading text: 「特効薬なし・対症療法」. Smaller text: 「約1週間で治る」. Include exactly 4 supportive-care illustrations: a glass of water, a sleeping child under a blue blanket with moon and stars, a digital thermometer reading about 36.6°C, and a cheerful recovered child in a green striped shirt raising a fist.

Section 5: Orange scalloped-border card. Large heading text: 「登園の目安」. Include exactly 2 checklist conditions: 「① 熱がない」 and 「② 普通にご飯が食べられる」. Add a large emphasized orange message: 「発疹が残っていても 普通の生活・登園OK」. Add smaller note: 「ウイルスは治った後も長く出続けるので、発疹が消えるまで待つ意味はありません」. On the right, draw a happy young boy wearing a yellow hat, striped shirt, shorts, and blue backpack, walking toward daycare; include a small school building with clock and simple flowers.

Visual style: Cute Japanese nursery-health handout, soft watercolor shading, rounded corners, clean spacing, pastel pink/blue/yellow/green/orange accents, no harsh realism, no scary symptoms. Make all text legible and spelled correctly.

Customizable text slots: Use the title {argument name="poster title" default="手足口病とヘルパンギーナ"}, main disease name {argument name="main disease" default="手足口病"}, comparison disease name {argument name="comparison disease" default="ヘルパンギーナ"}, virus name {argument name="virus name" default="コクサッキーウイルス"}, and attendance headline {argument name="attendance headline" default="登園の目安"}.
```

**来源：** [@りりぃ🌸 小児科医 × Webコーダー](https://x.com/lilychaco/status/2080426338159403074) | 2026-07-23

---

### 📊 例 4843：BIP110 韩文信息图

![BIP110 韩文信息图](../images/BIP110%20%E9%9F%A9%E6%96%87%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个关于 {argument name="subject" default="BIP110 运行机制"} 的韩文信息图

[English]
{argument name="주제" default="BIP110 동작 메커니즘"}을 한글 인포그래픽으로 생성
```

**来源：** [@● goodtek](https://x.com/goodtek_xyz/status/2080231683077570852) | 2026-07-23

---

### 📊 例 4924：AI 模型路由对比信息图

![AI 模型路由对比信息图](../images/AI%20%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%94%B1%E5%AF%B9%E6%AF%94%E4%BF%A1%E6%81%AF%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个 1:1 正方形的深色未来科技风信息图，用于社交媒体，对比两种 AI 工作流方案。画布：768x768 或类似尺寸，深海军蓝至黑色的背景，带有细微的点阵纹理，中间垂直分割。顶部放置醒目的大写粗体标题：“STOP USING GPT FOR {argument name="headline word" default="EVERYTHING"}。”其中“STOP USING GPT FOR”为白色，“EVERYTHING”一词采用从亮绿色到青蓝色的从左至右渐变，并配有一个青色句号。使用简洁的粗体无衬线字体，高对比度，清晰的矢量风格渲染。

布局：左右两栏。左栏标注为低效工作流，右栏标注为优化工作流。左侧采用红/粉色调，配有一个药丸形标签“THE OLD WAY”，下方小标题为“WASTE MONEY”，中心是一个圆角方形的 GPT/OpenAI 风格节点图标。周围环绕 5 个较小的圆角方形任务图标，并用杂乱的红色虚线连接：1 上方中心为视频场记板/播放图标，2 左侧为设计钢笔/贝塞尔曲线图标，3 右侧为麦克风图标，4 左下为图像/照片图标，5 右下为代码括号图标。杂乱的虚线交错缠绕，体现混乱感。

右侧采用青/蓝色调，配有一个药丸形标签“THE SMART WAY”，下方小标题为“ROUTE TO THE BEST MODEL”，中心是一个圆角方形的机器人路由图标。用清晰的发光实线连接 5 张模型卡片：1 顶部卡片为 OpenAI 节点图标，标注“GPT 5.6”和“DESIGN”；2 左侧紫色卡片为代码括号图标，标注“{argument name="coding model" default="FABLE"}”和“CODE (HARD)”；3 右侧蓝色卡片为场记板/播放图标，标注“{argument name="video model" default="SEEDANCE 2.0"}”和“VIDEO”；4 左下金色卡片为图像图标，标注“{argument name="image model" default="GPT 2.0"}”和“IMAGE”；5 右下蓝色卡片为麦克风图标，标注“{argument name="voice model" default="HUME"}”和“VOICE”。使用带有霓虹轮廓和柔和光晕的圆角玻璃拟态卡片。

底部标注：左栏下方放置一个红色轮廓的圆角状态栏，带有红色 X 图标和文字“EXPENSIVE. CHAOTIC. INEFFICIENT.”；右栏下方放置一个青/绿色轮廓的圆角状态栏，带有绿色对勾图标和文字“SMARTER. CHEAPER. BETTER RESULTS.”。确保所有文字清晰、居中且对齐。采用高对比度、现代 SaaS 营销风格，使用细微渐变和霓虹高光，不添加额外 Logo、水印或指定标签之外的任何文字。

[English]
Create a square 1:1 dark futuristic tech infographic for social media comparing two AI workflow approaches. Canvas: 768x768 or similar, deep navy-to-black background with subtle dotted grid texture and a vertical split down the center. At the top, place a huge bold uppercase headline: “STOP USING GPT FOR {argument name="headline word" default="EVERYTHING"}.” The words “STOP USING GPT FOR” are white, and the final word is a left-to-right gradient from lime green to cyan-blue, with a cyan period. Use a clean heavy sans-serif font, high contrast, crisp vector-like rendering.

Layout: two side-by-side columns. Left column is labeled as the bad workflow, right column as the improved workflow. The left side has a red/pink theme with a pill label reading “THE OLD WAY,” a small subtitle “WASTE MONEY,” and a central rounded-square GPT/OpenAI-style knot icon. Around it are exactly 5 smaller rounded-square task icons connected by messy red dashed routing lines: 1 video clapper/play icon at upper center, 2 design pen-nib/Bezier icon at left, 3 microphone icon at right, 4 image/photo icon at lower left, 5 code brackets icon at lower right. The messy dashed lines loop and cross, showing chaos.

Right column has a teal/blue theme with a pill label reading “THE SMART WAY,” a small subtitle “ROUTE TO THE BEST MODEL,” and a central rounded-square robot router icon. Connect it with clean glowing solid lines to exactly 5 model cards: 1 top card with OpenAI knot icon labeled “GPT 5.6” and “DESIGN,” 2 left purple card with code brackets labeled “{argument name="coding model" default="FABLE"}” and “CODE (HARD),” 3 right blue card with clapper/play icon labeled “{argument name="video model" default="SEEDANCE 2.0"}” and “VIDEO,” 4 bottom-left gold card with image icon labeled “{argument name="image model" default="GPT 2.0"}” and “IMAGE,” 5 bottom-right blue card with microphone icon labeled “{argument name="voice model" default="HUME"}” and “VOICE.” Use rounded glassmorphism cards with neon outlines and soft glow.

Bottom callouts: under the left column, place a red outlined rounded status bar with a red X icon and text “EXPENSIVE. CHAOTIC. INEFFICIENT.” Under the right column, place a teal/green outlined rounded status bar with a green check icon and text “SMARTER. CHEAPER. BETTER RESULTS.” Keep all text legible, centered, and aligned. Use strong contrast, modern SaaS marketing style, subtle gradients, neon highlights, no extra logos, no watermark, no additional text beyond the specified labels.
```

**来源：** [@codemarch](https://x.com/codemarch/status/2080529891733504505) | 2026-07-24

---

### 📊 例 5483：民族方言信息图表美学排版

![民族方言信息图表美学排版](../images/%E6%B0%91%E6%97%8F%E6%96%B9%E8%A8%80%E4%BF%A1%E6%81%AF%E5%9B%BE%E8%A1%A8%E7%BE%8E%E5%AD%A6%E6%8E%92%E7%89%88.jpg)

**Prompt:**

```text
主题：{argument name="主题" default="10 个少数民族，方言如何说：早安"} 
一共 10 张，每个都是一个名字主题 不同的排版 
每个图片要有 3-5 个知识点、不同的信息呈现方式 
专业收藏级的排版 and 字体 
比例 3:4 
不要有序列号逻辑
```

**来源：** [@小小东](https://x.com/xiaoxiaodong01/status/2083008371448528896) | 2026-07-31

---

### 📊 例 6375：现代高级时装角色概念设计图

![现代高级时装角色概念设计图](../images/%E7%8E%B0%E4%BB%A3%E9%AB%98%E7%BA%A7%E6%97%B6%E8%A3%85%E8%A7%92%E8%89%B2%E6%A6%82%E5%BF%B5%E8%AE%BE%E8%AE%A1%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
创建一个优质的、现代的 {argument name="fashion style" default="高级时装"} 角色概念艺术设计图，采用 {argument name="layout" default="16:9 宽屏"} 布局，背景为 {argument name="background color" default="纯白色"}。所附参考图像定义了艺术风格 —— 请将其视为严格的风格指南，并复刻其精确的渲染效果。

[English]
Create a premium, modern {argument name="fashion style" default="high-fashion"} CHARACTER CONCEPT ART SHEET in a {argument name="layout" default="16:9 widescreen"} layout on a {argument name="background color" default="pure white"} background. THE ATTACHED REFERENCE IMAGE DEFINES THE ART STYLE — treat it as a strict style bible and reproduce its exact rendering
```

**来源：** [@PixieVerse](https://x.com/itsPixieVerse/status/2089185213377360340) | 2026-08-17

---

### 📊 例 6385：日式日历杂志海报

![日式日历杂志海报](../images/%E6%97%A5%E5%BC%8F%E6%97%A5%E5%8E%86%E6%9D%82%E5%BF%97%E6%B5%B7%E6%8A%A5.jpg)

**Prompt:**

```text
微暖质感纸张背景上，构图呈现竖版日历杂志排版布局，画面中上方偏左错落贴附一张带有白色加宽下边框与微弱立体投影的拍立得胶片相框照片，相框内展示由{argument name="主题" default="早安+问候+GOOD MORNING+城市+金句+天气+2026-08-19"}决定的胶片质感生活场景影像，色调清透自然；相框左上方以提取自画面主色的浓郁深调复古衬线体标注月份与大号日期数字，右上角配以纤细清秀的星期与农历小字；苍劲洒脱的手写连笔毛笔书法字体跨越相框右下角边缘斜向压印延伸至卡片背景，与相框形成生动的叠压层次；相框下方左对齐排布低饱和英文导语与排版疏朗、节奏舒缓的左对齐中文诗意文案短句，右下角极简点缀品牌落款与微小分类标签，全幅文字与装饰色彩与相框内画面主色调形成呼应与深浅递进，整体呈现宁静雅致、松弛治愈的日系生活美学氛围。
```

**来源：** [@小小东](https://x.com/xiaoxiaodong01/status/2089860052308119958) | 2026-08-18

---

### 📊 例 6450：高级时装角色风格指南

![高级时装角色风格指南](../images/%E9%AB%98%E7%BA%A7%E6%97%B6%E8%A3%85%E8%A7%92%E8%89%B2%E9%A3%8E%E6%A0%BC%E6%8C%87%E5%8D%97.jpg)

**Prompt:**

```text
[中文]
创建一个优质、现代的高级时装角色概念艺术图，采用 16:9 宽屏布局，背景为纯白色。所附参考图像定义了艺术风格 —— 请将其视为严格的风格指南，并复刻其精确的

[English]
Create a premium, modern high-fashion CHARACTER CONCEPT ART SHEET in a 16:9 widescreen layout on a pure white background. THE ATTACHED REFERENCE IMAGE DEFINES THE ART STYLE — treat it as a strict style bible and reproduce its exact
```

**来源：** [@PixieVerse](https://x.com/itsPixieVerse/status/2089556202615124203) | 2026-08-18

---

### 📊 例 6458：Image 2 Prompt：创建超写实爆炸式

![Image 2 Prompt：创建超写实爆炸式](../images/Image%202%20Prompt%EF%BC%9A%E5%88%9B%E5%BB%BA%E8%B6%85%E5%86%99%E5%AE%9E%E7%88%86%E7%82%B8%E5%BC%8F.jpg)

**Prompt:**

```text
[中文]
创建一张超写实、爆炸式的垂直信息图，展示优质脆皮鸡块的结构。
从上到下的结构：
脆皮裹粉
→ 调味料
→ 鸡肉块
→ 腌制层
→ 蘸酱
→ 餐盘
每一层都必须保持完美

[English]
Create a hyper-realistic exploded vertical infographic composition of premium crispy chicken nuggets.
Top → Bottom structure:
Crispy Breading
→ Seasoning
→ Chicken Fillet
→ Marinade Layer
→ Dipping Sauce
→ Serving Tray
Each layer must remain perfectly
```

**来源：** [@𝐌](https://x.com/Strength04_X/status/2089532304976969785) | 2026-08-18

---

### 📊 例 6588：高级时装角色概念设计图

![高级时装角色概念设计图](../images/%E9%AB%98%E7%BA%A7%E6%97%B6%E8%A3%85%E8%A7%92%E8%89%B2%E6%A6%82%E5%BF%B5%E8%AE%BE%E8%AE%A1%E5%9B%BE.jpg)

**Prompt:**

```text
[中文]
在纯白色背景上创建一个 16:9 宽屏布局的高级现代时装角色概念设计图。所附的参考图像定义了艺术风格——请将其视为严格的风格指南，并复刻其精确的渲染效果。

[English]
Create a premium, modern high-fashion {argument name="subject" default="CHARACTER CONCEPT ART SHEET"} in a 16:9 widescreen layout on a pure white background. THE ATTACHED REFERENCE IMAGE DEFINES THE {argument name="style type" default="ART STYLE"} — treat it as a strict style bible and reproduce its exact rendering
```

**来源：** [@PixieVerse](https://x.com/itsPixieVerse/status/2090266092757541043) | 2026-08-20

---

