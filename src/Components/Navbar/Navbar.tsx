import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box className="px-5 z-[100] py-[.8rem] bg-[#5A20CB] lg:px-20 flex justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li className="logo font-semibold text-gray-300 text-2xl">
              Resto Food
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon className="text-gray-300" sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {false && (
            <Avatar sx={{ bgcolor: "white", color: "#5A20CB" }}>BC</Avatar>
          )}
          <IconButton onClick={() => navigate("/account/login")}>
            <Person />
          </IconButton>
        </div>
        <div className="">
          <IconButton>
            <Badge badgeContent="5" color="secondary">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
