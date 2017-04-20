var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Action = (function () {
    function Action() {
    }
    Action.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new Action();
        }
        return this.m_instance;
    };
    ;
    Action.prototype.TipsOpen = function (target) {
        target.$setEnabled(false);
        egret.Tween.get(target, { loop: false })
            .to({ scaleX: 0.01, scaleY: 0.01, alpha: 0 }, 0.01)
            .to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 200, egret.Ease.quintOut)
            .to({ scaleX: 0.9, scaleY: 0.9, alpha: 1 }, 100, egret.Ease.quintOut)
            .to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quintOut)
            .call(function () {
            target.$setEnabled(true);
        });
    };
    Action.prototype.TipsClose = function (target, _callback) {
        egret.Tween.get(target, { loop: false })
            .to({ scaleX: 0.01, scaleY: 0.01, alpha: 0.01 }, 1000, egret.Ease.quintOut)
            .call(_callback);
    };
    return Action;
}());
__reflect(Action.prototype, "Action");
//# sourceMappingURL=Action.js.map