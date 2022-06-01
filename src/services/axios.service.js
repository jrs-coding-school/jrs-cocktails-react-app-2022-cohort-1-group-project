const axios = require('axios');
const URL = `http://localhost:8080/api`

// -------ALL USER ROUTES--------------//
function getUserFavoritesById(userId) {
    return axios.get(`${URL}/drinks/favorites/${userId}`)
}

function getUserbyUsername(username) {
    return login({ username, password: '' })
}

function createNewUser({ username, password }) {
    return axios.post(`${URL}/users/signup`, { username, password })
}

function login({ username, password }) {
    return axios.post(`${URL}/users/login`, { username, password })
}

function addReview( userId, drinkId, rating, comment ) {
    return axios.post(`${URL}/reviews`, { userId, drinkId, rating, comment })
}

// NOTE -> CHANGED PARAMS TO BE OUT OF AN OBJECT 
function addNewFavorite(userId, drinkId) {
    return axios.post(`${URL}/users/favorite`, { userId, drinkId })
}

function deletebyUserId(id) {
    return axios.delete(`${URL}/users/${id}`)
}
function deleteReview({ userId, drinkId }) {
    return axios.delete(`${URL}/users/review/${userId}/${drinkId}`)
}

// NOTE -> CHANGED PARAMS TO BE OUT OF AN OBJECT 
function deleteFavorite(userId, drinkId) {
    return axios.delete(`${URL}/users/favorite/${userId}/${drinkId}`)
}

// -------ALL DRINK ROUTES----------------
function getRandomDrink() {
    return axios.get(`${URL}/drinks/random`)
}

function getDrinkById(id) {
    return axios.get(`${URL}/drinks/${id}`)
}

function getReviewsByDrinkId(drinkId) {
    return axios.get(`${URL}/reviews/${drinkId}`)
}

function getDrinksByName(drinkName) {
    return axios.get(`${URL}/drinks/drinkname/${drinkName}`)
}

function getDrinksBySpirit(spirit) {
    return axios.get(`${URL}/drinks/ingredients/${spirit}`)
}

function getDrinksByTwoIngredients(spirit, ingredient) {
    return axios.get(`${URL}/drinks/ingredients/${spirit}/${ingredient}`)
}

const api = {
    getUserFavoritesById,
    createNewUser,
    login,
    addReview,
    addNewFavorite,
    deletebyUserId,
    deleteReview,
    deleteFavorite,
    getRandomDrink,
    getDrinkById,
    getDrinksByName,
    getDrinksBySpirit,
    getDrinksByTwoIngredients,
    getUserbyUsername,
   getReviewsByDrinkId

}

function useAxios() {
    return api;
}

export { useAxios };
