class GroupManagerScene extends eui.Component {
	private static m_instance;
	private balanceText: eui.Label;
	private MJSelectBtn: eui.Button;
	private DDZSelectBtn: eui.Button;
	private feedBackBtn: eui.Button;
	private groupFinancialManagerBtn: eui.Button;
	private rightBtn: eui.Button;
	private leftBtn: eui.Button;

	public onEnter() {
		UserObject.getUserInfo();
	}
	public static getInstance(): GroupManagerScene {
		if (this.m_instance == null) {
			this.m_instance = new GroupManagerScene();
		}
		return this.m_instance;
	};

	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Group/GroupManagerScene/GroupManagerScene.exml";

		GlobalConfig.setGameType(GameType.MaJiang); // 游戏类型默认为麻将


		this.MJSelectBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			GlobalConfig.setGameType(GameType.MaJiang);
			SceneManager.getInstance().replaceLayer(MJManagerScene);
		}, this);
		this.DDZSelectBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			GlobalConfig.setGameType(GameType.DouDiZhu);
			Alert.show('斗地主');
		}, this);

		this.feedBackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			Alert.show('意见反馈');
		}, this);

		this.groupFinancialManagerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			Alert.show('财务管理');
		}, this);

		this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			UserObject.userQuit();
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
