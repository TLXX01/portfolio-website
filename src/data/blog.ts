export interface BlogPost {
  id: number
  title: {
    zh: string
    en: string
  }
  excerpt: {
    zh: string
    en: string
  }
  content: {
    zh: string
    en: string
  }
  date: string
  tags: string[]
  coverImage?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      zh: 'React 18 新特性详解',
      en: 'React 18 New Features'
    },
    excerpt: {
      zh: 'React 18 带来了许多令人兴奋的新特性，包括并发渲染、自动批处理等。让我们一起深入了解这些新功能。',
      en: 'React 18 introduces many exciting new features including concurrent rendering, automatic batching, and more.'
    },
    content: {
      zh: '# React 18 新特性详解\n\nReact 18 是 React 团队多年努力的成果，带来了许多令人兴奋的新特性。\n\n## 并发渲染\n\n并发渲染是 React 18 最重要的新特性之一。它让 React 能够中断渲染过程，处理更高优先级的更新。\n\n## 自动批处理\n\n在 React 18 之前，只有事件处理函数中的更新会被批处理。现在，所有更新都会自动批处理。\n\n## Suspense 改进\n\nSuspense 在 React 18 中变得更加稳定和强大，支持更多场景。',
      en: '# React 18 New Features\n\nReact 18 is the result of years of work by the React team, bringing many exciting new features.\n\n## Concurrent Rendering\n\nConcurrent rendering is one of the most important new features in React 18. It allows React to interrupt rendering and handle higher-priority updates.\n\n## Automatic Batching\n\nBefore React 18, only updates inside event handlers were batched. Now, all updates are automatically batched.\n\n## Suspense Improvements\n\nSuspense is more stable and powerful in React 18, supporting more use cases.'
    },
    date: '2024-01-15',
    tags: ['React', 'JavaScript', '前端']
  },
  {
    id: 2,
    title: {
      zh: 'TypeScript 最佳实践',
      en: 'TypeScript Best Practices'
    },
    excerpt: {
      zh: 'TypeScript 是一个强大的类型系统，正确使用可以大大提升代码质量和开发效率。',
      en: 'TypeScript is a powerful type system that can greatly improve code quality and development efficiency when used correctly.'
    },
    content: {
      zh: '# TypeScript 最佳实践\n\n使用 TypeScript 可以让我们在开发过程中更早地发现错误。\n\n## 使用严格模式\n\n建议在 tsconfig.json 中启用严格模式，这样可以获得更强大的类型检查。\n\n## 合理使用类型推断\n\nTypeScript 有强大的类型推断能力，不要过度使用类型注解。\n\n## 使用泛型\n\n泛型是 TypeScript 中非常强大的特性，可以创建可复用的组件和函数。',
      en: '# TypeScript Best Practices\n\nUsing TypeScript allows us to catch errors earlier in the development process.\n\n## Use Strict Mode\n\nIt is recommended to enable strict mode in tsconfig.json for stronger type checking.\n\n## Use Type Inference Wisely\n\nTypeScript has powerful type inference capabilities, avoid overusing type annotations.\n\n## Use Generics\n\nGenerics are a powerful feature in TypeScript for creating reusable components and functions.'
    },
    date: '2024-01-10',
    tags: ['TypeScript', '前端', '编程']
  },
  {
    id: 3,
    title: {
      zh: 'Tailwind CSS 入门指南',
      en: 'Tailwind CSS Guide'
    },
    excerpt: {
      zh: 'Tailwind CSS 是一个实用优先的 CSS 框架，可以帮助我们快速构建美观的界面。',
      en: 'Tailwind CSS is a utility-first CSS framework that helps us build beautiful interfaces quickly.'
    },
    content: {
      zh: '# Tailwind CSS 入门指南\n\nTailwind CSS 是一个革命性的 CSS 框架。\n\n## 什么是实用优先\n\n实用优先意味着使用小的、单一用途的类来构建界面。\n\n## 配置 Tailwind\n\n学习如何配置 Tailwind CSS，包括自定义主题和插件。\n\n## 最佳实践\n\n分享一些使用 Tailwind CSS 的最佳实践和技巧。',
      en: '# Tailwind CSS Guide\n\nTailwind CSS is a revolutionary CSS framework.\n\n## What is Utility-First\n\nUtility-first means using small, single-purpose classes to build interfaces.\n\n## Configuring Tailwind\n\nLearn how to configure Tailwind CSS, including custom themes and plugins.\n\n## Best Practices\n\nShare some best practices and tips for using Tailwind CSS.'
    },
    date: '2024-01-05',
    tags: ['CSS', 'Tailwind', '前端']
  }
]