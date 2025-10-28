"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Crown, Star, Users, MessageCircle, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Tony's Pizzeria"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Pizza Made Fresh Daily"
          description="Experience the taste of Italy with our wood-fired pizzas, made from the finest ingredients and traditional recipes passed down through generations."
          tag="Family Recipe"
          tagIcon={Crown}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Order Now", href: "https://order.tonys-pizzeria.com" }
          ]}
          imageSrc="https://images.pexels.com/photos/5848281/pexels-photo-5848281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Delicious wood-fired pizza with fresh ingredients"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="For over 30 years, we've been serving authentic Italian pizza made with love, using traditional recipes and the freshest ingredients to create unforgettable dining experiences for families and pizza lovers."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Signature Pizzas"
          description="Handcrafted with premium ingredients and baked to perfection in our wood-fired oven"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Margherita Classica",
              price: "$18.99",
              imageSrc: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh Margherita pizza with basil"
            },
            {
              id: "2",
              name: "Pepperoni Supreme",
              price: "$21.99",
              imageSrc: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pepperoni pizza with melted cheese"
            },
            {
              id: "3",
              name: "Quattro Formaggi",
              price: "$24.99",
              imageSrc: "https://images.pexels.com/photos/6493111/pexels-photo-6493111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Four cheese pizza gourmet style"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate people behind every delicious pizza"
          tag="Our Family"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Tony Marcelli",
              role: "Head Chef & Owner",
              description: "Third-generation pizza maker from Naples, bringing authentic Italian flavors to every dish.",
              imageSrc: "https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Tony Marcelli"
            },
            {
              id: "2",
              name: "Maria Santos",
              role: "Kitchen Manager",
              description: "Expert in traditional Italian cuisine with over 15 years of experience in fine dining.",
              imageSrc: "https://images.pexels.com/photos/6327560/pexels-photo-6327560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Santos"
            },
            {
              id: "3",
              name: "Marco Rivera",
              role: "Pizza Chef",
              description: "Specialist in wood-fired cooking techniques, ensuring every pizza is perfectly crafted.",
              imageSrc: "https://images.pexels.com/photos/6205639/pexels-photo-6205639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marco Rivera"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real reviews from pizza lovers who keep coming back"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Food Blogger",
              testimonial: "The best pizza in town! The wood-fired crust is absolutely perfect, and the ingredients taste incredibly fresh. Tony's is now our family's go-to spot.",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Regular Customer",
              testimonial: "I've been coming here for 5 years and the quality never disappoints. The Margherita is a masterpiece - simple ingredients executed flawlessly.",
              imageSrc: "https://images.pexels.com/photos/6605273/pexels-photo-6605273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Food Enthusiast",
              testimonial: "Authentic Italian pizza that reminds me of my trips to Naples. The atmosphere is warm and welcoming, and the service is outstanding.",
              imageSrc: "https://images.pexels.com/photos/6327151/pexels-photo-6327151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "John Martinez",
              role: "Business Owner",
              testimonial: "Perfect for business lunches or family dinners. The staff knows how to make every visit special, and the pizza is consistently excellent.",
              imageSrc: "https://images.pexels.com/photos/34434634/pexels-photo-34434634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Emma Wilson",
              role: "Mother of Three",
              testimonial: "My kids absolutely love this place! It's become our weekly tradition. Great food, family-friendly atmosphere, and reasonable prices.",
              imageSrc: "https://images.pexels.com/photos/4473402/pexels-photo-4473402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "6",
              name: "David Rodriguez",
              role: "Pizza Connoisseur",
              testimonial: "As someone who's tried pizza all over the world, Tony's ranks among the best. The attention to detail and passion for quality really shows.",
              imageSrc: "https://images.pexels.com/photos/9566360/pexels-photo-9566360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Featured On"
          description="Trusted by food lovers and recognized by top platforms"
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7258491/pexels-photo-7258491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7363202/pexels-photo-7363202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7258491/pexels-photo-7258491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7258491/pexels-photo-7258491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about ordering and dining with us"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do you offer gluten-free pizza options?",
              content: "Yes! We offer delicious gluten-free crusts made with certified gluten-free flour. Please inform us of any allergies when ordering."
            },
            {
              id: "2",
              title: "How long does delivery take?",
              content: "Delivery typically takes 25-35 minutes during regular hours. During peak times (Friday-Sunday evenings), please allow 45-60 minutes."
            },
            {
              id: "3",
              title: "Do you take reservations?",
              content: "Yes, we accept reservations for parties of 4 or more. You can call us at (555) 123-PIZZA or book online through our website."
            },
            {
              id: "4",
              title: "What are your operating hours?",
              content: "We're open Monday-Thursday 11am-10pm, Friday-Saturday 11am-11pm, and Sunday 12pm-9pm. Kitchen stops taking orders 30 minutes before closing."
            },
            {
              id: "5",
              title: "Do you cater events?",
              content: "Absolutely! We offer catering packages for events of all sizes. Contact us at least 48 hours in advance to discuss your catering needs."
            },
            {
              id: "6",
              title: "Can I customize my pizza toppings?",
              content: "Of course! We love creating custom pizzas. Choose from our wide selection of fresh toppings, or let us know if you have special requests."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          title="Join Our Pizza Lovers Community"
          description="Get notified about new menu items, special offers, and exclusive events. Plus receive a 10% discount on your first online order!"
          inputPlaceholder="Enter your email address"
          buttonText="Join Now"
          termsText="By joining, you agree to receive promotional emails. You can unsubscribe anytime. We respect your privacy."
        />
      </div>
    </ThemeProvider>
  );
}