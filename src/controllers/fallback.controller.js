const controller404 = {};

controller404.fallback = (req, res) => {
    res.render('404');
    const data = {
        "name": "Discover",
        "error": [
            {
                "domain":"global",
                "reason":"requiered",
                "message":"route requiered",
                "locationType": "header",
            }
        ],
        "code": 404,
        "message": "route requiered"
    };
    console.log(data);
};

module.exports = controller404;