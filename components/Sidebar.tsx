"usr client";
import { Disc, Divide, ExternalLink, HistoryIcon, Home, Lightbulb, Menu, Podcast, ThumbsUp } from "lucide-react"
import { Button } from "./ui/button";

const Sidebar = ({ sidebar, sidebarSwitch }) => {

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${sidebar ? "translate-x-0" : ""}`}>

      <Button id="icon" className="hidden" onClick={sidebarSwitch}>
        <Menu size={23} />
      </Button>
      <ul>
        <div className="cursor-pointer flex py-0 px-3 my-3 mx-1">
          <div>
            <Home />
          </div>
          <div className="px-4">
            Home
          </div>
        </div>
        <div className="cursor-pointer flex py-0 px-3 my-3 mx-1">
          <div> <ThumbsUp /> </div>

          <div className="px-4">
            Liked Videos
          </div>
        </div>

        <div className="cursor-pointer flex py-0 px-3 my-3 mx-1">
          <div><HistoryIcon /></div>
          <div className="px-4">History</div>
        </div>
        <div className="cursor-pointer flex py-0 px-3 my-3 mx-1">
          <div>
            <Lightbulb size={23} />
          </div>
          <div className="px-4">
            Library
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
