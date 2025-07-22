import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Building2, Calendar, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    services: [] as string[],
    details: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('cleaning_service_quote')
        .insert({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company,
          service_type: formData.services.join(', '),
          city: formData.location,
          additional_notes: formData.details || null,
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours with a customized quote.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        services: [],
        details: ""
      });
      
      // Reset form fields
      const form = e.target as HTMLFormElement;
      form.reset();
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-professional-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us about your cleaning needs and we'll provide a customized solution that fits your budget and schedule.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue-light rounded-full w-12 h-12 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Custom Solutions</h3>
                  <p className="text-muted-foreground">Tailored to your business size and needs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-brand-green-light rounded-full w-12 h-12 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">We work around your business hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue-light rounded-full w-12 h-12 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Local Service</h3>
                  <p className="text-muted-foreground">Serving GTA, Hamilton & Oakville</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="animate-slide-in-right shadow-clean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-brand-blue" />
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required 
                      className="transition-all duration-300 focus:scale-105" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required 
                      className="transition-all duration-300 focus:scale-105" 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    required 
                    className="transition-all duration-300 focus:scale-105" 
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required 
                      className="transition-all duration-300 focus:scale-105" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="transition-all duration-300 focus:scale-105" 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="location">Service Location *</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)} required>
                    <SelectTrigger className="transition-all duration-300 focus:scale-105">
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toronto">Toronto</SelectItem>
                      <SelectItem value="mississauga">Mississauga</SelectItem>
                      <SelectItem value="brampton">Brampton</SelectItem>
                      <SelectItem value="hamilton">Hamilton</SelectItem>
                      <SelectItem value="oakville">Oakville</SelectItem>
                      <SelectItem value="burlington">Burlington</SelectItem>
                      <SelectItem value="markham">Markham</SelectItem>
                      <SelectItem value="vaughan">Vaughan</SelectItem>
                      <SelectItem value="other">Other GTA Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-base font-medium mb-3 block">Services Interested In:</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Office Cleaning",
                      "Electrostatic Disinfection", 
                      "Janitorial Services",
                      "Supply Restocking"
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service.toLowerCase().replace(/\s+/g, '-')} 
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label 
                          htmlFor={service.toLowerCase().replace(/\s+/g, '-')}
                          className="text-sm cursor-pointer"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea 
                    id="details" 
                    value={formData.details}
                    onChange={(e) => handleInputChange('details', e.target.value)}
                    placeholder="Tell us about your space size, cleaning frequency preferences, special requirements, etc."
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full transform transition-all duration-300 hover:scale-105 active:scale-95"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get My Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;