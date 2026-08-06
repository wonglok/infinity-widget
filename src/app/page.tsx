import { CoreWidget } from "@/components/CoreWidget";

export default function Home() {
  //

  let mockUser = {
    id: "userID_u123456",
    username: "wonglok831",
    email: "lok@lok.com",
  };
  let mockApp = {
    id: "ppap-app-id",
    name: "loklok cool widget",
    origin: `https://infinity-widget.vercel.app`,
  };

  return (
    <div className="w-full h-full">
      <CoreWidget user={mockUser} app={mockApp}></CoreWidget>
    </div>
  );
}

//

//

//

//
