import { CoreWidget } from "@/components/CoreWidget";

export default function Home() {
  //

  let mockUser = {
    id: "mock_userID_u123456",
    username: "mock_wonglok831",
    email: "mock_lok@lok.com",
  };

  //

  let mockApp = {
    id: "mock_ppap-app-id",
    name: "mock_loklok cool widget",
    origin: `https://infinity-widget.vercel.app`,
  };

  //

  return (
    <div className="w-full h-full">
      <CoreWidget user={mockUser} app={mockApp}></CoreWidget>
    </div>
  );
}
