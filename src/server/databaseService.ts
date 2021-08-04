import {readFromJSONFile, writeToJSONFile} from './fileReadWrite';
import path from 'path';

const PATH_TO_FAVOURITES_FILE = path.resolve(__dirname, './favourites.json');

export const loadFavouriteIds = () => {
  return readFromJSONFile(PATH_TO_FAVOURITES_FILE);
};

export const toggleFavourite = (selectedId: string) => {
  let data = loadFavouriteIds();
  if (data.includes(selectedId)) {
    const filteredFavouriteIds = data.filter(
      (favouriteId: string) => favouriteId !== selectedId,
    );
    writeToJSONFile(PATH_TO_FAVOURITES_FILE, filteredFavouriteIds);
  } else {
    data.push(selectedId);
    writeToJSONFile(PATH_TO_FAVOURITES_FILE, data);
  }
};
