export default function PremiumGate({ isPremium, children }: { isPremium: boolean, children: React.ReactNode }) {
    if (isPremium) {
          return <>{children}</>>;
    }
  
    return (
          <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-[#1A1A1A] mb-6 text-lg">
                        הפירוק המלא של המנגנון הזה זמין באזור החברים. זה דורש תשלום כי זה תוכן שנבנה בקפידה.
                </p>p>
                <button className="bg-[#D42B2B] text-[#FAFAF8] px-8 py-3 font-medium hover:bg-red-800 transition-colors">
                        אני רוצה לראות את ההמשך
                </button>button>
          </div>div>
        );
}</>
