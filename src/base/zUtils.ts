class zUtils {
	public static getText(t: eui.TextInput) {
		return t.textDisplay.$getText();
	}
	public static initInput(i: eui.TextInput, s: string, multiline: boolean = false) {
		i.prompt = s;
		//i.textDisplay.multiline = wordWrap;
	}
	public static setLabelText(l: eui.Label, s: string) {
		if (typeof s === 'string') {
			l.$setText(s);
		} else {
			l.$setText(String(s));
		}
	}
	public static reSetInputText(i: eui.TextInput) {
		i.text = "";
	}
	public static zLog(_log: any): void {
		console.log(_log);
		return;
	}

	public static zTimer(_timeout: number, _timeComplete: Function, _repeatCount: number = 1, _timeFun?: Function): egret.Timer {
		let _timer: egret.Timer = new egret.Timer(_timeout * 1000, _repeatCount);
		_timer.addEventListener(egret.TimerEvent.TIMER, _timeComplete, this);
		// _timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _timeFun, this);
		_timer.start();
		return _timer;
	}


	public constructor() {
	}
}