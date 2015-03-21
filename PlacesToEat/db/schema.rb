# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150321185815) do

  create_table "korisnik", force: :cascade do |t|
    t.integer "role",      limit: 4,     null: false
    t.text    "restoran",  limit: 65535, null: false
    t.integer "podaci_id", limit: 4,     null: false
  end

  create_table "ocjena", force: :cascade do |t|
    t.integer "ocjena",      limit: 4, null: false
    t.integer "restoran_id", limit: 4, null: false
    t.integer "korisnik_id", limit: 4, null: false
  end

  create_table "podaci", force: :cascade do |t|
    t.text "ime",     limit: 65535, null: false
    t.text "prezime", limit: 65535, null: false
    t.text "adresa",  limit: 65535, null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.string   "address",    limit: 255
    t.string   "menu",       limit: 255
    t.float    "lon",        limit: 24
    t.float    "lat",        limit: 24
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_id",    limit: 4
  end

  add_index "restaurants", ["user_id"], name: "fk_rails_aef57e41ec", using: :btree

  create_table "restoran", force: :cascade do |t|
    t.text   "naziv",  limit: 65535, null: false
    t.text   "adresa", limit: 65535, null: false
    t.binary "meni",   limit: 65535
    t.string "lon",    limit: 45,    null: false
    t.string "lat",    limit: 45,    null: false
  end

  create_table "rezervacija", id: false, force: :cascade do |t|
    t.integer "id",          limit: 4, null: false
    t.date    "vrijemeOd",             null: false
    t.date    "vrijemeDo",             null: false
    t.integer "brojOsoba",   limit: 4, null: false
    t.integer "korisnik_id", limit: 4, null: false
    t.integer "restoran_id", limit: 4, null: false
  end

  create_table "role", force: :cascade do |t|
    t.text "naziv", limit: 65535, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name",                   limit: 255
    t.string   "lastname",               limit: 255
    t.string   "username",               limit: 255
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "restaurants", "users"
end
