module.exports={
    getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    },
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
};
