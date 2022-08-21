class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
       t.integer :product_id, null: false
      t.integer :buyer_id, null: false
      t.integer :quantity, null: false
      t.integer :size, null: false
      t.timestamps
    end
    add_index :cart_items, :product_id
    add_index :cart_items, :buyer_id
  end
end
