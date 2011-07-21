Pmw::Application.routes.draw do
  # For STS135 launch 20110720
  get "/shuttle/" => 'site#shuttle'
  get "/shuttle/video/" => 'site#shuttle_video'

  get "site/index"
  get "paulmwatson.vcf" => 'site#index', :format => :vcf
  get "vcard" => 'site#index', :format => :vcf
  
  # Finished the internet for Mark Little 20110701
  match '/finished/' => 'site#finished'

  root :to => 'site#index'
end
