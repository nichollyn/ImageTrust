import type { CaseItem } from '../types';

export const cases: CaseItem[] = [
  {
    id: 'cook-xiaomi',
    title: '"库克代言小米汽车"假官宣图',
    description: '2026年4月，GPT-Image-2发布后，网络上出现大量以假乱真的名人代言图。其中"苹果CEO库克代言小米汽车"的截图在社交平台广泛传播，甚至引发小米高管公开辟谣。',
    aiImage: '',
    source: '澎湃新闻',
    sourceUrl: 'https://www.thepaper.cn/newsDetail_forward_32940820',
    date: '2026-04-22',
    tags: ['GPT-Image-2', '名人伪造', '社交媒体截图'],
    clues: [
      '可精确还原微博UI界面、话题词、IP地址',
      '文字渲染过于完美，毫无AI常见乱码',
      '粗看与真实微博截图几乎无法区分',
      '需要交叉验证官方渠道才能确认真伪',
    ],
  },
  {
    id: 'fake-menu',
    title: 'AI生成的墨西哥餐厅菜单',
    description: '对比案例：两年前的DALL-E 3生成的菜单文字完全错乱（"enchuita"、"churiros"等虚构词汇），而GPT-Image-2生成的菜单已经可以立即投入真实使用。',
    aiImage: '',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com/2026/04/21/chatgpts-new-images-2-0-model-is-surprisingly-good-at-generating-text/',
    date: '2026-04-21',
    tags: ['文字渲染', 'DALL-E 3', 'GPT-Image-2', '对比'],
    clues: [
      '早期AI模型的文字渲染是致命弱点',
      'GPT-Image-2将文字准确率提升至99%+',
      '曾经最容易识别的AI痕迹现已消失',
      '仅凭文字完美度已无法判断真伪',
    ],
  },
  {
    id: 'fake-id',
    title: '可篡改的身份证样式图',
    description: '测试显示，GPT-Image-2能够生成高度逼真的证件样式图片。虽然OpenAI设置了安全过滤器，但通过巧妙提示词仍可能绕过限制，生成足以欺骗肉眼检查的假证件。',
    aiImage: '',
    source: '澎湃新闻对齐Lab',
    sourceUrl: 'https://www.thepaper.cn/newsDetail_forward_32940820',
    date: '2026-04-23',
    tags: ['证件伪造', '安全漏洞', 'GPT-Image-2'],
    clues: [
      'AI模型的安全过滤并非万无一失',
      '证件类图片的验证必须依赖官方渠道',
      '仅凭视觉判断证件真伪极其危险',
      '需要结合物理防伪特征和数据库核验',
    ],
  },
  {
    id: 'fake-youtube',
    title: '以假乱真的YouTube首页截图',
    description: 'GPT-Image-2可以生成包含正确布局、正确按钮样式、正确图标位置的YouTube界面截图，甚至视频封面都是合理的。这不是简单的"长得像"，而是对真实世界的深度理解。',
    aiImage: '',
    source: '36氪',
    sourceUrl: 'https://www.36kr.com/p/3773044974453509',
    date: '2026-04-19',
    tags: ['UI伪造', '截图', 'GPT-Image-2'],
    clues: [
      '截图不再能当作可信证据',
      'AI理解真实世界的UI规范和设计模式',
      '连专业的UI设计师都难辨真伪',
      '验证截图必须回到原始平台交叉确认',
    ],
  },
  {
    id: 'misleading-infographic',
    title: '看似有理的虚假产品拆解图',
    description: '用83字提示词生成的iPhone拆解信息图，排版清晰、文字准确，但经记者核对发现多处事实错误：颜色数量虚增、材质写错、零件拆分不合理。',
    aiImage: '',
    source: '澎湃新闻对齐Lab',
    sourceUrl: 'https://www.thepaper.cn/newsDetail_forward_32940820',
    date: '2026-04-23',
    tags: ['信息图', '事实错误', '幻觉', 'GPT-Image-2'],
    clues: [
      '画面逼真 ≠ 内容真实',
      'AI会"自信地编造"看似合理的细节',
      '信息密度越高的图片，事实核查难度越大',
      '专业知识是识破此类伪造的最佳武器',
    ],
  },
];

export const aiCapabilities = [
  {
    category: '当前AI已能做到',
    items: [
      '近乎完美的多语言文字渲染（中文准确率99%+）',
      '精确还原社交媒体UI界面（微博、抖音、小红书等）',
      '照片级真实感的人物、风景、产品图',
      '4K分辨率的高质量图像生成',
      '联网搜索后基于事实生成配图（但仍可能有误）',
      '一致的多角度角色/产品设计图',
    ],
  },
  {
    category: '当前AI仍可能出错',
    items: [
      '复杂物理规律（如液体流动、布料褶皱的动态真实性）',
      '精确的时间线一致性（事件发生的先后顺序）',
      '极小字体的文字渲染偶尔仍有瑕疵',
      '多人场景中的人物比例和交互自然度',
      '长期逻辑一致性（同一场景多次生成保持设定不变）',
    ],
  },
];
