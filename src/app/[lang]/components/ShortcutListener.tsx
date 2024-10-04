"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation"; // For client-side navigation

export default function ShortcutListener() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname(); // To get the current path, including language

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); // Prevent the default behavior

        // Get the current language from the pathname (e.g., '/en', '/sv')
        const lang = pathname.split("/")[1]; // Assuming the language is the first segment of the URL

        // Check if 'BookDemo=true' is already in the URL
        const isModalOpen = searchParams.get("BookDemo") === "true";

        // Toggle the modal: open it if closed, close it if open
        if (isModalOpen) {
          router.push(`/${lang}`, { scroll: false }); // Close the modal without scrolling to the top
        } else {
          router.push(`/${lang}?BookDemo=true`, { scroll: false }); // Open the modal in the current language
        }
      }
    };

    // Add the event listener for keydown
    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [router, searchParams, pathname]);

  return null;
}
