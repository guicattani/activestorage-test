# frozen_string_literal: true

class Video < ApplicationRecord
  include ActiveModel::Serialization

  belongs_to :category
  has_one_attached :file
  has_one_attached :thumbnail_small
  has_one_attached :thumbnail_medium
  has_one_attached :thumbnail_large

  def validate_file_extension
    return unless file.attached?

    allowed_extensions = %w[video/mp4 video/mov]

    return if file.content_type.in?(allowed_extensions)

    errors.add(:file, 'must be a video with MP4 or MOV extension')
  end

  def validate_file_size
    return unless file.attached?

    return if file.byte_size < 200_000_000

    errors.add(:file, 'must be under 200MB of size')
  end

  def attributes
    { 'id' => nil, 'title' => nil, 'category' => nil, "created_at" => nil }
  end
end
