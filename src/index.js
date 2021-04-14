const app = require('./server.js');
require('dotenv').config();

async function main (){
    await app.listen(app.get(process.env.PORT || 'port'));
    console.log('Server listen on port:', app.get('port'));
}
main();
