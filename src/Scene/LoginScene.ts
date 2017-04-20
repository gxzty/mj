class LoginScene extends eui.Component {
	private loginBtn: eui.Button;
	private phoneNumber: eui.EditableText;
	private password: eui.EditableText;

	private sceneCode;

	private static m_instance;

	public static getInstance(): LoginScene {
		if (this.m_instance == null) {
			this.m_instance = new LoginScene();
		}
		return this.m_instance;
	};

	public constructor() {
		super();
		this.sceneCode = 1;
		this.skinName = "resource/skin/Scene/Login/LoginScene.exml";

		this.phoneNumber.addEventListener(egret.TouchEvent.FOCUS_IN, (e: egret.TouchEvent) => {
			if (this.phoneNumber.$getText() == '手机号码') {
				this.phoneNumber.$setText("");
			}
		}, this);

		this.phoneNumber.addEventListener(egret.TouchEvent.FOCUS_OUT, (e: egret.TouchEvent) => {
			if (this.phoneNumber.$getText() == '') {
				this.phoneNumber.$setText('手机号码');
			}
		}, this);

		this.password.addEventListener(egret.TouchEvent.FOCUS_IN, (e: egret.TouchEvent) => {
			if (this.password.$getText() == '登录密码') {
				this.password.$setText('');
			}
		}, this);
		this.password.addEventListener(egret.TouchEvent.FOCUS_OUT, (e: egret.TouchEvent) => {
			if (this.password.$getText() == '') {
				this.password.$setText('登录密码');
			}
		}, this);


		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			this.loginBtn.$setEnabled(false);
						SceneManager.getInstance().replaceLayer(LobbyScene.getInstance());
			//15539531989
			//123456
			//let loginInfo = 'username=15539531989&password=123456';
			let loginInfo = 'username=' + this.phoneNumber.$getText() + '&password=' + this.password.$getText();
			let onCompleted = (event: egret.Event) => {
				LoginScene.getInstance().loginBtn.$setEnabled(true);
				let foo = zHttp.getInstance().onHttpCompleted(event);
				console.log('返回code:' + foo['code']);
				switch (foo['code']) {
					case 1:
						// 成功
						let result = foo['results'];

						UserObject.setUsername(result['username']);
						UserObject.setFullName(result['full_name']);
						UserObject.setToken(result['token']);
						UserObject.setLevel(result['level']);
						console.log(UserObject);

						SceneManager.getInstance().replaceLayer(LobbyScene.getInstance());
						break;

					case -1:
						// 账号或密码错误,单条message,没有results
						this.addChild(Alert.show(foo['message']));
						break;

					case -2:
						// 验证失败
						let result_2 = foo['results'];
						this.addChild(Alert.show(result_2[0][0]));
						break;
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
}
