import { fabric } from 'fabric'
import Post from './post.js'

export default class BigCanvas {
    constructor(props) {
        this.originWidth = 1920;
        this.originHeight = 1080;
        this.minWidth = 300;
        this.maxWidth = 3000;
        this.backgroundColor = '#C6CDD5';
        this.zoomFactor = 1;
        this.deltaZoomFactor = 0.05;//每次缩放的比例
        this.containerName = props;
        this.isSpaceKeyDown = false;
        this.isMouseDown = false;
        this.preMouseDownPt = null;
        this.fabricCanvas = new fabric.Canvas(props, { width: this.originWidth, height: this.originHeight, backgroundColor: this.backgroundColor });

        fabric.util.addListener(document.body, 'keyup', (options) => {
            if (options.which === 32) {
                this.spaceUp();
            }
        });

        fabric.util.addListener(document.body, 'keydown', (options) => {
            if (options.repeat) {
                return;
            }

            var key = options.which || options.keyCode; // key detection

            //空格键 拖动
            if (key === 32) {
                this.spaceDown();
                //屏蔽不了浏览器的默认行为？
                options.preventDefault();
                options.stopPropagation();
                return;
            }

            //Cmd + '+'
            //Cmd + '-'
            if (options.metaKey === true) {
                options.preventDefault();
                options.stopPropagation();
                if (options.which === 187) {
                    this.zoomOut();
                } else if (key === 189) {
                    this.zoomIn();
                }
            }

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

        this.fabricCanvas.on('mouse:down', e => {
            this.isMouseDown = true;
            this.preMouseDownPt = e.pointer;
            console.log('down');
        });

        this.fabricCanvas.on('mouse:move', e => {
            console.log(`move x=${e.pointer.x},y=${e.pointer.y},v= ${JSON.stringify(e)}`);
            if (this.isMouseDown && this.isSpaceKeyDown) {
                const units = e.pointer.x - this.preMouseDownPt.x;
                this.preMouseDownPt = e.pointer;
                console.log(`units=${units}`);
                this.fabricCanvas.relativePan(new fabric.Point(units, 0));
            }
        });

        this.fabricCanvas.on('mouse:up', e => {
            this.isMouseDown = false;
            console.log('up');
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
        this.zoomFactor += this.deltaZoomFactor;
        this._zoomFactor(this.zoomFactor, { x: document.body.clientWidth / 2, y: document.body.clientHeight / 2 });
    }

    zoomIn(x, y) {
        if (this.fabricCanvas.getWidth() < this.minWidth) {
            return;
        }
        this.zoomFactor -= this.deltaZoomFactor;
        this._zoomFactor(this.zoomFactor, { x: document.body.clientWidth / 2, y: document.body.clientHeight / 2 });
    }

    zoom(event) {
        const opt = this.fabricCanvas.getPointer(event);
        event.deltaY < 0 ? this.zoomOut(opt.x, opt.y) : this.zoomIn(opt.x, opt.y);
    }

    //1.设置鼠标的cursor
    //2.监听鼠标移动事件
    spaceDown() {
        console.log('空格键按下');
        this.isSpaceKeyDown = true;
    }

    spaceUp() {
        console.log('空格键弹起来');
        this.isSpaceKeyDown = false;
    }

    _zoomFactor(factor, center) {
        //没有居中缩放
        this.fabricCanvas.setZoom(factor);
        this.fabricCanvas.setWidth(this.originWidth * this.zoomFactor);
        this.fabricCanvas.setHeight(this.originHeight * this.zoomFactor);
    }
}