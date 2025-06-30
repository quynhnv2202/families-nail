import { useRouter } from "next/router";

export default function BookingTypeModal({ onClose }) {
  const router = useRouter();

  const goTo = (type) => {
    router.push(`/book?type=${type}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-cream p-8 rounded-2xl max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center text-text-coffee mb-6">
          Families Nail Booking
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => goTo("single")}
            className="w-full py-3 bg-white border border-text-coffee rounded-full font-semibold"
          >
            Only me
          </button>
          <button
            onClick={() => goTo("group")}
            className="w-full py-3 bg-white border border-text-coffee rounded-full font-semibold"
          >
            Group booking
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 text-sm text-center text-text-coffee/70 hover:underline block w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
