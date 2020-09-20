export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const toggleModal = () => {
  return {
    type: "TOGGLE",
  };
};

export const getFirstPage = (items) => {
  return {
    type: "GETFIRSTPAGE",
    items: items
  };
};
