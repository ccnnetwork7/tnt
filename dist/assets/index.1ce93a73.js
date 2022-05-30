import{d as x,o,c as r,a as t,t as i,F as g,r as $,b as p,u as f,n as y,e as j,p as F,f as z,g as _,w as S,T as A,h as k,i as D,j as H,k as N,v as P,l as U,m as Q,q as h,s as Z}from"./vendor.ffafd5f1.js";const tt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=c(l);fetch(l.href,a)}};tt();const et={class:"bg-[#360b6e] py-10"},st={class:"container mx-auto"},lt={class:"text-4xl font-bold text-center mb-16"},nt={class:"grid grid-cols-1 xl:grid-cols-2 gap-y-10 px-3 xl:px-0"},at={class:"mb-5 w-[100px] h-[100px] bg-[#038AA6] shadow-[0_0_20px_0_rgba(3,138,166,0.7)] rounded-full flex flex-col justify-center"},ot=["src"],ct={class:"font-medium mb-1"},it={class:"font-light pr-6"},rt=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",et,[t("div",st,[t("p",lt,i(e.data.title),1),t("div",nt,[(o(!0),r(g,null,$(e.data.items,(s,l)=>(o(),r("div",{key:l},[t("div",at,[t("img",{src:s.icon,alt:"",class:"mx-auto"},null,8,ot)]),t("p",ct,i(s.title),1),t("p",it,i(s.caption),1)]))),128))])])]))}});var dt="/imgs/icons/logo-tnt.png";const M=p("fa");localStorage.getItem("lang")&&(M.value=localStorage.getItem("lang"));function m(){function e(n){n=="fa"?(M.value="fa",localStorage.setItem("lang","fa")):n=="en"&&(M.value="en",localStorage.setItem("lang","en"))}return{changeLang:e,langSelected:M}}var w=(e,n)=>{const c=e.__vccOpts||e;for(const[s,l]of n)c[s]=l;return c};const ut=e=>(F("data-v-50bf2a06"),e=e(),z(),e),xt={class:"fixed w-full"},_t={class:"relative mx-auto bg-[#4abc8c] flex content-center items-center rounded-b-3xl h-[115px] shadow-lg shadow-white/10"},ft=ut(()=>t("div",{class:"absolute xl:left-5 2xl:left-10 3xl:left-20 bg-grey--theme w-[235px] h-[145px] rounded-b-2xl flex items-center justify-center logo-box-shadow"},[t("img",{class:"text-white text-3xl text-center h-full leading-[80px] w-[180px] h-[90px]",src:dt,alt:""})],-1)),pt={class:"flex h-full items-center xl:ml-[250px] 2xl:ml-[320px] 3xl:ml-[320px]"},mt={key:0,class:"m-2 mr-6 flex gap-2 bg-slate-100 p-1 rounded-xl text-gray-800"},vt=["onClick"],ht={key:1,class:"m-2 mr-6 flex gap-2 bg-slate-100 p-1 rounded-xl text-gray-800"},bt=x({props:{data:null},setup(e){function n(c,s){window.open(c,s?"_blank":"_self")}return(c,s)=>(o(),r("div",xt,[t("div",_t,[ft,t("div",pt,[f(m)().langSelected.value=="fa"?(o(),r("div",mt,[t("div",{class:y([{"activeLang text-white":f(m)().langSelected.value=="en"},"px-2 py-1 rounded-xl cursor-pointer"]),onClick:s[0]||(s[0]=l=>f(m)().changeLang("en"))}," EN ",2),t("div",{class:y([{"activeLang text-white":f(m)().langSelected.value=="fa"},"px-2 py-1 rounded-xl cursor-pointer"]),onClick:s[1]||(s[1]=l=>f(m)().changeLang("fa"))}," FA ",2)])):j("",!0),(o(!0),r(g,null,$(e.data.navigation_items,(l,a)=>(o(),r("div",{class:"cursor-pointer flex items-center h-full pb-[8px] hover:pb-0 hover:border-b-8 border-[#a60303] mx-4",key:a},[t("p",{class:"text-xs text-center h-full leading-[115px] whitespace-nowrap",style:{"font-size":"1.1rem"},onClick:d=>n(l.link,l.blank)},i(l.title),9,vt)]))),128)),f(m)().langSelected.value=="en"?(o(),r("div",ht,[t("div",{class:y([{"activeLang text-white":f(m)().langSelected.value=="fa"},"px-2 py-1 rounded-xl cursor-pointer"]),onClick:s[2]||(s[2]=l=>f(m)().changeLang("fa"))}," FA ",2),t("div",{class:y([{"activeLang text-white":f(m)().langSelected.value=="en"},"px-2 py-1 rounded-xl cursor-pointer"]),onClick:s[3]||(s[3]=l=>f(m)().changeLang("en"))}," EN ",2)])):j("",!0)])])]))}});var gt=w(bt,[["__scopeId","data-v-50bf2a06"]]),$t="/imgs/icons/tnt-logo-mobile.png",wt="/imgs/icons/humberger-menu.svg";const yt=p(!1);function Y(){return{isNavMenuActive:yt}}const kt=e=>(F("data-v-56a68560"),e=e(),z(),e),jt={class:"w-full fixed",dir:"rtl"},Ct={class:"relative mx-auto container bg-[#4abc8c] flex content-center items-center rounded-b-3xl h-[100px] shadow-lg shadow-white/10"},Tt=kt(()=>t("div",{class:"absolute left-8 bg-grey--theme w-[133px] h-[125px] rounded-b-2xl flex items-center justify-center logo-box-shadow"},[t("img",{class:"text-white text-3xl text-center h-full w-[180px] h-[90px] px-4",src:$t,alt:""})],-1)),Lt={class:"w-full px-4 flex justify-start"},St=x({props:{data:null},setup(e){const{isNavMenuActive:n}=Y();return(c,s)=>(o(),r("div",jt,[t("div",Ct,[Tt,t("div",Lt,[t("img",{src:wt,alt:"",class:"mx-3 cursor-pointer",onClick:s[0]||(s[0]=l=>n.value=!0)})])])]))}});var At=w(St,[["__scopeId","data-v-56a68560"]]);const It=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",null,[_(gt,{data:e.data,class:"hidden xl:flex z-[100]"},null,8,["data"]),_(At,{data:e.data,class:"xl:hidden z-[100]"},null,8,["data"])]))}}),Nt={class:"bg-white"},Mt={class:"container mx-auto flex items-center justify-center py-10 px-3"},Ot={class:"text-[1.2rem] xl:text-[2rem] text-[#202020] font-bold text-center"},Bt=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",Nt,[t("div",Mt,[t("p",Ot,i(e.data.text),1)])]))}}),Ft={},zt={class:"bg-[#102d40] w-full flex justify-center py-6"},Et={class:"text-[#9FABB2]"};function qt(e,n){return o(),r("div",zt,[t("p",Et,"Copyright \xA9 "+i(new Date().getFullYear())+" TNT. All Rights Reserved.",1)])}var Dt=w(Ft,[["render",qt]]),Ht="/imgs/icons/tnt-logo-165x75-white.png";const V=e=>(F("data-v-de9dbf1e"),e=e(),z(),e),Pt={class:"bg-[#4abc8c] w-full relative"},Ut={class:"container mx-auto flex flex-col xl:flex-row justify-between items-center 2xl:p-10 py-20"},Yt=["src"],Vt={class:"xl:w-1/2 flex flex-col xl:flex-row"},Xt={class:"flex flex-col items-center mb-10 xl:block xl:mr-10 xl:mb-0"},Rt={class:"mb-6 xl:mb-4 font-black text-xl"},Wt={class:"mb-8 flex xl:mb-4"},Kt=["src","onClick"],Gt={class:"flex flex-col justify-center items-center xl:items-start"},Jt={class:"font-black mb-4 text-xl"},Qt={class:"font-bold mb-4"},Zt={class:"font-bold mb-4"},te={class:"border-t-2 border-[#A60303] pt-14 mt-14 flex flex-col justify-center items-center xl:w-1/2 xl:border-none xl:pt-0 xl:mt-0 xl:block mx-8 xl:mx-0 xl:pl-8"},ee=V(()=>t("img",{src:Ht,alt:"",class:"mb-4"},null,-1)),se=V(()=>t("p",{class:"mb-2 text-sm font-black xl:text-xl"},"T A T A L O O - P A Y M E N T - N E T W O R K",-1)),le={class:"mb-2 font-black"},ne=x({props:{data:null},setup(e){const n=p(!1);function c(l){window.open(l,"_blank")}function s(){window.scrollTo({top:0,behavior:"smooth"})}return(l,a)=>(o(),r("div",Pt,[t("div",Ut,[t("div",{style:{"background-color":"#038aa6b3"},class:"absolute right-2/4 -top-10 rounded-full bg-grey--theme w-[80px] aspect-square cursor-pointer flex flex-col justify-center items-center translate-x-1/2 shadow-xl shadow-[#6ccbe7]/80 hover:shadow-none transition delay-150 duration-300 ease-in-out border-[#eea24e] hover:border-4 hover:bg-white",onClick:s,onMouseenter:a[0]||(a[0]=d=>n.value=!0),onMouseleave:a[1]||(a[1]=d=>n.value=!1)},[t("img",{src:n.value?"/imgs/icons/footer-arrow-red.svg":"/imgs/icons/footer-arrow.svg",alt:""},null,8,Yt)],32),t("div",Vt,[t("div",Xt,[t("p",Rt,i(e.data.follow_us),1),t("div",Wt,[(o(!0),r(g,null,$(e.data.socials,(d,u)=>(o(),r("img",{key:u,src:d.icon,alt:"",onClick:b=>c(d.link),width:"30",height:"30",class:"mx-4 cursor-pointer"},null,8,Kt))),128))])]),t("div",Gt,[t("p",Jt,i(e.data.write_us),1),t("p",Qt,i(e.data.support_email),1),t("p",Zt,i(e.data.partnership_email),1)])]),t("div",te,[ee,se,t("p",le,i(e.data.raising_awareness),1),t("p",null,i(e.data.team_purpose),1)])])]))}});var ae=w(ne,[["__scopeId","data-v-de9dbf1e"]]);const oe={class:"w-full flex flex-col items-center"},ce=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",oe,[_(ae,{data:e.data},null,8,["data"]),_(Dt)]))}});var X="/imgs/icons/chevron-up.svg";const ie=["onClick"],re={class:"font-light text-base xl:text-2xl"},de={key:0,src:X,alt:"indicator"},ue={key:1,src:X,class:"rotate-180",alt:"indicator"},xe={key:0,class:"p-3 min-h-[120px] w-full font-thin text-[#A8A8A8]"},_e=x({props:{items:null},setup(e){const n=e;function c(s){for(let l of n.items)l.isOpen=!1;n.items[s].isOpen=!0}return(s,l)=>(o(),r("div",null,[(o(!0),r(g,null,$(e.items,(a,d)=>(o(),r("div",{key:d,onClick:u=>c(d),class:"w-[90vw] xl:w-[1000px] cursor-pointer"},[t("div",{class:y(["flex justify-between items-center border-b-2 border-white p-3 xl:p-4",a.isOpen?"bg-[#038aa6]":""])},[t("p",re,i(a.title),1),a.isOpen?(o(),r("img",de)):j("",!0),a.isOpen?j("",!0):(o(),r("img",ue))],2),_(A,{name:"fade"},{default:S(()=>[a.isOpen?(o(),r("p",xe,i(a.description),1)):j("",!0)]),_:2},1024)],8,ie))),128))]))}});var fe=w(_e,[["__scopeId","data-v-1f9780d2"]]);const pe={class:"bg-[#360b6e]"},me={class:"flex items-center justify-center container mx-auto"},ve=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",pe,[t("div",me,[_(fe,{items:e.data},null,8,["items"])])]))}});var he="/imgs/icons/poly/red.svg";const be={class:"flex flex-col justify-center items-center max-w-[340px] mx-auto"},ge={class:"bg-[#4abc8c] shadow-lg shadow-[#f5d39a]/70 w-[60px] h-[60px] xl:w-[122px] xl:h-[122px] rounded-full flex items-center justify-center mb-5"},$e=["src"],we={class:"text-xs xl:text-xl mb-3"},ye={class:"text-sm xl:text-[initial] whitespace-pre-line font-light"},ke=x({props:{title:null,caption:null,icon:null},setup(e){return(n,c)=>(o(),r("div",be,[t("div",ge,[t("img",{src:e.icon,alt:"",class:"w-[32px] h-[32px] xl:w-[initial] xl:h-[initial]"},null,8,$e)]),t("p",we,i(e.title),1),t("p",ye,i(e.caption),1)]))}}),je={id:"infobuttons",class:"container mx-auto xl:w-[1000px] content-center justify-center px-3"},Ce=["onClick"],Te=x({props:{data:null},setup(e){function n(c){window.open(c,"_blank")}return(c,s)=>(o(),r("div",je,[(o(!0),r(g,null,$(e.data.buttons,(l,a)=>(o(),r("div",{class:y(["bg-[#ea424c] py-2 h-[60px] rounded cursor-pointer w-full xl:w-[300px] mx-auto",a===2?"col-span-2 xl:col-span-1":""]),key:a},[t("p",{class:"text-center leading-[45px] text-xl",onClick:d=>n(l.link)},i(l.text),9,Ce)],2))),128))]))}}),Le={class:"bg-[#360b6e] py-10"},Se={class:"container mx-auto flex flex-col items-center"},Ae=t("img",{src:he,alt:"",class:"mb-6"},null,-1),Ie={class:"text-2xl xl:text-4xl font-bold text-center mx-5 mb-5"},Ne={class:"text-center p-3 xl:max-w-[1000px] text-sm xl:text-xl whitespace-pre-line mb-32"},Me={class:"content-center"},Oe={class:"text-4xl font-bold mb-16"},Be={class:"w-full grid grid-cols-2 xl:grid-cols-3 gap-y-32 items-start"},Fe=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",Le,[t("div",Se,[Ae,t("p",Ie,i(e.data.amazing_design),1),t("p",Ne,i(e.data.description),1),t("div",Me,[_(Te,{class:"mb-20",data:e.data.info_buttons},null,8,["data"])]),t("p",Oe,i(e.data.title),1),t("div",Be,[(o(!0),r(g,null,$(e.data.features,(s,l)=>(o(),k(ke,{key:l,title:s.title,caption:s.caption,icon:s.icon},null,8,["title","caption","icon"]))),128))])])]))}});var ze="/imgs/icons/ether.svg",R="/imgs/icons/bsc_hero.svg",W="/imgs/bannner.png";const Ee=["src"],K=x({props:{icon:null,text:null,link:null},setup(e){const n=e;function c(){window.open(n.link,"_blank")}return(s,l)=>(o(),r("div",{class:"rounded-lg border-2 border-white h-[110px] w-[100px] flex flex-col items-center justify-center cursor-pointer",onClick:l[0]||(l[0]=a=>c())},[t("img",{src:e.icon,alt:"",class:"mb-3"},null,8,Ee),t("p",null,i(e.text),1)]))}}),O=p(),B=p();function E(){function e(c,s){O.value=c,B.value=!0,setTimeout(()=>{B.value=!1,O.value=""},s*1e3)}function n(){B.value=!1,O.value=""}return{createToast:e,terminateToast:n,toastText:D(O),isToastActive:D(B)}}const qe={class:"pt-24 h-screen w-full flex flex-col justify-center bg-[#360b6e]",style:{"padding-top":"8rem"}},De={class:"container mx-auto"},He={class:"flex items-center px-4"},Pe={class:"w-1/2"},Ue={class:"text-2xl"},Ye={class:"text-6xl font-black mb-5"},Ve={class:"text-xl mb-5"},Xe={class:"flex mb-3 items-center"},Re=t("img",{src:ze,alt:""},null,-1),We={class:"mb-6 w-fit"},Ke={class:"mb-3 bg-white shadow-sm rounded flex py-2 px-3 drop-shadow-md"},Ge=t("img",{src:R,alt:"BSC Logo",class:"select-none mr-3"},null,-1),Je={class:"text-[#102d40] select-text"},Qe={class:"flex"},Ze={class:"font-medium"},ts={class:"mt-3"},es={class:"w-full mx-auto md:mx-0 w-fit py-2 px-2 bg-gradient-to-t from-[#f1b15f] to-[#ea4a49] rounded-md cursor-pointer"},ss={class:"flex"},ls=t("div",{class:"w-1/2"},[t("div",null,[t("img",{src:W,alt:""})])],-1),ns={class:"text-center"},as=x({props:{data:null},setup(e){const n=e,{createToast:c}=E();function s(){window.open(n.data.buy_btn_link,"_blank")}function l(){navigator.clipboard.writeText(n.data.bsc_addr).then(function(){c("Copied!",2)},function(){console.error("Copying to clipboard failed.")})}return(a,d)=>(o(),r("div",qe,[t("div",De,[t("div",He,[t("div",Pe,[t("p",Ue,i(e.data.c_news_network),1),t("p",Ye,i(e.data.heading_biggest),1),t("p",Ve,i(e.data.subheading),1),t("div",Xe,[Re,t("p",null,i(e.data.eth_coming),1)]),t("div",We,[t("div",Ke,[Ge,t("p",Je,i(e.data.bsc_addr),1)]),t("div",Qe,[t("div",{class:"mr-2 bg-[#7b8582] rounded flex flex-col justify-center px-10 py-2 drop-shadow-lg cursor-pointer",onClick:d[0]||(d[0]=u=>l())},[t("p",Ze,i(e.data.copy_addr_btn_text),1)])]),t("div",ts,[t("div",es,[t("p",{class:"text-base md:text-[15px] font-medium text-center",onClick:d[1]||(d[1]=u=>s())},i(e.data.buy_btn_title),1)])])]),t("div",ss,[(o(!0),r(g,null,$(e.data.socials,(u,b)=>(o(),k(K,{key:b,icon:u.icon,text:u.title,link:u.link,class:"mx-2"},null,8,["icon","text","link"]))),128))])]),ls]),t("p",ns,i(e.data.bottom_text),1)])]))}}),os={class:"py-[150px] px-6 min-h-screen bg-[#360b6e]"},cs={class:"container mx-auto flex flex-col justify-center"},is={class:"text-center text-xl"},rs={class:"text-center text-3xl font-black"},ds={class:"text-center"},us=t("img",{src:W,alt:""},null,-1),xs={class:"mb-8"},_s={class:"bg-white shadow-sm rounded flex py-2 px-3 mb-3 drop-shadow-md"},fs=t("img",{src:R,alt:"BSC Logo",class:"select-none mr-3"},null,-1),ps={class:"text-[#102d40] select-text text-[10px]"},ms={class:"font-medium text-center"},vs={class:"mt-3"},hs={class:"w-full mx-auto md:mx-0 w-fit py-2 px-2 bg-gradient-to-t from-[#f1b15f] to-[#ea4a49] rounded-md cursor-pointer"},bs={class:"grid grid-cols-2 sm:grid-cols-5 gap-7 justify-items-center w-[fit-content] mx-auto"},gs=x({props:{data:null},setup(e){const n=e,{createToast:c}=E();function s(){window.open(n.data.buy_btn_link,"_blank")}function l(){navigator.clipboard.writeText(n.data.bsc_addr).then(function(){c("Copied!",2)},function(){console.error("Copying to clipboard failed.")})}return(a,d)=>(o(),r("div",os,[t("div",cs,[t("p",is,i(e.data.c_news_network),1),t("p",rs,i(e.data.heading_biggest),1),t("p",ds,i(e.data.subheading),1),us,t("div",xs,[t("div",_s,[fs,t("p",ps,i(e.data.bsc_addr),1)]),t("div",{class:"mb-5 bg-[#7b8582] rounded flex flex-col justify-center px-10 py-2 drop-shadow-lg cursor-pointer",onClick:d[0]||(d[0]=u=>l())},[t("p",ms,i(e.data.copy_addr_btn_text),1)]),t("div",vs,[t("div",hs,[t("p",{class:"text-base md:text-[15px] font-medium text-center",onClick:d[1]||(d[1]=u=>s())},i(e.data.buy_btn_title),1)])])]),t("div",bs,[(o(!0),r(g,null,$(e.data.socials,(u,b)=>(o(),k(K,{key:b,icon:u.icon,text:u.title,link:u.link},null,8,["icon","text","link"]))),128))])])]))}}),$s=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",null,[_(as,{data:e.data,class:"hidden xl:flex"},null,8,["data"]),_(gs,{data:e.data,class:"xl:hidden"},null,8,["data"])]))}});const ws={class:"bg-[#360b6e] w-full flex flex-col items-center py-10"},ys={class:"text-4xl font-bold mb-5"},ks={class:"font-light text-center text-xs xl:text-xl"},js=["src","onClick"],Cs=x({props:{data:null},setup(e){const n=e;function c(d){window.open(n.data.exchanges[d][1],"_blank")}const s=p(0),l=p("ltr"),a=p();return H(()=>{setInterval(()=>{l.value==="ltr"?(a.value.scrollLeft++,s.value>0&&s.value===a.value.scrollLeft&&(l.value="rtl"),s.value=a.value.scrollLeft):l.value==="rtl"&&(s.value=a.value.scrollLeft,a.value.scrollLeft--,s.value===a.value.scrollLeft&&(l.value="ltr"))},10)}),(d,u)=>(o(),r("div",ws,[t("p",ys,i(e.data.content.title),1),t("p",ks,i(e.data.content.description),1),t("div",{ref_key:"scrollContainer",ref:a,class:"flex overflow-x-auto scrolling-partners"},[(o(!0),r(g,null,$(e.data.exchanges,(b,v)=>(o(),r("img",{class:"cursor-pointer",key:v,src:b[0],alt:"",onClick:q=>c(v)},null,8,js))),128))],512)]))}});var Ts=w(Cs,[["__scopeId","data-v-031f5667"]]);const Ls={class:"bg-gradient-to-t from-[#4abc8c] to-[#360b6e]"},Ss={class:"container mx-auto flex flex-col justify-center items-center py-20"},As={class:"xl:text-[30px] mb-5"},Is={class:"font-bold text-xl xl:text-4xl mb-16 xl:mb-5"},Ns={class:"flex flex-col xl:flex-row items-center justify-between mb-10"},Ms={class:"flex flex-col justify-center items-center mx-3 mb-28 xl:mb-[initial]"},Os={class:"flex flex-col xl:flex-row items-center justify-center mb-5 xl:mb-[initial]"},Bs=["src"],Fs={class:"text-center font-bold text-8xl xl:text-[9.5rem]"},zs=["innerHTML"],Es={class:"flex flex-col justify-center items-center mx-3 mb-28 xl:mb-0"},qs={class:"flex flex-col xl:flex-row items-center justify-center mb-5 xl:mb-[initial]"},Ds=["src"],Hs={class:"text-center font-bold text-8xl xl:text-[9.5rem]"},Ps=["innerHTML"],Us={class:"flex flex-col items-center mb-20"},Ys={class:"flex flex-col xl:flex-row items-center xl:mb-10"},Vs=["src"],Xs={class:"text-6xl xl:text-[130px] font-bold mb-3"},Rs={class:"xl:max-w-[750px] text-center"},Ws=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",Ls,[t("div",Ss,[t("p",As,i(e.data.first_title),1),t("p",Is,i(e.data.title),1),t("div",Ns,[t("div",Ms,[t("div",Os,[t("img",{src:e.data.item_left.icon,alt:"icon",class:"mr-4"},null,8,Bs),t("p",Fs,i(e.data.item_left.percent),1)]),t("p",{class:"whitespace-pre-line text-center max-w-[470px] text-xl",innerHTML:e.data.item_left.description},null,8,zs)]),t("div",Es,[t("div",qs,[t("img",{src:e.data.item_right.icon,alt:"icon",class:"mr-4"},null,8,Ds),t("p",Hs,i(e.data.item_right.percent),1)]),t("p",{class:"whitespace-pre-line text-center max-w-[470px] text-xl",innerHTML:e.data.item_right.description},null,8,Ps)])]),t("div",Us,[t("div",Ys,[t("img",{src:e.data.item_bottom.icon,alt:"",class:"mr-3 w-[145px] h-[145px] mb-3 xl:mb-0"},null,8,Vs),t("p",Xs,i(e.data.item_bottom.number),1)]),t("p",Rs,i(e.data.item_bottom.description),1)])])]))}});var Ks="/imgs/icons/close.png";const Gs={class:"w-full h-full fixed left-0 top-0 bg-opacity-30 backdrop-blur bg-white z-[110] p-8 text-black hidden xl:block"},Js={class:"container mx-auto"},Qs={class:"flex items-center justify-start"},Zs={class:"flex flex-col justify-center items-center"},tl=["src"],el={class:"text-center text-4xl font-bold"},sl={class:"text-center whitespace-pre-line overflow-y-auto max-w-[500px]"},ll=x({props:{post:null},emits:["close"],setup(e,{emit:n}){function c(){n("close")}return(s,l)=>(o(),r("div",Gs,[t("div",Js,[t("div",Qs,[t("img",{src:Ks,alt:"",onClick:l[0]||(l[0]=a=>c()),class:"cursor-pointer"})]),t("div",Zs,[t("img",{src:e.post.image,alt:""},null,8,tl),t("p",el,i(e.post.title),1),t("p",sl,i(e.post.full_text),1)])])]))}});const nl=["src"],al={class:"text-2xl mb-3 text-center xl:text-[2rem] font-medium cursor-pointer"},ol={class:"font-medium text-center xl:text-xl cursor-pointer"},cl=x({props:{post:null},setup(e){const n=p(!1);function c(){n.value=!1}return(s,l)=>(o(),r("div",null,[t("div",{onClick:l[0]||(l[0]=a=>n.value=!0)},[t("img",{src:e.post.image,alt:"",class:"w-[400px] h-[230px] rounded-xl object-contain object-center box-shadow-post mb-6 cursor-pointer"},null,8,nl),t("p",al,i(e.post.title),1),t("p",ol,i(e.post.caption),1)]),_(A,{name:"fade"},{default:S(()=>[N(_(ll,{post:e.post,onClose:c},null,8,["post"]),[[P,n.value]])]),_:1})]))}});var G=w(cl,[["__scopeId","data-v-46c3b3c4"]]);const il={class:"bg-[#360b6e]"},rl={class:"container mx-auto flex flex-col justify-center items-center"},dl={class:"text-4xl font-bold text-center my-16"},ul={class:"flex"},xl=x({props:{data:null},setup(e){const n=p(0),c=p("slide-right");function s(){n.value++,n.value>=4&&(n.value=0),c.value="slide-right"}function l(){n.value--,n.value<0&&(n.value=3),c.value="slide-left"}const a=p(0),d=p(0),u=p(0),b=p(0);function v(){u.value<a.value&&s(),u.value>a.value&&l()}function q(C){a.value=C.changedTouches[0].screenX,d.value=C.changedTouches[0].screenY}function J(C){u.value=C.changedTouches[0].screenX,b.value=C.changedTouches[0].screenY,v()}return(C,I)=>(o(),r("div",il,[t("div",rl,[t("p",dl,i(e.data.title),1),t("div",{class:"flex justify-center items-center carousel w-[90%] h-[450px] max-w-[400px]",onTouchstart:I[0]||(I[0]=T=>q(T)),onTouchend:I[1]||(I[1]=T=>J(T))},[(o(!0),r(g,null,$(e.data.posts.slice(0,4),(T,L)=>(o(),k(A,{name:c.value,class:"carousel-slide",key:L},{default:S(()=>[N((o(),k(G,{key:L,post:T,class:"carousel-slider my-4 mx-3"},null,8,["post"])),[[P,n.value===L]])]),_:2},1032,["name"]))),128))],32),t("div",ul,[(o(!0),r(g,null,$(e.data.posts.slice(0,4),(T,L)=>(o(),r("div",{class:y(`h-[10px] w-[10px] ${L===n.value?"bg-[#360b6e]":"bg-[#4abc8c]"} rounded-full mx-2 xl:hidden`)},null,2))),256))])])]))}});var _l=w(xl,[["__scopeId","data-v-4b774632"]]);const fl={class:"bg-[#360b6e]"},pl={class:"container mx-auto flex flex-col justify-center items-center"},ml={class:"text-4xl font-bold text-center my-16"},vl={class:"flex justify-center items-center"},hl=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",fl,[t("div",pl,[t("p",ml,i(e.data.title),1),t("div",vl,[(o(!0),r(g,null,$(e.data.posts.slice(0,4),(s,l)=>(o(),k(G,{key:l,post:s,class:"mx-2"},null,8,["post"]))),128))])])]))}}),bl=x({props:{data:null},setup(e){return(n,c)=>(o(),r("div",null,[_(_l,{data:e.data,class:"xl:hidden"},null,8,["data"]),_(hl,{data:e.data,class:"hidden xl:flex"},null,8,["data"])]))}});const gl={class:"bg-[#360b6e] py-10"},$l={class:"container mx-auto"},wl={class:"text-center text-xl xl:text-4xl font-bold mb-10"},yl={class:"flex flex-col-reverse xl:flex-row items-center justify-center gap-4"},kl={class:"mb-10 xl:mb-[initial]"},jl={class:"xl:text-2xl font-light mb-2 center-txt"},Cl={class:"xl:text-2xl font-bold mb-10 center-txt"},Tl={class:"xl:text-2xl font-light mb-2 center-txt"},Ll={class:"xl:text-2xl font-bold center-txt"},Sl={class:"flex flex-col justify-center xl:mr-16"},Al={class:"xl:text-2xl font-light mb-3 xl:mb-6"},Il={class:"xl:text-2xl font-light mb-3 xl:mb-6"},Nl=x({props:{data:null},setup(e){const n=e,c=p(""),s=p("");function l(){window.open(`mailto:${n.data.keywords.support_mail}?subject=${c.value}&body=${s.value}`,"_blank")}return(a,d)=>(o(),r("div",gl,[t("div",$l,[t("p",wl,i(e.data.title),1),t("div",yl,[t("div",kl,[t("p",jl,i(e.data.keywords.for_any_question),1),t("p",Cl,i(e.data.keywords.support_mail),1),t("p",Tl,i(e.data.keywords.for_business_inq),1),t("p",Ll,i(e.data.keywords.partner_mail),1)]),t("div",Sl,[t("p",Al,i(e.data.keywords.your_email),1),N(t("input",{"onUpdate:modelValue":d[0]||(d[0]=u=>c.value=u),type:"text",class:"text-black min-w-[80vw] xl:min-w-[450px] rounded p-2 xl:p-4 mb-6"},null,512),[[U,c.value]]),t("p",Il,i(e.data.keywords.message),1),N(t("textarea",{"onUpdate:modelValue":d[1]||(d[1]=u=>s.value=u),type:"text",class:"text-black xl:min-w-[450px] min-h-[160px] rounded p-4 mb-6"},null,512),[[U,s.value]]),t("button",{onClick:d[2]||(d[2]=u=>l()),class:"py-4 px-10 w-fit rounded-lg font-bold bg-[#f4ae5a] drop-shadow hover:shadow-lg hover:shadow-[#a60303]/60 transition delay-150 duration-300 ease-in-out"},i(e.data.keywords.send_btn_text),1)])])])]))}});var Ml=w(Nl,[["__scopeId","data-v-2ebebbe7"]]),Ol="/imgs/icons/close-white.png";const Bl={class:"xl:hidden z-[1000] fixed w-screen h-screen bg-[#202020]"},Fl={class:"container mx-auto p-4 flex flex-col items-center h-full justify-between"},zl={class:"flex items-center justify-start w-full"},El={class:"m-2 flex gap-2 bg-slate-100 p-1 rounded-xl text-gray-800"},ql={class:"mb-3"},Dl=["onClick"],Hl=x({props:{data:null},emits:["close"],setup(e,{emit:n}){function c(){n("close")}function s(l,a){window.open(l,a?"_blank":"_self"),c()}return(l,a)=>(o(),r("div",Bl,[t("div",Fl,[t("div",zl,[t("img",{src:Ol,alt:"",onClick:a[0]||(a[0]=d=>c()),class:"cursor-pointer"})]),t("div",El,[t("div",{class:y([{"activeLang text-white":f(m)().langSelected.value=="en"},"px-2 py-1 rounded-xl cursor-pointer"]),onClick:a[1]||(a[1]=d=>f(m)().changeLang("en"))}," EN ",2),t("div",{class:y([{"activeLang text-white":f(m)().langSelected.value=="fa"},"px-2 py-1 rounded-xl cursor-pointer"]),onClick:a[2]||(a[2]=d=>f(m)().changeLang("fa"))}," FA ",2)]),t("div",ql,[(o(!0),r(g,null,$(e.data.navigation_items,(d,u)=>(o(),r("p",{key:u,class:"text-center text-2xl font-bold my-8 cursor-pointer",onClick:b=>s(d.link,d.blank)},i(d.title),9,Dl))),128))])])]))}});var Pl=w(Hl,[["__scopeId","data-v-abbf11f8"]]);const Ul={class:"text-center w-full"},Yl=x({setup(e){const{isToastActive:n,toastText:c,terminateToast:s}=E();return(l,a)=>(o(),k(A,{name:"fade"},{default:S(()=>[f(n)?(o(),r("div",{key:0,class:"fixed bottom-20 bg-white text-black flex items-center min-w-[300px] rounded right-1/2 translate-x-1/2 p-4 shadow-xl cursor-pointer",onClick:a[0]||(a[0]=d=>f(s)())},[t("p",Ul,i(f(c)),1)])):j("",!0)]),_:1}))}});var Vl=w(Yl,[["__scopeId","data-v-63423664"]]);const Xl=["dir"],Rl={class:"min-h-[100vh]"},Wl=x({setup(e){const{isNavMenuActive:n}=Y();let c=p(!1);const s=p(),l=p(),a=p(),d=m().langSelected;return Q(d,async(u,b)=>{u=="en"?h.all([h.get("/data/data_en.json").then(v=>{s.value=v.data}),h.get("/data/posts_en.json").then(v=>{l.value=v.data}),h.get("/data/stats.json").then(v=>{a.value=v.data})]).then(()=>c.value=!0):u=="fa"&&h.all([h.get("/data/data.json").then(v=>{s.value=v.data}),h.get("/data/posts.json").then(v=>{l.value=v.data}),h.get("/data/stats.json").then(v=>{a.value=v.data})])}),d.value=="fa"?h.all([h.get("/data/data.json").then(u=>{s.value=u.data}),h.get("/data/posts.json").then(u=>{l.value=u.data}),h.get("/data/stats.json").then(u=>{a.value=u.data})]).then(()=>c.value=!0):d.value=="en"&&h.all([h.get("/data/data_en.json").then(u=>{s.value=u.data}),h.get("/data/posts_en.json").then(u=>{l.value=u.data}),h.get("/data/stats.json").then(u=>{a.value=u.data})]).then(()=>c.value=!0),H(()=>{window.location.hash&&setTimeout(()=>{console.log("BOOOO",window.location.hash),window.open(window.location.hash,"_self")},500)}),(u,b)=>f(c)?(o(),r("div",{key:0,dir:f(m)().langSelected.value=="fa"?"rtl":"ltr",class:y(["text-white select-none",{"font-roboto":f(m)().langSelected.value=="en","font-vazir":f(m)().langSelected.value=="fa"}])},[_(A,{name:"fade"},{default:S(()=>[f(n)?(o(),k(Pl,{key:0,onClose:b[0]||(b[0]=v=>n.value=!1),data:s.value.navbar},null,8,["data"])):j("",!0)]),_:1}),t("div",Rl,[_(It,{data:s.value.navbar},null,8,["data"]),_($s,{data:s.value.hero,id:"hero"},null,8,["data"]),_(Bt,{data:s.value.underhero_white_strip},null,8,["data"]),_(bl,{class:"mb-20",data:l.value,id:"latestnews"},null,8,["data"]),_(Ts,{class:"mb-20",data:s.value.listed_here,id:"exchanges"},null,8,["data"]),_(Fe,{class:"mb-20",data:s.value.features,id:"targets"},null,8,["data"]),_(rt,{class:"mb-20",data:s.value.values,id:"values"},null,8,["data"]),_(Ws,{class:"mb-20",data:s.value.tokenomics,id:"ourtokenomics"},null,8,["data"]),_(ve,{class:"mb-20",data:s.value.faq.items,id:"faq"},null,8,["data"]),_(Ml,{class:"mb-32",data:s.value.contact,id:"contact"},null,8,["data"]),_(Vl,{class:"z-[100]"})]),_(ce,{data:s.value.footer},null,8,["data"])],10,Xl)):j("",!0)}});var Kl=w(Wl,[["__scopeId","data-v-02c8e33f"]]);const Gl=x({setup(e){return(n,c)=>(o(),k(Kl))}});Z(Gl).mount("#app");