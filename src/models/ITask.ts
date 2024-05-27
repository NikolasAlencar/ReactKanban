export type Task = {
  id: string;
  content: string;
  author?: string;
  index?: number;
  priority?: "medium" | "high" | "low";
};
