import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { useForm} from "react-hook-form";
import { createColumn } from "../services/API_token";

export  function ModalSection() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      console.log(register);
      const response = await createColumn( data.title, "1");// hay que cambiar la posicion a la que le toque
      console.log(response);
    }
    catch (error) {
      alert(error);
    }   
  };
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Section</CardTitle>
        <CardDescription>Enter a title for your new Kanban section.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter section title" 
            {...register("title")}/>
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
