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

        this.init(props);
        this.textbox.on('mousedown', (e) => {
            this.active();
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

        this.rect = new fabric.Rect({
            ...frame,
            fill: '#FFF09A',
            hasControls: false,
            stroke: '#00A2FF',
            strokeWidth: this.strokeWidth,
        });

        const LimitedTextbox = fabric.util.createClass(fabric.Textbox, {

        });


        this.textbox = new LimitedTextbox('', {
            ...frame,
            width: this.width,
            top: props.y,
            fontSize: 30,
            // textAlign: 'center',
            // textBaseline: 'middle',
            fill: '#000',
            hasBorders: false,
            breakWords: true,
        });


        this.group = new fabric.Group();
        this.group.data = this;

        this.active();
    }

    /**
     * active可以激活的两个图形
     * 1.创建的时候
     * 2.选中该group并输入文字的时候
     */
    active() {
        this.group.removeWithUpdate(this.rect);
        this.group.removeWithUpdate(this.textbox);
        this.canvas.remove(this.group);

        this.canvas.add(this.rect);
        this.canvas.add(this.textbox);
        this.canvas.setActiveObject(this.textbox);

        this.rect.set("strokeWidth", this.strokeWidth);

        this.textbox.enterEditing();
        this.isActived = true;
    }

    /**
     * unactive的条件为文字编辑状态消失的时候
     */
    unactive() {
        this.rect.set("strokeWidth", 0);

        this.canvas.remove(this.rect);
        this.canvas.remove(this.textbox);

        this.group.addWithUpdate(this.rect);
        this.group.addWithUpdate(this.textbox);
        this.canvas.add(this.group);


        this.isActived = false;
    }

    isActived() {
        return this.isActived;
    }
}