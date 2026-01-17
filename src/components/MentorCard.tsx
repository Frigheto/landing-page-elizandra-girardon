import { ArrowUpRight, Star } from "lucide-react";

interface MentorCardProps {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
}

const MentorCard = ({ name, specialty, experience, rating, image }: MentorCardProps) => {
  return (
    <div className="mentor-card group cursor-pointer">
      <img 
        src={image}
        alt={name}
        className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
            {specialty}
          </span>
          <div className="flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full">
            <span className="text-xs font-medium text-foreground">{rating}</span>
            <Star className="w-3 h-3 fill-primary text-primary" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-heading text-xl font-medium text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{experience}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
