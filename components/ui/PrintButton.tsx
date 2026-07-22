"use client";

import { Button } from "@/components/ui/Button";

export function PrintButton() {
  return (
    <Button variant="outline" size="md" onClick={() => window.print()}>
      Print Resume
    </Button>
  );
}
