$(function(){"use strict";QUnit.module("carousel plugin"),QUnit.test("should be defined on jQuery object",function(i){i.expect(1),i.ok($(document.body).carousel,"carousel method is defined")}),QUnit.module("carousel",{beforeEach:function(){$.fn.bootstrapCarousel=$.fn.carousel.noConflict()},afterEach:function(){$.fn.carousel=$.fn.bootstrapCarousel,delete $.fn.bootstrapCarousel}}),QUnit.test("should provide no conflict",function(i){i.expect(1),i.strictEqual($.fn.carousel,void 0,"carousel was set back to undefined (orig value)")}),QUnit.test("should return jquery collection containing the element",function(i){i.expect(2);var e=$("<div/>"),a=e.bootstrapCarousel();i.ok(a instanceof $,"returns jquery collection"),i.strictEqual(a[0],e[0],"collection contains element")}),QUnit.test("should not fire slid when slide is prevented",function(i){i.expect(1);var e=i.async();$('<div class="carousel"/>').on("slide.bs.carousel",function(a){a.preventDefault(),i.ok(!0,"slide event fired"),e()}).on("slid.bs.carousel",function(){i.ok(!1,"slid event fired")}).bootstrapCarousel("next")}),QUnit.test("should reset when slide is prevented",function(i){i.expect(6);var e='<div id="carousel-example-generic" class="carousel slide"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="item active"><div class="carousel-caption"/></div><div class="item"><div class="carousel-caption"/></div><div class="item"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>',a=$(e),t=i.async();a.one("slide.bs.carousel",function(e){e.preventDefault(),setTimeout(function(){i.ok(a.find(".item:eq(0)").is(".active"),"first item still active"),i.ok(a.find(".carousel-indicators li:eq(0)").is(".active"),"first indicator still active"),a.bootstrapCarousel("next")},0)}).one("slid.bs.carousel",function(){setTimeout(function(){i.ok(!a.find(".item:eq(0)").is(".active"),"first item still active"),i.ok(!a.find(".carousel-indicators li:eq(0)").is(".active"),"first indicator still active"),i.ok(a.find(".item:eq(1)").is(".active"),"second item active"),i.ok(a.find(".carousel-indicators li:eq(1)").is(".active"),"second indicator active"),t()},0)}).bootstrapCarousel("next")}),QUnit.test("should fire slide event with direction",function(i){i.expect(4);var e='<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>',a=$(e),t=i.async();a.one("slide.bs.carousel",function(e){i.ok(e.direction,"direction present on next"),i.strictEqual(e.direction,"left","direction is left on next"),a.one("slide.bs.carousel",function(e){i.ok(e.direction,"direction present on prev"),i.strictEqual(e.direction,"right","direction is right on prev"),t()}).bootstrapCarousel("prev")}).bootstrapCarousel("next")}),QUnit.test("should fire slid event with direction",function(i){i.expect(4);var e='<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>',a=$(e),t=i.async();a.one("slid.bs.carousel",function(e){i.ok(e.direction,"direction present on next"),i.strictEqual(e.direction,"left","direction is left on next"),a.one("slid.bs.carousel",function(e){i.ok(e.direction,"direction present on prev"),i.strictEqual(e.direction,"right","direction is right on prev"),t()}).bootstrapCarousel("prev")}).bootstrapCarousel("next")}),QUnit.test("should fire slide event with relatedTarget",function(i){i.expect(2);var e='<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>',a=i.async();$(e).on("slide.bs.carousel",function(e){i.ok(e.relatedTarget,"relatedTarget present"),i.ok($(e.relatedTarget).hasClass("item"),'relatedTarget has class "item"'),a()}).bootstrapCarousel("next")}),QUnit.test("should fire slid event with relatedTarget",function(i){i.expect(2);var e='<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>',a=i.async();$(e).on("slid.bs.carousel",function(e){i.ok(e.relatedTarget,"relatedTarget present"),i.ok($(e.relatedTarget).hasClass("item"),'relatedTarget has class "item"'),a()}).bootstrapCarousel("next")}),QUnit.test("should set interval from data attribute",function(i){i.expect(4);var e='<div id="myCarousel" class="carousel slide"><div class="carousel-inner"><div class="item active"><img alt=""><div class="carousel-caption"><h4>First Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Second Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div><div class="item"><img alt=""><div class="carousel-caption"><h4>Third Thumbnail label</h4><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a><a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a></div>',a=$(e);a.attr("data-interval",1814),a.appendTo("body"),$("[data-slide]").first().trigger("click"),i.strictEqual(a.data("bs.carousel").options.interval,1814),a.remove(),a.appendTo("body").attr("data-modal","foobar"),$("[data-slide]").first().trigger("click"),i.strictEqual(a.data("bs.carousel").options.interval,1814,"even if there is an data-modal attribute set"),a.remove(),a.appendTo("body"),$("[data-slide]").first().trigger("click"),a.attr("data-interval",1860),$("[data-slide]").first().trigger("click"),i.strictEqual(a.data("bs.carousel").options.interval,1814,"attributes should be read only on initialization"),a.remove(),a.attr("data-interval",!1),a.appendTo("body"),a.bootstrapCarousel(1),i.strictEqual(a.data("bs.carousel").options.interval,!1,"data attribute has higher priority than default options"),a.remove()}),QUnit.test("should skip over non-items when using item indices",function(i){i.expect(2);var e='<div id="myCarousel" class="carousel" data-interval="1814"><div class="carousel-inner"><div class="item active"><img alt=""></div><script type="text/x-metamorph" id="thingy"/><div class="item"><img alt=""></div><div class="item"></div></div></div>',a=$(e);a.bootstrapCarousel(),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item active"),a.bootstrapCarousel(1),i.strictEqual(a.find(".item")[1],a.find(".active")[0],"second item active")}),QUnit.test("should skip over non-items when using next/prev methods",function(i){i.expect(2);var e='<div id="myCarousel" class="carousel" data-interval="1814"><div class="carousel-inner"><div class="item active"><img alt=""></div><script type="text/x-metamorph" id="thingy"/><div class="item"><img alt=""></div><div class="item"></div></div></div>',a=$(e);a.bootstrapCarousel(),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item active"),a.bootstrapCarousel("next"),i.strictEqual(a.find(".item")[1],a.find(".active")[0],"second item active")}),QUnit.test("should go to previous item if left arrow key is pressed",function(i){i.expect(2);var e='<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="item"><img alt=""></div><div id="second" class="item active"><img alt=""></div><div id="third" class="item"><img alt=""></div></div></div>',a=$(e);a.bootstrapCarousel(),i.strictEqual(a.find(".item")[1],a.find(".active")[0],"second item active"),a.trigger($.Event("keydown",{which:37})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item active")}),QUnit.test("should go to next item if right arrow key is pressed",function(i){i.expect(2);var e='<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="item active"><img alt=""></div><div id="second" class="item"><img alt=""></div><div id="third" class="item"><img alt=""></div></div></div>',a=$(e);a.bootstrapCarousel(),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item active"),a.trigger($.Event("keydown",{which:39})),i.strictEqual(a.find(".item")[1],a.find(".active")[0],"second item active")}),QUnit.test("should support disabling the keyboard navigation",function(i){i.expect(3);var e='<div id="myCarousel" class="carousel" data-interval="false" data-keyboard="false"><div class="carousel-inner"><div id="first" class="item active"><img alt=""></div><div id="second" class="item"><img alt=""></div><div id="third" class="item"><img alt=""></div></div></div>',a=$(e);a.bootstrapCarousel(),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item active"),a.trigger($.Event("keydown",{which:39})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item still active after right arrow press"),a.trigger($.Event("keydown",{which:37})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item still active after left arrow press")}),QUnit.test("should ignore keyboard events within <input>s and <textarea>s",function(i){i.expect(7);var e='<div id="myCarousel" class="carousel" data-interval="false"><div class="carousel-inner"><div id="first" class="item active"><img alt=""><input type="text" id="in-put"><textarea id="text-area"></textarea></div><div id="second" class="item"><img alt=""></div><div id="third" class="item"><img alt=""></div></div></div>',a=$(e),t=a.find("#in-put"),s=a.find("#text-area");i.strictEqual(t.length,1,"found <input>"),i.strictEqual(s.length,1,"found <textarea>"),a.bootstrapCarousel(),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item active"),t.trigger($.Event("keydown",{which:39})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item still active after right arrow press in <input>"),t.trigger($.Event("keydown",{which:37})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item still active after left arrow press in <input>"),s.trigger($.Event("keydown",{which:39})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item still active after right arrow press in <textarea>"),s.trigger($.Event("keydown",{which:37})),i.strictEqual(a.find(".item")[0],a.find(".active")[0],"first item still active after left arrow press in <textarea>")}),QUnit.test("should only add mouseenter and mouseleave listeners when not on mobile",function(i){i.expect(2);var e="ontouchstart"in document.documentElement,a='<div id="myCarousel" class="carousel" data-interval="false" data-pause="hover"><div class="carousel-inner"><div id="first" class="item active"><img alt=""></div><div id="second" class="item"><img alt=""></div><div id="third" class="item"><img alt=""></div></div></div>',t=$(a).bootstrapCarousel();$.each(["mouseover","mouseout"],function(a,s){i.strictEqual(s in $._data(t[0],"events"),!e,"does"+(e?" not":"")+" listen for "+s+" events")})}),QUnit.test("should wrap around from end to start when wrap option is true",function(i){i.expect(3);var e='<div id="carousel-example-generic" class="carousel slide" data-wrap="true"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="item active" id="one"><div class="carousel-caption"/></div><div class="item" id="two"><div class="carousel-caption"/></div><div class="item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>',a=$(e),t=function(){return a.find(".item.active").attr("id")},s=i.async();a.one("slid.bs.carousel",function(){i.strictEqual(t(),"two","carousel slid from 1st to 2nd slide"),a.one("slid.bs.carousel",function(){i.strictEqual(t(),"three","carousel slid from 2nd to 3rd slide"),a.one("slid.bs.carousel",function(){i.strictEqual(t(),"one","carousel wrapped around and slid from 3rd to 1st slide"),s()}).bootstrapCarousel("next")}).bootstrapCarousel("next")}).bootstrapCarousel("next")}),QUnit.test("should wrap around from start to end when wrap option is true",function(i){i.expect(1);var e='<div id="carousel-example-generic" class="carousel slide" data-wrap="true"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="item active" id="one"><div class="carousel-caption"/></div><div class="item" id="two"><div class="carousel-caption"/></div><div class="item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>',a=$(e),t=i.async();a.on("slid.bs.carousel",function(){i.strictEqual(a.find(".item.active").attr("id"),"three","carousel wrapped around and slid from 1st to 3rd slide"),t()}).bootstrapCarousel("prev")}),QUnit.test("should stay at the end when the next method is called and wrap is false",function(i){i.expect(3);var e='<div id="carousel-example-generic" class="carousel slide" data-wrap="false"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="item active" id="one"><div class="carousel-caption"/></div><div class="item" id="two"><div class="carousel-caption"/></div><div class="item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>',a=$(e),t=function(){return a.find(".item.active").attr("id")},s=i.async();a.one("slid.bs.carousel",function(){i.strictEqual(t(),"two","carousel slid from 1st to 2nd slide"),a.one("slid.bs.carousel",function(){i.strictEqual(t(),"three","carousel slid from 2nd to 3rd slide"),a.one("slid.bs.carousel",function(){i.ok(!1,"carousel slid when it should not have slid")}).bootstrapCarousel("next"),i.strictEqual(t(),"three","carousel did not wrap around and stayed on 3rd slide"),s()}).bootstrapCarousel("next")}).bootstrapCarousel("next")}),QUnit.test("should stay at the start when the prev method is called and wrap is false",function(i){i.expect(1);var e='<div id="carousel-example-generic" class="carousel slide" data-wrap="false"><ol class="carousel-indicators"><li data-target="#carousel-example-generic" data-slide-to="0" class="active"/><li data-target="#carousel-example-generic" data-slide-to="1"/><li data-target="#carousel-example-generic" data-slide-to="2"/></ol><div class="carousel-inner"><div class="item active" id="one"><div class="carousel-caption"/></div><div class="item" id="two"><div class="carousel-caption"/></div><div class="item" id="three"><div class="carousel-caption"/></div></div><a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"/><a class="right carousel-control" href="#carousel-example-generic" data-slide="next"/></div>',a=$(e);a.on("slid.bs.carousel",function(){i.ok(!1,"carousel slid when it should not have slid")}).bootstrapCarousel("prev"),i.strictEqual(a.find(".item.active").attr("id"),"one","carousel did not wrap around and stayed on 1st slide")})});