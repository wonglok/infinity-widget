"use client";
// import { useEffect } from "react";
import { TikTakToe } from "./TikTakToe";

export function CoreWidget({ user, app }: { user: any; app: any }) {
  //

  return (
    <>
      <div className="p-3 bg-gray-200 h-full  bg-linear-120 from-[#dafdd1] to-[#ffb300]">
        <TikTakToe></TikTakToe>
      </div>
    </>
  );
}
