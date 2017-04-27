class MJManagerScene extends eui.Component {
	private static m_instance;
	private balanceText: eui.Label;
	private createClubBtn: eui.Button;
	private clubManagerBtn: eui.Button;
	private chargeToPlayerBtn: eui.Button;
	private clubPeopleManagerBtn: eui.Button;
	private rightBtn: eui.Button;
	private leftBtn: eui.Button;

	public onEnter() {
		UserObject.getUserInfo();
	}
	public static getInstance(): MJManagerScene {
		if (this.m_instance == null) {
			this.m_instance = new MJManagerScene();
		}
		return this.m_instance;
	};

	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Group/MJManagerScene/MJManagerScene.exml";

		GlobalConfig.setGameType(GameType.MaJiang); // 游戏类型默认为麻将


		this.createClubBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			SceneManager.getInstance().replaceLayer(CreateClubScene);
		}, this);
		this.clubManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			SceneManager.getInstance().replaceLayer(ClubManagerScene);
		}, this);

		this.chargeToPlayerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			ChargeToUserScene.getInstance().setIsSingleClub(false);
			SceneManager.getInstance().replaceLayer(ChargeToUserScene);
		}, this);

		this.clubPeopleManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			Alert.show('俱乐部成员管理');
		}, this);
		this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			SceneManager.getInstance().backToLobby();
		}, this);

		this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			UserObject.userQuit();
		}, this);

		UserObject.getUserInfo();

	}
	public setBelence(_balance) {
		this.balanceText.$setText(_balance);
	}
}
