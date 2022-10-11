import React, { useEffect } from "react";

// Components
import Loading from "../shared/Loading";
import Error from "../shared/Error";

// React-router-dom
import { useParams, useNavigate } from "react-router-dom";

// graph ql
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_INFO } from "../../graphql/queries";

const ProductDetail = () => {
  const navigate = useNavigate()

  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT_INFO, {
    variables: {
      slug: slug,
    },
  });

  useEffect(() => {
    window.scrollTo({top:0})
  }, [])

  if (loading) return <Loading />;

  if (error) return <Error msg={error.message} />;

  const discription = data.plant.description.html;

  return (
    <div className="flex flex-col max-w-6xl w-full mt-20 px-5 mx-auto">
      <div className="text-end mt-4 px-3 text-xl">
        <i 
          onClick={() => navigate(-1)}
          className="bi bi-arrow-left cursor-pointer"
        >

        </i>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: discription }}
        className="[&>img]:w-[95%] md:[&>img]:w-[75%] [&>img]:mx-auto [&>img]:rounded-lg [&>img]:mb-5
        [&>h1]:text-2xl [&>h1]:text-primary [&>h1]:mb-3 [&>h1]:font-semibold
        [&>h2]:text-2xl [&>h2]:text-primary [&>h2]:mb-3 [&>h2]:font-semibold
        [&>h3]:text-2xl [&>h3]:text-primary [&>h3]:mb-3 [&>h3]:font-semibold
        [&>p]:mb-2 pt-5 pb-10"
      >
      </div>
    </div>
  );
};

export default ProductDetail;