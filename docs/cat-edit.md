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

