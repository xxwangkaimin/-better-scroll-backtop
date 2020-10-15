import BScroll from '@better-scroll/core';
import {ease, extend, Probe} from '@better-scroll/shared-utils'
import '../../../lib/back-top.scss'
import propertiesConfig from "./propertiesConfig";

export declare type BackTopOptions = Partial<BackTopConfig> | true;

export interface BackTopConfig {
    right: number,
    bottom: number,
    width: number,
    rollDistance: number,
    backTopImage: string,
    bounceTime: number
}

declare module '@better-scroll/core' {
    interface CustomOptions {
        backTop?: BackTopOptions;
    }
}
const BACK_TOP_HOOKS_NAME = 'backTop'
export default class BackTop {
    static pluginName: string = 'backTop';
    private backTopVisible: boolean = false;
    private backTopBtn: any;
    options?: BackTopConfig;

    constructor(public scroll: BScroll) {
        this.init()
        this.createBackTopBtn(scroll)
    }

    private init() {
        this.handleBScroll()
        this.handleOptions(this.scroll.options.backTop)
        this.registerHooks()
    }

    private handleBScroll() {
        this.scroll.registerType([BACK_TOP_HOOKS_NAME])
        this.scroll.proxy(propertiesConfig)
    }

    private handleOptions(userOptions: BackTopOptions = {}) {
        userOptions = (userOptions === true
            ? {}
            : userOptions) as Partial<BackTopConfig>
        const defaultOptions: BackTopConfig = {
            right: 10,
            bottom: 30,
            width: 36,
            rollDistance: 667,
            backTopImage: require('../../../lib/back-top.png'),
            bounceTime: 800
        }
        this.options = extend(defaultOptions, userOptions)
        this.scroll.options.probeType = Probe.Realtime
    }

    private registerHooks() {
        const scroll = this.scroll
        // @ts-ignore
        scroll.on(scroll.eventTypes.scroll, ({x, y}) => {
            this.handleScrollDistance({x, y})
        })
    }

    private createBackTopBtn(bscroll: BScroll) {
        let backTopBtn = document.getElementById('bs-scroll-totop')
        if (!backTopBtn) {
            this.backTopBtn = new Image()
            this.backTopBtn.src = this.options?.backTopImage
            this.backTopBtn.setAttribute('id', 'bs-scroll-back-top')
            this.backTopBtn.style.right = this.options?.right + 'px'
            this.backTopBtn.style.bottom = this.options?.bottom + 'px'
            this.backTopBtn.style.width = this.options?.width + 'px'
            this.backTopBtn.style.height = this.options?.width + 'px'
        } else
            this.backTopBtn = backTopBtn
        this.backTopBtn.classList.add('bs-scroll-back-top')
        this.backTopBtn.addEventListener('click', () => {
            this.handleBackTop()
        });
        bscroll.wrapper.appendChild(this.backTopBtn)
    }

    private toggleBackTopBtnVisible() {
        if (!this.backTopVisible) {
            this.backTopBtn.classList.remove('scroll-back-top-fade-out')
            this.backTopBtn.classList.add('scroll-back-top-fade-in')
        } else {
            this.backTopBtn.classList.remove('scroll-back-top-fade-in')
            this.backTopBtn.classList.add('scroll-back-top-fade-out')
        }
        this.backTopVisible = !this.backTopVisible
    }

    private handleScrollDistance(distance: { x: 0, y: 0 }) {
        let scrollY: number = Math.abs(distance.y)
        // @ts-ignore
        if (scrollY >= this.options.rollDistance && !this.backTopVisible) {
            this.toggleBackTopBtnVisible()
        } else { // @ts-ignore
            if (scrollY < this.options.rollDistance && this.backTopVisible) {
                if (this.backTopBtn)
                    this.toggleBackTopBtnVisible()
            }
        }
    }

    private handleBackTop() {
        if (this.backTopVisible)
            this.scroll.scrollTo(
                0,
                0,
                this.options?.bounceTime,
                ease.bounce
            )
    }

    backTopHidden() {
        if (this.backTopBtn) {
            this.backTopBtn.classList.remove('scroll-back-top-fade-in')
            this.backTopBtn.classList.add('scroll-back-top-fade-out')
        }
    }
}
