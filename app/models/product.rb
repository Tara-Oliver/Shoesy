class Product < ApplicationRecord

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User
 
  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Product

 belongs_to :cart,
    foreign_key: :product_id,
    class_name: :Product

end 