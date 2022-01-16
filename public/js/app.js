const getWeather = (address, callback) => {
    const urlPrefix = `http://localhost:3000/`;
    const url = `weather?address=${address}`;
    fetch(url)
        .then((response) => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        callback(undefined, data.error);
                    }
                    else {
                        callback(data);
                    }

                });
        });
};


window.onload = ((le) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (fe) => {
        fe.preventDefault();

        const input = document.querySelector('input');
        getWeather(input.value, (response, error) => {
            const errorMessage = document.querySelector('#errorMessage');
            const sucessMessage = document.querySelector('#successMessage');
            
            sucessMessage.textContent = '';
            errorMessage.textContent = '';

            if (error) {
                errorMessage.textContent = error;
                errorMessage.style = 'color:red;';
            }
            else {
                sucessMessage.textContent = response.forecast;
                sucessMessage.style = 'color:green;';
            }
        });
    });
});