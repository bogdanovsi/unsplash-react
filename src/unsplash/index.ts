import Unsplash from "unsplash-js";

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY  || '';
const unsplash = new Unsplash({ accessKey: UNSPLASH_ACCESS_KEY });

export default unsplash;