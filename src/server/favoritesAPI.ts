import express, {Request, Response} from 'express';
import {loadFavouriteIds, toggleFavourite} from './databaseService';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.get('/favourites', (req, res) => {
  const favouriteIds = loadFavouriteIds();
  res.json(favouriteIds);
});

app.post('/favourites', (req, res) => {
  const selectedId = req.body.selectedId;
  toggleFavourite(selectedId);
  res.sendStatus(200);
});
