import { gql } from "@apollo/client";

const GET_PRODUCTS_INFO = gql`
  query {
    plants (first: 100) {
      coverPhoto {
        url
      }
      id
      name
      nameInEnglish
      price
      slug
    }
  }
`;

const GET_PRODUCT_INFO = gql`
  query getProductInfo($slug: String!){
    plant (where: { slug: $slug }) {
      description {
        html
      }
    }
  }
`

export { GET_PRODUCTS_INFO, GET_PRODUCT_INFO }