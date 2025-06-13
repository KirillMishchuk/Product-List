import { fetchProducts, selectProductStatus } from "@entities/product";
import { useProductsFromApollo } from "@entities/product/api/useProductsFromApollo";
import { selectRequestType } from "@features/request-type/model/selectors";
import { useGetProductsQuery } from "@shared/api/rtk-query/productApi";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { useEffect } from "react";

export const useProductDataByType = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectProductStatus);

    const requestType = useAppSelector(selectRequestType);

    const {
        data: restData,
        isLoading: restLoading,
        error: restError,
    } = useGetProductsQuery(undefined, {
        skip: requestType !== "query",
    });

    const {
        data: graphqlData,
        loading: graphqlLoading,
        error: graphqlError,
        refetch: graphqlRefetch,
    } = useProductsFromApollo(requestType === "graphql");

    useEffect(() => {
        if (requestType === "mock") dispatch(fetchProducts());
    }, [dispatch, requestType]);

    const data = requestType === "query" ? restData : graphqlData;
    const loading = requestType === "query" ? restLoading : graphqlLoading;
    const error = requestType === "query" ? restError : graphqlError;
    const refetch = requestType === "query" ? () => {} : graphqlRefetch;

    return { data, loading, error, refetch };
};
