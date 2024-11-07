import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
const UserProfil = () => {
  const handleLogOut = () => {
    console.log("");
  };
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">Conde's Teams</h1>
        <p>Email:condesteams@orange.com</p>
        <Button
          sx={{ margin: "2rem 0rem" }}
          onClick={handleLogOut}
          variant="contained"
        >
          Deconexion
        </Button>
      </div>
    </div>
  );
};

export default UserProfil;
