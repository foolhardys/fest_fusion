import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const SingleEventCard = ({ image }: any) => {
  return (
    <Card className="rounded-md w-[350px] min-h-50 flex items-center justify-center flex-col my-1 bg-card/50 p-4 outline-none shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)]">
      <CardContent>
        <Image src={image} alt="logo" className="rounded-md w-full h-full" />
      </CardContent>
      <CardFooter className="flex flex-col w-full items-center justify-center">
        <h1 className="text-xl font-semibold text-primary mb-2">Details</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-sm font-normal">
            Venue : <span className="font-light">IIT Bombay</span>
          </p>
          <p className="text-sm font-normal">
            Date : <span className="font-light">2022-10-10</span>
          </p>
          <p className="text-sm font-normal">
            Fee : <span className="font-light">Free</span>
          </p>
          <Button variant="secondary" className="text-sm font-normal w-[195px]">
            Apply
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SingleEventCard;
