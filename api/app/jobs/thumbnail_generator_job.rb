# frozen_string_literal: true

class ThumbnailGeneratorJob
  include Sidekiq::Worker

  def perform(id)
    video = Video.find(id)

    if !video || !video.file
      Rails.logger.error("Abort! Video not found or invalid! #{video.id}")
      abort
    end

    video.thumbnail_large  = video.file.preview(resize_to_limit: [256, 256])
    video.thumbnail_medium = video.file.preview(resize_to_limit: [128, 128])
    video.thumbnail_small  = video.file.preview(resize_to_limit: [64, 64])

    Rails.logger.info("done processing #{video.id}")

    video.save
  end
end
