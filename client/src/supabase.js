import { createClient } from '@supabase/supabase-js'



const supabaseUrl = 'https://lpaghjphgnsnxnlbgvdb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYWdoanBoZ25zbnhubGJndmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxMzc2OTMsImV4cCI6MjAwMzcxMzY5M30.KYUqTlXrPuwmMSTbha9tZ7SIFFgQpBNDqMqShF2s7FQ'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase