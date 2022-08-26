class Api::CartitemsController < ApplicationController
     before_action :require_login
  
    def index
        @cartitems = CartItem.all.select{|item| item.buyer_id === current_user.id}
        render :index
    end

    def create

        @cartitem = CartItem.new(cartitem_params)
        if @cartitem.save
        render :show
        else
        render json: @cartitem.errors.full_messages, status: 401
        end
  end
  

    
  def cartitem_params
    params.require(:cartitem).permit(:buyer_id, :product_id)
  
  end

end
