class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.integer :exercise_id
      t.integer :user_id
      t.integer :duration
      t.integer :day_id

      t.timestamps null: false
    end
  end
end
