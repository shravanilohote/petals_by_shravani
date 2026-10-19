import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { buildWhatsAppUrl } from '../../utils/formatters';
import { MessageCircle, MapPin, Send, Mail, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; contact?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; contact?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Please provide your phone number or email';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please write a message with at least 5 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleForwardToWhatsApp = () => {
    const formattedMsg = `🌷 *Website Message from ${formData.name}*\n• Contact: ${formData.contact}\n• Message:\n"${formData.message}"`;
    const url = buildWhatsAppUrl(formattedMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGeneralWhatsApp = () => {
    const url = buildWhatsAppUrl('Hello Shravani! 🌷 I have a quick question about Petals by Shravani.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFCF9] border-t border-[#F3D9DE]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Boutique Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C78391] bg-[#FAF0F3] px-3.5 py-1 rounded-full border border-[#F3D9DE]">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#45353A] font-semibold leading-tight">
              Let's Talk About Your Dream Blooms ♡
            </h2>

            <p className="text-sm text-[#7E6C72] leading-relaxed">
              Have an idea for a birthday gift, desk bloom, or customized keychain? Shravani is always happy to brainstorm colors and designs with you.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Phone / WhatsApp */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#F3D9DE]">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#45353A]">Call / WhatsApp</h4>
                  <a
                    href={`tel:+${BUSINESS_CONFIG.whatsappNumber}`}
                    className="text-xs text-[#704657] font-semibold hover:underline"
                  >
                    {BUSINESS_CONFIG.whatsappDisplayNumber}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#F3D9DE]">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#45353A]">Email Us</h4>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-xs text-[#704657] font-semibold hover:underline"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#F3D9DE]">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#45353A]">Craft Studio Location</h4>
                  <p className="text-xs text-[#7E6C72]">{BUSINESS_CONFIG.location}</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#F3D9DE]">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F3] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#45353A]">Instagram DM</h4>
                  <a
                    href={BUSINESS_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#704657] font-medium hover:underline"
                  >
                    {BUSINESS_CONFIG.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Fast WhatsApp Chat Button */}
              <button
                onClick={handleGeneralWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] text-xs font-semibold transition-colors shadow-md mt-2"
              >
                <MessageCircle className="w-4 h-4 text-[#F3D9DE]" />
                <span>Chat Instantly on WhatsApp (+91 72766 69806)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FFF8F2] p-6 sm:p-8 rounded-3xl border border-[#F3D9DE] shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-[#45353A] mb-1">
              Send a Note to Shravani
            </h3>
            <p className="text-xs text-[#7E6C72] mb-6">
              Fill in your details below and we will get back to you lovingly.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#FAF0F3] border border-[#F3D9DE] text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FFF8F2] border border-[#F3D9DE] flex items-center justify-center text-[#704657]">
                  <CheckCircle2 className="w-6 h-6 text-[#99AA8F]" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#45353A]">
                  Thank you for reaching out, {formData.name}! ♡
                </h4>
                <p className="text-xs text-[#7E6C72] leading-relaxed max-w-md mx-auto">
                  Note: As this is a live frontend client demo, to make sure your message is received instantly without any delays, please forward it straight to WhatsApp below.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleForwardToWhatsApp}
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] text-xs font-semibold shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F3D9DE]" />
                    <span>Forward to Shravani on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#45353A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF0F3] border border-[#F3D9DE] text-[#45353A] placeholder-[#7E6C72] focus:outline-none focus:ring-1 focus:ring-[#C78391]"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#45353A] mb-1">
                    Your Phone or Email *
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => {
                      setFormData({ ...formData, contact: e.target.value });
                      if (errors.contact) setErrors({ ...errors, contact: undefined });
                    }}
                    placeholder="e.g. 9876543210 or yourname@gmail.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF0F3] border border-[#F3D9DE] text-[#45353A] placeholder-[#7E6C72] focus:outline-none focus:ring-1 focus:ring-[#C78391]"
                  />
                  {errors.contact && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.contact}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#45353A] mb-1">
                    Your Message or Flower Request *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us what flower arrangement or occasion you're planning..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF0F3] border border-[#F3D9DE] text-[#45353A] placeholder-[#7E6C72] focus:outline-none focus:ring-1 focus:ring-[#C78391]"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#704657] hover:bg-[#532F3F] text-[#FFF8F2] text-xs font-semibold shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
