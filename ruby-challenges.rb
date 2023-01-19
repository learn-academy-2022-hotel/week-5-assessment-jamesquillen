# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# PSEUDOCODE

# Input: an array of words and a single letter
# Output: an array of all the words containing that particular letter

# Decalare a method called "word_finder" that has parameters for an array and a single letter
# Check each item in the array with a block asking if each item in the array includes the search letter
# Implicit return will return a new array with only items containing the search letter

def word_finder (array, letter)
    # I used the "to_proc" method to shorten the code. The "(&:include?(letter))" is equivalent to "{|value| value.include?(letter)}"
    array.select(&:include?(letter))
end


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# PSEUDOCODE

# Input: a hash
# Output: one array with all the hash values at their own index and in alphabetical order

# Define a method called "hash_extractor" with a parameter for a hash
# By chaining methods, first extract only the values from the hash, then flatten the nested arrays so all values are in a single array, then sort

def hash_extractor (hash)
    hash.values.flatten.sort
end


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 

    attr_accessor :make, :wheels, :current_speed

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    
    def bike_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    
    def pedal_faster(more_speed)
        @current_speed = more_speed + @current_speed
    end
    
    def brake(less_speed)
        @current_speed = @current_speed - less_speed
        @current_speed < 0 ? @current_speed = 0 : @current_speed
    end
    
end


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
