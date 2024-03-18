import React from "react";


function App() {
  return (
    <div>
      <h1 className="text-center text-white p-6 hover:text-yellow-400 bg-blue-900 text-2xl">
        About deepanshuCoder
      </h1>
      <div>
      <div className="flex justify-center items-center h-0">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-brown-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
      </div>
      <div className="flex bg-blue-900 max-w-640px flex-wrap gap-2">
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-0">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-brown-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
      <div className="w-full bg-stone-600 justify-center items-center text-center p-6 flex gap-7 flex-wrap max-w-640px h-full ">
        <div className="w-56 h-56 mt-36 mb-12 h-52 bg-blue-300 rounded-md hover:bg-slate-700 hover:text-white p-1 hover:scale-125 max-w-640px h-56">
          <h1 className="font-bold text-xl"> What deepanshuCoder</h1>
          <p className="m-2 text-xl">
            "DeepanshuCoder is your go-to source for expert coding insights and
            solutions".
          </p>
        </div>
        <div className="flex justify-center items-center h-0 ">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-brown-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
        <div className="w-56 h-56  mt-24 bg-blue-300 rounded-md hover:bg-slate-700 hover:text-white p-1 hover:rotate-45 hover:scale-125">
          <h1 className="font-bold text-xl">Who deepanshuCoder</h1>
          <p className="m-2 text-lg">
            "DeepanshuCoder is a passionate coding enthusiast dedicated to
            sharing knowledge and expertise with the developer community".
          </p>
        </div>
        <div className="flex justify-center items-center h-0">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-brown-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
        <div className="w-56 h-56 mt-24 bg-blue-300 rounded-md hover:bg-slate-700 hover:text-white p-1 hover:rotate-45 hover:scale-125">
          <h1 className="font-bold text-xl">Why deepanshuCoder</h1>
          <p className="m-2 text-lg">
            "DeepanshuCoder stands out because of its commitment to providing
            high-quality, practical coding content".
          </p>
        </div>
        <div className="flex justify-center items-center h-0">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-brown-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
        <div className="w-56 h-56 mt-24 bg-blue-300 rounded-md hover:bg-slate-700 hover:text-white p-1 hover:rotate-45 hover:scale-125">
          <h1 className="font-bold text-xl">How deepanshuCoder</h1>
          <p className="m-2 text-lg">
            "DeepanshuCoder achieves its mission by creating engaging and
            informative coding, resources and articles".{" "}
          </p>
        </div>
        <div className="flex justify-center items-center h-0">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-brown-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
        <div className="w-60 h-56 mt-24 bg-blue-300 rounded-md hover:bg-slate-700 hover:text-white p-1 hover:scale-125">
          <h1 className="font-bold text-lg">Excellent deepanshuCoder</h1>
          <p className="m-2 text-lg">
            "DeepanshuCoder is renowned for its excellence in the field of
            coding. With a focus on clarity, depth, and practicality".{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-0">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute animate-bubble w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute animate-bubble w-6 h-6 bg-yellow-500 rounded-full" style={{left: '20px', animationDelay: '0.5s'}}></div>
        <div className="absolute animate-bubble w-8 h-8 bg-green-200 rounded-full" style={{left: '40px', animationDelay: '1.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-pink-200 rounded-full" style={{left: '60px', animationDelay: '1.5s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-white-200 rounded-full" style={{left: '60px', animationDelay: '0.2s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-violet-200 rounded-full" style={{left: '60px', animationDelay: '1.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-wheat-400 rounded-full" style={{left: '60px', animationDelay: '0.8s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-red-200 rounded-full" style={{left: '60px', animationDelay: '1.6s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-orange-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-gray-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-purple-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        <div className="absolute animate-bubble w-6 h-6 bg-tan-200 rounded-full" style={{left: '60px', animationDelay: '0.7s'}}></div>
        {/* Bubble Animation */}
        <style>
          {`
          @layer keyframes {
            @keyframes bubble {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
              }
            }
          }
          
          @layer utilities {
            .animate-bubble {
              animation: bubble 2s linear infinite;
            }
          }
          `}
        </style>
      </div>
    </div>
    </div>
  );
}

export default App;