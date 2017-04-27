class CreateClubScene extends eui.Component {
	private static m_instance;
	private createClubBtn: eui.Button;
	private clubNameInput: eui.TextInput;
	private clubAnnocInput: eui.TextInput;


	private rightBtn: eui.Button;
	private leftBtn: eui.Button;

	public onEnter() {
		this.reSetInput();
	}
	public static getInstance(): CreateClubScene {
		if (this.m_instance == null) {
			this.m_instance = new CreateClubScene();
		}
		return this.m_instance;
	};

	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Group/CreateClubScene/CreateClubScene.exml";

		zUtils.initInput(this.clubNameInput, "请输入俱乐部名称");
		zUtils.initInput(this.clubAnnocInput, "请输入俱乐部公告");
		this.clubAnnocInput.maxChars = 300;
		this.clubNameInput.maxChars = 10;
		//this.clubAnnocInput.textDisplay.multiline = true;

		this.createClubBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			if (this.clubNameInput.text.length > 10) {
				Alert.show('俱乐部名称不能超过10个字!');
				return;
			}
			if (this.clubAnnocInput.text.length > 300) {
				Alert.show('俱乐部公告不能超过300个字!');
				return;
			}
			let createClubInfo = new eui.ArrayCollection();
			createClubInfo.addItem({ k: 'name', v: this.clubNameInput.text });
			createClubInfo.addItem({ k: 'notice', v: this.clubAnnocInput.text });

			let onCompleted = (event: egret.Event) => {
				let foo = zHttp.getInstance().onHttpCompleted(event);
				if (foo) {
					// 成功
					Alert.showWithCallback(foo['message'], () => {
						SceneManager.getInstance().replaceLayer(MJManagerScene);
					});
				}
			}
			zHttp.getInstance().sendHttpRequestWithGameType(this, "club/create", egret.HttpMethod.POST, createClubInfo, onCompleted);
		}, this);


		this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			SceneManager.getInstance().replaceLayer(MJManagerScene);
		}, this);

		this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			UserObject.userQuit();
		}, this);


	}

	public reSetInput() {
		zUtils.reSetInputText(this.clubNameInput);
		zUtils.reSetInputText(this.clubAnnocInput);
	}

}
