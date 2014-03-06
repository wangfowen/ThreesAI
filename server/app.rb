require 'sinatra'
require 'json'

get '/' do
  json = '{"next_piece":"red","board":[1,2,6]}'
  data = JSON.parse json #request.body.read
  "Next piece: #{data['next_piece']} 
  Board: #{data['board']}"
end
