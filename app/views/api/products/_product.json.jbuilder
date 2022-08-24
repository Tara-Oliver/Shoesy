json.extract! product, :id, :name, :price, :description, :seller_id, :category
json.photoUrl url_for(product.index_photo) if product.index_photo.attached?