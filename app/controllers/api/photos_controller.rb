class Api::PhotosController < ApplicationController

    def index
        @photos = Photos.all
        render :index
    end

    def show
        @photo = Photo.find(params[:id])
        if @photo
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end


    def create
        @photo = Photo.create(photo_params)
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 401
        end
    end

    def destroy
        @photo = Photo.find(params[:id])
        if @photo && @photo.user_id == current_user.id
            @photo.destroy
            render "api/users/show"
        else
            render json: @photo.errors.full_messages
        end
        
    end


    private
    def photo_params
        params.require(:photo).permit(:title, :user_id, :link, tags: [])
    end
end
