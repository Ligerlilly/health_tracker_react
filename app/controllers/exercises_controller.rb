class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
    render json: @exercises, only: [:name, :cals_per_hour, :id]
  end
end
