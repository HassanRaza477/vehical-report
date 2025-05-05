
"use client";

import ReportFeatures from "@/components/ui/features";
import HeroSection from "@/components/ui/hero";
import VINSection from "@/components/ui/vinsection";
import FeatureSection from "@/components/ui/feature2";
import TrustSection from "@/components/ui/trust";
import CustomerLove from "@/components/ui/costumer";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import Footer from "@/components/ui/footer";
// import FAQSection from "@/components/ui/faq";
// import { useRouter } from 'next/navigation';
// // import VinForm from "@/components/ui/vinform";

// components/HomeSection.tsx

// components/HeroSection.tsx
// components/HeroSection.tsx

export default function Home() { 
  return (
    <>
    <HeroSection/>
    <VINSection/>
    <ReportFeatures/>
    <FeatureSection/>
    <TrustSection/>
    <CustomerLove/>
    </>
  )
}