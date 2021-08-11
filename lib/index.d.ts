import BScroll from '@better-scroll/core';
import './back-top.scss';
export declare type BackTopOptions = Partial<BackTopConfig> | true;
export interface BackTopConfig {
    right: number | string;
    bottom: number | string;
    width: number | string;
    rollDistance: number;
    backTopImage: string;
    bounceTime: number;
}
declare module '@better-scroll/core' {
    interface CustomOptions {
        backTop?: BackTopOptions;
    }
}
export default class BackTop {
    scroll: BScroll;
    static pluginName: string;
    private backTopVisible;
    private backTopBtn;
    options?: BackTopConfig;
    constructor(scroll: BScroll);
    private init;
    private handleBScroll;
    private handleOptions;
    private registerHooks;
    private createBackTopBtn;
    private toggleBackTopBtnVisible;
    private handleScrollDistance;
    private handleBackTop;
    backTopHidden(): void;
}
