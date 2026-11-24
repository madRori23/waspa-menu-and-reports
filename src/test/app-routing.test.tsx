import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /for-business/membership-fees", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/for-business/membership-fees");

    expect(matches.at(-1)?.routeId).toBe("/for-business/membership-fees");
  });

  it("matches a page for /about/full", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/about/full");

    expect(matches.at(-1)?.routeId).toBe("/about/full");
  });

  it("matches the office bearers page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/about/office-bearers");

    expect(matches.at(-1)?.routeId).toBe("/about/office-bearers");
  });

  it("matches a page for /consumer-support/direct-marketing-and-premium-services", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/consumer-support/direct-marketing-and-premium-services");

    expect(matches.at(-1)?.routeId).toBe("/consumer-support/direct-marketing-and-premium-services");
  });

  it("matches a page for /about without swallowing the new page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/about");

    expect(matches.at(-1)?.routeId).toBe("/about/");
  });
});
