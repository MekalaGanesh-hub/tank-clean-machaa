export const PHONE = '+91 90145 38584';
export const PHONE_RAW = '919014538584';
export const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}`;
export const EMAIL = 'book@tankcleanmachaa.com';
export const ADDRESS = '1st Stage, BTM Layout, Near Metro Station, Bangalore - 560029';
export const OWNER = 'Ganesh';

export const WA_BOOKING_MSG = encodeURIComponent(
  `Hi ${OWNER}! I'd like to book a tank cleaning service.`
);

export const WA_INQUIRY_MSG = encodeURIComponent(
  `Hi ${OWNER}! I'd like to know more about your services.`
);

// API Endpoints (Placeholders)
export const API_BASE_URL = 'https://api.tankcleanmachaa.com/v1';
export const API_BOOKING_ENDPOINT = `${API_BASE_URL}/book`;
export const API_CONTACT_ENDPOINT = `${API_BASE_URL}/contact`;
