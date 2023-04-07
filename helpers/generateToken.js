    module.exports = () => {
        const random = Math.random().toString(36).substring(2, 5)
        const date = Date.now().toString(36).substring(5);
        return random + date
    }