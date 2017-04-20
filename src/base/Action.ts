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
		target.$setEnabled(false);
		egret.Tween.get(target, { loop: false })
			.to({ scaleX: 0.01, scaleY: 0.01, alpha: 0 }, 0.01)
			.to({ scaleX: 1.1, scaleY: 1.1, alpha: 1 }, 200, egret.Ease.quintOut)
			.to({ scaleX: 0.9, scaleY: 0.9, alpha: 1 }, 100, egret.Ease.quintOut)
			.to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quintOut)
			.call(() => {
				target.$setEnabled(true);
			});
	}

	public TipsClose(target,_callback:Function) {
		egret.Tween.get(target, { loop: false })
			.to({ scaleX: 0.01, scaleY: 0.01, alpha: 0.01 }, 1000, egret.Ease.quintOut)
			.call(_callback);
	}
}