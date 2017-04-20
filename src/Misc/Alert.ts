class Alert extends eui.Component {
	private titleDisplay: eui.Label;
	private alertContext: eui.Label;
	private commitBtn: eui.Button;
	public static show(_context: string, _title?: string) {
		let _alert = new Alert();
		_alert.alertContext.$setText(_context);
		if (_title) {
			_alert.titleDisplay.$setText(_title);
		}
		return _alert;
	}
	public constructor() {
		super();
		this.skinName = 'resource/skin/Misc/Alert/AlertSkin.exml';

		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.$setX(SceneManager.getInstance().getWinSize().width / 2);
		this.$setY(SceneManager.getInstance().getWinSize().height / 2);
		Action.getInstance().TipsOpen(this);

		this.commitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			this.parent.removeChild(this);
		}, this);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}