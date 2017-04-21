var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FinancialRecord = (function (_super) {
    __extends(FinancialRecord, _super);
    function FinancialRecord() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/FinancialRecord/FinancialRecord.exml";
        _this.titleLabel.$setText("财务记录");
        _this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().backToLobby();
        }, _this);
        UserObject.getChargeRecordInfo();
        return _this;
    }
    FinancialRecord.prototype.onEnter = function () {
        UserObject.getChargeRecordInfo();
    };
    FinancialRecord.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new FinancialRecord();
        }
        return this.m_instance;
    };
    ;
    FinancialRecord.prototype.addGroupItem = function (s) {
        this.financialRecordGroup.addChild(s);
    };
    FinancialRecord.prototype.resetGroupItems = function () {
        this.financialRecordGroup.removeChildren();
    };
    FinancialRecord.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FinancialRecord.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return FinancialRecord;
}(eui.Component));
__reflect(FinancialRecord.prototype, "FinancialRecord", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FinancialRecord.js.map