(this.webpackJsonpbigcanvas=this.webpackJsonpbigcanvas||[]).push([[0],[,,,,,,,,,,function(t,i,e){t.exports=e(25)},,,,,function(t,i,e){},function(t,i,e){},,,,,,function(t,i){},function(t,i){},function(t,i){},function(t,i,e){"use strict";e.r(i);var o=e(1),n=e.n(o),a=e(6),s=e.n(a),c=(e(15),e(2)),r=e(3),h=e(8),u=e(7),v=e(9),d=(e(16),e(0)),f=e(4),l=function(){function t(i){var e=this;Object(c.a)(this,t),this.width=100,this.height=100,this.lines=2,this.isActived=!1,this.strokeWidth=5,this.fontSize=10,this.init(i);var o=0;this.group.on("mouseup",(function(){var t=new Date;o=t.getTime()})),this.group.on("mousedown",(function(){(new Date).getTime()-o<300?e.active():e.rect.set("strokeWidth",e.strokeWidth)})),this.group.on("mouseup",(function(){e.rect.set("strokeWidth",0)})),this.textbox.on("changed",(function(t){})),this.textbox.on("editing:entered",(function(t){})),this.textbox.on("editing:exited",(function(t){e.unactive()}))}return Object(r.a)(t,[{key:"init",value:function(t){this.canvas=t.canvas;var i={originX:"center",originY:"center",top:t.y,left:t.x,width:this.width,height:this.height},e={lockScalingY:!0,lockScalingX:!0,lockUniScaling:!0,lockRotation:!0};this.rect=new d.fabric.Rect(Object(f.a)({},i,{},e,{fill:"#FFF09A",hasControls:!1,stroke:"#00A2FF",strokeWidth:this.strokeWidth}));var o=d.fabric.util.createClass(d.fabric.Textbox,{});this.textbox=new o("",Object(f.a)({},i,{},e,{width:this.width,top:t.y,fontSize:this.fontSize,textAlign:"center",fill:"#000",hasBorders:!1,breakWords:!0})),this.group=new d.fabric.Group([],Object(f.a)({},e)),this.group.data=this,this.active()}},{key:"active",value:function(){this.isActived||(this.group.removeWithUpdate(this.rect),this.group.removeWithUpdate(this.textbox),this.canvas.remove(this.group),this.canvas.add(this.rect),this.canvas.add(this.textbox),this.canvas.setActiveObject(this.textbox),this.rect.set("strokeWidth",this.strokeWidth),this.textbox.enterEditing(),this.isActived=!0,console.log("active"))}},{key:"unactive",value:function(){this.isActived&&(this.rect.set("strokeWidth",0),this.canvas.remove(this.rect),this.canvas.remove(this.textbox),this.group.addWithUpdate(this.rect),this.group.addWithUpdate(this.textbox),this.canvas.add(this.group),this.isActived=!1,console.log("unactive"))}},{key:"isActived",value:function(){return this.isActived}}]),t}(),g=function(){function t(i){var e=this;Object(c.a)(this,t),this.originWidth=1920,this.originHeight=1080,this.minWidth=300,this.maxWidth=3e3,this.backgroundColor="#C6CDD5",this.zoomFactor=1,this.containerName=i,this.isSpaceKeyDown=!1,this.isMouseDown=!1,this.fabricCanvas=new d.fabric.Canvas(i,{width:this.originWidth,height:this.originHeight,backgroundColor:this.backgroundColor}),d.fabric.util.addListener(document.body,"keydown",(function(t){if(!t.repeat){var i=t.which||t.keyCode;if(32===i)return e.setHandCursor(),t.preventDefault(),void t.stopPropagation();!0===t.metaKey&&(t.preventDefault(),t.stopPropagation(),187===t.which?e.zoomOut():189===i&&e.zoomIn());var o=e.fabricCanvas.getActiveObject();if(o){var n=o.get("type");if("textbox"===n);else if("group"===n){if(8===i)e.fabricCanvas.remove(o);else o.data.active()}else"activeSelection"===n&&8===i&&e.fabricCanvas.getActiveObjects().forEach((function(t){e.fabricCanvas.remove(t)}))}}})),this.fabricCanvas.on("mouse:dblclick",(function(t){if(!t.target){var i=e.fabricCanvas.getPointer(t.e);new l({x:i.x,y:i.y,canvas:e.fabricCanvas})}})),this.fabricCanvas.on("mouse:down",(function(t){e.isMouseDown=!0,console.log("down")})),this.fabricCanvas.on("mouse:move",(function(t){console.log("move x=".concat(t.x,",y=").concat(t.y,",v= ").concat(JSON.stringify(t))),e.isMouseDown&&e.isSpaceKeyDown&&e.fabricCanvas.relativePan(t.absolutePointer)})),this.fabricCanvas.on("mouse:up",(function(t){e.isMouseDown=!1,console.log("up")})),this.fabricCanvas.on({"object:moving":function(t){t.target.opacity=.5,console.log("moving")},"object:modified":function(t){t.target.opacity=1,console.log("modified")}})}return Object(r.a)(t,[{key:"zoomOut",value:function(t,i){this.fabricCanvas.getWidth()>this.maxWidth||(this.zoomFactor+=.1,this._zoomFactor(this.zoomFactor,{x:document.body.clientWidth/2,y:document.body.clientHeight/2}))}},{key:"zoomIn",value:function(t,i){this.fabricCanvas.getWidth()<this.minWidth||(this.zoomFactor-=.1,this._zoomFactor(this.zoomFactor,{x:document.body.clientWidth/2,y:document.body.clientHeight/2}))}},{key:"zoom",value:function(t){var i=this.fabricCanvas.getPointer(t);t.deltaY<0?this.zoomOut(i.x,i.y):this.zoomIn(i.x,i.y)}},{key:"setHandCursor",value:function(){console.log("setHandCursor"),this.isSpaceKeyDown=!0,this.fabricCanvas.hoverCursor="grabbing"}},{key:"_zoomFactor",value:function(t,i){this.fabricCanvas.setZoom(t),this.fabricCanvas.setWidth(this.originWidth*this.zoomFactor),this.fabricCanvas.setHeight(this.originHeight*this.zoomFactor)}}]),t}(),b=function(t){function i(){return Object(c.a)(this,i),Object(h.a)(this,Object(u.a)(i).apply(this,arguments))}return Object(v.a)(i,t),Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=new g("mycanvas");document.addEventListener("keydown",(function(t){32===t.which&&(t.preventDefault(),t.stopPropagation())})),window.addEventListener("mousewheel",(function(i){!0===i.ctrlKey&&(i.preventDefault(),i.stopPropagation(),t.zoom(i))}),{passive:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("canvas",{className:"mycanvas",id:"mycanvas"}))}}]),i}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b57df39e.chunk.js.map