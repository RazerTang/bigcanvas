import { fabric } from 'fabric'
import Post from './post.js'

export default class BigCanvas {
    constructor(props) {
        this.originWidth = 1024;
        this.originHeight = 1024;
        this.minWidth = 300;
        this.maxWidth = 3000;
        this.backgroundColor = '#C6CDD5';
        this.zoomFactor = 1;
        this.fabricCanvas = new fabric.Canvas(props, { width: this.originWidth, height: this.originHeight, backgroundColor: this.backgroundColor });
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
                const pointer = this.fabricCanvas.getPointer(e.e);
                new Post({ x: pointer.x, y: pointer.y, canvas: this.fabricCanvas });
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
    }

    zoomOut(x, y) {
        if (this.fabricCanvas.getWidth() > this.maxWidth) {
            return;
        }
        this.zoomFactor += 0.1;
        if (x && y) {
            this.fabricCanvas.zoomToPoint({ x, y }, this.zoomFactor);
        } else {
            this.fabricCanvas.setZoom(this.zoomFactor);
        }
        this.fabricCanvas.setWidth(this.originWidth * this.zoomFactor);
        this.fabricCanvas.setHeight(this.originHeight * this.zoomFactor);
    }

    zoomIn(x, y) {
        if (this.fabricCanvas.getWidth() < this.minWidth) {
            return;
        }
        this.zoomFactor -= 0.1;
        if (x && y) {
            this.fabricCanvas.zoomToPoint({ x, y }, this.zoomFactor);
        } else {
            this.fabricCanvas.setZoom(this.zoomFactor);
        }
        this.fabricCanvas.setWidth(this.originWidth * this.zoomFactor);
        this.fabricCanvas.setHeight(this.originHeight * this.zoomFactor);
    }

    zoom(event) {
        event.deltaY < 0 ? this.zoomOut(event.x, event.y) : this.zoomIn(event.x, event.y);
    }
}