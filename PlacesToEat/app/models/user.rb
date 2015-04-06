class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Sends password reset email.
  def send_password_reset_email
    UserMailer.password_reset(self).deliver_now
  end

  # Sets the password reset attributes.
  def create_reset_digest
    update_attribute(:reset_password_sent_at, Time.zone.now)
  end

  def generate_token
    JWT.encode({ user_id: id }, Rails.application.secrets.secret_key_base)
  end

  def password_reset_expired?
    reset_password_sent_at < 2.hours.ago
  end
end
