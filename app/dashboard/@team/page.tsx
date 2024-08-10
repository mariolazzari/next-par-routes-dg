import { pause } from "@/lib/utils";

async function TeamPage() {
  await pause(3000);

  throw new Error("Error loading Team page");

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4">
      <h2 className="text-xl">Team page</h2>
    </section>
  );
}

export default TeamPage;
