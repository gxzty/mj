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
        _this.sceneCode = 1;
        _this.skinName = "resource/skin/Scene/Login/LoginScene.exml";
        _this.phoneNumber.addEventListener(egret.TouchEvent.FOCUS_IN, function (e) {
            if (_this.phoneNumber.$getText() == '手机号码') {
                _this.phoneNumber.$setText("");
            }
        }, _this);
        _this.phoneNumber.addEventListener(egret.TouchEvent.FOCUS_OUT, function (e) {
            if (_this.phoneNumber.$getText() == '') {
                _this.phoneNumber.$setText('手机号码');
            }
        }, _this);
        _this.password.addEventListener(egret.TouchEvent.FOCUS_IN, function (e) {
            if (_this.password.$getText() == '登录密码') {
                _this.password.$setText('');
            }
        }, _this);
        _this.password.addEventListener(egret.TouchEvent.FOCUS_OUT, function (e) {
            if (_this.password.$getText() == '') {
                _this.password.$setText('登录密码');
            }
        }, _this);
        _this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.loginBtn.$setEnabled(false);
            SceneManager.getInstance().replaceLayer(LobbyScene.getInstance());
            //15539531989
            //123456
            //let loginInfo = 'username=15539531989&password=123456';
            var loginInfo = 'username=' + _this.phoneNumber.$getText() + '&password=' + _this.password.$getText();
            var onCompleted = function (event) {
                LoginScene.getInstance().loginBtn.$setEnabled(true);
                var foo = zHttp.getInstance().onHttpCompleted(event);
                console.log('返回code:' + foo['code']);
                switch (foo['code']) {
                    case 1:
                        // 成功
                        var result = foo['results'];
                        UserObject.setUsername(result['username']);
                        UserObject.setFullName(result['full_name']);
                        UserObject.setToken(result['token']);
                        UserObject.setLevel(result['level']);
                        console.log(UserObject);
                        SceneManager.getInstance().replaceLayer(LobbyScene.getInstance());
                        break;
                    case -1:
                        // 账号或密码错误,单条message,没有results
                        _this.addChild(Alert.show(foo['message']));
                        break;
                    case -2:
                        // 验证失败
                        var result_2 = foo['results'];
                        _this.addChild(Alert.show(result_2[0][0]));
                        break;
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
    LoginScene.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new LoginScene();
        }
        return this.m_instance;
    };
    ;
    return LoginScene;
}(eui.Component));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map