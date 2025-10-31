module.exports.home = (req, res) => {
    res.render("client/pages/home", {
        pageTitle: "Home Page MVC-Route",
    });
}

