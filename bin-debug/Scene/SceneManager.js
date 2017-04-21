var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager(_globalLayer) {
        var _this = _super.call(this) || this;
        _this.currentLayer = null;
        _this.globalLayer = _globalLayer;
        _this.currentLayer = LoginScene.getInstance();
        _this.addChild(_this.currentLayer);
        return _this;
    }
    SceneManager.getInstance = function (_globalLayer) {
        if (this.m_instance == null) {
            this.m_instance = new SceneManager(_globalLayer);
        }
        return this.m_instance;
    };
    SceneManager.prototype.getRunningLayer = function () {
        return this.currentLayer;
    };
    SceneManager.prototype.backToLobby = function () {
        this.replaceLayer(LobbyScene);
    };
    SceneManager.prototype.replaceLayer = function (_layer) {
        this.removeChild(this.currentLayer);
        this.currentLayer = _layer.getInstance();
        this.checkLayerChange(_layer);
        this.addChild(this.currentLayer);
    };
    SceneManager.prototype.getWinSize = function () {
        return { width: this.globalLayer.stage.stageWidth, height: this.globalLayer.stage.stageHeight };
    };
    SceneManager.prototype.getDirector = function () {
        return this.globalLayer;
    };
    SceneManager.prototype.checkLayerChange = function (_layer) {
        _layer.getInstance().onEnter();
    };
    return SceneManager;
}(eui.UILayer));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map