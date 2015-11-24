define('wildflower/tests/adapters/budget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/budget.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/budget.js should pass jshint.');
  });
});
define('wildflower/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('wildflower/tests/components/wf-budget/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/wf-budget');
  QUnit.test('components/wf-budget/component.js should pass jshint', function (assert) {
    assert.ok(true, 'components/wf-budget/component.js should pass jshint.');
  });
});
define('wildflower/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('wildflower/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('wildflower/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'wildflower/tests/helpers/start-app', 'wildflower/tests/helpers/destroy-app'], function (exports, _qunit, _wildflowerTestsHelpersStartApp, _wildflowerTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _wildflowerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _wildflowerTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('wildflower/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('wildflower/tests/helpers/resolver', ['exports', 'ember/resolver', 'wildflower/config/environment'], function (exports, _emberResolver, _wildflowerConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _wildflowerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _wildflowerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('wildflower/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('wildflower/tests/helpers/start-app', ['exports', 'ember', 'wildflower/app', 'wildflower/config/environment'], function (exports, _ember, _wildflowerApp, _wildflowerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _wildflowerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _wildflowerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('wildflower/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('wildflower/tests/models/budget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/budget.js should pass jshint', function (assert) {
    assert.ok(true, 'models/budget.js should pass jshint.');
  });
});
define('wildflower/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('wildflower/tests/routes/budget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/budget.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/budget.js should pass jshint.');
  });
});
define('wildflower/tests/services/blob-store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/blob-store.js should pass jshint', function (assert) {
    assert.ok(true, 'services/blob-store.js should pass jshint.');
  });
});
define('wildflower/tests/services/dom-parser.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/dom-parser.js should pass jshint', function (assert) {
    assert.ok(true, 'services/dom-parser.js should pass jshint.');
  });
});
define('wildflower/tests/test-helper', ['exports', 'wildflower/tests/helpers/resolver', 'ember-qunit'], function (exports, _wildflowerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_wildflowerTestsHelpersResolver['default']);
});
define('wildflower/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('wildflower/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map