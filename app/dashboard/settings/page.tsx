"use client";

import { Bell, KeyIcon, Loader, User2Icon } from "lucide-react";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import { Copy, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthContext } from "@/contexts/AuthProvider";
import * as api from "@/lib/api";
import { toast } from "sonner";
import { error } from "next/dist/build/output/log";

const SettingsPage = () => {
  const { user, setUser } = useAuthContext();
  const [userData, setUserData] = useState<api.UpdateUserDto>({
    firstName: user?.firstName,
    lastName: user?.lastName,
  });

  const [isUpdatingUser, setIsUpdatingUser] = useState(false);

  const handleUpdateUser = async () => {
    setIsUpdatingUser(true);
    const res = await api.user.userControllerUpdateProfileV1({
      auth: localStorage.getItem("authToken")!,
      body: userData,
    });

    if (res.error) {
      console.log(error);
      toast.error("Failed to update profile", {
        description: res.error.message,
      });
    } else {
      toast.success("User Profile Updated");
      setUser(res.data);
    }

    setIsUpdatingUser(false);
  };

  return (
    <div className="space-y-8 p-10">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-light">
          Accounts Settings
        </h1>
        <p className="text-sm sm:text-sm text-zinc-500 mt-1">
          Manage your personal profile, notification preference, and API
          credentials
        </p>
      </div>

      <div className="w-full border border-zinc-100 shadow-sm bg-white rounded-xl p-5 space-y-5">
        <div className="flex w-full gap-2 pb-5 border-b border-zinc-100">
          <div className="bg-secondary rounded-md h-10 w-10 flex justify-center items-center">
            <User2Icon />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-bold text-xl">Profile Information</h2>
            <p className="text-gray-500 text-xs">
              Update your account name and primary email.
            </p>
          </div>
        </div>

        <form className="flex items-center justify-start gap-7">
          <div className="w-full space-y-2">
            <Label htmlFor="first-name">FIRST NAME</Label>
            <Input
              placeholder="John"
              type="text"
              value={userData.firstName}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="last-name">LAST NAME</Label>
            <Input
              placeholder="Doe"
              type="text"
              value={userData.lastName}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
        </form>
        <div className="w-full flex justify-end items-center">
          <Button disabled={isUpdatingUser} onClick={handleUpdateUser}>
            {isUpdatingUser && <Loader className="animate-spin" />} Save Profile
          </Button>
        </div>
      </div>

      <div className="w-full border border-zinc-100 shadow-sm bg-white rounded-xl gap-y-5 flex flex-col justify-start items-center p-5">
        <div className="flex w-full gap-2 pb-5 border-b border-zinc-100">
          <div className="bg-secondary rounded-md h-10 w-10 flex justify-center items-center">
            <Bell />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-bold text-xl">Email Notification</h2>
            <p className="text-gray-500 text-xs">
              Choose what events you receive email updates for.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4">
          <FieldLabel>
            <Field orientation="horizontal">
              <Checkbox id="toggle-checkbox-1" name="toggle-checkbox-1" />
              <FieldContent>
                <FieldTitle>Instants Submission Alerts</FieldTitle>
                <FieldDescription>
                  Receive an immediate notification whenever any form endpoint
                  receives valid data.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
          <FieldLabel>
            <Field orientation="horizontal">
              <Checkbox id="toggle-checkbox-1" name="toggle-checkbox-1" />
              <FieldContent>
                <FieldTitle>Weekly Digest & Analytics</FieldTitle>
                <FieldDescription>
                  Receive a Monday morning breakdown of submission traffic and
                  conversion metrics.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </div>
      </div>

      <div className="w-full border border-zinc-100 shadow-sm bg-white rounded-[15px] flex flex-col justify-center items-center p-5 space-y-5">
        <div className="flex gap-3 w-full items-start justify-start border-b pb-5 border-gray-200">
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-md">
            <KeyIcon />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="font-bold text-xl]">Developer API Key</h2>
            <p className="text-gray-500 text-xs">
              {" "}
              Use this secret key to authenticate REST API requests.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full gap-2">
          <Input value={"fl_live_9a2f7c814b6e5108d43cb"} readOnly />
          <div className="flex items-center justify-center gap-2">
            <Button variant={"secondary"}>
              <Copy /> Copy Key
            </Button>
            <Button>
              <RefreshCw /> Rotate
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-start items-center">
          <p className="text-gray-500 text-[12px]">
            Keep this key confidential. Never expose it in client-side public
            bundles.
          </p>
        </div>
      </div>

      <div className="w-full border border-destructive bg-destructive/5 shadow-sm rounded-xl flex flex-col justify-start items-center space-y-5 p-5">
        <div className="flex gap-3 items-start justify-start w-full border-b pb-4 border-red-200">
          <div className="flex justify-center items-center bg-red-100 h-10 w-10 rounded-md">
            <TriangleAlert className="text-destructive" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="font-bold text-xl">Danger Zone</h2>
            <p className="text-destructive text-xs">
              Irreversible actions regarding your account and endpoints.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-start items-center">
          <div className="w-full flex flex-col items-start justify-center">
            <h3 className="font-semibold text-sm">
              Delete Account & Clear All Data
            </h3>
            <p className="text-destructive text-xs">
              Permanently remove your account,active form endpoints,and all
              historical informations logs
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Button variant="destructive" className="bg-red-500 text-white">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
