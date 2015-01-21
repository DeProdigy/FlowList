class CreateSongsTable < ActiveRecord::Migration
  def up
    create_table :songs do |t|
      t.integer :soundcloud_id
      t.string :title
      t.string :user_name
      t.string :stream_url
      t.integer :duration

      t.timestamps
    end
  end
end