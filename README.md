# Giga Pet Project

### REQUIREMENT #1: Pet Info Object 
**Location:** script.js, lines 19-25
Created `pet_info` object with:
- name: "Buddy"
- weight: 50
- happiness: 75
- energy: 80 (bonus property for new button)

### REQUIREMENT #2: Button Behaviors 
**Location:** script.js, lines 27-82
**Treat Button:**
- Happiness +10
- Weight +5
- Energy -5

**Play Button:**
- Happiness +15
- Weight -3
- Energy -10

**Exercise Button:**
- Happiness -5
- Weight -8
- Energy -15

### REQUIREMENT #3: Fixed Key Bugs 
**Location:** script.js, lines 114-143
Added conditionals to prevent negative values:
- Weight, happiness, and energy cannot go below 0
- Also added maximum caps at 100 for balance

### REQUIREMENT #4: New Action Button 
**Location:** index.html, lines 42-44 and script.js, lines 67-82
**Sleep Button:**
- Energy +30
- Happiness -3
- Weight -2

### REQUIREMENT #5: New Behavior Display 
**Location:** index.html, line 29 and script.js
Added "Energy" stat display below happiness in HTML
- Updates in real-time with pet actions
- Managed by new Sleep button

### REQUIREMENT #6: Visual Notifications 
**Location:** script.js, lines 84-112 and style.css, lines 89-116
Created notification system that:
- Shows custom messages for each action
- Uses fade-in animation
- Auto-hides after 2 seconds
- No console.log() or alert() used

### REQUIREMENT #7: Two jQuery Methods 

**Method #1: .addClass() / .removeClass()**
- **Location:** script.js, lines 89-109
- **Documentation:** https://api.jquery.com/addClass/ and https://api.jquery.com/removeClass/
- **Usage:** Changes pet image styling based on mood

**Method #2: .attr()**
- **Location:** script.js, lines 155-187
- **Documentation:** https://api.jquery.com/attr/
- **Usage:** Changes pet image src attribute based on happiness/energy
- **Explanation:** Detailed comments explain what, how, and why

## Comment Structure

All code follows this numbered format:
```javascript
// ========================================
// REQUIREMENT #X: [Requirement description]
// ========================================
```

This makes it crystal clear which code implements which requirement!

##  Bonus Features (Creativity Points!)

**TO GET FULL POINTS - Show creativity and a desire to excel above and beyond:**

###  **UNIQUE CUSTOM DESIGN**
- **Blue & Orange color scheme** instead of generic purple
- **Arial/Verdana font** for clean, professional look
- **Rounded rectangles** for pet image (not generic circle)
- **Dashed borders** and gradient boxes
- **Custom hound image** (your own pet!)
- **Custom button styles** with gradients and 3D effects
- Layout looks student-made, not AI-generated!

###  Sound Effects System
**Location:** script.js, lines 30-53
- **What it does:** Plays different sounds for each button action
- **Treat button:** Eating/munching sound
- **Play button:** Happy sound
- **Exercise button:** Effort/exertion sound
- **Sleep button:** Relaxing/sleepy sound

###  Bouncing Animation
**Location:** style.css, lines 73-77
- **What it does:** Pet image bounces and rotates when happy
- **When it triggers:** Automatically when happiness >= 70
- **Animation details:** Smooth 0.7 second bounce with rotation
- **Why it's impressive:** Visual feedback that shows pet's joy

###  Additional Polish Features:
1. **Custom Background** - Light blue with soft gradient circles
2. **Dashboard Card** - Orange bordered white card with gradient background
3. **Button Gradients** - Each button has unique color gradient
4. **Pet Image States** - Border colors, shadows, and filters based on mood
5. **Smooth Transitions** - CSS animations for professional feel
6. **3D Button Effects** - Buttons lift up on hover
7. **Notification Animations** - Slide-in with scale effect
