"use client";

import { cn } from "@/lib/utils";
import { Member, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { UserAvatar } from "../user-avatar";

interface ServerMemberProps {
  server: Server;
  member: Member & { profile: Profile };
}

const roleIconMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className="h-4 w-4 ml-2 text-zinc-600" />,
  ADMIN: <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
};

export const ServerMember = ({ server, member }: ServerMemberProps) => {
  const router = useRouter();
  const params = useParams();

  const onClick = () => {
    return router.push(
      `/servers/${params?.serverId}/conversations/${member.id}`
    );
  };

  const icon = roleIconMap[member.role];
  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1 gap-x-2",
        params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <UserAvatar
        className="h-8 w-8 md:h-8 md:w-8"
        src={member.profile.imageUrl}
        alt={member.profile.name}
      />
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
        )}
      >
        {member.profile.name}
      </p>
      {icon}
    </button>
  );
};
