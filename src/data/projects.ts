import project1 from '../img/project1.svg'
import project2 from '../img/project2.svg'
import project3 from '../img/project3.svg'
import project4 from '../img/project4.svg'

export interface Project {
  id: number
  title: string
  description: string
  descriptionEn: string
  image: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '电商平台',
    description: '基于 React 和 Node.js 构建的全栈电商平台，支持用户认证、商品管理、购物车和订单系统。',
    descriptionEn: 'A full-stack e-commerce platform built with React and Node.js, supporting user authentication, product management, shopping cart and order system.',
    image: project1,
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: '任务管理应用',
    description: '高效的任务管理工具，支持任务分类、优先级设置、进度追踪和团队协作功能。',
    descriptionEn: 'An efficient task management tool supporting task categorization, priority setting, progress tracking and team collaboration.',
    image: project2,
    tags: ['React', 'TypeScript', 'Firebase'],
    link: '#'
  },
  {
    id: 3,
    title: '数据可视化仪表盘',
    description: '实时数据可视化平台，提供多种图表类型和交互式数据探索功能。',
    descriptionEn: 'Real-time data visualization platform offering multiple chart types and interactive data exploration.',
    image: project3,
    tags: ['Vue', 'D3.js', 'Python'],
    link: '#'
  },
  {
    id: 4,
    title: '社交分享平台',
    description: '轻量级社交网络应用，支持内容发布、点赞评论和用户关注功能。',
    descriptionEn: 'A lightweight social network application supporting content posting, likes, comments and user following.',
    image: project4,
    tags: ['Next.js', 'PostgreSQL', 'Redis'],
    link: '#'
  },
]
