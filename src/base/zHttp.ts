class zHttp {
    private static m_instance: zHttp = null;
    private SERVER_ADDRESS: string = 'http://192.168.1.211/mj_club/public/';
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
    public sendHttpRequest(obj, url: string, _type: string, completeCallback?, params?: eui.ArrayCollection, errorCallback?, progressCallback?): void {
        let flag = false;
        if (params == null) {
            flag = true;
            params = new eui.ArrayCollection();
            params.addItem({ key: 'token', value: UserObject.getToken() });
            let time = String(new Date().getTime());
            params.addItem({ key: 'timestamp', value: time });
            params.addItem({ key: 'key', value: Encrypt.md5(Encrypt.md5("4B7D9717C34B2FB64CC813EA0ACC6D29" + time)) });
        }
        var pUrl = "";
        if (params != null && params.length > 0) {
            if (!flag) {
                params.addItem({ key: 'token', value: UserObject.getToken() });
                let time = String(new Date().getTime());
                params.addItem({ key: 'timestamp', value: time });
                params.addItem({ key: 'key', value: Encrypt.md5(Encrypt.md5("4B7D9717C34B2FB64CC813EA0ACC6D29" + time)) });
            }
            pUrl = "?";
            for (var i = 0; i < params.length; i++) {
                if (pUrl != "") {
                    pUrl = pUrl + "&";
                }
                pUrl = pUrl + params.getItemAt(i).key + "=" + params.getItemAt(i).value;
            }
        }



        console.log("url:" + this.SERVER_ADDRESS + url + pUrl);
        var request: egret.HttpRequest = new egret.HttpRequest();
        _type == egret.HttpMethod.POST ? request.open(this.SERVER_ADDRESS + url, _type)
            : request.open(this.SERVER_ADDRESS + url + pUrl, _type);

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        _type == egret.HttpMethod.POST ? request.send(pUrl) : request.send();

        request.addEventListener(egret.Event.COMPLETE, completeCallback ? completeCallback : this.onHttpDone, obj);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, errorCallback ? errorCallback : this.onHttpIOError, obj);
        request.addEventListener(egret.ProgressEvent.PROGRESS, progressCallback ? progressCallback : this.onHttpProgress, obj);
    }

    private onHttpProgress(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    private onHttpIOError(event: egret.IOErrorEvent): void {
        console.log("HttpError");
        console.log(event);
    }

    private onHttpDone(event: egret.IOErrorEvent): void {
        console.log("HttpDone");
    }

    public onHttpCompleted(event: egret.IOErrorEvent): Object {
        var _request = <egret.HttpRequest>event.currentTarget;
        var _response = _request.response;
        return JSON.parse(_response);
    }
}
