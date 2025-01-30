interface UserAvatarProps {
  linkSrcImg?: string;
  altImg?: string;
  fallback?: string;
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({
  linkSrcImg = "https://github.com/shadcn.png",
  altImg = "@shadcn",
  fallback = "CN",
}: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={linkSrcImg} alt={altImg} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
