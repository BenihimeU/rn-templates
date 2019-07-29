import axios from 'axios';

const UTUBE_BASEURL = "https://www.googleapis.com/youtube/v3/";
const UTUBE_APIKEY = "AIzaSyDILDZH5rFMKasPyw2Z7U1C6qKEcgUBU9A";

export default axios.create({
    baseURL: UTUBE_BASEURL,
    params: {
        "part": "snippet",
        "maxResults": 5,
        "order": "date",
        "key": UTUBE_APIKEY
    }
});