(this.webpackJsonpbigcanvas=this.webpackJsonpbigcanvas||[]).push([[0],[,,,,,,,,,,function(t,i,e){t.exports=e(25)},,,,,function(t,i,e){},function(t,i,e){},,,,,,function(t,i){},function(t,i){},function(t,i){},function(t,i,e){"use strict";e.r(i);var o=e(1),n=e.n(o),a=e(6),s=e.n(a),c=(e(15),e(2)),h=e(3),r=e(8),v=e(7),u=e(9),d=(e(16),e(0)),f=e(4),g=function(){function t(i){var e=this;Object(c.a)(this,t),this.width=100,this.height=100,this.lines=2,this.isActived=!1,this.strokeWidth=5,this.fontSize=10,this.init(i);var o=0;this.group.on("mouseup",(function(){var t=new Date;o=t.getTime()})),this.group.on("mousedown",(function(){(new Date).getTime()-o<300?e.active():e.rect.set("strokeWidth",e.strokeWidth)})),this.group.on("mouseup",(function(){e.rect.set("strokeWidth",0)})),this.textbox.on("changed",(function(t){})),this.textbox.on("editing:entered",(function(t){})),this.textbox.on("editing:exited",(function(t){e.unactive()}))}return Object(h.a)(t,[{key:"init",value:function(t){this.canvas=t.canvas;var i={originX:"center",originY:"center",top:t.y,left:t.x,width:this.width,height:this.height},e={lockScalingY:!0,lockScalingX:!0,lockUniScaling:!0,lockRotation:!0};this.rect=new d.fabric.Rect(Object(f.a)({},i,{},e,{fill:"#FFF09A",hasControls:!1,stroke:"#00A2FF",strokeWidth:this.strokeWidth}));var o=d.fabric.util.createClass(d.fabric.Textbox,{});this.textbox=new o("",Object(f.a)({},i,{},e,{width:this.width,top:t.y,fontSize:this.fontSize,textAlign:"center",fill:"#000",hasBorders:!1,breakWords:!0})),this.group=new d.fabric.Group([],Object(f.a)({},e)),this.group.data=this,this.active()}},{key:"active",value:function(){this.isActived||(this.group.removeWithUpdate(this.rect),this.group.removeWithUpdate(this.textbox),this.canvas.remove(this.group),this.canvas.add(this.rect),this.canvas.add(this.textbox),this.canvas.setActiveObject(this.textbox),this.rect.set("strokeWidth",this.strokeWidth),this.textbox.enterEditing(),this.isActived=!0,console.log("active"))}},{key:"unactive",value:function(){this.isActived&&(this.rect.set("strokeWidth",0),this.canvas.remove(this.rect),this.canvas.remove(this.textbox),this.group.addWithUpdate(this.rect),this.group.addWithUpdate(this.textbox),this.canvas.add(this.group),this.isActived=!1,console.log("unactive"))}},{key:"isActived",value:function(){return this.isActived}}]),t}(),b=function(){function t(i){var e=this;Object(c.a)(this,t),this.originWidth=1024,this.originHeight=1024,this.minWidth=300,this.maxWidth=3e3,this.backgroundColor="#C6CDD5",this.zoomFactor=1,this.containerName=i,this.fabricCanvas=new d.fabric.Canvas(i,{width:this.originWidth,height:this.originHeight,backgroundColor:this.backgroundColor}),d.fabric.util.addListener(document.body,"keydown",(function(t){if(!t.repeat){var i=t.which||t.keyCode,o=e.fabricCanvas.getActiveObject();if(o){var n=o.get("type");if("textbox"===n);else if("group"===n){if(8===i)e.fabricCanvas.remove(o);else o.data.active()}else"activeSelection"===n&&8===i&&e.fabricCanvas.getActiveObjects().forEach((function(t){e.fabricCanvas.remove(t)}))}}})),this.fabricCanvas.on("mouse:dblclick",(function(t){if(!t.target){var i=e.fabricCanvas.getPointer(t.e);new g({x:i.x,y:i.y,canvas:e.fabricCanvas})}})),this.fabricCanvas.on({"object:moving":function(t){t.target.opacity=.5,console.log("moving")},"object:modified":function(t){t.target.opacity=1,console.log("modified")}})}return Object(h.a)(t,[{key:"zoomOut",value:function(t,i){this.fabricCanvas.getWidth()>this.maxWidth||(this.zoomFactor+=.1,t&&i?this.fabricCanvas.zoomToPoint(new d.fabric.Point(t,i),this.zoomFactor):this.fabricCanvas.setZoom(this.zoomFactor),this.fabricCanvas.setWidth(this.originWidth*this.zoomFactor),this.fabricCanvas.setHeight(this.originHeight*this.zoomFactor))}},{key:"zoomIn",value:function(t,i){this.fabricCanvas.getWidth()<this.minWidth||(this.zoomFactor-=.1,t&&i?this.fabricCanvas.zoomToPoint(new d.fabric.Point(t,i),this.zoomFactor):this.fabricCanvas.setZoom(this.zoomFactor),this.fabricCanvas.setWidth(this.originWidth*this.zoomFactor),this.fabricCanvas.setHeight(this.originHeight*this.zoomFactor))}},{key:"zoom",value:function(t){t.deltaY<0?this.zoomOut(t.x,t.y):this.zoomIn(t.x,t.y)}}]),t}(),m=function(t){function i(){return Object(c.a)(this,i),Object(r.a)(this,Object(v.a)(i).apply(this,arguments))}return Object(u.a)(i,t),Object(h.a)(i,[{key:"componentDidMount",value:function(){var t=new b("mycanvas");document.addEventListener("keydown",(function(i){!0===i.metaKey&&(i.preventDefault(),187===i.which?t.zoomOut():189===i.which&&t.zoomIn())})),window.addEventListener("mousewheel",(function(i){!0===i.ctrlKey&&(i.preventDefault(),i.stopPropagation(),t.zoom(i))}),{passive:!1})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("canvas",{className:"mycanvas",id:"mycanvas"}))}}]),i}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.dcd3d2f9.chunk.js.map