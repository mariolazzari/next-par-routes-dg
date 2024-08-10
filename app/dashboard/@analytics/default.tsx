import { pause } from "@/lib/utils";

async function DefaultAnalytics() {
  await pause(1000);

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-purple-700 text-white">
      <h2 className="text-xl">Default Analytics</h2>
    </section>
  );
}

export default DefaultAnalytics;
