"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ProfileMenu from "./profileMenu";

const layout = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    return (
        <div className="md:flex gap-10 md:py-10 py-5">
            <div className="md:w-[30%]">
                <ProfileMenu></ProfileMenu>
            </div>
            <div className="w-full space-y-3">
                {/* <ProfileHeader></ProfileHeader> */}
                {children}
            </div>
        </div>
    );
};

export default layout;