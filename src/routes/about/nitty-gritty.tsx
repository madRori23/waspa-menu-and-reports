import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/nitty-gritty")({
  component: () => <Outlet />,
});
