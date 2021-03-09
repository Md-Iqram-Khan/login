const Flash = require("../utils/Flash");

exports.dashboardGetController = async (req, res, next) => {
  res.render("pages/auth/Dashboard", {
    title: "My Dashboard",
    flashMessage: Flash.getMessage(req),
  });
};
