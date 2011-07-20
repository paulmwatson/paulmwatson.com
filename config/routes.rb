Pmw::Application.routes.draw do
  get "/shuttle/" => 'site#shuttle'
  get "/shuttle/video/" => 'site#shuttle_video'
  get "projects/index"

  get "photos" => 'photos#index'
  
  get "litest" => 'site#linkedin'

  get "site/index"
  get "paulmwatson.vcf" => 'site#index', :format => :vcf
  get "vcard" => 'site#index', :format => :vcf
  
  match '/finished/' => 'site#finished'

  root :to => 'site#index'
end
