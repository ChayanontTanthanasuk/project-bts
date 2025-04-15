const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ฟังก์ชันสมัครสมาชิก (signup)
exports.signup = async (req, res) => {
  const { email, password, fullname } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // ตรวจสอบว่าอีเมล์มีในฐานข้อมูลหรือไม่
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // เข้ารหัสรหัสผ่านก่อนบันทึก
    const hashedPassword = await bcrypt.hash(password, 10);

    // สร้างผู้ใช้ใหม่ในฐานข้อมูล
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullname: fullname || '',  // ถ้าไม่มี fullname ให้ใช้ค่าว่าง
      },
    });

    res.status(201).json({
      message: 'User created successfully',
      userId: newUser.id,
      email: newUser.email,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ฟังก์ชันเข้าสู่ระบบ (login)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // ตรวจสอบว่าอีเมล์มีในฐานข้อมูลหรือไม่
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // ตรวจสอบรหัสผ่านที่กรอกเข้ามาว่าตรงกับที่เข้ารหัสไว้ในฐานข้อมูลหรือไม่
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // สร้าง JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
