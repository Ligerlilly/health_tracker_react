# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
foods = [
  ["banana", 105],
  ["chicken", 275],
  ["soda", 140],
  ["almonds", 105],
  ["tea", 0],
  ["potato chips", 200],
  ["rice", 175]
]

exercises = [
  ["running", 100],
  ["biking", 75],
  ["climbing", 50],
  ["ping pong", 25]
]


foods.each do |a, b|

  Food.create!(
    name: a,
    calories: b
  )

end

exercises.each do |a, b|
  Exercise.create!(
    name: a,
    cals_per_hour: b
  )

end
