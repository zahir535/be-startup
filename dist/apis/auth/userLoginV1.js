"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginV1 = void 0;
const responseWrapper_1 = require("../../common/responseWrapper");
const userLoginV1 = (req, res) => {
    // logic to fetch and return users from the database
    // res.send("registerParticipantsV1");
    const dummyRes = "registerParticipantsV1";
    res.status(200).send((0, responseWrapper_1.responseWrapper)(dummyRes, null));
};
exports.userLoginV1 = userLoginV1;
//# sourceMappingURL=userLoginV1.js.map