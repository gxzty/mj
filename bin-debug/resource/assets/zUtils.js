var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zUtils = (function () {
    function zUtils() {
    }
    zUtils.getText = function (t) {
        return t.textDisplay.$getText();
    };
    zUtils.initInput = function (i, s) {
        i.prompt = s;
    };
    zUtils.setLabelText = function (l, s) {
        if (typeof s === 'string') {
            l.$setText(s);
        }
        else {
            l.$setText(String(s));
        }
    };
    zUtils.reSetInputText = function (i) {
        //console.log(i);
        i.text = "";
    };
    return zUtils;
}());
__reflect(zUtils.prototype, "zUtils");
//# sourceMappingURL=zUtils.js.map