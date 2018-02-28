export default 
`const Welcome = ({ user }) => (
  <p>Hello, {user.name}!</p>
);

const FavouriteFilms = ({ films }) => (
  <div>
    <p>Some of your favourite films are:</p>
    <ul>
      {films.map(film => (
        <li key={film.name}>{film.name}</li>
      )}
    </ul>
  </div>
);

// Wrap the components separately to give access to both variants.
const WelcomeWithState = withState(Welcome);
const FavouriteFilmsWithState = withState(FavouriteFilms);
`
