import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleComplete } from "@/redux/features/tasks/taskSlice";
import clsx from "clsx";
import { getUsers } from "@/redux/features/users/userSlice";

function TaskCard({ task }) {
  let dispatch = useDispatch();
  let users = useSelector(getUsers);
  console.log(users);
  let user = null;
  if (task.assignTo) {
    user = users.find((user) => user.email === task.assignTo);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className={clsx(task.isComplete ? "line-through" : "")}>
          Title: {task?.title}
        </CardTitle>
        <CardDescription>{task?.description}</CardDescription>
        <CardAction
          className={clsx(
            "px-4 uppercase text-xs py-1 font-semibold rounded-xs",
            task.priority === "high"
              ? "bg-red-600 text-white"
              : "bg-neutral-300 text-black"
          )}
        >
          {task.priority}
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-5">
          <Button
            onClick={() => dispatch(toggleComplete(task.id))}
            className={clsx(
              "text-white",
              { "bg-green-600": task.isComplete === true },
              { "bg-yellow-600": task.isComplete != true }
            )}
          >
            {task.isComplete ? "Mark as incomplete" : "Mark as complete"}
          </Button>
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-600 text-white"
          >
            Delete Task
          </Button>
        </div>

        <h3 className="py-5">
          Assigned to : {user ? user.name : "Not assigned yet"}
        </h3>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
