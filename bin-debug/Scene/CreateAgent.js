var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CreateAgent = (function (_super) {
    __extends(CreateAgent, _super);
    function CreateAgent() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/CreateAgent/CreateAgent.exml";
        _this.titleLabel.$setText("创建代理");
        _this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().replaceLayer(LobbyScene.getInstance());
        }, _this);
        return _this;
    }
    CreateAgent.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new CreateAgent();
        }
        return this.m_instance;
    };
    ;
    CreateAgent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CreateAgent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return CreateAgent;
}(eui.Component));
__reflect(CreateAgent.prototype, "CreateAgent", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CreateAgent.js.map