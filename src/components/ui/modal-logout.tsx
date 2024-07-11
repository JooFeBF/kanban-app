import { Card, CardHeader, CardTitle, CardDescription } from "./card";
import { Button } from "./button";

export function ModalLogout() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Are you sure?</CardTitle>
        <CardDescription>Remember to do your tasks!</CardDescription>
      </CardHeader>
      <div className="flex gap-5 p-6">
        <Button className="w-full">Quit</Button>
        <Button className="w-full">Continue</Button>
      </div>
    </Card>
  );
}
