"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegisterV1 = void 0;
const responseWrapper_1 = require("../../common/responseWrapper");
const userRegisterV1 = (req, res) => {
    // logic to fetch and return users from the database
    // res.send("registerParticipantsV1");
    const dummyRes = "registerParticipantsV1";
    res.status(200).send((0, responseWrapper_1.responseWrapper)(dummyRes, null));
};
exports.userRegisterV1 = userRegisterV1;
//# sourceMappingURL=userRegisterV1.js.map