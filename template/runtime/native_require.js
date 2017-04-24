
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/md5/md5-min.js",
	"polyfill/promise.js",
	"bin-debug/resource/skin/Misc/Loding/Loding.js",
	"bin-debug/resource/assets/AgentItem.js",
	"bin-debug/resource/assets/Alert.js",
	"bin-debug/resource/assets/AssetAdapter.js",
	"bin-debug/resource/assets/ChargeForAgent.js",
	"bin-debug/resource/assets/CreateAccount.js",
	"bin-debug/resource/assets/Encrypt.js",
	"bin-debug/resource/assets/FinancialRecord.js",
	"bin-debug/resource/assets/FinancialRecordItem.js",
	"bin-debug/resource/assets/GlobalConfig.js",
	"bin-debug/resource/assets/GroupManagerScene.js",
	"bin-debug/resource/assets/LoadingUI.js",
	"bin-debug/resource/assets/LobbyScene.js",
	"bin-debug/resource/assets/LoginScene.js",
	"bin-debug/resource/assets/Main.js",
	"bin-debug/resource/assets/MJManagerScene.js",
	"bin-debug/resource/assets/SceneManager.js",
	"bin-debug/resource/assets/ThemeAdapter.js",
	"bin-debug/resource/assets/UserObject.js",
	"bin-debug/resource/assets/zAction.js",
	"bin-debug/resource/assets/zHttp.js",
	"bin-debug/resource/assets/zUtils.js",
	"bin-debug/resource/assets/AgentManager.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/base/Encrypt.js",
	"bin-debug/base/GlobalConfig.js",
	"bin-debug/base/UserObject.js",
	"bin-debug/base/zAction.js",
	"bin-debug/base/zHttp.js",
	"bin-debug/base/zUtils.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/Misc/Alert.js",
	"bin-debug/Misc/ChargeForAgent.js",
	"bin-debug/Scene/Agent/AgentManager/AgentItem.js",
	"bin-debug/Scene/Agent/AgentManager/AgentManager.js",
	"bin-debug/Scene/Agent/CreateAccount.js",
	"bin-debug/Scene/Agent/FinancialRecord/FinancialRecord.js",
	"bin-debug/Scene/Agent/FinancialRecord/FinancialRecordItem.js",
	"bin-debug/Scene/Agent/LobbyScene.js",
	"bin-debug/Scene/Group/GroupManagerScene.js",
	"bin-debug/Scene/Group/MJManagerScene/MJManagerScene.js",
	"bin-debug/Scene/LoginScene.js",
	"bin-debug/Scene/SceneManager.js",
	"bin-debug/ThemeAdapter.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 720,
		contentHeight: 1280,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};