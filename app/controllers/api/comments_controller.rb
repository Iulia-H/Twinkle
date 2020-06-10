class Api::CommentsController < ApplicationController
  def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
        
    end

    def show
        @comment = Comment.find(params[:id])
        if @comment
            render :show
        else
            render json:  @comment.errors.full_messages, status: 401
        end
    end

    def index
        @comments = Comment.where(photo_id: params[:photo_id])
        # @comments = Comment.all
        render :index
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment && @comment.user_id == current_user.id
        # if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
        
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment && @comment.photo.user_id == current_user.id
             @comment.destroy
            render :index
        else
            render json: @comment.errors.full_messages, status: 401
        end
        
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :user_id, :photo_id)
    end
end
