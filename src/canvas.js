import { fabric } from 'fabric'
import Post from './post.js'

export default class BigCanvas {
    constructor(props) {
        const canvasObj = props;
        this.originWidth = 1024;
        this.originHeight = 1024;
        this.backgroundColor = '#C6CDD5';
        this.zoomFactor = 1;
        this.fabricCanvas = new fabric.Canvas(canvasObj, { width: this.originWidth, height: this.originHeight, backgroundColor: this.backgroundColor });
        fabric.util.addListener(document.body, 'keydown', (options) => {
            if (options.repeat) {
                return;
            }
            var key = options.which || options.keyCode; // key detection

            //active object可能是选中的Post or 正在输入的TextBox
            //需要区分ao是group还是textbox
            //1.选择group，按delete键则删除
            //2.选择的是textbox,按delte键则是删除文字
            const ao = this.fabricCanvas.getActiveObject();
            if (ao) {
                const type = ao.get('type');
                if (type === 'textbox') {
                    //直接触发文本框的编辑,开始输入文字
                } else if (type === 'group') {
                    //删除group
                    if (key === 8) {
                        this.fabricCanvas.remove(ao);
                    }
                    //触发文本框的编辑，开始输入文字
                    else {
                        const post = ao.data;
                        post.active();
                    }
                } else if (type === 'activeSelection') {
                    if (key === 8) {
                        this.fabricCanvas.getActiveObjects().forEach((obj) => {
                            this.fabricCanvas.remove(obj)
                        });
                    }
                }
            }
        });

        this.fabricCanvas.on('mouse:dblclick', (e) => {
            if (!e.target) {
                new Post({ x: e.pointer.x, y: e.pointer.y, canvas: this.fabricCanvas });
            } else {
            }
        });

        //选择的时候会误判进入这个状态，导致post的背景色设置不上
        //TODO 
        this.fabricCanvas.on({
            'object:moving': function (e) {
                e.target.opacity = 0.5;
                console.log('moving');
            },
            'object:modified': function (e) {
                e.target.opacity = 1;
                console.log('modified');
            }
        });

        // this.panning = false;
        // //鼠标按下
        // fabricCanvas.on('mouse:down', (e) => {
        //     //按住alt键才可拖动画布
        //     if (e.e.altKey) {
        //         this.panning = true;
        //         fabricCanvas.selection = false;
        //     }
        // });

        // //鼠标抬起
        // fabricCanvas.on('mouse:up', (e) => {
        //     this.panning = false;
        //     fabricCanvas.selection = true;
        // });

        // //鼠标移动
        // fabricCanvas.on('mouse:move', (e) => {
        //     if (this.panning && e && e.e) {
        //         var delta = new fabric.Point(e.e.movementX, e.e.movementY);
        //         fabricCanvas.relativePan(delta);
        //     }
        // });

        //鼠标滚轮监听
        // fabricCanvas.on('mouse:wheel', (opt) => {
        //     var delta = opt.e.deltaY;
        //     var zoom = fabricCanvas.getZoom();
        //     zoom = zoom + delta / 200;
        //     if (zoom > 20) zoom = 20;
        //     if (zoom < 0.01) zoom = 0.01;
        //     console.log(zoom);
        //     fabricCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        //     opt.e.preventDefault();
        //     opt.e.stopPropagation();
        // fabricCanvas.setWidth(this.originWidth * zoom);
        // fabricCanvas.setHeight(this.originHeight * zoom);
        // });
    }

    zoomOut() {
        this.zoomFactor += 0.1;
        this.fabricCanvas.zoomToPoint({ x: 512, y: 512 }, this.zoomFactor);
        this.fabricCanvas.setWidth(this.originWidth * this.zoomFactor);
        this.fabricCanvas.setHeight(this.originHeight * this.zoomFactor);
    }

    zoomIn() {
        this.zoomFactor -= 0.1;
        this.fabricCanvas.zoomToPoint({ x: 512, y: 512 }, this.zoomFactor);
        this.fabricCanvas.setWidth(this.originWidth * this.zoomFactor);
        this.fabricCanvas.setHeight(this.originHeight * this.zoomFactor);
    }

    zoom(factor) {

    }
}