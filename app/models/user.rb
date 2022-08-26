class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :product_listings,
    foreign_key: :seller_id,
    class_name: :Product

  has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review
  
  has_many :cart_items,
    foreign_key: :buyer_id,
    class_name: :cart_items
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save
    self.session_token
  end




end
