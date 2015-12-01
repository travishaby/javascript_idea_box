require 'simplecov'
SimpleCov.start "rails"

# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'

def parsed_body
  JSON.parse(response.body, symbolize_names: true)
end

def idea1
  Idea.create(title: "title one",
               body: "body one")
end

def idea2
  Idea.create(title: "title two",
               body: "body two",
            quality: 1)
end

def idea3
  Idea.create(title: "title three",
               body: "body three",
            quality: 2)
end

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
end
