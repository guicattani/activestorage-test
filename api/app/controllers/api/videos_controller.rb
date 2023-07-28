# frozen_string_literal: true

module Api
  class VideosController < ApplicationController
    before_action :set_video, only: %i[show update destroy]

    # GET /videos
    def index
      @videos = Video.all

      render json: @videos.map { |video| merge_video_and_file(video) }
    end

    # GET /videos/1
    def show
      render json: @video
    end

    # POST /videos
    def create
      @video = Video.new(video_params)
      @video.validate_file_extension

      if @video.save
        render json: @video, status: :created
      else
        render json: @video.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /videos/1
    def update
      if @video.update(video_params)
        render json: @video
      else
        render json: @video.errors, status: :unprocessable_entity
      end
    end

    # DELETE /videos/1
    def destroy
      @video.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    def merge_video_and_file(video)
      return video.serializable_hash if video.file.blank?

      video.serializable_hash.merge(
        { file: { url: url_for(video.file),
                  thumbnails: {
                    large: url_for(video.file.preview(resize_and_pad: [256, 256])),
                    medium: url_for(video.file.preview(resize_and_pad: [128, 128])),
                    small: url_for(video.file.preview(resize_and_pad: [64, 64]))
                  } } }
      )
    end

    # Only allow a list of trusted parameters through.
    def video_params
      params.permit(:title, :category_id, :file)
    end
  end
end
