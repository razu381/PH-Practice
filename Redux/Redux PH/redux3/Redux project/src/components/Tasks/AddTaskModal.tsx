import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TaskForm from "./TaskForm";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

function AddTaskModal() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="bg-white py-2 px-5 w-fit text-black">
        Add new task
      </DialogTrigger>
      <DialogContent className="py-10">
        <DialogTitle className="sr-only">Add task form</DialogTitle>
        <DialogDescription className="sr-only">
          You can add new items in your todo's using this form
        </DialogDescription>
        <TaskForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskModal;
