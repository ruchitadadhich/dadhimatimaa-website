# श्री दधिमती माता मंदिर वेबसाइट / Dadhimati Mata Mandir Website

React + Vite + Tailwind पर बनी दधिमती माता मंदिर (नागौर, राजस्थान) की आधिकारिक वेबसाइट।
A React + Vite + Tailwind website for Shri Dadhimati Mata Mandir, Nagaur, Rajasthan.

## विशेषताएं / Features

- 🛕 Home, About, Temple History, Gallery, Darshan & Aarti, Visit Us, News & Events, Contact — 8 pages
- 🌐 हिंदी / English भाषा बदलने का बटन (ऊपर नेवबार में "हिं / EN")
- 🌗 Light / Dark theme toggle (saved automatically in browser)
- 🗺️ Google Maps embed on the Visit Us page
- 📞 Pujari Ji contact: Shri Rishi Pujari — +91 90018 65226 (visible in Contact page + floating call button)
- 📱 पूरी तरह मोबाइल फ्रेंडली / Fully responsive

## चलाने का तरीका / How to Run

1. Node.js (v18+) इंस्टॉल होना चाहिए।
2. इस फ़ोल्डर में टर्मिनल खोलें और चलाएं:

   ```bash
   npm install
   npm run dev
   ```

3. ब्राउज़र में खुलें: `http://localhost:5173`

### Production build के लिए / For production build

```bash
npm run build
npm run preview
```

`npm run build` से बनी `dist` फोल्डर को किसी भी होस्टिंग (Netlify, Vercel, Hostinger, GoDaddy, cPanel आदि) पर अपलोड कर सकते हैं।

## कंटेंट बदलने के लिए / To Edit Content

- सभी टेक्स्ट (हिंदी + अंग्रेज़ी) यहां है: `src/data/content.js`
- तस्वीरें यहां डालें: `public/images/` (और content.js में path अपडेट करें)
- रंग/थीम बदलने के लिए: `tailwind.config.js`
- पुजारी जी का नंबर/ईमेल बदलने के लिए: `src/data/content.js` में `contact` सेक्शन देखें

## आगे क्या जोड़ें / Suggested Next Steps

- वास्तविक Google Maps coordinates के साथ pin अपडेट करें (अभी search-query आधारित embed है)
- Contact form को किसी backend/email service (Formspree, EmailJS) से जोड़ें
- अधिक गैलरी तस्वीरें व ड्रोन वीडियो जोड़ें
- अपना डोमेन (जैसे dadhimatimataji.org) कनेक्ट करें
