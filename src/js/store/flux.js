const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      selectedCharacter: null,
      characterImageUrl: "",
      favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Cargar favoritos desde localStorage
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

        let updatedFavorites;
        if (exists) {
          updatedFavorites = favorites.filter(
            (fav) => fav.uid !== character.uid
          );
        } else {
          updatedFavorites = [...favorites, character];
        }

        setStore({
          ...store,
          favorites: updatedFavorites,
        });

        // Guardar los favoritos actualizados en localStorage
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
    },
  };
};

export default getState;
