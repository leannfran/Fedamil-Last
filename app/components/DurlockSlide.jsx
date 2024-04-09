'use client'
export default function DurlockSlide({ title, description, applications, resistances, imageUrl, altText }) {
    return (
      <div className="flex  flex-col-reverse md:flex-row items-start bg-white mx-2 my-10 rounded-lg shadow-xl h-full  md:h-96">
      <div className="flex flex-col justify-between p-4 gap-4 md:w-1/2 md:h-full">
        <h3 className="md:text-lg font-bold">
          {title}
        </h3>
        <p className="text-xs " >
          {description}
        </p>
        <div className="flex flex-row  text-xs h-full">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-500 text-xs">APLICACION</span>
            {applications.map((app, index) => <span key={index}>{app}</span>)}
          </div>
    
          <div className="flex flex-col ml-4 overflow-y-auto" style={{ maxHeight: '100px' }}>
            <span className="font-semibold text-gray-500 text-xs">RESISTENCIA</span>
            {resistances.map((res, index) => (
              <span key={index} className="whitespace-pre-wrap">
                {res.name} <br /> {res.value}
              </span>
            ))}
          </div>
        </div>
        <a href="#" className="border-[#FEDE02] border-2 text-center hover:bg-[#FEDE02] font-bold px-4 py-2 self-start">Cotiza</a>
      </div>
      <img src={imageUrl} alt={altText} className="md:w-1/2   md:h-[70%] rounded-t-lg  md:rounded-l-none md:rounded-r-lg md:object-cover object-contain" />
    </div>
    
    );
  }
  