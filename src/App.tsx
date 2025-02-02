import { Card } from "./componets/Card";
import CreateContextModel from "./componets/CreateContextModel";
import SideItem from "./componets/SideItem";
import { Button } from "./componets/ui/Button";
import { Logo } from "./icons/Logo";
import { PlusIcons } from "./icons/Plusicons";
import { Shareicons } from "./icons/Shareicons";
import { Xicon } from "./icons/Xicon";
// import Youtubeicons from "./icons/Youtubeicons";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen h-full flex gap-5">
      <CreateContextModel open={true} />
      <div className="w-72 bg-white">
        <SideItem text="Twitter" Icon={<Xicon />} />
        <SideItem text="Youtube" Icon={<Logo />} />
      </div>
      <div className="w-full">
        <div className="flex justify-end p-4 gap-3">
          <Button
            text="Share Brain"
            startIcons={<Shareicons size="lg" />}
            variants="secondary"
          />

          <Button
            text="Add Content"
            startIcons={<PlusIcons size="lg" />}
            variants="primary"
          />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 lg:grid-cols-3 m-4">
          <Card
            title="Project"
            link="https://www.youtube.com/watch?v=itnKEOZfDBM"
            type="youtube"
          />
          <Card
            title="Project"
            link="https://x.com/elonmusk/status/1812258574049157405"
            type="twitter"
          />
          <Card
            title="Project"
            link="https://www.youtube.com/watch?v=itnKEOZfDBM"
            type="youtube"
          />
          <Card
            title="Project"
            link="https://x.com/elonmusk/status/1812258574049157405"
            type="twitter"
          />
          <Card
            title="Project"
            link="https://www.youtube.com/watch?v=itnKEOZfDBM"
            type="youtube"
          />
          <Card
            title="Project"
            link="https://x.com/elonmusk/status/1812258574049157405"
            type="twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
