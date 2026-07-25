"use client";

import { CoreWidget } from "@/components/CoreWidget";
import { createRoot } from "react-dom/client";
import "../app/globals.css";

export async function install({ domElement = null }) {
  if (!domElement) {
    throw new Error("missing dom element");
  }

  let root = createRoot(domElement);

  root.render(<CoreWidget></CoreWidget>);
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
