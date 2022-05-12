const { favorites, secondKey } = require("./animals.json");


function amountOfFavoriteAnimals(){
    return favorites.length;
}





module.exports = {
    calculateFavoriteAnimals: amountOfFavoriteAnimals
};