# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::VideosController do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/videos').to route_to('api/videos#index')
    end

    it 'routes to #show' do
      expect(get: '/api/videos/1').to route_to('api/videos#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/api/videos').to route_to('api/videos#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/api/videos/1').to route_to('api/videos#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/api/videos/1').to route_to('api/videos#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/videos/1').to route_to('api/videos#destroy', id: '1')
    end
  end
end
