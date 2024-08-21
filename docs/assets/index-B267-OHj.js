import{d as G,r as w,o as O,a as n,c as a,b as t,u as v,t as d,F as j,e as k,p as L,f as I,g as U,n as y,h as A,i as M,j as R,s as Y,T as X,k as J,l as P,S as Z,m as tt,q as et,v as st,w as ot}from"./vendor-Czf6XXsS.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function u(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=u(o);fetch(o.href,s)}})();const E=G("main",{state:()=>({isMobile:!1}),getters:{},actions:{setIsMobile(r){this.isMobile=r}}}),C={Introduce:"简介",Conversations:"关于",Jobs:"致谢",Products:"产品",Works:"爱好",Pricing:"买他",Footer:"联系",AgeTitle:"版本号即岁数",Name:"华子"},nt=""+new URL("logo-B5PoC-VZ.png",import.meta.url).href,x=(r,m)=>{const u=r.__vccOpts||r;for(const[i,o]of m)u[i]=o;return u},at=r=>(L("data-v-201c757b"),r=r(),I(),r),it={class:"navbar navbar-expand-lg py-2 mb-3 jn-navbar-top"},rt={id:"navbar-top",class:"container-xl"},lt={class:"jn-logo"},ct={class:"navbar-brand flex align-items-center align-content-center",href:"#"},dt=["src"],ut={class:"fw-bold"},_t=["title"],pt=at(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon bg-transparent"})],-1)),mt={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},bt={class:"navbar-nav"},gt=["href"],ht={__name:"Nav",setup(r){const m=w(0),u=()=>{const i=new Date,o=new Date("2000-01-26"),s=i.getTime()-o.getTime(),l=new Date(s),_=Math.abs(l.getUTCFullYear()-1970)+l.getMonth()/12;m.value=_.toFixed(2)};return O(()=>{u()}),(i,o)=>(n(),a("header",it,[t("nav",rt,[t("div",lt,[t("a",ct,[t("span",null,[t("img",{src:v(nt),alt:"logo",class:"jn-logo-img"},null,8,dt)]),t("span",ut,d(v(C).Name),1),t("span",{class:"fw-lighter",title:v(C).AgeTitle},".v"+d(m.value),9,_t)])]),pt,t("div",mt,[t("div",bt,[(n(),a(j,null,k(["Introduce","Conversations","Abilities","Jobs","Products","Works","Pricing","Footer"],s=>t("a",{key:s,class:"nav-link",href:`#${s}`},d(v(C)[s]),9,gt)),64))])])])]))}},vt=x(ht,[["__scopeId","data-v-201c757b"]]),V={name:"华子",subtitle:"一个互联网人。",button:"OK，知道了"},ft=`<p>哟，您来了，您请进。</p>
<p>欢迎来到「华子Net」</p>
<p>在这里，你可以了解到华子写过哪些东西以及做过某方面的技术。</p>
<p>在开始之前，请了解本页面：</p>
<ul>
<li>可以在办公室查看</li>
<li>可以一边走路一边看</li>
<li>可以在赛车场查看</li>
<li>可以不彻底煮熟的情况下查看</li>
<li>未成年人可以在监护人陪同下查看</li>
</ul>
`,Q=r=>(L("data-v-268b1be3"),r=r(),I(),r),yt={class:"text-dark mb-4 jn-introduce-doc"},jt=["innerHTML"],wt={class:"btn-purple",href:"#Conversations"},kt=Q(()=>t("i",{class:"bi bi-arrow-down-circle"},null,-1)),St={key:0,class:"col-6 px-4 pt-4"},Pt=Q(()=>t("div",{class:"jn-introduce-bg"},null,-1)),xt=[Pt],Ot={__name:"Introduce",setup(r){const m=E(),u=U(()=>m.isMobile),i=w(""),o=s=>s.toString().replace(/<li>/g,'<p><i class="bi bi-check-circle-fill text-purple"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return i.value=o(ft),(s,l)=>(n(),a("div",{class:y(["row jn-introduce justify-content-evenly pt-5 mx-0",u.value?"jn-mobile-mt":"jn-desktop-mt"]),id:"Introduce"},[t("div",{class:y([u.value?"col-12 px-5 py-2":"col-5 p-5"])},[t("div",null,[t("h2",{class:y(["jn-introduce-title",[u.value?"jn-h2-mobile":"jn-h2"]])},d(v(V).name),3),t("h3",{class:y(["jn-introduce-subtitle",[u.value?"jn-h3-mobile":"jn-h3"]])},d(v(V).subtitle),3),t("div",yt,[t("div",{innerHTML:i.value,class:"mb-4"},null,8,jt),t("a",wt,[A(d(v(V).button)+"  ",1),kt])])])],2),u.value?M("",!0):(n(),a("div",St,xt))],2))}},Tt=x(Ot,[["__scopeId","data-v-268b1be3"]]),At="modulepreload",Mt=function(r,m){return new URL(r,m).href},$={},f=function(m,u,i){let o=Promise.resolve();if(u&&u.length>0){const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),g=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.all(u.map(_=>{if(_=Mt(_,i),_ in $)return;$[_]=!0;const c=_.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const S=s[h];if(S.href===_&&(!c||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${p}`))return;const e=document.createElement("link");if(e.rel=c?"stylesheet":At,c||(e.as="script",e.crossOrigin=""),e.href=_,g&&e.setAttribute("nonce",g),document.head.appendChild(e),c)return new Promise((h,S)=>{e.addEventListener("load",h),e.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${_}`)))})}))}return o.then(()=>m()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})},Et=""+new URL("g1-CrI8Tb46.png",import.meta.url).href,Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),It=""+new URL("g2-DDuPLeXY.png",import.meta.url).href,Ut=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"})),Rt=""+new URL("g3-C175VPXf.png",import.meta.url).href,Ct=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"})),Vt=""+new URL("g4-D-q2ct0f.png",import.meta.url).href,Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"})),Ht=""+new URL("m1-C2mM0dfF.png",import.meta.url).href,$t=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"})),Kt=""+new URL("m2-BkRP9CPd.png",import.meta.url).href,Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Kt},Symbol.toStringTag,{value:"Module"})),Qt=""+new URL("m3-vbqHpX0x.png",import.meta.url).href,zt=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"})),Nt=""+new URL("m4-LJ-m-nPJ.png",import.meta.url).href,Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),Dt={Badge:"华子Net"},qt={class:"jn-conversations mt-5 position-relative",id:"Conversations"},Gt={class:"badge bg-purple jn-badge"},Yt={class:"row justify-content-evenly mt-5 mx-0"},Xt={class:"px-5 col-12"},Jt={key:0},Zt=["innerHTML"],te=["src"],ee={__name:"Conversations",setup(r){const m=w(!1),u=Object.assign({"/contents/conversations/conv1.md":()=>f(()=>import("./conv1-B1ce2ZhZ.js"),[],import.meta.url),"/contents/conversations/conv2.md":()=>f(()=>import("./conv2-0kEUt5XN.js"),[],import.meta.url),"/contents/conversations/conv3.md":()=>f(()=>import("./conv3-vgQZoRtf.js"),[],import.meta.url),"/contents/conversations/conv4.md":()=>f(()=>import("./conv4-BX3-5oe0.js"),[],import.meta.url),"/contents/conversations/conv5.md":()=>f(()=>import("./conv5-CG4iIC6i.js"),[],import.meta.url)}),i=Object.assign({"/contents/conversations/images/g1.png":Lt,"/contents/conversations/images/g2.png":Ut,"/contents/conversations/images/g3.png":Ct,"/contents/conversations/images/g4.png":Bt,"/contents/conversations/images/m1.png":$t,"/contents/conversations/images/m2.png":Ft,"/contents/conversations/images/m3.png":zt,"/contents/conversations/images/m4.png":Wt}),o=R([]),s=async()=>{const g=Object.values(u).map(async _=>{const c=await _(),p=c.attributes,b=Object.keys(i).find(h=>h.includes(p.avatar)),e=b?i[b].default:null;return{html:l(c.html),attributes:{...p,avatar:e}}});o.push(...await Promise.all(g)),o.sort((_,c)=>c.attributes.date-_.attributes.date),m.value=!0},l=g=>g.toString().replace(/<li>/g,'<span class="badge bg-white text-purple">').replace(/<\/li>/g,"</span>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return O(async()=>{await s()}),(g,_)=>(n(),a("div",qt,[t("span",Gt,d(v(Dt).Badge),1),t("div",Yt,[t("div",Xt,[m.value?(n(),a("div",Jt,[(n(!0),a(j,null,k(o,(c,p)=>(n(),a("div",{key:p,class:y(`row flex-nowrap align-items-start ${p%2===0?"":"flex-row-reverse"}`)},[t("div",{class:y(`conversation ${p%2===0?"conversation-right":"conversation-left"} col-8 col-md-9`),innerHTML:c.html},null,10,Zt),t("div",{class:y(["col-4 col-md-3",`jn-img-${p%2===0?"right":"left"}`])},[t("img",{src:c.attributes.avatar,alt:"avatar",class:"img-fluid rounded-circle jn-avatar"},null,8,te)],2)],2))),128))])):M("",!0)])])]))}},se=x(ee,[["__scopeId","data-v-1395ae21"]]),K={Badge:"华子说：",Title:"感谢一路走来好友的帮助"},oe=`<p>如果华子是一款产品，那么他上线已经 20 多年了，华子的用户群体非常广泛。换句话说，也比较杂乱。</p>
<p>作为一款多功能的产品，用户们在使用的时候，会有不同的用法，包括：</p>
<ul>
<li>作为爱折腾人使用</li>
<li>作为羊毛党使用</li>
<li>作为普通用户使用</li>
</ul>
<p>至于用起来觉得好不好，咱就不好说了，面子上总是要说好的。</p>
`,ne={class:"jn-jobs mt-5 position-relative",id:"Jobs"},ae={class:"badge bg-purple jn-badge"},ie={class:"row justify-content-evenly mt-5 mx-0"},re={class:"jn-left-panel mb-4 col-md-5 col-12"},le={class:"jn-h2"},ce=["innerHTML"],de={key:0,class:"jn-right-panel col-md-7 col-12"},ue={class:"nav nav-underline mb-3 text-nowrap overflow-x-scroll flex-nowrap",id:"pills-tab",role:"tablist"},_e=["onClick","id","aria-selected"],pe=["id","aria-labelledby"],me={class:"fs-4"},be={class:"fw-bold"},ge=["href"],he={class:"badge bg-purple"},ve=["innerHTML"],fe={__name:"Jobs",setup(r){const m=E(),u=U(()=>m.isMobile),i=w(!1),o=w(0),s=w(""),l=Object.assign({"/contents/jobs/yokeneng.md":()=>f(()=>import("./yokeneng-BrBwg2pN.js"),[],import.meta.url)}),g=R([]),_=async()=>{const p=Object.values(l).map(b=>b().then(e=>({html:c(e.html,"bi-arrow-right-circle-fill"),attributes:e.attributes})));g.push(...await Promise.all(p)),g.sort((b,e)=>b.attributes.date<e.attributes.date?1:-1),i.value=!0},c=(p,b)=>p.toString().replace(/<li>/g,`<p><i class="bi text-purple ${b}"></i> `).replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return s.value=c(oe,"bi-emoji-expressionless-fill"),O(async()=>{await _()}),(p,b)=>(n(),a("div",ne,[t("span",ae,d(v(K).Badge),1),t("div",ie,[t("div",re,[t("h2",le,d(v(K).Title),1),t("div",{innerHTML:s.value},null,8,ce)]),i.value?(n(),a("div",de,[t("ul",ue,[(n(!0),a(j,null,k(g,(e,h)=>(n(),a("li",{class:"nav-item",role:"presentation",key:"nav-item-"+e.attributes.id},[t("button",{class:y(["nav-link",{active:o.value===h}]),onClick:S=>o.value=h,id:"pills-"+e.attributes.id+"-tab",type:"button",role:"tab","aria-selected":o.value===h},d(e.attributes.company),11,_e)]))),128))]),t("div",{class:y(["tab-content jn-tab-content card jn-card mb-5",[u.value?"p-4 jn-jobs-content-mobile":"p-5"]]),id:"pills-tabContent"},[(n(!0),a(j,null,k(g,(e,h)=>(n(),a("div",{class:y(["tab-pane fade",{"show active":o.value===h}]),key:"tab-pane-"+e.attributes.id,id:"jobs-"+e.attributes.id,role:"tabpanel","aria-labelledby":"pills-"+e.attributes.id+"-tab",tabindex:"0"},[t("div",me,[t("span",be,d(e.attributes.title),1),A(" @ "),t("a",{class:"text-decoration-none link-purple",href:e.attributes.url,target:"_blank",rel:"noopener noreferrer"},d(e.attributes.company),9,ge)]),t("div",he,d(e.attributes.range),1),t("div",{class:"mt-3 fw-light",innerHTML:e.html},null,8,ve)],10,pe))),128))],2)])):M("",!0)])]))}},ye=x(fe,[["__scopeId","data-v-f022d29f"]]),je="data:image/png;base64,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",we=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),ke=""+new URL("TG-BqNCU5j5.jpg",import.meta.url).href,Se=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Pe=""+new URL("Ten_panel-y7O9HAV1.jpg",import.meta.url).href,xe=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"})),Oe=""+new URL("cloudfree-Dp0O7nih.jpg",import.meta.url).href,Te=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),Ae=""+new URL("maodou-Hct_h72n.png",import.meta.url).href,Me=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"})),Ee=""+new URL("mddoo_web-EWF_zEv_.jpg",import.meta.url).href,Le=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"})),F={Badge:"代表产品",Title:"创造是糖"},Ie=`<p>这个人喜欢挑战自己，也喜欢不断吸收新知识，做过的产品比较多，做了后来消失了的也不少。</p>
<p>对他来说，创造是一种快乐，也是一个生活方式。</p>
`,Ue=r=>(L("data-v-3261516b"),r=r(),I(),r),Re={class:"jn-products mt-5 position-relative",id:"Products"},Ce={class:"badge bg-dark jn-badge"},Ve={class:"row justify-content-evenly mt-5 mx-0"},Be={class:"jn-left-panel mb-4 col-md-5 col-12"},He={class:"sticky-wrapper"},$e={class:"jn-h2"},Ke=["innerHTML"],Fe={key:0,class:"jn-right-panel col-md-7 col-12"},Qe={class:"col-12 mb-5 jn-product-card"},ze={class:"card jn-card"},Ne={class:"card-body"},We={class:"card-title"},De=["href"],qe=Ue(()=>t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)),Ge=[qe],Ye={class:"card-title mt-3"},Xe={class:"row my-3 align-items-start"},Je=["innerHTML"],Ze={class:"col-md-4 col-12 pb-2"},ts={class:"jn-cover-img"},es=["src","alt"],ss={__name:"Products",setup(r){const m=E(),u=U(()=>m.isMobile),i=w(!1),o=w(""),s=p=>p.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");o.value=s(Ie);const l=Object.assign({"/contents/products/Ten_panel.md":()=>f(()=>import("./Ten_panel-CpmVsbyb.js"),[],import.meta.url),"/contents/products/blog.md":()=>f(()=>import("./blog-CawqR9Mq.js"),[],import.meta.url),"/contents/products/cloudfree.md":()=>f(()=>import("./cloudfree-DuuykDe1.js"),[],import.meta.url),"/contents/products/mddframe.md":()=>f(()=>import("./mddframe-CvlHHF3-.js"),[],import.meta.url),"/contents/products/mddoo.md":()=>f(()=>import("./mddoo-B4lWqLHS.js"),[],import.meta.url)}),g=Object.assign({"/contents/products/images/Blog.png":we,"/contents/products/images/TG.jpg":Se,"/contents/products/images/Ten_panel.jpg":xe,"/contents/products/images/cloudfree.jpg":Te,"/contents/products/images/maodou.png":Me,"/contents/products/images/mddoo_web.jpg":Le}),_=R([]),c=async()=>{const p=Object.values(l).map(async b=>{const e=await b(),h=e.attributes,S=Object.keys(g).find(q=>q.includes(h.cover)),D=S?g[S].default:null;return{html:s(e.html),attributes:{...h,cover:D}}});_.push(...await Promise.all(p)),_.sort((b,e)=>e.attributes.date-b.attributes.date),i.value=!0};return O(async()=>{await c(),u.value||Y(".sticky-wrapper",{stickyBitStickyOffset:100})}),(p,b)=>(n(),a("div",Re,[t("span",Ce,d(v(F).Badge),1),t("div",Ve,[t("div",Be,[t("div",He,[t("h2",$e,d(v(F).Title),1),t("div",{innerHTML:o.value},null,8,Ke)])]),i.value?(n(),a("div",Fe,[(n(!0),a(j,null,k(_,(e,h)=>(n(),a("div",{key:e,class:"row justify-content-between"},[t("div",Qe,[t("div",ze,[t("div",Ne,[t("h5",We,[A(d(e.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:e.attributes.url,target:"_blank",rel:"noopener noreferrer"},Ge,8,De)]),t("div",Ye,[(n(!0),a(j,null,k(e.attributes.tags,S=>(n(),a("span",{key:h,class:"badge bg-dark jn-tags me-2"},d(S),1))),128))]),t("div",Xe,[t("div",{innerHTML:e.html,class:"jn-card-text col-md-8 col-12 jn-products-text"},null,8,Je),t("div",Ze,[t("div",ts,[t("img",{src:e.attributes.cover,class:"img-fluid",alt:e.attributes.title},null,8,es)])])])])])])]))),128))])):M("",!0)])]))}},os=x(ss,[["__scopeId","data-v-3261516b"]]),ns={Badge:"业余的爱好"},as="",is=r=>(L("data-v-677d43b6"),r=r(),I(),r),rs={class:"jn-works mt-5 position-relative",id:"Works"},ls={class:"badge bg-success jn-badge"},cs={key:0,class:"row mt-5 mx-0 jn-works-row"},ds={class:"card jn-works-card h-100"},us={class:"card-body"},_s={class:"card-title"},ps=["href"],ms=is(()=>t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)),bs=[ms],gs={class:"card-title mt-3"},hs=["innerHTML"],vs={__name:"Works",setup(r){const m=w(!1),u=w(""),i=g=>g.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");u.value=i(as);const o=Object.assign({"/contents/works/hardware.md":()=>f(()=>import("./hardware-SPDne6Hq.js"),[],import.meta.url),"/contents/works/help.md":()=>f(()=>import("./help-RZG-s0-F.js"),[],import.meta.url)}),s=R([]),l=async()=>{const g=Object.values(o).map(_=>_().then(c=>({html:c.html,attributes:c.attributes})));s.push(...await Promise.all(g)),s.sort((_,c)=>_.attributes.date<c.attributes.date?1:-1),m.value=!0};return O(async()=>{await l()}),(g,_)=>(n(),a("div",rs,[t("span",ls,d(v(ns).Badge),1),m.value?(n(),a("div",cs,[(n(!0),a(j,null,k(Math.ceil(s.length/3),c=>(n(),a("div",{key:c,class:"row"},[(n(!0),a(j,null,k(s.slice((c-1)*3,c*3),(p,b)=>(n(),a("div",{key:p.id,class:"col-md-4 col-12 mb-5"},[t("div",ds,[t("div",us,[t("h5",_s,[A(d(p.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-success",href:p.attributes.url,target:"_blank",rel:"noopener noreferrer"},bs,8,ps)]),t("div",gs,[(n(!0),a(j,null,k(p.attributes.tags,e=>(n(),a("span",{key:e,class:"badge bg-success jn-tags me-2"},d(e),1))),128))]),t("div",{innerHTML:p.html,class:"jn-card-text"},null,8,hs)])])]))),128))]))),128))])):M("",!0)]))}},fs=x(vs,[["__scopeId","data-v-677d43b6"]]),B={Badge:"产品怎么卖？",Buy:"就买这个！",alertTitle:"你还真点了购买",alertMessage:"在下面的联系方式里找一个来联系吧"},H=r=>(L("data-v-e78d00c9"),r=r(),I(),r),ys={class:"jn-pricing mt-5 position-relative",id:"Pricing"},js={class:"badge bg-purple jn-badge"},ws={key:0,class:"row mt-5 mx-0 jn-pricing-row px-4"},ks={class:"card jn-card mb-4 position-relative jn-animate-card"},Ss={class:"card-title"},Ps={class:"card-subtitle mb-2 mb-4 opacity-50"},xs={class:"card-body"},Os={class:"jn-plan-detail"},Ts={class:"list-group list-group-flush"},As={class:"list-group-item border-0"},Ms=H(()=>t("i",{class:"bi bi-check-circle-fill text-success"},null,-1)),Es={class:"list-group-item border-0"},Ls=H(()=>t("i",{class:"bi bi-x-circle-fill text-danger"},null,-1)),Is={class:"jn-plan-buy row m-3"},Us={class:"toast-container p-3 jn-toast"},Rs={class:"toast-header"},Cs=H(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1)),Vs={class:"toast-body"},Bs={__name:"Pricing",setup(r){const m=w(!1),u=w({}),i=w(null),o=(c=2e3)=>{u.value={alertTitle:B.alertTitle,alertMessage:B.alertMessage,alertStyle:"text-success"},i.value?new X(i.value,{delay:2e3}).show():console.error("Toast element not found")},s=Object.assign({"/contents/pricing/plan1.md":()=>f(()=>import("./plan1-B9jbC070.js"),[],import.meta.url),"/contents/pricing/plan2.md":()=>f(()=>import("./plan2-BH4wO3-D.js"),[],import.meta.url),"/contents/pricing/plan3.md":()=>f(()=>import("./plan3-BM0LcRY-.js"),[],import.meta.url)}),l=R([]),g=async()=>{const c=Object.values(s).map(p=>p().then(b=>({html:b.html,attributes:b.attributes})));l.push(...await Promise.all(c)),l.sort((p,b)=>p.attributes.date<b.attributes.date?1:-1),m.value=!0},_=()=>{const c=window.innerWidth,b=(c-1600)/2,e=document.querySelector(".jn-toast");c>1600?e.style.right=`${b+0}px`:e.style.right="0"};return O(()=>{window.addEventListener("resize",_),_()}),O(async()=>{await g()}),(c,p)=>(n(),a(j,null,[t("div",ys,[t("span",js,d(v(B).Badge),1),m.value?(n(),a("div",ws,[(n(!0),a(j,null,k(l,(b,e)=>(n(),a("div",{key:b,class:"col-mb-4 col-xl-4 col-xxl-4 col-12 mb-5"},[t("div",ks,[t("div",{class:y(["jn-plan-title",{"bg-primary":e%3===0,"bg-success":e%3===1,"bg-purple":e%3===2}])},[t("h5",Ss,d(b.attributes.Title),1),t("h6",Ps,d(b.attributes.Subtitle),1)],2),t("div",xs,[t("div",Os,[t("ul",Ts,[(n(!0),a(j,null,k(b.attributes.Includes,h=>(n(),a("li",As,[Ms,A(" "+d(h),1)]))),256)),(n(!0),a(j,null,k(b.attributes.Excludes,h=>(n(),a("li",Es,[Ls,A(" "+d(h),1)]))),256))])]),t("div",Is,[t("button",{class:y(["btn",{"btn-primary":e%3===0,"btn-success":e%3===1,"btn-purple":e%3===2}]),onClick:o},d(b.attributes.Price),3)])])])]))),128))])):M("",!0)]),t("div",Us,[t("div",{id:"toastInfoMask",class:"toast",role:"alert",ref_key:"toastEl",ref:i,"aria-live":"assertive","aria-atomic":"true"},[t("div",Rs,[t("strong",{class:y(["me-auto",u.value.alertStyle])},d(u.value.alertTitle),3),Cs]),t("div",Vs,d(u.value.alertMessage),1)],512)])],64))}},Hs=x(Bs,[["__scopeId","data-v-e78d00c9"]]),T={Title:"华子",Subtitle:"一个互联网人。",ContactTitle:"怎么联系？",ContactSubtitle:"你可以通过多种联系方式找到他。基本上每个社交网络都有他的身影，他有时候会假装收不到你的信息然后不回复。所以，务必不要发一个类似「在吗」这样的信息，直接说你要什么就好了。",Social:[{name:"GitHub",icon:"github",url:"https://github.com/huazinet"},{name:"Wechat",icon:"wechat",url:"https://twitter.com/"},{name:"Telegram",icon:"telegram",url:"https://t.me/huazinet"},{name:"博客",icon:"rss",url:"https://blog.sharehub.club"}]},$s={class:"jn-footer mt-5 position-relative",id:"Footer"},Ks={class:"row p-5 w-100"},Fs={class:"col-md-6 col-lg-6 col-12"},Qs={class:"opacity-75"},zs={class:"col-md-6 col-lg-6 col-12"},Ns={class:"opacity-75"},Ws={class:"flex"},Ds=["href","title"],qs={class:"jn-footer-placeholder"},Gs={__name:"Footer",setup(r){const m=E(),u=U(()=>m.isMobile),i=new Date().getFullYear();return(o,s)=>(n(),a("div",$s,[t("div",Ks,[t("div",Fs,[t("h1",null,d(v(T).Title),1),t("p",Qs,d(v(T).Subtitle),1)]),t("div",zs,[t("h3",null,d(v(T).ContactTitle),1),t("p",Ns,d(v(T).ContactSubtitle),1),t("div",Ws,[(n(!0),a(j,null,k(v(T).Social,(l,g)=>(n(),a("a",{key:g,class:y([u.value?"jn-footer-social-mobile me-3":"jn-footer-social-desktop me-4"]),href:l.url,title:l.name,target:"_blank"},[t("i",{class:y(["bi","bi-"+l.icon])},null,2)],10,Ds))),128))])])]),t("div",qs,d(v(T).Title)+" © "+d(v(i)),1)]))}},Ys=x(Gs,[["__scopeId","data-v-f4b73c5b"]]),Xs={id:"main-part",class:"container mt-2 px-0"},Js={"data-bs-spy":"scroll","data-bs-target":"#navbar-top","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"rounded-2",tabindex:"0"},Zs={__name:"App",setup(r){const m=E(),u=U(()=>m.isMobile),i=(s,l=200,g,_=!1)=>{Z().reveal(s,{delay:l,duration:1e3,origin:g,distance:"100px",reset:_})};return(()=>{let s=document.getElementById("jn-loading");s&&(s.style.display="none")})(),O(()=>{i(".jn-introduce-bg",200,"bottom",!1),i(".jn-introduce-title",600,"top",!1),i(".jn-introduce-subtitle",600,"left",!1),i(".jn-introduce-doc",1600,"bottom",!1),setTimeout(()=>{i(".conversation-right",200,"right",!1),i(".conversation-left",200,"left",!1),i(".jn-animate-card",200,"bottom",!1)},1e3)}),(s,l)=>{const g=J("Abilities");return n(),a(j,null,[P(vt),t("div",Xs,[t("div",Js,[P(Tt),t("div",{class:y([u.value?"jn-items-full-width":"jn-items"])},[P(se),P(g),P(ye),P(os),P(fs),P(Hs)],2)]),P(Ys)])],64)}}},to=x(Zs,[["__scopeId","data-v-e131e20a"]]),z=tt(to),N=et();z.use(N);const eo=E(N),so=st({app:"MyIP",plugins:[ot({measurementIds:["G-Z5G5JGDFMK"]})]});so.page();function W(){eo.setIsMobile(window.innerWidth<768)}W();window.addEventListener("resize",W);z.mount("#app");
