var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FinancialRecordItem = (function (_super) {
    __extends(FinancialRecordItem, _super);
    function FinancialRecordItem(_agentItem) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/FinancialRecord/FinancialRecordItem.exml";
        //console.log(_agentItem);
        zUtils.setLabelText(_this.idLabel, _agentItem.receiver);
        zUtils.setLabelText(_this.receiverLabel, _agentItem.receiver);
        zUtils.setLabelText(_this.countLabel, _agentItem.receiver);
        zUtils.setLabelText(_this.afterChargeLabel, _agentItem.receiver);
        zUtils.setLabelText(_this.chargeTime, _agentItem.receiver);
        return _this;
    }
    return FinancialRecordItem;
}(eui.Component));
__reflect(FinancialRecordItem.prototype, "FinancialRecordItem");
//# sourceMappingURL=FinancialRecordItem.js.map