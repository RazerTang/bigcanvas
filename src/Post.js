import { fabric } from 'fabric'

export default class Post {

    constructor(props) {
        this.width = 100;
        this.height = 100;
        this.lines = 2;
        this.isActived = false;
        this.isSelected = false;
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
            fill: props.postColor,
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
            // fill: '#f00',
            hasBorders: false,
            breakWords: true,
        });

        this.group = new fabric.Group([], { ...config });
        this.group.data = this;

        this.active();
    }

    /**
     * selected状态是rect被选中，但没有开始编辑文字
     * 如果文字已开始编辑，则光标暂停
     */
    selected() {
        if (this.isSelected === true) {
            return;
        }
        this.selected = true;
    }

    /**
     * 与selected状态相反
     */
    unselected() {
        if (this.selected === false) {
            return;
        }
        this.selected = false;
    }

    /**
     * active状态是post背景并且开始编辑文本框
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
     * rect去除选中
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