export type Note = {
  id: string;
  title: string;
  slug: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
};
