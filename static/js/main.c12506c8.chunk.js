(this.webpackJsonpbigcanvas=this.webpackJsonpbigcanvas||[]).push([[0],[,,,,,,,,,,function(t,e,i){t.exports=i(25)},,,,,function(t,e,i){},function(t,e,i){},,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n),c=i(6),s=i.n(c),a=(i(15),i(2)),r=i(3),h=i(8),u=i(7),d=i(9),v=(i(16),i(0)),l=i(4),f=function(){function t(e){var i=this;Object(a.a)(this,t),this.width=100,this.height=100,this.lines=2,this.isActived=!1,this.strokeWidth=5,this.fontSize=10,this.init(e);var n=0;this.group.on("mouseup",(function(){var t=new Date;n=t.getTime()})),this.group.on("mousedown",(function(){(new Date).getTime()-n<300?i.active():i.rect.set("strokeWidth",i.strokeWidth)})),this.group.on("mouseup",(function(){i.rect.set("strokeWidth",0)})),this.textbox.on("changed",(function(t){})),this.textbox.on("editing:entered",(function(t){})),this.textbox.on("editing:exited",(function(t){i.unactive()}))}return Object(r.a)(t,[{key:"init",value:function(t){this.canvas=t.canvas;var e={originX:"center",originY:"center",top:t.y,left:t.x,width:this.width,height:this.height},i={lockScalingY:!0,lockScalingX:!0,lockUniScaling:!0,lockRotation:!0};this.rect=new v.fabric.Rect(Object(l.a)({},e,{},i,{fill:"#FFF09A",hasControls:!1,stroke:"#00A2FF",strokeWidth:this.strokeWidth}));var n=v.fabric.util.createClass(v.fabric.Textbox,{});this.textbox=new n("",Object(l.a)({},e,{},i,{width:this.width,top:t.y,fontSize:this.fontSize,textAlign:"center",fill:"#000",hasBorders:!1,breakWords:!0})),this.group=new v.fabric.Group([],Object(l.a)({},i)),this.group.data=this,this.active()}},{key:"active",value:function(){this.isActived||(this.group.removeWithUpdate(this.rect),this.group.removeWithUpdate(this.textbox),this.canvas.remove(this.group),this.canvas.add(this.rect),this.canvas.add(this.textbox),this.canvas.setActiveObject(this.textbox),this.rect.set("strokeWidth",this.strokeWidth),this.textbox.enterEditing(),this.isActived=!0,console.log("active"))}},{key:"unactive",value:function(){this.isActived&&(this.rect.set("strokeWidth",0),this.canvas.remove(this.rect),this.canvas.remove(this.textbox),this.group.addWithUpdate(this.rect),this.group.addWithUpdate(this.textbox),this.canvas.add(this.group),this.isActived=!1,console.log("unactive"))}},{key:"isActived",value:function(){return this.isActived}}]),t}(),g=function(t){function e(){return Object(a.a)(this,e),Object(h.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=document.getElementById("c"),e=new v.fabric.Canvas(t,{width:1024,height:1024,backgroundColor:"#C6CDD5"});v.fabric.util.addListener(document.body,"keydown",(function(t){if(!t.repeat){var i=t.which||t.keyCode,n=e.getActiveObject();if(n){var o=n.get("type");if(console.log(o),"textbox"===o);else if("group"===o){if(8===i)e.remove(n);else n.data.active()}else"activeSelection"===o&&8===i&&e.getActiveObjects().forEach((function(t){e.remove(t)}))}}})),e.on("mouse:dblclick",(function(t){t.target||new f({x:t.pointer.x,y:t.pointer.y,canvas:e})})),e.on({"object:moving":function(t){t.target.opacity=.5,console.log("moving")},"object:modified":function(t){t.target.opacity=1,console.log("modified")}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bcContainer"},o.a.createElement("canvas",{className:"c",id:"c"}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c12506c8.chunk.js.map