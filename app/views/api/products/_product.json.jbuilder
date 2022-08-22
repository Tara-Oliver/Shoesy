json.extract! product, :id, :name, :price, :description, :seller_id
json.photoUrl url_for(product.index_photo)