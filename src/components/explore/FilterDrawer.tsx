import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { filters } from "@/constants";

const FilterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <span className="mr-2">
            <MixerHorizontalIcon />
          </span>
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[90vh] flex items-center justify-center flex-col md:w-[600px] w-full mx-auto">
          <DrawerHeader className="w-full mx-auto">
            <DrawerTitle className="text-2xl font-semibold text-center">
              Filters
            </DrawerTitle>
            <DrawerDescription>
              <div className="mx-auto">
                {filters.map((filter) => (
                  <p key={filter.label}>
                    <span
                      className={`md:w-[600px] w-[100px] mb-1 ${
                        filter.label === "All" ? "active" : ""
                      }`}
                    >
                      {filter.label === "All" ? (
                        <Toggle>
                          <p className="w-[250px]">All</p>
                        </Toggle>
                      ) : (
                        <div>
                          <p className="text-lg font-medium text-primary">{filter.label}</p>
                          {filter?.options?.map((option) => (
                            <p key={option.label} className="my-1">
                              <Toggle className="w-[250px] md:w-[600px]">{option.label}</Toggle>
                            </p>
                          ))}
                        </div>
                      )}
                    </span>
                  </p>
                ))}
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex gap-2">
              <Button variant="ghost">Apply</Button>
              <DrawerClose>
                <Button variant="destructive">Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
