import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@shared/api/graphql/product/queries";

export const useProductsFromApollo = () => {
    const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
        fetchPolicy: "cache-first", // use cache if available
        // pollInterval: 1000,
    });

    return {
        data: data ?? [],
        loading,
        error,
        refetch,
    };
};
