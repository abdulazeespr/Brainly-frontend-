import { Card } from "./componets/Card";
import SideItem from "./componets/SideItem";
import { Button } from "./componets/ui/Button";
import { Logo } from "./icons/Logo";
import { Papericons } from "./icons/Papericons";
import { PlusIcons } from "./icons/Plusicons";
import { Shareicons } from "./icons/Shareicons";
import { Xicon } from "./icons/Xicon";
// import Youtubeicons from "./icons/Youtubeicons";

function App() {
  return (
    <div className="bg-slate-200 h-screen flex gap-5">
      <div className="w-72 bg-white">
        <SideItem text="Twitter" Icon={<Xicon />} />
        <SideItem text="Youtube" Icon={<Logo />} />
      </div>
      <div>
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
        <div className="flex gap-3 flex-wrap">
          <Card
            startIcons={<Papericons size="lg" />}
            title="Project"
            content="the best way learn"
          />
          <Card
            startIcons={<Papericons size="lg" />}
            title="Project"
            content="the best way learn"
          />
          <Card
            startIcons={<Papericons size="lg" />}
            title="Project"
            content="the best way learn"
          />
          <Card
            startIcons={<Papericons size="lg" />}
            title="Project"
            content="the best way learn"
          />
          <Card
            startIcons={<Papericons size="lg" />}
            title="Project"
            content="the best way learn"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
