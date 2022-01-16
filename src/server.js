const start = (app) => {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is started on port ${port}`);
    });
};

module.exports = {
    start
}