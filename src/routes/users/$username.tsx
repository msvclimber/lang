import { createFileRoute } from "@tanstack/react-router";

import NoUserComponent from "../../features/NoUserComponent";

async function fetchUserData(username: string): Promise<{ name: string }> {
  return new Promise((resolve, reject) => {
    if (username === "msvclimber") {
      resolve({ name: username });
    } else {
      reject(new Error("беда"));
    }
  });
}

export const Route = createFileRoute("/users/$username")({
  component: RouteComponent,
  loader: ({ params }) => fetchUserData(params.username),
  errorComponent: NoUserComponent,
});

function RouteComponent() {
  const userdata = Route.useLoaderData();

  return <div>{`Hello "${userdata.name}"!`}</div>;
}
