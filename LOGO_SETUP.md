# Logo Setup Instructions

## 📁 Save Your Logo Images

You need to save the two logo images you provided into the `src/assets` folder.

### Steps:

1. **Save the house icon:**
   - Take the first image (purple house with pink windows)
   - Save it as: `src/assets/house-icon.png`

2. **Save the text logo:**
   - Take the second image (yberhood text with hourglass)
   - Save it as: `src/assets/yberhood-text.png`

### File Locations:
```
d:\Angular\yberhood\
  └── src\
      └── assets\
          ├── house-icon.png      ← First image (house)
          └── yberhood-text.png   ← Second image (text logo)
```

## ✅ What I've Done

I've updated the header component to use both logos:
- **House icon** on the left (8-12px size, responsive)
- **Text logo** next to it (6-10px height, auto width)
- Both are wrapped in a clickable link to home page
- Fully responsive across all screen sizes

## 🎨 Logo Styling

The logos will:
- Scale responsively (smaller on mobile, larger on desktop)
- Maintain aspect ratio with `object-contain`
- Work together as a unified brand identity
- Be clickable to navigate to home page

## 🚀 After Saving Images

Once you save both images in the correct location:
1. Refresh your browser
2. You'll see both logos in the header
3. They'll look great on all devices!

## 📝 Image Names (Important!)

Make sure the file names match EXACTLY:
- ✅ `house-icon.png`
- ✅ `yberhood-text.png`

NOT:
- ❌ `house-icon.jpg`
- ❌ `yberhood text.png` (no spaces)
- ❌ `House-Icon.png` (case matters on some systems)
