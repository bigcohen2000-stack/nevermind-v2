export default function FactVsStory({ fact, story }: { fact: string, story: string }) {
    return (
          <div className="flex flex-col gap-6 my-10 bg-white p-6 border border-gray-100">
                <div>
                        <span className="text-sm font-bold mb-1 block text-[#1A1A1A]">העובדה</span>span>
                        <p className="text-[#1A1A1A] font-normal text-lg">{fact}</p>p>
                </div>div>
                <div className="mt-4">
                        <span className="text-sm font-bold mb-1 block text-gray-400">הסיפור</span>span>
                        <p className="text-gray-400 line-through text-lg">{story}</p>p>
                </div>div>
          </div>div>
        );
}</div>
