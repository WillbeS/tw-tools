import { Feature } from "@/lib/types";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="text-center">
      <div
        className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
      <p className="text-slate-300">{feature.description}</p>
    </div>
  );
}
