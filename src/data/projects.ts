export interface Project {
  id: number
  name: string
  description: string
  image: string
  techStack: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: '恋爱ai',
    description: '这是一个示例项目，用于展示项目卡片功能',
    image: '/project1.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    name: '智能体',
    description: '另一个示例项目，展示了不同的技术栈',
    image: '/project2.jpg',
    techStack: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/project2'
  },
  {
    id: 3,
    name: 'agent',
    description: '移动端优先的项目示例',
    image: '/project3.jpg',
    techStack: ['React Native', 'Firebase'],
    link: 'https://github.com/yourusername/project3'
  }
]