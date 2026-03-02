import { motion } from 'framer-motion';
import NumberTicker from '@/app/components/shared/NumberTicker';

function HeroStat({
  icon,
  value,
  label,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-background mb-1 flex justify-center items-center">
        {!isNaN(numericValue) ? (
          <>
            <NumberTicker value={numericValue} />
            <span>{suffix}</span>
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-[10px] md:text-sm text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

export default HeroStat;
