// cc: Cocos Creator
// _decorator: 装饰器的名字空间，修饰类型 or 数据成员 or 函数
// Component: 组件类的基类，继承 Component 类
// Node: 场景里面的节点，组件实例的载体
import { _decorator, Component, Node } from 'cc';

// ccclass: 装饰器 --> 修饰一个类 ---> 组件类
// 帮助编辑器识别一个组件类
// props 装饰器的参数是组件的名字，显示到编辑器的名字
const { ccclass, property } = _decorator;

// property 装饰一个类的数据成员
@ccclass('GameMgr')
export class GameMgr extends Component {
    // 数据成员可视化编辑绑定，编辑器绑定的数据会在运行的时候添加给对象成员
    @property
    private isDebug: boolean = false;

    protected onLoad(): void {
        // this 当前组件实例
        console.log('onLoad')
    }

    start() {
        console.log('start')
    }

    // deleteTime 迭代逻辑
    update(deltaTime: number) {
        console.log('update')
    }
}
