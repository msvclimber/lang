import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/users" className="[&.active]:font-bold">
          Users
        </Link>
        <Link to="/words" className="[&.active]:font-bold">
          Words
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
