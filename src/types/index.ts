export interface ContactSubmission {
  full_name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Appointment {
  full_name: string;
  email: string;
  phone: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_country: string;
  service_type: string;
  testimonial_text: string;
  rating: number;
  created_at: string;
}

export interface Service {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  icon: string;
}
