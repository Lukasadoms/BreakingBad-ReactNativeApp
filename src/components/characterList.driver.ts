import {componentDriver} from 'react-component-driver/index';
import {withStore, getTextNodes} from 'redux-component-driver';
import {store} from '../store';
import {testIDs} from '../test-ids';
import {CharacterList} from './characterList';
import {Character} from '../reducers/charactersReducer';

export const characterListDriver = () =>
  componentDriver(withStore(CharacterList, store), {
    getCharacterList() {
      return this.getByID(testIDs.CHARACTER_LIST);
    },
    getCharacterName(characterID: string) {
      const character = this.getByID(testIDs.CHARACTER_NAME(characterID));
      return getTextNodes(character).join();
    },
    getSearchField() {
      return this.getByID(testIDs.SEARCH_FIELD);
    },
    searchFor(name: string) {
      const node = this.getSearchField();
      if (node) {
        node.props.onChangeText(name);
      }
    },
    getCharacterNameList() {
      const nodes = this.filterByID(testIDs.CHARACTER_ITEM);
      console.log(nodes, 'nodes');
      return nodes.map(character => getTextNodes(character).join());
    },
    withSearchResponse(response: Character[]) {
      global.setMockFetchResponse(
        'https://www.breakingbadapi.com/api/characters?name=Skyler+White',
        response,
      );
      return this;
    },
    withListResponse(response: Character[]) {
      global.setMockFetchResponse(
        'https://www.breakingbadapi.com/api/characters',
        response,
      );
      return this;
    },
    withFavoritesResponse() {
      global.setMockFetchResponse('http://localhost:3000/favourites', []);
      return this;
    },
  });
