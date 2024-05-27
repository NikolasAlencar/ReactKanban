export type Task = {
  id: string;
  content: string;
  author?: string;
  priority?: "medium" | "high" | "low";
};
