$(function(){"use strict";QUnit.module("button plugin"),QUnit.test("should be defined on jquery object",function(t){t.expect(1),t.ok($(document.body).button,"button method is defined")}),QUnit.module("button",{beforeEach:function(){$.fn.bootstrapButton=$.fn.button.noConflict()},afterEach:function(){$.fn.button=$.fn.bootstrapButton,delete $.fn.bootstrapButton}}),QUnit.test("should provide no conflict",function(t){t.expect(1),t.strictEqual($.fn.button,void 0,"button was set back to undefined (org value)")}),QUnit.test("should return jquery collection containing the element",function(t){t.expect(2);var e=$("<div/>"),a=e.bootstrapButton();t.ok(a instanceof $,"returns jquery collection"),t.strictEqual(a[0],e[0],"collection contains element")}),QUnit.test("should return set state to loading",function(t){t.expect(4);var e=$('<button class="btn" data-loading-text="fat">mdo</button>');t.strictEqual(e.html(),"mdo","btn text equals mdo"),e.bootstrapButton("loading");var a=t.async();setTimeout(function(){t.strictEqual(e.html(),"fat","btn text equals fat"),t.ok(e[0].hasAttribute("disabled"),"btn is disabled"),t.ok(e.hasClass("disabled"),"btn has disabled class"),a()},0)}),QUnit.test("should return reset state",function(t){t.expect(7);var e=$('<button class="btn" data-loading-text="fat">mdo</button>');t.strictEqual(e.html(),"mdo","btn text equals mdo"),e.bootstrapButton("loading");var a=t.async();setTimeout(function(){t.strictEqual(e.html(),"fat","btn text equals fat"),t.ok(e[0].hasAttribute("disabled"),"btn is disabled"),t.ok(e.hasClass("disabled"),"btn has disabled class"),a();var s=t.async();e.bootstrapButton("reset"),setTimeout(function(){t.strictEqual(e.html(),"mdo","btn text equals mdo"),t.ok(!e[0].hasAttribute("disabled"),"btn is not disabled"),t.ok(!e.hasClass("disabled"),"btn does not have disabled class"),s()},0)},0)}),QUnit.test("should work with an empty string as reset state",function(t){t.expect(7);var e=$('<button class="btn" data-loading-text="fat"/>');t.strictEqual(e.html(),"",'btn text equals ""'),e.bootstrapButton("loading");var a=t.async();setTimeout(function(){t.strictEqual(e.html(),"fat","btn text equals fat"),t.ok(e[0].hasAttribute("disabled"),"btn is disabled"),t.ok(e.hasClass("disabled"),"btn has disabled class"),a();var s=t.async();e.bootstrapButton("reset"),setTimeout(function(){t.strictEqual(e.html(),"",'btn text equals ""'),t.ok(!e[0].hasAttribute("disabled"),"btn is not disabled"),t.ok(!e.hasClass("disabled"),"btn does not have disabled class"),s()},0)},0)}),QUnit.test("should toggle active",function(t){t.expect(2);var e=$('<button class="btn" data-toggle="button">mdo</button>');t.ok(!e.hasClass("active"),"btn does not have active class"),e.bootstrapButton("toggle"),t.ok(e.hasClass("active"),"btn has class active")}),QUnit.test("should toggle active when btn children are clicked",function(t){t.expect(2);var e=$('<button class="btn" data-toggle="button">mdo</button>'),a=$("<i/>");e.append(a).appendTo("#qunit-fixture"),t.ok(!e.hasClass("active"),"btn does not have active class"),a.trigger("click"),t.ok(e.hasClass("active"),"btn has class active")}),QUnit.test("should toggle aria-pressed",function(t){t.expect(2);var e=$('<button class="btn" data-toggle="button" aria-pressed="false">redux</button>');t.strictEqual(e.attr("aria-pressed"),"false","btn aria-pressed state is false"),e.bootstrapButton("toggle"),t.strictEqual(e.attr("aria-pressed"),"true","btn aria-pressed state is true")}),QUnit.test("should toggle aria-pressed when btn children are clicked",function(t){t.expect(2);var e=$('<button class="btn" data-toggle="button" aria-pressed="false">redux</button>'),a=$("<i/>");e.append(a).appendTo("#qunit-fixture"),t.strictEqual(e.attr("aria-pressed"),"false","btn aria-pressed state is false"),a.trigger("click"),t.strictEqual(e.attr("aria-pressed"),"true","btn aria-pressed state is true")}),QUnit.test("should check for closest matching toggle",function(t){t.expect(12);var e='<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="radio" name="options" id="option1" checked="true"> Option 1</label><label class="btn btn-primary"><input type="radio" name="options" id="option2"> Option 2</label><label class="btn btn-primary"><input type="radio" name="options" id="option3"> Option 3</label></div>',a=$(e).appendTo("#qunit-fixture"),s=a.children().eq(0),n=a.children().eq(1);t.ok(s.hasClass("active"),"btn1 has active class"),t.ok(s.find("input").prop("checked"),"btn1 is checked"),t.ok(!n.hasClass("active"),"btn2 does not have active class"),t.ok(!n.find("input").prop("checked"),"btn2 is not checked"),n.find("input").trigger("click"),t.ok(!s.hasClass("active"),"btn1 does not have active class"),t.ok(!s.find("input").prop("checked"),"btn1 is not checked"),t.ok(n.hasClass("active"),"btn2 has active class"),t.ok(n.find("input").prop("checked"),"btn2 is checked"),n.find("input").trigger("click"),t.ok(!s.hasClass("active"),"btn1 does not have active class"),t.ok(!s.find("input").prop("checked"),"btn1 is not checked"),t.ok(n.hasClass("active"),"btn2 has active class"),t.ok(n.find("input").prop("checked"),"btn2 is checked")})});