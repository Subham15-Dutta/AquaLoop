// Generated types from Supabase Schema
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      sensor_readings: {
        Row: {
          id: number
          ph: number
          tds: number | null
          turbidity: number | null
          temperature: number | null
          water_level: number | null
          flow_rate: number | null
          created_at: string
        }
        Insert: {
          id?: never
          ph: number
          tds?: number | null
          turbidity?: number | null
          temperature?: number | null
          water_level?: number | null
          flow_rate?: number | null
          created_at?: string
        }
        Update: {
          id?: never
          ph?: number
          tds?: number | null
          turbidity?: number | null
          temperature?: number | null
          water_level?: number | null
          flow_rate?: number | null
          created_at?: string
        }
      }
      water_classification: {
        Row: {
          id: number
          sensor_reading_id: number | null
          water_quality: string | null
          quality_score: number | null
          treatment_path: Json | null
          reason: string | null
          created_at: string
        }
        Insert: {
          id?: never
          sensor_reading_id?: number | null
          water_quality?: string | null
          quality_score?: number | null
          treatment_path?: Json | null
          reason?: string | null
          created_at?: string
        }
        Update: {
          id?: never
          sensor_reading_id?: number | null
          water_quality?: string | null
          quality_score?: number | null
          treatment_path?: Json | null
          reason?: string | null
          created_at?: string
        }
      }
      treatment_plans: {
        Row: {
          id: number
          classification_id: number | null
          recommended_path: Json | null
          number_of_stages: number | null
          average_efficiency: number | null
          created_at: string
        }
        Insert: {
          id?: never
          classification_id?: number | null
          recommended_path?: Json | null
          number_of_stages?: number | null
          average_efficiency?: number | null
          created_at?: string
        }
        Update: {
          id?: never
          classification_id?: number | null
          recommended_path?: Json | null
          number_of_stages?: number | null
          average_efficiency?: number | null
          created_at?: string
        }
      }
      water_predictions: {
        Row: {
          id: number
          predicted_demand: number | null
          prediction_horizon: string | null
          confidence_score: number | null
          created_at: string
        }
        Insert: {
          id?: never
          predicted_demand?: number | null
          prediction_horizon?: string | null
          confidence_score?: number | null
          created_at?: string
        }
        Update: {
          id?: never
          predicted_demand?: number | null
          prediction_horizon?: string | null
          confidence_score?: number | null
          created_at?: string
        }
      }
      leak_alerts: {
        Row: {
          id: number
          leak_detected: boolean | null
          severity: string | null
          description: string | null
          created_at: string
        }
        Insert: {
          id?: never
          leak_detected?: boolean | null
          severity?: string | null
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: never
          leak_detected?: boolean | null
          severity?: string | null
          description?: string | null
          created_at?: string
        }
      }
      system_metrics: {
        Row: {
          id: number
          freshwater_saved: number | null
          recycled_water_used: number | null
          water_reuse_percentage: number | null
          created_at: string
        }
        Insert: {
          id?: never
          freshwater_saved?: number | null
          recycled_water_used?: number | null
          water_reuse_percentage?: number | null
          created_at?: string
        }
        Update: {
          id?: never
          freshwater_saved?: number | null
          recycled_water_used?: number | null
          water_reuse_percentage?: number | null
          created_at?: string
        }
      }
      users: {
        Row: {
          id: number
          name: string | null
          email: string | null
          role: string | null
          created_at: string
        }
        Insert: {
          id?: never
          name?: string | null
          email?: string | null
          role?: string | null
          created_at?: string
        }
        Update: {
          id?: never
          name?: string | null
          email?: string | null
          role?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
