global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          char_id: '1',
          name: 'Walter White',
          img: 'image',
          birthday: '1990',
          status: 'unknown',
          nickname: 'Heisenberg',
          portrayed: 'dontknow',
        },
      ]),
  });
});
