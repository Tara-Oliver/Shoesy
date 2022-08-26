class CartItem < ApplicationRecord
    validates :product_id, :buyer_id, presence: true

    belongs_to :buyer,
        foreign_key: :buyer_id,
        class_name: :User

    belongs_to :products,
        foreign_key: :product_id,
        class_name: :Product
end