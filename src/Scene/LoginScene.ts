class LoginScene extends eui.Component {
	private loginBtn: eui.Button;
	private phoneNumber: eui.TextInput;
	private password: eui.TextInput;


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
	public reset() {

	}
	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Login/LoginScene.exml";
		this.password.prompt = "输入密码";
		this.password.displayAsPassword = true;
		this.phoneNumber.prompt = "手机号码";

		this.phoneNumber.text = "15539531989";
		this.password.text = "123456";


		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
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
			};

			var request: egret.HttpRequest = new egret.HttpRequest();
			request.open("http://192.168.1.211/mj_club/public/agent/login", egret.HttpMethod.POST);

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(loginInfo);
			request.addEventListener(egret.Event.COMPLETE, onCompleted, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, (e: egret.IOErrorEvent) => {
				console.log("HttpError");
				console.log(event);
			}, this);
		}, this);
	}

	public resetInput() {
		zUtils.reSetInputText(this.phoneNumber);
		zUtils.reSetInputText(this.password);
	}
}
