const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      selectedCharacter: null,
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
    },
  };
};

export default getState;
