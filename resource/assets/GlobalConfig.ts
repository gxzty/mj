class GlobalConfig {
	private static GameType;
	private static isGrouper;  // 是否是群主
	public constructor() {
	}

	/**
	 * 变更游戏类型,变更后所有充值注册等操作均按照此类型执行.
	 * @param _gameType 需要变更的游戏类型,请使用 GameType 定义的枚举值;
	 */
	public static setGameType(_gameType: string) {
		this.GameType = _gameType;
	};
	public static getGameType(): string {
		return this.GameType;
	}
	public static setIsGroup(_isGrouper: boolean) {
		this.isGrouper = _isGrouper;
	}
	public static getIsGroup(): boolean {
		return this.isGrouper;
	}
}

class GameType {
	public static MaJiang = 'mj';
	public static DouDiZhu = 'ddz';
}