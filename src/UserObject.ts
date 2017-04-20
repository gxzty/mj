class UserObject {
	private static UserName;
	private static FullName;
	private static Token;
	private static Level;

	private static Balance;

	public static getBalance() {
		return this.Balance;
	}
	public static setBalance(_banlance) {
		this.Balance = _banlance;
	}

	public static getUsername() {
		return this.UserName;
	}
	public static setUsername(_username) {
		this.UserName = _username;
	}

	public static getFullName() {
		return this.FullName;
	}
	public static setFullName(_fullname) {
		this.FullName = _fullname;
	}

	public static getToken() {
		return this.Token;
	}
	public static setToken(_token) {
		this.Token = _token;
	}

	public static getLevel() {
		return this.Level;
	}
	public static setLevel(_level) {
		this.Level = _level;
	}
}