import { fabric } from 'fabric'


export default class Post extends fabric.Rect {
    constructor(props) {
        super({
            top: props.y - 50,
            left: props.x - 50,
            width: 100,
            height: 100,
            fill: '#FFF09A'
        });
    }

    onSelect() {
        this.backgroundColor = '#00A2FF';
    }

    onDeselect() {
        this.backgroundColor = '#00A2FF00';
    }
}