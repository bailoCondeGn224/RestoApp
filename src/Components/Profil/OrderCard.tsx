import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x5">
        <img
          className="h-16 W-16"
          src="https://img.freepik.com/free-photo/photorealistic-burger-meal_23-2151432909.jpg?t=st=1717675914~exp=1717679514~hmac=954bdf93ef09aeec6bb8888b614b686d837fd5caa14c1295e081bdecaaa37ad1&w=740"
          alt=""
        />
        <div className="pl-2">
          <p>Conakry</p>
          <p>45000GNF</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed" variant="contained">
          Completer
        </Button>
      </div>
    </Card>
  );
};

export default OrderCard;
