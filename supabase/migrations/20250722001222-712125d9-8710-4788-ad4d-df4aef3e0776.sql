-- Create cleaning_service_quote table
CREATE TABLE public.cleaning_service_quote (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  
  -- Service Details
  service_type TEXT NOT NULL, -- 'office_cleaning', 'electrostatic_disinfection', 'janitorial', 'supply_restocking'
  property_type TEXT, -- 'office', 'medical', 'retail', 'educational', 'gym', 'other'
  square_footage INTEGER,
  number_of_rooms INTEGER,
  
  -- Scheduling
  frequency TEXT, -- 'daily', 'weekly', 'bi_weekly', 'monthly', 'one_time'
  preferred_time TEXT, -- 'morning', 'afternoon', 'evening', 'overnight'
  start_date DATE,
  
  -- Location
  address TEXT,
  city TEXT,
  postal_code TEXT,
  
  -- Additional Details
  special_requirements TEXT,
  additional_notes TEXT,
  budget_range TEXT,
  
  -- Quote Status
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'quoted', 'accepted', 'declined'
  quote_amount DECIMAL(10,2),
  quote_notes TEXT,
  quoted_at TIMESTAMP WITH TIME ZONE,
  
  -- Emergency/Priority
  is_urgent BOOLEAN DEFAULT false,
  requested_callback_time TEXT
);

-- Enable Row Level Security
ALTER TABLE public.cleaning_service_quote ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (typical for quote forms)
CREATE POLICY "Anyone can submit cleaning service quotes" 
ON public.cleaning_service_quote 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view cleaning service quotes" 
ON public.cleaning_service_quote 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update cleaning service quotes" 
ON public.cleaning_service_quote 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete cleaning service quotes" 
ON public.cleaning_service_quote 
FOR DELETE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_cleaning_service_quote_updated_at
BEFORE UPDATE ON public.cleaning_service_quote
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_cleaning_service_quote_status ON public.cleaning_service_quote(status);
CREATE INDEX idx_cleaning_service_quote_service_type ON public.cleaning_service_quote(service_type);
CREATE INDEX idx_cleaning_service_quote_created_at ON public.cleaning_service_quote(created_at);
CREATE INDEX idx_cleaning_service_quote_email ON public.cleaning_service_quote(email);