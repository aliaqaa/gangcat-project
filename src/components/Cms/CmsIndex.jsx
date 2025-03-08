import React, { useState } from "react";
import CmsItems from "./CmsItems/CmsItems";
import DashBoard from './DashBoard/DashBoard'
import EditUserInfo from './EditUserInfo/EditUserInfo.jsx'
import UserComments from "./UserComments/UserComments.jsx";
import UserPlea from "./UserPlea/UserPlea.jsx";
function CmsIndex() {
  const [activePanel, setActivePanel] = useState(1);
  const renderComponent = () => {
    switch (activePanel) {
      case 1:
        return <DashBoard />;
      case 2:
        return <EditUserInfo />;
      case 3:
        return <UserComments />;
      case 4:
        return <UserPlea />;

      default:
        return < DashBoard/>;
    }
  };
  return (
    <div className="container m-auto flex rounded-3xl p-10">
      <div id="leftside" className="flex flex-col primaryOrange rounded-s-4xl">
        <CmsItems activePanel={activePanel} setActivePanel={setActivePanel}/>
      </div>
      <div id="rightside" className=" bg-transparent">
      {renderComponent()}


      </div>
    </div>
  );
}

export default CmsIndex;
