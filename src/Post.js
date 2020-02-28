import { fabric } from 'fabric'

// fabric.Text.prototype.calcTextHeight = function () {
//     var lineHeight, height = 0;
//     for (var i = 0, len = this._textLines.length; i < len; i++) {
//         lineHeight = this.getHeightOfLine(i);
//         height += lineHeight;
//     }
//     return height;
// };

// fabric.Text.prototype.getMaxTextWidth = function () {
//     var maxWidth = this.getLineWidth(0)
//     for (var i = 0, len = this._textLines.length; i < len; i++) {
//         maxWidth = Math.max(maxWidth, this.getLineWidth(i));

//     }
//     return maxWidth;
// }



export default class Post {

    constructor(props) {
        this.width = 100;
        this.height = 100;
        this.lines = 2;
        this.isActived = false;
        this.strokeWidth = 5;
        this.fontSize = 10;

        this.init(props);

        var timer = 0;
        this.group.on('mouseup', () => {
            var d = new Date();
            timer = d.getTime();
        });
        this.group.on('mousedown', () => {
            var d = new Date();
            if ((d.getTime() - timer) < 300) {
                this.active();
            } else {
                //鼠标按下去的时候 设置背景色
                this.rect.set("strokeWidth", this.strokeWidth);
            }
        });

        //鼠标抬起来的时候 取消背景色
        this.group.on('mouseup', () => {
            this.rect.set("strokeWidth", 0);
        });

        this.textbox.on('changed', (e) => {
        });

        this.textbox.on('editing:entered', (e) => {
        });
        this.textbox.on('editing:exited', (e) => {
            this.unactive();
        });
    }

    init(props) {
        this.canvas = props.canvas;
        const frame = {
            originX: 'center',
            originY: 'center',
            top: props.y,
            left: props.x,
            width: this.width,
            height: this.height
        };

        const config = {
            lockScalingY: true,
            lockScalingX: true,
            lockUniScaling: true,
            lockRotation: true,
        }

        this.rect = new fabric.Rect({
            ...frame,
            ...config,
            fill: '#FFF09A',
            hasControls: false,
            stroke: '#00A2FF',
            strokeWidth: this.strokeWidth,
        });

        const LimitedTextbox = fabric.util.createClass(fabric.Textbox, {

        });


        this.textbox = new LimitedTextbox('', {
            ...frame,
            ...config,
            width: this.width,
            top: props.y,
            fontSize: this.fontSize,
            textAlign: 'center',
            // textBaseline: 'middle',
            fill: '#000',
            hasBorders: false,
            breakWords: true,
        });

        this.group = new fabric.Group([], { ...config });
        this.group.data = this;


        this.active();
    }

    /**
     * active可以激活的两个图形
     * 1.创建的时候
     * 2.选中该group并输入文字的时候
     */
    active() {
        if (this.isActived) {
            return;
        }
        this.group.removeWithUpdate(this.rect);
        this.group.removeWithUpdate(this.textbox);
        this.canvas.remove(this.group);

        this.canvas.add(this.rect);
        this.canvas.add(this.textbox);
        this.canvas.setActiveObject(this.textbox);

        this.rect.set("strokeWidth", this.strokeWidth);

        this.textbox.enterEditing();

        this.isActived = true;
        console.log('active');
    }

    /**
     * unactive的条件为文字编辑状态消失的时候
     */
    unactive() {
        if (!this.isActived) {
            return;
        }
        this.rect.set("strokeWidth", 0);

        this.canvas.remove(this.rect);
        this.canvas.remove(this.textbox);

        this.group.addWithUpdate(this.rect);
        this.group.addWithUpdate(this.textbox);
        this.canvas.add(this.group);

        this.isActived = false;
        console.log('unactive');
    }

    isActived() {
        return this.isActived;
    }
}