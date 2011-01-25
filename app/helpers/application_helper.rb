module ApplicationHelper
  def asset_host
    'http://' + Rails.configuration.action_controller.asset_host if Rails.configuration.action_controller.asset_host
  end
end
