import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface OpenSlideProps {
  open: boolean;
  handleClose: () => void;
}

const ProfilNavigation: React.FC<OpenSlideProps> = ({ open, handleClose }) => {
  const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteBorderIcon /> },
    { title: "Address", icon: <AddReactionIcon /> },
    { title: "Payement", icon: <AccountBalanceWalletIcon /> },
    { title: "Notification", icon: <NotificationsActiveIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> },
  ];

  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const handleNavigate = (item: any) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSmallScreen ? open : true}
        anchor="left"
        onClose={handleClose}
      >
        <div className="w-[50vw] lg:w-[15vw] h-[100vh] flex flex-col justify-center text-xl gap-8">
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="px-5 flex items-center space-x-5 cursor-pointer"
                onClick={() => handleNavigate(item)}
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {index !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfilNavigation;
