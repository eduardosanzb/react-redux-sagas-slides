export default 
`const state = {
  user: {
    name: 'Hawk',
  },
  films: [
    {
      name: 'There Will Be Blood',
    },
    {
      name: 'Apocalypse Now',
    },
  ],
};

// What follows is equivalent to passing props to the
// original components manually, that is:
//  <Welcome user={state.user} />
//  <FavouriteFilms films={state.films} />
render(
  <Provider value={state}>
    <WelcomeWithState />
    <FavouriteFilmsWithState />
  </Provider>,
  document.getElementById('root'),
);
`
