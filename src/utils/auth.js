export const BASE_URL = "https://auth.nomoreparties.co"

export function checkResponse (res) {


    return res.ok ? JSON.parse(res.body) : `Ошибка: ${res.status}`
}

export function register (email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) =>res.json())
        .catch((err) => checkResponse(err))
}

export function authorization (email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) => res.json())
}

export  function getToken (token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => checkResponse(res))
}