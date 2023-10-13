import { _decorator, Component, Material, MeshRenderer, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MeshMain')
export class MeshMain extends Component {
    @property(Material)
    private greenMat: Material = null;

    start() {
        // 获取mashRender组件对象
        const meshRender = this.node.getComponent(MeshRenderer) as MeshRenderer;
        // 获取材质对象
        meshRender.setMaterial(this.greenMat, 0);
    }

    update(deltaTime: number) {}
}
