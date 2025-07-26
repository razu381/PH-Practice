//import React from 'react'

import AddTaskModal from "@/components/Tasks/AddTaskModal";
import TaskCard from "@/components/Tasks/TaskCard";
import { selectTasks, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { useGetTasksQuery } from "@/redux/api/baseApi";

function Tasks() {
  let tasks = useSelector(selectTasks);
  let dispatch = useDispatch();

  let { data: tasksObj, isLoading, isError } = useGetTasksQuery(undefined);

  console.log("isLoading ", isLoading);
  console.log("Data ", tasksObj?.tasks);
  console.log("isError ", isError);

  console.log(tasksObj);
  return (
    <div className="py-10 ">
      <div className="flex flex-col justify-center my-5">
        <AddTaskModal />
      </div>

      <Tabs defaultValue="high" className="w-full">
        <div className="grid grid-cols-2">
          <h2 className="text-lg font-semibold text-left">Task List</h2>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger
              value="all"
              onClick={() => dispatch(updateFilter("all"))}
            >
              All tasks
            </TabsTrigger>
            <TabsTrigger
              value="high"
              onClick={() => dispatch(updateFilter("high"))}
            >
              High priority
            </TabsTrigger>
            <TabsTrigger
              value="medium"
              onClick={() => dispatch(updateFilter("medium"))}
            >
              Medium priority
            </TabsTrigger>
            <TabsTrigger
              value="low"
              onClick={() => dispatch(updateFilter("low"))}
            >
              Low priority
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className="grid grid-cols-3 gap-5 my-10">
        {tasksObj?.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
