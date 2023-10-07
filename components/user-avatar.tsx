import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { UseFormProps } from "react-hook-form";

interface UserAvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: string;
}
export const UserAvatar = ({
  alt = "avatar",
  src,
  className,
  fallback,
}: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};
