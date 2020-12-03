import Unsplash, { toJson } from 'unsplash-js';

const UNSPLASH_ACCESS_KEY = 'Yf46BuMEQjA-V2zGrYEXuDdizetbzPuqBeV788K2_Nk';
const unsplash = new Unsplash({ accessKey: UNSPLASH_ACCESS_KEY });

export { unsplash, toJson }