"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { MotionConfig } from "framer-motion";
import { makeStore } from "./index";

/**
 * Client-side Redux provider. The lazy `useState` initializer creates the
 * store exactly once per client, which is the recommended pattern for the
 * Next.js App Router.
 *
 * `MotionConfig reducedMotion="user"` makes every framer-motion animation in
 * the tree automatically honor the OS "reduce motion" setting.
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Provider>
  );
}
