const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const { getNextTrainInfo } = require('../services/trainService'); // import ฟังก์ชันคำนวณเวลา


// POST /api/travel
exports.addTravelHistory = async (req, res) => {
  const { fromStationId, toStationId } = req.body;
  const userId = req.user ? req.user.userId : null;

  if (!userId) {
    return res.status(400).json({
      message: "User ID is required. Please ensure the JWT token is provided in the Authorization header."
    });
  }

  try {
    const fromStation = await prisma.station.findUnique({ where: { id: fromStationId } });
    const toStation = await prisma.station.findUnique({ where: { id: toStationId } });

    if (!fromStation || !toStation) {
      return res.status(404).json({
        message: "One or both stations not found. Please verify the station IDs are correct."
      });
    }

    const stationDiff = Math.abs(fromStation.position - toStation.position);
    const price = 15 * stationDiff;

    const history = await prisma.travelHistory.create({
      data: {
        userId,
        fromStationId,
        toStationId,
        price,
      },
      include: {
        fromStation: true,
        toStation: true,
      },
    });

    // เรียกใช้ฟังก์ชันคำนวณเวลารถไฟ
    const trainInfo = await getNextTrainInfo(fromStation.name, toStation.name);

    res.status(201).json({
      message: "Travel history created successfully.",
      travelHistory: history,
      trainInfo, // เพิ่มข้อมูลเวลารถไฟที่มาถึงต้นทางและถึงปลายทาง
    });

  } catch (error) {
    console.error("Error during the travel history creation process:", error);
    res.status(500).json({
      message: "Failed to create travel history. Please check your database connection or input parameters.",
      error: error.message || "Unknown error"
    });
  }
};

  

  exports.getTravelHistory = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const history = await prisma.travelHistory.findMany({
        where: { userId: parseInt(userId) },
        include: {
          fromStation: true,
          toStation: true,
        },
        orderBy: {
          traveledAt: 'desc',
        },
      });
  
      res.json(history);
    } catch (error) {
      console.error("Error getting travel history:", error);
      res.status(500).json({ message: "Failed to get travel history." });
    }
  };
  
  