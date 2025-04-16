const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const STATION_INTERVAL_MINUTES = 2;
const TRAIN_INTERVAL_MINUTES = 15;

let stationsCache = null;

async function getStations() {
  if (!stationsCache) {
    stationsCache = await prisma.station.findMany({
      orderBy: { position: 'asc' },
    });
  }
  return stationsCache;
}

function generateTrains() {
    const trains = [];
    const now = new Date();
    const startTime = new Date(now.getTime());
    startTime.setSeconds(0, 0);
  
    // หาเวลาเริ่มต้นที่ตรงกับช่วง 15 นาที เช่น 10:00, 10:15, 10:30, ...
    const minutes = startTime.getMinutes();
    startTime.setMinutes(minutes - (minutes % 15));
  
    // จำลองขบวน 4 ชั่วโมงข้างหน้า (ปรับได้)
    const SIMULATION_HOURS = 4;
    const count = (SIMULATION_HOURS * 60) / 15;
  
    for (let i = 0; i < count; i++) {
      const time = new Date(startTime.getTime() + i * 15 * 60000); // i * 15 นาที
      trains.push({
        id: `UP-${time.getHours()}-${time.getMinutes()}`,
        startTime: new Date(time),
        direction: 'UP',
        startPosition: 1,
      });
      trains.push({
        id: `DOWN-${time.getHours()}-${time.getMinutes()}`,
        startTime: new Date(time),
        direction: 'DOWN',
        startPosition: 30,
      });
    }
  
    return trains;
  }
  

async function getNextTrainInfo(fromStationName, toStationName) {
  const stations = await getStations();
  const fromStation = stations.find((s) => s.name === fromStationName);
  const toStation = stations.find((s) => s.name === toStationName);

  if (!fromStation || !toStation) throw new Error('Invalid station names');

  const direction = fromStation.position < toStation.position ? 'UP' : 'DOWN';
  const now = new Date();
  const trains = generateTrains();

  const nextTrain = trains.find((train) => {
    if (train.direction !== direction) return false;
    const elapsedMinutes = (now - train.startTime) / 1000 / 60;
    const currentPos = direction === 'UP'
      ? train.startPosition + Math.floor(elapsedMinutes / STATION_INTERVAL_MINUTES)
      : train.startPosition - Math.floor(elapsedMinutes / STATION_INTERVAL_MINUTES);
    return (direction === 'UP' && currentPos <= fromStation.position)
        || (direction === 'DOWN' && currentPos >= fromStation.position);
  });

  if (!nextTrain) return null;

  const distanceToFrom = Math.abs(fromStation.position - nextTrain.startPosition);
  const distanceToTo = Math.abs(toStation.position - nextTrain.startPosition);

  const arrivalTimeFrom = new Date(nextTrain.startTime.getTime() + distanceToFrom * STATION_INTERVAL_MINUTES * 60000);
  const arrivalTimeTo = new Date(nextTrain.startTime.getTime() + distanceToTo * STATION_INTERVAL_MINUTES * 60000);

  return {
    trainId: nextTrain.id,
    direction,
    fromStation: fromStation.name,
    toStation: toStation.name,
    arrivalInMinutesFrom: Math.max(0, Math.round((arrivalTimeFrom - now) / 60000)),
    arrivalInMinutesTo: Math.max(0, Math.round((arrivalTimeTo - now) / 60000)),
    arrivalTimeFrom: arrivalTimeFrom.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
    arrivalTimeTo: arrivalTimeTo.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
  };
}

module.exports = { getNextTrainInfo };
