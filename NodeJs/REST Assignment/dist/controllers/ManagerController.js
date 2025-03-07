"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mService = require("../services/ManagerService");
class ManagerController {
    getAllPendingLeaves(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield mService.getAllPendingLeaves();
            resp.send(data.recordset);
        });
    }
    approveLeave(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Hello");
            mService.approveLeave(req.params.id);
            resp.send("Done>>");
        });
    }
    rejectLeave(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            mService.rejectLeave(req.params.id);
            resp.send("Rejected..");
        });
    }
}
module.exports = new ManagerController();
