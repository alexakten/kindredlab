"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // For client-side navigation
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CommandKProps = {
  isVisible: boolean;
};

export default function CommandK({ isVisible }: CommandKProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyWebsite: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle closing the modal when clicking outside
  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      router.push("/"); // Close the modal by removing 'BookDemo=true' from the URL
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", companyWebsite: "" }); // Clear the form
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null; // Don't render the modal if not visible

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white bg-opacity-10 backdrop-blur-md"
      onMouseDown={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl rounded-2xl bg-white p-6 text-black shadow-lg"
      >
        <h2 className="text-2xl font-semibold">Contact the team</h2>
        <p className="mt-4 opacity-50">
          Tell us about your project and we'll be in touch.
        </p>
        <p className="mt-4 text-xs font-medium text-blue-600">REQUIRED *</p>

        {message && (
          <p
            className={`mb-4 ${message.includes("success") ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid grid-cols-2 gap-x-4">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">
                Email <span className="text-blue-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="companyWebsite">Company Website</Label>
              <Input
                id="companyWebsite"
                type="url"
                placeholder="Your company website"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex w-full justify-end">
            <Button type="submit" className="mt-8" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
