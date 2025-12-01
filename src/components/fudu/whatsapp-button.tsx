import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function WhatsappButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="w-8 h-8 text-white" />
      </Link>
    </Button>
  );
}
