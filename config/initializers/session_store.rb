# Be sure to restart your server when you modify this file.

Rails.application.config.session_store :cookie_store, key: "_#{Rails.application.secrets.namespace}_session"
