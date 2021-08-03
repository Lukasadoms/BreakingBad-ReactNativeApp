import {existsSync, readFileSync, writeFileSync} from 'fs';

export const readFromJSONFile = (path: string) => {
  if (!checkIfFileExists(path)) {
    createEmptyFile(path);
    return {};
  }
  const jsonString = readFileSync(path, {encoding: 'utf-8'});
  return JSON.parse(jsonString);
};

export const writeToJSONFile = (path: string, obj: object) => {
  writeFileSync(path, JSON.stringify(obj));
};

const checkIfFileExists = (path: string) => {
  return existsSync(path);
};

const createEmptyFile = (path: string) => {
  writeFileSync(path, JSON.stringify({favourites: []}));
};
