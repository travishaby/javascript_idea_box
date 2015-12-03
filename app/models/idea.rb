class Idea < ActiveRecord::Base
  validates :title, :body, presence: true

  enum quality: [:swill, :plausible, :genius]

  def update_quality(quality_params)
    new_quality = Idea.qualities[self.quality] + quality_params[:quality].to_i
    if new_quality.between?(0, 2)
      self.update_attributes(quality_params)
    else
      false
    end
  end
end
