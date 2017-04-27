class zButton extends eui.Button {
	public constructor() {
		super();
	}

	protected onTouchBegin(event: egret.TouchEvent): void {
		zAction.getInstance().ButtonClick(this, () => { super.onTouchBegin(event); });
	}
}