"use strict";
exports.__esModule = true;
exports.validateId = void 0;
var validateId = function (req, res, next) {
    var id = req.params.id;
    if (typeof Number(id) === 'number') {
        next();
    }
    else {
        res.status(422).send();
    }
};
exports.validateId = validateId;
//# sourceMappingURL=validate.js.map