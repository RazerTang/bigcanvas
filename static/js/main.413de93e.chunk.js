(this.webpackJsonpbigcanvas=this.webpackJsonpbigcanvas||[]).push([[0],[,,,,,,,,,function(t,e,o){},,function(t,e,o){t.exports=o(25)},,,,,function(t,e,o){},,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,o){"use strict";o.r(e);var i=o(0),n=o.n(i),s=o(10),a=o.n(s),c=(o(16),o(2)),r=o(3),h=o(5),l=o(4),u=o(6),d=(o(9),o(1)),v=o(7),b=function(){function t(e){var o=this;Object(c.a)(this,t),this.width=100,this.height=100,this.lines=2,this.isActived=!1,this.isSelected=!1,this.strokeWidth=5,this.fontSize=10,this.init(e);var i=0;this.group.on("mouseup",(function(){var t=new Date;i=t.getTime()})),this.group.on("mousedown",(function(){(new Date).getTime()-i<300?o.active():o.rect.set("strokeWidth",o.strokeWidth)})),this.group.on("mouseup",(function(){o.rect.set("strokeWidth",0)})),this.textbox.on("changed",(function(t){})),this.textbox.on("editing:entered",(function(t){})),this.textbox.on("editing:exited",(function(t){o.unactive()}))}return Object(r.a)(t,[{key:"init",value:function(t){this.canvas=t.canvas;var e={originX:"center",originY:"center",top:t.y,left:t.x,width:this.width,height:this.height},o={lockScalingY:!0,lockScalingX:!0,lockUniScaling:!0,lockRotation:!0};this.rect=new d.fabric.Rect(Object(v.a)({},e,{},o,{fill:t.postColor,hasControls:!1,stroke:"#00A2FF",strokeWidth:this.strokeWidth}));var i=d.fabric.util.createClass(d.fabric.Textbox,{});this.textbox=new i("",Object(v.a)({},e,{},o,{width:this.width,top:t.y,fontSize:this.fontSize,textAlign:"center",hasBorders:!1,breakWords:!0})),this.group=new d.fabric.Group([],Object(v.a)({},o)),this.group.data=this,this.active()}},{key:"selected",value:function(){!0!==this.isSelected&&(this.selected=!0)}},{key:"unselected",value:function(){!1!==this.selected&&(this.selected=!1)}},{key:"active",value:function(){this.isActived||(this.group.removeWithUpdate(this.rect),this.group.removeWithUpdate(this.textbox),this.canvas.remove(this.group),this.canvas.add(this.rect),this.canvas.add(this.textbox),this.canvas.setActiveObject(this.textbox),this.rect.set("strokeWidth",this.strokeWidth),this.textbox.enterEditing(),this.isActived=!0,console.log("active"))}},{key:"unactive",value:function(){this.isActived&&(this.rect.set("strokeWidth",0),this.canvas.remove(this.rect),this.canvas.remove(this.textbox),this.group.addWithUpdate(this.rect),this.group.addWithUpdate(this.textbox),this.canvas.add(this.group),this.isActived=!1,console.log("unactive"))}},{key:"isActived",value:function(){return this.isActived}},{key:"setFill",value:function(t){this.rect.set("fill",t)}},{key:"isEditing",value:function(){return this.textbox.isEditing}}]),t}(),f=function(){function t(e){var o=this;Object(c.a)(this,t),this.originWidth=1920,this.originHeight=1080,this.minWidth=300,this.maxWidth=3e3,this.backgroundColor="#C6CDD5",this.zoomFactor=1,this.deltaZoomFactor=.05,this.containerName=e.canvasId,this.isSpaceKeyDown=!1,this.isMouseDown=!1,this.preMouseDownPt=null,this.currentPostColor="#FFF09A",this.fabricCanvas=new d.fabric.Canvas(e.canvasId,{width:this.originWidth,height:this.originHeight,backgroundColor:this.backgroundColor}),d.fabric.util.addListener(document.body,"keyup",(function(t){32===t.which&&o.spaceUp()})),d.fabric.util.addListener(document.body,"keydown",(function(t){if(!t.repeat){var e=t.which||t.keyCode;if(32===e)return o.spaceDown(),t.preventDefault(),void t.stopPropagation();!0===t.metaKey&&(t.preventDefault(),t.stopPropagation(),187===t.which?o.zoomOut():189===e&&o.zoomIn());var i=o.fabricCanvas.getActiveObject();if(i){var n=i.get("type");if("textbox"===n);else if("group"===n){if(8===e)o.fabricCanvas.remove(i);else i.data.active()}else"activeSelection"===n&&8===e&&o.fabricCanvas.getActiveObjects().forEach((function(t){o.fabricCanvas.remove(t)}))}}})),this.fabricCanvas.on("mouse:dblclick",(function(t){if(e&&e.hideToolbox(),!t.target){var i=o.fabricCanvas.getPointer(t.e);new b({x:i.x,y:i.y,canvas:o.fabricCanvas,postColor:o.currentPostColor})}})),this.fabricCanvas.on("mouse:down",(function(t){o.isMouseDown=!0,o.preMouseDownPt=t.pointer,console.log("down="+t.button),0===o.fabricCanvas.getActiveObjects().length&&e&&e.hideToolbox()})),this.fabricCanvas.on("mouse:move",(function(t){if(console.log("move x=".concat(t.pointer.x,",y=").concat(t.pointer.y,",v= ").concat(JSON.stringify(t))),o.isMouseDown&&o.isSpaceKeyDown){var e=t.pointer.x-o.preMouseDownPt.x;o.preMouseDownPt=t.pointer,console.log("units=".concat(e)),o.fabricCanvas.relativePan(new d.fabric.Point(e,0)),console.log("left"+o.fabricCanvas.get("left")+"width="+o.fabricCanvas.width)}})),this.fabricCanvas.on("mouse:up",(function(t){o.isMouseDown=!1,console.log("up")})),this.fabricCanvas.on({"object:moving":function(t){t.target.opacity=.5,console.log("moving")},"object:modified":function(t){t.target.opacity=1,console.log("modified")}})}return Object(r.a)(t,[{key:"zoomOut",value:function(t,e){this.fabricCanvas.getWidth()>this.maxWidth||(this.zoomFactor+=this.deltaZoomFactor,this._zoomFactor(this.zoomFactor,{x:document.body.clientWidth/2,y:document.body.clientHeight/2}))}},{key:"zoomIn",value:function(t,e){this.fabricCanvas.getWidth()<this.minWidth||(this.zoomFactor-=this.deltaZoomFactor,this._zoomFactor(this.zoomFactor,{x:document.body.clientWidth/2,y:document.body.clientHeight/2}))}},{key:"zoom",value:function(t){var e=this.fabricCanvas.getPointer(t);t.deltaY<0?this.zoomOut(e.x,e.y):this.zoomIn(e.x,e.y)}},{key:"spaceDown",value:function(){console.log("\u7a7a\u683c\u952e\u6309\u4e0b"),this.isSpaceKeyDown=!0}},{key:"spaceUp",value:function(){console.log("\u7a7a\u683c\u952e\u5f39\u8d77\u6765"),this.isSpaceKeyDown=!1}},{key:"_zoomFactor",value:function(t,e){this.fabricCanvas.setZoom(t),this.fabricCanvas.setWidth(this.originWidth*this.zoomFactor),this.fabricCanvas.setHeight(this.originHeight*this.zoomFactor)}},{key:"getActiveObjects",value:function(){return this.fabricCanvas.getActiveObjects()}},{key:"setActiveObjectsPostColor",value:function(t){this.getActiveObjects().forEach((function(e){var o=e.get("type");"group"===o?e.data.setFill(t):console.log("\u6ca1\u6709\u5904\u7406"+o)})),this.fabricCanvas.requestRenderAll()}}]),t}(),p=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"toolbox-attr",style:this.props.style,onClick:function(){return t.props.onClick&&t.props.onClick(t.props.index,t.props.attrColor)}},this.props.currentPostColor===this.props.attrColor?n.a.createElement("input",{className:"toolbox-checkbox",type:"checkbox",checked:!0}):null)}}]),e}(n.a.Component),g=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"toolbox-container",style:this.props.style},n.a.createElement(p,Object.assign({},this.props,{style:{backgroundColor:"#FFF09A"},index:0,attrColor:"#FFF09A"})),n.a.createElement(p,Object.assign({},this.props,{style:{backgroundColor:"#FF968D"},index:1,attrColor:"#FF968D"})),n.a.createElement(p,Object.assign({},this.props,{style:{backgroundColor:"#C4F9F4"},index:2,attrColor:"#C4F9F4"})),n.a.createElement(p,Object.assign({},this.props,{style:{backgroundColor:"#B191E6"},index:3,attrColor:"#B191E6"})))}}]),e}(n.a.Component),m=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(h.a)(this,Object(l.a)(e).call(this,t))).selectedIndex=0,o.hideToolbox(),o}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.bc=new f({canvasId:"canvas",showToolbox:this.showToolbox.bind(this),hideToolbox:this.hideToolbox.bind(this)}),document.addEventListener("keydown",(function(t){32===t.which&&(t.preventDefault(),t.stopPropagation())})),window.addEventListener("mousewheel",(function(e){!0===e.ctrlKey&&(e.preventDefault(),e.stopPropagation(),t.bc.zoom(e))}),{passive:!1}),window.addEventListener("contextmenu",(function(e){e.preventDefault(),e.stopPropagation();var o=t.bc.getActiveObjects();o.length>0?o.forEach((function(o){"textbox"!==o.get("type")&&t.showToolbox(e.x,e.y)})):t.hideToolbox()})),this.setState({canvas:this.bc})}},{key:"showToolbox",value:function(t,e){this.setState({toolbox_x:t,toolbox_y:e,toolbox_show:!0})}},{key:"hideToolbox",value:function(){this.setState({toolbox_show:!1})}},{key:"render",value:function(){var t=this,e=this.state||{},o=e.toolbox_x,i=e.toolbox_y;e.toolbox_show;return n.a.createElement("div",{className:"container"},n.a.createElement("canvas",{className:"canvas",id:"canvas"}),n.a.createElement(g,{className:"toolbox",id:"toolbox",style:{left:o,top:i},currentPostColor:this.bc?this.bc.currentPostColor:"",onClick:function(e,o){t.bc.currentPostColor=o,t.bc.setActiveObjectsPostColor(o),t.setState({canvas:t.bc})}}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.413de93e.chunk.js.map