var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zAction = (function () {
    function zAction() {
    }
    zAction.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new zAction();
        }
        return this.m_instance;
    };
    ;
    zAction.prototype.TipsOpen = function (target) {
        egret.Tween.get(target, { loop: false })
            .to({ scaleX: 0.01, scaleY: 0.01, alpha: 0 }, 0.01)
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 200, egret.Ease.quintOut)
            .to({ scaleX: 0.9, scaleY: 0.9, alpha: 1 }, 100, egret.Ease.quintOut)
            .to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quintOut);
    };
    zAction.prototype.TipsClose = function (target, _callback) {
        egret.Tween.get(target, { loop: false })
            .to({ scaleX: 0.9, scaleY: 0.9 }, 100, egret.Ease.quintOut)
            .to({ scaleX: 1.1, scaleY: 1.1 }, 100, egret.Ease.quintOut)
            .to({ scaleX: 0.01, scaleY: 0.01, alpha: 0.01 }, 200, egret.Ease.quintOut)
            .call(_callback);
    };
    return zAction;
}());
__reflect(zAction.prototype, "zAction");
//# sourceMappingURL=zAction.js.map