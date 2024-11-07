import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProfilNavigation from "./ProfilNavigation";
const Profil = () => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:[20%] ">
        <ProfilNavigation
          open={openSide}
          handleClose={() => setOpenSide(false)}
        />
      </div>
      <div className="lg:w-[80%] m-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Profil;
