import { Park, ParkCategory, FacilityType, Complaint, Project, InventoryItem, Staff, Vehicle, Equipment, LEDScreen, Collaboration, NurserySale } from './types';

export const CITIES = ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala'];

export const MOCK_PARKS: Park[] = [
  {
    id: '1',
    name: 'Jilani Park (Race Course)',
    city: 'Lahore',
    category: ParkCategory.FAMILY_PARK,
    areaAcres: 88,
    areaMarlas: 14080,
    location: { lat: 45, lng: 55 },
    facilities: [FacilityType.JOGGING_TRACK, FacilityType.CANTEEN, FacilityType.PRAYER_AREA, FacilityType.PARKING, FacilityType.GYM],
    assets: { benches: 120, lights: 450, dustbins: 60, swings: 15, waterCoolers: 8, trees: 1500 },
    status: 'Operational',
    lastInspection: '2023-10-15',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    citizenRating: 4.5
  },
  {
    id: '2',
    name: 'Gulshan-e-Iqbal Park',
    city: 'Lahore',
    category: ParkCategory.FAMILY_PARK,
    areaAcres: 67,
    areaMarlas: 10720,
    location: { lat: 38, lng: 62 },
    facilities: [FacilityType.TOILETS, FacilityType.PARKING, FacilityType.WIFI],
    assets: { benches: 80, lights: 300, dustbins: 40, swings: 25, waterCoolers: 5, trees: 1200 },
    status: 'Operational',
    lastInspection: '2023-10-20',
    imageUrl: 'https://picsum.photos/id/11/800/600',
    citizenRating: 3.8
  },
  {
    id: '3',
    name: 'Jinnah Park',
    city: 'Rawalpindi',
    category: ParkCategory.SPORTS_COMPLEX,
    areaAcres: 45,
    areaMarlas: 7200,
    location: { lat: 75, lng: 30 },
    facilities: [FacilityType.GYM, FacilityType.JOGGING_TRACK, FacilityType.PARKING],
    assets: { benches: 50, lights: 200, dustbins: 25, swings: 0, waterCoolers: 4, trees: 800 },
    status: 'Operational',
    lastInspection: '2023-11-01',
    imageUrl: 'https://picsum.photos/id/12/800/600',
    citizenRating: 4.2
  },
  {
    id: '4',
    name: 'Canal Green Belt Zone 1',
    city: 'Lahore',
    category: ParkCategory.GREEN_BELT,
    areaAcres: 12,
    areaMarlas: 1920,
    location: { lat: 50, lng: 50 },
    facilities: [FacilityType.JOGGING_TRACK],
    assets: { benches: 30, lights: 150, dustbins: 15, swings: 0, waterCoolers: 2, trees: 400 },
    status: 'Maintenance',
    lastInspection: '2023-10-28',
    imageUrl: 'https://picsum.photos/id/13/800/600',
    citizenRating: 3.5
  },
  {
    id: '5',
    name: 'Shah Shams Park',
    city: 'Multan',
    category: ParkCategory.FAMILY_PARK,
    areaAcres: 35,
    areaMarlas: 5600,
    location: { lat: 20, lng: 40 },
    facilities: [FacilityType.CANTEEN, FacilityType.PRAYER_AREA],
    assets: { benches: 60, lights: 180, dustbins: 30, swings: 20, waterCoolers: 6, trees: 650 },
    status: 'Operational',
    lastInspection: '2023-09-15',
    imageUrl: 'https://picsum.photos/id/14/800/600',
    citizenRating: 4.0
  },
  {
    id: '6',
    name: 'Gatwala Wildlife Park',
    city: 'Faisalabad',
    category: ParkCategory.BOTANICAL_GARDEN,
    areaAcres: 100,
    areaMarlas: 16000,
    location: { lat: 60, lng: 70 },
    facilities: [FacilityType.TOILETS, FacilityType.PARKING, FacilityType.CANTEEN],
    assets: { benches: 90, lights: 350, dustbins: 55, swings: 10, waterCoolers: 10, trees: 2500 },
    status: 'Operational',
    lastInspection: '2023-11-05',
    imageUrl: 'https://picsum.photos/id/15/800/600',
    citizenRating: 4.7
  },
  {
    id: '7',
    name: 'Model Town Park',
    city: 'Lahore',
    category: ParkCategory.FAMILY_PARK,
    areaAcres: 125,
    areaMarlas: 20000,
    location: { lat: 42, lng: 58 },
    facilities: [FacilityType.JOGGING_TRACK, FacilityType.GYM, FacilityType.WIFI, FacilityType.PARKING],
    assets: { benches: 200, lights: 600, dustbins: 100, swings: 40, waterCoolers: 15, trees: 3000 },
    status: 'Operational',
    lastInspection: '2023-11-10',
    imageUrl: 'https://picsum.photos/id/16/800/600',
    citizenRating: 4.8
  }
] as unknown as Park[];

export const MOCK_COMPLAINTS: Complaint[] = [
  { id: 'C001', parkName: 'Jilani Park', source: 'QR Code Scan', type: 'Cleanliness', description: 'Garbage bins overflowing near Gate 4.', status: 'Pending', assignedTeam: 'Zone 3 Sanitation', dateFiled: '2023-11-20', priority: 'High', imageProof: 'https://picsum.photos/200/200' },
  { id: 'C002', parkName: 'Gulshan-e-Iqbal', source: 'Helpline 1399', type: 'Electrical', description: 'Street lights not working in jogging track area.', status: 'In Progress', assignedTeam: 'Electrical Works Dept', dateFiled: '2023-11-19', priority: 'Medium' },
  { id: 'C003', parkName: 'Model Town Park', source: 'Mobile App', type: 'Horticulture', description: 'Dry grass patches observed in sector C.', status: 'Resolved', assignedTeam: 'Horticulture Zone 1', dateFiled: '2023-11-15', priority: 'Low' },
];

