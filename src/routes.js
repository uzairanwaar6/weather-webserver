const routes = (app) => {
    const user = 'Uzair';
    app.get('', (req, res) => {
        res.render('index', {
            title: 'Index Page',
            body: 'Content goes here......',
            createdBy: user
        });
    });

    app.get('/about', (req, res) => {
        res.render('about', {
            title: 'About Page',
            body: 'Content goes here......',
            createdBy: user
        });
    });

    app.get('/help', (req, res) => {
        res.render('help', {
            title: 'Help Page',
            body: 'Content goes here......',
            createdBy: user
        });
    });

    app.get('/help/*', (req, res) => {
        res.render('errors/404-help');
    });



    app.get('/weather', (req, res) => {
        //const controller = require('./controllers/weather_controller');
        require('./controllers/weather_controller').
            forecast(req, res, (response) => {
                res.send(response);
            });
    });

    app.get('/jsonj', (req, res) => {
        res.send({
            title: 'JSON Content',
            body: 'This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... This is a JSON body.... '
        });
    });

    app.get('*', (req, res) => {
        res.render('errors/404');
    });
};

module.exports = {
    routes
}