class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
 
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
            #render json: ["Password is too short"], status: 401
        end
    end
    
    def destroy
        @user = User.find_by(params[:id])
        @user.destroy
        render "static_pages/root"
        #find a better way of getting to the main page
    end
    
    private
    
    def user_params
        params.require(:user).permit(:username, :password)
    end

end
