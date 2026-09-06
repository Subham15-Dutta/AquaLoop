-- =====================================================
-- AQUA LOOP - Supabase Seed Data
-- Run this in your Supabase SQL Editor to populate initial data
-- =====================================================

-- Insert sample sensor readings
INSERT INTO public.sensor_readings (ph, tds, turbidity, temperature, water_level, flow_rate, created_at)
VALUES
  (7.2, 320.0, 4.5, 26.5, 78.5, 45.2, NOW() - INTERVAL '1 hour'),
  (7.1, 315.0, 4.2, 26.8, 77.8, 44.8, NOW() - INTERVAL '45 minutes'),
  (7.3, 330.0, 4.8, 27.1, 76.9, 46.1, NOW() - INTERVAL '30 minutes'),
  (7.0, 310.0, 4.0, 26.3, 79.2, 43.9, NOW() - INTERVAL '15 minutes'),
  (7.2, 325.0, 4.3, 26.6, 78.1, 45.0, NOW());

-- Insert sample water classification
INSERT INTO public.water_classification (sensor_reading_id, water_quality, quality_score, treatment_path, reason, created_at)
VALUES
  (5, 'GOOD', 90.0, '["C"]'::jsonb, 'Water quality is already good. Only UV disinfection required.', NOW());

-- Insert sample treatment plan
INSERT INTO public.treatment_plans (classification_id, recommended_path, number_of_stages, average_efficiency, created_at)
VALUES
  (1, '["C"]'::jsonb, 1, 99.0, NOW());

-- Insert sample water predictions
INSERT INTO public.water_predictions (predicted_demand, prediction_horizon, confidence_score, created_at)
VALUES
  (890.0, '24h', 0.89, NOW() - INTERVAL '1 hour'),
  (920.0, '24h', 0.91, NOW());

-- Insert sample leak alerts
INSERT INTO public.leak_alerts (leak_detected, severity, description, created_at)
VALUES
  (false, 'info', 'Routine anomaly check passed. No leaks detected.', NOW() - INTERVAL '2 hours'),
  (false, 'info', 'Flow balance verification completed successfully.', NOW() - INTERVAL '1 hour');

-- Insert sample system metrics (sustainability)
INSERT INTO public.system_metrics (freshwater_saved, recycled_water_used, water_reuse_percentage, created_at)
VALUES
  (280000.0, 280000.0, 84.5, NOW() - INTERVAL '7 days'),
  (285000.0, 285000.0, 85.1, NOW() - INTERVAL '5 days'),
  (290000.0, 290000.0, 85.8, NOW() - INTERVAL '3 days'),
  (295000.0, 295000.0, 86.2, NOW());

-- Insert sample users
INSERT INTO public.users (name, email, role, created_at)
VALUES
  ('Admin User', 'admin@aqualoop.com', 'Administrator', NOW()),
  ('Plant Manager', 'manager@aqualoop.com', 'Manager', NOW()),
  ('Operations Team', 'ops@aqualoop.com', 'Operator', NOW());
