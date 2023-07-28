# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Video do
  it { is_expected.to belong_to(:category) }
  it { is_expected.to have_one_attached(:file) }
end
