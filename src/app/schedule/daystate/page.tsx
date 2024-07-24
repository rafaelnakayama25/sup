import { Check, X, Dot } from "lucide-react";

export default function DayState({ day }: { day: boolean | undefined }) {
  let icon;
  let iconColor = "";
  let iconSize = 20;

  if (day === true) {
    icon = Check;
    iconColor = "text-green-500";
  } else if (day === false) {
    icon = X;
    iconColor = "text-red-500";
  } else {
    icon = Dot;
    iconColor = "text-gray-500";
    iconSize = 24;
  }

  const IconComponent = icon;

  return (
    <div className="flex items-center justify-center h-9">
      <IconComponent className={iconColor} size={iconSize} />
    </div>
  );
}
