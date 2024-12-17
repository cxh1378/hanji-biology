import{_ as N,u as B,a as F,r as d,s as R,o as j,x as Z,b as z,y as K,d as u,e as c,f as r,g as t,h as a,w as _,F as S,j as x,n as P,i as $,t as I,q,z as U,p as H}from"./index-1cb9ec0c.js";import{F as J}from"./index-33ccd186.js";const O={class:"cloudProcess",ref:"scrollContainer"},W={class:"wrap mt0a wrap-content"},Y={class:"tools-wrap affix-container1"},G={class:"tools-side-wrap"},X={class:"tools-side"},ee={class:"left_sidebar"},te=["onClick"],se={class:"tools-content"},oe={class:"filter-box"},le={class:"search"},ne={class:"app-list-wrap"},ae=["id"],ce={class:"cloud-process-list"},re={class:"desc"},ie=["onClick"],de={__name:"index",setup(ue){const g=B(),k=F(),A=d([{title:"微生物",children:[{title:"微生物多样性QIIME2流程",desc:"微生物多样性QIIME2流程，利用dada2/deblur降噪方法对16S/18S/ITS/功能基因等特定区段的高通量测序序列进行错误校正，获得每个样本的ASV代表序列及丰度表，基于序列降噪结果进行微生物多样"},{title:"微生物多样性QIIME2流程",desc:"微生物多样性QIIME2流程，利用dada2/deblur降噪方法对16S/18S/ITS/功能基因等特定区段的高通量测序序列进行错误校正，获得每个样本的ASV代表序列及丰度表，基于序列降噪结果进行微生物多样"},{title:"微生物多样性QIIME2流程",desc:"微生物多样性QIIME2流程，利用dada2/deblur降噪方法对16S/18S/ITS/功能基因等特定区段的高通量测序序列进行错误校正，获得每个样本的ASV代表序列及丰度表，基于序列降噪结果进行微生物多样"}]},{title:"DNA1",children:[{title:"微生物多样性QIIME2流程2",desc:"微生物多样性QIIME2流程，利用dada2/deblur降噪方法对16S/18S/ITS/功能基因等特定区段的高通量测序序列进行错误校正，获得每个样本的ASV代表序列及丰度表，基于序列降噪结果进行微生物多样"}]},{title:"RNA组学服务",children:[{title:"微生物多样性QIIME2流程2",desc:"微生物多样性QIIME2流程，利用dada2/deblur降噪方法对16S/18S/ITS/功能基因等特定区段的高通量测序序列进行错误校正，获得每个样本的ASV代表序列及丰度表，基于序列降噪结果进行微生物多样"}]}]),w=d(["微生物","DNA1","RNA组学服务","蛋白组"]),C=d(["DIA蛋白组学云分析V1.3","DIA蛋白组学云分析V1.3","DIA蛋白组学云分析V1.3"]),y=d([]),v=d(0),f=d(""),M=(s,e)=>{v.value=e};R(()=>{const s=f.value.trim().toLowerCase();return s?C.value.filter(e=>e.toLowerCase().includes(s)):[]});const b=s=>{k.push({path:"/cloudProcessDetails"})},Q=s=>{const e=f.value.toLowerCase();return s.filter(n=>E(n).some(h=>h.includes(e)))},E=s=>{let e=[];for(const n in s){const o=s[n];typeof o=="object"&&o!==null?e=e.concat(E(o)):e.push(o.toString().toLowerCase())}return e},m=()=>{window.scrollY||document.documentElement.scrollTop;let s=null;y.value.forEach((e,n)=>{const o=e.getBoundingClientRect();o.top<=80&&o.bottom>0&&(s=n)}),s!==null&&(v.value=s)};return j(()=>{Z(()=>{window.addEventListener("scroll",m),m()})}),z(()=>{window.removeEventListener("scroll",m)}),K(()=>g.hash,s=>{const e=s.startsWith("#")?s.slice(1):s;s&&(v.value=w.value.findIndex(n=>n===e))},{immediate:!0}),(s,e)=>{const n=u("router-link"),o=u("el-affix"),h=u("el-col"),V=u("Search"),T=u("el-icon"),D=u("el-row");return c(),r("div",O,[e[4]||(e[4]=t("div",{class:"banner"},[t("div",{class:"wrap txt"},[t("h5",null,"美吉云流程"),t("p",null,"组学无忧一站式解决方案提供商"),t("a",{href:"javascript:;",class:"openKfChartBtn"},"售前咨询")])],-1)),t("div",W,[e[3]||(e[3]=t("div",{class:"tools-top-title"},"了解所有云流程",-1)),t("div",Y,[a(D,null,{default:_(()=>[a(h,{span:4},{default:_(()=>[a(o,{target:".affix-container1",offset:72},{default:_(()=>[t("div",G,[t("div",X,[t("div",ee,[t("ul",null,[(c(!0),r(S,null,x(w.value,(l,i)=>(c(),r("li",{onClick:p=>M(l,i),class:P({current:v.value===i}),key:i},[a(n,{to:`#${l}`},{default:_(()=>[$(I(l),1)]),_:2},1032,["to"])],10,te))),128))])])])])]),_:1})]),_:1}),a(h,{span:20},{default:_(()=>[t("div",se,[t("div",oe,[t("div",le,[a(T,{class:"iconkf",color:"#3385ff"},{default:_(()=>[a(V)]),_:1}),q(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>f.value=l),type:"text",class:"layui-input",placeholder:"请输入分析流程名称进行搜索"},null,512),[[U,f.value]])])]),t("div",ne,[(c(!0),r(S,null,x(Q(A.value),(l,i)=>(c(),r("div",{class:"anchor sections",id:l.title,key:i},[t("div",{class:"cloud-process-title",ref_for:!0,ref:p=>y.value[i]=p},I(l.title),513),t("div",ce,[(c(!0),r(S,null,x(l.children,(p,L)=>(c(),r("div",{class:"cloud-process",key:L},[e[1]||(e[1]=t("span",{class:"new"},null,-1)),e[2]||(e[2]=t("div",{class:"img"},[t("img",{src:"//s3nb2.i-sanger.com/ypt/static/upload/images/cmd/20221215/FNERJpNaIuQsxSZ286Klzyg8iTwBZKkOjZdSaZrP.jpg",alt:""})],-1)),t("h5",null,I(p.title),1),t("div",re,I(p.desc),1),t("a",{onClick:H(_e=>b(l),["prevent"])},"查看详情",8,ie)]))),128))])],8,ae))),128))])])]),_:1})]),_:1})])]),a(J)],512)}}},fe=N(de,[["__scopeId","data-v-c2fc6d12"]]);export{fe as default};
