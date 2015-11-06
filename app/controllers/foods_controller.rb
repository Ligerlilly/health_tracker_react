class FoodsController < ApplicationController
  def index
    @foods = Food.all
    render json: @foods, only: [:name, :calories, :id]
  end


  private
  def food_params
    params.require(:food).permit(:name, :calories)
  end
end
