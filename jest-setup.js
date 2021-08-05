let mockFetchResponses = {};

global.setMockFetchResponse = (url, response) => {
  mockFetchResponses[url] = response;
};

global.fetch = jest.fn(url => {
  return Promise.resolve({
    json: () => Promise.resolve(mockFetchResponses[url]),
  });
});
