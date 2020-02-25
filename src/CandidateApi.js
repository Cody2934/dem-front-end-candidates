const URL = 'https://thawing-everglades-40599.herokuapp.com/api/candidates';
export default async function getCandidates() {
    // get rid of the first character of the hash (#)
    // let queryString = window.location.hash.slice(1);
    // build a url out of the url and querystring
    const url = `${URL}`;
    // send that url along to the fetch
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'False') {
        return {
            Search: [],
            // totalResults: 0
        };
    }
    return data;
}


export async function getCandidatesById(id) {
    // get rid of the first character of the hash (#)
    // let queryString = window.location.hash.slice(1);
    // build a url out of the url and querystring
    const url = `${URL}/${id}`;
    // send that url along to the fetch
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'False') {
        return {
            candidate: [],
            // totalResults: 0
        };
    }
    return data;
}

const URL2 = 'https://thawing-everglades-40599.herokuapp.com/api/types';
export async function getCandidateTypes() {
    // get rid of the first character of the hash (#)
    // let queryString = window.location.hash.slice(1);
    // build a url out of the url and querystring
    const url = `${URL2}`;
    // send that url along to the fetch
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'False') {
        return {
            Search: [],
            // totalResults: 0
        };
    }
    return data;
}
