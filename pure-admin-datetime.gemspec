$:.push File.expand_path('../lib', __FILE__)

require 'pure_admin/rails/datetime/version'

Gem::Specification.new do |s|
  s.name        = 'pure-admin-rails-datetime'
  s.version     = PureAdmin::Rails::Datetime::VERSION
  s.authors     = ['Tobyn Dockerill']
  s.email       = ['tobyn@mindvision.com.au']
  s.homepage    = ''
  s.summary     = 'An datetime input using rome.js and the rome-rails gem.'
  s.license     = 'MIT'

  s.files = Dir['{app,config,db,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  s.add_dependency 'pure-admin-rails'
  s.add_dependency 'rails'
  s.add_dependency 'jquery-rails'
  s.add_dependency 'rome-rails'

  s.add_development_dependency 'sqlite3'
end
