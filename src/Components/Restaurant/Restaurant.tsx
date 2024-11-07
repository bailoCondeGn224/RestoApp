import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Restaurant = () => {
  const isPointerEnabled: boolean = true;
  return (
    <Card className="w-[18rem]">
      <div
        className={`${
          isPointerEnabled ? "cursor-pointer" : "cursor-not-allowed"
        } relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={isPointerEnabled ? "success" : "error"}
          label={isPointerEnabled ? "Success" : "Closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full  justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Restauration en Guinée</p>
          <p className="text-gray-500 text-sm ">
            j'ai envie de tout plonger dans notre atmosphère mondiale
          </p>
        </div>
        <div>
          <IconButton>
            {isPointerEnabled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default Restaurant;
