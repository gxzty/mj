class ClubManagerItem extends eui.Component {
	private clubIdLabel: eui.Label;
	private clubNameLabel: eui.Label;
	private clubStatusLabel: eui.Label;


	private managerClubBtn: eui.Button;


	private rechargeToken: string;

	public constructor(_clubItem) {
		super();
		this.skinName = "resource/skin/Scene/Group/ClubManagerScene/ClubManagerItem.exml"
		console.log(_clubItem);
		zUtils.setLabelText(this.clubIdLabel, _clubItem.id);
		zUtils.setLabelText(this.clubNameLabel, _clubItem.name);
		let _clubStatus: string = "";
		let _clubStatusColor: number = 0;
		switch (_clubItem.status) {
			case 'Y':
				_clubStatus = "Y(正常)";
				_clubStatusColor = 0x01bc36;
				break;
			case 'P':
				_clubStatus = "P(审核中)";
				_clubStatusColor = 0xf49b00;
				break;
			case 'N':
				_clubStatus = "N(冻结)";
				_clubStatusColor = 0xff0202;
				break;
		}
		zUtils.setLabelText(this.clubStatusLabel, _clubStatus);
		this.clubStatusLabel.$setTextColor(_clubStatusColor);

		this.managerClubBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			ChargeToUserScene.getInstance().setIsSingleClub(true, this.clubIdLabel.text);
			SceneManager.getInstance().replaceLayer(ChargeToUserScene);
		}, this);
	}
}