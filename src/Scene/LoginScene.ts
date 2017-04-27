class LoginScene extends eui.Component {
	private loginBtn: zButton;
	public phoneNumber: eui.TextInput;
	public password: eui.TextInput;
	public autoLoginCheckBox: eui.CheckBox;
	public rememberPassCheckBox: eui.CheckBox;

	private static m_instance;
	public onEnter() {
		LoginScene.getInstance().resetInput();
	}
	public static getInstance(): LoginScene {
		if (this.m_instance == null) {
			this.m_instance = new LoginScene();
		}
		return this.m_instance;
	};


	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Login/LoginScene.exml";

		zUtils.initInput(this.phoneNumber, "手机号码");
		zUtils.initInput(this.password, "输入密码");
		this.password.displayAsPassword = true;

		this.getLocalInfo();

		let loginBtnCallback = (e: egret.TouchEvent) => {
			UserObject.saveInfoToLocal();
			//15539531989
			//123456
			let loginInfo = 'username=' + this.phoneNumber.text + '&password=' + this.password.text;
			let onCompleted = (event: egret.Event) => {
				//_loding.destory();
				let foo = zHttp.getInstance().onHttpCompleted(event);
				if (foo) {
					// 成功
					let result = foo['results'];
					UserObject.setUsername(result['username']);
					UserObject.setFullName(result['full_name']);
					UserObject.setToken(result['token']);
					UserObject.setLevel(result['level']);
					//console.log(UserObject);
					GlobalConfig.setIsGroup(false); // 默认是代理
					if (UserObject.getLevel() > 2) {
						// level大于2(>=3),即为群主,设置为群主
						GlobalConfig.setIsGroup(true);
					}
					SceneManager.getInstance().backToLobby();
				}
			}

			Loding.getInstance().show('正在与服务器通讯,请稍候...');
			var request: egret.HttpRequest = new egret.HttpRequest();
			request.open("https://api.52plays.com/login", egret.HttpMethod.POST);

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(loginInfo);
			request.addEventListener(egret.Event.COMPLETE, onCompleted, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, (e: egret.IOErrorEvent) => {
				Loding.getInstance().destory();
				console.log("HttpError");
				console.log(event);
			}, this);
		};

		if (this.autoLoginCheckBox.$selected) {
			loginBtnCallback(null);
		}
		this.rememberPassCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.Event) => {
			if (!this.rememberPassCheckBox.$selected) {
				this.autoLoginCheckBox.$setSelected(false);
			}
		}, this);

		this.autoLoginCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.Event) => {
			if (this.autoLoginCheckBox.$selected) {
				this.rememberPassCheckBox.$setSelected(true);
			}
		}, this);

		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,
			loginBtnCallback,
			this);
	}
	private getLocalInfo() {
		let log = (p) => {
			//console.log(p + ':' + egret.localStorage.getItem(p));
		};
		log('username');
		log('password');
		log('isRememberPass');
		log('isAutoLogin');
		if (egret.localStorage.getItem('username') != 'null' && egret.localStorage.getItem('username') != 'undefined') {
			this.phoneNumber.text = egret.localStorage.getItem('username');
		}
		if (egret.localStorage.getItem('isRememberPass') == '1') {
			this.rememberPassCheckBox.$setSelected(true);
			this.password.text = egret.localStorage.getItem('password');
		}
		if (egret.localStorage.getItem('isAutoLogin') == '1') {
			this.autoLoginCheckBox.$setSelected(true);
			this.rememberPassCheckBox.$setSelected(true);
		}
	}

	public resetInput() {
		zUtils.reSetInputText(this.phoneNumber);
		zUtils.reSetInputText(this.password);
	}
}
