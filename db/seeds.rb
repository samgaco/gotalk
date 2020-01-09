# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

40.times do 
    Teacher.create(
        name: Faker::Name.first_name,
        language: Faker::Nation.language,
        rate: rand(1...35),
        description: Faker::Lorem.paragraphs(number: 1)
    )
end