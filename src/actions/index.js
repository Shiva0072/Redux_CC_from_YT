//actions
export const petIncrement = () => {
  return {
    type: "PET_INCREASED",
  };
};
export const petDecrement = () => {
  return {
    type: "PET_DECREASED",
  };
};

export const getUsers = () => {
  return {
    type: "GET_USERS_REQUESTED",
  };
};
