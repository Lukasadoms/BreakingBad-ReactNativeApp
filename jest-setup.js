let mockFetchResponse = null;

global.setMockFetchResponse = response => {
  mockFetchResponse = response;
};

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockFetchResponse),
  });
});
