import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/consumer-support")({
  component: () => <Outlet />,
});
