const { getNextTrainInfo } = require('../services/trainService');

exports.getETA = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res.status(400).json({ message: 'กรุณาระบุ from และ to station ใน query string' });
    }

    const result = await getNextTrainInfo(from, to);
    if (!result) {
      return res.status(404).json({ message: 'ไม่มีขบวนรถไฟที่กำลังจะมาในทิศทางนี้' });
    }

    res.json(result);
  } catch (error) {
    console.error('❌ getETA error:', error.message);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
  }
};

