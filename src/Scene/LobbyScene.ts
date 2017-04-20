class LobbyScene extends eui.Component {
	private static m_instance;
	private balanceText: eui.Label;


	public static getInstance(): LobbyScene {
		if (this.m_instance == null) {
			this.m_instance = new LobbyScene();
		}
		return this.m_instance;
	};

	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/Lobby/LobbyScene.exml";
		let infoCallback = (e: egret.Event) => {
			let foo = zHttp.getInstance().onHttpCompleted(e);
			console.log('返回code:' + foo['code']);
			switch (foo['code']) {
				case 1:
					// 成功
					let result = foo['results'];

					UserObject.setBalance(result['balance']);
					this.balanceText.$setText(UserObject.getBalance());
					console.log(UserObject);

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
		zHttp.getInstance().sendHttpRequest(this, "agent/info", egret.HttpMethod.POST, infoCallback);


	}
}
