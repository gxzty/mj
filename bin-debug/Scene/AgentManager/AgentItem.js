var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AgentItem = (function (_super) {
    __extends(AgentItem, _super);
    function AgentItem(_agentItem) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/AgentManager/ChoseAccountToChargeItem.exml";
        //console.log(_agentItem);
        zUtils.setLabelText(_this.idLabel, _agentItem.id);
        zUtils.setLabelText(_this.accountLabel, _agentItem.username);
        zUtils.setLabelText(_this.fullNameLabel, _agentItem.full_name);
        zUtils.setLabelText(_this.wechatLabel, _agentItem.wexin);
        zUtils.setLabelText(_this.qqLabel, _agentItem.qq);
        zUtils.setLabelText(_this.provinceLabel, _agentItem.province);
        zUtils.setLabelText(_this.cityLabel, _agentItem.city);
        zUtils.setLabelText(_this.balanceLabel, _agentItem.balance);
        _this.rechargeToken = _agentItem.token;
        _this.chargeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var chargeInfo = new eui.ArrayCollection();
            chargeInfo.addItem({ k: "recharge_token", v: _this.rechargeToken });
            new InputTips(_this.accountLabel.text, chargeInfo);
        }, _this);
        return _this;
    }
    return AgentItem;
}(eui.Component));
__reflect(AgentItem.prototype, "AgentItem");
//# sourceMappingURL=AgentItem.js.map