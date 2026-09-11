"use client";

import { LayoutGroup } from "framer-motion";

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutGroup id="onerabbit-routes">
      {children}
    </LayoutGroup>
  );
}