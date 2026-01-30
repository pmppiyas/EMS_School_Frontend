import { motion } from "framer-motion";


const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="text-center p-8 rounded-2xl bg-white border border-gray-50 hover:shadow-xl transition-all"
  >
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);


export default FeatureCard;
