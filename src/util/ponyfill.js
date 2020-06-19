
export class performance {
    now() {
        // Unsupport performance.now()
        if (this._now == null) {
            if (typeof performance === "undefined") {
                this._now = () => { return Date.now(); };
            } else {
                this._now = () => { return performance.now(); };
            }
        }
        return this._now();
    }
}

export class Number {
    get MAX_SAFE_INTEGER() { return 0x1FFFFFFFFFFFFF; }
}