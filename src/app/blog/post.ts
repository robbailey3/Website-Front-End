export interface Post {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  date: string;
  status: string;
  categories?: string | string[];
  tags?: string[];
  image?: any;
}
