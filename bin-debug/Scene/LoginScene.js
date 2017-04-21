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
        _this.password.prompt = "输入密码";
        _this.password.displayAsPassword = true;
        _this.phoneNumber.prompt = "手机号码";
        _this.phoneNumber.text = "15539531989";
        _this.password.text = "123456";
        _this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.loginBtn.$setEnabled(false);
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
                    Alert.showWithCallback(foo['message'], function () { SceneManager.getInstance().backToLobby(); });
                }
            };
            var request = new egret.HttpRequest();
            request.open("http://192.168.1.211/mj_club/public/agent/login", egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(loginInfo);
            request.addEventListener(egret.Event.COMPLETE, onCompleted, _this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
                console.log("HttpError");
                console.log(event);
            }, _this);
        }, _this);
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
    LoginScene.prototype.reset = function () {
    };
    LoginScene.prototype.resetInput = function () {
        zUtils.reSetInputText(this.phoneNumber);
        zUtils.reSetInputText(this.password);
    };
    return LoginScene;
}(eui.Component));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map