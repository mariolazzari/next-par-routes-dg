import { pause } from "@/lib/utils";

async function TeamSettings() {
  await pause(3000);

  // throw new Error('Settings Data not available')

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-blue-600 text-white">
      <h2 className="text-xl">Team Settings</h2>
    </section>
  );
}

export default TeamSettings;
