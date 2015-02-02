namespace :db do
  desc 'Erase and fill database'
  task :populate => :environment do
    [Song].each(&:delete_all)

    password = 'password'
    Song.populate 50 do |song|
      song.soundcloud_id = Faker::Number.number(6)
      song.title = Faker::Lorem.words(4..5)
      song.user_name = Faker::Internet.user_name
      song.stream_url = Faker::Internet.url
      song.duration = Faker::Number.number(6)
      song.created_at = Faker::Time.between(10.days.ago, Time.now)
    end
  end
end