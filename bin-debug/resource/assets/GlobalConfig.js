var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GlobalConfig = (function () {
    function GlobalConfig() {
    }
    /**
     * 变更游戏类型,变更后所有充值注册等操作均按照此类型执行.
     * @param _gameType 需要变更的游戏类型,请使用 GameType 定义的枚举值;
     */
    GlobalConfig.setGameType = function (_gameType) {
        this.GameType = _gameType;
    };
    ;
    GlobalConfig.getGameType = function () {
        return this.GameType;
    };
    GlobalConfig.setIsGroup = function (_isGrouper) {
        this.isGrouper = _isGrouper;
    };
    GlobalConfig.getIsGroup = function () {
        return this.isGrouper;
    };
    return GlobalConfig;
}());
__reflect(GlobalConfig.prototype, "GlobalConfig");
var GameType = (function () {
    function GameType() {
    }
    return GameType;
}());
GameType.MaJiang = 'mj';
GameType.DouDiZhu = 'ddz';
__reflect(GameType.prototype, "GameType");
//# sourceMappingURL=GlobalConfig.js.map