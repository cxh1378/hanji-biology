import{_ as x,u as $,a as N,r as k,o as A,b as C,c as R,d as I,e as s,f as r,g as o,n as _,h as v,w as d,i as p,F as V,j as w,k as h,t as y,l as B}from"./index-b091758d.js";import"./index-366132a9.js";const S=""+new URL("majorbio_log-4ea8fc51.png",import.meta.url).href;const j={class:"container"},L={class:"kf-top-header-wrap"},U={class:"kf-top-header"},z={class:"nav-list-l"},E=["onMouseenter","onMouseleave","onClick"],F={__name:"index",setup(g){const f=$();N();const c=k([{title:"云流程",link:"#",items:["微生物","DNA1","RNA组学服务","蛋白组"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:1,path:"/cloudProcess"},{title:"云工具",link:"#",items:["全部","我的收藏","表格处理","数据处理","多元统计"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:2,path:"/cloudTools"},{title:"云文库",link:"#",items:["全部","微生态专题","RNA专题","蛋白组专题","代谢组专题"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:3,path:"/cloudLibrary"},{title:"产品商城",link:"#",items:["微生物","DNA","RNA","单细胞","蛋白与代谢","常规测序"],opacityValue:0,isDropdownVisible:!1,intervalId:null,id:5,path:"/productViews"}]),l=k(-1),D=t=>{const e=c.value[t];e.isDropdownVisible=!0,e.opacityValue=0,clearInterval(e.intervalId),e.intervalId=setInterval(()=>{e.opacityValue<1?e.opacityValue=Math.min(e.opacityValue+.1,1):clearInterval(e.intervalId)},10)},M=t=>{const e=c.value[t];clearInterval(e.intervalId),e.opacityValue=0,e.isDropdownVisible=!1},m=t=>{localStorage.setItem("activeMenusIndex",t),l.value=t};return A(()=>{const t=localStorage.getItem("activeMenusIndex");f.path==="/"||f.path==="/home"?(localStorage.removeItem("activeMenusIndex"),l.value=-1):t!==null&&(l.value=parseInt(t,10))}),C(()=>{c.value.forEach(t=>clearInterval(t.intervalId))}),R((t,e,n)=>{n()}),(t,e)=>{const n=I("router-link");return s(),r("div",j,[o("div",L,[o("div",U,[e[4]||(e[4]=o("a",{href:""},[o("img",{src:S,alt:""})],-1)),o("ul",z,[o("li",{class:_(["nav-item",{current:l.value===-1}]),onClick:e[0]||(e[0]=a=>m(-1))},[v(n,{to:"/"},{default:d(()=>e[2]||(e[2]=[p("首页")])),_:1})],2),(s(!0),r(V,null,w(c.value,(a,i)=>(s(),r("li",{class:_(["nav-item",{current:l.value===i}]),key:i,onMouseenter:u=>D(i),onMouseleave:u=>M(i),onClick:u=>m(i)},[a.title==="产品商城"?(s(),h(n,{key:0,to:"/productMall"},{default:d(()=>[p(y(a.title),1)]),_:2},1024)):(s(),h(n,{key:1,to:a.path},{default:d(()=>[p(y(a.title),1)]),_:2},1032,["to"])),o("div",{class:"kf-t-h-dropdown-wrap",style:B({display:a.isDropdownVisible?"block":"none",opacity:a.opacityValue})},[o("ul",{class:_(["kf-t-h-dropdown",i===1?"special-class":""])},[(s(!0),r(V,null,w(a.items,(u,b)=>(s(),r("li",{key:b},[v(n,{to:`${a.path}#${u}`},{default:d(()=>[p(y(u),1)]),_:2},1032,["to"])]))),128))],2)],4)],42,E))),128)),o("li",{class:_(["nav-item",{current:l.value===-2}]),onClick:e[1]||(e[1]=a=>m(-2))},[v(n,{to:"/projectArticle"},{default:d(()=>e[3]||(e[3]=[p("项目文章")])),_:1})],2)]),e[5]||(e[5]=o("ul",{class:"nav-list-r"},[o("li",{class:"nav-item"},[o("a",{href:"#"},"项目中心")])],-1))])])])}}},T=x(F,[["__scopeId","data-v-22896176"]]),H={class:"container"},G={__name:"index",setup(g){return(f,c)=>{const l=I("router-view");return s(),r("div",H,[v(T),v(l)])}}};export{G as default};