class WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all.order(created_at: :desc)
    render json: @workouts, include: { exercise: {only:[:name, :cals_per_hour, :id] } }, only: [:user_id, :duration, :day_id, :id]
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render json: @workout, include: { exercise: {only:[:name, :cals_per_hour] } }, only: [:id, :user_id, :duration, :day_id]
    end
  end

  def destroy
    @workout = Workout.find(workout_params[:id])
    @workout.destroy
    @workouts = Workout.all.order(created_at: :desc)
    render json: @workouts, include: { exercise: {only:[:name, :cals_per_hour, :id] } }, only: [:user_id, :duration, :day_id, :id]

  end

  private
  def workout_params
    params.require(:workout).permit(:user_id, :exercise_id, :id, :duration, :day_id)

  end
end
