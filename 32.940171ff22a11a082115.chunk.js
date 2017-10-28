webpackJsonp([32],{"0QB0":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-duration',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationDurationComponent implements OnInit {\n  createBasicNotification = () => {\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed', {nzDuration: 0});\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"6nys":function(l,n,u){"use strict";function t(l){return d._44(0,[(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createBasicNotification()&&t}return t},C.b,C.a)),d._18(2,1097728,null,0,y.a,[d.o,d.O],{nzType:[0,"nzType"]},null),(l()(),d._42(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),d._42(-1,null,["\n  "]))],function(l,n){l(n,2,0,"primary")},null)}function i(l){return d._44(0,[(l()(),d._20(0,0,null,null,1,"nz-demo-notification-basic",[],null,null,null,t,x)),d._18(1,114688,null,0,v,[I.a],null,null)],function(l,n){l(n,1,0)},null)}function o(l){return d._44(0,[(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("success")&&t}return t},C.b,C.a)),d._18(2,1097728,null,0,y.a,[d.o,d.O],null,null),(l()(),d._42(-1,0,["\u6210 \u529f"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(5,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,6)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("info")&&t}return t},C.b,C.a)),d._18(6,1097728,null,0,y.a,[d.o,d.O],null,null),(l()(),d._42(-1,0,["\u6d88 \u606f"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(9,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,10)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("warning")&&t}return t},C.b,C.a)),d._18(10,1097728,null,0,y.a,[d.o,d.O],null,null),(l()(),d._42(-1,0,["\u8b66 \u544a"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(13,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,14)._onClick()&&t}if("click"===n){t=!1!==i.createNotification("error")&&t}return t},C.b,C.a)),d._18(14,1097728,null,0,y.a,[d.o,d.O],null,null),(l()(),d._42(-1,0,["\u9519 \u8bef"])),(l()(),d._42(-1,null,["\n"]))],null,null)}function _(l){return d._44(0,[(l()(),d._20(0,0,null,null,1,"nz-demo-notification-icon",[],null,null,null,o,B)),d._18(1,114688,null,0,S,[I.a],null,null)],function(l,n){l(n,1,0)},null)}function a(l){return d._44(0,[(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createBasicNotification()&&t}return t},C.b,C.a)),d._18(2,1097728,null,0,y.a,[d.o,d.O],{nzType:[0,"nzType"]},null),(l()(),d._42(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),d._42(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function c(l){return d._44(0,[(l()(),d._20(0,0,null,null,1,"nz-demo-notification-duration",[],null,null,null,a,M)),d._18(1,114688,null,0,j,[I.a],null,null)],function(l,n){l(n,1,0)},null)}function e(l){return d._44(0,[(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==d._34(l,2)._onClick()&&t}if("click"===n){t=!1!==i.createBasicNotification()&&t}return t},C.b,C.a)),d._18(2,1097728,null,0,y.a,[d.o,d.O],{nzType:[0,"nzType"]},null),(l()(),d._42(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),d._42(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}function r(l){return d._44(0,[(l()(),d._20(0,0,null,null,1,"nz-demo-notification-html",[],null,null,null,e,w)),d._18(1,114688,null,0,H,[I.a],null,null)],function(l,n){l(n,1,0)},null)}function f(l){return d._44(0,[(l()(),d._20(0,0,null,null,401,"article",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n\n  "])),(l()(),d._20(2,0,null,null,67,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),d._42(-1,null,["Notification \u901a\u77e5\u63d0\u9192\u6846"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(7,0,null,null,57,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),d._20(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(11,0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),d._20(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(15,0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),d._42(-1,null,["#"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5728\u7cfb\u7edf\u53f3\u4e0a\u89d2\u663e\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\u7ecf\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(22,0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(24,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),d._20(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u8f83\u4e3a\u590d\u6742\u7684\u901a\u77e5\u5185\u5bb9\u3002"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(28,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),d._20(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5e26\u6709\u4ea4\u4e92\u7684\u901a\u77e5\uff0c\u7ed9\u51fa\u7528\u6237\u4e0b\u4e00\u6b65\u7684\u884c\u52a8\u70b9\u3002"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(32,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),d._20(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u3002"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(37,0,null,null,3,"h2",[["id","\u5982\u4f55\u4f7f\u7528"]],null,null,null,null,null)),(l()(),d._20(38,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(42,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u4e0eMessage\u7c7b\u4f3c\uff0c\u5982\u679c\u8981\u4fee\u6539message\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u63d0\u4f9b\u5546"])),(l()(),d._20(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["NZ_NOTIFICATION_CONFIG"])),(l()(),d._42(-1,null,["\u7684\u503c\u6765\u4fee\u6539\u3002\n      "])),(l()(),d._20(47,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\uff08\u5982\uff1a\u5728\u4f60\u7684\u6a21\u5757\u7684providers\u4e2d\u52a0\u5165 "])),(l()(),d._20(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(50,null,[""," provide: NZ_NOTIFICATION_CONFIG, useValue: "," nzDuration: 3000 "," ",""])),(l()(),d._42(-1,null,["\uff0c"])),(l()(),d._20(52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["NZ_NOTIFICATION_CONFIG"])),(l()(),d._42(-1,null,["\u53ef\u4ee5\u4ece"])),(l()(),d._20(55,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["ng-zorro-antd"])),(l()(),d._42(-1,null,["\u5bfc\u5165\uff09"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u9ed8\u8ba4\u914d\u7f6e\u4e3a"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(62,0,null,null,1,"pre",[["style","font-size:12px;"]],null,null,null,null,null)),(l()(),d._42(63,null,[" ","\n    nzTop                  : '24px',\n    nzRight                : '0px',\n    nzDuration             : 4500,\n    nzMaxStack             : 7,\n    nzPauseOnHover         : true,\n    nzAnimate              : true\n ",""])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._42(-1,null,["\n\n    "])),(l()(),d._20(66,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),d._20(68,0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n  "])),(l()(),d._42(-1,null,["\n\n  "])),(l()(),d._20(71,0,null,null,68,"div",[["nz-row",""]],null,null,null,z.b,z.a)),d._18(72,114688,null,0,b.a,[d.o,d.O],{nzGutter:[0,"nzGutter"]},null),(l()(),d._42(-1,0,["\n    "])),(l()(),d._20(74,0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),d._18(75,606208,null,0,N.a,[d.o,[2,b.a],d.O],{nzSpan:[0,"nzSpan"]},null),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(77,0,null,null,11,"nz-code-box",[["id","components-notification-demo-basic"]],null,null,null,g.b,g.a)),d._18(78,114688,null,0,h.a,[O.d,d.o],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(80,0,null,0,1,"nz-demo-notification-basic",[["demo",""]],null,null,null,t,x)),d._18(81,114688,null,0,v,[I.a],null,null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(83,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(85,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(90,0,null,null,11,"nz-code-box",[["id","components-notification-demo-icon"]],null,null,null,g.b,g.a)),d._18(91,114688,null,0,h.a,[O.d,d.o],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(93,0,null,0,1,"nz-demo-notification-icon",[["demo",""]],null,null,null,o,B)),d._18(94,114688,null,0,S,[I.a],null,null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(96,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(98,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._42(-1,0,["\n    "])),(l()(),d._20(104,0,null,0,34,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),d._18(105,606208,null,0,N.a,[d.o,[2,b.a],d.O],{nzSpan:[0,"nzSpan"]},null),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(107,0,null,null,17,"nz-code-box",[["id","components-notification-demo-duration"]],null,null,null,g.b,g.a)),d._18(108,114688,null,0,h.a,[O.d,d.o],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(110,0,null,0,1,"nz-demo-notification-duration",[["demo",""]],null,null,null,a,M)),d._18(111,114688,null,0,j,[I.a],null,null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(113,0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(115,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4"])),(l()(),d._20(117,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["4.5s"])),(l()(),d._42(-1,null,["\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a "])),(l()(),d._20(120,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["0"])),(l()(),d._42(-1,null,[" \u5373\u53ef\u3002"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(126,0,null,null,11,"nz-code-box",[["id","components-notification-demo-html"]],null,null,null,g.b,g.a)),d._18(127,114688,null,0,h.a,[O.d,d.o],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(129,0,null,0,1,"nz-demo-notification-html",[["demo",""]],null,null,null,e,w)),d._18(130,114688,null,0,H,[I.a],null,null),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(132,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(134,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML\uff0c\u6ce8\u610f\u9632\u6b62XSS"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._42(-1,0,["\n  "])),(l()(),d._42(-1,null,["\n  "])),(l()(),d._20(141,0,null,null,259,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(143,0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),d._20(144,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d._42(-1,null,["API"])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(149,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),d._20(150,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5168\u5c40\u914d\u7f6e\uff08NZ_NOTIFICATION_CONFIG\uff09"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(153,0,null,null,112,"table",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(155,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(157,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(159,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u53c2\u6570"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(162,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u7c7b\u578b"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(165,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(168,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u8bf4\u660e"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(173,0,null,null,91,"tbody",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(175,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(177,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzTop"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(180,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["String"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(183,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["24px"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u9876\u90e8\u8ddd\u79bb"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(190,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(192,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzRight"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["String"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["0px"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(201,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u53f3\u4fa7\u8ddd\u79bb"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(205,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(207,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzDuration"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(210,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["Number"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(213,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["0"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(216,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u6301\u7eed\u65f6\u95f4,\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(220,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(222,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzMaxStack"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(225,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["Number"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(228,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["8"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(231,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u63d0\u793a\u6700\u5927\u5806\u53e0\u6570"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(235,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(237,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzPauseOnHover"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(240,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["bool"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(243,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["true"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(246,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u60ac\u505c\u65f6\u505c\u6b62\u5012\u8ba1\u65f6\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(250,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(252,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzAnimate"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(255,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["bool"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(258,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["true"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(261,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5f00\u5173\u52a8\u753b\u6548\u679c\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(267,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),d._20(268,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d._42(-1,null,["NzNotificationService\u670d\u52a1"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(271,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u63d0\u793a\uff1a\u4ee5\u4e0boptions\u53c2\u6570\u652f\u6301\u5168\u5c40\u914d\u7f6e\u4e2d\u7684 "])),(l()(),d._20(273,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["nzDuration/nzAnimate/nzPauseOnHover"])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._20(276,0,null,null,123,"table",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(278,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(280,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(282,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u65b9\u6cd5"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(285,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u53c2\u6570"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(288,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u8bf4\u660e"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._20(293,0,null,null,105,"tbody",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(295,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(297,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["blank"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(300,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(301,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(304,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u4e0d\u5e26\u56fe\u6807\u7684\u63d0\u793a"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(308,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(310,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["success"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(313,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(314,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(317,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u6210\u529f\u63d0\u793a"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(321,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(323,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["error"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(326,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(327,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(330,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u5931\u8d25\u63d0\u793a"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(334,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(336,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["warning"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(339,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(340,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(343,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u8b66\u544a\u63d0\u793a"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(347,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(349,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["info"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(352,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(353,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(356,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u4fe1\u606f\u63d0\u793a"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(360,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(362,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["create"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(365,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(366,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(type: string, title: string, content: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(369,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u63d0\u4f9btype\u5c5e\u6027\uff0c\u53ef\u4f20\u5165'success'\u7b49\u9009\u9879"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(373,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(375,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["html"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(378,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(379,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(html: string, options?: Object)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(382,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u53ef\u4f7f\u7528html\u4ee3\u7801\u6765\u6e32\u67d3\u5185\u5bb9"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._20(386,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(388,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["remove"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(391,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),d._20(392,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),d._42(-1,null,["(id?: string)"])),(l()(),d._42(-1,null,["\n          "])),(l()(),d._20(395,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),d._42(-1,null,["\u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f"])),(l()(),d._42(-1,null,["\n        "])),(l()(),d._42(-1,null,["\n      "])),(l()(),d._42(-1,null,["\n    "])),(l()(),d._42(-1,null,["\n  "])),(l()(),d._42(-1,null,["\n"])),(l()(),d._42(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,72,0,8);l(n,75,0,12);l(n,78,0,"\u57fa\u672c",u.NzDemoNotificationBasicCode),l(n,81,0);l(n,91,0,"\u5e26\u6709icon\u7684\u901a\u77e5\u63d0\u9192\u6846",u.NzDemoNotificationIconCode),l(n,94,0);l(n,105,0,12);l(n,108,0,"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6",u.NzDemoNotificationDurationCode),l(n,111,0);l(n,127,0,"\u81ea\u5b9a\u4e49",u.NzDemoNotificationHtmlCode),l(n,130,0)},function(l,n){l(n,50,0,"{","{","}","}");l(n,63,0,"{","}"),l(n,74,0,d._34(n,75).paddingLeft,d._34(n,75).paddingRight),l(n,104,0,d._34(n,105).paddingLeft,d._34(n,105).paddingRight)})}function s(l){return d._44(0,[(l()(),d._20(0,0,null,null,1,"nz-demo-notification",[],null,null,null,f,L)),d._18(1,114688,null,0,F,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var d=u("/oeL"),p=function(){function l(){}return l}(),m=["#components-notification-demo-icon .ant-btn{margin-right:1em}"],z=u("AQI4"),b=u("QJaU"),N=u("HzDP"),g=u("xfRN"),h=u("d0SC"),O=u("qbdv"),k=u("01zq"),v=function(){function l(l){this._notification=l}return l.prototype.ngOnInit=function(){},l.prototype.createBasicNotification=function(){this._notification.blank("\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")},l.ctorParameters=function(){return[{type:k.e}]},l}(),C=u("PoiU"),y=u("yojp"),I=u("COMP"),T=[],x=d._17({encapsulation:2,styles:T,data:{}}),S=(d._15("nz-demo-notification-basic",v,i,{},{},[]),function(){function l(l){var n=this;this._notification=l,this.createNotification=function(l){n._notification.create(l,"\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:k.e}]},l}()),D=[],B=d._17({encapsulation:2,styles:D,data:{}}),j=(d._15("nz-demo-notification-icon",S,_,{},{},[]),function(){function l(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.blank("\u8fd9\u662f\u6807\u9898","\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed",{nzDuration:0})}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:k.e}]},l}()),P=[],M=d._17({encapsulation:2,styles:P,data:{}}),H=(d._15("nz-demo-notification-duration",j,c,{},{},[]),function(){function l(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.html("<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>")}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:k.e}]},l}()),A=[],w=d._17({encapsulation:2,styles:A,data:{}}),F=(d._15("nz-demo-notification-html",H,r,{},{},[]),function(){function l(){this.NzDemoNotificationBasicCode=u("p/LX"),this.NzDemoNotificationDurationCode=u("0QB0"),this.NzDemoNotificationIconCode=u("ZpxX"),this.NzDemoNotificationHtmlCode=u("TagL")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),G=[m],L=d._17({encapsulation:2,styles:G,data:{}}),R=d._15("nz-demo-notification",F,s,{},{},[]),Z=u("gNns"),q=u("VMe7"),Q=u("ZjYu"),V=u("BRsn"),X=u("1w55"),K=u("tdcY"),U=u("NarQ"),J=u("7rz8"),Y=u("PqOC"),W=u("md/V"),E=u("bm2B"),$=u("V8+5"),ll=u("4jwp"),nl=u("OFGE"),ul=u("7bMD"),tl=u("71yQ"),il=u("jhj7"),ol=u("ppgG"),_l=u("4FjH"),al=u("hNpP"),cl=u("fc+i"),el=u("f42N"),rl=u("BkNc"),fl=function(){function l(){}return l}(),sl=u("jlvU"),dl=u("AKwh"),pl=u("LTvz"),ml=u("v3Ml"),zl=u("KvRT"),bl=u("fFfs"),Nl=u("CZgk"),gl=u("ICnb"),hl=u("nQgM"),Ol=u("AMM9"),kl=u("x9cu"),vl=u("Abwc"),Cl=u("Gb4R"),yl=u("ATGq"),Il=u("rMvC"),Tl=u("PIhm"),xl=u("G5xS"),Sl=u("tGoV"),Dl=u("Bd7q"),Bl=u("+dpF"),jl=u("t6og"),Pl=u("0oag"),Ml=u("0MmT"),Hl=u("0SjK"),Al=u("UWIb"),wl=u("FP9i"),Fl=u("8zAG"),Gl=u("OtIO"),Ll=u("V5qy"),Rl=u("BGFw"),Zl=u("qa79"),ql=u("DJ6J"),Ql=u("A6WS"),Vl=u("nGV/"),Xl=u("4I7f"),Kl=u("LLhl"),Ul=u("+35O"),Jl=u("TRYS"),Yl=u("NGUZ"),Wl=u("Hjq/"),El=u("Cjk6"),$l=u("6eTp"),ln=u("pORy"),nn=u("aQzP"),un=u("LpTC"),tn=u("YeNB"),on=u("x7DS"),_n=u("//KT"),an=u("Pgvs"),cn=u("ZgIK"),en=u("mXNq"),rn=u("mQB5"),fn=u("9rok");u.d(n,"NzDemoNotificationModuleNgFactory",function(){return sn});var sn=d._16(p,[],function(l){return d._31([d._32(512,d.l,d._11,[[8,[R,Z.a,q.a,Q.a,V.a,X.a,K.a,U.a]],[3,d.l],d.F]),d._32(4608,O.n,O.m,[d.B]),d._32(5120,J.b,J.a,[[3,J.b],J.c]),d._32(5120,Y.b,Y.a,[[3,Y.b],W.a,J.b]),d._32(4608,E.u,E.u,[]),d._32(4608,$.a,$.a,[]),d._32(5120,ll.c,ll.a,[[3,ll.c],d.H,$.a]),d._32(5120,ll.f,ll.e,[[3,ll.f],$.a,d.H,ll.c]),d._32(4608,nl.f,nl.f,[ll.c,ll.f]),d._32(5120,nl.c,nl.g,[[3,nl.c]]),d._32(4608,nl.j,nl.j,[ll.f]),d._32(4608,nl.b,nl.b,[nl.f,nl.c,d.l,nl.j,d.g,d.x,d.H]),d._32(5120,nl.h,nl.i,[nl.b]),d._32(4608,ul.a,ul.a,[]),d._32(4608,tl.a,tl.a,[d.g,d.l,Y.b]),d._32(4608,il.a,il.a,[]),d._32(4608,ol.a,ol.a,[]),d._32(4608,_l.a,_l.a,[]),d._32(5120,d.d,function(l,n){return[al.b(l,n)]},[cl.b,[2,al.a]]),d._32(5120,el.a,el.b,[cl.b,[3,el.a]]),d._32(512,rl.o,rl.o,[[2,rl.t],[2,rl.l]]),d._32(512,fl,fl,[]),d._32(512,O.c,O.c,[]),d._32(512,sl.a,sl.a,[]),d._32(512,dl.a,dl.a,[]),d._32(512,pl.a,pl.a,[]),d._32(512,ml.a,ml.a,[]),d._32(512,zl.a,zl.a,[]),d._32(512,bl.a,bl.a,[]),d._32(512,E.s,E.s,[]),d._32(512,E.i,E.i,[]),d._32(512,Nl.c,Nl.c,[]),d._32(512,$.b,$.b,[]),d._32(512,ll.b,ll.b,[]),d._32(512,nl.d,nl.d,[]),d._32(512,gl.a,gl.a,[]),d._32(512,hl.a,hl.a,[]),d._32(512,Ol.a,Ol.a,[]),d._32(512,kl.a,kl.a,[]),d._32(512,vl.a,vl.a,[]),d._32(512,Cl.a,Cl.a,[]),d._32(512,yl.a,yl.a,[]),d._32(512,Il.a,Il.a,[]),d._32(512,Tl.a,Tl.a,[]),d._32(512,xl.a,xl.a,[]),d._32(512,Sl.a,Sl.a,[]),d._32(512,Dl.a,Dl.a,[]),d._32(512,Bl.a,Bl.a,[]),d._32(512,jl.a,jl.a,[]),d._32(512,Pl.a,Pl.a,[]),d._32(512,Ml.a,Ml.a,[]),d._32(512,Hl.a,Hl.a,[]),d._32(512,Al.a,Al.a,[]),d._32(512,wl.a,wl.a,[]),d._32(512,Fl.a,Fl.a,[]),d._32(512,Gl.a,Gl.a,[]),d._32(512,Ll.a,Ll.a,[]),d._32(512,Rl.a,Rl.a,[]),d._32(512,Zl.a,Zl.a,[]),d._32(512,ql.a,ql.a,[]),d._32(512,ol.c,ol.c,[]),d._32(512,Ql.a,Ql.a,[]),d._32(512,Vl.a,Vl.a,[]),d._32(512,Xl.a,Xl.a,[]),d._32(512,Kl.a,Kl.a,[]),d._32(512,Ul.a,Ul.a,[]),d._32(512,Jl.a,Jl.a,[]),d._32(512,Yl.a,Yl.a,[]),d._32(131584,Wl.a,Wl.a,[cl.b,d.x,d.l]),d._32(512,El.a,El.a,[]),d._32(512,$l.a,$l.a,[]),d._32(512,ln.a,ln.a,[]),d._32(512,nn.a,nn.a,[]),d._32(512,un.a,un.a,[]),d._32(512,tn.a,tn.a,[]),d._32(512,on.a,on.a,[]),d._32(512,_n.a,_n.a,[]),d._32(512,an.a,an.a,[]),d._32(512,cn.a,cn.a,[]),d._32(512,p,p,[]),d._32(1024,rl.j,function(){return[[{path:"",component:F}]]},[]),d._32(256,J.c,!1,[]),d._32(256,W.a,en.b,[]),d._32(256,rn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),d._32(256,fn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},TagL:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-html',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationHtmlComponent implements OnInit {\n  createBasicNotification = () => {\n    this._notification.html('<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>');\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},ZpxX:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-icon',\n  template  : `\n    <button nz-button (click)=\"createNotification('success')\">\u6210 \u529f</button>\n    <button nz-button (click)=\"createNotification('info')\">\u6d88 \u606f</button>\n    <button nz-button (click)=\"createNotification('warning')\">\u8b66 \u544a</button>\n    <button nz-button (click)=\"createNotification('error')\">\u9519 \u8bef</button>\n`,\n  styles    : []\n})\nexport class NzDemoNotificationIconComponent implements OnInit {\n  createNotification = (type) => {\n    this._notification.create(type, '\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\n  };\n  constructor(private _notification: NzNotificationService) {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"p/LX":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\nimport {NzNotificationService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-notification-basic',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\n  `,\n  styles    : []\n})\nexport class NzDemoNotificationBasicComponent implements OnInit {\n\n  constructor(private _notification: NzNotificationService) { }\n\n  ngOnInit() { }\n\n  createBasicNotification() {\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\n  }\n}\n\n"}});