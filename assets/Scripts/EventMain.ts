import { _decorator, Component, Node, Input, input, EventTouch, EventKeyboard, KeyCode, EventAcceleration } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventMain')
export class EventMain extends Component {
    // 初始化监听系统事件
    // a. 系统事件存在全局唯一的事件单例 systemEvent: SystemEvent(3.4版本之后启用，使用Input进行监听事件)
    // b. 单例 Input.on(eventName, callback, target)
    start() {
        input.on<typeof Input.EventType.TOUCH_START>(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on<typeof Input.EventType.TOUCH_END>(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.on<typeof Input.EventType.TOUCH_CANCEL>(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        input.on<typeof Input.EventType.TOUCH_MOVE>(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);

        // 键盘事件
        // 区分键盘按键 event.keyCode
        input.on<typeof Input.EventType.KEY_UP>(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on<typeof Input.EventType.KEY_DOWN>(Input.EventType.KEY_DOWN, this.onKeyDown, this);

        // 重力感应事件
        input.on<typeof Input.EventType.DEVICEMOTION>(Input.EventType.DEVICEMOTION, this.onDevicemotion, this);

    }

    protected onDestroy(): void {
        // 取消监听事件
        // 单例必须需要删除监听事件，否则会造成内存泄漏
        input.off<typeof Input.EventType.TOUCH_START>(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off<typeof Input.EventType.TOUCH_END>(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.off<typeof Input.EventType.TOUCH_CANCEL>(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        input.off<typeof Input.EventType.TOUCH_MOVE>(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);

        // 键盘事件
        // 区分键盘按键 event.keyCode
        input.off<typeof Input.EventType.KEY_UP>(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.off<typeof Input.EventType.KEY_DOWN>(Input.EventType.KEY_DOWN, this.onKeyDown, this);

        // 重力感应事件
        input.off<typeof Input.EventType.DEVICEMOTION>(Input.EventType.DEVICEMOTION, this.onDevicemotion, this);
    }

    // touchStart 事件监听 触摸按下
    onTouchStart(touch: EventTouch): void {
        console.log('onTouchStart...');
        console.log('touch start: ', touch);
        // 触摸坐标，以左下角为坐标原点
        console.log('touch start location is: ', touch.getLocation());
    }

    // touchEnd 事件监听 触摸弹起
    onTouchEnd(touch: EventTouch): void {
        console.log('onTouchEnd');
    }

    // touchEnd 事件监听 触摸弹起
    onTouchCancel(touch: EventTouch): void {
        console.log('onTouchEnd');
    }

    // touchEnd 事件监听 触摸弹起
    onTouchMove(touch: EventTouch): void {
        console.log('onTouchMove');
        console.log('touch move is: ', touch.getDelta());
    }

    // keyUp 事件监听 键盘弹起
    onKeyUp(event: EventKeyboard): void {
        console.log('onKeyUp');
        console.log('key code: ', event.keyCode);
        switch (event.keyCode) {
            case KeyCode.SPACE:
                console.log('key down is space...');
                break;
            default:
                break;
        }
    }
    // KeyDown 事件监听 键盘按下
    onKeyDown(event: EventKeyboard): void {
        console.log('onKeyDown');
        console.log('key code: ', event.keyCode);
    }

    // 重力感应事件
    onDevicemotion(event: EventAcceleration): void {
        console.log('onDevicemotion');
    }

    update(deltaTime: number) {}
}
