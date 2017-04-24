var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChargeForAgentTips = (function (_super) {
    __extends(ChargeForAgentTips, _super);
    function ChargeForAgentTips(_chargeTo, chargeInfo) {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/skin/Misc/ChargeForAgentTips/ChargeForAgentTips.exml';
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.$setX(SceneManager.getInstance().getWinSize().width / 2);
        _this.$setY(SceneManager.getInstance().getWinSize().height / 2);
        zAction.getInstance().TipsOpen(_this.chargeInputGroup);
        zUtils.setLabelText(_this.balanceLabel, UserObject.getBalance());
        zUtils.setLabelText(_this.chargeToLabel, _chargeTo);
        function IsNum(s) {
            if (s != null) {
                var r, re;
                re = /\d*/i; //\d 表示数字,* 表示匹配多个数字
                r = s.match(re);
                return (r == s) ? true : false;
            }
            return false;
        }
        zUtils.initInput(_this.chargeInput, "充值金额");
        _this.commitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var chargeNumber = zUtils.getText(_this.chargeInput);
            if (!IsNum(chargeNumber)) {
                Alert.show("请输入一个正整数");
                _this.chargeInput.textDisplay.$setText("");
                return;
            }
            else {
                chargeInfo.addItem({ k: "qty", v: Number(chargeNumber) });
                zHttp.getInstance().sendHttpRequest(_this, 'account/recharge', egret.HttpMethod.POST, function (e) {
                    var foo = zHttp.getInstance().onHttpCompleted(e);
                    if (foo) {
                        Alert.show(foo['message']);
                        UserObject.getUserInfo();
                        UserObject.getUsersAgentInfo();
                    }
                }, chargeInfo);
                _this.parent.removeChild(_this);
            }
        }, _this);
        _this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            zAction.getInstance().TipsClose(_this.chargeInputGroup, (function () {
                _this.parent.removeChild(_this);
            }).bind(_this));
        }, _this);
        SceneManager.getInstance().addChild(_this);
        return _this;
    }
    ChargeForAgentTips.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ChargeForAgentTips.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return ChargeForAgentTips;
}(eui.Component));
__reflect(ChargeForAgentTips.prototype, "ChargeForAgentTips");
//# sourceMappingURL=ChargeForAgent.js.map