"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // For client-side navigation

export default function ShortcutListener() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      // Check if Command (on Mac) or Ctrl (on Windows) and K are pressed
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); // Prevent the default behavior

        // Check if 'BookDemo=true' is already in the URL
        const isModalOpen = searchParams.get("BookDemo") === "true";

        // Toggle the modal: open it if closed, close it if open
        if (isModalOpen) {
          router.push("/", { scroll: false }); // Close the modal without scrolling to the top
        } else {
          router.push("/?BookDemo=true", { scroll: false }); // Open the modal without scrolling to the top
        }
      }
    };

    // Add the event listener for keydown
    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [router, searchParams]);

  return null;
}
