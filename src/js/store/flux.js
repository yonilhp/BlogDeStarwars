const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      selectedCharacter: null,
      characterImageUrl: "",
      planets: [], // Nueva propiedad para almacenar los planetas
      selectedPlanet: null, // Nueva propiedad para almacenar el planeta seleccionado
      planetImageUrl: "", // Nueva propiedad para almacenar la URL de la imagen del planeta
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

      // Acciones para manejar los planetas
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((err) => console.error(err));
      },

      loadPlanetDetails: (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
          .then((res) => res.json())
          .then((data) => {
            setStore({
              ...getStore(),
              selectedPlanet: {
                ...data.result.properties,
                description: data.result.description,
                uid: data.result.uid,
              },
            });
          })
          .catch((err) => console.error(err));
      },

      setPlanetImageUrl: (url) => {
        setStore({ planetImageUrl: url });
      },

      // Acción para agregar/eliminar favoritos
      toggleFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites;
        const exists = favorites.some((fav) => fav.uid === item.uid);

        let updatedFavorites;
        if (exists) {
          updatedFavorites = favorites.filter((fav) => fav.uid !== item.uid);
        } else {
          updatedFavorites = [...favorites, item];
        }

        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
    },
  };
};
export default getState;
