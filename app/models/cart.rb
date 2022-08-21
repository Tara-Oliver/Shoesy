class Cart < ApplicationRecord
    has_many :carts,
        foreign_key: :buyer_id,
        class_name: :Cart

    has_many :products,
        foreign_key: :product_id,
        class_name: :Product
end