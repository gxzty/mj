class ChargeToUserItem extends eui.Component {
	private userNameLabel: eui.Label;
	private userBalanceLabel: eui.Label;
	private clubStatusLabel: eui.Label;
	private userId;

	private chargeToUserBtn: eui.Button;


	private rechargeToken: string;

	public constructor(_userItem) {
		super();
		this.skinName = "resource/skin/Scene/Group/ChargeToUserScene/ChargeToUserItem.exml"
		console.log(_userItem);
		zUtils.setLabelText(this.userNameLabel, _userItem.user_nickname);
		zUtils.setLabelText(this.userBalanceLabel, _userItem.balance);
		this.userId = _userItem.id;

		this.chargeToUserBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			let chargeInfo = new eui.ArrayCollection();
			chargeInfo.addItem({ k: "user_id", v: this.userId });
			new ChargeForAgentTips(this.userNameLabel.text, true, chargeInfo);
			//let chargeInfo = new eui.ArrayCollection();
			//chargeInfo.addItem({ k: "recharge_token", v: this.rechargeToken });
			//new ChargeForAgentTips(this.accountLabel.text, chargeInfo);
		}, this);
	}
}