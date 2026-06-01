export interface Skill {
  id: number
  name: string
  level: number
}

export const skills: Skill[] = [
  { id: 1, name: 'React', level: 90 },
  { id: 2, name: 'TypeScript', level: 85 },
  { id: 3, name: 'Node.js', level: 80 },
  { id: 4, name: 'Python', level: 75 },
  { id: 5, name: 'CSS/SCSS', level: 85 },
  { id: 6, name: 'MongoDB', level: 70 },
]
