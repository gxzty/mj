class Loding extends eui.Component {
	private commitBtn: eui.Button;
	private lodingContext: eui.Label;
	private timeout: number;
	private static m_instance: Loding;

	public static getInstance() {
		if (this.m_instance == null) {
			this.m_instance = new Loding();
		}
		return this.m_instance;
	}

	public show(_context: string, _timeout: number = 5) {
		if (this && this.parent) {
			this.parent.removeChild(this);
		}
		this.$setVisible(true);
		SceneManager.getInstance().addChild(this);
		zUtils.zLog(this);
		zUtils.setLabelText(this.lodingContext, _context);
		if (_timeout != 0) {
			zUtils.zTimer(_timeout, (e) => {
				this.commitBtn.$setVisible(true);
			});
		}
	}


	public constructor() {
		super();
		this.skinName = 'resource/skin/Misc/Loding/LodingSkin.exml';
		this.commitBtn.$setVisible(false);
		this.commitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
			this.destory();
		}, this);
		SceneManager.getInstance().addChild(this);
	}

	public destory() {
		if (this && this.parent) {
			this.$setVisible(false);
			this.commitBtn.$setVisible(false);
		}
	}


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}