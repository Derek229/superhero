class SupersController < ApplicationController
  def index
    supers = Super.all
    render component: 'supers', props: {supers: supers}
    end
    # TODO display a specific super
    def show
      render component: "super"
    end
    

    def new 
      render component: "NewSuperForm"
    end


    def create
      supers = Super.new(super_params)
      if super.save
        redirect_to root_path
      else 
        render component: "NewSuperForm"
    end


    def edit
      render component: "EditSuperForm"
    end

    def destroy
      supers = supers.find(params[:id])
      super.destroy
    end
  end
    private 
    def super_params 
      params.require(:super).permit(:name, :power)
    end
  
  
  end

