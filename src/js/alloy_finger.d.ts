declare class HandlerAdmin {
    handlers: Array<any>;
    el: any;
    constructor(el: any);
    add(handler: any): void;
    del(handler?: any): void;
    dispatch(...args: any[]): void;
}
export declare class AlloyFinger {
    element: any;
    preV: any;
    pinchStartLen: any;
    zoom: any;
    isDoubleTap: any;
    rotate: HandlerAdmin;
    touchStart: HandlerAdmin;
    multipointStart: HandlerAdmin;
    multipointEnd: HandlerAdmin;
    pinch: HandlerAdmin;
    swipe: HandlerAdmin;
    tap: HandlerAdmin;
    doubleTap: HandlerAdmin;
    longTap: HandlerAdmin;
    singleTap: HandlerAdmin;
    pressMove: HandlerAdmin;
    twoFingerPressMove: HandlerAdmin;
    touchMove: HandlerAdmin;
    touchEnd: HandlerAdmin;
    touchCancel: HandlerAdmin;
    _cancelAllHandler: any;
    delta: any;
    last: any;
    now: any;
    tapTimeout: any;
    singleTapTimeout: any;
    longTapTimeout: any;
    swipeTimeout: any;
    x1: any;
    x2: any;
    y1: any;
    y2: any;
    preTapPosition: any;
    _preventTap: boolean;
    sx2: any;
    sy2: any;
    constructor(el: any, option: any);
    start(evt: any): void;
    move(evt: any): void;
    end(evt: any): void;
    cancelAll(): void;
    cancel(evt: any): void;
    _cancelLongTap(): void;
    _cancelSingleTap(): void;
    _swipeDirection(x1: any, x2: any, y1: any, y2: any): "Left" | "Right" | "Up" | "Down";
    on(evt: any, handler: any): void;
    off(evt: any, handler: any): void;
    destroy(): any;
}
export {};
