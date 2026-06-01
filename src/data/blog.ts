export interface BlogPost {
  id: number
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  content: string
  contentEn: string
  category: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'React Hooks 最佳实践',
    titleEn: 'React Hooks Best Practices',
    excerpt: '深入探讨 React Hooks 的使用技巧和最佳实践，帮助你写出更优雅的代码。',
    excerptEn: 'Deep dive into React Hooks usage tips and best practices to write cleaner code.',
    content: '# React Hooks 最佳实践\n\n## 介绍\nReact Hooks 是 React 16.8 引入的新特性，让我们可以在函数组件中使用状态和其他 React 特性。\n\n## useState 的使用\n使用 useState 时，应该将相关的状态合并，避免过多的 state 调用。\n\n## useEffect 的依赖数组\n正确设置依赖数组可以避免不必要的重渲染。\n\n## 自定义 Hooks\n将重复的逻辑抽取为自定义 Hooks 可以提高代码复用性。',
    contentEn: '# React Hooks Best Practices\n\n## Introduction\nReact Hooks is a new feature introduced in React 16.8 that allows us to use state and other React features in functional components.\n\n## Using useState\nWhen using useState, related states should be combined to avoid too many state calls.\n\n## useEffect Dependency Array\nProperly setting the dependency array can avoid unnecessary re-renders.\n\n## Custom Hooks\nExtracting repeated logic into custom hooks improves code reusability.',
    category: '前端',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'TypeScript 类型体操',
    titleEn: 'TypeScript Type Gymnastics',
    excerpt: '学习 TypeScript 的高级类型技巧，提升类型安全和开发体验。',
    excerptEn: 'Learn advanced TypeScript type techniques to improve type safety and development experience.',
    content: '# TypeScript 类型体操\n\n## 泛型约束\n使用 extends 关键字可以约束泛型的类型范围。\n\n## 条件类型\n条件类型允许我们根据类型关系选择不同的类型。\n\n## infer 关键字\ninfer 可以在条件类型中推断类型，非常强大。\n\n## 映射类型\n映射类型可以基于旧类型创建新类型。',
    contentEn: '# TypeScript Type Gymnastics\n\n## Generic Constraints\nUsing the extends keyword constrains the type range of generics.\n\n## Conditional Types\nConditional types allow us to select different types based on type relationships.\n\n## infer Keyword\ninfer can infer types within conditional types, which is very powerful.\n\n## Mapped Types\nMapped types create new types based on old types.',
    category: '前端',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'Node.js 性能优化',
    titleEn: 'Node.js Performance Optimization',
    excerpt: '深入分析 Node.js 应用的性能瓶颈，提供实用的优化方案。',
    excerptEn: 'Deep analysis of Node.js application performance bottlenecks with practical optimization solutions.',
    content: '# Node.js 性能优化\n\n## 使用异步编程\n充分利用 Node.js 的异步特性可以提高并发处理能力。\n\n## 内存管理\n了解 V8 引擎的垃圾回收机制，避免内存泄漏。\n\n## 缓存策略\n合理使用缓存可以显著提高响应速度。\n\n## 负载均衡\n通过负载均衡可以横向扩展应用。',
    contentEn: '# Node.js Performance Optimization\n\n## Using Async Programming\nMaking full use of Node.js asynchronous features improves concurrency.\n\n## Memory Management\nUnderstanding V8 engine garbage collection to avoid memory leaks.\n\n## Caching Strategies\nProper caching significantly improves response speed.\n\n## Load Balancing\nHorizontal scaling through load balancing.',
    category: '后端',
    date: '2024-01-05'
  },
]
