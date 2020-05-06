class Api::TagsController < ApplicationController
    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 401
        end
        
    end

    def show
        @tag = Tag.find(params[:id])
        if @tag
            render :show
        else
            render json:  @tag.errors.full_messages, status: 401
        end
    end

    def index
        # @tags = Tag.where(photo_id: params[:photo_id])
        @tags = Tag.all
        render :index
    end

    def update
        @tag = Tag.find(params[:id])
        if @tag.update(tag_params)
            render :show
        else
            render json: @tag.errors.full_messages, status: 401
        end
        
    end

    def destroy
        @tag = Tag.find(params[:id])
        if @tag.destroy
            render :index
        else
            render json: @tag.errors.full_messages, status: 401
        end
        
    end

    private
    def tag_params
        params.require(:tag).permit(:body, :photo_id)
    end
end
