# README

A personal website by Paul M. Watson <paul@paulmwatson.com>.

## Ruby version

*  2.3.1

## System dependencies

* Ruby
* PostgreSQL

See Gemfile

## Configuration

1. Set ```NAMESPACE``` environment variable e.g. ```NAMESPACE=paulmwatsondotcom```
2. Set ```SECRET_KEY_BASE``` environment variable

## Database creation

1. ```rake db:create```

2. ```rake db:migrate```

## Database initialization

None.

## How to run the test suite

```rake test```

## Services (job queues, cache servers, search engines, etc.)

None.

## Deployment instructions

```git push heroku master```
