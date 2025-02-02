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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
var shareCodeSelf = [];
var DEBUG = false;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, sign, _i, _a, t, signDay, type, _b, _c, proInfo, _d, _e, proInfo, _f, _g, proInfo, _h, _j, proInfo, _k, shareCodeSelf_1, code, code;
    var _l, _m, _o, _p, _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _r.sent();
                i = 0;
                _r.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 31];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api("functionId=getInteractionHomeInfo&body=%7B%22sign%22%3A%22u6vtLQ7ztxgykLEr%22%7D&appid=content_ecology&client=wh5&clientVersion=1.0.0")];
            case 3:
                res = _r.sent();
                sign = res.result.taskConfig.projectId;
                DEBUG ? console.log(JSON.stringify(res)) : '';
                return [4 /*yield*/, api("functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 4:
                res = _r.sent();
                DEBUG ? console.log(JSON.stringify(res)) : '';
                _i = 0, _a = res.assignmentList;
                _r.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3 /*break*/, 30];
                t = _a[_i];
                if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 29];
                if (!t.ext) return [3 /*break*/, 29];
                if (t.ext.extraType === 'assistTaskDetail') {
                    console.log('助力码:', t.ext.assistTaskDetail.itemId);
                    shareCodeSelf.push({
                        encryptProjectId: sign,
                        encryptAssignmentId: t.encryptAssignmentId,
                        itemId: t.ext.assistTaskDetail.itemId
                    });
                }
                if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 8];
                if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 7];
                signDay = ((_l = t.ext.sign1.signList) === null || _l === void 0 ? void 0 : _l.length) || 0, type = t.rewards[signDay].rewardType;
                console.log(signDay, type);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%221%22%2C%22actionType%22%3A%22%22%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 6:
                res = _r.sent();
                console.log('签到成功', JSON.stringify(res));
                return [3 /*break*/, 8];
            case 7:
                console.log('已签到');
                _r.label = 8;
            case 8:
                _b = 0, _c = (_m = t.ext.productsInfo) !== null && _m !== void 0 ? _m : [];
                _r.label = 9;
            case 9:
                if (!(_b < _c.length)) return [3 /*break*/, 12];
                proInfo = _c[_b];
                if (!(proInfo.status === 1)) return [3 /*break*/, 11];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.itemId, "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 10:
                res = _r.sent();
                console.log(res);
                _r.label = 11;
            case 11:
                _b++;
                return [3 /*break*/, 9];
            case 12:
                _d = 0, _e = (_o = t.ext.shoppingActivity) !== null && _o !== void 0 ? _o : [];
                _r.label = 13;
            case 13:
                if (!(_d < _e.length)) return [3 /*break*/, 18];
                proInfo = _e[_d];
                if (!(proInfo.status === 1)) return [3 /*break*/, 17];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.advId, "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 14:
                res = _r.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 15:
                _r.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.advId, "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 16:
                res = _r.sent();
                console.log(res);
                _r.label = 17;
            case 17:
                _d++;
                return [3 /*break*/, 13];
            case 18:
                _f = 0, _g = (_p = t.ext.browseShop) !== null && _p !== void 0 ? _p : [];
                _r.label = 19;
            case 19:
                if (!(_f < _g.length)) return [3 /*break*/, 24];
                proInfo = _g[_f];
                if (!(proInfo.status === 1)) return [3 /*break*/, 23];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.itemId, "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 20:
                res = _r.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 21:
                _r.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.itemId, "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 22:
                res = _r.sent();
                console.log(res);
                _r.label = 23;
            case 23:
                _f++;
                return [3 /*break*/, 19];
            case 24:
                _h = 0, _j = (_q = t.ext.addCart) !== null && _q !== void 0 ? _q : [];
                _r.label = 25;
            case 25:
                if (!(_h < _j.length)) return [3 /*break*/, 29];
                proInfo = _j[_h];
                if (!(proInfo.status === 1)) return [3 /*break*/, 28];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.itemId, "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 26:
                res = _r.sent();
                console.log('加购:', res);
                if (res.msg === '任务已完成')
                    return [3 /*break*/, 29];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 27:
                _r.sent();
                _r.label = 28;
            case 28:
                _h++;
                return [3 /*break*/, 25];
            case 29:
                _i++;
                return [3 /*break*/, 5];
            case 30:
                i++;
                return [3 /*break*/, 2];
            case 31:
                console.log('助力排队:', shareCodeSelf);
                cookie = cookiesArr[0];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _k = 0, shareCodeSelf_1 = shareCodeSelf;
                _r.label = 32;
            case 32:
                if (!(_k < shareCodeSelf_1.length)) return [3 /*break*/, 36];
                code = shareCodeSelf_1[_k];
                console.log("\u8D26\u53F71 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code.itemId));
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(code.encryptProjectId, "%22%2C%22encryptAssignmentId%22%3A%22").concat(code.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(code.itemId, "%22%2C%22actionType%22%3A%22%22%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 33:
                res = _r.sent();
                console.log('助力结果:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 34:
                _r.sent();
                _r.label = 35;
            case 35:
                _k++;
                return [3 /*break*/, 32];
            case 36:
                if (!shareCodeSelf[0]) return [3 /*break*/, 38];
                cookie = cookiesArr[1];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                code = shareCodeSelf[0];
                console.log("\u8D26\u53F72 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code.itemId));
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(code.encryptProjectId, "%22%2C%22encryptAssignmentId%22%3A%22").concat(code.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(code.itemId, "%22%2C%22actionType%22%3A%22%22%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 37:
                res = _r.sent();
                console.log('助力结果:', res);
                _r.label = 38;
            case 38: return [2 /*return*/];
        }
    });
}); })();
function api(params) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action", params, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                            'Origin': 'https://h5.m.jd.com',
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
