import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaPhoneVolume,
  FaConciergeBell,
  FaRegEnvelopeOpen,
  FaSuitcaseRolling,
} from "react-icons/fa";

export default function BusinessModel() {
  return (
    <div className="bg-[#ECFAFB] md:py-16 px-6 flex justify-center">
      <div className="relative flex flex-col items-center justify-center w-full max-w-2xl p-8">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50"></div>

        <h2 className="text-4xl jost-bold mb-20 relative z-10 text-center">
          How <span className="text-blue-400">HotelNow</span> Works?
        </h2>

        <div className="relative w-full max-w-5xl">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2"></div>

          {/* Steps Container */}
          <div className="space-y-16 flex flex-col items-center">
            <StepCard
              icon={<FaClipboardList className="text-blue-500 text-5xl" />}
              title="User Submits a Request"
              description="Customers fill out their hotel requirements on our platform."
            />

            <StepCard
              icon={<FaPhoneVolume className="text-blue-500 text-5xl" />}
              title="Our Team Contacts Them"
              description="We verify details and assist with selecting the best options."
              alignRight
            />

            <StepCard
              icon={<FaConciergeBell className="text-blue-500 text-5xl" />}
              title="Hotel Booking is Confirmed"
              description="We finalize the reservation and secure the best deal."
            />

            <StepCard
              icon={<FaRegEnvelopeOpen className="text-blue-500 text-5xl" />}
              title="Booking Details Sent"
              description="Users receive a confirmation email with all the necessary details."
              alignRight
            />

            <StepCard
              icon={<FaSuitcaseRolling className="text-blue-500 text-5xl" />}
              title="Customer Checks In"
              description="Customers arrive at their hotel and enjoy a seamless stay."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Card Component
const StepCard = ({ icon, title, description, alignRight = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex w-full ${
        alignRight ? "justify-end" : "justify-start"
      } -mt-8`}
    >
      {/* Connecting Dot */}
      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 translate-y-[-50%] border border-blue-400"></div>

      <div className="relative z-10 bg-white/90 backdrop-blur-lg shadow-xl p-6 rounded-xl w-64 sm:w-72 flex flex-col items-center text-center border border-white/20">
        {icon}
        <h3 className="text-lg sm:text-xl font-semibold mt-4 jost-regular">
          {title}
        </h3>
        <p className="mt-2 text-sm sm:text-base jost-light">{description}</p>
      </div>
    </motion.div>
  );
};
