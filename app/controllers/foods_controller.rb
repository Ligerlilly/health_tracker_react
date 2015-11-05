class FoodsController < ApplicationController
  def index
    @foods = Food.all
    render json: @foods, only: [:name, :calories]
  end
end
