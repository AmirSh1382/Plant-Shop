// Functions
import { setPaginationConfigs, setNewPageConfigs } from "../../helper/functions";

const initialState = {
  allProducts: [],
  paginatedProducts: [],
  currentPage: 1,
  itemsPerPage: 10,
  pagesCount: 0,
  paginationBtns: [],
};

const paginationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const { currentPage, pagesCount } = state;

  switch (type) {
    case "PAGINATE_PRODUCTS":
      return {
        ...setPaginationConfigs(state, payload),
      };

    case "NEXT_PAGE":
      const nextPage = currentPage < pagesCount ? currentPage + 1 : currentPage;
      return {
        ...setNewPageConfigs(state, nextPage),
      };

    case "PREV_PAGE":
      const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
      return {
        ...setNewPageConfigs(state, prevPage),
      };

    case "CHANGE_PAGE":
      return {
        ...setNewPageConfigs(state, payload),
      };

    default:
      return state;
  }
};

export default paginationReducer;