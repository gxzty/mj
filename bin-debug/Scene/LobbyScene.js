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
            SceneManager.getInstance().replaceLayer(CreateAccount);
        }, _this);
        _this.lobbyFinancialRecordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(FinancialRecord);
        }, _this);
        _this.lobbyAgentManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(AgentManager);
        }, _this);
        _this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            UserObject.userQuit();
        }, _this);
        UserObject.getUserInfo();
        return _this;
    }
    LobbyScene.prototype.onEnter = function () {
        UserObject.getUserInfo();
    };
    LobbyScene.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new LobbyScene();
        }
        return this.m_instance;
    };
    ;
    LobbyScene.prototype.setBelence = function (_balance) {
        this.balanceText.$setText(_balance);
    };
    return LobbyScene;
}(eui.Component));
__reflect(LobbyScene.prototype, "LobbyScene");
//# sourceMappingURL=LobbyScene.js.map