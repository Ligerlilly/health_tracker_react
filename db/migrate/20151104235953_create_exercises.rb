class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :cals_per_hour

      t.timestamps null: false
    end
  end
end
