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
	public constructor() {
	}
}