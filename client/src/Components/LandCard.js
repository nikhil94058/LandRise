// src/components/LandCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const LandCard = ({ land, buyLand }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Land ID: {land.id}</Typography>
        <Typography variant="body1">Owner: {land.owner}</Typography>
        <Typography variant="body1">Price: {land.price} ETH</Typography>
        {land.forSale && (
          <Button variant="contained" color="primary" onClick={() => buyLand(land.id, land.price)}>
            Buy Land
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default LandCard;
