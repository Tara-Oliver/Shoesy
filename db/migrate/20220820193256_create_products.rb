class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
    t.text :name, null: false
    t.text :description, null: false
    t.integer :seller_id, null: false
    t.float :price, null: false
    t.string :category
    t.integer :quantity
    t.timestamps
    end
    add_index :products, :seller_id
    add_index :products, :name
  end
end
