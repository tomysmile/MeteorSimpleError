Package.describe({
  name: 'tomysmile:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.0',
  git: 'https://github.com/tomysmile/MeteorSimpleError.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['tomysmile:errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
  	api.export('Errors');
  
});

Package.onTest(function(api) {
  api.use('tomysmile:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');  
  api.addFiles('tomysmile:errors-tests.js', 'client');
});
