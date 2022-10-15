/* eslint-disable */
export interface UpsellStoreConfiguration {
    additionalContent?: number[];
    crossPromotion?:    any[];
    gamePackages?:      number[];
    promotionScore?:    number;
    assets?:            UpsellStoreConfigurationAssets;
    merchandise?:       any[];
}

export interface UpsellStoreConfigurationAssets {
    featured:   string;
    small:      string;
    thumbnail?: string;
    logo?:      string;
}

export interface IngameStoreConfiguration {
    assets?:       IngameStoreConfigurationAssets;
    tags?:         number[];
    gamePackages?: number[];
}

export interface IngameStoreConfigurationAssets {
    background?:   string;
    logo?:         string;
    productImage?: ProductImageClass | string;
    imageGallery?: string[];
}

export interface ProductImageClass {
    "en-US": string;
    "fr-FR": string;
    "de-DE": string;
}
