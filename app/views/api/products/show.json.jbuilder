json.extract! @product, :id, :name, :price, :description, :seller_id, :category

json.username @product.seller.username

json.photoUrl url_for(@product.index_photo) if @product.index_photo.attached?
