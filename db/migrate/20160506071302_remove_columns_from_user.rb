class RemoveColumnsFromUser < ActiveRecord::Migration
  def change
  	remove_column :users, :locality, :string
  	remove_column :users, :role, :string
  end
end
