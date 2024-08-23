const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      selectedCharacter: null,
      characterImageUrl: "",
      favorites: [], // Nueva propiedad para los favoritos
    },
    actions: {
      loadCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ characters: data.results });
          })
          .catch((err) => console.error(err));
      },

      loadCharacterDetails: (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
          .then((res) => res.json())
          .then((data) => {
            setStore({
              ...getStore(),
              selectedCharacter: {
                ...data.result.properties,
                description: data.result.description,
                uid: data.result.uid,
              },
            });
          })
          .catch((err) => console.error(err));
      },

      setCharacterImageUrl: (url) => {
        setStore({ characterImageUrl: url });
      },

      // Acción para agregar/eliminar favoritos
      toggleFavorite: (character) => {
        const store = getStore();
        const favorites = store.favorites;
        const exists = favorites.some((fav) => fav.uid === character.uid);

        if (exists) {
          setStore({
            ...store,
            favorites: favorites.filter((fav) => fav.uid !== character.uid),
          });
        } else {
          setStore({
            ...store,
            favorites: [...favorites, character],
          });
        }
      },
    },
  };
};

export default getState;
