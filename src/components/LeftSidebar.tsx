import Image from "next/image";
import { Navigation } from "@/components";

const LeftSidebar = () => (
  <div className="flex flex-col overflow-y-auto w-96 pr-12">
    <div className="relative min-h-[208px] min-w-[208px] overflow-hidden">
      <Image
        className="scale-150 object-contain"
        fill
        src="/my_photo.jpg"
        sizes="208px"
        priority
        alt="bio image"
      />
    </div>
    <h1 className="pb-10 pt-6 text-xl">Viktor Shchepliahin</h1>
    <Navigation />
  </div>
);

export default LeftSidebar;
