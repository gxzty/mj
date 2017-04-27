class ChargeForAgentTips extends eui.Component {
	private commitBtn: eui.Button;
	private cancelBtn: eui.Button;
	private chargeInput: eui.TextInput;
	private balanceLabel: eui.Label;
	private chargeToLabel: eui.Label;
	private chargeInputGroup: eui.Group;
	private callback: Function;

	public constructor(_chargeTo: string, _isToUser: boolean, chargeInfo?: eui.ArrayCollection) {
		super();
		this.skinName = 'resource/skin/Misc/ChargeForAgentTips/ChargeForAgentTips.exml';

		zAction.getInstance().TipsOpen(this.chargeInputGroup);
		let url = _isToUser ? 'club/user/recharge' : 'account/recharge';

		zUtils.setLabelText(this.balanceLabel, UserObject.getBalance());
		zUtils.setLabelText(this.chargeToLabel, _chargeTo);

		function IsNum(s) {
			if (s != null) {
				var r, re;
				re = /\d*/i; //\d 表示数字,* 表示匹配多个数字
				r = s.match(re);
				return (r == s) ? true : false;
			}
			return false;
		}
		zUtils.initInput(this.chargeInput, "充值金额");
		this.commitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			let chargeNumber = zUtils.getText(this.chargeInput);
			if (!IsNum(chargeNumber)) {
				Alert.show("请输入一个正整数");
				this.chargeInput.textDisplay.$setText("");
				return;
			} else {
				chargeInfo.addItem({ k: "qty", v: Number(chargeNumber) });
				zHttp.getInstance().sendHttpRequest(this, _isToUser ? GlobalConfig.getGameType() + url : url, egret.HttpMethod.POST, chargeInfo, (e: egret.Event) => {
					let foo = zHttp.getInstance().onHttpCompleted(e);
					if (foo) {
						Alert.show(foo['message']);
						_isToUser ? ChargeToUserScene.getInstance().onEnter() : UserObject.getUsersAgentInfo();
					}
				});
				this.parent.removeChild(this);
			}
		}, this);

		this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			zAction.getInstance().TipsClose(this.chargeInputGroup, (() => {
				this.parent.removeChild(this);
			}).bind(this));
		}, this);


		SceneManager.getInstance().addChild(this);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}