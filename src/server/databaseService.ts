import {readFromJSONFile, writeToJSONFile} from './fileReadWrite';
import path from 'path';

export interface IFavourites {
  favourites: string[];
}

const PATH_TO_FAVOURITES_FILE = path.resolve(__dirname, './favourites.json');

export const loadFavouriteIds = (): IFavourites => {
  return readFromJSONFile(PATH_TO_FAVOURITES_FILE);
};

export const toggleFavourite = (selectedId: string) => {
  console.log("server toggling :"selectedId);
  let data = loadFavouriteIds();
  if (data.favourites.includes(selectedId)) {
    const filteredFavouriteIds = data.favourites.filter(
      (favouriteId: string) => favouriteId !== selectedId,
    );
    writeToJSONFile(PATH_TO_FAVOURITES_FILE, filteredFavouriteIds);
  } else {
    data.favourites.push(selectedId);
    writeToJSONFile(PATH_TO_FAVOURITES_FILE, data);
  }
  console.log(data);
};
