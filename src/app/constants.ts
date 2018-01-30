import { environment } from '../environments/environment';

export const baseUrl = environment.apiBaseUrl;

export const registerUrl = `${baseUrl}register`;
export const loginUrl = `${baseUrl}login`;
export const logoutUrl = `${baseUrl}logout`;
export const userUrl = `${baseUrl}user`;

export const categoryUrl = `${baseUrl}category`;
export const productUrl = `${baseUrl}product`;
export const orderUrl = `${baseUrl}order`;
export const imageUrl = `${baseUrl}upload`;