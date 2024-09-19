import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetCategoriesResponse, GetChainsResponse, ProductListQuery, ProductListResponse } from './model';

const clientId = '66e91cc74edb268b04e95429';
const clientSecret = 'be40e00a59aaaaa432085f4e2380553d0bcd4c7f19e44cc882b2fc2834ac6e4b';

export const dapplistApi = createApi({
    reducerPath: 'dapplistApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers) => {
            headers.set('client-id', clientId);
            headers.set('client-secret', clientSecret);
            headers.set('accept', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getListedProjects: builder.query<ProductListResponse, ProductListQuery>({
            query: ({offset, limit, categories, chain}) => {
                const params = new URLSearchParams();
                params.append('offset', offset.toString());
                params.append('limit', limit.toString());
                if (categories.length) {
                    categories.forEach(category => params.append('categories', category));
                }
                if (chain) params.append('limit', chain);

                return {
                    url: `/proposals?${params.toString()}`,
                    method: 'GET',
                };
            },
        }),
        getCategories: builder.query<GetCategoriesResponse, void>({
            query: () => '/categories',
        }),
        getChains: builder.query<GetChainsResponse, void>({
            query: () => '/chains',
        }),
    }),
});

export const {
    useLazyGetListedProjectsQuery,
    useGetCategoriesQuery,
    useGetChainsQuery
} = dapplistApi;
