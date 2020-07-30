
export class Performance {
    static now() {
        // Unsupport performance.now()
        if (this._now == null) {
            if (typeof window.performance === "undefined") {
                this._now = () => { return window.Date.now(); };
            } else {
                this._now = () => { return window.performance.now(); };
            }
        }
        return this._now();
    }
}

export class Number {
    static MAX_SAFE_INTEGER() { return 0x1FFFFFFFFFFFFF; }
}