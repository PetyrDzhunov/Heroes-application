const apiKey = 'AIzaSyBgcLHM3nJuJwteuW6NPOs2P0gJ7avANEE';
const dataBaseUrl = 'https://heroes-application-default-rtdb.europe-west1.firebasedatabase.app/';
export async function getAllHeroes() {
    return request
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
}