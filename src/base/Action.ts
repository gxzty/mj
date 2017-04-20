class Action {

	private static m_instance;

	public static getInstance(): Action {
		if (this.m_instance == null) {
			this.m_instance = new Action();
		}
		return this.m_instance;
	};



	public constructor() {
	}
	public TipsOpen(target) {
		egret.Tween.get(target, { loop: false })
			.to({ scaleX: 0.01, scaleY: 0.01, alpha: 0 }, 0.01).wait(1)
			.to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 200, egret.Ease.quintOut).wait(1)
			.to({ scaleX: 0.9, scaleY: 0.9, alpha: 1 }, 100, egret.Ease.quintOut).wait(1)
			.to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quintOut).wait(1);
	}
}