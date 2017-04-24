var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AgentManager = (function (_super) {
    __extends(AgentManager, _super);
    function AgentManager() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/Agent/AgentManager/AgentManager.exml";
        _this.titleLabel.$setText("代理管理");
        _this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().backToLobby();
        }, _this);
        UserObject.getUsersAgentInfo();
        return _this;
    }
    AgentManager.prototype.onEnter = function () {
        UserObject.getUsersAgentInfo();
    };
    AgentManager.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new AgentManager();
        }
        return this.m_instance;
    };
    ;
    AgentManager.prototype.addGroupItem = function (s) {
        this.agentGroup.addChild(s);
    };
    AgentManager.prototype.resetGroupItems = function () {
        this.agentGroup.removeChildren();
    };
    AgentManager.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    AgentManager.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return AgentManager;
}(eui.Component));
__reflect(AgentManager.prototype, "AgentManager", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=AgentManager.js.map