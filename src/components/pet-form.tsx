import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function PetForm() {
  return (
    <form>
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" />
    </form>
  );
}
