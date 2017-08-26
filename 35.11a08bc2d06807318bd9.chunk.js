webpackJsonp([35],{"8BDE":function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'nz-demo-carousel-fade',\n  template: `\n    <nz-carousel [nzEffect]=\"'fade'\">\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselFadeComponent implements OnInit {\n  array = [];\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(_ => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"},M1oM:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-carousel-vertical',\n  template: `\n    <nz-carousel [nzVertical]=\"true\">\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselVerticalComponent implements OnInit {\n  array = [ 1, 2, 3 ]; // try dynamic change the array\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(() => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"},P8w0:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-carousel-basic',\n  template: `\n    <nz-carousel>\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselBasicComponent implements OnInit {\n  array = [ 1, 2, 3 ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(_ => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"},Ygb9:function(l,n,u){"use strict";function t(l){return y._47(0,[(l()(),y._23(0,null,null,4,"li",[],[[2,"slick-active",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.setActive(l.context.$implicit,l.context.index)&&t}return t},null,null)),(l()(),y._45(null,["\n          "])),(l()(),y._23(0,null,null,1,"button",[],null,null,null,null,null)),(l()(),y._45(null,["1"])),(l()(),y._45(null,["\n        "]))],null,function(l,n){l(n,0,0,n.context.$implicit.isActive)})}function e(l){return y._47(0,[(l()(),y._23(0,null,null,4,"ul",[["class","slick-dots"],["style","display: block;"]],null,null,null,null,null)),(l()(),y._45(null,["\n        "])),(l()(),y._17(16777216,null,null,1,null,t)),y._21(802816,null,0,C.k,[y._5,y._0,y.C],{ngForOf:[0,"ngForOf"]},null),(l()(),y._45(null,["\n      "]))],function(l,n){l(n,3,0,n.component.slideContents)},null)}function o(l){return y._47(0,[y._43(402653184,1,{slickList:0}),y._43(402653184,2,{slickTrack:0}),(l()(),y._45(null,["\n    "])),(l()(),y._23(0,null,null,12,"div",[["class","slick-initialized slick-slider"]],[[2,"slick-vertical",null]],null,null,null,null)),(l()(),y._45(null,["\n      "])),(l()(),y._23(0,[[1,0],["slickList",1]],null,6,"div",[["class","slick-list"]],null,null,null,null,null)),(l()(),y._45(null,["\n        "])),(l()(),y._23(0,[[2,0],["slickTrack",1]],null,3,"div",[["class","slick-track"],["style","opacity: 1;"]],[[4,"transform",null]],null,null,null,null)),(l()(),y._45(null,["\n          "])),y._36(null,0),(l()(),y._45(null,["\n        "])),(l()(),y._45(null,["\n      "])),(l()(),y._45(null,["\n      "])),(l()(),y._17(16777216,null,null,1,null,e)),y._21(16384,null,0,C.l,[y._5,y._0],{ngIf:[0,"ngIf"]},null),(l()(),y._45(null,["\n    "]))],function(l,n){l(n,14,0,n.component.nzDots)},function(l,n){var u=n.component;l(n,3,0,u.nzVertical),l(n,7,0,u.transform)})}function a(l){return y._47(0,[(l()(),y._23(0,null,null,2,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,w)),y._21(4374528,null,1,O.a,[y.r,y.R],null,null),y._43(603979776,1,{_slideContents:1})],null,function(l,n){l(n,0,0,y._37(n,1).nzVertical,y._37(n,1)._nzCarousel)})}function i(l){return T._47(0,[(l()(),T._23(0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),T._21(16384,[[1,4]],0,D.a,[T.r],null,null),(l()(),T._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),T._45(null,["",""]))],null,function(l,n){l(n,0,0,T._37(n,1)._nzSlickSlide,T._37(n,1).setActiveClass,T._37(n,1).setWidth,T._37(n,1).setLeft,T._37(n,1).setTop,T._37(n,1).setPosition,T._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function c(l){return T._47(0,[(l()(),T._45(null,["\n    "])),(l()(),T._23(0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,w)),T._21(4374528,null,1,A.a,[T.r,T.R],null,null),T._43(603979776,1,{_slideContents:1}),(l()(),T._45(0,["\n      "])),(l()(),T._17(16777216,null,0,1,null,i)),T._21(802816,null,0,L.k,[T._5,T._0,T.C],{ngForOf:[0,"ngForOf"]},null),(l()(),T._45(0,["\n    "]))],function(l,n){l(n,6,0,n.component.array)},function(l,n){l(n,1,0,T._37(n,2).nzVertical,T._37(n,2)._nzCarousel)})}function r(l){return T._47(0,[(l()(),T._23(0,null,null,1,"nz-demo-carousel-basic",[],null,null,null,c,N)),T._21(114688,null,0,I,[],null,null)],function(l,n){l(n,1,0)},null)}function s(l){return V._47(0,[(l()(),V._23(0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),V._21(16384,[[1,4]],0,B.a,[V.r],null,null),(l()(),V._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),V._45(null,["",""]))],null,function(l,n){l(n,0,0,V._37(n,1)._nzSlickSlide,V._37(n,1).setActiveClass,V._37(n,1).setWidth,V._37(n,1).setLeft,V._37(n,1).setTop,V._37(n,1).setPosition,V._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function _(l){return V._47(0,[(l()(),V._45(null,["\n    "])),(l()(),V._23(0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,w)),V._21(4374528,null,1,M.a,[V.r,V.R],{nzEffect:[0,"nzEffect"]},null),V._43(603979776,1,{_slideContents:1}),(l()(),V._45(0,["\n      "])),(l()(),V._17(16777216,null,0,1,null,s)),V._21(802816,null,0,R.k,[V._5,V._0,V.C],{ngForOf:[0,"ngForOf"]},null),(l()(),V._45(0,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,"fade"),l(n,6,0,u.array)},function(l,n){l(n,1,0,V._37(n,2).nzVertical,V._37(n,2)._nzCarousel)})}function d(l){return V._47(0,[(l()(),V._23(0,null,null,1,"nz-demo-carousel-fade",[],null,null,null,_,W)),V._21(114688,null,0,S,[],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return q._47(0,[(l()(),q._23(0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),q._21(16384,[[1,4]],0,j.a,[q.r],null,null),(l()(),q._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),q._45(null,["",""]))],null,function(l,n){l(n,0,0,q._37(n,1)._nzSlickSlide,q._37(n,1).setActiveClass,q._37(n,1).setWidth,q._37(n,1).setLeft,q._37(n,1).setTop,q._37(n,1).setPosition,q._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function f(l){return q._47(0,[(l()(),q._45(null,["\n    "])),(l()(),q._23(0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,w)),q._21(4374528,null,1,K.a,[q.r,q.R],{nzVertical:[0,"nzVertical"]},null),q._43(603979776,1,{_slideContents:1}),(l()(),q._45(0,["\n      "])),(l()(),q._17(16777216,null,0,1,null,p)),q._21(802816,null,0,Q.k,[q._5,q._0,q.C],{ngForOf:[0,"ngForOf"]},null),(l()(),q._45(0,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,!0),l(n,6,0,u.array)},function(l,n){l(n,1,0,q._37(n,2).nzVertical,q._37(n,2)._nzCarousel)})}function h(l){return q._47(0,[(l()(),q._23(0,null,null,1,"nz-demo-carousel-vertical",[],null,null,null,f,Z)),q._21(114688,null,0,J,[],null,null)],function(l,n){l(n,1,0)},null)}function k(l){return U._47(0,[(l()(),U._23(0,null,null,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),U._21(16384,[[1,4]],0,$.a,[U.r],null,null),(l()(),U._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),U._45(null,["",""]))],null,function(l,n){l(n,0,0,U._37(n,1)._nzSlickSlide,U._37(n,1).setActiveClass,U._37(n,1).setWidth,U._37(n,1).setLeft,U._37(n,1).setTop,U._37(n,1).setPosition,U._37(n,1).setOpacity),l(n,3,0,n.context.$implicit)})}function g(l){return U._47(0,[(l()(),U._45(null,["\n    "])),(l()(),U._23(0,null,null,6,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,w)),U._21(4374528,null,1,G.a,[U.r,U.R],{nzAutoPlay:[0,"nzAutoPlay"]},null),U._43(603979776,1,{_slideContents:1}),(l()(),U._45(0,["\n      "])),(l()(),U._17(16777216,null,0,1,null,k)),U._21(802816,null,0,X.k,[U._5,U._0,U.C],{ngForOf:[0,"ngForOf"]},null),(l()(),U._45(0,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,!0),l(n,6,0,u.array)},function(l,n){l(n,1,0,U._37(n,2).nzVertical,U._37(n,2)._nzCarousel)})}function z(l){return U._47(0,[(l()(),U._23(0,null,null,1,"nz-demo-carousel-auto",[],null,null,null,g,nl)),U._21(114688,null,0,H,[],null,null)],function(l,n){l(n,1,0)},null)}function m(l){return tl._47(0,[(l()(),tl._23(0,null,null,210,"article",[],null,null,null,null,null)),(l()(),tl._45(null,["\n  "])),(l()(),tl._23(0,null,null,35,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),tl._45(null,["Carousel \u8d70\u9a6c\u706f"])),(l()(),tl._45(null,["\n    "])),(l()(),tl._23(0,null,null,26,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u65cb\u8f6c\u6728\u9a6c\uff0c\u4e00\u7ec4\u8f6e\u64ad\u7684\u533a\u57df\u3002"])),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),tl._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),tl._45(null,["#"])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5f53\u6709\u4e00\u7ec4\u5e73\u7ea7\u7684\u5185\u5bb9\u3002"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5f53\u5185\u5bb9\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u7528\u8d70\u9a6c\u706f\u7684\u5f62\u5f0f\u8fdb\u884c\u6536\u7eb3\uff0c\u8fdb\u884c\u8f6e\u64ad\u5c55\u73b0\u3002"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5e38\u7528\u4e8e\u4e00\u7ec4\u56fe\u7247\u6216\u5361\u7247\u8f6e\u64ad\u3002"])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._23(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),tl._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),tl._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),tl._45(null,["\n  "])),(l()(),tl._45(null,["\n  "])),(l()(),tl._23(0,null,null,62,"div",[["nz-row",""]],null,null,null,el.b,el.a)),tl._21(114688,null,0,ol.a,[tl.r,tl.R],{nzGutter:[0,"nzGutter"]},null),(l()(),tl._45(0,["\n    "])),(l()(),tl._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),tl._21(606208,null,0,al.a,[tl.r,[2,ol.a],tl.R],{nzSpan:[0,"nzSpan"]},null),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-basic"]],null,null,null,il.b,il.a)),tl._21(114688,null,0,cl.a,[rl.c,tl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,0,1,"nz-demo-carousel-basic",[["demo",""]],null,null,null,c,N)),tl._21(114688,null,0,I,[],null,null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-fade"]],null,null,null,il.b,il.a)),tl._21(114688,null,0,cl.a,[rl.c,tl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,0,1,"nz-demo-carousel-fade",[["demo",""]],null,null,null,_,W)),tl._21(114688,null,0,S,[],null,null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5207\u6362\u6548\u679c\u4e3a\u6e10\u663e\u3002"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._45(0,["\n    "])),(l()(),tl._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),tl._21(606208,null,0,al.a,[tl.r,[2,ol.a],tl.R],{nzSpan:[0,"nzSpan"]},null),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-vertical"]],null,null,null,il.b,il.a)),tl._21(114688,null,0,cl.a,[rl.c,tl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,0,1,"nz-demo-carousel-vertical",[["demo",""]],null,null,null,f,Z)),tl._21(114688,null,0,J,[],null,null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5782\u76f4\u663e\u793a\u3002"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-auto"]],null,null,null,il.b,il.a)),tl._21(114688,null,0,cl.a,[rl.c,tl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,0,1,"nz-demo-carousel-auto",[["demo",""]],null,null,null,g,nl)),tl._21(114688,null,0,H,[],null,null),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5b9a\u65f6\u5207\u6362\u4e0b\u4e00\u5f20\u3002"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._45(0,["\n  "])),(l()(),tl._45(null,["\n  "])),(l()(),tl._23(0,null,null,106,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),tl._45(null,["\n    "])),(l()(),tl._23(0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),tl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),tl._45(null,["API"])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._23(0,null,null,97,"table",[],null,null,null,null,null)),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),tl._45(null,["\u53c2\u6570"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),tl._45(null,["\u8bf4\u660e"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),tl._45(null,["\u7c7b\u578b"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),tl._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._23(0,null,null,76,"tbody",[],null,null,null,null,null)),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["[nz-carousel-content]"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["\u7528\u4e8e\u6807\u8bc6\u6eda\u52a8\u7684slide\u5185\u5bb9"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["Directive"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["-"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["nzEffect"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["\u52a8\u753b\u6548\u679c\u51fd\u6570\uff0c\u53ef\u53d6 scrollx, fade"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["String"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["scrollx"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["nzDots"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["Boolean"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["true"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["nzVertical"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["\u5782\u76f4\u663e\u793a"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["Boolean"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["false"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n        "])),(l()(),tl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["nzAutoPlay"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["\u662f\u5426\u81ea\u52a8\u5207\u6362"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["Boolean"])),(l()(),tl._45(null,["\n          "])),(l()(),tl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),tl._45(null,["false"])),(l()(),tl._45(null,["\n        "])),(l()(),tl._45(null,["\n      "])),(l()(),tl._45(null,["\n    "])),(l()(),tl._45(null,["\n  "])),(l()(),tl._45(null,["\n"])),(l()(),tl._45(null,["\n"]))],function(l,n){var u=n.component;l(n,40,0,8);l(n,43,0,12);l(n,46,0,"\u57fa\u672c",u.NzDemoCarouselBasicCode),l(n,49,0);l(n,59,0,"\u6e10\u73b0",u.NzDemoCarouselFadeCode),l(n,62,0);l(n,73,0,12);l(n,76,0,"\u5782\u76f4",u.NzDemoCarouselVerticalCode),l(n,79,0);l(n,89,0,"\u81ea\u52a8\u5207\u6362",u.NzDemoCarouselAutoCode),l(n,92,0)},function(l,n){l(n,42,0,tl._37(n,43).paddingLeft,tl._37(n,43).paddingRight),l(n,72,0,tl._37(n,73).paddingLeft,tl._37(n,73).paddingRight)})}function x(l){return tl._47(0,[(l()(),tl._23(0,null,null,1,"nz-demo-carousel",[],null,null,null,m,_l)),tl._21(114688,null,0,ul,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var v=function(){function l(){}return l}(),b=[""],y=u("/oeL"),C=u("qbdv"),O=u("zrLl"),P=['\n\n\n.ant-carousel .slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.ant-carousel .slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.ant-carousel .slick-list:focus {\n  outline: none;\n}\n.ant-carousel .slick-list.dragging {\n  cursor: pointer;\n}\n.ant-carousel .slick-slider .slick-track,\n.ant-carousel .slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n.ant-carousel .slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n}\n.ant-carousel .slick-track:before,\n.ant-carousel .slick-track:after {\n  content: "";\n  display: table;\n}\n.ant-carousel .slick-track:after {\n  clear: both;\n}\n.slick-loading .ant-carousel .slick-track {\n  visibility: hidden;\n}\n.ant-carousel .slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir="rtl"] .ant-carousel .slick-slide {\n  float: right;\n}\n.ant-carousel .slick-slide img {\n  display: block;\n}\n.ant-carousel .slick-slide.slick-loading img {\n  display: none;\n}\n.ant-carousel .slick-slide.dragging img {\n  pointer-events: none;\n}\n.ant-carousel .slick-initialized .slick-slide {\n  display: block;\n}\n.ant-carousel .slick-loading .slick-slide {\n  visibility: hidden;\n}\n.ant-carousel .slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.ant-carousel .slick-arrow.slick-hidden {\n  display: none;\n}\n.ant-carousel .slick-prev,\n.ant-carousel .slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0;\n  font-size: 0;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  margin-top: -10px;\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.ant-carousel .slick-prev:hover,\n.ant-carousel .slick-next:hover,\n.ant-carousel .slick-prev:focus,\n.ant-carousel .slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.ant-carousel .slick-prev:hover:before,\n.ant-carousel .slick-next:hover:before,\n.ant-carousel .slick-prev:focus:before,\n.ant-carousel .slick-next:focus:before {\n  opacity: 1;\n}\n.ant-carousel .slick-prev.slick-disabled:before,\n.ant-carousel .slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.ant-carousel .slick-prev {\n  left: -25px;\n}\n.ant-carousel .slick-prev:before {\n  content: "\u2190";\n}\n.ant-carousel .slick-next {\n  right: -25px;\n}\n.ant-carousel .slick-next:before {\n  content: "\u2192";\n}\n.ant-carousel .slick-dots {\n  position: absolute;\n  bottom: 12px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n}\n.ant-carousel .slick-dots li {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  margin: 0 2px;\n  padding: 0;\n}\n.ant-carousel .slick-dots li button {\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  opacity: 0.3;\n  display: block;\n  width: 16px;\n  height: 3px;\n  border-radius: 1px;\n  outline: none;\n  font-size: 0;\n  color: transparent;\n  transition: all .5s;\n}\n.ant-carousel .slick-dots li button:hover,\n.ant-carousel .slick-dots li button:focus {\n  opacity: 0.75;\n}\n.ant-carousel .slick-dots li.slick-active button {\n  background: #fff;\n  opacity: 1;\n  width: 24px;\n}\n.ant-carousel .slick-dots li.slick-active button:hover,\n.ant-carousel .slick-dots li.slick-active button:focus {\n  opacity: 1;\n}\n.ant-carousel-vertical .slick-dots {\n  width: 3px;\n  bottom: auto;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: auto;\n}\n.ant-carousel-vertical .slick-dots li {\n  margin: 0 2px;\n  vertical-align: baseline;\n}\n.ant-carousel-vertical .slick-dots li button {\n  width: 3px;\n  height: 16px;\n}\n.ant-carousel-vertical .slick-dots li.slick-active button {\n  width: 3px;\n  height: 24px;\n}\n',"nz-carousel {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nnz-carousel .slick-track {\n  transition: all 0.5s ease;\n}\nnz-carousel .slick-track .slick-slide {\n  transition: opacity 500ms ease;\n}\n"],w=y._20({encapsulation:2,styles:P,data:{}}),I=(y._18("nz-carousel",O.a,a,{nzAutoPlay:"nzAutoPlay",nzDots:"nzDots",nzEffect:"nzEffect",nzVertical:"nzVertical"},{},["*"]),function(){function l(){this.array=[1,2,3]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(n){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),T=u("/oeL"),D=u("WLQe"),A=u("zrLl"),L=u("qbdv"),F=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],N=T._20({encapsulation:0,styles:F,data:{}}),S=(T._18("nz-demo-carousel-basic",I,r,{},{},[]),function(){function l(){this.array=[]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(n){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),V=u("/oeL"),B=u("WLQe"),M=u("zrLl"),R=u("qbdv"),E=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],W=V._20({encapsulation:0,styles:E,data:{}}),J=(V._18("nz-demo-carousel-fade",S,d,{},{},[]),function(){function l(){this.array=[1,2,3]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),q=u("/oeL"),j=u("WLQe"),K=u("zrLl"),Q=u("qbdv"),Y=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],Z=q._20({encapsulation:0,styles:Y,data:{}}),H=(q._18("nz-demo-carousel-vertical",J,h,{},{},[]),function(){function l(){this.array=[1]}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(n){l.array=[1,2,3,4]},500)},l.ctorParameters=function(){return[]},l}()),U=u("/oeL"),$=u("WLQe"),G=u("zrLl"),X=u("qbdv"),ll=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],nl=U._20({encapsulation:0,styles:ll,data:{}}),ul=(U._18("nz-demo-carousel-auto",H,z,{},{},[]),function(){function l(){this.NzDemoCarouselBasicCode=u("P8w0"),this.NzDemoCarouselVerticalCode=u("M1oM"),this.NzDemoCarouselFadeCode=u("8BDE"),this.NzDemoCarouselAutoCode=u("tgBx")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),tl=u("/oeL"),el=u("TOSB"),ol=u("9f15"),al=u("FYfR"),il=u("xfRN"),cl=u("d0SC"),rl=u("qbdv"),sl=[b],_l=tl._20({encapsulation:2,styles:sl,data:{}}),dl=tl._18("nz-demo-carousel",ul,x,{},{},[]),pl=function(){function l(){}return l}();u.d(n,"NzDemoCarouselModuleNgFactory",function(){return Rn});var fl=u("/oeL"),hl=u("FkWa"),kl=u("yrl+"),gl=u("55J3"),zl=u("n6um"),ml=u("iaO7"),xl=u("FxM8"),vl=u("nl5C"),bl=u("qbdv"),yl=u("bm2B"),Cl=u("p4Sk"),Ol=u("KWHd"),Pl=u("ofc2"),wl=u("Ep+3"),Il=u("oe3n"),Tl=u("gRBx"),Dl=u("8aH3"),Al=u("BIYD"),Ll=u("+n5j"),Fl=u("syUv"),Nl=u("sQGE"),Sl=u("hJM2"),Vl=u("Ywbb"),Bl=u("k0gn"),Ml=u("fc+i"),Rl=u("tSZc"),El=u("Z7s/"),Wl=u("PWwA"),Jl=u("PAVX"),ql=u("K8P4"),jl=u("R9WC"),Kl=u("ljTE"),Ql=u("ZPRV"),Yl=u("xrsb"),Zl=u("g6N7"),Hl=u("Hmg1"),Ul=u("NnGW"),$l=u("JY8U"),Gl=u("VfTQ"),Xl=u("Vy3b"),ln=u("nbGD"),nn=u("E+t3"),un=u("JOWY"),tn=u("83Ua"),en=u("XyJX"),on=u("Ao/f"),an=u("kX/R"),cn=u("54Is"),rn=u("N5El"),sn=u("2+5N"),_n=u("9fxl"),dn=u("RNwh"),pn=u("4IKa"),fn=u("/grC"),hn=u("XDe+"),kn=u("nP2T"),gn=u("aWIB"),zn=u("T2co"),mn=u("QUju"),xn=u("DcAm"),vn=u("BJRZ"),bn=u("4BBw"),yn=u("/Fr5"),Cn=u("PbkE"),On=u("xECq"),Pn=u("/CDc"),wn=u("hKjL"),In=u("h617"),Tn=u("NHZy"),Dn=u("J3CU"),An=u("9+J6"),Ln=u("VSSZ"),Fn=u("shv5"),Nn=u("BkNc"),Sn=u("jlvU"),Vn=u("ZgIK"),Bn=u("IJb3"),Mn=u("MgJ2"),Rn=fl._19(v,[],function(l){return fl._34([fl._35(512,fl.n,fl._15,[[8,[hl.a,kl.a,gl.a,zl.a,ml.a,xl.a,vl.a,dl]],[3,fl.n],fl.I]),fl._35(4608,bl.n,bl.m,[fl.E]),fl._35(4608,yl.u,yl.u,[]),fl._35(4608,Cl.l,Cl.l,[]),fl._35(5120,Ol.c,Ol.b,[[3,Ol.c],fl.K,Cl.l]),fl._35(5120,Pl.c,Pl.b,[[3,Pl.c],Ol.c]),fl._35(4608,wl.a,wl.a,[Ol.c,Pl.c]),fl._35(5120,Il.c,Il.b,[[3,Il.c]]),fl._35(4608,Tl.a,Tl.a,[Pl.c]),fl._35(4608,Dl.a,Dl.a,[wl.a,Il.c,fl.n,Tl.a,fl.g,fl.A,fl.K]),fl._35(5120,Al.c,Al.b,[Dl.a,bl.c,[3,Al.c]]),fl._35(4608,Ll.a,Ll.a,[]),fl._35(4608,Fl.a,Fl.a,[fl.g,fl.n]),fl._35(4608,Nl.a,Nl.a,[]),fl._35(4608,Cl.i,Cl.i,[]),fl._35(4608,Sl.a,Sl.a,[]),fl._35(5120,fl.d,function(l,n){return[Vl.b(l,n)]},[bl.c,[2,Vl.a]]),fl._35(5120,Bl.a,Bl.c,[Ml.b,[3,Bl.a]]),fl._35(512,bl.b,bl.b,[]),fl._35(512,Rl.a,Rl.a,[]),fl._35(512,El.a,El.a,[]),fl._35(512,Wl.a,Wl.a,[]),fl._35(512,yl.s,yl.s,[]),fl._35(512,yl.i,yl.i,[]),fl._35(512,Cl.m,Cl.m,[]),fl._35(512,Jl.a,Jl.a,[]),fl._35(512,ql.d,ql.d,[]),fl._35(512,jl.a,jl.a,[]),fl._35(512,Kl.a,Kl.a,[]),fl._35(512,Ql.a,Ql.a,[]),fl._35(512,Yl.a,Yl.a,[]),fl._35(512,Zl.a,Zl.a,[]),fl._35(512,Hl.a,Hl.a,[]),fl._35(512,Ul.a,Ul.a,[]),fl._35(512,$l.a,$l.a,[]),fl._35(512,Gl.a,Gl.a,[]),fl._35(512,Xl.a,Xl.a,[]),fl._35(512,ln.a,ln.a,[]),fl._35(512,nn.a,nn.a,[]),fl._35(512,un.a,un.a,[]),fl._35(512,tn.a,tn.a,[]),fl._35(512,en.a,en.a,[]),fl._35(512,on.a,on.a,[]),fl._35(512,an.a,an.a,[]),fl._35(512,cn.a,cn.a,[]),fl._35(512,rn.a,rn.a,[]),fl._35(512,sn.a,sn.a,[]),fl._35(512,_n.a,_n.a,[]),fl._35(512,dn.a,dn.a,[]),fl._35(512,pn.a,pn.a,[]),fl._35(512,fn.a,fn.a,[]),fl._35(512,hn.a,hn.a,[]),fl._35(512,kn.a,kn.a,[]),fl._35(512,Cl.n,Cl.n,[]),fl._35(512,Cl.k,Cl.k,[]),fl._35(512,gn.a,gn.a,[]),fl._35(512,zn.a,zn.a,[]),fl._35(512,mn.a,mn.a,[]),fl._35(512,xn.a,xn.a,[]),fl._35(512,vn.a,vn.a,[]),fl._35(512,bn.a,bn.a,[]),fl._35(512,yn.a,yn.a,[]),fl._35(131584,Cn.a,Cn.a,[bl.c,fl.A,fl.n]),fl._35(512,On.a,On.a,[]),fl._35(512,Pn.a,Pn.a,[]),fl._35(512,wn.a,wn.a,[]),fl._35(512,In.a,In.a,[]),fl._35(512,Tn.a,Tn.a,[]),fl._35(512,Dn.a,Dn.a,[]),fl._35(512,An.a,An.a,[]),fl._35(512,Ln.a,Ln.a,[]),fl._35(512,Fn.a,Fn.a,[]),fl._35(512,Nn.o,Nn.o,[[2,Nn.t],[2,Nn.l]]),fl._35(512,pl,pl,[]),fl._35(512,Sn.a,Sn.a,[]),fl._35(512,Vn.a,Vn.a,[]),fl._35(512,v,v,[]),fl._35(256,Bn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),fl._35(256,Mn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),fl._35(1024,Nn.j,function(){return[[{path:"",component:ul}]]},[])])})},tgBx:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-carousel-auto',\n  template: `\n    <nz-carousel [nzAutoPlay]=\"true\">\n      <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselAutoComponent implements OnInit {\n  array = [ 1 ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    setTimeout(_ => {\n      this.array = [ 1, 2, 3, 4 ];\n    }, 500)\n  }\n}\n"}});