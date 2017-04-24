var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MJManagerScene = (function (_super) {
    __extends(MJManagerScene, _super);
    function MJManagerScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/Group/MJManagerScene/MJManagerScene.exml";
        GlobalConfig.setGameType(GameType.MaJiang); // 游戏类型默认为麻将
        _this.createClubBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Alert.show('创建俱乐部');
        }, _this);
        _this.clubManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Alert.show('俱乐部管理');
        }, _this);
        _this.feedBackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Alert.show('意见反馈');
        }, _this);
        _this.chargeToPlayerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Alert.show('充值');
        }, _this);
        _this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().backToLobby();
        }, _this);
        _this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            UserObject.userQuit();
        }, _this);
        UserObject.getUserInfo();
        return _this;
    }
    MJManagerScene.prototype.onEnter = function () {
        UserObject.getUserInfo();
    };
    MJManagerScene.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new MJManagerScene();
        }
        return this.m_instance;
    };
    ;
    MJManagerScene.prototype.setBelence = function (_balance) {
        this.balanceText.$setText(_balance);
    };
    return MJManagerScene;
}(eui.Component));
__reflect(MJManagerScene.prototype, "MJManagerScene");
//# sourceMappingURL=MJManagerScene.js.map