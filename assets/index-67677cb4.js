import{_ as Q,u as X,r as a,o as Y,y as Z,d as n,e as u,f as p,g as e,i as k,F as h,j as w,n as b,h as d,w as v,q as ee,v as se,p as $,E as m,t as _,k as te,A as le}from"./index-1cb9ec0c.js";import{F as oe}from"./index-33ccd186.js";const ae=""+new URL("empty_6-6f7ea268.png",import.meta.url).href;const ne={class:"cloudTools"},de={class:"wrap mt0a"},ce={class:"tools-wrap"},re={class:"tools-side-wrap"},ue={class:"left_sidebar"},ie={class:"tag_1"},pe=["onClick"],ve={class:"tools-content"},_e={class:"filter-box layui-form"},ye={class:"col-l"},fe={class:"instrument-equity"},ge=["onClick"],ke={class:"order-by"},he={class:"col-r"},we={style:{width:"235px"}},be={id:"tag_2",style:{width:"235px",margin:"0 5px"}},me={class:"empty"},xe={class:"tools-all layui-row layui-col-space20",id:"tools-search-0"},Be=["onClick"],Ce={class:"col-r"},Te={class:"title"},Ve={class:"label"},Ie={class:"tag"},Se={class:"number"},Le={class:"desc t-tips"},Fe={style:{width:"100%",display:"flex","justify-content":"center"}},$e={class:"contact-bottom-layer"},qe={__name:"index",setup(Ae){const j=X();a([]);const M=[{value:"通用",label:"通用"},{value:"微生态(菌群)",label:"微生态(菌群)"},{value:"微生物(单菌)",label:"微生物(单菌)"},{value:"转录与调控",label:"转录与调控"},{value:"蛋白与代谢",label:"蛋白与代谢"}],N=a(["全部","会员专享","VIP专享","活动专享","付费专享","流程拓展"]),q=a([{type:"全部"},{type:"我的收藏"},{type:"表格处理"},{type:"数据处理"},{type:"多元统计"}]),D=a([{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"全部",type2:"会员专享",orderBy:"最新"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"全部",type2:"活动专享",orderBy:"最热"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"全部",type2:"VIP专享",orderBy:"最新"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"全部",type2:"活动专享",orderBy:"最热"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"多元统计",type2:"付费专享"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"多元统计",type2:"付费专享"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"多元统计",type2:"付费专享",orderBy:"最新"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"多元统计",type2:"付费专享"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"我的收藏",type2:"付费专享",orderBy:"最热"},{title:"聚类热图",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"我的收藏",type2:"流程拓展",orderBy:"最新"},{title:"聚类热图33",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"我的收藏",type2:"流程拓展",orderBy:"最热",selectType:"通用"},{title:"聚类热图21212",tag:"1212",look:"687",desc:"sdadsadsadsd3weewrsearsfsdfvcs",type:"我的收藏",type2:"流程拓展",orderBy:"最新",selectType:"通用"}]),c=a([]),x=a(0),A=a(0),B=a(0),C=a("最新"),y=a("全部"),g=a("全部"),i=a(null),K=(o,s)=>{const t=m.service({lock:!0,background:"transparent"});setTimeout(()=>{t.close()},1e3),y.value=o.type,x.value=s,f(i.value,c.value)},P=(o,s)=>{const t=m.service({lock:!0,background:"transparent"});setTimeout(()=>{t.close()},1e3),g.value=o,A.value=s,f(i.value,c.value)},E=(o,s)=>{const t=m.service({lock:!0,background:"transparent"});setTimeout(()=>{t.close()},1e3),C.value=o,B.value=s,f(i.value,c.value)},R=o=>{le.alert(o,"联系方式",{confirmButtonText:"确定",callback:s=>null})},T=a([]),z=()=>{const o=m.service({lock:!0,background:"transparent"});setTimeout(()=>{o.close()},1e3),f(i.value,c.value)},f=(o=null,s=null)=>{T.value=D.value.filter(t=>{const V=y.value&&y.value!=="全部"?t.type&&t.type.includes(y.value):!0,I=g.value&&g.value!=="全部"?t.type2&&t.type2.includes(g.value):!0,S=C.value?(t==null?void 0:t.orderBy)===C.value:(t==null?void 0:t.orderBy)==="最热",L=o?(t==null?void 0:t.title)&&(t==null?void 0:t.title.includes(o)):!0,F=s&&s.length>0?s.includes(t==null?void 0:t.selectType):!0;return V&&I&&S&&L&&F})};return Y(()=>{f(i.value,c.value)}),Z(()=>j.hash,o=>{const s=o.startsWith("#")?o.slice(1):o;o&&(y.value=s,x.value=q.value.findIndex(t=>t.type===s))},{immediate:!0}),(o,s)=>{const t=n("el-input"),V=n("el-checkbox"),I=n("el-option"),S=n("el-checkbox-group"),L=n("el-select"),F=n("el-button"),G=n("View"),H=n("el-icon"),O=n("el-col"),W=n("el-row"),J=n("el-pagination");return u(),p("div",ne,[s[15]||(s[15]=e("div",{class:"banner"},[e("div",{class:"wrap txt"},[e("h5",null,"美吉云流程"),e("p",null,"组学无忧一站式解决方案提供商"),e("a",{href:"javascript:;",class:"openKfChartBtn"},"售前咨询")])],-1)),e("div",de,[s[12]||(s[12]=e("div",{class:"tools-top-title"},[k("了解云工具"),e("span",null,"上百款分析工具，多维度拓展分析视野和分析深度，自主分析更简单容易")],-1)),e("div",ce,[e("div",re,[e("div",ue,[e("ul",ie,[(u(!0),p(h,null,w(q.value,(l,r)=>(u(),p("li",{key:r,class:b({current:x.value===r}),onClick:U=>K(l,r)},[e("a",{onClick:s[0]||(s[0]=$(()=>{},["prevent"]))},_(l.type),1)],10,pe))),128))])])]),e("div",ve,[e("div",_e,[e("div",ye,[e("ul",fe,[(u(!0),p(h,null,w(N.value,(l,r)=>(u(),p("li",{key:r,class:b({active:A.value===r}),onClick:U=>P(l,r)},_(l),11,ge))),128))]),e("div",ke,[e("button",{class:b(["btn-tools-new","order-by-1",{active:B.value===0}]),onClick:s[1]||(s[1]=l=>E("最新",0))},"最新",2),e("button",{class:b(["btn-tools-hot","order-by-1",{active:B.value===1}]),onClick:s[2]||(s[2]=l=>E("最热",1))},"最热",2)])]),e("div",he,[e("div",we,[d(t,{modelValue:i.value,"onUpdate:modelValue":s[3]||(s[3]=l=>i.value=l),placeholder:"搜索应用名称",clearable:""},null,8,["modelValue"])]),e("div",be,[d(L,{modelValue:c.value,"onUpdate:modelValue":s[5]||(s[5]=l=>c.value=l),multiple:"","collapse-tags":"","collapse-tags-tooltip":"",clearable:"",style:{width:"100%"},placeholder:"适用范围"},{default:v(()=>[d(S,{modelValue:c.value,"onUpdate:modelValue":s[4]||(s[4]=l=>c.value=l)},{default:v(()=>[(u(),p(h,null,w(M,l=>d(I,{key:l.value,label:l.label,value:l.value},{default:v(()=>[d(V,{style:{"pointer-events":"none"},label:l.value,value:l.value},null,8,["label","value"])]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),d(F,{type:"primary",icon:"Search",onClick:z},{default:v(()=>s[7]||(s[7]=[k("查找")])),_:1})])]),ee(e("div",me,s[8]||(s[8]=[e("img",{src:ae,alt:""},null,-1),e("p",null,"暂无数据",-1)]),512),[[se,T.value.length===0]]),e("div",xe,[d(W,{gutter:20},{default:v(()=>[(u(!0),p(h,null,w(T.value,(l,r)=>(u(),te(O,{span:8,key:r,style:{"margin-bottom":"20px"}},{default:v(()=>[e("a",{href:"#",class:"tools-all-item",onClick:$(U=>R(l),["prevent"])},[s[11]||(s[11]=e("div",{class:"col-l"},[e("div",{class:"img"},[e("img",{src:"//s3nb1.i-sanger.com/ypt/static/upload/images/cmd/20201017/5a898569ca7a5aa99a4f9d1c81d70aa3.png",width:"90"})])],-1)),e("div",Ce,[e("div",Te,_(l.title),1),e("div",Ve,[e("span",Ie,_(l.tag),1),e("div",Se,[d(H,null,{default:v(()=>[d(G)]),_:1}),k(" "+_(l.look),1)]),s[9]||(s[9]=e("div",{class:"heart btn-favorites","data-cmd_id":"2veaergs1i7e4g83c7pr4sgbmd",rel:"unfavorites",title:"收藏"},null,-1))]),e("div",Le,_(l.desc),1),s[10]||(s[10]=e("div",{class:"bot"},[e("div",{class:"price"},[e("span",null,"￥0.00"),k(" / 次")]),e("span",{class:"instrument-equity-type"},"会员专享")],-1))])],8,Be)]),_:2},1024))),128))]),_:1})]),e("div",Fe,[d(J,{background:"",layout:"prev, pager, next, total",total:1e3,"prev-text":"上一页","next-text":"下一页"})])])])]),e("div",$e,[s[13]||(s[13]=e("h5",null,"立即联系您的专属顾问",-1)),s[14]||(s[14]=e("p",null,"免费咨询美吉云专属顾问，组学无忧一站式解决方案提供商",-1)),e("a",{href:"#",class:"openKfChartBtn",onClick:s[6]||(s[6]=$(()=>{},["prevent"]))},"立即咨询")]),d(oe)])}}},je=Q(qe,[["__scopeId","data-v-75315a7f"]]);export{je as default};