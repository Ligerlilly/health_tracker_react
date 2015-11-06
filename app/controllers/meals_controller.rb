class MealsController < ApplicationController
  def create
    binding.pry
    @meal = Meal.new(meal_params)
  end

  private
  def meal_params
    params.require(:meal).permit(:food_id, user_id: 1, day_id: 1)

  end
end
