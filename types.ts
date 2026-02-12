export enum ParkCategory {
  FAMILY_PARK = 'Family Park',
  SPORTS_COMPLEX = 'Sports Complex',
  GREEN_BELT = 'Green Belt',
  BOTANICAL_GARDEN = 'Botanical Garden',
  HISTORICAL_SITE = 'Historical Site'
}

export enum FacilityType {
  CANTEEN = 'Canteen',
  TOILETS = 'Toilets',
  PRAYER_AREA = 'Prayer Area',
  JOGGING_TRACK = 'Jogging Track',
  PARKING = 'Parking',
  GYM = 'Open Gym',
  WIFI = 'Public Wi-Fi',
  SWINGS = 'Kids Play Area'
}

export interface AssetInventory {
  benches: number;
  lights: number;
  dustbins: number;
  swings: number;
  waterCoolers: number;
  trees: number;
}

export interface Park {
  id: string;
  name: string;
  city: string; 
  category: ParkCategory;
  areaAcres: number;
  areaMarlas: number; // Added as per PDF
  location: {
    lat: number;
    lng: number; 
  };
  facilities: FacilityType[];
  assets: AssetInventory;
  status: 'Operational' | 'Maintenance' | 'Under Construction';
  lastInspection: string;
  imageUrl?: string;
  citizenRating: number; // Added Module 2.2
}

export interface Complaint {
  id: string;
  parkName: string;
  source: 'Helpline 1399' | 'QR Code Scan' | 'Mobile App'; // Added Module 2.1 & 2.2
  type: 'Cleanliness' | 'Horticulture' | 'Electrical' | 'Civil Works' | 'Security';
  description: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  assignedTeam: string; // Module 2.1
  dateFiled: string;
  priority: 'High' | 'Medium' | 'Low';
  imageProof?: string; // Module 2.2
}

export interface Project {
  id: string;
  name: string;
  type: 'Development' | 'Renovation' | 'Beautification';
  location: string;
  startDate: string;
  endDate: string;
  budget: number; // in Millions
  physicalProgress: number; // Percentage
  financialProgress: number; // Percentage
  status: 'On Track' | 'Delayed' | 'Completed';
}

// Module 3: Inventory
export interface InventoryItem {
  id: string;
  name: string;
  botanicalName?: string; // Module 3.1
  category: 'Flora' | 'Machinery' | 'Furniture' | 'Chemicals';
  quantity: number;
  unit: string;
  location: string; 
  lastAudit: string;
  plantingDate?: string; // Module 3.1
  healthStatus?: 'Healthy' | 'Needs Attention' | 'Critical'; // Module 3.1
}

export interface NurserySale {
  id: string;
  nurseryName: string;
  type: 'PHA Local' | 'Private Shop'; // Module 3.2
  itemsSold: number;
  revenue: number;
  date: string;
}

// Module 4: Vehicles
export interface Vehicle {
  id: string;
  registrationNumber: string;
  type: 'Tractor' | 'Water Tanker' | 'Patrol Bike' | 'Truck';
  driverName: string;
  status: 'Moving' | 'Idle' | 'Parked' | 'Maintenance';
  dailyDistanceKm: number;
  waterCapacityLiters?: number; // Module 4
  waterDistributedLiters?: number; // Module 4
  currentLocation: { lat: number; lng: number };
  fuelLevel: number;
}

// Module 5: Equipment
export interface Equipment {
  id: string;
  name: string; // e.g. Grass Cutting Machine #5
  type: 'Mower' | 'Trimmer' | 'Pruner' | 'Chainsaw';
  assignedLocation: string; // Park or Zone
  status: 'Operational' | 'Non-Operational'; // Module 5
  lastMaintenance: string;
  nextMaintenance: string;
}

// Module 6: Staff
export interface Staff {
  id: string;
  name: string;
  role: 'Gardener' | 'Security Guard' | 'Supervisor' | 'Electrician';
  assignedZone: string;
  status: 'Present' | 'Absent' | 'Leave';
  checkInTime?: string;
  checkInPhotoUrl?: string; // Module 6
  contact: string;
  location: { lat: number, lng: number }; // GPS tracking
}

// Module 8: Digital Banners / LED
export interface LEDScreen {
  id: string;
  locationName: string;
  size: string;
  status: 'Active' | 'Maintenance';
  currentContent: 'Public Service Msg' | 'Advertisement' | 'Event Schedule';
  revenueGenerated: number;
}

// Module 9: Collaborations
export interface Collaboration {
  id: string;
  partnerName: string; // University or Corporate
  projectType: 'Wall Beautification' | 'Mural' | 'Urban Art';
  location: string;
  sponsorshipAmount: number;
  status: 'Proposed' | 'In Progress' | 'Completed';
  beforeImage?: string;
  afterImage?: string;
}

export type ViewModule = 
  'dashboard' | // Module 7
  'mapping' | // Module 1
  'complaints' | // Module 2
  'inventory' | // Module 3
  'projects' | // Module ???
  'vehicles' | // Module 4
  'equipment' | // Module 5
  'workforce' | // Module 6
  'marketing' | // Module 8
  'collaborations'; // Module 9