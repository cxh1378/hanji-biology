System.register(["./index-legacy-97acf901.js","./index-legacy-ac40ca07.js"],(function(e,t){"use strict";var a,n,o,r,i,l,d,p,c,s,f,u,h,v,k,w,x,m,g,b,y=document.createElement("style");return y.textContent='@charset "UTF-8";.kf-top-header-wrap[data-v-22896176]{height:72px}.kf-top-header-wrap .kf-top-header[data-v-22896176]{width:100%;height:72px;background-color:#fff;position:fixed;z-index:2100;padding:0 30px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;min-width:1200px;box-shadow:0 1px 6px 1px rgba(0,0,0,.06)}.kf-top-header-wrap .kf-top-header[data-v-22896176] *{box-sizing:content-box}.kf-top-header-wrap .kf-top-header .nav-list-l[data-v-22896176]{flex:1;display:flex;align-self:flex-end;height:65%;list-style:none}.kf-top-header-wrap .kf-top-header .nav-item[data-v-22896176]{color:#707070;margin-left:50px}.kf-top-header-wrap .kf-top-header .nav-item.current>a[data-v-22896176]{color:#3385ff}.kf-top-header-wrap .kf-top-header .nav-item>a[data-v-22896176]{text-decoration:none;position:relative;display:inline-block;height:100%;color:#707070}.kf-top-header-wrap .kf-top-header .nav-item>a[data-v-22896176]:hover{color:#3385ff}.kf-top-header-wrap .kf-top-header .nav-item:hover>a[data-v-22896176]:after{content:"";position:absolute;width:100%;height:7px;background-color:#3385ff;border-radius:10px;left:0;bottom:-4px;z-index:2}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap[data-v-22896176]{transition:opacity .5s ease-in-out;background:rgba(255,255,255,.8);box-shadow:0 3px 6px 1px rgba(0,0,0,.16);position:absolute;width:100%;left:0;padding:30px 0;font-size:14px;backdrop-filter:blur(5px);display:none}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap .kf-t-h-dropdown[data-v-22896176]{position:relative;margin-left:218px;list-style:none}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap .kf-t-h-dropdown>li[data-v-22896176]{line-height:34px;padding-left:16px}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap .kf-t-h-dropdown>li a[data-v-22896176]{position:relative;color:#272727;text-decoration:none}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap .kf-t-h-dropdown>li a[data-v-22896176]:hover{color:#3385ff}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap .kf-t-h-dropdown>li a[data-v-22896176]:before{content:"";position:absolute;left:-18px;top:50%;margin-top:-2px;display:inline-block;width:4px;height:4px;border-radius:4px;background-color:#3385ff}.kf-top-header-wrap .kf-top-header .nav-item .kf-t-h-dropdown-wrap .special-class[data-v-22896176]{display:grid;grid-template-columns:repeat(4,200px)}.kf-top-header-wrap .kf-top-header .nav-list-r[data-v-22896176]{display:flex;list-style:none}@media screen and (max-width: 1400px){.kf-top-header .nav-item[data-v-22896176]{margin-left:30px!important}}@media screen and (max-width: 1400px){.kf-top-header .nav-item>a[data-v-22896176]{font-size:16px!important}}\n',document.head.appendChild(y),{setters:[function(e){a=e._,n=e.u,o=e.a,r=e.r,i=e.o,l=e.b,d=e.c,p=e.d,c=e.e,s=e.f,f=e.g,u=e.n,h=e.h,v=e.w,k=e.i,w=e.F,x=e.j,m=e.k,g=e.t,b=e.l},null],execute:function(){var y=""+new URL("majorbio_log-4ea8fc51.png",t.meta.url).href,I={class:"container"},V={class:"kf-top-header-wrap"},_={class:"kf-top-header"},D={class:"nav-list-l"},M=["onMouseenter","onMouseleave","onClick"],j=a({__name:"index",setup:function(e){var t=n();o();var a=r([{title:"云流程",link:"#",items:["微生物","DNA1","RNA组学服务","蛋白组"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:1,path:"/cloudProcess"},{title:"云工具",link:"#",items:["全部","我的收藏","表格处理","数据处理","多元统计"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:2,path:"/cloudTools"},{title:"云文库",link:"#",items:["全部","微生态专题","RNA专题","蛋白组专题","代谢组专题"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:3,path:"/cloudLibrary"},{title:"产品商城",link:"#",items:["微生物","DNA","RNA","单细胞","蛋白与代谢","常规测序"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:5,path:"/productViews"}]),j=r(-1),z=function(e){localStorage.setItem("activeMenusIndex",e),j.value=e};return i((function(){var e=localStorage.getItem("activeMenusIndex");"/"===t.path||"/home"===t.path?(localStorage.removeItem("activeMenusIndex"),j.value=-1):null!==e&&(j.value=parseInt(e,10))})),l((function(){a.value.forEach((function(e){return clearInterval(e.intervalId)}))})),d((function(e,t,a){a()})),function(e,t){var n=p("router-link");return c(),s("div",I,[f("div",V,[f("div",_,[t[4]||(t[4]=f("a",{href:""},[f("img",{src:y,alt:""})],-1)),f("ul",D,[f("li",{class:u(["nav-item",{current:-1===j.value}]),onClick:t[0]||(t[0]=function(e){return z(-1)})},[h(n,{to:"/"},{default:v((function(){return t[2]||(t[2]=[k("首页")])})),_:1})],2),(c(!0),s(w,null,x(a.value,(function(e,t){return c(),s("li",{class:u(["nav-item",{current:j.value===t}]),key:t,onMouseenter:function(e){return function(e){var t=a.value[e];t.isDropdownVisible=!0,t.opacityValue=0,clearInterval(t.intervalId),t.intervalId=setInterval((function(){t.opacityValue<1?t.opacityValue=Math.min(t.opacityValue+.1,1):clearInterval(t.intervalId)}),10)}(t)},onMouseleave:function(e){return function(e){var t=a.value[e];clearInterval(t.intervalId),t.opacityValue=0,t.isDropdownVisible=!1}(t)},onClick:function(e){return z(t)}},["产品商城"===e.title?(c(),m(n,{key:0,to:"/productMall"},{default:v((function(){return[k(g(e.title),1)]})),_:2},1024)):(c(),m(n,{key:1,to:e.path},{default:v((function(){return[k(g(e.title),1)]})),_:2},1032,["to"])),f("div",{class:"kf-t-h-dropdown-wrap",style:b({display:e.isDropdownVisible?"block":"none",opacity:e.opacityValue})},[f("ul",{class:u(["kf-t-h-dropdown",1===t?"special-class":""])},[(c(!0),s(w,null,x(e.items,(function(t,a){return c(),s("li",{key:a},[h(n,{to:"".concat(e.path,"#").concat(t)},{default:v((function(){return[k(g(t),1)]})),_:2},1032,["to"])])})),128))],2)],4)],42,M)})),128)),f("li",{class:u(["nav-item",{current:-2===j.value}]),onClick:t[1]||(t[1]=function(e){return z(-2)})},[h(n,{to:"/projectArticle"},{default:v((function(){return t[3]||(t[3]=[k("项目文章")])})),_:1})],2)]),t[5]||(t[5]=f("ul",{class:"nav-list-r"},[f("li",{class:"nav-item"},[f("a",{href:"#"},"项目中心")])],-1))])])])}}},[["__scopeId","data-v-22896176"]]),z={class:"container"};e("default",{__name:"index",setup:function(e){return function(e,t){var a=p("router-view");return c(),s("div",z,[h(j),h(a)])}}})}}}));