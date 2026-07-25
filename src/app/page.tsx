import { CoreWidget } from "@/components/CoreWidget";

export default function Home() {
  //

  return (
    <div className="w-full h-full">
      <CoreWidget
        user={{
          id: "userID_u123456",
          username: "wonglok831",
          email: "lok@lok.com",
        }}
        app={{
          name: "loklok cool widget",
          origin: `https://infinity-widget.vercel.app`,
        }}
      ></CoreWidget>
    </div>
  );
}

//
