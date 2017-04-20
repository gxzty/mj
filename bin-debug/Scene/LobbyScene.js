var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LobbyScene = (function (_super) {
    __extends(LobbyScene, _super);
    function LobbyScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/Lobby/LobbyScene.exml";
        _this.lobbyCreateAgentBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(CreateAgent.getInstance());
        }, _this);
        _this.lobbyFinancialRecordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(FinancialRecord.getInstance());
        }, _this);
        _this.lobbyAgentManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(AgentManager.getInstance());
        }, _this);
        var infoCallback = function (e) {
            var foo = zHttp.getInstance().onHttpCompleted(e);
            console.log('返回code:' + foo['code']);
            switch (foo['code']) {
                case 1:
                    // 成功
                    var result = foo['results'];
                    UserObject.setBalance(result['balance']);
                    _this.balanceText.$setText(UserObject.getBalance());
                    console.log(UserObject);
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
        zHttp.getInstance().sendHttpRequest(_this, "agent/info", egret.HttpMethod.POST, infoCallback);
        return _this;
    }
    LobbyScene.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new LobbyScene();
        }
        return this.m_instance;
    };
    ;
    return LobbyScene;
}(eui.Component));
__reflect(LobbyScene.prototype, "LobbyScene");
//# sourceMappingURL=LobbyScene.js.map