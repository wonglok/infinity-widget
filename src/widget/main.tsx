"use client";

import { CoreWidget } from "@/components/CoreWidget";
import { createRoot } from "react-dom/client";
import "../app/globals.css";

export async function install({ domElement = null, user = null, app = null }) {
  if (!domElement) {
    throw new Error("missing dom element");
  }

  let root = createRoot(domElement);

  root.render(<CoreWidget user={user} app={app}></CoreWidget>);
  return () => {
    root.unmount();
  };
}

//
//
//
//

//
//
