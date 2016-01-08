module.exports = {
    createPayment: function (charge, successHandler, errorHandler) {
        cordova.exec(successHandler, errorHandler, "PingppPlugin", "createPayment", [charge]);
    }
};