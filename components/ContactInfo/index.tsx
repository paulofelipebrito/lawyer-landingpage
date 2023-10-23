import LocationIcon from "../Icons/LocationIcon";
import PhoneIcon from "../Icons/PhoneIcon";

const ContactInfo = () => {
  return (
    <div className="flex items-center justify-between w-full bg-[#F2F3ED] max-w-6xl">
      <div className="flex items-center justify-between gap-2">
        <span><LocationIcon /></span>
        <span className="text-defaultColor text-sm font-light font-sans">Av Republica do Líbano, 251 Torre 3, Sala 2801 - Pina, Recife PE</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span><PhoneIcon /></span>
        <a href="tel:81999439956" className="text-defaultColor text-sm font-light font-sans">(81) 99943-9956</a>
      </div>
    </div>
  )
}

export default ContactInfo;