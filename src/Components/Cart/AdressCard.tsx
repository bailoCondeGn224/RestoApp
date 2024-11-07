import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

interface AddressCardProps {
  items: any;
  showButton: boolean;
  handleSelectAddress(): void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  items,
  showButton,
  handleSelectAddress,
}) => {
  return (
    <Card className="flex gap-5 w-64 p-5 ">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>
          Conakry, Ratoma, ipsum dolor sit amet consectetur adipisicing elit.
          Quae maxime aliquam unde facere quas reiciendis! Harum repudiandae rem
          Guinee Conakry.
        </p>
        {showButton && (
          <Button onClick={handleSelectAddress} variant="contained" fullWidth>
            Selectionner
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
