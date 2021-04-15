const app = require('./server.js');
require('./models/index');

app.listen(app.get('port'), () =>{
    console.log('Server listen on port:', app.get('port'));
});