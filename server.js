import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js'; // ✅ FIXED (no {})

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
