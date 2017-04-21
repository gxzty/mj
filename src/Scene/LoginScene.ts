class LoginScene extends eui.Component {
	private loginBtn: eui.Button;
	private phoneNumber: eui.TextInput;
	private password: eui.TextInput;
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
		
		zUtils.initInput(this.phoneNumber,"手机号码");
		zUtils.initInput(this.password,"输入密码");
		this.password.displayAsPassword = true;

		this.getLocalInfo();
		
		let loginBtnCallback = (e: egret.TouchEvent) => {
			UserObject.saveInfoToLocal();
			//15539531989
			//123456
			let loginInfo = 'username=' + this.phoneNumber.text + '&password=' + this.password.text;
			let onCompleted = (event: egret.Event) => {
				LoginScene.getInstance().loginBtn.$setEnabled(true);
				let foo = zHttp.getInstance().onHttpCompleted(event);
				if (foo) {
					// 成功
					let result = foo['results'];
					UserObject.setUsername(result['username']);
					UserObject.setFullName(result['full_name']);
					UserObject.setToken(result['token']);
					UserObject.setLevel(result['level']);
					//console.log(UserObject);
					Alert.showWithCallback(foo['message'], () => { SceneManager.getInstance().backToLobby() });
				}
			}

			var request: egret.HttpRequest = new egret.HttpRequest();
			request.open("http://192.168.1.211/mj_club/public/agent/login", egret.HttpMethod.POST);

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(loginInfo);
			request.addEventListener(egret.Event.COMPLETE, onCompleted, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, (e: egret.IOErrorEvent) => {
				console.log("HttpError");
				console.log(event);
			}, this);
		};

		if (this.autoLoginCheckBox.$selected) {
			loginBtnCallback(null);
		}

		this.rememberPassCheckBox.addEventListener(egret.TouchEvent.TOUCH_TAP, ((e:egret.Event,_select:boolean) => {
			let _status = _select;
			console.log(_status);
		}).bind(this.rememberPassCheckBox,this.rememberPassCheckBox.$selected),this);
		
		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,loginBtnCallback, this);
	}
	private getLocalInfo() { 
		if (egret.localStorage.getItem('isRememberPass') == String(true)) {
			this.rememberPassCheckBox.$setSelected(true);
			if (egret.localStorage.getItem('password')) {
				this.password.text = egret.localStorage.getItem('password');
			} else {
				this.rememberPassCheckBox.$setSelected(false);
			}
		}
		if (egret.localStorage.getItem('isAutoLogin') == String(true)) {
			this.autoLoginCheckBox.$setSelected(true);
			this.rememberPassCheckBox.$setSelected(true);
			console.log("autologin");
		}
		if (egret.localStorage.getItem('username')) {
			this.phoneNumber.text = egret.localStorage.getItem('username');
		}
	}

	public resetInput() {
		zUtils.reSetInputText(this.phoneNumber);
		zUtils.reSetInputText(this.password);
	}
}
