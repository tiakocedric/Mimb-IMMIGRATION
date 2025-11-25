/*
  # Immigration Consultancy Database Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, default now)
    
    - `appointments`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `service_type` (text, required)
      - `preferred_date` (date, required)
      - `preferred_time` (text, required)
      - `message` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text, required)
      - `client_country` (text, required)
      - `service_type` (text, required)
      - `testimonial_text` (text, required)
      - `rating` (integer, default 5)
      - `is_approved` (boolean, default false)
      - `created_at` (timestamptz, default now)

  2. Security
    - Enable RLS on all tables
    - Public can insert contact submissions and appointments
    - Public can read approved testimonials only
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_country text NOT NULL,
  service_type text NOT NULL,
  testimonial_text text NOT NULL,
  rating integer DEFAULT 5,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (is_approved = true);

INSERT INTO testimonials (client_name, client_country, service_type, testimonial_text, rating, is_approved) VALUES
  ('Marie Dubois', 'France', 'Résidence Permanente', 'Service exceptionnel! M. Mimb m''a guidé tout au long du processus de résidence permanente. Grâce à son expertise, ma famille et moi vivons maintenant à Montréal. Je recommande vivement ses services.', 5, true),
  ('John Smith', 'United Kingdom', 'Work Permit', 'Professional and efficient service. Franklin helped me secure my work permit in record time. His knowledge of Canadian immigration law is outstanding. Highly recommended!', 5, true),
  ('Ana Rodriguez', 'Colombia', 'Permis d''Études', 'Excellent accompagnement pour mon permis d''études. M. Mimb a été très professionnel et disponible pour répondre à toutes mes questions. Je commence mes études à McGill cet automne!', 5, true);