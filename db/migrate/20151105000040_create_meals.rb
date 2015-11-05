class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.integer :food_id
      t.integer :user_id
      t.integer :day_id

      t.timestamps null: false
    end
  end
end
