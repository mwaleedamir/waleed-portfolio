"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./index";

/**
 * Client-side Redux provider. The lazy `useState` initializer creates the
 * store exactly once per client, which is the recommended pattern for the
 * Next.js App Router.
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(makeStore);

  return <Provider store={store}>{children}</Provider>;
}
