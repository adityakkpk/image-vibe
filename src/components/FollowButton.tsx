"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      await toggleFollow(userId)
      toast.success("User followed successfully")
    } catch (error) {
      toast.error("Error following user");
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={handleClick}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? <Loader2Icon className="size-3 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
