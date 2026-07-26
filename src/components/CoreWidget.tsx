"use client";
import { useEffect } from "react";

export function CoreWidget({ user, app }: { user: any; app: any }) {
  //
  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="p-3 bg-gray-200 h-full  bg-linear-120 from-[#dafdd1] to-[#ffb300]">
        My Core Widget id: {app.id}
        <div>
          <pre>User: {JSON.stringify(user)}</pre>
          <pre>App: {JSON.stringify(app)}</pre>
        </div>
      </div>
    </>
  );
}
