import { ReactNode } from "react";
import Header from "./Header";

type Props = Readonly<{
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
}>;

function DashboardLayout({ children, team, analytics }: Props) {
  return (
    <div className="p-8">
      <Header />
      {children}

      <div className="flex gap-4 py-4">
        {team}
        {analytics}
      </div>
    </div>
  );
}

export default DashboardLayout;
