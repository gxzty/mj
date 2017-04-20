var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserObject = (function () {
    function UserObject() {
    }
    UserObject.getBalance = function () {
        return this.Balance;
    };
    UserObject.setBalance = function (_banlance) {
        this.Balance = _banlance;
    };
    UserObject.getUsername = function () {
        return this.UserName;
    };
    UserObject.setUsername = function (_username) {
        this.UserName = _username;
    };
    UserObject.getFullName = function () {
        return this.FullName;
    };
    UserObject.setFullName = function (_fullname) {
        this.FullName = _fullname;
    };
    UserObject.getToken = function () {
        return this.Token;
    };
    UserObject.setToken = function (_token) {
        this.Token = _token;
    };
    UserObject.getLevel = function () {
        return this.Level;
    };
    UserObject.setLevel = function (_level) {
        this.Level = _level;
    };
    return UserObject;
}());
__reflect(UserObject.prototype, "UserObject");
//# sourceMappingURL=UserObject.js.map