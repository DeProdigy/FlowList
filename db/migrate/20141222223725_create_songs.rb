class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :user_name
      t.string :stream_url

      t.timestamps
    end
  end
end
