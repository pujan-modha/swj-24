import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CouponPopupProps {
  onClose: () => void;
}

export function CouponPopup({ onClose }: CouponPopupProps) {
  const [coupon, setCoupon] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://swj-server.ayushcodings.me/api/v1/coupon/generateCoupon")
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200 && data.data) {
          setCoupon(data.data);
        } else {
          setError("Failed to generate coupon");
        }
      })
      .catch(() => setError("Failed to generate coupon"));
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md border-2 border-brand">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Special Offer!</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : coupon ? (
            <>
              <p className="mb-4">
                Share this exclusive coupon code at the SWJ desk and get a
                Surprise!!
              </p>
              <p className="text-2xl font-bold text-center p-4 bg-primary text-primary-foreground rounded">
                {coupon}
              </p>
            </>
          ) : (
            <p>Generating your coupon...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
