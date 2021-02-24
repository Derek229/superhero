class SupersController < ApplicationController
  def index
    supers = Super.all
    render component: 'supers', props: {supers: supers}
    end
end
