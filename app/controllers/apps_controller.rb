class AppsController < ApplicationController
    def index
        @posts = Post.all
    end
    def show
      @posts = Post.all
    end
    
    def view
        @posts = Post.all
    end
end
