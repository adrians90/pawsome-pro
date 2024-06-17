import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex flex-col items-center space-y-10">
      <H1>Pawsome Pro access requires payment.</H1>

      <Button>Buy lifetime access for £299</Button>
    </main>
  );
}
