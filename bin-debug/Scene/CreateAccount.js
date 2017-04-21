var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CreateAccount = (function (_super) {
    __extends(CreateAccount, _super);
    function CreateAccount() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/Scene/CreateAccount/CreateAccount.exml";
        _this.titleLabel.$setText("创建账号");
        _this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.getInstance().backToLobby();
        }, _this);
        zUtils.initInput(_this.accountInput, "登录账号必须是手机号码(必填)");
        zUtils.initInput(_this.passwordInput, "请输入登录密码(必填)");
        zUtils.initInput(_this.fullNameInput, "请输入联系人姓名(必填)");
        zUtils.initInput(_this.wechatInput, "请输入微信号");
        zUtils.initInput(_this.qqInput, "请输入QQ号");
        zUtils.initInput(_this.cityInput, "");
        zUtils.initInput(_this.provinceInput, "");
        _this.agentCreateBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.agentCreateBtn.$setEnabled(false);
            var createInfo = new eui.ArrayCollection();
            createInfo.addItem({ k: "username", v: zUtils.getText(_this.accountInput) });
            createInfo.addItem({ k: "password", v: zUtils.getText(_this.passwordInput) });
            createInfo.addItem({ k: "full_name", v: zUtils.getText(_this.fullNameInput) });
            createInfo.addItem({ k: "wechat", v: zUtils.getText(_this.wechatInput) });
            createInfo.addItem({ k: "qq", v: zUtils.getText(_this.qqInput) });
            zHttp.getInstance().sendHttpRequest(_this, "agent/create", egret.HttpMethod.POST, function (e) {
                CreateAccount.getInstance().agentCreateBtn.$setEnabled(true);
                var foo = zHttp.getInstance().onHttpCompleted(e);
                if (foo) {
                    //console.log(foo['results']);
                    Alert.showWithCallback(foo['message'], function () { SceneManager.getInstance().backToLobby(); });
                }
            }, createInfo);
        }, _this);
        return _this;
    }
    CreateAccount.getInstance = function () {
        if (this.m_instance == null) {
            this.m_instance = new CreateAccount();
        }
        return this.m_instance;
    };
    ;
    CreateAccount.prototype.onEnter = function () {
        CreateAccount.getInstance().resetInput();
    };
    CreateAccount.prototype.resetInput = function () {
        zUtils.reSetInputText(this.accountInput);
        zUtils.reSetInputText(this.passwordInput);
        zUtils.reSetInputText(this.fullNameInput);
        zUtils.reSetInputText(this.wechatInput);
        zUtils.reSetInputText(this.qqInput);
        zUtils.reSetInputText(this.cityInput);
        zUtils.reSetInputText(this.provinceInput);
    };
    CreateAccount.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CreateAccount.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return CreateAccount;
}(eui.Component));
__reflect(CreateAccount.prototype, "CreateAccount", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=CreateAccount.js.map