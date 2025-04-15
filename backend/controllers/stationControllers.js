const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


// POST /api/station
exports.addStations = async (req, res) => {
    const stations = req.body;
  
    // ตรวจสอบว่าเป็น array และมีข้อมูล
    if (!Array.isArray(stations) || stations.length === 0) {
      return res.status(400).json({ message: "Please provide an array of stations." });
    }
  
    // ตรวจสอบว่าแต่ละสถานีมีข้อมูลครบ
    const isValid = stations.every(station =>
      station.name && station.line && station.position != null && station.fare != null
    );
  
    if (!isValid) {
      return res.status(400).json({ message: "One or more stations are missing required fields." });
    }
  
    try {
      const result = await prisma.station.createMany({
        data: stations,
        skipDuplicates: true, // ข้ามถ้าชื่อซ้ำ
      });
  
      res.status(201).json({ message: `${result.count} stations added.` });
    } catch (error) {
      console.error("Error creating stations:", error);
      res.status(500).json({ message: "Failed to create stations." });
    }
  };
  
  