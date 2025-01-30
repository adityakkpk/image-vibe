import { Tasks } from "../api/tasks/route";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      {data.map((task: Tasks) => {
        return <div key={Math.random()}>{task.title}</div>
      })}
    </div>
  )
}

export default page