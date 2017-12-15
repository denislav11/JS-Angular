export const baseUrl = 'https://baas.kinvey.com/';
export const appKey = 'kid_BkKgjfVZG';
export const appSecret = '26c885eba6664742a91989a01a87ecb9';
export const masterSecret = '41f25d5140b44e64b8a0d2dc58ec6c05';

export const registerUrl = `${baseUrl}user/${appKey}`;
export const loginUrl = `${baseUrl}user/${appKey}/login`;
export const logoutUrl = `${baseUrl}user/${appKey}/_logout`;

export const categoryUrl = `${baseUrl}appdata/${appKey}/categories`;
export const productUrl = `${baseUrl}appdata/${appKey}/products`;
export const orderUrl = `${baseUrl}appdata/${appKey}/orders`;