const paginateProducts = (products) => {
  return { type: "PAGINATE_PRODUCTS", payload: products };
};

const nextPage = () => {
  return { type: "NEXT_PAGE" };
};

const prevPage = () => {
  return { type: "PREV_PAGE" };
};

const changePage = newPageNumber => {
  return { type: "CHANGE_PAGE", payload: newPageNumber };
};

export { paginateProducts, nextPage, prevPage, changePage };