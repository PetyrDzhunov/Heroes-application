const apiKey = 'AIzaSyBgcLHM3nJuJwteuW6NPOs2P0gJ7avANEE';
const dataBaseUrl = 'https://heroes-application-default-rtdb.europe-west1.firebasedatabase.app/';

const endpoints = {
    LOGIN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`,
    REGISTER: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`,
    HEROES: `heroes`
};

export async function getAllHeroes() {
    return get(dataBaseUrl + endpoints['HEROES'])
};

async function request(url, method, body) {
    let options = {
        method,
    };
    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    };
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
};

async function get(url) {
    return request(url, 'GET')
};

async function post(url, body) {
    return request(url, 'POST', body);
};

async function del(url) {
    return request(url, 'DELETE');
};

async function patch(url, body) {
    return request(url, 'PATCH', body);
};