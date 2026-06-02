# 🔧 图像编辑与变换

[返回分类](categories.md) · [查看全部案例](cases-001-100.md) · [返回首页](../README.md)

风格迁移（吉卜力/像素风等）、物体移除/添加、老照片修复上色、透明背景提取、图片扩展补全等。
---
## 🔧 例 28：3D FACS Expression Edit

![3D FACS Expression Edit](../images/3D%20FACS%20Expression%20Edit.jpg)

**Prompt:**

```text
Using the provided reference image as the character base, keep the same chibi 3D figure, outfit, hairstyle, lighting, plain white background, and overall composition unchanged, but modify only the facial expression according to FACS action units: {argument name="FACS action units" default="AU1C + AU2C + AU5D + AU26C"}. Preserve the reference image’s square face-obscuring block in the same central position and regenerate the image cleanly with the same toy-like render quality.
```

**来源：** [@koh375zg](https://x.com/koh375zg/status/2053938596311445753#reversed-1) | 2026-05-13

---
## 🔧 例 29：照片转 LEGO 小人仔

![照片转 LEGO 小人仔](../images/照片转%20LEGO%20小人仔.jpg)

**Prompt:**

```text
仅使用用户上传的图片作为主体参考。将上传图片中的人物转换为逼真的 LEGO 风格小人仔，同时保留其可辨识的身份和装束。在 LEGO 小人仔的设计限制内，尽可能保留主体的面部相似度，并保持相同的发型和发色（适配为 LEGO 发饰）、面部表情、服装颜色、服装设计和图案，以及任何可见的配饰。最终结果应清晰地呈现出该人物的 LEGO 化形象。角色必须遵循正宗的 LEGO 小人仔比例，包括圆柱形的黄色或肤色 LEGO 风格头部、根据主体特征适配的简洁印刷面部细节、带有印刷服装细节的块状躯干、标准的 LEGO 小人仔手臂及弯曲手部、短款 LEGO 小人仔腿部，以及与主体发型相符的独特模塑塑料发饰。
使用逼真的 LEGO 塑料材质进行渲染，带有轻微的光泽感、细微的模塑接缝以及自然的玩具表面反射。面部和躯干应包含 LEGO 小人仔典型的印刷细节，发饰应呈现出模塑塑料的质感。最终图像应为高质量的逼真 3D 玩具渲染图，采用柔和的漫射摄影棚灯光、强调形状和塑料纹理的细微阴影，以及清晰锐利的对焦和精致的细节。构图必须展示从头到脚的全身小人仔，居中对齐，确保整个形象完全可见。使用纯白色背景，不包含任何场景、道具或其他元素。最终风格应呈现为具有高度细节塑料纹理和摄影棚灯光的逼真 LEGO 小人仔玩具渲染图。
```

**来源：** [@AiwithLariab](https://x.com/AiwithLariab/status/2053663652356689927) | 2026-05-13

## 🔧 例 37：Perler Bead Style Portrait

![Perler Bead Style Portrait](../images/Perler%20Bead%20Style%20Portrait.jpg)

**Prompt:**

```text
以{argument name="风格" default="拼豆风格"}绘制出图片中的{argument name="主体" default="主体人物"}，颜色接近画面中效果，背景换成比较简单的装饰，整体画面温馨
```

**来源：** [@MrGafish](https://x.com/MrGafish/status/2054830871048589661) | 2026-05-14


---

## 🔧 例 45：吉卜力与动漫风格照片转换

![吉卜力与动漫风格照片转换](../images/吉卜力与动漫风格照片转换.jpg)

**Prompt:**

```text
将此肖像转换为 {argument name="anime style" default="吉卜力工作室动画风格、现代动漫、水彩画或印象派油画"}。使用 {argument name="color palette" default="柔和色调"}、手绘线条以及温暖的背景。
```

**来源：** [@ChatgptAIskill](https://x.com/ChatgptAIskill/status/2054487317465964737) | 2026-05-14


---
### 🔧 例 93：Photorealistic 8K Photo Restoration

![Photorealistic 8K Photo Restoration](../images/Photorealistic%208K%20Photo%20Restoration.jpg)

**Prompt:**

```text
Using the provided reference image, restore and upscale it into an ultra-premium photorealistic 8K image. Keep 100% of the original identity, pose, framing, perspective, and composition unchanged: the dog remains centered close to the camera, holding the same flowers in its mouth, with the same yard and house setting behind it. Remove the heavy blur and pixelation, recover natural microdetails such as crisp eyes, realistic nose texture, individual whiskers, soft fur strands, flower petals, grass, house edges, and tree detail. Make the result look like a high-quality cinematic studio-grade photo with natural daylight, high contrast, rich but realistic colors, clean focus, and no artificial-looking reconstruction. Do not change the subject, do not add new objects, do not alter the expression, and do not stylize it as illustration or CGI. Enhancement strength: {argument name="enhancement strength" default="ultra-premium 8K cinematic restoration"}. Detail priority: {argument name="detail priority" default="sharp eyes, realistic pores, whiskers, fur, and flower texture"}. Color grade: {argument name="color grade" default="natural sunny high-contrast photorealism"}.
```

**来源：** [@status](https://x.com/ftcarpe/status/2057081501515215148#reversed-1) | 2026-05-20

---
### 🔧 例 108：Photo to 3D Toy Figure

![Photo to 3D Toy Figure](../images/Photo%20to%203D%20Toy%20Figure.jpg)

**Prompt:**

```text
Please convert the subject of the photo into a {argument name="figure style" default="toy-like figure"}. However, the person should be depicted as a slightly exaggerated 3D character. Soft sculptural forms, matte textures, simplified geometry, cinematic clarity, and high visual polish. Keep the character stylized yet recognizable. Behind the figure, place a branded box printed with the attached image (the one before characterization). Place a circular pedestal in front of the box and have the figure sit on it. Represent this in an indoor desk environment.
```

**来源：** [@status](https://x.com/zuttoWEB/status/2058461584796831984) | 2026-05-22

---

### 🔧 例 110：Paper-Cut Layered Diorama

![Paper-Cut Layered Diorama](../images/Paper-Cut%20Layered%20Diorama.jpg)

**Prompt:**

```text
Convert this image into a soft, handcrafted paper-cut layered illustration style, inspired by papercraft diorama aesthetics. Use {argument name="shapes" default="smooth rounded shapes"}, simplified cute character proportions, and {argument name="facial details" default="minimal facial details (dot eyes, blush cheeks)"} to create a warm, charming look. Apply stacked paper layers with visible depth, subtle shadows between layers, and clean cut edges that resemble laser-cut cardstock ++Add a distinct white outer outline layer surrounding each main character, resembling a thick sticker border or white cut-paper backing, clearly separating the characters from the background. This white layer should feel like an intentional paper layer, not a glow. Use a {argument name="color palette" default="pastel color palette"} with muted blues, greens, and warm neutrals, balanced and calming. Lighting should feel soft, diffused, and even, enhancing the dimensional paper layers without harsh contrast. ++++ Textures should appear matte and tactile, like thick art paper or craft foam. Overall mood: cozy, wholesome, gentle, and storybook-like, with a playful yet polished handcrafted feel suitable for modern illustration, children’s books, or decorative art.
```

**来源：** [@status](https://x.com/Kashberg_0/status/2058457174809211049) | 2026-05-22

---
### 🔧 例 136：月下雪豹之跃

![月下雪豹之跃](../images/月下雪豹之跃.jpg)

**Prompt:**

```text
以提供的参考图像为基础，将场景转化为极具戏剧性的夜间版本，同时保留雪豹腾空跃起的姿态、雪山悬崖背景、垂直海报构图以及绘画风格的奇幻写实细节。将温暖的金色调改为冷色调的深蓝色月光氛围，将背景中的金色太阳/行星替换为右上角的一轮写实满月，并让雪豹在向前跃向观众时显得更加正面且自信。在皮毛周围添加冰冷的轮廓光、更锐利的蓝色眼睛、随风飘动的白色运动轨迹、雪雾、水汽，以及下方更暗、对比度更高的雪山峰。保持华丽的纹理背景质感，但使其更显深邃隐晦，且不包含任何文字、水印或其他动物。渲染效果需达到 {argument name="resolution" default="4K"} 清晰度，呈现电影级奇幻野生动物艺术风格，具备高度细腻的皮毛细节、戏剧性的光影效果以及 9:16 的垂直纵横比。
```

**来源：** [@churvikv](https://x.com/churvikv/status/2059610729288696304#reversed-1) | 2026-05-28

---



### 🔧 例 143：趣味丑萌涂鸦草图

![趣味丑萌涂鸦草图](../images/趣味丑萌涂鸦草图.jpg)

**Prompt:**

```text
Turn this photo into a funny ugly doodle drawing. Make it look like: a quick sketch using a cheap marker or crayon messy, rough, childlike style bad perspective and awkward proportions slightly exaggerated facial features Add: simple cartoon background (like buildings, trees, street) random sketchy lines and details uneven coloring and visible strokes Style: looks like a lazy drawing, not polished humorous and a bit stupid-looking meme-like, casual, internet style Do NOT: make it realistic
```

**来源：** [@Anifun](https://x.com/Anifun_AI/status/2060274661850743192) | 2026-05-29

---

### 🔧 例 243：居酒屋墙面菜单转换

![居酒屋墙面菜单转换](../images/%E5%B1%85%E9%85%92%E5%B1%8B%E5%A2%99%E9%9D%A2%E8%8F%9C%E5%8D%95%E8%BD%AC%E6%8D%A2.jpg)

**Prompt:**

```text
Using the provided reference image as the izakaya interior mood reference, transform the wall menu into a closer, more frontal handheld snapshot of a casual Japanese pub menu corner. Replace the original white printed paper notices on the wooden wall with exactly 12 narrow cream menu slips outlined in red, arranged in 2 rows of 6, each pinned at the top and written in bold black brush-style Japanese with orange handwritten prices. The 12 menu slips should read: top row 「だしまき 580」「モロキュー 400」「串カツ 150」「豚キムチ 580」「もずく酢 380」「冷やっこ 300」; bottom row 「牛すじポン酢 680」「たこぶつ 680」「チャンジャ 480」「鶏の唐揚 680」「ウインナー 480」「エイヒレ 530」. Add a black chalkboard menu above the slips with messy white chalk writing and a few orange prices, plus a yellow beer poster on the left wall. Keep the warm dim izakaya lighting and lived-in, slightly blurry phone-photo realism, but shift the background from a full wooden plank wall to a cream wall with dark wood wainscoting at the bottom. Include small red-capped condiment bottles partially visible at the bottom edge. Optional text customization: use {argument name="top row menu text" default="だしまき 580, モロキュー 400, 串カツ 150, 豚キムチ 580, もずく酢 380, 冷やっこ 300"} and {argument name="bottom row menu text" default="牛すじポン酢 680, たこぶつ 680, チャンジャ 480, 鶏の唐揚 680, ウインナー 480, エイヒレ 530"}.
```

**来源：** [@当選者](https://x.com/love247love/status/2059779917718683853) | 2026-05-28

---

### 🔧 例 245：狂野天才高尔夫球手漫画重绘

![狂野天才高尔夫球手漫画重绘](../images/%E7%8B%82%E9%87%8E%E5%A4%A9%E6%89%8D%E9%AB%98%E5%B0%94%E5%A4%AB%E7%90%83%E6%89%8B%E6%BC%AB%E7%94%BB%E9%87%8D%E7%BB%98.jpg)

**Prompt:**

```text
Analyze the uploaded illustration carefully and redraw the character as a {argument name="character style" default="wild genius golfer"} inspired by {argument name="visual energy" default="classic Japanese sports manga energy"}, recreating the dramatic {argument name="atmosphere" default="“legendary mountain golf swing” atmosphere"}: low-angle dynamic composition, intense determined eyes, fearless grin, rough powerful stance, body twisted mid-swing, club raised with explosive momentum, wind and dust swirling around. Preserve the uploaded character’s face, eyes, hairstyle, hair color, outfit motifs, proportions, colors, personality, and worldbuilding, but reinterpret them as a unique fantasy pro golfer. The golf outfit, club, gloves, shoes, accessories, patterns, colors, and silhouette must naturally reflect the original artwork’s atmosphere, symbols, motifs, and emotional tone. The expression should feel bold, mischievous, confident, and unstoppable, as if the character is about to hit an impossible miracle shot. Add dramatic speed lines, flying grass, sharp sunlight, cinematic shadows, dynamic anime sports poster composition, ultra detailed, no text, no watermark.
```

**来源：** [@アシタ🩵](https://x.com/ashiwata100/status/2059722255492653546) | 2026-05-27

---

### 🔧 例 273：剪纸分层插画风格

![剪纸分层插画风格](../images/%E5%89%AA%E7%BA%B8%E5%88%86%E5%B1%82%E6%8F%92%E7%94%BB%E9%A3%8E%E6%A0%BC.jpg)

**Prompt:**

```text
Convert this image into a {argument name="art style" default="soft, handcrafted paper-cut layered illustration style"}, inspired by papercraft diorama aesthetics. Use smooth rounded shapes, simplified cute character proportions, and minimal facial details (dot eyes, blush cheeks) to create a warm, charming look. Apply stacked paper layers with visible depth, subtle shadows between layers, and clean cut edges that resemble laser-cut cardstock.

Add a distinct white outer outline layer surrounding each main character, resembling a thick sticker border or white cut-paper backing, clearly separating the characters from the background. This white layer should feel like an intentional paper layer, not a glow. Use a {argument name="color palette" default="pastel color palette with muted blues, greens, and warm neutrals"}, balanced and calming. Lighting should feel soft, diffused, and even, enhancing the dimensional paper layers without harsh contrast.

Textures should appear matte and tactile, like thick art paper or craft foam. Overall mood: {argument name="mood" default="cozy, wholesome, gentle, and storybook-like"}, with a playful yet polished handcrafted feel suitable for modern illustration, children’s books, or decorative art.
```

**来源：** [simeon-sanai](https://x.com/Naiknelofar788) | 2026-05-30

---


### 🔧 例 306：老照片修复

![老照片修复](../images/%E8%80%81%E7%85%A7%E7%89%87%E4%BF%AE%E5%A4%8D.jpg)

**Prompt:**

```text
Using the provided reference image, refine and restore the old damaged photo into a clean, realistic original snapshot. Remove all cracks, creases, scratches, faded discoloration, stains, and paper damage, and reconstruct any missing or obscured areas naturally. Preserve the same child, facial identity, joyful laughing expression, hairstyle with pigtails, yellow flowers beside both ears, checkered floral dress with white collar, pose, close portrait framing, and outdoor background. Convert the aged pinkish tint into natural color, sharpen details, improve lighting and contrast, and make the result look like an authentic modern film photograph rather than an illustration. Do not change the subject’s age, clothing design, composition, or expression; do not add extra people, text, borders, or watermark.
```

**来源：** [Snow](https://x.com/iamrealsnow) | 2026-05-30

---


### 🔧 例 315：涂鸦美学社交媒体照片编辑

![涂鸦美学社交媒体照片编辑](../images/%E6%B6%82%E9%B8%A6%E7%BE%8E%E5%AD%A6%E7%A4%BE%E4%BA%A4%E5%AA%92%E4%BD%93%E7%85%A7%E7%89%87%E7%BC%96%E8%BE%91.jpg)

**Prompt:**

```text
将这张照片编辑成可爱的小红书/Pinterest风格{argument name="风格" default="涂鸦美学"}，保持原始构图和自然色彩。勿大幅改变原始光线或调色。保持柔和、通透、温暖、逼真的色调。避免过饱和、HDR效果、强橙色滤镜或过度对比。

在主要物体周围添加手绘涂鸦元素：'白色描边' '草图闪闪' '星星' '爱心' '箭头' '小花' '顽皮旋涡' '迷你手写笔记'

添加与照片氛围相匹配的{argument name="吉祥物" default="可爱吉祥物风格涂鸦（小熊、微笑饮料、可爱食物角色、困睡云等）"}，但保持精致平衡。

使用手写白色文字和简短的文案标题。勿添加过多文字或使图像过度拥挤。以真实面孔作为参考照片。背景与照片相同。光线温暖、柔和、干净，阴影细致。

围绕图像添加数个迷你{argument name="角色版本" default="Q版（3D可爱风格）角色版本"}，同时保持原始五官特征。Q版角色具有各种姿势和表情：'欢快跳跃' '挥手' '放松坐着' '拿饮料' '可爱顽皮表情'。

添加手绘白色涂鸦元素：身体周围描边、星星、爱心、闪闪、运动线条、小可爱图标。

美学手写风格如：'闪闪发光' '明亮一天' '开心' '微笑'等（随意涂鸦字体）。

整体风格：简洁美学构图、白色贴纸描边、柔和粉彩色调、高细节3D Q版、光泽感、可爱韩风。
```

**来源：** [路飞 🏴‍☠️ AI 研究员🧐](https://x.com/0xluffy_eth) | 2026-05-30

---

