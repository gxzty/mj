var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/Login/LoginScene.exml";
        zUtils.initInput(_this.phoneNumber, "手机号码");
        zUtils.initInput(_this.password, "输入密码");
        _this.password.displayAsPassword = true;
        _this.getLocalInfo();
        var loginBtnCallback = function (e) {
            UserObject.saveInfoToLocal();
            //15539531989
            //123456
            var loginInfo = 'username=' + _this.phoneNumber.text + '&password=' + _this.password.text;
            var onCompleted = function (event) {
                LoginScene.getInstance().loginBtn.$setEnabled(true);
                var foo = zHttp.getInstance().onHttpCompleted(event);
                if (foo) {
                    // 成功
                    var result = foo['results'];
                    UserObject.setUsername(result['username']);
                    UserObject.setFullName(result['full_name']);
                    UserObject.setToken(result['token']);
                    UserObject.setLevel(result['level']);
                    //console.log(UserObject);
                    GlobalConfig.setIsGroup(false); // 默认是代理
                    if (UserObject.getLevel() > 2) {
                        // level大于2(>=3),即为群主,设置为群主
                        GlobalConfig.setIsGroup(true);
                    }
                    SceneManager.getInstance().backToLobby();
                }
            };
            var request = new egret.HttpRequest();
            request.open("https://api.52plays.com/login", egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(loginInfo);
            request.addEventListener(egret.Event.COMPLETE, onCompleted, _this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
                console.log("HttpError");
                console.log(event);
            }, _this);
        };
        if (_this.autoLoginCheckBox.$selected) {
            loginBtnCallback(null);
        }
        _this.rememberPassCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (!_this.rememberPassCheckBox.$selected) {
                _this.autoLoginCheckBox.$setSelected(false);
            }
        }, _this);
        _this.autoLoginCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (_this.autoLoginCheckBox.$selected) {
                _this.rememberPassCheckBox.$setSelected(true);
            }
        }, _this);
        _this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, loginBtnCallback, _this);
        return _this;
    }
    LoginScene.prototype.onEnter = function () {
        LoginScene.getInstance().resetInput();
    };
    LoginScene.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new LoginScene();
        }
        return this.m_instance;
    };
    ;
    LoginScene.prototype.getLocalInfo = function () {
        var log = function (p) {
            console.log(p + ':' + egret.localStorage.getItem(p));
        };
        log('username');
        log('password');
        log('isRememberPass');
        log('isAutoLogin');
        if (egret.localStorage.getItem('username') != 'null' && egret.localStorage.getItem('username') != 'undefined') {
            this.phoneNumber.text = egret.localStorage.getItem('username');
        }
        if (egret.localStorage.getItem('isRememberPass') == '1') {
            this.rememberPassCheckBox.$setSelected(true);
            this.password.text = egret.localStorage.getItem('password');
        }
        if (egret.localStorage.getItem('isAutoLogin') == '1') {
            this.autoLoginCheckBox.$setSelected(true);
            this.rememberPassCheckBox.$setSelected(true);
        }
    };
    LoginScene.prototype.resetInput = function () {
        zUtils.reSetInputText(this.phoneNumber);
        zUtils.reSetInputText(this.password);
    };
    return LoginScene;
}(eui.Component));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map