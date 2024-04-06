export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  description:string
  metadata?: string;
  body?: string;
  mainImage?: any;
  image:string
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
