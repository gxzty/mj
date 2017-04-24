class UserObject {
	private static UserName;
	private static FullName;
	private static Token;
	private static Level;
	private static Password;

	private static Balance;

	private static getPassword() {
		return this.Password;
	}
	public static setPassword(_password) {
		this.Password = _password;
	}
	public static getBalance() {
		return this.Balance;
	}
	public static setBalance(_banlance) {
		this.Balance = _banlance;
	}

	public static getUsername() {
		return this.UserName;
	}
	public static setUsername(_username) {
		this.UserName = _username;
	}

	public static getFullName() {
		return this.FullName;
	}
	public static setFullName(_fullname) {
		this.FullName = _fullname;
	}

	public static getToken() {
		return this.Token;
	}
	public static setToken(_token) {
		this.Token = _token;
	}

	public static getLevel() {
		return this.Level;
	}
	public static setLevel(_level) {
		this.Level = _level;
	}
	public static saveInfoToLocal() {
		egret.localStorage.clear();
		egret.localStorage.setItem('username', LoginScene.getInstance().phoneNumber.text);
		egret.localStorage.setItem('password', LoginScene.getInstance().password.text);
		egret.localStorage.setItem('isRememberPass', LoginScene.getInstance().rememberPassCheckBox.$selected ? '1' : '0');
		egret.localStorage.setItem('isAutoLogin', LoginScene.getInstance().autoLoginCheckBox.$selected ? '1' : '0');
		let log = (p) => {
			console.log(p + ':' + egret.localStorage.getItem(p) + "///");
		};
		log('username');
		log('password');
		log('isRememberPass');
		log('isAutoLogin');
	}
	public static userQuit() {
		Alert.showWithCallback('您真的要退出登录吗?', () => {
			this.Level = "";
			this.Token = "";
			this.FullName = "";
			this.UserName = "";
			this.Balance = "";
			SceneManager.getInstance().replaceLayer(LoginScene);
		});
	}


	public static getUserInfo() {
		let infoCallback = (e: egret.Event) => {
			let foo = zHttp.getInstance().onHttpCompleted(e);
			if (foo) {
				let result = foo['results'];
				UserObject.setBalance(result['balance']);
				try {
					SceneManager.getInstance().getRunningLayer().setBelence(UserObject.getBalance());
				} catch (e) {
					console.log("切换场景过快!");
				}
				//console.log(UserObject);
			}
		};
		zHttp.getInstance().sendHttpRequest(this, "account/detail", egret.HttpMethod.POST, infoCallback);
	}

	public static getUsersAgentInfo() {
		//console.log("getUsersAgentInfo");
		zHttp.getInstance().sendHttpRequest(this, "account/listing", egret.HttpMethod.POST, (e: egret.Event) => {
			AgentManager.getInstance().resetGroupItems();
			let foo = zHttp.getInstance().onHttpCompleted(e);
			if (foo) {
				//console.log(foo['results']);
				let agentArray = foo['results'];
				for (let _i = 0; _i < agentArray.length; ++_i) {
					let _agentItem = new AgentItem(agentArray[_i]);
					AgentManager.getInstance().addGroupItem(_agentItem);
					_agentItem.$setY(_i * (_agentItem.$getHeight() + 20));
				}
			}
		});
	}

	public static getChargeRecordInfo() {
		//console.log("getChargeRecordInfo");
		zHttp.getInstance().sendHttpRequest(this, "agent/listing", egret.HttpMethod.POST, (e: egret.Event) => {
			let foo = zHttp.getInstance().onHttpCompleted(e);
			if (foo) {
				//console.log(foo['results']);
				let chargeRecordArray = foo['results'];
				for (let _i = 0; _i < chargeRecordArray.length; ++_i) {
					let _chargeItem = new FinancialRecordItem(chargeRecordArray[_i]);
					FinancialRecord.getInstance().addGroupItem(_chargeItem);
					_chargeItem.$setY(_i * (_chargeItem.$getHeight() + 12));
				}
			}
		});
	}
}
