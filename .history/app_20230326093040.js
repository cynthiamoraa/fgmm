const express = require('express');
const ussd = require('./index');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5500;
const main = async()=>{
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.urlencoded({extended:false}))
    app.use('/ussd',ussd)
    app.use('*',(req,res)=> res.status(404).send('404 Not found'))
    console.log('Server started')
}
main()