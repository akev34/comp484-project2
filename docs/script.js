// ========================================
// JQUERY READY FUNCTION
// ========================================
$(function() {
    checkAndUpdatePetInfoInHtml();
  
    // REQUIREMENT #2: Add behavior to button interaction
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    
    // REQUIREMENT #4: Add a new action button
    $('.sleep-button').click(clickedSleepButton);
})
  
// ========================================
// REQUIREMENT #1: Create a pet_info object with keys "name", "weight", "happiness" and set initial values
// ========================================
var pet_info = {
  name: "Buddy",
  weight: 50,
  happiness: 75,
  energy: 80  // REQUIREMENT #5: New property for new behavior
};

// ========================================
// CREATIVITY FEATURE: Sound Effects
// ========================================
function playSound(soundType) {
  var audio = new Audio();
  
  if (soundType === 'treat') {
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';
  } else if (soundType === 'play') {
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3';
  } else if (soundType === 'exercise') {
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3';
  } else if (soundType === 'sleep') {
    audio.src = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
  }
  
  audio.play();
}

// ========================================
// REQUIREMENT #2: Add a behavior to button interaction
// When your pet receives a treat, add to its happiness and weight
// ========================================
function clickedTreatButton() {
  playSound('treat');
  pet_info.happiness += 10;
  pet_info.weight += 5;
  pet_info.energy -= 5;
  
  // REQUIREMENT #6: Add a visual notification after each button press
  showNotification("Yum! That was delicious! 🍖");
  
  checkAndUpdatePetInfoInHtml();
}

// When your pet plays, add to its happiness and reduce its weight
function clickedPlayButton() {
  playSound('play');
  pet_info.happiness += 15;
  pet_info.weight -= 3;
  pet_info.energy -= 10;
  
  showNotification("Woof! That was so much fun! 🎾");
  checkAndUpdatePetInfoInHtml();
}

// When your pet exercises, reduce its happiness and weight
function clickedExerciseButton() {
  playSound('exercise');
  pet_info.happiness -= 5;
  pet_info.weight -= 8;
  pet_info.energy -= 15;
  
  showNotification("Phew! I'm getting tired... 💪");
  checkAndUpdatePetInfoInHtml();
}

// ========================================
// REQUIREMENT #4: Add a new action button
// REQUIREMENT #5: Add a new behavior that correlates with the new button you added
// ========================================
function clickedSleepButton() {
  playSound('sleep');
  pet_info.energy += 30;
  pet_info.happiness -= 3;
  pet_info.weight -= 2;
  
  showNotification("Zzz... I feel refreshed! 😴");
  checkAndUpdatePetInfoInHtml();
}

// ========================================
// REQUIREMENT #6: Add a visual notification after each button press with a comment from your pet
// Cannot use console.log() or alert()
// ========================================
function showNotification(message) {
  $('#notification-text').text(message);
  
  /* ========================================
   * REQUIREMENT #7: jQuery Method #1 - .removeClass() and .addClass()
   * ========================================
   * Documentation Links:
   * - https://api.jquery.com/removeClass/
   * - https://api.jquery.com/addClass/
   * 
   * WHAT THESE METHODS DO:
   * .removeClass(className) - Removes the specified CSS class from selected elements
   * .addClass(className) - Adds the specified CSS class to selected elements
   * 
   * HOW I USE THEM IN THIS PROJECT:
   * Remove "hidden" class to make notification visible, add "show" class for animation
   * 
   * WHY I CHOSE THESE METHODS:
   * Cleaner than manually setting display properties, easy to trigger CSS animations
   */
  $('#notification').removeClass('hidden').addClass('show');
  
  setTimeout(function() {
    $('#notification').removeClass('show').addClass('hidden');
  }, 2000);
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();  
  updatePetInfoInHtml();
  updatePetMood();
}

// ========================================
// REQUIREMENT #3: Fix key bugs to make sure certain key values can't go below zero
// ========================================
function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
  
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
  
  if (pet_info.energy < 0) {
    pet_info.energy = 0;
  }
  
  if (pet_info.happiness > 100) {
    pet_info.happiness = 100;
  }
  
  if (pet_info.energy > 100) {
    pet_info.energy = 100;
  }
  
  if (pet_info.weight > 100) {
    pet_info.weight = 100;
  }
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.energy').text(pet_info['energy']);
}

// ========================================
// CREATIVITY FEATURE: Update pet's visual appearance based on mood
// ========================================
function updatePetMood() {
  var petImage = $('.pet-image');
  
  /* ========================================
   * REQUIREMENT #7: jQuery Method #2 - .attr()
   * ========================================
   * Documentation Link: https://api.jquery.com/attr/
   * 
   * WHAT THIS METHOD DOES:
   * .attr(attributeName, value) - Gets or sets the value of an HTML attribute
   * 
   * HOW I USE IT IN THIS PROJECT:
   * Change the pet's image source (src attribute) based on happiness level
   * 
   * WHY I CHOSE THIS METHOD:
   * Allows dynamic image swapping without reloading the page
   */
  
  // Check energy FIRST (more urgent!)
  if (pet_info.energy < 30) {
    petImage.attr('src', 'images/hound tired.png');
    petImage.attr('alt', 'Tired Pet');
    petImage.removeClass('happy sad').addClass('tired');
    
  } else if (pet_info.happiness >= 70) {
    petImage.attr('src', 'images/hound happy.png');
    petImage.attr('alt', 'Happy Pet');
    petImage.removeClass('sad tired').addClass('happy');
    
  } else if (pet_info.happiness >= 40) {
    petImage.attr('src', 'images/hound.jpg');
    petImage.attr('alt', 'Neutral Pet');
    petImage.removeClass('happy sad tired');
    
  } else {
    petImage.attr('src', 'images/hound sad.png');
    petImage.attr('alt', 'Sad Pet');
    petImage.removeClass('happy tired').addClass('sad');
  }
}
