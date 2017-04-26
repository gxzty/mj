class zHttp {
    private static m_instance: zHttp = null;
    private SERVER_ADDRESS: string = 'https://api.52plays.com/';
    private APP_SECERT: string = 'X7bmV6h7tYv(z,DZMP7zRxqIi*!Z!@4p';
    // private SERVER_ADDRESS: string = 'http://192.168.1.211/mj_club/public/';
    //private SERVER_ADDRESS: string = 'http://121.43.191.130/agent/login';
    //private SERVER_ADDRESS: string = 'http://www.posttestserver.com/';
    //private SERVER_ADDRESS: string = 'http://httpbin.org/';
    public constructor() {
        this.create();
    }

    public static getInstance(): zHttp {
        if (this.m_instance == null) {
            this.m_instance = new zHttp();
        }
        return this.m_instance;
    };

    public create(): void {
        console.log("create zHttp");
    }

    public sendHttpRequestWithGameType(obj, url: string, _type: string, params: eui.ArrayCollection, completeCallback: Function = this.onHttpDone, errorCallback: Function = this.onHttpIOError, progressCallback: Function = this.onHttpProgress) {
        this.sendHttpRequest(
            obj,
            GlobalConfig.getGameType() + url,
            _type,
            params ? params : null,
            completeCallback,
            errorCallback,
            progressCallback
        );
    }


    public sendHttpRequest(obj, url: string, _type: string, params: eui.ArrayCollection, completeCallback: Function = this.onHttpDone, errorCallback: Function = this.onHttpIOError, progressCallback: Function = this.onHttpProgress): void {
        var pUrl = _type == egret.HttpMethod.POST ? "" : "?";
        if (params != null) {
            console.log("length:" + params.length);
        }
        if (params != null && params.length > 0) {
            for (var i = 0; i < params.length; i++) {
                if (pUrl != "" && pUrl != "?") {
                    pUrl = pUrl + "&";
                }
                pUrl = pUrl + params.getItemAt(i).k + "=" + params.getItemAt(i).v;
            }
        }

        let time = String(new Date().getTime());
        if (pUrl != '') {
            pUrl = pUrl + '&';
        }
        pUrl = pUrl + 'token=' + UserObject.getToken() + '&timestamp=' + time + '&key=' + Encrypt.md5(Encrypt.md5(this.APP_SECERT + time));

        console.log("url:" + this.SERVER_ADDRESS + url);
        console.log("data:" + pUrl);
        var request: egret.HttpRequest = new egret.HttpRequest();
        _type == egret.HttpMethod.POST ? request.open(this.SERVER_ADDRESS + url, _type)
            : request.open(this.SERVER_ADDRESS + url + pUrl, _type);

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        _type == egret.HttpMethod.POST ? request.send(pUrl) : request.send();

        request.addEventListener(egret.Event.COMPLETE, completeCallback, obj);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, errorCallback, obj);
        request.addEventListener(egret.ProgressEvent.PROGRESS, progressCallback, obj);
    }

    private onHttpProgress(event: egret.ProgressEvent): void {
        //console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    private onHttpIOError(event: egret.IOErrorEvent): void {
        console.log("HttpError");
        console.log(event);
    }

    private onHttpDone(event: egret.Event): void {
        console.log("HttpDone");
    }

    public onHttpCompleted(event: egret.Event): boolean {
        var _request = <egret.HttpRequest>event.currentTarget;
        var _response = _request.response;
        let foo = JSON.parse(_response);
        //console.log('返回code:' + foo['code']);
        switch (foo['code']) {
            case 1:
                return foo;
            case -1:
                // 账号或密码错误,单条message,没有results
                Alert.show(foo['message']);
                return undefined;

            case -2:
                // 验证失败
                let result_2 = foo['results'];
                Alert.show(result_2[0][0]);
                return undefined;
        }
        return undefined;

    }
}
