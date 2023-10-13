import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PrefabMain')
export class PrefabMain extends Component {
    @property(Prefab)
    private cubePrefab: Prefab = null;

    start() {
        const cube: Node = instantiate(this.cubePrefab);
        this.node.parent.addChild(cube);
    }

    update(deltaTime: number) {}
}
