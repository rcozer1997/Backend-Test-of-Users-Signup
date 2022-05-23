"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_route_1 = __importDefault(require("./routes/user.route"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use('/', user_route_1["default"]);
app.listen(3000, function () {
    return console.log('REST API server ready at: http://localhost:3000');
});
//# sourceMappingURL=index.js.map