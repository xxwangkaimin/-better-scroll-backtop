import { ease, extend } from '@better-scroll/shared-utils';
import './back-top.scss';
import propertiesConfig from "./propertiesConfig";
import { addUnit } from "./addUnit";
var BACK_TOP_HOOKS_NAME = 'backTop';
var BackTop = /** @class */ (function () {
    function BackTop(scroll) {
        this.scroll = scroll;
        this.backTopVisible = false;
        this.init();
        this.createBackTopBtn(scroll);
    }
    BackTop.prototype.init = function () {
        this.handleBScroll();
        this.handleOptions(this.scroll.options.backTop);
        this.registerHooks();
    };
    BackTop.prototype.handleBScroll = function () {
        this.scroll.registerType([BACK_TOP_HOOKS_NAME]);
        this.scroll.proxy(propertiesConfig);
    };
    BackTop.prototype.handleOptions = function (userOptions) {
        if (userOptions === void 0) { userOptions = {}; }
        userOptions = (userOptions === true
            ? {}
            : userOptions);
        var defaultOptions = {
            right: 10,
            bottom: 30,
            width: 36,
            rollDistance: 667,
            backTopImage: require('./back-top.png'),
            bounceTime: 800
        };
        this.options = extend(defaultOptions, userOptions);
        this.scroll.options.probeType = 3 /* Realtime */;
    };
    BackTop.prototype.registerHooks = function () {
        var _this = this;
        var scroll = this.scroll;
        // @ts-ignore
        scroll.on(scroll.eventTypes.scroll, function (_a) {
            var x = _a.x, y = _a.y;
            _this.handleScrollDistance({ x: x, y: y });
        });
    };
    BackTop.prototype.createBackTopBtn = function (bscroll) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var backTopBtn = document.getElementById('bs-scroll-totop');
        if (!backTopBtn) {
            this.backTopBtn = new Image();
            this.backTopBtn.src = (_a = this.options) === null || _a === void 0 ? void 0 : _a.backTopImage;
            this.backTopBtn.setAttribute('id', 'bs-scroll-back-top');
            this.backTopBtn.style.right = addUnit((_b = this.options) === null || _b === void 0 ? void 0 : _b.right);
            this.backTopBtn.style.bottom = addUnit((_c = this.options) === null || _c === void 0 ? void 0 : _c.bottom);
            this.backTopBtn.style.width = addUnit((_d = this.options) === null || _d === void 0 ? void 0 : _d.width);
            this.backTopBtn.style.height = addUnit((_e = this.options) === null || _e === void 0 ? void 0 : _e.width);
        }
        else
            this.backTopBtn = backTopBtn;
        this.backTopBtn.classList.add('bs-scroll-back-top');
        this.backTopBtn.addEventListener('click', function () {
            _this.handleBackTop();
        });
        bscroll.wrapper.appendChild(this.backTopBtn);
    };
    BackTop.prototype.toggleBackTopBtnVisible = function () {
        if (!this.backTopVisible) {
            this.backTopBtn.classList.remove('scroll-back-top-fade-out');
            this.backTopBtn.classList.add('scroll-back-top-fade-in');
        }
        else {
            this.backTopBtn.classList.remove('scroll-back-top-fade-in');
            this.backTopBtn.classList.add('scroll-back-top-fade-out');
        }
        this.backTopVisible = !this.backTopVisible;
    };
    BackTop.prototype.handleScrollDistance = function (distance) {
        var scrollY = Math.abs(distance.y);
        // @ts-ignore
        if (scrollY >= this.options.rollDistance && !this.backTopVisible) {
            this.toggleBackTopBtnVisible();
        }
        else { // @ts-ignore
            if (scrollY < this.options.rollDistance && this.backTopVisible) {
                if (this.backTopBtn)
                    this.toggleBackTopBtnVisible();
            }
        }
    };
    BackTop.prototype.handleBackTop = function () {
        var _a;
        if (this.backTopVisible)
            this.scroll.scrollTo(0, 0, (_a = this.options) === null || _a === void 0 ? void 0 : _a.bounceTime, ease.bounce);
    };
    BackTop.prototype.backTopHidden = function () {
        if (this.backTopBtn) {
            this.backTopBtn.classList.remove('scroll-back-top-fade-in');
            this.backTopBtn.classList.add('scroll-back-top-fade-out');
        }
    };
    BackTop.pluginName = 'backTop';
    return BackTop;
}());
export default BackTop;
