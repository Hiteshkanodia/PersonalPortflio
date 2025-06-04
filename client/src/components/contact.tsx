import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaDribbble } from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link for email client
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:hiteshkanodia34@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;

    window.open(mailtoLink, "_blank");

    toast({
      title: "Opening email client",
      description:
        "Your default email application will open with the message pre-filled.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hiteshkanodia/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: "hsl(var(--neutral))" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-[hsl(var(--text))] max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-[hsl(var(--text))] font-medium mb-2"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="block text-[hsl(var(--text))] font-medium mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="block text-[hsl(var(--text))] font-medium mb-2"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange("subject")}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="block text-[hsl(var(--text))] font-medium mb-2"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent resize-vertical"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[hsl(var(--accent))] text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-[hsl(var(--accent))] text-xl w-8" />
                  <span className="text-[hsl(var(--text))] ml-4">
                    hiteshkanodia34@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[hsl(var(--accent))] text-xl w-8" />
                  <span className="text-[hsl(var(--text))] ml-4">
                    +91 9602953930
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[hsl(var(--accent))] text-xl w-8" />
                  <span className="text-[hsl(var(--text))] ml-4">
                    Noida, India
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 bg-[hsl(var(--accent))] text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-white rounded-xl shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  Quick Response
                </h4>
                <p className="text-[hsl(var(--text))] text-sm mb-4">
                  I typically respond to emails within 24 hours. For urgent
                  inquiries, feel free to call directly.
                </p>
                <div className="flex items-center text-sm text-[hsl(var(--accent))]">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>Available Mon-Fri, 9AM-6PM IST</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
