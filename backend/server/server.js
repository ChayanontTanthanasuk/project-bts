const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// เปิดใช้งาน CORS
app.use(cors());

// ใช้ middleware สำหรับอ่าน JSON body
app.use(express.json());

// รวมเส้นทาง
const userRoutes = require('../routes/userRoutes');
const travelRoutes = require('../routes/travelRoutes');
const stationRoutes = require('../routes/stationRoutes');

// กำหนด path ให้แต่ละ route
app.use('/api/auth', userRoutes);    
app.use('/api', travelRoutes);         
app.use('/api', stationRoutes);         

// เริ่มฟังพอร์ต 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
