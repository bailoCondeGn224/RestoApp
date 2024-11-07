import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const EventsCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          sx={{ height: 345 }}
        />
        <CardContent>
          <Typography variant="h5">Nouriture Guineen</Typography>
          <Typography variant="body2">
            50% de reduction a votre premiere commande
          </Typography>
          <div className="py-2 space-y-2">
            <p>{"Conakry"}</p>
            <p className="text-sm text-blue-500">6 Juin ,2024 12:00</p>
            <p className="text-sm text-red-500">6 Juin ,2024 12:00</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventsCard;
