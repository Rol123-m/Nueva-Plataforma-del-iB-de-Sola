import {
  BookOpen,
  Crown,
  GraduationCap,
  Scroll,
  Compass,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Crown,
  GraduationCap,
  Scroll,
  Compass,
};

export function SubjectIcon({
  name,
  size = 18,
}: {
  name: string;
  size?: number;
}) {
  const Icon = ICONS[name] ?? BookOpen;
  return <Icon size={size} />;
}
