var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserObject = (function () {
    function UserObject() {
    }
    UserObject.getPassword = function () {
        return this.Password;
    };
    UserObject.setPassword = function (_password) {
        this.Password = _password;
    };
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
    UserObject.saveInfoToLocal = function () {
        egret.localStorage.clear();
        egret.localStorage.setItem('username', LoginScene.getInstance().phoneNumber.text);
        egret.localStorage.setItem('password', LoginScene.getInstance().password.text);
        egret.localStorage.setItem('isRememberPass', LoginScene.getInstance().rememberPassCheckBox.$selected ? '1' : '0');
        egret.localStorage.setItem('isAutoLogin', LoginScene.getInstance().autoLoginCheckBox.$selected ? '1' : '0');
        var log = function (p) {
            console.log(p + ':' + egret.localStorage.getItem(p) + "///");
        };
        log('username');
        log('password');
        log('isRememberPass');
        log('isAutoLogin');
    };
    UserObject.userQuit = function () {
        var _this = this;
        Alert.showWithCallback('您真的要退出登录吗?', function () {
            _this.Level = "";
            _this.Token = "";
            _this.FullName = "";
            _this.UserName = "";
            _this.Balance = "";
            SceneManager.getInstance().replaceLayer(LoginScene);
        });
    };
    UserObject.getUserInfo = function () {
        var infoCallback = function (e) {
            var foo = zHttp.getInstance().onHttpCompleted(e);
            if (foo) {
                var result = foo['results'];
                UserObject.setBalance(result['balance']);
                try {
                    SceneManager.getInstance().getRunningLayer().setBelence(UserObject.getBalance());
                }
                catch (e) {
                    console.log("切换场景过快!");
                }
            }
        };
        zHttp.getInstance().sendHttpRequest(this, "account/detail", egret.HttpMethod.POST, infoCallback);
    };
    UserObject.getUsersAgentInfo = function () {
        //console.log("getUsersAgentInfo");
        zHttp.getInstance().sendHttpRequest(this, "account/listing", egret.HttpMethod.POST, function (e) {
            AgentManager.getInstance().resetGroupItems();
            var foo = zHttp.getInstance().onHttpCompleted(e);
            if (foo) {
                //console.log(foo['results']);
                var agentArray = foo['results'];
                for (var _i = 0; _i < agentArray.length; ++_i) {
                    var _agentItem = new AgentItem(agentArray[_i]);
                    AgentManager.getInstance().addGroupItem(_agentItem);
                    _agentItem.$setY(_i * (_agentItem.$getHeight() + 20));
                }
            }
        });
    };
    UserObject.getChargeRecordInfo = function () {
        //console.log("getChargeRecordInfo");
        zHttp.getInstance().sendHttpRequest(this, "agent/listing", egret.HttpMethod.POST, function (e) {
            var foo = zHttp.getInstance().onHttpCompleted(e);
            if (foo) {
                //console.log(foo['results']);
                var chargeRecordArray = foo['results'];
                for (var _i = 0; _i < chargeRecordArray.length; ++_i) {
                    var _chargeItem = new FinancialRecordItem(chargeRecordArray[_i]);
                    FinancialRecord.getInstance().addGroupItem(_chargeItem);
                    _chargeItem.$setY(_i * (_chargeItem.$getHeight() + 12));
                }
            }
        });
    };
    return UserObject;
}());
__reflect(UserObject.prototype, "UserObject");
//# sourceMappingURL=UserObject.js.map