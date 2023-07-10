import React, { useState } from "react";
import Button from "./ui/Button";
import { Icons } from "./Icons";
import { getEllipsisTxt } from "@/lib/utils";

const ConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <Button
      variant="default"
      className="bg-transparent hover:bg-transparent focus:ring-offset-0 focus:ring-transparent p-0"
    >
      {!isConnected ? (
        <Icons.Wallet />
      ) : (
        <div className="flex justify-center items-center gap-3">
          <Icons.UserCircle2 />
          <span className="text-lg">
            {getEllipsisTxt("0x39f14F6A8323fCE195Da213B9f6daf89935337B1")}
          </span>
        </div>
      )}
    </Button>
  );
};

export default ConnectButton;
