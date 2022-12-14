class Product < ApplicationRecord

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User
 
  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Product

 has_many :carts,
    foreign_key: :product_id,
    class_name: :Product

  has_one_attached :index_photo

    has_many_attached :photos

      def average_rating
        reviews.average(:rating)
    end

    def total_reviews
        reviews.length
    end

end 