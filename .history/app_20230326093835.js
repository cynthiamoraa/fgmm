const express = require('express');
const ussdResult = require('./index');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const main = async()=>{
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.urlencoded({extended:false}))

    console.log('Server started')
}
main()