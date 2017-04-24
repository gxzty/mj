var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GroupManagerScene = (function (_super) {
    __extends(GroupManagerScene, _super);
    function GroupManagerScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/Group/GroupManagerScene/GroupManagerScene.exml";
        GlobalConfig.setGameType(GameType.MaJiang); // 游戏类型默认为麻将
        _this.MJSelectBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(MJManagerScene);
        }, _this);
        _this.DDZSelectBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Alert.show('斗地主');
        }, _this);
        _this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            UserObject.userQuit();
        }, _this);
        _this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            UserObject.userQuit();
        }, _this);
        UserObject.getUserInfo();
        return _this;
    }
    GroupManagerScene.prototype.onEnter = function () {
        UserObject.getUserInfo();
    };
    GroupManagerScene.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new GroupManagerScene();
        }
        return this.m_instance;
    };
    ;
    GroupManagerScene.prototype.setBelence = function (_balance) {
        this.balanceText.$setText(_balance);
    };
    return GroupManagerScene;
}(eui.Component));
__reflect(GroupManagerScene.prototype, "GroupManagerScene");
//# sourceMappingURL=GroupManagerScene.js.map