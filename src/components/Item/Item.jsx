import * as React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Item = ({ oneItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={oneItem.image}
          alt={oneItem.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {oneItem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${oneItem.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
