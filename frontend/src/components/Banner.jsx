import React from "react";
import { Shirt, Star, Gem, Scissors, Shield, Grid, Network, Layers } from "lucide-react";

const styles = [
  { icon: <Shirt className="w-4 h-4" />, label: "Teddies & Bodysuits" },
  { icon: <Star className="w-4 h-4" />, label: "Embroidery" },
  { icon: <Gem className="w-4 h-4" />, label: "Luxury Satin" },
  { icon: <Scissors className="w-4 h-4" />, label: "Crotchless Lingerie" },
  { icon: <Shield className="w-4 h-4" />, label: "Leather" },
  { icon: <Grid className="w-4 h-4" />, label: "Sheer Mesh" },
  { icon: <Network className="w-4 h-4" />, label: "Fishnets" },
  { icon: <Layers className="w-4 h-4" />, label: "Garter Lingerie" },
];

const StylesSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-purple-950 to-black text-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-10">
        SUITABLE FOR DIFFERENT STYLES
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {styles.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-pink-200/90 hover:bg-pink-300 text-gray-900 rounded-full px-6 py-3 text-sm font-medium cursor-pointer transition-transform transform hover:scale-105"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StylesSection;
