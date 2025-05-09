// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hsqhjhkfzlckgjqfztnv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcWhqaGtmemxja2dqcWZ6dG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0Mzk4MjIsImV4cCI6MjA2MjAxNTgyMn0.KZgQ_nRXa27BoYhyl8uPWBRDCR9QLB9675sQOAGlpWU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
