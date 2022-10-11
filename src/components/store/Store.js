import React, { useEffect } from "react";

// Components
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import Product from "./Product";
import Pagination from "./Pagination";

// graphql
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_INFO } from "../../graphql/queries";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { paginateProducts } from "../../redux/pagination/paginationActions";
import { getLocalCartInfo } from "../../redux/cart/cartActions";

const Shop = () => {
  const dispatch = useDispatch();

  const paginationState = useSelector(state => state.paginationState);

  const { paginatedProducts } = paginationState;

  const { loading, error, data } = useQuery(GET_PRODUCTS_INFO);

  useEffect(() => {
    data && dispatch(paginateProducts(data.plants));
    data && dispatch(getLocalCartInfo());
  }, [data, dispatch]);

  if (loading) return <Loading />;

  if (error) return <Error msg={error.message} />;

  return (
    <div className="flex flex-col max-w-6xl w-full mt-20 px-5 mx-auto">
      <div className="text-lg text-primary font-semibold m-3">
        محصولات
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         grid-flow-row gap-5 m-3 mb-8"
      >
        {paginatedProducts.map(product => <Product key={product.id} {...product} /> )}
      </div>

      <div className="mb-10">
        {paginatedProducts.length && <Pagination />}
      </div>
    </div>
  );
};

export default Shop;