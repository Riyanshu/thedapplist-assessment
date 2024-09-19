export interface Category {
    id: string;
    label: string;
    name: string;
}

export interface Chain {
    id: string;
    imageIcon: string;
    label: string;
    name: string;
}

export interface Project {
    avatar: string;
    categories: Category[];
    chains: Chain[];
    description: string;
    name: string;
    permalink: string;
    socialLinks: (string | null)[];
    url: string;
    _id: string;
}

export interface ProductListResponse {
    message: string;
    response: {
        list:Project[];
        total: number;
    };
    status: string;
}

export interface ProductListQuery {
    offset: number;
    limit: number;
    categories: string[];
    chain: string | null;
}

export interface GetCategoriesResponse {
    message: string;
    data: Category[];
}

export interface GetChainsResponse {
    message: string;
    data: Chain[];
}