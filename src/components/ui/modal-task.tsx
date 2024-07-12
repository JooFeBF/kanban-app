import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
import { Label } from "./label"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Button } from "./button"
import { useForm} from "react-hook-form";
import { useCreateCardMutation } from "@/redux/api";

export function ModalTask() {
  const { register, handleSubmit } = useForm();
  const [createCard] = useCreateCardMutation();
  const onSubmit = async (data: any) => {
    try {
      const response = await createCard(1, 1, data.title, data.description, 1);// hay que cambiar la posicion a la que le toque;
      console.log(response);
      alert(response.data.message);
    }
    catch (error) {
      alert(error);
    }   
  };
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>New Task</CardTitle>
        <CardDescription>Create a new section for your Kanban board.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter Task title" 
            {...register("title")}/>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter Task description"
            {...register("description")} />
          </div>
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button type="submit">Create Section</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
