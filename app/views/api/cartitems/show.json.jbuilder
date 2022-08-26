json.partial! 'cartitem', cartitem: @cartitem

json.name @cartitem.products.name
json.price @cartitem.products.price

