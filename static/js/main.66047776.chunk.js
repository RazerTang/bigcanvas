(this.webpackJsonpbigcanvas=this.webpackJsonpbigcanvas||[]).push([[0],[,,,,,,,,,,function(t,e,i){t.exports=i(25)},,,,,function(t,e,i){},function(t,e,i){},,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),o=i(6),c=i.n(o),s=(i(15),i(2)),r=i(3),h=i(8),u=i(7),d=i(9),v=(i(16),i(0)),b=i(4),l=function(){function t(e){var i=this;Object(s.a)(this,t),this.width=100,this.height=100,this.lines=2,this.isActived=!1,this.init(e),this.textbox.on("mousedown",(function(t){i.active()})),this.textbox.on("editing:exited",(function(t){i.unactive()}))}return Object(r.a)(t,[{key:"init",value:function(t){this.canvas=t.canvas;var e={originX:"center",originY:"center",top:t.y,left:t.x,width:this.width,height:this.height};this.rect=new v.fabric.Rect(Object(b.a)({},e,{fill:"#FFF09A",hasControls:!1,strokeWidth:5}));var i=v.fabric.util.createClass(v.fabric.Textbox,{});this.textbox=new i("",Object(b.a)({},e,{width:this.width,top:t.y,fontSize:30,fill:"#000",hasBorders:!1,breakWords:!0})),this.group=new v.fabric.Group,this.group.data=this,this.active()}},{key:"active",value:function(){this.group.removeWithUpdate(this.rect),this.group.removeWithUpdate(this.textbox),this.canvas.remove(this.group),this.canvas.add(this.rect),this.canvas.add(this.textbox),this.canvas.setActiveObject(this.textbox),this.rect.backgroundColor="#00A2FF",this.textbox.enterEditing(),this.isActived=!0}},{key:"unactive",value:function(){this.canvas.remove(this.rect),this.canvas.remove(this.textbox),this.group.addWithUpdate(this.rect),this.group.addWithUpdate(this.textbox),this.canvas.add(this.group),this.rect.backgroundColor="#00A2FF00",this.isActived=!1}},{key:"isActived",value:function(){return this.isActived}}]),t}(),f=function(t){function e(){return Object(s.a)(this,e),Object(h.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=document.getElementById("c"),e=new v.fabric.Canvas(t,{width:1024,height:1024,backgroundColor:"#C6CDD5"});v.fabric.util.addListener(document.body,"keydown",(function(t){if(!t.repeat){var i=t.which||t.keyCode,n=e.getActiveObject();if(n)if("textbox"===n.get("type"));else if("group"===n.get("type")){if(8===i)e.remove(e.getActiveObject());else e.getActiveObject().data.active()}}})),e.on("mouse:dblclick",(function(t){if(!t.target)new l({x:t.pointer.x,y:t.pointer.y,canvas:e})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"bcContainer"},a.a.createElement("canvas",{className:"c",id:"c"}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.66047776.chunk.js.map