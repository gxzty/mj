class ChargeToUserScene extends eui.Component implements eui.UIComponent {
	private static m_instance;
	private titleLabel: eui.Label;
	private leftBtn: eui.Button;
	private rightBtn: eui.Button;
	private userGroup: eui.Group;
	private searchUserTextInput: eui.TextInput;

	private isSingleClub: boolean;
	private singleClubId: string;

	public onEnter() {
		this.reSetInput();
		zUtils.reSetInputText(this.searchUserTextInput);
		let _url = "club/user/by_token";  // 根据club_id查询该club下的成员
		let clubidInfo = new eui.ArrayCollection();
		if (this.isSingleClub) {
			_url = "club/user/by_club_id";  // 根据user的token查询该群主下边所有成员
			clubidInfo.addItem({ k: 'club_id', v: this.singleClubId });

		}
		zHttp.getInstance().sendHttpRequestWithGameType(this, _url, egret.HttpMethod.POST, clubidInfo, (e: egret.Event) => {
			ChargeToUserScene.getInstance().reSetGroupItems();
			let foo = zHttp.getInstance().onHttpCompleted(e);
			if (foo) {
				// console.log(foo['results']);
				let _length = foo['results']['length'];
				let userArray = foo['results'];
				for (let _i = 0; _i < _length; ++_i) {
					let _userItem = new ChargeToUserItem(userArray[_i]);
					ChargeToUserScene.getInstance().addGroupItem(_userItem);
					_userItem.$setY(_i * (_userItem.$getHeight() + 20));
				}
			}
		});
	}
	public static getInstance(): ChargeToUserScene {
		if (this.m_instance == null) {
			this.m_instance = new ChargeToUserScene();
		}
		return this.m_instance;
	};
	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Group/ChargeToUserScene/ChargeToUserScene.exml";
		this.titleLabel.$setText("用户充值");
		zUtils.initInput(this.searchUserTextInput, "玩家昵称");


		this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			SceneManager.getInstance().replaceLayer(MJManagerScene);
		}, this);
		this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			UserObject.userQuit();
		}, this);
	}
	public addGroupItem(s) {
		this.userGroup.addChild(s);
	}
	public reSetGroupItems() {
		this.userGroup.removeChildren();
	}
	public setIsSingleClub(_isSingleClub: boolean, _clubId?: string) {
		this.isSingleClub = _isSingleClub;
		this.singleClubId = _clubId;
	}

	public reSetInput() {
		zUtils.reSetInputText(this.searchUserTextInput);
	}


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}