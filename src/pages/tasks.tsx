import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  // console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1> Tasks</h1>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskCard></TaskCard>
        ))}
      </div>
    </div>
  );
}
