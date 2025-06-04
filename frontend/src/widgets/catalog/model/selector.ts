import { createSelector } from "@reduxjs/toolkit";
import { selectSearchQuery, selectPriceRange } from "@features/search";
import { selectSortBy, selectOrder } from "@features/sorting";
import { selectAllProducts } from "@entities/product";

export const selectFilteredAndSortedProducts = createSelector(
    [
        selectAllProducts,
        selectSearchQuery,
        selectPriceRange,
        selectSortBy,
        selectOrder,
    ],
    (products, query, { min, max }, sortBy, order) => {
        return [...products]
            .filter(
                (p) =>
                    p.title.toLowerCase().includes(query.toLowerCase()) &&
                    (min === undefined || p.price >= min) &&
                    (max === undefined || p.price <= max)
            )
            .sort((a, b) => {
                const aVal = a[sortBy];
                const bVal = b[sortBy];

                if (typeof aVal === "string" && typeof bVal === "string") {
                    return order === "asc"
                        ? aVal.localeCompare(bVal)
                        : bVal.localeCompare(aVal);
                }

                if (typeof aVal === "number" && typeof bVal === "number") {
                    return order === "asc" ? aVal - bVal : bVal - aVal;
                }

                return 0;
            });
    }
);
