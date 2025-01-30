export interface Tasks {
  id: number;
  title: string;
  completed: boolean;
}

const Tasks: Tasks[] = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

export async function GET(request: Request) {
  return Response.json(Tasks);
}
