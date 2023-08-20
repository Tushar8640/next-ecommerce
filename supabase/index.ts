import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xkoumbcauydxvhkfukcz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhrb3VtYmNhdXlkeHZoa2Z1a2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NDk5ODAsImV4cCI6MjAwODAyNTk4MH0.aS2MwvgFXMjQPQ-QZIv71aG_BL2w__L4TM5qVDdEQhk"
);
