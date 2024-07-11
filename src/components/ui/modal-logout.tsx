import { Card, CardHeader, CardTitle, CardDescription } from "./card";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface ModalLogoutProps {
  onClose: () => void;
}

export function ModalLogout({ onClose }: ModalLogoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Are you sure?</CardTitle>
        <CardDescription>Remember to do your tasks!</CardDescription>
      </CardHeader>
      <div className="flex gap-5 p-6">
        <Button className="w-full" onClick={handleLogout}>Leave</Button>
        <Button className="w-full" onClick={onClose}>Stay</Button>
      </div>
    </Card>
  );
}
