const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

const routes = require('./api_routes/routes');
routes(app);

var cors = require('cors');
app.use(cors());

app.use(express.static('assets'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
