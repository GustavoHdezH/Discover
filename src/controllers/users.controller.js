const controlleruser = {};

// Registro
controlleruser.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}

controlleruser.signup = (req, res) => {
    res.send('signup');
}

//Inicio
controlleruser.renderSigninForm = (req, res) => {
    res.render('users/sign');
}

controlleruser.signin = (req, res) => {
    res.send('signing');
}

controlleruser.logout = (req, res) => {
    res.send('Logout');
}

module.exports = controlleruser;