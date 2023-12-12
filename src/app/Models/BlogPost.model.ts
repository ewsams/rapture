export interface BlogPost {
  category: string;
  title: string;
  description: string;
  views: number;
  date: string;
  content: string;
  id: number;
  author: string;
  images?: Array<string>;
}
