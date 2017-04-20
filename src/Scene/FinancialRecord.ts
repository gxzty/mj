class FinancialRecord extends eui.Component implements  eui.UIComponent {
	private static m_instance;
	private titleLabel: eui.Label;
	private leftBtn:eui.Button;
	private rightBtn: eui.Button;
	

	public static getInstance(): FinancialRecord {
		if (this.m_instance == null) {
			this.m_instance = new FinancialRecord();
		}
		return this.m_instance;
	};
	public constructor() {
		super();
		this.skinName = "resource/skin/Scene/FinancialRecord/FinancialRecord.exml";
		this.titleLabel.$setText("财务记录");
		this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(e:egret.TouchEvent)=>{
			SceneManager.getInstance().replaceLayer(LobbyScene.getInstance());
		},this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}