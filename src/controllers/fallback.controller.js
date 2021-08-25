const controller404 = {};

controller404.fallback = (req, res) => {
    res.render('404');
};

module.exports = controller404;