export const MOCK_PROJECTS: Project[] = [
  { id: 'P001', name: 'Miyawaki Forest Zone 3', type: 'Development', location: 'Lahore', startDate: '2023-01-01', endDate: '2023-12-31', budget: 50, physicalProgress: 85, financialProgress: 70, status: 'On Track' },
  { id: 'P002', name: 'Canal Road Beautification', type: 'Beautification', location: 'Lahore', startDate: '2023-06-01', endDate: '2023-11-30', budget: 25, physicalProgress: 40, financialProgress: 45, status: 'Delayed' },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'I001', name: 'Alstonia Scholaris', botanicalName: 'Alstonia Scholaris', category: 'Flora', quantity: 5000, unit: 'Saplings', location: 'Central Nursery', lastAudit: '2023-11-01', plantingDate: '2023-09-01', healthStatus: 'Healthy' },
  { id: 'I002', name: 'Lawn Mower (Ride-on)', category: 'Machinery', quantity: 15, unit: 'Units', location: 'Zone 2 Store', lastAudit: '2023-10-15' },
  { id: 'I003', name: 'NPK Fertilizer', category: 'Chemicals', quantity: 200, unit: 'Bags (50kg)', location: 'Central Store', lastAudit: '2023-11-10' },
  { id: 'I005', name: 'Rose Bushes (Red)', botanicalName: 'Rosa Rubiginosa', category: 'Flora', quantity: 1200, unit: 'Plants', location: 'Gulberg Nursery', lastAudit: '2023-11-05', plantingDate: '2023-08-15', healthStatus: 'Needs Attention' },
];

export const MOCK_NURSERY_SALES: NurserySale[] = [
  { id: 'S1', nurseryName: 'Liberty Corner Shop', type: 'Private Shop', itemsSold: 145, revenue: 45000, date: '2023-11-20' },
  { id: 'S2', nurseryName: 'Jillani Park Nursery', type: 'PHA Local', itemsSold: 89, revenue: 12500, date: '2023-11-20' },
];

export const MOCK_VEHICLES: Vehicle[] = [
  { id: 'V01', registrationNumber: 'LEG-4521', type: 'Water Tanker', driverName: 'Bashir Ahmed', status: 'Moving', dailyDistanceKm: 42, waterCapacityLiters: 5000, waterDistributedLiters: 3500, currentLocation: { lat: 45, lng: 55 }, fuelLevel: 75 },
  { id: 'V02', registrationNumber: 'LEG-9982', type: 'Tractor', driverName: 'Sajid Ali', status: 'Idle', dailyDistanceKm: 12, currentLocation: { lat: 44, lng: 56 }, fuelLevel: 40 },
  { id: 'V03', registrationNumber: 'LEG-1122', type: 'Patrol Bike', driverName: 'Kamran Khan', status: 'Moving', dailyDistanceKm: 85, currentLocation: { lat: 46, lng: 54 }, fuelLevel: 90 },
];

export const MOCK_EQUIPMENT: Equipment[] = [
  { id: 'E01', name: 'Grass Cutter #5', type: 'Mower', assignedLocation: 'Jilani Park', status: 'Operational', lastMaintenance: '2023-10-01', nextMaintenance: '2023-12-01' },
  { id: 'E02', name: 'Chain Saw #2', type: 'Chainsaw', assignedLocation: 'Zone 4 Depot', status: 'Non-Operational', lastMaintenance: '2023-09-15', nextMaintenance: '2023-11-15' },
];

export const MOCK_STAFF: Staff[] = [
  { id: 'S001', name: 'Muhammad Ahmed', role: 'Supervisor', assignedZone: 'Zone A', status: 'Present', checkInTime: '07:45 AM', location: { lat: 45, lng: 55 }, contact: '0300-1234567' },
  { id: 'S002', name: 'Ali Raza', role: 'Gardener', assignedZone: 'Zone A', status: 'Present', checkInTime: '08:00 AM', location: { lat: 45.1, lng: 55.2 }, contact: '0300-7654321' },
  { id: 'S003', name: 'Naveed Khan', role: 'Security Guard', assignedZone: 'Zone B', status: 'Absent', location: { lat: 0, lng: 0 }, contact: '0321-9876543' },
];

export const MOCK_LEDS: LEDScreen[] = [
  { id: 'L1', locationName: 'Main Boulevard Gulberg', size: '20x10ft', status: 'Active', currentContent: 'Advertisement', revenueGenerated: 150000 },
  { id: 'L2', locationName: 'Jail Road Entrance', size: '15x8ft', status: 'Active', currentContent: 'Public Service Msg', revenueGenerated: 0 },
];

export const MOCK_COLLABORATIONS: Collaboration[] = [
  { id: 'C1', partnerName: 'Punjab University College of Art', projectType: 'Wall Beautification', location: 'Canal Road Underpass', sponsorshipAmount: 500000, status: 'In Progress', beforeImage: 'https://picsum.photos/id/20/300/200', afterImage: 'https://picsum.photos/id/21/300/200' },
  { id: 'C2', partnerName: 'Coca Cola Pakistan', projectType: 'Urban Art', location: 'Liberty Roundabout', sponsorshipAmount: 1200000, status: 'Completed', beforeImage: 'https://picsum.photos/id/22/300/200', afterImage: 'https://picsum.photos/id/23/300/200' },
];
