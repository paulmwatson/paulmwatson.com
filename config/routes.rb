Pmw::Application.routes.draw do
  get "/shuttle/" => 'site#shuttle'
  get "projects/index"

  get "photos" => 'photos#index'

  get "site/index"
  get "paulmwatson.vcf" => 'site#index', :format => :vcf
  get "vcard" => 'site#index', :format => :vcf
  
  match '/finished/' => 'site#finished'

  root :to => 'site#index'
end
