(this.webpackJsonpbigcanvas=this.webpackJsonpbigcanvas||[]).push([[0],[,,,,,,,,,,function(t,e,i){t.exports=i(25)},,,,,function(t,e,i){},function(t,e,i){},,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n),s=i(6),a=i.n(s),c=(i(15),i(2)),r=i(3),h=i(8),d=i(7),u=i(9),v=(i(16),i(0)),f=i(4),l=function(){function t(e){var i=this;Object(c.a)(this,t),this.width=100,this.height=100,this.lines=2,this.isActived=!1,this.strokeWidth=5,this.init(e),this.textbox.on("mousedown",(function(t){i.active()})),this.textbox.on("editing:exited",(function(t){i.unactive()}))}return Object(r.a)(t,[{key:"init",value:function(t){this.canvas=t.canvas;var e={originX:"center",originY:"center",top:t.y,left:t.x,width:this.width,height:this.height};this.rect=new v.fabric.Rect(Object(f.a)({},e,{fill:"#FFF09A",hasControls:!1,stroke:"#00A2FF",strokeWidth:this.strokeWidth}));var i=v.fabric.util.createClass(v.fabric.Textbox,{});this.textbox=new i("",Object(f.a)({},e,{width:this.width,top:t.y,fontSize:30,fill:"#000",hasBorders:!1,breakWords:!0})),this.group=new v.fabric.Group,this.group.data=this,this.active()}},{key:"active",value:function(){this.group.removeWithUpdate(this.rect),this.group.removeWithUpdate(this.textbox),this.canvas.remove(this.group),this.canvas.add(this.rect),this.canvas.add(this.textbox),this.canvas.setActiveObject(this.textbox),this.rect.set("strokeWidth",this.strokeWidth),this.textbox.enterEditing(),this.isActived=!0}},{key:"unactive",value:function(){this.rect.set("strokeWidth",0),this.canvas.remove(this.rect),this.canvas.remove(this.textbox),this.group.addWithUpdate(this.rect),this.group.addWithUpdate(this.textbox),this.canvas.add(this.group),this.isActived=!1}},{key:"isActived",value:function(){return this.isActived}}]),t}(),b=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=document.getElementById("c"),e=new v.fabric.Canvas(t,{width:1024,height:1024,backgroundColor:"#C6CDD5"});v.fabric.util.addListener(document.body,"keydown",(function(t){if(!t.repeat){var i=t.which||t.keyCode,n=e.getActiveObject();if(n){var o=n.get("type");if("textbox"===o);else if("group"===o){if(8===i)e.remove(n);else n.data.active()}else"activeSelection"===o&&e.getActiveObjects().forEach((function(t){e.remove(t)}))}}})),e.on("mouse:dblclick",(function(t){t.target||new l({x:t.pointer.x,y:t.pointer.y,canvas:e})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"bcContainer"},o.a.createElement("canvas",{className:"c",id:"c"}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.94d3e943.chunk.js.map