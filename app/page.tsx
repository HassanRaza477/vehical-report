
"use client";

import ReportFeatures from "@/components/ui/features";
import HeroSection from "@/components/ui/hero";
import VINSection from "@/components/ui/vinsection";
import FeatureSection from "@/components/ui/feature2";
import TrustSection from "@/components/ui/trust";
import CustomerLove from "@/components/ui/costumer";


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