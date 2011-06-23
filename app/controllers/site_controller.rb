class SiteController < ApplicationController
  respond_to :html, :vcf

  def index
    respond_with 
  end
  
  def finished
    @hide_footer = true
  end

end
