var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/skin/Misc/Alert/AlertSkin.exml';
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.$setX(SceneManager.getInstance().getWinSize().width / 2);
        _this.$setY(SceneManager.getInstance().getWinSize().height / 2);
        Action.getInstance().TipsOpen(_this);
        _this.commitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Action.getInstance().TipsClose(_this, (function (string) {
                console.log(string);
                _this.parent.removeChild(_this);
            }).bind(_this, 'adf'));
        }, _this);
        return _this;
    }
    Alert.show = function (_context, _title) {
        var _alert = new Alert();
        _alert.alertContext.$setText(_context);
        if (_title) {
            _alert.titleDisplay.$setText(_title);
        }
        SceneManager.getInstance().addChild(_alert);
        return _alert;
    };
    Alert.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Alert.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Alert;
}(eui.Component));
__reflect(Alert.prototype, "Alert");
//# sourceMappingURL=Alert.js.map