class ClubManagerScene extends eui.Component implements eui.UIComponent {
	private static m_instance;
	private titleLabel: eui.Label;
	private leftBtn: eui.Button;
	private rightBtn: eui.Button;
	private clubGroup: eui.Group;

	public onEnter() {
		zHttp.getInstance().sendHttpRequestWithGameType(this, "club/listing", egret.HttpMethod.POST, null, (e: egret.Event) => {
			ClubManagerScene.getInstance().reSetGroupItems();
			let foo = zHttp.getInstance().onHttpCompleted(e);
			if (foo) {
				console.log(foo['results']['data']);
				let clubArray = foo['results']['data'];
				for (let _i = 0; _i < clubArray.length; ++_i) {
					let _clubItem = new ClubManagerItem(clubArray[_i]);
					ClubManagerScene.getInstance().addGroupItem(_clubItem);
					_clubItem.$setY(_i * (_clubItem.$getHeight() + 20));
				}
			}
		});
	}
	public static getInstance(): ClubManagerScene {
		if (this.m_instance == null) {
			this.m_instance = new ClubManagerScene();
		}
		return this.m_instance;
	};
	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Group/ClubManagerScene/ClubManagerScene.exml";
		this.titleLabel.$setText("俱乐部管理");
		this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			SceneManager.getInstance().replaceLayer(MJManagerScene);
		}, this);
		this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			UserObject.userQuit();
		}, this);
	}
	public addGroupItem(s) {
		this.clubGroup.addChild(s);
	}
	public reSetGroupItems() {
		this.clubGroup.removeChildren();
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}