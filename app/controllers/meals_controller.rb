class MealsController < ApplicationController
  def index
    @meals = Meal.all.order(created_at: :desc)
    render json: @meals, include: {food: {only: [:name, :calories] } }, only: [:user_id, :food_id, :day_id, :id]
  end
  def create
    @meal = Meal.new(meal_params)
    @meal.save
    render json: @meal, include: {food: {only: [:name, :calories] } }, only: [:user_id, :food_id, :day_id, :id]
  end

  def destroy
    @meal = Meal.find(meal_params[:id])
    @meal.destroy
    @meals = Meal.all.order(created_at: :desc)
    render json: @meals, include: {food: {only: [:name, :calories] } }, only: [:user_id, :food_id, :day_id, :id]
  end

  private
  def meal_params
    params.require(:meal).permit(:food_id, :user_id, :day_id, :id)

  end
end
